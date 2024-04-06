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

const array = [
  {
    company: "Google",
    role: "SDE",
    count: "3",
  },
  {
    company: "Google",
    role: "SDE",
  },
  {
    company: "Google",
    role: "SDE",
  },
  {
    company: "Google",
    role: "SDE",
  },
  {
    company: "Google",
    role: "SDE",
  },
  {
    company: "Google",
    role: "SDE",
  },
];

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
                Login
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                Register
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
            >
                Register
            </Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
            {array.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </TabPanel>
          <TabPanel>
            {array.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ListCard;