import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 
import {randomMonsterInfo, randomLandMark, randomTreasure, randomVerb,randomNPCinfo, numberOfMonsters, NumberOfNPC, randomEffect} from "../randomMaster"
import Reuslt from "./result"


export default function Encounter() {

    const [open, setOpen] = useState(false);
    
    const [level, setLevel ] = useState(1-5)

    const [verb, setVerb] = useState()
    const [landmark, setLandMark] =useState()
    const [treasure, setTreasure] =useState()
    const [npc, setNPC] =useState()
    const [monster, setMonster] =useState()
    const [numberMonster, setNumberMonster] =useState()
    const [numberNPC, setNumberNPC] =useState()
    const [randomLandMarkEffect, setRandomEffect] =useState()


    const clickHandle = event => {
        event.preventDefault()
        RandomMonster1(level)
        setVerb(randomVerb)
        setLandMark(randomLandMark)
        setMonster(randomMonsterInfo)
        setTreasure(randomTreasure)
        setNPC(randomNPCinfo)
        setNumberNPC(NumberOfNPC)
        setNumberMonster(numberOfMonsters)
        setRandomEffect(randomEffect)
        
    }
    
    return ( 
    <>
        <NavComp></NavComp>
        <div>
            <form>
            <label className="text-light"> Select Difficulty: 
                <select name="level" onChange={(e)=> setLevel(e.target.value)}>
                    <option value= {null} >Select Level </option>
                    <option value="1-5">Levels 1-5</option>
                    <option value="6-10">Levels 6-10</option>
                    <option value="11-15">Levels 11-15</option>
                </select>
            </label>
            <br />
            <input className="landing-button" type="submit" value="Generate Encounter" onClick={clickHandle} />
            </form>
            <div className="npc-stats">
                <span
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                ><i className="bi bi-chevron-down"></i></span>
                <div className='hodler'>
                    <h1>Monster Name</h1>
                    <Collapse in={open}>
                    
                        <div id="example-collapse-text" className="text-light">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
        <div className='text-light'>
            <p>They are {numberMonster} {monster} at {landmark} The {monster} is {verb}</p> 

            <p>{treasure}</p>
        </div>
    </>
    )
  }
