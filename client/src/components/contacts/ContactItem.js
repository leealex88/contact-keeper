import React from "react";

const ContactItem = () => {
    const {id,name, email, phone, type}
  return <div className="card bg-light">
      <h3 className="text-primary text-left">
            {name}{' '}<span className={'badge ' + (type === 'profesional' ? 'badge-success' : 'badge-primary')}>{type}</span>
      </h3>
  </div>;
};

export default ContactItem;
