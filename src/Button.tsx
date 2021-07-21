import React from 'react';

type Props = {
  // handleClick(): void, // returns nothing
  // handleClick: () => void // same thing
  // handleClick(): string // returns a string
  handleClick(text: string): void // returns void and adds a parameter with type string
}

const Button = ({handleClick}: Props) => (
  <button onClick={() => handleClick('this is a parameter')}>
    Click here!
  </button>
)

export default Button;
