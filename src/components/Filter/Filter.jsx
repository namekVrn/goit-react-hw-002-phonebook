import react, {Component} from 'react'
import css from '../Filter/Filter.module.css'
console.log(react)
class Filter extends Component{
   
    upDataFilter = (evt) =>{
        const {value} = evt.currentTarget
        this.props.upDataFilterState(value)
     }
    render(){
        return(
            <>
            <input className={css.filterImput} type='text' placeholder='поиск по номеру' value = {this.props.value} onChange={this.upDataFilter}/>
            </>
        )
    }
}
export default Filter
