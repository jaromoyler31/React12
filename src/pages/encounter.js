import NavComp from '../components/NavComp';
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 
import {randomMonsterInfo, randomLandMark, randomTreasure, randomVerb,randomNPCinfo, numberOfMonsters, NumberOfNPC, randomEffect} from "../randomMaster"
import RandomResult from "./result"
import useRandom from './useRandom';

export default function Encounter() {

    
    
    const [level, setLevel ] = useState(1-5)

    
    const {verbs,setVerb, landmark,setLandMark,treasure,setTreasure,npc,setNPC, monster,setMonster,numberMonster,setNumberMonster,numberNPC,setNumberNPC,randomLandMarkEffect,setRandomEffect} = useRandom()

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
            <form className="my-5">
            <label className="text-light"> Select Difficulty:   
                <select className="ms-2" name="level" onChange={(e)=> setLevel(e.target.value)}>
                    <option value= {null} >Select Level </option>
                    <option value="1-5">Levels 1-5</option>
                    <option value="6-10">Levels 6-10</option>
                    <option value="11-15">Levels 11-15</option>
                </select>
            </label>
            <br />
            <input className="mt-5 px-4 py-2" type="submit" value="Generate Encounter" onClick={clickHandle} />
            </form>


            <RandomResult verbs = {verbs} landmark={landmark} treasure={treasure} npc={npc} monster={monster} numberMonster={numberMonster} numberNPC={numberNPC} randomLandMarkEffect={randomLandMarkEffect}></RandomResult>

            
        </div>
        
    </>
    )
  }
