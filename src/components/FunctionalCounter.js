import { useState } from "react";

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0); // initialize counter to 0
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h4>Get hookt!</h4>
            <div className="counter">
                Counter value: {counter}
            </div>
            <div className="b">
                <button onClick={increment}>Increment (+1)</button>
            </div>
            <div className="btn">
                <button onClick={decrement}>Decrement (-1)</button>
            </div>
        </div>
    );
}

export default FunctionalCounter;