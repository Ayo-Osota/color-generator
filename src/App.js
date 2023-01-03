import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
// const colors = new Values('hsl(204deg 100% 50% / 1)');
// colors = color.all(20);

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            className={`${isError ? 'error' : null}`}
            placeholder='#f15025'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, index) => {
          return <SingleColor key={index} {...color} index={index}
          hexColor={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
