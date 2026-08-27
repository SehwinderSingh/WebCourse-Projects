import "./App.css";
import CreditCard from "./creditCard.jsx";
import BoxColor from "../../fe-pp1-part2/src/boxColor.jsx";
import Greetings from "../../fe-pp1-part2/src/Greetings.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h2>CreditCard</h2>
      <CreditCard
        type="Visa"
        number="0123456789018875"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010993"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016982"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

    </div>
  );
}

export default App;

