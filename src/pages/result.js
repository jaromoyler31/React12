
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 
import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import { decisionN  } from '../randomMaster';
import useRandom from './useRandom';


export default function RandomResult({verb, landmark,treasure,npc, monster,numberMonster,numberNPC,randomLandMarkEffect}){
    const [open, setOpen] = useState(false);
    
    
    


    if(decisionN === 1){
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
                    <h1 className="text-light">{monster}</h1>
                    <Collapse in={open}>
                    
                        <div id="example-collapse-text" className="text-light">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
            </div>

            <div className='text-light'>
                <p>They are {numberMonster} {monster} at {landmark} The {monster} is {verb}</p> 

                <p>Landmark Effect: {landEffect}</p>
                <p>{treasure}</p>
            </div>
            </>

        )

    }else if(decisionN === 3){
        console.log("3333333333")
    }
}