// React Router Dom Imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeProvider from "react-bootstrap/ThemeProvider"

// Components
import Layout from './Layout/Layout';
import Home from './Components/Home';
import Error from './Components/Error';

// Toastify Message
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
          element: <Home/>,
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <RouterProvider router={router}/>
        <ToastContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
