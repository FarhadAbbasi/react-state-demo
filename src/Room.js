import React from 'react';
import './index.css';
import { useState } from 'react';

function Room () {

    // const state = useState (true) ;
    // console.log( "Stete = ", state) ;
    let [isLit , setLit] = useState (true) ;
    let [age, setage] = useState(25) ; 

    // function updatelit (){
    //     console.log ("Button Clicked") ;
    //     // isLit = ! isLit ;           // Doesn't update the value in UI
    //     setLit(!isLit) ;
    // }

    // const updateage =   ()=> {
    //     console.log ("Button Clicked") ;
    //     setage (++age)
    // }


    return <div className="Room">
        This is Room component.
        <br/>
        {/* Lit = {isLit} */}
        <br/>
        The room is : {isLit ? "Lit" : "Dark"} <br/>
        The age is : {age}
        <br/><br/>
        {/* <button onClick= {updatelit}> Toggle Light </button> */}
        <button onClick= {()=> setLit(!isLit)}> Toggle Light </button>
        <br/><br/>
        {/* <button onClick= {updateage}> Increment Age </button> */}

        <button onClick= { ()=> { console.log ("Age increment  arrow func") ;
                                setage (++age) ; 
                            }}
                            > 
        Increment Age </button>


    </div>

}


export default Room;
