import logo from './logo.svg';
import sd from './imgsec.png';

import './App.css';
import './project.css'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}} >
        <h1 className="title red">Your name here</h1>
        <img style={{height:60,width:60,marginTop:15}} src="/img1.png" ></img>
        <br/>
        <img style={{height:60,width:60,marginTop:15}}  src={sd}></img>
        
      </div>
      <video style ={{width:"320", height:"240"}} controls>

        <source src="/myVideo.mp4" type="video/mp4" alt="ffffffff" ></source>

      </video>
    </div>
  );
}

export default App;
