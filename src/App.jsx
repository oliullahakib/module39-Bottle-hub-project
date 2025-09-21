import './App.css'
import Bottles  from './componets/Bottles/Bottles'

const bottlePromiss = fetch("https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json").then(res =>res.json())

function App() {

  return (
    <>
     <Bottles bottlePromiss={bottlePromiss} />
    </>
  )
}

export default App
