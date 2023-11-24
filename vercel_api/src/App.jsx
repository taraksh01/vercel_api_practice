import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.572646&lng=88.36389500000001"
    );
    const json = await data?.json();
    setData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return <>{console.log(data)}</>;
}

export default App;
