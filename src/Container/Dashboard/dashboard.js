
import { Box } from '@mui/system'
import { collection, getDocs, onSnapshot} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import CustomCard from '../../Components/Cards/customCard'
import { db } from '../../firebase'

const data = [
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'1' },
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'2' },
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'3' },
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'4' },
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'5' },
  { name: 'Fake Name', place: 'Fake Place', address: 'Fake address', time: 'fake time',id:'6' },
]

export default function Dashboard() {

  const [eventData, setEventData] = useState(data)

  useEffect(() => {
    const collRef = collection(db, 'Events');
    let data=[]
    const unsubs = onSnapshot(collRef, (querySnapshot) => {
      console.log(querySnapshot,typeof querySnapshot)
      querySnapshot.forEach(query => {
        console.log("query is", query.data(), query.id)
        data.push({...query.data(),id:query.id})
      })
      console.log("data",data)
      setEventData(data);
    })
    return unsubs
    // getDocs(collRef).then((querySnapshot) => {
    //    querySnapshot.forEach(query => {
    //     console.log("query is", query.data(), query.id)
    //     data.push({...query.data(),id:query.id})
    //   })
    //   console.log("data",data)
    //   setEventData(data);
    //})
  },[])

    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexFlow: 'wrap' }}>
          {eventData.map(detail => {
            return <CustomCard details={detail} key={detail.id}/>
          })}
        </Box>   
      </>
  )
}
