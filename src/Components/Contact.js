import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Contact(props) {
  const { contact, handleDelete } = props.data;

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.age}</td>
      <td>{contact.country}</td>
      <td>{contact.gender}</td>
      <td>{contact.date}</td>
      <td> 
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(contact?.id);
          }}>
          <i className="fa fa-trash "></i>
        </button>
      </td>
    </tr>
  );
}
