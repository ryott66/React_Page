import Book from './Book';


function BookSection(): JSX.Element {

    return (
        <div id="book-section">
            <h2 className="booksection-title">Book</h2>
            <Book />
        </div>
    );
}

export default BookSection;

