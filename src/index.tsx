
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import globalStyles from '@styles/globalStyles'
import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { AlertContextProvider } from './contexts/AlertContext';
import "./globals.css"

const client = new QueryClient({
  defaultOptions : {
    queries : {
      retry : 0,
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    <Global styles = {globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AlertContextProvider>
            <App />
        </AlertContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </>
  // </React.StrictMode>
);

reportWebVitals();
