
function Button2() {

    /*
    let count = 0;

    const handleClick = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name}! You clicked me ${count} time(s)!`);
        }
        else {
            console.log(`${name}, stop clicking me!`);
        }
    };
    */
    //const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    const handleClick = (e) => e.target.textContent = "Ouch! 🤕";

    return(<button onClick={(e) => handleClick(e)}>Click Me!👆</button>); 
}

export default Button2