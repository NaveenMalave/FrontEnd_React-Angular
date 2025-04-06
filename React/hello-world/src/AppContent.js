import './AppContent.css';
import Counter from './Counter.js';
import ContactForm from './ContactForm.js';
import ContactFormCtrl from './ControlFormCtrl.js';
import {Link,Router, Routes,Route, BrowserRouter} from 'react-router-dom';
import ContactList from './ContactList.js';
import { useEffect, useState } from 'react';
import EditContact from './EditContact.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';
const Home=(props)=>{
    return(
    <div>
        <h3>welcome to Addressbook aplliction</h3>
        <hr></hr>
        <p>Powered by React</p>
    </div>
    )
}
const AppContent = () => {
    const [contacts,setContacts]=useState([]);
    const token = localStorage.getItem("token");
    const listofContacts = [];

    useEffect(()=>{
        fetch("http://localhost:8001/contacts",{
        Headers:{Authorization:`Bearer ${token}`}
        }).then(response=>{
            // console.log(res);
            response.json().then(data=>{
                setContacts(data);
                console.log(data);
            })
        });
    //     axios.get("http://localhost:8001/contacts",{
    //         Headers:{Authorization:`Bearer ${token}`}
    //     }).then(res=>{
    //         console.log('data:',res.data);
    //         setContacts(res.data);
    //     }).catch(err=>console.log(err));
    },[]);
    
   
    const delFn=(id)=>{
        if(window.confirm('want to delete ?')){
            fetch(`http://localhost:8001/contacts/${id}`,{
                method :"DELETE"
            },{
                Headers:{Authorization:`Bearer ${token}`}
            }).then(response=>{
                // console.log(res);
               
                    fetch("http://localhost:8001/contacts").then(res=>{
                        res.json().then(data=>{
                            setContacts(data);
                        })
                        
                    });
                    
                    // console.log(data);
                } )
                // axios.delete(`/${id}`)
            };

        for(let i=0;i<contacts.length;i++){
            if(contacts[i].id==id){
                contacts.splice(i,1);
                alert('record delectd'+id);
                setContacts([...contacts]);
            }
        }
        console.log(contacts);
    }
        
    
    return (
        <BrowserRouter>
            <div className="app-content">
                {/* <h3>This is  acontent of  Application</h3> */}
                {/* <Counter/> */}
                {/* <ContactForm/> */}
                {/* <ContactFormCtrl/> */}
                {/* <ContactList contacts={contacts}/> */}
                {/* <ContactList/> */}
              {/* <Login/> */}
                {/* <input type="button" class="btn btn-primary" value='submit'></input> */}
                {/* <button className='btn btn-primary' onClick={()=>{
                console.log('Button 1 clickedd')
            }}>Buttton</button> */}
                <div className='row'style={{backgroundColor:"lightcyan"}}>
                    <h1 className='alert-alert-info'>React App</h1>
                </div>
                    <div className='row'style={{backgroundColor:"whitesmoke"}}>
                        <div className='col-md-4'>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='list-group-item'>
                                   <Link to="/add-new-contact"> Add new Contact</Link>
                                </li>
                                <li className='list-group-item'>
                                    <Link to="/view-all-contact">view all contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-8'>
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route  element={<ProtectedRoute/>}>
                            <Route path="/" exact={true} element={<Home/>}/>
                            <Route path='/add-new-contact' element={<ContactFormCtrl/>}/>
                            <Route path='/view-all-contact' element={<ContactList contacts={contacts} delFn={delFn}/>}/>
                            <Route path='/edit-contact' element={<EditContact/>}/>
                            </Route>
                        </Routes>
                        </div>
                    </div>
                
            </div>
        </BrowserRouter>
    );
}
export default AppContent;