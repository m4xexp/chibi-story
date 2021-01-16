import Nav from './components/Nav';
import ChibliPost from './components/ChibliPost';
import chiblis from './Data/Chibli';
import React, { useState } from "react";
import TattooItem from './components/TattooItem';
import SearchBar from './components/SearchBar';

function App() {

  const [selectedChibli, setSelectedChibli] = useState(null);
  const [searchText, setSearchText] = useState('');

  // const filteredChiblis = chiblis.filter((chibli) => {
  //   return chibli.title.includes(searchText)
  // });
  // console.log('search text here',searchText);
  const filteredText = chiblis.filter((chibli)=>{return chibli.title.includes(searchText)});
  console.log(filteredText);

  const chibliElements = filteredText.map((chibli, index) => {
    return <TattooItem key={index} chibli={chibli} onChibliClick={onClickChibli} />;
  })

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
      <SearchBar value={searchText} onValueChange={setSearchText}/>
      <ul className="grid lg:grid-cols-3 gap-6 px-12 md:grid-cols-2 grid-cols-1">
        {chibliElements}
      </ul>
      {chibliPost}
    </div>
  );
}

export default App;
