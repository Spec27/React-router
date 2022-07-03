import { Routes, Route } from "react-router-dom";
import s from "./App.module.css"
import AppBar from "./AppBar";
import HomeVievs from "./viev/HomeViev";
import AutorViev from "./viev/AutorViev/AutorViev";
import BoocsViev from "./viev/BoocsViev";
import NotFoundViev from "./viev/NotFoundViev/NotFoundViev";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <>
        <div className={s.container}>
        <AppBar />
      <Routes>
            <Route path="/" element={<HomeVievs />} exact />
            <Route path="/Author" element={<AutorViev />} />
            <Route path="/Boocs" element={<BoocsViev />} />
            <Route path=" *" element={ <NotFoundViev/>} />
      </Routes>
        </div>
      </>
    </div>
  );
};
