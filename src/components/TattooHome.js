import React from 'react'
import TattooItem from '../components/TattooItem'
import chiblis from '../Data/Chibli'
import onClickChibli from '../App'

function TattooHome() {
    
    const chibliElements = chiblis.map((chibli,index) => {
        return <TattooItem key={index} chibli={chibli} onChibliClick={onClickChibli} />;
    })

    return (
        <ul className="grid grid-cols-3 gap-6 px-12">
            {chibliElements}
        </ul>
    )
}

export default TattooHome
