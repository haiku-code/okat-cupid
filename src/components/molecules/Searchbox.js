import React from 'react';
import Textbox from '../atoms/Textbox';
import IconButton from '../atoms/IconButton';

const Searchbox = ({textProps, clear}) => {
  return (
    <>
      <Textbox {...textProps}/>
      {
        (textProps.value) &&
        <IconButton.Static onClick={clear}
                           iconClass="clear"
                           wrapperClass="clear-button"/>
      }
    </>
  )
};

export default Searchbox;
