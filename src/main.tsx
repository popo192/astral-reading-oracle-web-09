
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TarotProvider } from './contexts/TarotContext.tsx'

createRoot(document.getElementById("root")!).render(
  <TarotProvider>
    <App />
  </TarotProvider>
);
