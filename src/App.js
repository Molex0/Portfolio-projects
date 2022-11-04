import React from 'react';
import './components/App.css';
import Dice from './components/Dice';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  function holdDice(id){
    setDice(oldDice => oldDice.map(dice =>
        dice.id === id ? {...dice, isHeld: !dice.isHeld}: dice
      ))
  }
  function generateNewDice(){
    return{
      value:Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice() {
    let array = []
    for(let i = 0; i < 10; i++){
      array.push(generateNewDice())
    }
    return array
  }

  function rollDice(){
    if(!tenzies){setDice(oldDice => oldDice.map(dice =>
      dice.isHeld ? dice : generateNewDice()
    ))}
    else {
      setTenzies(false)
      setDice(allNewDice)
    }
  }
  const newDice = dice.map(dice => <Dice value={dice.value} isHeld={dice.isHeld} id = {dice.id} holdDice={() => holdDice(dice.id)}/>)

  React.useEffect(() => {
    const isHeld = dice.every(dice => dice.isHeld)
    console.log(isHeld)
    const firstValue = dice[0].value
    const isEqual = dice.every(dice => dice.value === firstValue)
    if(isHeld && isEqual){
      setTenzies(true)
      console.log("GAME OVER")
    }
  },[dice])


  return (
      <main>
        {tenzies && <Confetti/>}
        <h1 className='title'>Tenzies</h1>
        <h2 className='text'>Roll until all dice are the same. Click <br/> each die to freeze it at its current value <br/>between rolls.</h2>
        <div className='dice-container'>
            {newDice}
        </div>
        <button onClick={rollDice} className='roll-button'>{tenzies ? 'RESTART':'ROLL'}</button>
      </main>
  )
}


