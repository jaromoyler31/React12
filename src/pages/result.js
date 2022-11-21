
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 
import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import {randomMonsterInfo, randomLandMark, randomTreasure, randomVerb,randomNPCinfo, numberOfMonsters, NumberOfNPC, randomEffect} from "../randomMaster"
import { decisionN  } from '../randomMaster';

export default function Reuslt(){
    const [open, setOpen] = useState(false);



   



    if(decisionN === 1){
        console.log("11111111")
        return(
            <>
            <div className="npc-stats">
                <span
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                ><i className="bi bi-chevron-down"></i></span>
                <div className='hodler'>
                    <h1>{}</h1>
                    <Collapse in={open}>
                    
                        <div id="example-collapse-text" className="text-light">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
            </div>

            <div>
                {/* <p>They are {numberMonster} {monster} at {landmark} The {monster} is {verb}</p>  */}
            </div>
            </>
        )
    }else if(decisionN === 2){
        console.log("222222222")
    }else if(decisionN === 3){
        console.log("3333333333")
    }
}