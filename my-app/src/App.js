import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Anissa's Birthday!</h1>
        <h2>Drink Menu</h2>
      </header>
      <body>
        <div className="drinks pinkLemonade">
          <h4>Pink Lemonade</h4>
          <p>
            1 1/2 oz Vodka, 1/2 oz triple sec, 1 oz Cranberry Juice, 1/2 oz
            Lemon Juice, 1/2 Lime Juice - Shaken - Topped with Sprite{" "}
          </p>
        </div>
        <div className="drinks bayBreeze">
          <h4>Bay Breeze</h4>
          <p>1 1/2 oz Vodka, 1 oz Cranberry Juice, 4 oz Pineapple Juice</p>
        </div>
        <div className="drinks caipiroska">
          <br />
          <h4>Caipiroska</h4>
          <p>2 oz Vodka, 1 Tbsp Sugar, 1 Lime</p>
        </div>
        <div className="drinks longIsland">
          <h4>Long Island Iced Tea</h4>
          <p>
            3/4 oz Vodka, 3/4 oz White rum, 3/4 oz Silver Tequila, 3/4 oz gin,
            3/4 oz triple sec, 1 oz lime juice, 3/4 oz OJ, Topped with Cola
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
