import React from 'react'
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme'
import App from './App'
import { GlobalProvider } from './context/GlobalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ChakraProvider>
  </React.StrictMode>
)
