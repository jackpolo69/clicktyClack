import React from 'react';
import './ImageDiv.css';

const ImageDiv = props => (
    <div className="col-3">
        <div className="imageBox imgSize" key={props.id} onClick={() => props.handleClick(props.id)}>
            <img alt={props.name} src={props.src} />
        </div>
    </div>
)

export default ImageDiv;