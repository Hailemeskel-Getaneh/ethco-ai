# Ethco AI 

The central monorepo for the Ethco AI ecosystem, featuring a brand-first mobile experience and proprietary multi-model intelligence.

## 📂 Repository Structure

| Directory | Description | Stack |
|-----------|-------------|-------|
| `apps/mobile` | **Mobile Application** | React Native, Expo, TypeScript |
| `apps/web` | **Web Platform** (Planned) | Next.js, Tailwind |
| `backend` | **Core API Gateway** | Node.js / Python |
| `model-servers` | **AI Inference Engines** | Python, FastAPI, PyTorch |
| `shared` | **Shared Packages** | TypeScript Types, Constants |
| `infra` | **Infrastructure** | Docker, K8s, Terraform |

## 🚀 Getting Started


### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Expo Go (for mobile dev)

### Mobile App Development
```bash
cd apps/mobile
npm install
npm run android # or npm run ios
npm run android # or npm run ios
```

See [apps/mobile/README.md](apps/mobile/README.md) for more mobile-specific documentation.

## 🔐 Architecture
This project follows a strict **Monorepo** architecture:
- **Code** lives here.
- **Model Weights** live in secure cloud storage.
- **Environment Variables** are not committed.

See [docs/architecture.md](docs/architecture.md) for detailed system design.
