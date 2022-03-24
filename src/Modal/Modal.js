import React from 'react';
import './Modal.css';

export const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <button onClick={() => handleOpen()}>Open modal</button>
      {
        open &&
        <div className='modal'>
          <div className='modal-body'>
            <h1>Modal title</h1>
            <p>I am awesome modal</p>
            <button onClick={() => handleOpen()}>Close</button>
          </div>
        </div>
      }

    </React.Fragment>
  )
}