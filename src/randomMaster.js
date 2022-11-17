import './App.css';
import {character, treasure, landMarks, verb} from "./arrays"

let numberOfMonsters
let NumberOfNPC
let additionMonster = null
let verb12 = 2
let randomLandMark //important
let randomTreasure //important 
let randomVerb // important


//level 1-5
async function getDataMonster1_5() {
    let decision = Math.floor(Math.random() *3+1)
    let randomMonster = character.monster.M1_5[Math.floor(Math.random()*character.monster.M1_5.length)] 
    let randomNPC = character.npc[Math.floor(Math.random()*character.npc.length)]
    
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

        getDataVerb()
        return npc

    }else if(decision === 2){ 
        //Just Monster
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster)
        let rating = monster.results[0].challenge_rating
        verb12=2

        if(rating === "1/4"){
            console.log("1/4")
            numberOfMonsters = Math.floor(Math.random()*6+2)
            additionMonster = null
        }else if(rating === "1/2"){
            console.log("1/2")
            numberOfMonsters = Math.floor(Math.random()*2+1)
            additionMonster = null
        }else if(rating === "1"){
            numberOfMonsters = 1
            additionMonster = true
        }

        if (additionMonster === true){
            const monster2nd = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+character.monster.M1_5[numberOfMonsters = Math.floor(Math.random()*6)] +"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster2nd)
        console.log("1 "+monster.results[0].name +", 1 " + monster2nd.results[0].name)
        return monster + monster2nd
        

        }
        console.log(numberOfMonsters+" "+monster.results[0].name)

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

        if(ratingM === "1/4"){
            console.log("1/4")
            numberOfMonsters = Math.floor(Math.random()*6+2)
            additionMonster = null
        }else if(ratingM === "1/2"){
            console.log("1/2")
            numberOfMonsters = Math.floor(Math.random()*2+1)
            additionMonster = null
        }else if(ratingM === "1"){
            numberOfMonsters = 1
            additionMonster = null
        }
        console.log(monster)
        console.log("1 "+monster.results[0].name)
        
        
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
    additionMonster = null
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
        
        console.log(NumberOfNPC+" "+npc.results[0].name)

        getDataVerb()
        return npc

    }else if(decision === 2){ 
        //Just Monster
        const monster = await fetch("https://api.open5e.com/monsters/?challenge_rating=&armor_class=&type=&name="+randomMonster+"&document=&document__slug="
        ).then(result => result.json());
        console.log(monster)
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
        
        
        getDataVerb()
        return monster + " " + npc

    }
    
    
}
function getDataTreasure6_10(){
    randomTreasure = treasure.Six_Ten[Math.floor(Math.random()*treasure.Six_Ten.length)]
    console.log(randomTreasure)
}


//All Levels
function getDataLandMarks(){
    randomLandMark = landMarks.all[Math.floor(Math.random()*landMarks.all.length)]
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






function RandomMonster() {
    

    return (
      <div className='App-header'>

        <button className='App' onClick={ ()=> {
            getDataMonster1_5()
            getDataLandMarks()
            getDataTreasure1_5()
            

        }}>1-5</button>

        <button className='App' onClick={ ()=> {
            getDataMonster6_10()
            getDataLandMarks()
            getDataTreasure6_10()
            

        }}>6-10</button>

        <button className='App'>11-15</button>
        
      </div>
    );
}



  
export default RandomMonster;