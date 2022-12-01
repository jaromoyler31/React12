import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { decisionN, npcType, npcSize, monsterType, monsterSize } from '../randomMaster';
import { verb } from '../arrays';

// Importing Stat Blocks
import MonsterStats from '../components/MonsterStats'
import NpcStats from '../components/NpcStats'


// Importing Image Icons
import MonsterImage from "../assets/MPaw.png"
import MGoblinoid from "../assets/MGoblinoid.png"
import MUndead from "../assets/MUndead.png"
import MArmor from "../assets/MArmor.png"
import MSpider from "../assets/MSpider.png"
import MDwarf from "../assets/MDwarf.png"
import MBoar from "../assets/MBoar.png"


let new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]


export default function RandomResult({verbs, landmark,treasure,npc, monster,numberMonster,numberNPC,randomLandMarkEffect}){
    const [open, setOpen] = useState(false);
    new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]

    // GENERATING MONSTER ICONS
    
    const [imageURL, setImageURL] = useState(MDwarf)

    useEffect( () => {
        if (monster === 'Boar') 
            setImageURL(MBoar)

        else if (monster === 'Panther' || monster === 'Wolf' || monster === 'Dire Wolf'|| monster === 'Tiger' || monster === 'Brown Bear' || monster === 'Black Bear')
            setImageURL(MonsterImage)

        else if (monster === 'Goblin' || monster === 'Hobgoblin' || monster === 'Bugbear' || monster === "Fire Imp" || monster === 'Imp')
            setImageURL(MGoblinoid)

        else if (monster === 'Skeleton' || monster === 'Zombie' )
            setImageURL(MUndead)

        else if (monster === 'Animated Armor')
            setImageURL(MArmor)

        else if (monster === 'Giant Spider')
            setImageURL(MSpider)
        }, 
            [monster]
    ) 


    if(decisionN === 1){
        let landEffect

        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return  (
            <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <div className="holder mb-4">
                                <div className="d-flex">
                                    <img src={MonsterImage} width="120px" />
                                    <div className="w-100 mx-3 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <h1 className="text-light">{npc}</h1>
                                            <span
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                            className="text-light"
                                        ><i className="bi bi-chevron-down"></i></span>
                                        </div>
                                        <div className="text-light fst-italic d-flex">
                                            <span>{npcSize} {npcType}</span>
                                        </div>
                                    </div>
                                </div>
                                <Collapse in={open}>
                                    <div id="example-collapse-text" className="text-light">
                                    <NpcStats></NpcStats>
                                    </div>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                    <Row className='text-light'>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <p className="text-start">There are {numberNPC} {npc} at {landmark} The {npc} is {verbs}</p> 
                            <p className="text-start">Landmark Effect: {landEffect}</p>
                            <p>Treasure: {treasure} XP: {}</p>
                        </Col>
                    </Row>
            </Container>
        )

    }else if(decisionN === 2){
        let landEffect
        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return(
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="holder mb-4">
                            <div className="d-flex">
                             <img src={imageURL} width="120px" />
                                <div className="w-100 mx-3 mt-1">
                                    <div className="d-flex justify-content-between">
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
                    </Col>
                </Row>
                <Row className='text-light'>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p className="text-start">They are {numberMonster} {monster} at {landmark} The {monster} is {verbs}</p> 
                        <p className="text-start">Landmark Effect: {landEffect}</p>
                        <p>Treasure: {treasure} XP: {}</p>
                    </Col>
                </Row>
            </Container>
        )

    }else if(decisionN === 3){
        let landEffect
        
        if(randomLandMarkEffect === null){
            landEffect = "none"
        }else{
            landEffect = randomLandMarkEffect
        }
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="holder mb-4">
                            <div className="d-flex">
                            <img src={imageURL} width="120px" />
                                <div className="w-100 mx-3 mt-1">
                                    <div className="d-flex justify-content-between">
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
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="holder mb-4">
                            <div className="d-flex">
                                <img src={MonsterImage} width="120px" />
                                <div className="w-100 mx-3 mt-1">
                                    <div className="d-flex justify-content-between">
                                        <h1 className="text-light">{npc}</h1>
                                        <span
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        className="text-light"
                                    ><i className="bi bi-chevron-down"></i></span>
                                    </div>
                                    <div className="text-light fst-italic d-flex">
                                        <span>{npcSize} {npcType}</span>
                                    </div>
                                </div>
                            </div>
                            <Collapse in={open}>
                            
                                <div id="example-collapse-text" className="text-light">
                                <NpcStats></NpcStats>
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                </Row>
                <Row className='text-light'>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p className="text-start">There is {numberNPC} {npc} and {numberMonster} {monster} at {landmark}. The {monster} is {verbs} and the {npc} is {new_verb}</p> 
                        <p className="text-start">Landmark Effect: {landEffect}</p>
                        <p>Treasure: {treasure}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}