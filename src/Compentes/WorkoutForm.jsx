import React, { useState } from 'react'
import ax from 'axios'


const WorkoutForm = ({show,setshow}) => {
  const [title,settitle] = useState("")
  const[load,setload] = useState("")
  const[reps,setreps] = useState("")
  const[error,seterroe] = useState(null)

  const handelsubmit= async(e)=>{
   e.preventDefault()

   try {
   // await ax.post('http://localhost:4000/api/workout/',{title,load,reps})
   await ax.post('https://workoutbackend-1oxm.onrender.com/api/workout/',{title,load,reps})
    setshow(!show)
     settitle("")
     setload("")
     setreps("")
     seterroe("")
    
    
   } catch (error) {
    seterroe('please enter the field')
   }
  }

  return (
    <form className='create' onSubmit={handelsubmit}>
    <h3>add a new work </h3>
    <label>excserise title : </label>
    <input type="text"
    value={title}
    onChange={(e) =>settitle(e.target.value)}
    
    />
    
    <label>load(in kg) : </label>
    <input type="number"
    value={load}
    onChange={(e) =>setload(e.target.value)}
    
    />
    

    <label>reps : </label>
    <input type="number"
    value={reps}
    onChange={(e) =>setreps(e.target.value)}
    
    />

     <button>add work</button>
     {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm