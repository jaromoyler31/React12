import './App.css';
import React, { useState } from 'react';

import {character, treasure, landMarks, verb} from "./arrays"


export let numberOfMonsters
export let NumberOfNPC
let verb12 = 2
export let randomMonsterInfo //important
export let randomLandMark //important
export let randomTreasure //important 
export let randomVerb // important
export let randomNPCinfo // important
export let randomEffect
export let decisionN
export let randomMonster


//Getting Stats for Monsters
export let monsterSkills
export let monsterActions
export let monsterType
export let monsterSize
export let monsterAC
export let monsterHP
export let monsterSpeed
export let monsterStr
export let monsterDex
export let monsterCon
export let monsterInt
export let monsterWis
export let monsterCha
export let monsterLang


//Getting Stats for NPCs
export let npcSkills
export let npcActions
export let npcType
export let npcSize
export let npcAC
export let npcHP
export let npcSpeed
export let npcStr
export let npcDex
export let npcCon
export let npcInt
export let npcWis
export let npcCha
export let npcLang

//level 1-5
async function getDataMonster1_5() {
    let decision = Math.floor(Math.random() *3+1)
    randomMonster = character.monster.M1_5[Math.floor(Math.random()*character.monster.M1_5.length)] 

    let randomNPC = character.npc[Math.floor(Math.random()*character.npc.length)]
    console.log("----------------------------------------------------")
    decisionN = decision
    console.log("Level 1-5")
    if(decision === 1){
        //Just NPC
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());
        let rating = npc.results[0].challenge_rating
        console.log(npc)
        verb12 = 1

        

        randomMonster = null

        if(rating === "0" || rating === "1/8" || rating === "1/4"){
            NumberOfNPC = Math.floor(Math.random()*6+2);
        }else if(rating === "1/2" || rating === "1"){
            NumberOfNPC = Math.floor(Math.random()*3+1);
        }else{
            NumberOfNPC = 1
        }
        console.log(NumberOfNPC+" "+npc.results[0].name)
        
        randomNPCinfo = npc.results[0].name

        // getting NPC stats
        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions

        getDataVerb()
        return npc

    }else if(decision === 2){ 
        //Just Monster
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster)

        // getting stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterActions = monster.results[0].actions
        monsterSkills = monster.results[0].special_abilities

        let rating = monster.results[0].challenge_rating
        verb12=2

        if(rating === "1/4"){
            console.log("1/4")
            numberOfMonsters = Math.floor(Math.random()*6+2)
        }else if(rating === "1/2"){
            console.log("1/2")
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(rating === "1"){
            numberOfMonsters = 1
        }


        console.log(numberOfMonsters+" "+monster.results[0].name)
        randomMonsterInfo = monster.results[0].name
        console.log(randomMonsterInfo)
        getDataVerb()
        return monster


    } else if (decision === 3){
        //Both
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());

        let ratingM = monster.results[0].challenge_rating
        let ratingNPC = npc.results[0].challenge_rating
        verb12 = 2


        

        if(ratingNPC === "0" || ratingNPC === "1/8" || ratingNPC === "1/4"){
            NumberOfNPC = Math.floor(Math.random()*6+2);
        }
        else if(ratingNPC === "1/2" || ratingNPC === "1"){
            NumberOfNPC = Math.floor(Math.random()*3+1);
        }
        else{
            NumberOfNPC = 1
        }

        console.log(npc)
        console.log(NumberOfNPC+" "+npc.results[0].name)
        getDataVerb()

        if(ratingM === "1/4"){
            numberOfMonsters = Math.floor(Math.random()*6+2)
        }else if(ratingM === "1/2"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(ratingM === "1"){
            numberOfMonsters = 1
        }
        console.log(monster)

        // getting stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterSkills = monster.results[0].special_abilities
        monsterActions = monster.results[0].actions


        console.log("1 "+monster.results[0].name)
        
        randomMonsterInfo =monster.results[0].name
        randomNPCinfo = npc.results[0].name
        
        // Getting NPC stats
        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions


        getDataVerb()
        return monster + " " + npc

    }
    
    
}
function getDataTreasure1_5(){
    randomTreasure = treasure.One_Five[Math.floor(Math.random()*treasure.One_Five.length)]
    console.log(randomTreasure)
}

