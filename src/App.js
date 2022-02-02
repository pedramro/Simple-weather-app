import './components/styles/styles.css';
import Navbar from './components/navbar/Navbar';
import { getWeather } from './components/service/Service'
import Main from './components/pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './index'
import { useDispatch } from 'react-redux'
import { addData, validation } from './components/actions/actions'
import Footer from './components/footer/Footer';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import { connect } from 'react-redux'

function App(props){
  
  const dispatch = useDispatch()

  async function get(){
    const { location } = store.getState()
    const response = await getWeather.getWeatherByLocation(location)
      .then(res => {return res})
      .catch(err => {return err})
    if (response.status === 200) {
      dispatch(addData(response.data))
      props.valid()
    } else {
      props.invalid()
    }
  }

  function toggle() {
    let btn = document.querySelector('.mode-toggle');
    let container = document.querySelector('.App');
    btn.classList.toggle('toggle')
    localStorage.setItem('mode', btn.classList)
    if (btn.classList.contains('toggle')){
      container.classList.add('night')
      localStorage.setItem('container-mode', container.classList)
    } else {
      container.classList.remove('night')
      localStorage.setItem('container-mode', container.classList)
    }
  }

  return (
    <BrowserRouter>
    <div className={localStorage.getItem('container-mode') ? localStorage.getItem('container-mode') : 'App'}>
        <Navbar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Main getWeather={get} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
} 

const mapDispatchToProps = dispatch => {
  return {
      valid: () => dispatch(validation('valid')),
      invalid: () => dispatch(validation('not valid'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
