import Chai from "./Chai"

function App() {
  const username = "parakh jain"

  return (
    <>
      <Chai/>
      <h3>Piiii Loooo {username}</h3> // Only write evaluated expression inside {}, no if else inside {} 
    </>
    )
}

export default App
