import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

import { SnackbarProvider } from 'notistack'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <SnackbarProvider maxSnack={5}>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </SnackbarProvider>
  // </React.StrictMode>,
)
