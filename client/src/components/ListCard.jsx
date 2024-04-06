import React from "react";
import InfoCard from "./InfoCard";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const ListCard = () => {
  return (
    <div className="w-2/3 px-4">
      <Tabs>
        <TabList className="flex items-center justify-between gap-4 px-4 mx-4 py-2 bg-[#E8E0FF] rounded-xl">
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                All
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                Pending
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                Accepted
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                Rejected
            </Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/*array.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))*/}
          </TabPanel>
          <TabPanel>
            {/*array.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))*/}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ListCard;