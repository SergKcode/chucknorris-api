import React from 'react'

export const ApiLoaded = ({loaded}) => {
    console.log(loaded)

    
    return (
        <div>
            {loaded && 
                <div className= "winner">
                    <h2>show value choosen</h2>
                </div>
            }
            
        </div>
    )
}
