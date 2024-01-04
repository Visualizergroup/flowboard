"use client"
import React, { useState } from 'react';
import { Navbar, Button, Modal } from 'react-bootstrap';

function HeaderComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="w-100">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Button variant="primary" onClick={handleShow} className='me-3'>
      Ohjeita
    </Button>
  </Navbar.Collapse>
</Navbar>

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

export default HeaderComponent;

