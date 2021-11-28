import React from 'react';
import LastAdded from './LastAdded';
import Formular from './Form';
import ContactList from './ContactList';
import '../Styles/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...props,
        formData: {
          id:'',
          gender: '',
          name: '',
          age: '',
          date: '',
          country: ''
        },
        contactList: []
      };
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        contactList: [
          ...this.state.contactList,
          { ...this.state.formData, id: uuidv4()  }
        ]
      });
    };
  
    handleChange = (e) => {
      this.setState({
        formData: { ...this.state.formData, [e.target.name]: e.target.value }
      });
    };
  
    handleDelete = (id) => {
      this.setState({
        contactList: this.state.contactList.filter((contact) => contact.id !== id)
      });
    };
  
    render() {
        return (         
        <div className="App">
            <div id="header" className="container mt-2 center">
            <LastAdded data={{
                    contact: this.state.contactList.at(-1),
                    }}
             />
            </div>
            <div  id="container">
                <div id="first">
                <div className="container">
                <div className="card">
                <div className="card-body">
                <Formular
                    data={{
                    formData: this.state.formData,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange
                    }}
                />
                   
                </div>
                </div>
                </div>
                </div>
                <div id="second" className="card card-body "> 
                <h3 className="text-center">list of users</h3>
                <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Country</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date</th>
                            <th scope="col">Delete</th>

                        </tr>
                        </thead>     
                            <tbody>             
                            <ContactList data={{
                             contactList: this.state.contactList,
                             handleDelete: this.handleDelete
                            }} />
                            </tbody>
                </table>              
                
                </div>
            </div>
        </div>
    );
    }   
}