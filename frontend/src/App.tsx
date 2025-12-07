import AppRouter from './routes/AppRouter';
import { AllDataProvider } from './context/AllDataContext';

function App() {
  return (
    <AllDataProvider>
      <AppRouter />
    </AllDataProvider>
  );
}

export default App;
