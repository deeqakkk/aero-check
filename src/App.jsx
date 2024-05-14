import { useState } from 'react'
import './App.css'
import FlightList from './components/flight-list'
import SearchAppBar from './components/navbar'
function App() {
  const [searchValue, setSearchValue] = useState()
  return (
    <div className="main-container">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <FlightList searchValue={searchValue} />
    </div>
  )
}

export default App
