import react, {Component} from 'react';
import css from '../Form/Form.module.css'
console.log(react)

class Form extends Component{
    state={
        name: '',
        tel: '',
        comment: '',
    }
    changeState = (evt) => {
        const {name, value} = evt.currentTarget
        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }
    formSubmit = (evt) => {
        evt.preventDefault()
        this.props.onDataForm(this.state)
        this.resetForm()
        
    }
    resetForm = () => {
        this.setState({
            name: '',
            tel: '',
            comment: ''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.formSubmit} className={css.form}type='submit'>
                <input
                    className={css.inputName}
                    type="text"
                    value={this.state.name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.changeState}
                    placeholder="имя"
                    />
                <input
                    className={css.inputName}
                    type="tel"
                    onChange={this.changeState}
                    name="tel"
                    value={this.state.tel}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="телефон"
                    />
                <input
                    className={css.inputName}
                    type="text"
                    onChange={this.changeState}
                    name="comment"
                    value={this.state.comment}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Комментари"
                    />    
                <button className={css.btn} type="submit">
                Добавить
                </button>    
            </form>
        )
    }
}
export default Form