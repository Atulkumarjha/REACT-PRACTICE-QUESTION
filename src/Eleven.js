//CREATE A COMPONENT ON WHICH QUOTES CHANGE ON EVERY RENDERING
import React from 'react'

const Eleven = () => {


    let quotes = ["Less is more","Do or do not. There is no try","Stay hungry, stay foolish","Be yourself; everyone else is already taken.",
        "Happiness depends upon ourselves","Life is short, and it is up to you to make it sweet.","In the middle of difficulty lies opportunity.",
        "Turn your wounds into wisdom","Action is the foundational key to all success.","What we think, we become."];

        const randomQuote = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomQuote];
        
    
  return (
    <div>
      {quote}
    </div>
  )
}

export default Eleven
