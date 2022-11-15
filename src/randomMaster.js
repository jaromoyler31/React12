import './App.css';

function RandomMonster() {
    
    return (
      <div className='App-header'>
        <button className='App' onClick={generate()}>1-5</button>
        <button className='App'>6-10</button>
        <button className='App'>11-15</button>
        
      </div>
    );
}

function generate(){
    console.log("hello")
}

  
export default RandomMonster;