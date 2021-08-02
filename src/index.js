import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {Books} from './books';
import Book from './book'

function Booklist(){
  return ( 
  <section className='booklist'>
   {Books.map((book,index) =>{
     return <Book key={book.id} {...book}></Book>
     

   })}
  </section>);
}
// test




ReactDom.render(<Booklist/>,document.getElementById('root'));