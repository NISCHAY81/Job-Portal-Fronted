import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import 'dayjs/locale/en';



import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme="dark"> {/* or "light" */}
      <App />
    </MantineProvider>
  </StrictMode>
);
