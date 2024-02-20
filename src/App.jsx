import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <span>
            <img src="src/assets/brand_logo.png"></img>
          </span>
          <span id="list">
            <a href="#">Menu</a>
            <a href="#">Location</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </span>
          <span>
            <button className="red-button">Login</button>
          </span>
        </nav>
      </header>
      <main>
        <aside>
          <div id="big-text">
            <p>YOUR FEET DESERVE THE BEST</p>
          </div>
          <div id="small-text">
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="shop">
            <button className="shop-button ">Shop Now</button>{" "}
            <button className="category-button ">Category</button>
          </div>
          <div id="available">
            <p id="avail-text">Also Available On</p>
            <span>
              <img className="apps" src="src\assets\flipkart.png"></img>
              <img className="apps" src="src\assets\amazon.png"></img>
            </span>
          </div>
        </aside>
        <section>
          <img src="src/assets/shoe_image.png"></img>
        </section>
      </main>
      <footer>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default App;
