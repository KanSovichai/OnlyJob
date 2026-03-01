import './App.css'
import SignUp from "../src/components/form/register" 
import Nav from "../src/components/nav"
import Home from "../src/components/home"
function App(){
    return (
        <div className='w-full h-screen'>
            <Nav></Nav>
            <Home></Home>
        </div>
    );
};

export default App;