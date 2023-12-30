import React from "react";

const BookInfo = ({ book }) => {
  console.log("Book:", book); // Add this line for debugging

  if (!book || Object.keys(book).length === 0) {
    return <div>Select a book to see details</div>;
  }

  return (
    <div>
      <div className="bookinfo">
        
          <h3>{book[0].volumeInfo.title}</h3>
          <p>
            Author:
            {book[0].volumeInfo.authors && book[0].volumeInfo.authors.join(", ")}
          </p>
          <p>Description: {book[0].volumeInfo.description}</p>
        
        <div>
          <img
            src={book[0].volumeInfo.imageLinks?.thumbnail}
            alt={book[0].volumeInfo.title}
            className="poster"
          />
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
