import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Booking } from './components/Booking';
import { Packages } from './components/Packages';


function App() {
 

  return (
    <main>
      <NavBar/>
      <Home/>
      <Booking/>
      <Packages/>
    </main>
    
  )
}

export default App
