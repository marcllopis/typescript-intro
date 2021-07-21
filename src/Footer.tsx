import React from 'react';

type Props = {
  title: string,
  subtitle: string,
  moreText?: 'This is more text default value',
  age?: number,
  isVisible?: boolean,
  status?: 'married' | 'single',
  arrayOfStudents?: [],
  arrayOfNames?: string[],
  userObject?: object,
  userDetails?: {
    name: string,
    age: number,
    isAlive?: boolean
  }
}

const Footer = ({ title, subtitle, age, isVisible, moreText }: Props) => (
  <div>
    <h1>{title}</h1>
    {
      isVisible &&
      <h3>{subtitle} the age is {age}</h3>
    }
    <h4>{moreText}</h4>
  </div>
)

export default Footer;
