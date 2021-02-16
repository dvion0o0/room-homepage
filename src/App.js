import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
function App() {
  const [toggle, setToggle] = React.useState(false);
  console.log(toggle);
  return (
    <main>
      <Navbar toggle={setToggle} />
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <Header />
      <About />
      <div className="copyright">
        <a href="/">Coded with ❤️ by Digvijay.</a>
      </div>
    </main>
  );
}

export default App;