//level 6-10
async function getDataMonster6_10() {
    let decision =Math.floor(Math.random() *3+1)
    let randomMonster =character.monster.M6_10[Math.floor(Math.random()*character.monster.M6_10.length)] 
    let randomNPC = character.npc[Math.floor(Math.random()*character.npc.length)]
    console.log("----------------------------------------------------")
    console.log("Level 6-10")
    if(decision === 1){
        //Just NPC
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());
        let rating = npc.results[0].challenge_rating
        console.log(npc)
        verb12 = 1
        
        randomMonster = null

        if(rating === "0" || rating === "1/8" || rating === "1/4"){
            NumberOfNPC = Math.floor(Math.random()*6+4);
        }else if(rating === "1/2" || rating === "1"){
            NumberOfNPC = Math.floor(Math.random()*3+2);
        }else if(rating === "2" || rating === "3" || rating === "4"){
            NumberOfNPC = Math.floor(Math.random()*2+1);
        }else{
            NumberOfNPC = 1
        }

        randomNPCinfo = npc.results[0].name
        
        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions

        console.log(NumberOfNPC+" "+npc.results[0].name)
        getDataVerb()
        return npc

    }else if(decision === 2){ 
        //Just Monster
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster)

        // getting stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterSkills = monster.results[0].special_abilities
        monsterActions = monster.results[0].actions

        let rating = monster.results[0].challenge_rating
        verb12=2

        if(rating === "1"){
            numberOfMonsters = Math.floor(Math.random()*5+4)
        }else if(rating === "2"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(rating === "3"){
            numberOfMonsters = Math.floor(Math.random()*5+1)
        }else if(rating === "4"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(rating === "5"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(rating === "6"){
            numberOfMonsters = Math.floor(Math.random()*1+1)
        }else if(rating === "7"){
            numberOfMonsters = Math.floor(Math.random()*1+1)
        }

        console.log(numberOfMonsters+" "+monster.results[0].name)
        randomMonsterInfo =monster.results[0].name

        getDataVerb()
        return monster


    } else if (decision === 3){
        //Both
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());

        let ratingM = monster.results[0].challenge_rating
        let ratingNPC = npc.results[0].challenge_rating
        verb12 = 2


        

        if(ratingNPC === "0" || ratingNPC === "1/8" || ratingNPC === "1/4"){
            NumberOfNPC = Math.floor(Math.random()*6+2);
        }
        else if(ratingNPC === "1/2" || ratingNPC === "1"){
            NumberOfNPC = Math.floor(Math.random()*3+1);
        }
        else{
            NumberOfNPC = 1
        }

        console.log(npc)
        console.log(NumberOfNPC+" "+npc.results[0].name)
        getDataVerb()

        if(ratingM === "1"){
            numberOfMonsters = Math.floor(Math.random()*5+4)
        }else if(ratingM === "2"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(ratingM === "3"){
            numberOfMonsters = Math.floor(Math.random()*5+1)
        }else if(ratingM === "4"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(ratingM === "5"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(ratingM === "6"){
            numberOfMonsters = Math.floor(Math.random()*1+1)
        }else if(ratingM === "7"){
            numberOfMonsters = Math.floor(Math.random()*1+1)
        }
        console.log(monster)
        console.log("1 "+monster.results[0].name)

        // getting stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterSkills = monster.results[0].special_abilities
        monsterActions = monster.results[0].actions
        
        randomMonsterInfo =monster.results[0].name
        randomNPCinfo = npc.results[0].name
        
        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions

        getDataVerb()
        return monster + " " + npc

    }
    
    
}
function getDataTreasure6_10(){
    randomTreasure = treasure.Six_Ten[Math.floor(Math.random()*treasure.Six_Ten.length)]
    console.log(randomTreasure)
}

//level 11-15
async function getDataMonster11_15() {
    let decision = Math.floor(Math.random() *3+1)
    randomMonster = character.monster.M11_15[Math.floor(Math.random()*character.monster.M11_15.length)] 
    let randomNPC = character.npc[Math.floor(Math.random()*character.npc.length)]
    console.log("----------------------------------------------------")

    console.log("Level 11-15")
    if(decision === 1){
        //Just NPC
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());
        let rating = npc.results[0].challenge_rating
        console.log(npc)
        verb12 = 1

        randomMonster = null

        if(rating === "0" || rating === "1/8" || rating === "1/4",rating === "1/2" || rating === "1"){
            NumberOfNPC = Math.floor(Math.random()*6+9);
        }else if(rating === "2" || rating === "3"|| rating === "3"){
            NumberOfNPC = Math.floor(Math.random()*6+4);
        }else{
            NumberOfNPC = 3
        }
        console.log(NumberOfNPC+" "+npc.results[0].name)

        randomNPCinfo = npc.results[0].name
        
        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions

        getDataVerb()
        return npc

    }else if(decision === 2){ 
        //Just Monster
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster)

        // getting stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterSkills = monster.results[0].special_abilities
        monsterActions = monster.results[0].actions

        let rating = monster.results[0].challenge_rating
        verb12=2

        if(rating === "5"){
            
            numberOfMonsters = Math.floor(Math.random()*2+3)
        }else if(rating === "6"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(rating === "7"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(rating === "8"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(rating === "9"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(rating === "10"){
            numberOfMonsters = 1
        }else if(rating === "11"){
            numberOfMonsters = 1
        }else if(rating === "12"){
            numberOfMonsters = 1
        }else if(rating === "13"){
            numberOfMonsters = 1
        }else if(rating === "14"){
            numberOfMonsters = 1
        }else if(rating === "15"){
            numberOfMonsters = 1
        }

        console.log(numberOfMonsters+" "+monster.results[0].name)

        randomMonsterInfo =monster.results[0].name

        getDataVerb()
        return monster


    } else if (decision === 3){
        //Both
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        const npc = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomNPC+"&document=&document__slug="
        ).then(result => result.json());

        let ratingM = monster.results[0].challenge_rating
        let ratingNPC = npc.results[0].challenge_rating
        verb12 = 2


        

        if(ratingNPC === "0" || ratingNPC === "1/8" || ratingNPC === "1/4",ratingNPC === "1/2" || ratingNPC === "1"){
            NumberOfNPC = Math.floor(Math.random()*6+9);
        }else if(ratingNPC === "2" || ratingNPC === "3"|| ratingNPC === "3"){
            NumberOfNPC = Math.floor(Math.random()*6+4);
        }else{
            NumberOfNPC = 3
        }

        console.log(npc)
        console.log(NumberOfNPC+" "+npc.results[0].name)
        getDataVerb()

        if(ratingM === "5"){
            
            numberOfMonsters = Math.floor(Math.random()*2+3)
        }else if(ratingM === "6"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(ratingM === "7"){
            numberOfMonsters = Math.floor(Math.random()*3+1)
        }else if(ratingM === "8"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(ratingM === "9"){
            numberOfMonsters = Math.floor(Math.random()*2+1)
        }else if(ratingM === "10"){
            numberOfMonsters = 1
        }else if(ratingM === "11"){
            numberOfMonsters = 1
        }else if(ratingM === "12"){
            numberOfMonsters = 1
        }else if(ratingM === "13"){
            numberOfMonsters = 1
        }else if(ratingM === "14"){
            numberOfMonsters = 1
        }else if(ratingM === "15"){
            numberOfMonsters = 1
        }
        console.log(monster)
        console.log("1 "+monster.results[0].name)
        

        //Getting Stats
        monsterType = monster.results[0].type
        monsterSize = monster.results[0].size
        monsterAC = monster.results[0].armor_class
        monsterHP = monster.results[0].hit_points
        monsterSpeed = monster.results[0].speed.walk
        monsterStr = monster.results[0].strength
        monsterDex = monster.results[0].dexterity
        monsterCon = monster.results[0].constitution
        monsterInt = monster.results[0].intelligence
        monsterWis = monster.results[0].wisdom
        monsterCha = monster.results[0].charisma
        monsterLang = monster.results[0].languages
        monsterSkills = monster.results[0].special_abilities
        monsterActions = monster.results[0].actions
        
        randomMonsterInfo =monster.results[0].name
        randomNPCinfo = npc.results[0].name

        npcType = npc.results[0].type
        npcSize = npc.results[0].size
        npcAC = npc.results[0].armor_class
        npcHP = npc.results[0].hit_points
        npcSpeed = npc.results[0].speed.walk
        npcStr = npc.results[0].strength
        npcDex = npc.results[0].dexterity
        npcCon = npc.results[0].constitution
        npcInt = npc.results[0].intelligence
        npcWis = npc.results[0].wisdom
        npcCha = npc.results[0].charisma
        npcLang = npc.results[0].languages
        npcSkills = npc.results[0].special_abilities
        npcActions = npc.results[0].actions

        getDataVerb()
        return monster + " " + npc

    }
    
    
}
function getDataTreasure11_15(){
    randomTreasure = treasure.Eleven_Fifteen[Math.floor(Math.random()*treasure.Eleven_Fifteen.length)]
    console.log(randomTreasure)
}

//All Levels
function getDataLandMarks(){
    let r = landMarks.all[Math.floor(Math.random()*landMarks.all.length)]
    randomLandMark = r.main
    randomEffect = r.Effect 
    console.log(randomLandMark)
}
function getDataVerb(){
    
    if(verb12 === 1){
        randomVerb = verb.humanoid[Math.floor(Math.random()*verb.humanoid.length)]
        console.log(randomVerb)
    }else if(verb12 === 2){
        randomVerb = verb.all[Math.floor(Math.random()*verb.all.length)]
        console.log(randomVerb)

    }
    
}



async function RandomMonster1(level){
    
    if(level === "1-5"){
        await Promise.all([getDataMonster1_5(),
        getDataLandMarks(),
        getDataTreasure1_5()])
    }else if(level === "6-10"){
        await Promise.all([
            getDataMonster6_10(),
            getDataLandMarks(),
            getDataTreasure6_10()
        ])

    } else if(level === "11-15"){
        await Promise.all([
            getDataMonster11_15(),
            getDataLandMarks(),
            getDataTreasure11_15()
        ])
    }
}



export default RandomMonster1; 
 
