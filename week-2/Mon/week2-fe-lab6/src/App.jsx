import Greeting from './Greetings';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greeting name="Savy" message="Welcome to the lab!" />
             <Greeting name="Saini" message="Good morning" />
        </div>
    );
}

export default App;