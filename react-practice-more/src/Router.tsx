import { BrowserRouter, Route, Routes } from "react-router-dom"
import Coin from "./routes/Coin"
import Coins from "./routes/Coins"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinID" element={<Coins />}></Route>
        <Route path="/" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
