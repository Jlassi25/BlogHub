
import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData] = useState(null)
    const [ispending,setIspending] = useState(true);
    const [err,setErr] = useState(null);
  

    useEffect(()=>{
     const abortCont = new AbortController();

       fetch(url,{signal:abortCont.signal})
          .then(res=>{
             console.log(res);
             if(!res.ok){
                
                throw Error('could not fetch the data for that resource');
             }
            
             return res.json();
          })
          .then(data =>{
             setData(data)
             setIspending(false);
             setErr(null);
          })
          .catch(err=>{
            if(err.name === "AbortError"){
               console.log("fetch aborted");
            }else {
               setIspending(false)
               setErr(err.message);
            }
           
         
          })
          return ()=>{
            abortCont.abort();
          }
    },[url]);
    return {data,ispending,err}
}
export default useFetch