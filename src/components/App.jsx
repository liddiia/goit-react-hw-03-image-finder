 import React, { Component } from "react";
 import { render } from "react-dom";
import { Search } from "./Searchbar/Searchbar";
import { ListGallery } from "./ImageGallery/ImageGallery";


 export class App extends Component {
  state = {
    searchText:'',
//   image = {id,
//     webformatURL,
//     largeImageURL,
//   },
//     isLoading: false,
   };


//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     const response = await axios.get("/search?query=react");
//     this.setState({
//       articles: response.data.hits,
//       isLoading: false,
//     });
//   }


showModal = () =>{
  this.setState({isShowModal: true})
}
closeModal =() => {
  this.setState({isShowModal: false})
}
  

handleSearch =(searchText) => {
  this.setState({searchText})
}
render(){
  return(
    <>
    <Search handleSearch={this.handleSearch}/>
    <ListGallery searchText={this.state.searchText}/>
  </>
  )
}


 }