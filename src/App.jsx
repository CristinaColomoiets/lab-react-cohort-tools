import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import {Route, Routes} from 'react-router-dom';
import studentsData from "./assets/students.json"; // Traigo los datos de Json para poder obtener el id de cada alumno



function App({_id}) {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <Routes>
          <Route path={'/'} element={<HomePage />}></Route>
          {/* dos puntos en la ruta indica que alli va un param */}
          <Route path={'/students/:studentId'} element={<StudentDetailsPage/>}></Route> 
          <Route path={'/profile'} element={<UserProfilePage />}></Route>
        </Routes>
        <UserProfilePage />
      </div>

    </div>
  );
}

export default App;
