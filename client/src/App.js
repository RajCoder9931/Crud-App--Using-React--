import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from '../src/Components/getuser/User';
import Add from './Components/adduser/Add';
import Edit from "./Components/updateuser/Edit.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <User/>,
    },
    {
        path: '/add',
        element: <Add/>,
    },
    {
        path: '/edit/:id',
        element: <Edit/>,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
