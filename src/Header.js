import React from 'react';
import Proptypes from 'prop-types';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {
      props.isVisible &&
        <h2>My age is {props.age}</h2>
    }
  </div>
)

Header.propTypes = {
  title: Proptypes.string,
  isVisible: Proptypes.bool,
  age: Proptypes.number
}

Header.defaultProps = {
  isVisible: true,
  age: 18
}

export default Header;