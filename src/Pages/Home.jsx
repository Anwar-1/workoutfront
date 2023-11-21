import React, { useEffect, useState } from 'react'
import ax from 'axios'
import foramtdistancetonow from 'date-fns/formatDistanceToNow'
import WorkoutDetails from '../Compentes/WorkoutDetails'
import WorkoutForm from '../Compentes/WorkoutForm'
const Home = () => {
  const [workouts,setworkout] = useState([])
  const [show,setshow] = useState(false)

   useEffect(() =>{

    const getData = async()=>{
    //  let responsive = await ax.get('http://localhost:4000/api/workout')
    let responsive = await ax.get('https://workoutbackend-1oxm.onrender.com/api/workout')
      console.log(responsive.data)
      setworkout(responsive.data)
    }
    
    getData()

   },[show])




  return (
   <>
   <div className='home'>
    <div className='workouts'>
      {workouts && workouts.map(work =>(
     <WorkoutDetails key={work._id} workout={work} show={show} setshow={setshow}/>
      ))}

    </div>
    <WorkoutForm show={show} setshow={setshow} />
   </div>
   
   </>
  )
}


export default Home