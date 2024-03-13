import './App.css'
import AdminPanel from "./components/AdminPanel.jsx";
import LoginForm from "./components/LoginForm.jsx";

const isLoggedIn = true;

function App(){
    let content;


    // Forma tradicionar de evaluar
    //if (isLoggedIn){
    //    content = <AdminPanel></AdminPanel>;
    //}
    //else{
    //    content = <LoginForm></LoginForm>
    //}


    //Forma de evaluar con JSX
    content = isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)

    
    // Si solo se quiere evaluar el estado positivo:
    // content = isLoggedIn && <AdminPanel/>

    return (
        <>
            {content}
        </>
    )


    return(
        <>
            {content}
        </>
    )
}
export default App
