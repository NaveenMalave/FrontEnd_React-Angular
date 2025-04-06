import ContactCard from "./ContactCard";

const ContactList=({contacts,delFn})=>{
    
return(
    contacts.map(c=><ContactCard key={c.id} contact={c} delFn={delFn}/>)
)
}
export default ContactList;