import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import App from './Router';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
         </LocalizationProvider>
      </Provider>
   </React.StrictMode>
);
