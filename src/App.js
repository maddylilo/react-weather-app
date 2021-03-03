import './styles.css';
import Card from "./Card";
import Credit from "./Credit";

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="top-half">
            <Card />
            <Credit />
          </div>
        </div>
    </div>
  );
}

export default App;
