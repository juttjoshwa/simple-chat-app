import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./componets/Join/Join.js";
import Chat from "./componets/Chat/Chat.js";

export const ENDPOINT = "https://cheddar-industrious-purchase.glitch.me/";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
