```bash
uv venv
.venv/Scripts/activate # windows
source venv/bin/activate # Linux
uv sync
python -m uvicorn main:app --reload
```
