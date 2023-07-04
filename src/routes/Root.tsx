import {createBrowserRouter} from "react-router-dom";
import App from "../app/App.tsx";
import ErrorPage from "../components/error-page/ErrorPage.tsx";
import {Unsubscribe} from "../features/unsubscribe/Unsubscribe.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />
    },
    {
        path: "http://gilletteopt.ru/unsubscribe-page/:id",
        element: <Unsubscribe/>,
    },
]);