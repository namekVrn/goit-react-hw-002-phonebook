import react, {Component} from 'react'
import css from '../ContactsList/ContactsList.module.css'
class Contacts extends Component{
    
    render(){
        return(
            <>
                <ul className={css.listener}>
                   {this.props.onListContacts.map((elem,id)=>{return (
                       <li className={css.listItem}key={id}>
                           <p className={css.name}>{elem.name}</p>
                           <a className={css.contantsLink} href="tel:`${elem.tel}`">{elem.tel}</a>
                           <p className={css.spam}>{elem.comment}</p>
                           <button type='button' onClick={()=>this.props.onDeleteTel(id)}>удалить</button>
                       </li>
                   )
                })} 
                </ul>
            </>
        )
    }
}
export default Contacts