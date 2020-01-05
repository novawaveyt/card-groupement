import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.scss'

export const CardList = (props) => (
    <div className='card-list'>
        {
          props.grp.map(grp => (
          <Card key={grp.id} grp={grp} />
          ))
        }

    </div>
);