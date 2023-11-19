import { Component } from "react";
import css from './Searchbar.module.css'

export class Search extends Component {
    state ={
        value:'',
    }

handleChange =({target:{value}})=>{
    this.setState({value})
}
 
handleSubmit =(e) => {
    e.preventDefault()
  this.props.handleSearch(this.state.value)
}

render(){
    return(

<header className={css.searchbar}>
  <form className={css.form} role ='search'
  onSubmit={this.handleSubmit}>
        <input
    className={css.input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange ={this.handleChange}
      value={this.state.value}
    />
    <button type="submit" className={css.button}>
      <span className={css.buttonLabel}>Search</span>
    </button>
  </form>
</header>
    )
}
}