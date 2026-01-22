# Model Servers

This directory contains independent inference servers for proprietary AI models.

## Structure
Each model should run as its own isolated service (e.g., inside a Docker container).
Weights should be loaded from external storage (S3), not stored in this repo.

## Example Stack
- Python
- FastAPI
- PyTorch / TensorFlow
