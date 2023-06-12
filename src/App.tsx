import './App.css'
import {Header} from "./components/header/Header.tsx";
import {MainPage} from "./components/main-page/MainPage.tsx";
import {Product} from "./components/product/Product.tsx";
import {Instruction} from "./components/instruction/Instruction.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {

  return (
    <>
        <Header/>
        <MainPage/>
        <Product/>
        <Instruction/>
        <Footer/>
    </>
  )
}

export default App
