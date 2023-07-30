import './App.css'
import Layout from './layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errors/ErrorPage';
import About from './pages/about/About'

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            //errorElement: <ErrorPage />,
            children: [
                {
                path: "/about",
                element: <About />
                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
