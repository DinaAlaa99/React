import Header from './Components/Header'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Students from './Components/Students/Students'
import StudentsDetails from './Components/Students/StudentsDetails';
import About from './Components/About'
import Error from './Components/Error'
let App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="" element={< Students />} />
        <Route path="/students" element={<Students />} />
        <Route path = "/students/:id" element = {<StudentsDetails/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error />} /> </Routes>
    </BrowserRouter>
  )
}
export default App;