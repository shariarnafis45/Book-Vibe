import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const handleMarkAsRead = (booksData) => {
    const isBookExist = storedBooks.find(
      (book) => book.bookId === booksData.bookId,
    );
    if (isBookExist) {
      toast.error("The Book Is Already Marked As Read");
    } else {
      setStoredBooks([...storedBooks, booksData]);
      toast.success(`${booksData.bookName} is Successfully marked as read`);
    }
  };
  const handleWishList = (booksData) => {
    const isBookExistInMarkAsRead = storedBooks.find(
      (book) => book.bookId === booksData.bookId,
    );
    if (isBookExistInMarkAsRead) {
      toast.error("The Book Is Already Marked As Read");
      return;
    }
    const isBookExist = wishList.find(
      (book) => book.bookId === booksData.bookId,
    );
    if (isBookExist) {
      toast.error("The Book Is Already In Wishlist");
    } else {
      setWishList([...wishList, booksData]);
      toast.success(`${booksData.bookName} is Successfully added to wishlist`);
    }
  };

  const data = {
    storedBooks,
    wishList,
    setStoredBooks,
    handleMarkAsRead,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
