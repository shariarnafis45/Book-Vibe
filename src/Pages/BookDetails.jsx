import React, { use, useContext } from "react";
import BookDetailsCard from "../Components/Shared/BookDetailsCard";
import { useLoaderData } from "react-router";
import { BookContext } from "../Context/BookContext/BookContext";


const BookDetails = () => {
  const booksData = useLoaderData();
  return (
    <div>
      <BookDetailsCard booksData ={booksData}/>
    </div>
  );
};

export default BookDetails;
