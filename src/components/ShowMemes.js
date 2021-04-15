import React, {useState, useEffect} from 'react';

export const ShowMemes = () => {
    let [api, setApi] = useState('')
    let [apiOne, setApiOne] = useState('')
    let [apiloaded, setApiloaded] = useState(false)

    const getDatos=()=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data.value)
            setApi(data.value)
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(dataOne => {
            console.log(dataOne.value)
            setApiOne(dataOne.value)
            setApiloaded(true)
        }
        
        )
        
        })}


    useEffect(() => {
        getDatos()
            

    }, [])

      let [winner, setWinner] = useState(false)
      let [showWinner, setShowWinner] = useState(false)
      

      const handle = (e) => {
         setWinner(api)
         setShowWinner(true)
      }
      const handleTwo = (e) => {
        setWinner(apiOne) 
        setShowWinner(true)
     }

     const handleSubmit=(e)=>{
         console.log("a")
     }
     


    return (
        <div className="container">
            <div className="jokes-container">
                    
                <div className="jokes">
                    <div className="jokes-text">
                            <h1>{api}</h1>
                        </div>
                    <button className="button" onClick={handle}>Best Value </button>       
                </div>
                <div className="jokes">
                        <div className="jokes-text">
                            <h1>{apiOne}</h1>
                        </div>
                    <button className="button" onClick={handleTwo}>Best Value</button>         
                </div>
            </div>
            <div>
                    { showWinner && 
                        <div className= "winner">
                            <h1>The meme winner is : {winner}</h1>
                            <form onSubmit={handleSubmit}>
                                <button className="button"> Show new messages</button>
                            </form>
                    
                        </div>
                    }                         
            </div>
            
        </div>
    )
        }