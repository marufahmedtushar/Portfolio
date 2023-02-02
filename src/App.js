import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Portfolio from './components/Portfolio/Portfolio';


function App() {

  const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[

     {
      path:'/',
      element:<Portfolio></Portfolio>
    }

    ]
  }

    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
