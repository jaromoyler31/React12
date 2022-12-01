import { monsterAC, monsterHP, monsterSpeed, monsterStr, monsterDex, monsterCon, monsterInt, monsterWis, monsterCha, monsterLang,monsterSkills,monsterActions } from '../randomMaster';
import Table from 'react-bootstrap/Table';


export default function MonsterStats() {
  return (
    <div>
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
                <td>{monsterStr}</td>
                <td>{monsterDex}</td>
                <td>{monsterCon}</td>
                <td>{monsterInt}</td>
                <td>{monsterWis}</td>
                <td>{monsterCha}</td>
            </tr>
        </tbody>

    </Table>
        <div>
            <ul>
                <li><span>Armor Class: </span>{monsterAC}</li>
                <li><span>Hit Points: </span>{monsterHP}</li>
                <li><span>Speed: </span>{monsterSpeed}ft</li>
                <li><span>Languages: </span>{monsterLang}</li>
                <hr></hr>
                {skills()}
                <hr></hr>
                {actions()}
            </ul>
        </div>
    </div>

  );
}
 

function skills(){
    
    if(monsterSkills.length===1){
        return(
            <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
        )
     }
    if(monsterSkills.length===2){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
            </>
            
        )
     }
    if(monsterSkills.length===3){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>

            </>
            
        )
    }
    if(monsterSkills.length===4){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>
                <li><span>{monsterSkills[3].name}: </span>{monsterSkills[3].desc}</li>
            </>
            
        )
     }
    if(monsterSkills.length===5){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>
                <li><span>{monsterSkills[3].name}: </span>{monsterSkills[3].desc}</li>
                <li><span>{monsterSkills[4].name}: </span>{monsterSkills[4].desc}</li>

            </>
            
        )
    }if(monsterSkills.length===6){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>
                <li><span>{monsterSkills[3].name}: </span>{monsterSkills[3].desc}</li>
                <li><span>{monsterSkills[4].name}: </span>{monsterSkills[4].desc}</li>
                <li><span>{monsterSkills[5].name}: </span>{monsterSkills[5].desc}</li>


            </>
            
        )
    }if(monsterSkills.length===7){
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>
                <li><span>{monsterSkills[3].name}: </span>{monsterSkills[3].desc}</li>
                <li><span>{monsterSkills[4].name}: </span>{monsterSkills[4].desc}</li>
                <li><span>{monsterSkills[5].name}: </span>{monsterSkills[5].desc}</li>
                <li><span>{monsterSkills[6].name}: </span>{monsterSkills[6].desc}</li>



            </>
            
        )
    }
    if(monsterSkills.length===0){
        return(
            <h2>skills:none</h2>
        )        
    }else{
        return(
            <>
                <li><span>{monsterSkills[0].name}: </span>{monsterSkills[0].desc}</li>
                <li><span>{monsterSkills[1].name}: </span>{monsterSkills[1].desc}</li>
                <li><span>{monsterSkills[2].name}: </span>{monsterSkills[2].desc}</li>
                <li><span>{monsterSkills[3].name}: </span>{monsterSkills[3].desc}</li>
                <li><span>{monsterSkills[4].name}: </span>{monsterSkills[4].desc}</li>
                <li><span>{monsterSkills[5].name}: </span>{monsterSkills[5].desc}</li>
            </>
            
        )
    }
    
    



    
}

function actions(){
    if(monsterActions.length === 1){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
            </>
        )
    }if(monsterActions.length === 2){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>

            </>
        )
    }if(monsterActions.length === 3){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>
                <li><span>{monsterActions[2].name}: </span>{monsterActions[2].desc}</li>


            </>
        )
    }if(monsterActions.length === 4){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>
                <li><span>{monsterActions[2].name}: </span>{monsterActions[2].desc}</li>
                <li><span>{monsterActions[3].name}: </span>{monsterActions[3].desc}</li>



            </>
        )
    }if(monsterActions.length === 5){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>
                <li><span>{monsterActions[2].name}: </span>{monsterActions[2].desc}</li>
                <li><span>{monsterActions[3].name}: </span>{monsterActions[3].desc}</li>
                <li><span>{monsterActions[4].name}: </span>{monsterActions[4].desc}</li>
            </>
        )
    }if(monsterActions.length === 6){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>
                <li><span>{monsterActions[2].name}: </span>{monsterActions[2].desc}</li>
                <li><span>{monsterActions[3].name}: </span>{monsterActions[3].desc}</li>
                <li><span>{monsterActions[4].name}: </span>{monsterActions[4].desc}</li>
                <li><span>{monsterActions[5].name}: </span>{monsterActions[5].desc}</li>

            </>
        )
    }if(monsterActions.length === 7){
        return(
            <>
                <li><span>{monsterActions[0].name}: </span>{monsterActions[0].desc}</li>
                <li><span>{monsterActions[1].name}: </span>{monsterActions[1].desc}</li>
                <li><span>{monsterActions[2].name}: </span>{monsterActions[2].desc}</li>
                <li><span>{monsterActions[3].name}: </span>{monsterActions[3].desc}</li>
                <li><span>{monsterActions[4].name}: </span>{monsterActions[4].desc}</li>
                <li><span>{monsterActions[5].name}: </span>{monsterActions[5].desc}</li>
                <li><span>{monsterActions[6].name}: </span>{monsterActions[6].desc}</li>
            </>
        )
    }
    
    
    
}