import { useState } from 'react'
import './App.css'

function App() {
  const [height, setheight] = useState()
  const [weight, setweight] = useState()
  const [BMI, setBmi] = useState(null)
  const [status, setStatus] = useState()
  const [error, setError] = useState("")
  const calculateBmi = () => {
    const isvalidHeight=/^\d+$/.test(height)
    const isvalidWeight=/^\d+$/.test(weight)
    if (isvalidHeight&& isvalidWeight) {

      const heightMeters = height / 100;
      const bmi = weight / (heightMeters * heightMeters)
       
      setBmi(bmi.toFixed(2))//setBmI value
      if (bmi < 18.5) {
        setStatus("Under Weight")
      }
      else if (bmi >= 18.5 && bmi <= 24.9) {
        setStatus("Normal Weight")
      }
      else if (bmi >= 25 && bmi <= 29.9) {
        setStatus("Over weight")
      }
      else {
        setStatus("Obese")
      }
      setError("")
    }
    else {
      setBmi(null)
      setStatus("")
      setError("Please enter the valid details weight and height")
    }
    
   
  }
  return (
    <>
      <div className="bmconatiner">
        <div className="box">
        </div>
        <div className="data">
          <h1>BMI calculator</h1>
          {error&&<p className="error">{error}</p>}
          <div className="input">
            <label htmlFor="height">Height(cm)</label>
            <input type="text" id="height" onChange={(e) => setheight(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="weight">weight(cm)</label>
            <input type="text" id="weight" onChange={(e) => setweight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {BMI !== null && (
            <div className="result">
              <p>the bmi status:{BMI}</p>
              <p>Status:{status}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
