import {Component} from 'react'
export class Button extends Component {
    
    render(){
       const {text, onClick, disabled} = this.props 
       return (
       <div class='button-container'>
       <button disabled ={disabled} className ='button' onClick ={onClick}>
           {text}
        </button>
        </div>
        )
    }
}