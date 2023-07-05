import './App.css'
import {Header} from "../components/header/Header.tsx";
import {MainPage} from "../components/main-page/MainPage.tsx";
import {Product} from "../components/product/Product.tsx";
import {Instruction} from "../components/instruction/Instruction.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import 'react-toastify/dist/ReactToastify.css';
import {useToasts} from "../utils/hooks/useToasts.ts";
import {Toast} from "../components/toast/Toast.tsx";


function App() {
    useToasts()
    return (
        <>
            <Header/>
            <MainPage/>
            <Product/>
            <Instruction/>
            <Footer/>
            <Toast/>
        </>
    )
}

export default App
