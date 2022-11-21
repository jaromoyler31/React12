
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { decisionN  } from '../randomMaster';
import { verb } from '../arrays';
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
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
                <div className='hodler'>
                    <h1 className="text-light">{npc}</h1>
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
                <p>They are {numberNPC} {npc} and {numberMonster} {monster}  at {landmark} The {monster} is {verbs} and the {npc} is {new_verb}</p> 

                <p>Landmark Effect: {landEffect}</p>
                <p>Treasure: {treasure}</p>
            </div>
            </>

        )
    }
}