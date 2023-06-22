import React,{useState,useEffect} from 'react'
import HomePage from '../components/HomePage/HomePage'
import Loading from "../components/Loading/Loading"




export default function Home() {

  const [loading, setLoading] = useState(true);


useEffect(() => {
    

    const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
}, []);




  return (
    <>
       {
            loading?(
                <Loading/>
            ):
            (     
              <>
                 <HomePage/>
              </>
            )
        }
        
    </>
  )
}
