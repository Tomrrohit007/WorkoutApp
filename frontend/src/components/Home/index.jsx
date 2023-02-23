import {useState, useEffect} from 'react'

const Home = () => {

  const [workoutsList, setworkouts] = useState(null)

  useEffect(()=>{
    const workoutApi = async() => {
      const fetchedData = await fetch("/workouts")
      const data = await fetchedData.json()
      console.log(data)
      if(fetchedData.ok){
        setworkouts(data)
      }
    }

    workoutApi()
  }, [])
  return (
    <>
      <div className='workouts'>

      </div>
    </>
  )
}

export default Home
