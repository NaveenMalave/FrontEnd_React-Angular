import { Component } from "react";

export default class ContactFormCtrl extends Component{
    state={
        id:0,
        name:'',
        email:'',
        phone:'',
        picture:'',
        formErrors:{
            name:"name is required",
            email:"Email is required",
            phone:"phone no is required"
        },
        errorMessage:''
    }
constructor(){
    super();
    // this.name = createRef('');
    // this.email = createRef('');
    // this.phone = createRef('');
    // this.picture = createRef('');
}
//////////


  /////

    addNewContact=(event)=>{
        event.preventDefault();


        let {formErrors}=this.state;
        //check the form Errors
        if(this.validateForm(formErrors)){
            alert('All is well');
        }
        let errorMessage=Object.values(formErrors).map((err,index)=>{
           return err.length===0?null:<li key={index}>{err}</li>
        });
        this.setState({errorMessage});//this will display in the form 
        let data={
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone, 
            picture:this.state.picture
        };
        console.log('new contact added:',data);
        fetch('http://localhost:5220/api/Contact/AddContact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('Success:', data);
            alert('Contact added successfully');
        })
        .catch((err) => {
            console.error('Failed to add contact:', err);
        });        
    }
    validateForm=(formErrors)=>{
        let valid = true;
        Object.values(formErrors).forEach(err=>valid=valid && err.length===0);
        return valid;
    }
    txtHandler=(event)=>{
        let name = event.target.name;
        let value= event.target.value;
        console.log(name,value);
        this.setState({[name]:value});
        let{formErrors}=this.state;
        switch(name){
            case 'name':
                if(!value || value.length==0){
                    formErrors.name='Name is required';
                }else if(value.length>3 || value.length<20){
                    formErrors.name="Name must be between 3 to 20 letters";
                }else{
                    formErrors.name='';
                }break;
                case 'email':
                    if(!value || value.length==0){
                        formErrors.email="Email is required";
                    }else if(!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                        formErrors.email="invalid email";
                    }else{
                        formErrors.email='';
                    }
                    break;
                case 'phone':
                    if(!value || value.length==0){
                        formErrors.phone="phone is required";
                    }else if(!value.match(/^\d{10,12}$/)){
                        formErrors.phone="Not a valid phone";
                    }else{
                        formErrors.phone='';
                    }
                    break;
                    default:
                        break;
        }
        // this.setState({[name]:value,formErrors});
        // this.state.setState({
        //     name:event.target.value
        // });
    }
    render() {
        return (
            <div>
                <h3>Add a New Contact form</h3>
                <form className="form" onSubmit={this.addNewContact}>
                <div className="form-group row">
                        <label htmlFor="id" className="control-label col-md-4">Id:</label>
                        <div className="col-md-8">
                        <input onChange={this.txtHandler} value={this.state.id} name="id"type="number"   className="form-control"></input>
                        </div>
                    </div>
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
}