# DataForger

DataForger is a tool to visualize unstructured data (PDF, CSV, TXT) using large language models (LLMs) and provide cleaned data with a modern dynamic dashboard. Output data can be downloaded as a CSV file and viewed in Google Doc Viewer or Microsoft Excel.

## Features

- File Integration Engine
  - Secured file uploads (maximum 5 MB)
  - Parsing layers: `csv-parser` for CSV files, `pdf-parse` for PDF files, Node.js `readline` for TXT files
- AI-driven structuring engine for data
- Smart auto-detect dashboard
  - Data typification
  - Dynamic rendering
  - Clean table views
- Export data as CSV

## How it Works

```text
[User Uploads File] ──> [Express Backend Engine] ──> [Data Standardization] ──> [React Dynamic Dashboard]
(Text, PDF, CSV)       (Multer + Parsers / LLM)      (Clean JSON Schema)       (Recharts + CSV Export)
```
