import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import MovieDetailContainer from "./Containers/MovieDetailContainer";
import MovieList from "./Containers/MovieList";
import ComponentePrueba from  '../src/Components/ComponentePrueba'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MovieList />}/>
        <Route path="/movie/:id" element={<MovieDetailContainer/>}/>
        <Route path="/1" element={<ComponentePrueba/>}/>
        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
