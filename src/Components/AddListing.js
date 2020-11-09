import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

import GoogleMapsContainer from './Map'

class AddListing extends Component {
    state = {
        open: false,
        name: '',
        details: '',
        hours: '',
        address: '',
        
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const payload = { ...this.state }
        // payload.id = this.props.carTotal + 1
        // delete payload.open
        // console.log("THE RESTAURANT", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        // this.props.addListing(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                details: '',
                hours: '',
                address: ''
            })
        }
    }

    render() {
        return (
            <div>
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Restaurant:</h1>
                    <Button
                        variant="contained"
                        className="add-listing"
                        onClick={this.toggleDialog}
                    >
                        Add Restaurant
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Restaurant</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="details" 
                                    placeholder="Details" 
                                    value={this.state.details} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
            <GoogleMapsContainer />
            </div>
        )
    }
}

export default AddListing







// import React from 'react';

// const AddListing = () => {
//     return ( 
//         <div>
//             Add Listing
//         </div>
//      );
// }
 
// export default AddListing;