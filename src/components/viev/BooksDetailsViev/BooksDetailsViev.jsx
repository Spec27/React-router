import { useParams} from "react-router-dom";

const BooksDetailsViev = ({ books }) => {
    
    const { bookId } = useParams();
    const book = books.find(book=>book.id === Number(bookId))
   
    return (
        <>
            <p>{`Книга: ${bookId}`}</p>
            <h2>{book.title}</h2>
            <img src={book.img} alt="" />
            <p>{book.genre}</p>
        </>
    )
}

export default BooksDetailsViev;

   