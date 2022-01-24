import { useState } from 'react';
import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'
import Main from './components/pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './index'
import { addData, validation } from './components/actions/actions'
import Footer from './components/footer/Footer';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

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

  function toggle() {
    let btn = document.querySelector('.mode-toggle');
    let container = document.querySelector('.App');
    btn.classList.toggle('toggle')
    if (btn.classList.contains('toggle')){
      container.classList.add('night')
    } else {
      container.classList.remove('night')
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Main getWeather={get} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
