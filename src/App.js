import { useEffect, useState } from 'react';
import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'
import Main from './components/pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './index'
import { addData, validation } from './components/actions/actions'
import Footer from './components/footer/Footer';

function App() {

  const [state, setState] = useState()

  async function get(){
    const { location } = store.getState()
    const response = await getWeather.getWeatherByLocation(location)
      .then(res => {return res})
      .catch(err => {return err})
    console.log(response);
    if (response.status === 200) {
      store.dispatch(addData(response.data))
      store.dispatch(validation('valid'))
      setState(response.data)
      console.log('valid');
    } else {
      store.dispatch(validation('not valid'))
      setState(response.data)
      console.log('invalid');

    }
  }

  function error() {
    return (
      <div>
        <h4>Please enter a valid location</h4>
      </div>
    )
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
