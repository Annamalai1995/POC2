import { Menus } from "./Navi";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Agaram, Thenali, Vikram } from "./MyCompas";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/" exact element={<Agaram/>}/>
          <Route path="/second/:gopi" exact element={<Thenali/>}/>
          <Route path="/third" exact element={<Vikram/>}/>

        </Routes>
      
      </BrowserRouter>
    
    </>
  )
}
export default App;