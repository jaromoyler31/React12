import React, { useEffect, useState } from 'react';
import RandomMonster1, {randomMonsterInfo, randomLandMark, randomTreasure, randomVerb,randomNPCinfo, numberOfMonsters, NumberOfNPC, randomEffect} from "../randomMaster"

export default function useRandom(level){
    const [isReady, setIsReady] = useState();
    const [verbs, setVerb] = useState()
    const [landmark, setLandMark] =useState()
    const [treasure, setTreasure] =useState()
    const [npc, setNPC] =useState()
    const [monster, setMonster] =useState()
    const [numberMonster, setNumberMonster] =useState()
    const [numberNPC, setNumberNPC] =useState()
    const [randomLandMarkEffect, setRandomEffect] =useState()

    const init = async () => {
        if(level) {
            await RandomMonster1(level);
            setIsReady(true)
        }
    }

    useEffect(() => {
        init();
    }, [])

    return(
        {isReady, verbs,setVerb, landmark,setLandMark,treasure,setTreasure,npc,setNPC, monster,setMonster,numberMonster,setNumberMonster,numberNPC,setNumberNPC,randomLandMarkEffect,setRandomEffect}
    )
}



