import "./app.css";
import Logo from "./components/logo/logo.jsx";
import Menu from "./components/menu/menu";
import Title from "./components/title/title";
import Text from "./components/text/text";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <nav className="App__nav">
        <Logo />
        <Menu />
      </nav>

      <div className="App__content">
        <Title text="IMAGINE A PLACE..." />
        <Text
          text={`...where you can belong to a school club, a gaming group, or a
worldwide art community. Where just you and a handful of
friends can spend time together. A place that makes it easy to 
talk every day and hang out more often.`}
        />
        <div className="App__buttons-container">
          <Button type="Download" text="Download for Mac" />
          <Button type="Open" text="Open Discord in your browser" />
        </div>
      </div>
      <img
        src="/src/assets/discord-background.png"
        alt="Discord background"
        className="App__discord-bckg"
      />
    </div>
  );
}

export default App;