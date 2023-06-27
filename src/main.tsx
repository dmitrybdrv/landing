import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./app/store.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Root.tsx";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
