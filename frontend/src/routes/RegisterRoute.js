import React,{useState,useEffect} from 'react'
import Navbar from "../components/Navbar/Navbar"
import Loading from "../components/Loading/Loading"
import Register from '../components/Register/Register';




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
                  {/* <Navbar /> */}
                 <Register/>
              </>
            )
        }
        
    </>
  )
}
