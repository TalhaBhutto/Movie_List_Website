import './App.css';
import Card from "./card";
import S_data from "./S_data";
function App() {
  return (
    <div>
      <h1 className="heading_style">List of Top 6 Series in 2021</h1>
      {S_data.map(val=><Card imgsrc={val.imgsrc} title={val.title} SName={val.SName} link={val.link}/>)}
    </div>
  );
}

export default App;
