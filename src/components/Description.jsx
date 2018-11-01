import React from 'react';

const Description = (props) => {

    return (
    <article className="intro">
        <div className="card">
            <div className="preview">
                <img src={props.cover} alt={props.name} />
            </div>
        <div className="description-container">
            <p className="location">USA - {props.contact.state} - {props.contact.city}</p>
            <p className="description">{props.description}</p>
            <p className="learn-more">Learn More about <span className="designer-name">{props.name}</span></p>
        </div>
        </div>
    </article>
   
    )
}

export default Description