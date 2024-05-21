import React, {useState} from 'react'
import axios from 'axios'
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4                         
  // the index the "B" is at

  export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [index, setIndex] = useState(initialIndex)
  const [email, setEmail] = useState(initialEmail)
  const [steps, setSteps] = useState(initialSteps)
  const [message, setMessage] = useState(initialMessage)
  
  function getXY() {
   
    let y
  const x = (index %3) + 1
   if ( index < 3)  {y=1
   } else if(index < 6) {
    y = 2
   }else{
    y = 3
   }
   console.log('x,y is currently ' + x + "," + y)
    return [x, y]
  }

  // It it not necessary to have a state to track the coordinates.  
 // It's enough to know what index the "B" is at, to be able to calculate them.
  
// let newError

  function getXYMessage() {
    //  newError(message)
    const [x,y] = getXY()
    return `Coordinates (${x},${y})`
  }
     
     
    
    
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  

  function reset() {
    setIndex(initialIndex)
    setEmail(initialEmail)
    setSteps(initialSteps)
    setMessage(initialMessage)
    }

    // Use this helper to reset all states to their initial values.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  function getNextIndex(direction) {
      switch (direction) {
      case 'right':
        return ((index - 2) % 3 === 0) ? index: index + 1

      case 'left':
        return (index % 3 === 0) ? index : index - 1
  
      case 'up':
        return (index < 3) ? index : index -3
  
      case 'down':
        return (index > 5 ) ? index : index + 3
        default : return index
    }
  }
    

    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  

  function move(evt) {
  
    const direction = evt.target.id
    const nextIndex = getNextIndex(direction)
    if (nextIndex !== index) {
      setSteps(steps + 1)
      setMessage(initialMessage)
      setIndex(nextIndex)
    }else {
      setMessage(`You can't go ${direction}`)
    }
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    setEmail(evt.target.value)
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    evt.preventDefault()
    const [x,y] = getXY()
   const URL = 'http://localhost:9000/api/result'
   axios.post( URL, {email, steps, x, y})
   .then(res => {
    setMessage(res.data.message)
    setEmail(initialEmail)
   })
   .catch(error => console.error('Error:', error))
   
    // Use a POST request to send a payload to the server.
  }

    return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">{`You moved ${steps} times`}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button onClick={move} id="left">LEFT</button>
        <button  onClick={move} id="up">UP</button>
        <button  onClick={move} id="right">RIGHT</button>
        <button  onClick={move} id="down">DOWN</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form>
        <input onChange={onChange} id="email" type="email" placeholder="type email" value={email}></input>
        <input onClick={onSubmit} id="submit" type="submit"></input>
      </form>
    </div>
  )
  }
