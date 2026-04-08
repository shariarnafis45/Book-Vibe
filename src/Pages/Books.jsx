import React from "react";

import Heading from "../Components/Bookspage/Heading";
import BookTabs from "../Components/Bookspage/BookTabs";


const Books = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-10 px-5">
     <Heading/>
      <BookTabs/>
     
    </div>
  );
};

export default Books;
