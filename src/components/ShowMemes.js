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


    return (
         
           <div> 
          
          </div>
    )
        }