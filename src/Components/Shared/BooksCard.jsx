import React from "react";
import { IoIosStarOutline } from "react-icons/io";

const BooksCard = ({ book }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="p-4">
        <figure className="p-6 bg-base-300">
          <img
            src={book.image}
            alt={book.bookName}
            className="max-h-[200px]  rounded-sm"
          />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex gap-3">
          {book.tags.map((tag, i) => (
            <div key={i} className="badge badge-soft badge-success">{tag}</div>
          ))}
        </div>

        <h2 className="card-title text-2xl font-semibold">{book.bookName}</h2>
        <p>
          By : {book.author}
        </p>
        <div className="border-t border-dashed border-gray-300 pt-5 flex justify-between text-lg font-medium">
          <p>{book.category}</p>
          <div><p className="flex items-center gap-2">{book.rating} <IoIosStarOutline /></p></div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
