import { useEffect, useState } from 'react';
import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'
import Main from './components/pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './index'

function App() {

  const [state, setState] = useState({})

  async function get(){
    const { location } = store.getState()
    console.log(location);
    const response = await getWeather.getWeatherByLocation(location)
    setState(response.data)
  }

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main getWeather={get} data={state} />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
