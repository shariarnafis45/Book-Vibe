import React, { use } from "react";
import BooksCard from "../Shared/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const booksData = use(booksPromise);

  return (
    <div className="max-w-[1200px] mx-auto py-25 px-5">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {booksData.map((book) => {
          return <BooksCard key={book.bookId} book={book}/>;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
