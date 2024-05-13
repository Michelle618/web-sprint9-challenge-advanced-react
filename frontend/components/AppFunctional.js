import React from 'react'

const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4                         
  // the index the "B" is at
const [index, setIndex] = useState(4)
const [email, setEmail] = useState('')
const [steps, setSteps] = useState(0)
const [x, setX] = useState(x)
const [y, setY] = useState(y)
  export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  function getXY() {
   
    let y
  const x = (index %3) + 1
   if ( index < 3)  {y=1
   } else if(index < 6) {
    y = 2
   }else{
    y = 3
   }
    return [x, y]
  }
}
  // It it not necessary to have a state to track the coordinates.  
 // It's enough to know what index the "B" is at, to be able to calculate them.
  
let newError
let createErrorMessage
  function getXYMessage() {
     newError(message)
    try { 
    if (x < 4) {
      throw createErrorMessage("You can't go up")
    }
  }
      catch(error) {
        console.error(error.message)
      }
     
      try {
     if 
      (x === 1 || x === 3 || x === 7) {
      throw createErrorMessage("You can't go left")
      } 
    }
      catch(error) {
        console.error(error.message)
      }

      try {  
       if 
        (x > 6 && x < 10) {
         throw createErrorMessage("You can't go down")
        }
      }
        catch(error) {
        console.error(error.message)
      }
    }
      try {
      if 
        (x === 3 || x === 6 || x === 9) {
           throw createErrorMessage("You can't go right")
          }
        }
          catch(error) {
            console.error(error.message)
          }
    
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  

  function reset() {

    // Use this helper to reset all states to their initial values.

  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  function getNextIndex(direction) {
      switch (direction) {
      case 'right':
        return ((index - 2) % 3 === 0) ? index: index + 1

      case 'left':
        return (index % 3 === 0) ? index : index - 1
  
      case 'up':
        return (index < 3) ? index : index -3
  
      case 'down':
        return (index < 5 ) ? index : index + 3
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

    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    setEmail(evt.target.value)
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    evt.preventDefault()
   post.axios = 'http://localhost:9000/api/result'
    // Use a POST request to send a payload to the server.
  }

    return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input onChange={onChange} id="email" type="email" placeholder="type email"></input>
        <input onSubmit={onSubmit} id="submit" type="submit"></input>
      </form>
    </div>
  )

