import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import "../src/assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import System from "./Components/System/System";
import {store} from "./actions/store";
import {Provider} from "react-redux";
import PatientCreateForm from "./Components/PatientCreateForm/PatientCreateForm";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/welcome/*" element = {<Welcome />}/>
          <Route path="/system/*" element = {<System />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
