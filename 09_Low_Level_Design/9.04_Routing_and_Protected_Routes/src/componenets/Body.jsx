import React from "react";
import { MEMES_API } from "../constants/apis"
import MemeCard from "./MemeCard";

const Body = () => {
   const [memes, setMemes] = React.useState({isFetching: true, data: []})
   
   const fetchMemes = async () => {
      const data = await fetch(MEMES_API)
      const json = await data.json();
      if (json) {
         setMemes({isFetching: false, data: json.memes})
      }
   }
   
   React.useEffect(() => {
      setMemes((prev) => ({ ...prev, isFetching: true }))
      fetchMemes()
   }, [])

   return <div className="flex flex-wrap p-2 justify-center">
      {memes.isFetching 
      ? Array(20).fill().map((_, index) => (
         <div key={index} className="w-[18rem] h-[20rem] border-2 border-[#aaa] p-4 m-4 rounded-[5px]">
            Loading
         </div>
      ))
      : memes.data.map((meme) => <MemeCard key={meme.url} data={meme} />)}
   </div>
}

export default Body;
