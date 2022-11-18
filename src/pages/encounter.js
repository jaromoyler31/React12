import NavComp from '../components/NavComp';
import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';



export default function Encounter() {

    const [open, setOpen] = useState(false);

    return ( 
    <>
        <NavComp></NavComp>
        <div>
            <form>
            <label className="text-light"> Select Difficulty: 
                <select>
                    <option value="1-5">Levels 1-5</option>
                    <option value="6-10">Levels 6-10</option>
                    <option selected value="11-15">Levels 11-15</option>
                </select>
            </label>
            <br />
            <input className="landing-button" type="submit" value="Generate Encounter" />
            </form>
            <div className="npc-stats">
                <span
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                ><i class="bi bi-chevron-down"></i></span>
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
