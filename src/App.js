import { useEffect, useState } from 'react';
import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'
import Main from './components/pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './index'
import { addData } from './components/actions/actions'
import Footer from './components/footer/Footer';

function App() {

  const [state, setState] = useState()
  

  async function get(refresh){
    const { location } = store.getState()
    const response = await getWeather.getWeatherByLocation(location)
    console.log(response);
    if (response.status === 200) {
      console.log('correct');
      store.dispatch(addData(response.data))
      setState(response.data)
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main getWeather={get} />} />
        </Routes>
    </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
