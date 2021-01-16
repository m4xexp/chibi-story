import Nav from './components/Nav';
import ChibliPost from './components/ChibliPost';
import chiblis from './Data/Chibli';
import React, { useState } from "react";
import TattooItem from './components/TattooItem';

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
      <div className="search-bar m-10 ">
            <form className="relative">
                <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input 
                className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" 
                type="text" 
                value={ searchText } 
                placeholder="Find what you want" 
                onChange={(event) => { setSearchText(event.target.value) }} />
            </form>
        </div>
      <ul className="grid grid-cols-3 gap-6 px-12">
        {chibliElements}
      </ul>
      {chibliPost}
    </div>
  );
}

export default App;
