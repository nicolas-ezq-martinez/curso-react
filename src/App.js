import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Perfumo from './components/Perfumo';
import Marcas from './components/Marcas';
import Tratamientos from './components/Tratamientos';
import Registro from './components/Registro';

const App = () => {
  const [pageShown, setPageShown] = useState(0);

  return (
    <div className="app">
      <Navbar setPageShown={setPageShown} />
      <div className="pages">
        <Perfumo show={pageShown === 0} />
        <Marcas show={pageShown === 1} />
        <Tratamientos show={pageShown === 2} />
        <Registro show={pageShown === 3} />
      </div>
    </div>
  );
};

export default App;
