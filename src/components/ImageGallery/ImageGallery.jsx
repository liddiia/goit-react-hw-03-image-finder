import { Component } from "react";
import { getImage } from "components/getImage/getImage";

export class ListGallery extends Component {
    state = {}
    componentDidUpdate(prevProps, prevState) {
        if( prevProps.searchText!==this.props.searchText){
            getImage(this.props.searchText)

        } 
    }

render() {
    return

    <>


    </>
}

   
}