import Book from "./Book.css"

export default function BookStore ({books}){
    return (
        <div>
            <h3>Books: {books.length}</h3>

        {
            books.map(book=> <Book book={book}></Book>)
        }
        </div>
    )
}