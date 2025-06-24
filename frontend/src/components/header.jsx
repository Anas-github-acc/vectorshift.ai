import React, { useState } from 'react';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { useReactFlow } from '@xyflow/react';

import { IconPlayerPlay } from '@tabler/icons-react';
import { IconShare } from '@tabler/icons-react';
import { IconCurrencyDollar } from '@tabler/icons-react';

// multi-step-loader
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

// dialog
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog.jsx';
import { parse } from 'postcss';

export function Header() {
  const { getNodes, getEdges } = useReactFlow();
  const [streamCount, setStreamCount] = React.useState(0);
  const [result, setResult] = React.useState(null);
  const [processing, setProcessing] = React.useState(false);
  const [error, setError] = React.useState(null);


  const fetchStream = async () => {
    setStreamCount(0);
    setResult(null);
    setError(null);
    setProcessing(true);
    try {
      const nodes = getNodes();
      const edges = getEdges();
  
      const payload = {nodes, edges}
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
        responseType: 'stream',
      })

      if (!response) {
        throw new Error('Invalid response from server');
      }

      const reader = response.body.getReader();

      const decoder = new TextDecoder('utf-8');

      while(true) {
        const { done, value } = await reader.read();

        if (done) {
          console.log('Stream finished');
          break;
        }

        if (streamCount >= 4) {
          const chunk = decoder.decode(value, { stream: true });
          setResult(chunk);
        }
        setStreamCount(prevCount => prevCount + 1);
      }


    } catch (error) {
      setError(error);
    }
    setProcessing(false);
  }


  const handleRun = (e) => {
    e.preventDefault();
    fetchStream();
  };


  const icons = {
    share: <IconShare className="w-4 h-4" />,
    play: <IconPlayerPlay className="w-4 h-4" />,
    dollar: <IconCurrencyDollar className="w-4 h-4" />,
  }

  return (
    <header className="relative flex justify-between items-center box-border px-3 py-[8px] font-[500] ">
      {result && ( <Result result={result} /> )}
      {processing && <MultiStepLoader streamCount={streamCount} processing={processing}/>}
      <div>
        Some AI Company
      </div>
      <Input className="bg-background-2" className_2="w-[300px]"  variant="search" placeholder="Search..." icon="search"/>
      <div className='flex items-center gap-2 h-full'>
        <Button className="relative" variant="blue" size="md" icon={icons.dollar} icon_position_initial={true}>
          <p>Buy</p>
          {/* <Ping /> */}
        </Button>
        <hr className='bg-gray-100/15 w-[0.2px] h-4 rounded-full border-0 mx-[0.5px]' />
        <Button variant='primary' size="md" icon={icons.share}>Share</Button>
        <Button variant="green" size="md" icon={icons.play}
          onClick={handleRun}>Run</Button>
      </div>
    </header>
  )
}

let loadingStates = [
  {"text": "Parsing nodes & edges..."},
  {"text": "Setting up pipeline"},
  {"text": "Creating Graph..."},
  {"text": "Calculating DAG possibilities"},
  {"text": "Done!"},
]

export function MultiStepLoader({streamCount, processing}) {
  return (
    <div className="absolute top-0 right-0  w-full h-[100vh] flex items-center justify-center bg-background backdrop-blur-xl z-[100]">
      <Loader loadingStates={loadingStates} streamedCount={streamCount} loading={processing} />
    </div>
  );
}

export function Result({result}) {
  return (
    <Dialog defaultOpen={true} modal={true}>
      {/* <DialogTrigger open={true}>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Run Successfully!</DialogTitle>
          <DialogDescription>
            Thank you for running the pipeline. You can now view the results.
          </DialogDescription>
          <DialogDescription>
            <pre className="text-foreground p-10 text-md">{result}</pre>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}