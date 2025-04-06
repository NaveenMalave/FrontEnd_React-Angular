import { Link } from "react-router-dom";
import EditContact from './EditContact.js';
const ContactCard =({contact,delFn})=>{
    return(
        <div className="card" style={{margin:'10px',width:'400px',padding:'10px',backgroundColor:"palegreen",color:"darkorange"}}>
            <div className="row">
                <div className="col-md-4">
                    <img src={contact.picture}
                     width='200px'
                     height='150px' style={{borderRadius:'5px'}}
                     className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {contact.name}
                        </h5>
                        <div className="card-text"> {contact.email}</div>
                        <div className="card-text">{contact.phone}</div>
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/edit-contact">Edit</Link>
                            </div>
                            <div className="col-md-6">
                            <button className="btn btn-danger" onClick={()=>delFn(contact.id)}>x</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactCard;