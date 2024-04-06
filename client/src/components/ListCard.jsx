import React, { useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";
import InfoCard2 from "./InfoCard2";
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

import { useSelector, useDispatch } from "react-redux";
import { setStatus, setAllReferrals, setPendingReferrals } from "../features/userHomeSlice";

const ListCard = () => {
    
    const dispatch = useDispatch();
    const status = useSelector((state) => state.userHome.status);
    let allReferrals = useSelector((state) => state.userHome.allReferrals);
    let pendingReferrals = useSelector((state) => state.userHome.allReferrals);

    

    //fetch functions
    const handleAllRequests = async() => {
        dispatch(setStatus(0));
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            }
            const res = await axios.get('http://localhost:3000/requester/listreferral', config);
            //console.log(res.data.referrals);
            dispatch(setAllReferrals(res.data.referrals));
            //console.log("pending ref", AllReferrals);
        } catch (error) {
            console.log(error);
        }
    }
    const handlePendingRequests = async() => {
        dispatch(setStatus(1));
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            }
            const res = await axios.get('http://localhost:3000/requester/requestlist', config);
            console.log(res.data.requests);
            dispatch(setAllReferrals(res.data.requests));
            console.log("pending ref",AllReferrals);
        } catch (error) {
            console.log(error);
        }
    }

    
  return (
    <div className="w-2/3 px-4">
      <Tabs>
        <TabList className="flex items-center justify-between gap-4 px-4 mx-4 py-2 bg-[#E8E0FF] rounded-xl">
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
                onClick={handleAllRequests}
            >
                All
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
                onClick={handlePendingRequests}
            >
                Pending
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
                onClick={() => dispatch(setStatus(2))}
            >
                Accepted
            </Tab>
          </div>
          <div className="div">
            <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                className="rounded-lg w-auto"
                onClick={() => dispatch(setStatus(3))}
            >
                Rejected
            </Tab>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel>
            {allReferrals.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </TabPanel>
          <TabPanel>
            {allReferrals.map((item, index) => (
                <InfoCard item={item} key={index} />
            ))}
          </TabPanel>
          <TabPanel>
            accepted
          </TabPanel>
          <TabPanel>
            rejected
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ListCard;