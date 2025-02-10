import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

import { SnackbarProvider } from 'notistack'
import { LanguageProvider } from './context/LanguageContext'
import { pdfjs } from 'react-pdf';
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './components/queryClient.tsx'

pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.mjs`;

const isProduction = import.meta.env.MODE === 'production'
const basename = isProduction ? '/Portfolio-ubb/' : '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <SnackbarProvider maxSnack={5}>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  </SnackbarProvider>
  // </React.StrictMode>,
)
