import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Analysis from "./pages/Analysis.jsx";
import Home from './pages/Home.jsx';

const Root = ()=>{
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="analysis" element={<Analysis/>} />
    
  </Route>
  ))
  return <RouterProvider router={router}/>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Root/>
  </StrictMode>,
)
