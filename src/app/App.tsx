import './App.css'
import {Header} from "../components/header/Header.tsx";
import {MainPage} from "../components/main-page/MainPage.tsx";
import {Product} from "../components/product/Product.tsx";
import {Instruction} from "../components/instruction/Instruction.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useToasts} from "../utils/hooks/useToasts.ts";


function App() {
    useToasts()
    return (
        <>
            <Header/>
            <MainPage/>
            <Product/>
            <Instruction/>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer/>
        </>
    )
}

export default App
