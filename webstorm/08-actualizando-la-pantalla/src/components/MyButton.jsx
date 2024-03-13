import {useState} from "react";
function MyButton(){
    const [count, SetCount]= useState(0)
    function handleClick(){
        SetCount(count + 5);
    }

    return(
        <>
            <button className={"button"} onClick={handleClick}>
                Click me {count} items
            </button>
        </>
    )
}

export default MyButton;