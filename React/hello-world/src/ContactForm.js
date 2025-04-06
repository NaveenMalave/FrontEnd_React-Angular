import { Component, createRef } from "react";
class ContactForm extends Component {
    // this.name = createRef('');
    // this.email = createRef('');
    // this.phone = createRef('');
    // this.picture = createRef('');
    name=createRef();
    email=createRef();
    phone=createRef();
    picture=createRef();
    
constructor(){
    super();
    
}
    addNewContact=(event)=>{
        event.preventDefault();
        
        const contactData={
        name:this.name.current.value,
            email:this.email.current.value,
            phone:this.phone.current.value, 
            picture:this.picture.current.value
        };
        console.log('add new contact');
        console.log('new contact',contactData)
        // console.log(this.ref)
    }
    // txtHandler=(event)=>{
    //     let name = event.target.value;
    //     let value= event.target.value;
    //     console.log(name,value);
    //     this.setState({name:value});
        // this.state.setState({
        //     name:event.target.value
        // });
    // }
    render() {
        return (
            <div>
                <h3>Add a New Contact form</h3>
                <form className="form" onSubmit={this.addNewContact}>
                    <div className="form-group row">
                        <label htmlFor="name" className="control-label col-md-4">Name:</label>
                        <div className="col-md-8">
                        <input type="text" className="form-control" ref={this.name}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="eamil" className="control-label col-md-4">Email:</label>

                        <div className="col-md-8">
                            <input type="text" className="form-control" ref={this.email}></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phone" className="control-label col-md-4">Phone:</label>
                        <div className="col-md-8">
                        <input  type="text" className="form-control" ref={this.phone}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="picture" className="control-label col-md-4">Picture:</label>
                        <div className="col-md-8">
                        <input type="text" className="form-control" ref={this.picture}></input>
                        </div>
                    </div>
                    <button className="btn btn-secondary">Save Data</button>
                </form>
            </div>
        )
    }
}
export default ContactForm;