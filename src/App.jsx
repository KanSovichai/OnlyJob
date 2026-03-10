import './App.css'
import SignUp from "../src/components/form/register" 
import Nav from "../src/components/nav"
import Home from "../src/components/home"
import Career from "../src/components/career_buttons"
import Qualification from "../src/components/qualification_buttons"
import PostHome from "../src/components/post-home"
import Footer from "../src/components/footer"
function App(){
    return (
        <div className='w-full h-screen'>
            <Nav></Nav>
            <Home></Home>
            <Career></Career>
            <Qualification></Qualification>
            <PostHome></PostHome>
            <Footer></Footer>
        </div>
    );
};

export default App;