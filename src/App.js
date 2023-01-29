import {Article, Brand, Cta, Features, Navbar } from "./components/Index";
import {Blog, Feature, Footer, Header, Possibility, What} from './components/containers/Index';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
        </div> 
        <Brand/>
        <What/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
