import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import books from "../data/books.json";
import AppBar from "./AppBar";

const HomeVievs = lazy(() => import("./viev/HomeViev"));
const AutorViev = lazy(() => import("./viev/AutorViev/AutorViev"));
const BooksViev = lazy(() => import("./viev/BooksViev"));
const NotFoundViev = lazy(() => import("./viev/NotFoundViev/NotFoundViev"));
const BooksDetailsViev = lazy(() => import("./viev/BooksDetailsViev"));


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
        <Suspense fallback={<h1>Загружаемо...</h1>}>
          <Routes>
            <Route path="/" element={<AppBar />}>
               <Route index element={<HomeVievs />} />
               <Route path="Author" element={<AutorViev />} />
               <Route path="Books" element={<BooksViev books={books}/>} />
               <Route path="Books/:bookId" element={<BooksDetailsViev books={books} />} />
               <Route path="*" element={ <NotFoundViev/>} />
            </Route>   
          </Routes>  
        </Suspense>
        </div>  
      </>
    </div>
  );
};
