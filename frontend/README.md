# NextBlock Frontend

Frontend React application for NextBlock real estate analysis dashboard.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Backend running at `http://127.0.0.1:8000`

### Installation

```bash
cd frontend
npm install
```

### Running the App

```bash
npm run dev
```

## 🏗 Architecture

The project follows a modular architecture:

```
src/
  api/          # Service layer for API communication
  components/   # UI components
  context/      # Global state management (Context API)
  pages/        # Page views
  routes/       # Routing configuration
```

### Data Flow

1. **Service Layer (`src/api`)**:
   - `axios.config.ts`: Configures the Axios instance (baseURL, timeouts).
   - `All.client.ts`: Defines types (`IAllData`) and fetching functions.

2. **Global Context (`src/context`)**:
   - `AllDataContext.tsx`: Fetches data on mount using the service layer. Exposes `data`, `loading`, `error` to the entire app.

3. **Components**:
   - `MapSection.tsx`: Consumes `useAllData()` to render the map dynamically.
   - `ZoneDetailPanel.tsx`: Displays details for the selected zone.

## 🗺 Map Integration

The map is built with `react-leaflet`.
- **Data Source**: Fetched via `http://127.0.0.1:8000/api/all`.
- **Classification**:
  - 🟢 **Alto Potencial**: Green
  - 🟡 **Estable**: Yellow
  - 🔴 **Sobrevalorada**: Red
- **Interaction**:
  - Zoom controls in bottom-right.
  - Hover tooltips.
  - Click to view details.

## 📦 Key Libraries

- **React Router**: Navigation
- **TailwindCSS + DaisyUI**: Styling
- **Recharts**: Analytics charts
- **React Leaflet**: Interactive maps
- **Axios**: HTTP Client
