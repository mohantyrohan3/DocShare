import React,{useState,useEffect} from 'react'
import Loading from '../components/Loading/Loading'
import UserHome from '../components/Dashboard/UserHome/UserHome';




export default function DashboardHome() {

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
                <UserHome/>
           </>
         )
     }
     
 </>
  )
}
