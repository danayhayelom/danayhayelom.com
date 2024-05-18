import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './page/Home'
import Product  from './page/Product'
import Report from './page/Report'
import Register from './forms/Register'
import Dashborde from './components/project/Dashborde.js'
import Postinternship  from './components/project/files/Postinternship'
import Belay from './Belay.js'
function App() {

  return (

<>
<BrowserRouter>
<> <Dashborde/></>
<Routes>
       <Route path='/post' element={<Postinternship/>}/>         
    </Routes>
    </BrowserRouter>

</>
   
  );
        }

export default App
