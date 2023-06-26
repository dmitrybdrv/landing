import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./app/store.ts";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/error-page/ErrorPage.tsx";
import {Unsubscribe} from "./features/unsubscribe/Unsubscribe.tsx";

const router = createBrowserRouter([
    {
        path: "/landing/",
        element: <App/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/landing/unsubscribe-page/:id",
        element: <Unsubscribe/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
