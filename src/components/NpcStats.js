import { npcAC, npcHP, npcSpeed, npcStr, npcDex, npcCon, npcInt, npcWis, npcCha, npcLang, npcActions, npcSkills } from '../randomMaster';
import Table from 'react-bootstrap/Table';


export default function MonsterStats() {
  return (
    <>
    <Table responsive>
        <thead className="text-white">
            <tr>
                <th>STR</th>
                <th>DEX</th>
                <th>CON</th>
                <th>INT</th>
                <th>WIS</th>
                <th>CHA</th>
            </tr>
        </thead>
        <tbody className="text-white">
            <tr>
                <td>{npcStr}</td>
                <td>{npcDex}</td>
                <td>{npcCon}</td>
                <td>{npcInt}</td>
                <td>{npcWis}</td>
                <td>{npcCha}</td>
            </tr>
        </tbody>
    </Table>
    <div className="d-flex flex-column">
        <div className="d-flex justify-content-between ps-4">
            <div>
                <span>Armor Class: </span>{npcAC}
            </div>
            <div className="ps-2">
                <span>Hit Points: </span>{npcHP}
            </div>
            <span></span>
        </div>
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-between px-4">
            <div>
                <span>Speed:  </span>{npcSpeed}ft
            </div>
            <div>
                <span>Languages </span>{npcLang}
            </div>
        </div>
    </div>
    </div>
    <hr></hr>
    {skills()}
    <hr></hr>
    {actions()}
    </>
  );
}


function skills(){
    
    if(npcSkills.length===1){
        return(
            <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
        )
     }
    if(npcSkills.length===2){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
            </>
            
        )
     }
    if(npcSkills.length===3){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>

            </>
            
        )
    }
    if(npcSkills.length===4){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>
                <li><span>{npcSkills[3].name}: </span>{npcSkills[3].desc}</li>
            </>
            
        )
     }
    if(npcSkills.length===5){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>
                <li><span>{npcSkills[3].name}: </span>{npcSkills[3].desc}</li>
                <li><span>{npcSkills[4].name}: </span>{npcSkills[4].desc}</li>

            </>
            
        )
    }if(npcSkills.length===6){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>
                <li><span>{npcSkills[3].name}: </span>{npcSkills[3].desc}</li>
                <li><span>{npcSkills[4].name}: </span>{npcSkills[4].desc}</li>
                <li><span>{npcSkills[5].name}: </span>{npcSkills[5].desc}</li>


            </>
            
        )
    }if(npcSkills.length===7){
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>
                <li><span>{npcSkills[3].name}: </span>{npcSkills[3].desc}</li>
                <li><span>{npcSkills[4].name}: </span>{npcSkills[4].desc}</li>
                <li><span>{npcSkills[5].name}: </span>{npcSkills[5].desc}</li>
                <li><span>{npcSkills[6].name}: </span>{npcSkills[6].desc}</li>



            </>
            
        )
    }
    if(npcSkills.length===0){
        return(
            <h2>skills:none</h2>
        )        
    }else{
        return(
            <>
                <li><span>{npcSkills[0].name}: </span>{npcSkills[0].desc}</li>
                <li><span>{npcSkills[1].name}: </span>{npcSkills[1].desc}</li>
                <li><span>{npcSkills[2].name}: </span>{npcSkills[2].desc}</li>
                <li><span>{npcSkills[3].name}: </span>{npcSkills[3].desc}</li>
                <li><span>{npcSkills[4].name}: </span>{npcSkills[4].desc}</li>
                <li><span>{npcSkills[5].name}: </span>{npcSkills[5].desc}</li>
            </>
            
        )
    }
    
    



    
}

function actions(){
    if(npcActions.length === 1){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
            </>
        )
    }if(npcActions.length === 2){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>

            </>
        )
    }if(npcActions.length === 3){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>
                <li><span>{npcActions[2].name}: </span>{npcActions[2].desc}</li>


            </>
        )
    }if(npcActions.length === 4){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>
                <li><span>{npcActions[2].name}: </span>{npcActions[2].desc}</li>
                <li><span>{npcActions[3].name}: </span>{npcActions[3].desc}</li>



            </>
        )
    }if(npcActions.length === 5){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>
                <li><span>{npcActions[2].name}: </span>{npcActions[2].desc}</li>
                <li><span>{npcActions[3].name}: </span>{npcActions[3].desc}</li>
                <li><span>{npcActions[4].name}: </span>{npcActions[4].desc}</li>
            </>
        )
    }if(npcActions.length === 6){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>
                <li><span>{npcActions[2].name}: </span>{npcActions[2].desc}</li>
                <li><span>{npcActions[3].name}: </span>{npcActions[3].desc}</li>
                <li><span>{npcActions[4].name}: </span>{npcActions[4].desc}</li>
                <li><span>{npcActions[5].name}: </span>{npcActions[5].desc}</li>

            </>
        )
    }if(npcActions.length === 7){
        return(
            <>
                <li><span>{npcActions[0].name}: </span>{npcActions[0].desc}</li>
                <li><span>{npcActions[1].name}: </span>{npcActions[1].desc}</li>
                <li><span>{npcActions[2].name}: </span>{npcActions[2].desc}</li>
                <li><span>{npcActions[3].name}: </span>{npcActions[3].desc}</li>
                <li><span>{npcActions[4].name}: </span>{npcActions[4].desc}</li>
                <li><span>{npcActions[5].name}: </span>{npcActions[5].desc}</li>
                <li><span>{npcActions[6].name}: </span>{npcActions[6].desc}</li>
            </>
        )
    }
    
    
    
}