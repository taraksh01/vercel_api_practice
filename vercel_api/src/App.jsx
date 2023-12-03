import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627"
      )}`
    );

    const json = await data?.json();
    const jsonData = JSON.parse(json?.contents);

    // console.log(jsonData.data);
    // console.log(typeof json.contents);
    setData(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return <h1>{data[0]?.info?.name}</h1>;
}

export default App;
