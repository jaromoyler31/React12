import NavComp from '../components/NavComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Verz from '../assets/verz.jpeg'
import Bubba from '../assets/bubba.jpeg'


export default function Team() {
    return ( 
        <>
            <NavComp></NavComp>
            <h1 className="text-light pt-4">Who are we?</h1>
            <div className="d-flex justify-content-center flex-wrap team-container">
                    <div className="mx-5 team-box">
                        <div className="imgBox">
                          <img className="img-fluid" alt="Bubba" href="#" src={Bubba}/> 
                        </div>
                        <div className="team-content">
                            <h2>Bubba</h2>
                            <p>Jarom Oyler</p>
                        </div>
                    </div>
                    <div className="mx-5 team-box">
                        <div className="imgBox">
                            <img className="img-fluid" alt="Verzifier" href="#" src={Verz}/>
                        </div>
                        <div className="team-content">
                            <h2>Verzifier</h2>
                            <p>Aaron Halsell</p>
                        </div>
                    </div>
          </div>

        </>
    )
}

