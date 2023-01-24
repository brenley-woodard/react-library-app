import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Library Catalog</h1>
      <h2> Welcome to Brenley&#39;s Library of Computer Science</h2>
      <p> Check out the amazing selection of books in our <Link to='/books'> catalog </Link>. </p>
    </>
  );
}