// import Package
import React from 'react';

/**
 * In below function, it will call itself(function) again and again recursively
   till getting children in data.
 * @param {object} props
 * @returns node
 */
const Menu = (props) => {
  // destructuring with props validation
  const { place = '' } = props || {};

  // Jsx
  return (
    <ul>
      {/* map function used to iterate over an array
        most commonly use for rendering a list of data to the DOM */}
      {place.map((m) => {
        return (
          <li key={m.key}>
            {m.value}
            {m.children && <Menu place={m.children} />}
          </li>
        );
      })}
    </ul>
  );
};
// exporting to access data in other files by importing.
export default Menu;
