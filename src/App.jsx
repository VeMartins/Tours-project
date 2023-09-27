import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    let newTours = data.filter((tour) => tour.id !== id);
    setData(newTours);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data from fetch", data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      {data && <Tours data={data} removeTour={removeTour} getData={getData} />}{" "}
      {loading && <Loading />}
    </main>
  );
};
export default App;
