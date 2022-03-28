import react, {Component} from 'react';
import {createPortal} from 'react-dom';
import '../ModelDetails/ModelDetails.css'
const modalRoot = document.querySelector('#modalRoot')

class ModelDetails extends Component{
    componentDidMount(){
        window.addEventListener('keydown', this.keydown)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.keydown)
    }
    keydown = (evt)=>{
        if(evt.code === 'Escape'){
            console.log('нажалт esc')
            this.props.onShowModal()
        }
    }
    backDrophiden=(evt)=>{ // Метод отвечает за скрытие модалки при нажатии на backDrop
        if(evt.currentTarget === evt.target){
            this.props.onShowModal()
        }
    }
    render(){
        return(
            createPortal(<div onClick={this.backDrophiden} className='modal__backdrop'>
            <div className='modal__content'>{this.props.children}</div>
            </div>, modalRoot)
            
        )
    }
}
export default ModelDetails