import React, {useState} from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {
  // this is the data we want to add to our Tours box
  const [tours, setTours] = useState(data);

  function removeTour(id){
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  // when we remove all the tours
  if (tours.length === 0){
    return(
        <div className="refresh">
            <h2>No Tours Left</h2>
            <button className = "btn-white" onClick={() => setTours(data)}>Refresh</button>
        </div>
    );
  }

  return(
      <>
          {/* wrapper */}
          <div className="App">
              <Tours tours = {tours} removeTour={removeTour}></Tours>
          </div>
      </>
  ); 
};

export default App;
