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
import MWolf from "../assets/MWolf.png"
import MOoze from "../assets/MOoze.png"
import MScorp from "../assets/MScorp.png"
import MWing from "../assets/MWing.png"
import MLamp from "../assets/MLamp.png"
import MHoof from "../assets/MHoof.png"
import MDragon from "../assets/MDragon.png"
import MWorm from "../assets/MWorm.png"
import MOrc from "../assets/MOrc.png"
import MLeaf from "../assets/MLeaf.png"

import NFighter from "../assets/NFighter.png"
import NNormie from "../assets/NNormie.png"
import NStaff from "../assets/NStaff.png"
import NThug from "../assets/NThug.png"
import NRogue from "../assets/NRogue.png"

let new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]
export default function RandomResult({verbs, landmark,treasure,npc, monster,numberMonster,numberNPC,randomLandMarkEffect}){
    const [open, setOpen] = useState(false);
    new_verb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]

// GENERATING MONSTER ICONS
    
    const [imageURL, setImageURL] = useState(MDragon)

    useEffect( () => {
        if (monster === 'Boar' || monster === 'Wereboar') 
            setImageURL(MBoar)

        else if (monster === 'Panther' || monster === 'Tiger' || monster === 'Brown Bear' || monster === 'Black Bear' || monster === "Werebear" || monster === "Weretiger" || monster === "Bearfolk")
            setImageURL(MonsterImage)

        else if (monster === 'Wolf' || monster === 'Dire Wolf' || monster === 'Gnoll'|| monster === 'Werewolf')
            setImageURL(MWolf)

        else if (monster === 'Goblin' || monster === 'Hobgoblin' || monster === 'Bugbear' || monster === "Fire Imp" || monster === 'Imp' || monster === "Wererat" || monster === 'Chain Devil')
            setImageURL(MGoblinoid)

        else if (monster === 'Skeleton' || monster === 'Zombie' || monster === 'Ghast' || monster === 'Mummy' || monster === 'Ghost' || monster === 'Vampire' || monster === 'Wraith' || monster === 'Bone Devil' || monster === 'Mummy Lord')
            setImageURL(MUndead)

        else if (monster === 'Animated Armor' || monster === 'Shield Guardian')
            setImageURL(MArmor)

        else if (monster === 'Gray Ooze' || monster === "Rug of Smothering")
            setImageURL(MOoze)

        else if (monster === 'Orc' || monster === "Troll" || monster === 'Ogre' || monster === 'Stone Giant' || monster === 'Hill Giant' || monster === 'Clay Golem' || monster === 'Frost Giant' || monster === 'Storm Giant')
            setImageURL(MOrc)

        else if (monster === 'Air Elemental' || monster === 'Earth Elemental' || monster === 'Fire Elemental' || monster === 'Djinni')
            setImageURL(MLamp)

        else if (monster === 'Pegasus' || monster === 'Griffon' || monster === 'Harpy' || monster === 'Manticore' || monster === 'Roc')
            setImageURL(MWing)

        else if (monster === 'Giant Goat' || monster === 'Centaur' || monster === "Minotaur Skeleton" || monster === 'Minotaur' || monster === 'Unicorn')
            setImageURL(MHoof)

        else if (monster === 'Lizardfolk' || monster === 'White Dragon Wyrmling' || monster === 'Red Dragon Wyrmling' || monster === 'Wyvern' || monster === 'Young Black Dragon' || monster === 'Young Bronze Dragon' || monster === 'Young Silver Dragon' || monster === 'Young Gold Dragon' || monster === 'Adult Black Dragon' || monster === 'Adult Bronze Dragon' || monster === 'Adult Green Dragon' || monster === 'Adult Copper Dragon' || monster === 'Adult Brass Dragon')
            setImageURL(MDragon)

        else if (monster === 'Bearded Devil' || monster === 'Duergar')
            setImageURL(MDwarf)

        else if (monster === 'Giant Spider' || monster === 'Drider')
            setImageURL(MSpider)

        else if (monster === 'Purple Worm' || monster === 'Grick' || monster === 'Naga Guardian')
            setImageURL(MWorm)

        else if (monster === 'Giant Ant' || monster === 'Giant Scorpion')
            setImageURL(MScorp)

        else if (monster === 'Dryad' || monster === 'Awakened Tree')
            setImageURL(MLeaf)

        }, 
            [monster]
    ) 

// GENERATING NPC ICONS
    const [NPCImageURL, setNPCImageURL] = useState(NStaff)

    useEffect( () => {
        if (npc === 'Spy' || npc === 'Corpse Thief' || npc === 'Scout' || npc === 'Assassin' || npc === 'Cult Fanatic') 
            setNPCImageURL(NRogue)
        else if (npc === 'Mage' || npc === 'Druid' || npc === 'Cultist' || npc === 'Priest' || npc === 'Tribal Warrior')
            setNPCImageURL(NStaff)
        else if (npc === 'Commoner' || npc === 'Noble')
            setNPCImageURL(NNormie)
        else if (npc === 'Berserker' || npc === 'Guard' || npc === 'Gladiator' || npc === 'Knight' || npc === 'Veteran')
            setNPCImageURL(NFighter)
        else if (npc === 'Thug' || npc === 'Bandit Captain' || npc === 'Bandit')
            setNPCImageURL(NThug)
        else if (npc === 'Half-Red Dragon Veteran')
            setNPCImageURL(MDragon)
        }, 
            [npc]
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
                                    <img src={NPCImageURL} width="120px" />
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
                            <p>Treasure: {treasure} {}</p>
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
                        <p>Treasure: {treasure} {}</p>
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
                                <img src={NPCImageURL} width="120px" />
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