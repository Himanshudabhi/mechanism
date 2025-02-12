import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./components/pokemons";

export default function Home() {
  return (
    <>
<BrowserRouter>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}
