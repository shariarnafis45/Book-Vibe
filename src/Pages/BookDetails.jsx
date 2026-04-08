import React, { use } from "react";
import BookDetailsCard from "../Components/Shared/BookDetailsCard";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const booksData = useLoaderData();
  
  return (
    <div>
      <BookDetailsCard booksData ={booksData}/>
    </div>
  );
};

export default BookDetails;
