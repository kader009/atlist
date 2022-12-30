import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Feature from './Components/Feature/Feature';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Pricing from './Components/Pricing/Pricing';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Singup from './Components/Singup/Singup';
import Main from './Layout/Main';

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/features',
          element:<PrivateRoute><Feature></Feature></PrivateRoute>
        },
        {
          path: '/pricing',
          element:<Pricing></Pricing>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <Singup></Singup>
        },
    ]
  },
  

  {
    path:'*',
    element: <div>not found</div>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}



export default App;
