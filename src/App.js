import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import cat from './img/cat.jpg';
import dog from './img/dog.jpg';
import mine from './img/mine.jpg';


const people = [
  'Valera',
  'Oleg',
  'Nikita',
];

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState();

  const handleOpenModal = ({ man }) => {
    setIsOpen(!isOpen);
    switch (man) {
      case 'Valera':
        return setImg(cat);
      case 'Oleg':
        return setImg(dog);
      case 'Nikita':
        return setImg(mine);
      default :
        return
    }
  }

  return (
    <div>
      <p>Time</p>
      <hr />
      <ul>
        {people.map(man => {
          return <li key={man} onClick={() => handleOpenModal({ man })}>{man}</li>
        })}
      </ul>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleOpenModal}
        contentLabel="Modal"
        className={{
          base: 'modal-base',
          afterOpen: 'modal-base_after-open',
          beforeClose: 'modal-base_before-close'
        }}
        overlayClassName={{
          base: 'overlay-base',
          afterOpen: 'overlay-base_after-open',
          beforeClose: 'overlay-base_before-close'
        }}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
      >
        <img src={img} />
        <button onClick={() => handleOpenModal('null')}>Close</button>
      </Modal>
    </div>

  );
}

export default App;