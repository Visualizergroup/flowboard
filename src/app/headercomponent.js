"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Infocomponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow} className='me-3'>
      Ohjeita
    </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ohjeet flown käyttöä varten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Aloita kirjoittamalla aloitusteksti(Botin painikkeen tervehdysteksti) Tämän tekstin on tarkoitus toimia herätteenä asiakkaalle.</p>
        <p>Saat lisättyä elementtejä vetämällä ao. listasta flow alueelle tai klikkaamalla haluttua elementtiä.</p>
        Saat poistettua elementin valitsemalla elementin ja painamalla delete tai backspace.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sulje
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Infocomponent;

