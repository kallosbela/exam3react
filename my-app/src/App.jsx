import { useEffect, useState } from "react";
import "./App.css";
import GetInfos from "./api/GetInfos";
import Card from "./components/Card";

const App = () => {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);

  const load = async () => {
    const response = await GetInfos();
    await setCards(response.data.results);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <main>
        {cards.map((card)=><Card card={card} />)}
      </main>
    </div>
  );
};

export default App;
