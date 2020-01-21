import React from 'react';
import './Grid.css';

const GridContainer = ({children}) => {
  return (
    <div className="flex-grid">{children}</div>
  )
};

const GridItem = ({children}) => {
  return (
    <div className="flex-col">{children}</div>
  )
};

const Grid = {
  Container: GridContainer,
  Item: GridItem
};

export default Grid;
