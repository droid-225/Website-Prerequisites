import React, {useEffect, useState} from 'react';

function MyComponent6() {
    //const [count, setCount] = useState(0);
    //const [color, setColor] = useState("green");

    /*
    useEffect(() => {
        document.title = `Count: ${count}`;
    }); // executes every time a re-render occurs also when component is first mounted
    */

    /*
    useEffect(() => {
        document.title = `My Counter Program`;
    }, []); // only executes when component is mounted
    */
    /*
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return() => {
            //Some cleanup code that can run before the next rerender or when unmounting component
        }
    }, [count, color]); // only executes when component is mounted and when the value is updated

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    */

    const [width, setWdith] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWdith(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        /*
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>

            <button onClick={changeColor}>Change Color</button>
        </>
        */

        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComponent6;