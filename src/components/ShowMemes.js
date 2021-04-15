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
    
    /*let [value, setValue] = useState('')
    const showMessage = () => {
        console.log(value);
      };
    let [valueOne, setValueOne] = useState('')
    const showMessageOne = () => {
        console.log(valueOne);
      };*/


      let [winner, setWinner] = useState(false)
      

      const handle = () => {
         setWinner(api)
      }
      const handleTwo = () => {
        setWinner(apiOne) 
     }


    return (
            <div className="container">
           <div className="jokes">
               <h1>{api}</h1>
               <button submit={handle}>Best Value </button>       
           </div>
           <div className="jokesOne">
               <h1>{apiOne}</h1>
               <button submit={handleTwo}>Best Value</button>         
           </div>
           <div>
              {winner}                         
           </div>
           </div>
    )
        }