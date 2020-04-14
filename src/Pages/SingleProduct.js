import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from '../context'

export default class SingleProduct extends Component {
    state = {
        id: this.props.match.params.id
    }
    
    static contextType = ProductContext

    render() {
        console.log(this.state.id);
        
        
        return (
            <div>
                this is single product
            </div>
        )
    }
}

