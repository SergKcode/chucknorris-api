import React from 'react'
import {useState} from 'react'
import {ApiLoaded} from './ApiLoaded'


export const ShowMemes = () => {
    
    const [loaded, setLoaded] = useState(true)
    


    return (
        <div>
            <ApiLoaded loaded={loaded}/>
            
        </div>
    )
}
