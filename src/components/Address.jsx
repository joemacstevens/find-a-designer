import React from 'react';


const Address = (props) => { 
    
    const phone = `${props.contact.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}`;

    return (
        <article className="contact">
         <div className="card">
        <div className="logo">
          <img src={props.logo} alt={props.contact.name} />
        </div>
        <div className="display-addresss">
            <p className="breadcrumbs">USA - {props.contact.state} - {props.contact.city}</p>
          <address className="address">
            <p>{props.contact.address} <br /> {props.contact.city},{props.contact.state} <br /> {props.contact.zip_code}</p>
            <p className="phone">{phone}</p>
          </address>
        </div>
        </div>
      </article>

    )

}

export default Address