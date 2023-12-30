import logo from './logo.svg';
import './App.css';
import './style.css'
import React,{useEffect, useState} from 'react';
import Books from './Components/Books';
import BookInfo from './Components/BookInfo';
function App() {
  const[bookinfo,setBookInfo]=useState([])
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  useEffect(() => {
    setIsNotEmpty(true)
    console.log(bookinfo);
  }
  ,[bookinfo])

  return (
    <div>
      <Books
        setBookInfo={setBookInfo}
        isNotEmpty={isNotEmpty}
        setIsNotEmpty={setIsNotEmpty}
        bookinfo={bookinfo}
      />
      
    </div>
  );
}

export default App;
