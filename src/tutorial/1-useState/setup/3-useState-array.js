import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people , setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople;
    })
  }
  return (
    <>
      {people.map((person) => {
        const {id , name} = person
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  )
};

export default UseStateArray;
