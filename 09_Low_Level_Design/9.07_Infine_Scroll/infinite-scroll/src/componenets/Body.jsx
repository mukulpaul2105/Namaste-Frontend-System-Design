import React from "react";
import { MEMES_API } from "../constants/apis"
import MemeCard from "./MemeCard";

const Body = () => {
   const [memes, setMemes] = React.useState({isFetching: true, data: []})
   
   const fetchMemes = async () => {
      setMemes((prev) => ({ ...prev, isFetching: true }))
      const data = await fetch(MEMES_API + "/10")
      const json = await data.json();
      if (json) {
         setMemes({isFetching: false, data: [...memes.data, ...json.memes]})
      }
   }

   console.log(memes)

   const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
         fetchMemes()
      }
   }
   
   React.useEffect(() => {
      fetchMemes()

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, [])

   return <div className="flex flex-wrap p-2 justify-center">
      {memes.data.map((meme, idx) => <MemeCard key={idx} data={meme} />)}
      {memes.isFetching && Array(20).fill().map((_, index) => (
         <div key={index} className="w-[18rem] h-[20rem] border-2 border-[#aaa] p-4 m-4 rounded-[5px]">
            Loading
         </div>
      ))}
   </div>
}

export default Body;
