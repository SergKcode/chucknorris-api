import React, {useState} from 'react';

export const ShowMemes = () => {
    let [api, setApi] = useState('')
    let [apiloaded, setApiloaded] = useState(false)

    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        setApi(data)
        setApiloaded(true)
    }
    ) 



    return (
        <div> 
     {
            apiloaded &&
            <div>
              {
                api.map(jokes => <h1>{jokes.data}</h1>
                )
              }
              </div>
          }
          </div>
    )
}
