import { useEffect, useState } from 'react';
import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'

function App() {

  const [state, setState] = useState({})

  
  // useEffect( async () => {
  //   getWeather.getWeatherByLocation('gilan').then(res => setState(res.data))
  //   console.log(state);
  // }, [])

  return (
    <div className="App">
        <Navbar />
    </div>
  );
}

export default App;
