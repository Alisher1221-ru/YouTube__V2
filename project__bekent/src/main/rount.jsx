import Text from '../select'
import { Route, Routes } from "react-router-dom"
import Title from "../rounter"
import Menu from "./menu"

function App() {
    return(
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="cart" element={<Title/>}/>
            <Route path="input" element={<Text/>}/>
        </Routes>
    )
}

export default App