import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createRef } from "react";

import ContactForm from "./ContactForm.js";
const EditContact=()=>{
    const {id} =useParams();
    const name = createRef();
    const email=createRef();
    const phone=createRef();
    const picture = createRef();
    
    const[data,setData]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:8001/contacts/${id}`).then(res=>res.json()).then(data=>{
            setData(data);
        })
},[])
    const saveContact=()=>{
        let contact ={id,name,email,phone,picture};
        console.log("contact updated",contact);
    }
    
    return(
        <div>
        <h3>Edit  Contact form</h3>
        {/* onSubmit={this.addNewContact} */}
        <form className="form" >
            <div className="form-group row">
                <label htmlFor="name" className="control-label col-md-4">Name:</label>
                <div className="col-md-8">
                <input onChange={this.txtHandler} value={this.state.name} name="name"type="text"   className="form-control"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="" className="control-label col-md-4">Email:</label>

                <div className="col-md-8">
                    <input onChange={this.txtHandler} value={this.state.email} name="email" type="text" className="form-control"></input>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="" className="control-label col-md-4">Phone:</label>
                <div className="col-md-8">
                <input onChange={this.txtHandler} value={this.state.phone}name="phone" type="text" className="form-control"></input>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="" className="control-label col-md-4">Picture:</label>
                <div className="col-md-8">
                <input onChange={this.txtHandler} value={this.state.picture} name="picture"type="text" className="form-control"></input>
                </div>
            </div>
            <button className="btn btn-secondary">Save Data</button>
        </form>
        <ul>
            {this.state.errorMessage}
        </ul>
    </div>              
    )
}
export default EditContact;