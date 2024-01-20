import { Routes, Route } from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

function App() {
  return (
    <>
      <div className='App'>
      <Routes>
            <Route index element={<AllPlayers/>}/>
            <Route path={"/players/:id"} element={<SinglePlayer/>}/>
            <Route path={"/NewPlayerForm"} element={<NewPlayerForm/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
