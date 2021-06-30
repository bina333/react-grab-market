import "./App.css";
import MainpageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./main/product";
import UploadPage from "./main/uploadPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact="true" path="/">
          <MainpageComponent />
        </Route>
        <Route exact="true" path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact="true" path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
