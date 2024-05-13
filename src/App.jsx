import './App.css'
import FlightList from './components/flight-list'
import SearchAppBar from './components/navbar'

function App() {
  return (
    <div className="main-container">
      <SearchAppBar />
      <FlightList />
    </div>
  )
}

export default App
