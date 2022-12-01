import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

useEffect(() => {
    
  axios({
      url: "https://type.fit/api/quotes",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json",
      },
    }).then((response) => {
      console.log(response);
    });
  });


  
  return (
    <div className="App">
     

    </div>
  );
}

export default App;
