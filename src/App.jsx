import "./App.css";
import { Logo } from "./components/logo";

function App() {
  return <div>
    <Logo showTitle={false}/>
    <Logo showTitle={true}/>
  </div>;
}



export default App;
