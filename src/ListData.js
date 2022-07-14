import React from 'react'
import ListItem from './ListItem';
export default function ListData() {
    const Fruits = ['apple','banana','mango','grapes','papaya'];
  return (
    <div>
        <h3>List of Fruits</h3>
        <ul>
         
               {Fruits.map((fruit) => <ListItem name={fruit} />)}
        </ul>
    </div>
  )
}
