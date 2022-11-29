import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { decisionN, npcStrength, monsterType, monsterSize } from '../randomMaster';
import MonsterStats from '../components/StatBlock'
import { verb } from '../arrays';
import MonsterImage from "../assets/MPaw.png"


let new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]


export default function RandomResult({verbs, landmark,treasure,npc, monster,numberMonster,numberNPC,randomLandMarkEffect}){
    const [open, setOpen] = useState(false);
    new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]
    


    if(decisionN === 1){
        let landEffect

        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return(
            <>
            <div className="npc-stats">
                <span
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                ><i className="bi bi-chevron-down"></i></span>
                <div className='hodler'>
                    <h1 className="text-light">{npc}</h1>
                    <Collapse in={open}>
                    
                        <div id="example-collapse-text" className="text-light">
                        {npcStrength}
                        </div>
                    </Collapse>
                </div>
            </div>

            <div className='text-light'>
                <p>There are {numberNPC} {npc} at {landmark} The {npc} is {verbs}</p> 

                <p>Landmark Effect: {landEffect}</p>
                <p>Treasure: {treasure} XP: {}</p>
            </div>
            </>

        )
    }else if(decisionN === 2){
        let landEffect
        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return(
            <>
            <div className="npc-stats">
                <div className='hodler'>
                    <h1 className="text-light">{monster}</h1>
                    <div className="text-light fst-italic">
                        <span>{monsterSize} </span> <span>{monsterType}</span>
                    </div>
                    <Collapse in={open}>
                        <div id="example-collapse-text" className="text-light">
                        <MonsterStats></MonsterStats>
                        </div>
                    </Collapse>
                </div>
            </div>

            <div className='text-light'>
                <p>They are {numberMonster} {monster} at {landmark} The {monster} is {verbs}</p> 

                <p>Landmark Effect: {landEffect}</p>
                <p>Treasure: {treasure} XP: {}</p>
            </div>
            </>

        )

    }else if(decisionN === 3){
        let landEffect
        
        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return(
            <>
            <div className="npc-stats">
                <div>
                    <div className="d-flex justify-content-center">
                        <img src={MonsterImage} width="150px" />
                        <div>
                            <div className="d-flex">
                                <h1 className="text-light">{monster}</h1>
                                <span
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                className="text-light"
                            ><i className="bi bi-chevron-down"></i></span>
                            </div>
                            <div className="text-light fst-italic d-flex">
                                <span>{monsterSize} {monsterType}</span>
                            </div>
                        </div>
                    </div>
                    <Collapse in={open}>
                    
                        <div id="example-collapse-text" className="text-light">
                        <MonsterStats></MonsterStats>
                        </div>
                    </Collapse>
                </div>
                <div className='hodler'>
                    <h1 className="text-light">{npc}</h1>
                    <Collapse in={open}>
                        <div id="example-collapse-text" className="text-light">
                        <p>{npcStrength}</p>
                        </div>
                    </Collapse>
                </div>
            </div>

            <div className='text-light'>
                <p>They are {numberNPC} {npc} and {numberMonster} {monster}  at {landmark} The {monster} is {verbs} and the {npc} is {new_verb}</p> 

                <p>Landmark Effect: {landEffect}</p>
                <p>Treasure: {treasure}</p>
            </div>
            </>

        )
    }
}