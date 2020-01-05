import React from 'react';

import './card.style.scss';

export const Card = (props) => (
    <a href={props.grp.gr_internet}>
    <div className="card-container">
        <img alt="groupement" src={props.grp.logo} />
        <div className="title">{props.grp.name}</div>
        <div className="adresse">{props.grp.gr_adr1}</div>
        <div className="adresseb">{props.grp.gr_adr2}</div>
        <div className="adresse2">{props.grp.gr_code} {props.grp.gr_ville}</div>
    </div>
    </a>
);