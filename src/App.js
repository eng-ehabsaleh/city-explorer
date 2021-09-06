import "./App.css";
import Main from "./component/main";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationRender from "./component/LocationRender";
function App() {
  return (
    <div className="App">
      <Main />
      <LocationRender />
    </div>
  );
}

export default App;
