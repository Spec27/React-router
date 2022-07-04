import { Routes, Route } from "react-router-dom";
import s from "./App.module.css"
import AppBar from "./AppBar";
import HomeVievs from "./viev/HomeViev";
import AutorViev from "./viev/AutorViev/AutorViev";
import BooksViev  from "./viev/BooksViev";
import NotFoundViev from "./viev/NotFoundViev/NotFoundViev";
import books from "../data/books.json";
import BooksDetailsViev from "./viev/BooksDetailsViev";


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
            <Route path="/Books" element={<BooksViev books={books} exact/>} />
            <Route path="/Books/:bookId" element={<BooksDetailsViev books={books} />} />
            <Route path="*" element={ <NotFoundViev/>} />
      </Routes>
        </div>
      </>
    </div>
  );
};
