import React from 'react'

function ChibliPost(props) {

    const { chibli,onChibliClose } = props

    return (
        <div className="chibli-post fixed top-0 bottom-0 left-0 right-0 z-999 flex justify-center items-center ">
            <div className="chibli-post-bg bg-black bg-opacity-75 top-0 absolute bottom-0 left-0 right-0" onClick={onChibliClose}/>
            <div className="chibli-post-content relative bg-white max-w-screen-md rounded p-4">
                <img src={ chibli.thumbnailUrl } alt="" className="block max-w-xl ml-auto mr-auto" />
                <h4 className="text-black text-center font-semibold m-6"> { chibli.title } </h4>
            </div>
        </div>
    )
}

export default ChibliPost
