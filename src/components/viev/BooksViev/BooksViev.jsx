import { Link,useLocation} from 'react-router-dom'
import s from './BooksViev.module.css'

const BooksViev = ({ books }) => {
    const url = useLocation()
    
    return (
        <>
            <div className={s.Container}>
                <ul>
                    {books.map(book => <li className={s.Book} key={book.id}>
                       <Link className={s.Link} to={`${url.pathname}/${book.id}`}>{book.title}</Link> 
                        </li>)}
                </ul>
            </div>
        </>
    )
}

export default BooksViev;