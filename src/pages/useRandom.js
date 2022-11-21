import React, { useState } from 'react';

export default function useRandom(){
    const [verbs, setVerb] = useState()
    const [landmark, setLandMark] =useState()
    const [treasure, setTreasure] =useState()
    const [npc, setNPC] =useState()
    const [monster, setMonster] =useState()
    const [numberMonster, setNumberMonster] =useState()
    const [numberNPC, setNumberNPC] =useState()
    const [randomLandMarkEffect, setRandomEffect] =useState()

    return(
        {verbs,setVerb, landmark,setLandMark,treasure,setTreasure,npc,setNPC, monster,setMonster,numberMonster,setNumberMonster,numberNPC,setNumberNPC,randomLandMarkEffect,setRandomEffect}
    )
}



