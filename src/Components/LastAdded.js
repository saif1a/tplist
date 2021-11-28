import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../Styles/LastAdded.css';

export default function LastAdded(props) {
  const { contact } = props.data;


  return (
    <div className="card bg-c-blue order-card">
        <div className="card-block">
            <h6 className="m-b-20">LastAdded :</h6>
            <h2 className="text-right"><span>{contact?.name}</span></h2>
        </div>
    </div>
  );
}