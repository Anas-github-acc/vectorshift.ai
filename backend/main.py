from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from typing import List, Dict, Set
import asyncio


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

def create_graph(nodes: List[Node], edges: List[Edge]) -> Dict[str, List[str]]:
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)
    return graph

def is_dag(graph: Dict[str, List[str]]) -> bool:
    visited: Set[str] = set()
    rec_stack: Set[str] = set()

    def dfs(node: str) -> bool:
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                if not dfs(neighbor):
                    return False
            elif neighbor in rec_stack:
                return False
                
        rec_stack.remove(node)
        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False
    return True

async def stream_response(pipeline: Pipeline):
    tasks = [
        {"text": "Loading nodes..."},
        {"text": "Running pipeline..."},
        {"text": "Creating Graph..."},
        {"text": "Calculating DAG possibilities..."},
        {"text": "Done!"},
    ]
    
    try:
        for task in tasks:
            yield json.dumps(task)
            await asyncio.sleep(1)  
            
        graph = create_graph(pipeline.nodes, pipeline.edges)
        is_dag_result = is_dag(graph)
        response = {
            "num_nodes": len(pipeline.nodes),
            "num_edges": len(pipeline.edges),
            "is_dag": is_dag_result
        }
        yield json.dumps(response)
    except Exception as e:
        yield json.dumps({"error": str(e)})
    await asyncio.sleep(0)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    return StreamingResponse(stream_response(pipeline), media_type="application/json")