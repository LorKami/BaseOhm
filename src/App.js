import Home from "./pages/Home";
import Error from "./pages/Error";
import Presale from './pages/Presales';
import Monitor from './components/Monitor';
import Calculator from './pages/Calculators';

import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 function App() {
   return (
     <div className="App">
       <Monitor />
       <HashRouter>
         <Routes>
           <Route path="/" element={<Outlet />}>
             <Route index element={<Home />} />
             <Route path="presale" element={<Presale />} />
             <Route path="Calculator" element={<Calculator />} />
             <Route path="*" element={<Error />} />
           </Route>
         </Routes>
       </HashRouter>
     </div>
   );
 }

export default App;
