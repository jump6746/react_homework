import {useState, useEffect} from "react";

const API = "https://market-emong.pockethost.io/api/collections/product/records";


export default function Fetch(){

  const [data, setData] = useState(null);

  const requestData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error(error));
  };

  useEffect(()=>{
    requestData();
    },[]
  );
  

  return(
    <div>

    </div>
  );

}