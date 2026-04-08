import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabBookCard from "../Shared/ReadListCard";
import ReadListCard from "../Shared/ReadListCard";
import WishListCard from "../Shared/WishListCard";

const BookTabs = () => {
  return (
    <div className="mt-10">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadListCard/>
        </TabPanel>
        <TabPanel>
          <WishListCard/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookTabs;
