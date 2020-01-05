import React from 'react';

import './card.style.scss';

export const Card = (props) => (
    <a href={props.grp.gr_internet}>
    <div className="card-container">
        <img alt="groupement" src={props.grp.logo} />
        <h2>{props.grp.name}</h2>
        <hr size="1" width="20" />
        <p>{props.grp.gr_adr1}{props.grp.gr_adr2}</p>
        <p>{props.grp.gr_code} {props.grp.gr_ville}</p>
    </div>
    </a>
);