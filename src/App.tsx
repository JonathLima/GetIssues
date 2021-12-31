import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
