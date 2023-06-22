import React,{useState,useEffect} from 'react'
import Loading from "../components/Loading/Loading"
import Login from '../components/Login/Login';




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
                 <Login/>
              </>
            )
        }
        
    </>
  )
}
