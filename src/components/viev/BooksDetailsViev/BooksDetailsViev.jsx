import { useParams, useNavigate } from "react-router-dom";
import s from "./BooksDetailsViev.module.css"



const BooksDetailsViev = ({ books }) => {
    
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goHome =()=>navigate('/',{replace:true})


    const { bookId } = useParams();
    const book = books.find(book=>book.id === Number(bookId))
   
    return (
        <>
            <button className={s.Button} onClick={goBack}>Go Back</button>
            <button className={s.Button} onClick={goHome}>Go Home</button>
            <p>{`Книга: ${bookId}`}</p>
            <h2>{book.title}</h2>
            <img src={book.img} alt="" />
            <p>{book.genre}</p>
        </>
    )
}

export default BooksDetailsViev;

   