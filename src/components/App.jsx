import react, {Component} from 'react';
import { nanoid } from 'nanoid';
import Form from './Form'
import ContactsList from './ContactsList'
import Filter from './Filter'
import css from '../components/box.module.css'
class App extends Component{
  state = {
    contacts: [
      {name: 'Rosie Simpson', tel: '459-12-56', comment: 'spam'},
      {name: 'Hermione Kline', tel: '443-89-12', comment: 'spam'},
      {name: 'Eden Clements', tel: '645-17-79', comment: 'spam'},
      {name: 'Annie Copeland', tel: '227-91-26', comment: 'spam'},
    ],
    filter: '',
  }
  serchTel = (tel) => { // Проверка на совпадения номера в state
    let arrayNew = this.state.contacts
    return arrayNew.find(el=>el.tel === tel)
  }

  deleteTel = (telId) =>{ // Удаление номера из state
   this.setState(prevState=>({
     contacts: prevState.contacts.filter((contact, id) => { return id !== telId})
   }))
  }

  formData = (dataContact) =>{ // Функция обновления state
    const {id, name, tel, comment} = dataContact
    if(this.serchTel(tel)){
      alert(`${tel} такой номер уже есть в базе`)
    }else{
      const add = {
        id: nanoid(),
        name,
        tel,
        comment,
      }
      this.setState(prevState =>({
        contacts:[...prevState.contacts, add],
        filter:''
      }))
    }
  }

  upDataFilter = (dataFilter) => { // Функция обновляет state Filter
    this.setState({
      filter: dataFilter
    })
  }

  getVisable = () => {
    const {contacts, filter} = this.state
    const normalizaFilter = filter.toLowerCase()
    console.log(normalizaFilter)
    return contacts.filter(contact=>contact.tel.includes(normalizaFilter))
  }


  render(){
    const {filter} = this.state
    return(
      <>
        <div className={css.box}>
          <h2 className={css.titleTel}>Узнай кто звонил ? <br/>Если спам, добавь в базу номер!</h2>
          <Form onDataForm={this.formData} />
          <Filter value={filter} upDataFilterState={this.upDataFilter}/>
          <ContactsList onDeleteTel={this.deleteTel} onListContacts={this.getVisable()}/>
        </div>
      </>
    )
  }
}
export default App