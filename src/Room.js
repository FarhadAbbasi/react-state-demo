import React from 'react';
// import './index.css';
import './Room.css';
import { useState } from 'react';

function Room() {

    // const state = useState (true) ;
    // console.log( "Stete = ", state) ;
    let [isLit, setLit] = useState(false);
    let [age, setage] = useState(25);
    let [temp, settemp] = useState(22);

    // function updatelit (){
    //     console.log ("Button Clicked") ;
    //     // isLit = ! isLit ;           // Doesn't update the value in UI
    //     setLit(!isLit) ;
    // }

    // const updateage =   ()=> {
    //     console.log ("Button Clicked") ;
    //     setage (++age)
    // }


    return <div className={`room ${isLit ? "lit" : "dark"}`}>
        {/* Above function in className is used to switch between two different classes "lit" & "dark" to change the background through CSS. */}
        This is Room component.
        <br />
        {/* Lit = {isLit} */}
        <br />
        The room is : {isLit ? "Lit" : "Dark"} <br />
        {/* <button onClick= {updatelit}> Toggle Light </button> */}
        <button onClick={() => setLit(!isLit)}> Toggle Light </button>
        <br />
        <button onClick={() => { setLit(true); settemp(25) }} > Light ON </button>
        <button onClick={() => { setLit(false); settemp(22) }} > Light OFF</button>
        <br /><br />


        The age is : {age}
        <br />
        {/* <button onClick= {updateage}> Increment Age </button> */}
        <button onClick={() => {
            console.log("Age increment  arrow func");
            setage(++age);
        }} >
            Increment Age </button>
        <button onClick={() => setage(--age)}> decrement Age </button>
        <br /><br />

        Room temprature : {temp} C
        <br />
        <button onClick={() => settemp(++temp)} > + </button>
        <button onClick={() => settemp(--temp)} > - </button>


    </div>

}


export default Room;
