import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../Context/BookContext/BookContext";

const BookDetailsCard = ({ booksData }) => {
  const params = useParams();
  const selectedBookData = booksData.find((book) => params.id == book.bookId);

  const { handleMarkAsRead,handleWishList } = useContext(BookContext);

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-5 ">
      <div className=" flex justify-center lg:justify-start flex-wrap gap-10  bg-base-100 ">
        <figure className="p-20 bg-base-200 rounded-md">
          <img
            src={selectedBookData.image}
            alt="Album"
            className="max-h-[500px] rounded-md"
          />
        </figure>
        <div className="max-w-[550px] text-center lg:text-left space-y-5">
          <h2 className="text-4xl font-semibold">
            {selectedBookData.bookName}
          </h2>
          <p className="font-medium mt-2">By : {selectedBookData.author}</p>
          <div className="py-2 mt-5 border-t border-b border-gray-200 font-medium">
            <p>{selectedBookData.category}</p>
          </div>
          <div className="pb-6 border-b border-gray-200 font-medium">
            <p className="mt-4">
              <span className="font-semibold">Review : </span>{" "}
              {selectedBookData.review}{" "}
            </p>
            <div className="flex justify-center lg:justify-start gap-5 mt-5">
              <p className="font-semibold">Tag</p>
              {selectedBookData.tags.map((tag, i) => (
                <div key={i} className="badge badge-soft badge-success">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p>
              Num of pages :{" "}
              <span className="font-semibold lg:ml-10">
                {selectedBookData.totalPages}
              </span>
            </p>
            <p>
              Publisher:{" "}
              <span className="font-semibold lg:ml-20">
                {selectedBookData.publisher}
              </span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="font-semibold lg:ml-4">
                {selectedBookData.yearOfPublishing}
              </span>
            </p>
            <p>
              Rating:{" "}
              <span className="font-semibold lg:ml-27">
                {selectedBookData.rating}
              </span>
            </p>
          </div>
          <div className="flex gap-5 justify-center lg:justify-start">
            <button
              onClick={() => handleMarkAsRead(selectedBookData)}
              className="btn "
            >
              Mark as Read
            </button>
            <button onClick={() => handleWishList(selectedBookData)} className="btn bg-[#59C6D2] text-white ">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
