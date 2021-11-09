import "./App.css";
import DeleteData from "./components/DeleteData";
import AddData from "./components/AddData";
import Home from "./components/Home";
import EditData from "./components/EditData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addData" component={AddData} />
          <Route exact path="/editData/:id" component={EditData} />
          <Route exact path="/deleteData/:id" component={DeleteData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
