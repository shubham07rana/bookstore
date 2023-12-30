import React, { useState } from "react";
import axios from "axios";
import BookInfo from "./BookInfo";

const Books = ({ setBookInfo, setIsNotEmpty, bookinfo }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  async function fetchDetails() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      setIsNotEmpty(false);
      setBooks(response.data.items);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <div className="inputdata">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for the book you want to read..."
        />
        <button onClick={fetchDetails}>Search</button>
      </div>

      {bookinfo.length > 0 && <BookInfo book={bookinfo} />}
      <div>
        {books.map((book) => (
          <div
            key={book.id}
            className="books"
            onClick={() => setBookInfo([book])} // Pass selected book here
          >
            <img
              src={book.volumeInfo.imageLinks?.smallThumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
