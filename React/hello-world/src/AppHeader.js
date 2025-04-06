// export default function AppHeader(){ //fuction name must start with capital
//     return(
//         <div>
//             <p>Header</p>
//         </div>
//     )
// }
import { Component } from "react";

export default class AppHeader extends Component{
    render(){
        return(
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subheading}</p>
            <hr></hr>
        </div>
        )
    }
}