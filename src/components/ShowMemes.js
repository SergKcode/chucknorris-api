import React, {useState, useEffect} from 'react';

export const ShowMemes = () => {
    let [api, setApi] = useState('')
    let [apiloaded, setApiloaded] = useState(false)

    const getDatos=()=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setApi(data)
            setApiloaded(true)
        }
        ) 
    }
    
    useEffect(() => {
        getDatos()

    }, [])


    return (
        <div> 
            {/* {
            apiloaded &&
            <div>
              {
                api.map(jokes => <h1>{jokes.data}</h1>
                )
              }
              </div>
          } */}
          </div>
    )
}
