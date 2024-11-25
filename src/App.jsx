import WeatherDashboard from './pages/WeatherDashboard'
import {Routes,Route} from 'react-router-dom'
import DashBoard from './Features/DashBoard'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
        <Route path='/weather' element={<DashBoard/>}/>
      </Routes>
    </div>
  )
}

export default App
