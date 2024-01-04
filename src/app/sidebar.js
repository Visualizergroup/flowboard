"use client";
import React from 'react';
import DownloadButton from './downloadbutton';


const SideBar = ({onAdd}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onClick = (event, nodeType) => {
    onAdd('application/reactflow', nodeType)
    //event.dataTransfer.effectAllowed = 'move';
  }

  return (
    <aside>
      <div className="description">Aloita kirjoittamalla aloitusteksti(Botin painikkeen tervehdysteksti) Tämän tekstin on tarkoitus toimia herätteenä asiakkaalle.</div>
      <div className="description">Saat lisättyä elementtejä vetämällä ao. listasta flow alueelle tai klikkaamalla haluttua elementtiä</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable
      onClick={(event) => onClick(event, 'textUpdater')}
      >
        Start +
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdatercustom')} draggable
      onClick={(event) => onClick(event, 'textUpdatercustom')}
      >
        painike +
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'viewText')} draggable
      onClick={(event) => onClick(event, 'viewText')}
      >
        Näkymän teksti +
      </div>
      
      {/*
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'parentElement')} draggable>
        Ryhmä
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
  </div>*/}
      <div className="description">Saat poistettua elementi valitsemalla sen ja painamalla delete tai backspace.</div>
      <div className="description">Tallenna botin runko kuvana painamalla alla olevaa painiketta.
      <DownloadButton />
      </div>

     
    </aside>
  );
};

export default SideBar;