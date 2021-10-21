import logo from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="textcolum">
            <h3>Get <font color="purple">insigths</font> that help <br/>your bunisses grow.</h3>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.</p>
              <span>10k+</span>
              <span className="textspan">314 </span>
              <span className="textspan">12m+</span>
              <br/>
              <span className="color">companies</span>
              <span className="color textspan">templates</span>
              <span className="color textspan">queries</span>
        </div>
        <div className="imgcolumn">
          <img src={logo} className="img-left" alt="logoapp" />
        </div>
      </div>
    </div>
  );
}

export default App;
