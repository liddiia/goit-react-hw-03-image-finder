const { Component } = require("react");



export class Modal extends Component {
state ={}

componentDidMount(){
    window.addEventListener('keydown', this.handlePressESC)
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.handlePressESC)
}

hendlePressESC = (e) => {
    if(e.code === 'Escape')
this.props.closeModal() 
}
 render(){
const {closeModal, children} = this.props
return(

<div class={css.overlay}>
  <div class={css.modal}>
    <img src="" alt="" />
  </div>
</div>

)
 }


}