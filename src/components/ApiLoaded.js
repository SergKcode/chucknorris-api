import React from 'react'

export const ApiLoaded = ({loaded}) => {
    console.log(loaded)
    const handleOnClick = () =>{
        console.log("a")

    }

    
    return (
        <div>
            {loaded && 
                <div className= "winner">
                    <h2>show value choosen</h2>
                    <button onClick={handleOnClick}>Get more options</button>
                </div>
            }
            
        </div>
    )
}
