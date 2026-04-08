import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext/BookContext";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const WishListCard = () => {
    const { wishList } = useContext(BookContext);
  return (
    <div className="flex flex-col gap-5 my-10">
      {wishList.map((book) => {
        return (
          <div className=" flex justify-center lg:justify-start flex-wrap gap-10 items-center  bg-base-100 border border-gray-200 rounded-md py-5">
            <figure className="p-5 bg-base-200 rounded-md">
              <img
                src={book.image}
                alt="Album"
                className="max-h-[200px] rounded-md"
              />
            </figure>
            <div className=" text-left px-5">
              <h2 className="text-2xl font-semibold">{book.bookName}</h2>
              <p className="font-medium mt-2">By : {book.author}</p>

              <div className="pb-6  font-medium">
                <div className="flex flex-wrap lg:justify-start gap-5 mt-5">
                  <p className="font-semibold">Tag</p>
                  {book.tags.map((tag, i) => (
                    <div key={i} className="badge badge-soft badge-success">
                      #{tag}
                    </div>
                  ))}
                  <p className="flex items-center gap-2">
                    <IoLocationOutline /> Year of Publishing:{" "}
                    <span className="font-semibold ">
                      {book.yearOfPublishing}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 pt-4 border-t border-gray-200">
                <p className="flex items-center gap-1">
                  <FaUserEdit /> Publisher:{" "}
                  <span className="font-semibold ">{book.publisher}</span>
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineInsertPageBreak /> Num of pages :{" "}
                  <span className="font-semibold ">{book.totalPages}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-5 items-center justify-start mt-4">
                <div className="badge badge-lg badge-soft  badge-info font-medium">
                  Category : {book.category}
                </div>
                <div className="badge badge-lg badge-soft  badge-warning font-medium">
                  Rating : {book.rating}
                </div>
                <button className="btn bg-[#23BE0A] text-white rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListCard;
