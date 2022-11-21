import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 
import {randomMonsterInfo, randomLandMark, randomTreasure, randomVerb,randomNPCinfo, numberOfMonsters, NumberOfNPC, randomEffect} from "../randomMaster"
import RandomResult from "./result"
import useRandom from './useRandom';

export default function Encounter() {

    
    
    const [level, setLevel ] = useState(1-5)

    
    const {verb,setVerb, landmark,setLandMark,treasure,setTreasure,npc,setNPC, monster,setMonster,numberMonster,setNumberMonster,numberNPC,setNumberNPC,randomLandMarkEffect,setRandomEffect} = useRandom()

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


            <RandomResult verb = {verb} landmark={landmark} treasure={treasure} npc={npc} monster={monster} numberMonster={numberMonster} numberNPC={numberNPC} randomLandMarkEffect={randomLandMarkEffect}></RandomResult>

            
        </div>
        
    </>
    )
  }
