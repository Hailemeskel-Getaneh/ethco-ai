# System Architecture

## 1. Monorepo Overview
This repository follows a monorepo structure to house the entire AI platform code.

```
etcho-ai/
├── apps/
│   ├── mobile/        # React Native (Expo) - Mobile UI
│   ├── web/           # Next.js - Web UI (Future)
│
├── backend/
│   ├── api/           # Main backend API (Node/Python)
│   ├── services/      # Business logic
│
├── model-servers/     # Independent serving logic for AI models
│   ├── chat-model/
│   ├── reasoning-model/
│
├── shared/            # Shared types, constants, utilities
├── infra/             # Docker, Kubernetes, CI/CD configs
└── docs/              # System documentation
```

## 2. Component Guidelines

### Mobile App (`apps/mobile`)
- **Tech**: React Native (Expo)
- **Role**: Pure UI layer.
- **Rules**: No direct model inference. No heavy logic. Talks to Backend API.

### Model Servers (`model-servers/`)
- **Tech**: Python (FastAPI/Triton)
- **Role**: Serve trained model weights.
- **Storage**: Weights are stored in S3/Object Storage, NOT in this repo.
- **Behavior**: Download weights on startup -> Serve via API.

## 3. Deployment
- **Mobile**: App Stores (Apple/Google).
- **Web**: Vercel/Netlify.
- **Backend/Models**: AWS/GCP (ECS/Kubernetes).
