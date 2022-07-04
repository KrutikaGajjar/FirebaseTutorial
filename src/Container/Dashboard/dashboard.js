import { Box } from "@mui/system";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CustomCard from "../../Components/Cards/customCard";
import { db } from "../../firebase";

export default function Dashboard() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const collRef = collection(db, "Events");
    const unsubs = onSnapshot(collRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((query) => {
        return { ...query.data(), id: query.id };
      });
      setEventData(data);
    });
    return unsubs;
    // getDocs(collRef).then((querySnapshot) => {
    //    querySnapshot.forEach(query => {
    //     console.log("query is", query.data(), query.id)
    //     data.push({...query.data(),id:query.id})
    //   })
    //   console.log("data",data)
    //   setEventData(data);
    //})
  }, []);

  const deleteEvents = (id) => {
    console.log(id);
    deleteDoc(doc(db, "Events", id))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexFlow: "wrap",
        }}
      >
        {eventData.map((detail) => {
          return (
            <CustomCard
              details={detail}
              key={detail.id}
              deleteEvents={deleteEvents}
            />
          );
        })}
      </Box>
    </>
  );
}
