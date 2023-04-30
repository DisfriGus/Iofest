import React from 'react';
import Explore from './Explore';
import Destination from './Destination';
import Community from './Community';
import Feedback from './Feedback';

const Components = {
    explore: Explore,
    destination: Destination,
    community: Community,
    feedback: Feedback,
}

const Card = props => {
    const {type, ...rest} = props;
    const CardComponents = Components[type]
    return <CardComponents {...rest} />
}

export default Card;