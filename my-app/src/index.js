import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
import {bookArry} from './books'
import Book from './Book'


function Books(){
  return (
    <BookList/>
  );
  
}

const BookList = () =>{
  return (
    <section className='booklist'>
      {bookArry.map((book)=>{
        return (
          //<Book img={img} title={title} author={author}></Book>
          // <Book key={book.id} book={book}></Book>
          <Book key={book.id} {...book} ></Book>
        );
      })}
    </section>
  );
}


ReactDOM.render(<Books/>, document.getElementById('root')); 