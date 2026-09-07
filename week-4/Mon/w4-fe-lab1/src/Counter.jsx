import './Counter.css';
import {useState} from 'react';


const Counter = () => {

    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    const setDarkThemeHandler = () => {
        setTheme('dark');
        console.log('Dark button clicked');
    }

    const setLightThemeHandler = () => {
        setTheme('light');
        console.log('Light button clicked');
        }

    const setToggleThemeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log('Toggle button clicked');
    }

    const incrementCountHandler = () => {
        setCount(c => c + 1);
    }

    const decrementCountHandler = () => {
        setCount(c => c - 1);
    }
 
    const resetCountHandler = () => {
        setCount(0);
    }

    return (
        <div className={`content ${theme}`}>
            <h1>UseState Component</h1>
            <button onClick={setDarkThemeHandler}>Dark</button>
            <button onClick={setLightThemeHandler}>Light</button>
            <button onClick={setToggleThemeHandler}>Toggle</button>
            <h2>Count: {count}</h2>
            <button onClick={incrementCountHandler}>Increment</button>
            <button onClick={decrementCountHandler}>Decrement</button>
            <button onClick={resetCountHandler}>Reset</button>
        </div>
    );
};

export default Counter;