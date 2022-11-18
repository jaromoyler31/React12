import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import RandomMonster1 from '../randomMaster'; 



export default function Encounter() {

    const [open, setOpen] = useState(false);
    
    const [level, setLevel ] = useState(1-5)

    const clickHandle = event => {
        event.preventDefault()
        RandomMonster1(level)
    }
    
    return ( 
    <>
        <NavComp></NavComp>
        <div>
            <form>
            <label className="text-light"> Select Difficulty: 
                <select name="level" onChange={(e)=> setLevel(e.target.value)}>
                    <option value= {null} >Select Level </option>
                    <option value="1-5">Levels 1-5</option>
                    <option value="6-10">Levels 6-10</option>
                    <option value="11-15">Levels 11-15</option>
                </select>
            </label>
            <br />
            <input className="landing-button" type="submit" value="Generate Encounter" onClick={clickHandle} />
            </form>
            <div className="npc-stats">
                <span
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                ><i className="bi bi-chevron-down"></i></span>
                <Collapse in={open}>
                    <div id="example-collapse-text" className="text-light">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </div>
        </div>
    </>
    )
  }
