import react, {Component} from 'react';
import { nanoid } from 'nanoid';
import Form from './Form'
import ContactsList from './ContactsList'
import Filter from './Filter'
import ModelDetails from './ModelDetails'
import css from '../components/box.module.css'
console.log(react)
class App extends Component{
  state = {
    contacts: [
      {name: 'Rosie Simpson', tel: '459-12-56', comment: 'spam'},
      {name: 'Hermione Kline', tel: '443-89-12', comment: 'spam'},
      {name: 'Eden Clements', tel: '645-17-79', comment: 'spam'},
      {name: 'Annie Copeland', tel: '227-91-26', comment: 'spam'},
    ],
    filter: '',
    showModal: false,
  }
  componentDidUpdate(prevProps, prevState){ // метод вызывается после первого вызова render()
    if(this.state.contacts !== prevState.contacts){
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount(){
    if(this.state.contacts){
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts'))
      })
    }
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
    const {name, tel, comment} = dataContact
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
  showModal = () => {
    this.setState(({showModal}) =>({
      showModal: !showModal
    }))
  }

  render(){
    const {filter, showModal} = this.state
    return(
      <>
        <div className={css.box}>
          <button type="button" onClick={this.showModal}>Открыть модалку</button>
          {showModal && <ModelDetails onShowModal={this.showModal}>
            <h1>Учи JS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, pariatur.</p>
            <button type="button" onClick={this.showModal}>Закрыть</button>
          </ModelDetails>}

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