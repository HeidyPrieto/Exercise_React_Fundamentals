function MyButton(){
    function handleClick(){
        alert('¡You clicked me!')
    }

    return(
        <>
            <button className={"button"} onClick={handleClick}>
                Click me
            </button>
        </>
    )
}

export default MyButton;