import React from 'react';

import './card.style.scss';

export const Card = (props) => (
    <div className="card-container">
        <img alt="groupement" src={`https://robohash.org/${props.grp.id}?set=set2&size=180x180`} />
        <h2>{props.grp.name}</h2>
        <p>{props.grp.email}</p>
    </div>
);