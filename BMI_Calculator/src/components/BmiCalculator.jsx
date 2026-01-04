import { useState } from "react";
export default function BmiForm() {
  const [waight, setWaight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [massage, setMassage] = useState("");

  const handleSubmit = (e) => e.preventDefault();
  const reset = () => {
    setWaight("");
    setHeight("");
    setBMI("");
    setMassage("");
  };

  function calculateBMI() {
    const h = height / 100;
    const bmiValue = waight / (h * h);
    const fixedBMI = Number(bmiValue.toFixed(2));

    if (!isNaN(fixedBMI) && fixedBMI != 0) {
      setBMI(fixedBMI);
    }else(alert('Input Valid Number'))

    if (fixedBMI >= 17 && fixedBMI < 18.5) {
      setMassage("Underweight");
    } else if (bmiValue >= 18.5 && fixedBMI < 25) {
      setMassage("Normal weight");
    } else if (fixedBMI >= 25 && fixedBMI < 30) {
      setMassage("Overweight");
    } else setMassage("Obese");
  }

  return (
    <>
      <div className="container dark">
        <h1>Body Mass Index (BMI) Calculator</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="e.g. 65"
              value={waight}
              onChange={(e) => setWaight(e.target.value)}
            />
            <small>Enter your body weight in kilograms</small>
          </div>

          <div className="input-group">
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="e.g. 170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <small>Enter your height in centimeters</small>
          </div>

          <div className="btn-group">
            <button type="button" className="calcBtn" onClick={calculateBMI}>
              Calculate BMI
            </button>
            <button type="button" className="reloadbtn" onClick={reset}>
              Reset
            </button>
          </div>
        </form>

        <h3>
          Your BMI: <span>{bmi}</span>
        </h3>
        <p className="result">{massage}</p>
      </div>
    </>
  );
}
