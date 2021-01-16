import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import ChibliPost from './components/ChibliPost';
import chiblis from './Data/Chibli';
import React, { useEffect, useState } from "react";
import TattooItem from './components/TattooItem';

function App() {

  const chibliElements = chiblis.map((chibli, index) => {
    return <TattooItem key={index} chibli={chibli} onChibliClick={onClickChibli} />;
  })

  const [selectedChibli, setSelectedChibli] = useState(null);
  let chibliPost = null;
  if (!!selectedChibli) {
    chibliPost = <ChibliPost chibli={selectedChibli} onChibliClose={onCloseChibli}/>
  }

  function onClickChibli(selChibli) {
    setSelectedChibli(selChibli)
  }

  function onCloseChibli() {
    setSelectedChibli(null)
  }

  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <ul className="grid grid-cols-3 gap-6 px-12">
        {chibliElements}
      </ul>
      {chibliPost}
    </div>
  );
}

export default App;
