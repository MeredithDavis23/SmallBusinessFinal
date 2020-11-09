import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
// import AddListing from '../Containers/AddListing'

// const Listing = (props) => {
//     const id = props.match.params.id
//     const listing = props.listings.find(c => c.id == id)

 
const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user}</h4>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, idx) => (
                    <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>{listing.name}</TableCell>
                        <TableCell>{listing.details}</TableCell>
                        <TableCell>{listing.hours}</TableCell>
                        <TableCell>{listing.address}</TableCell>
                                  <TableCell>
                                  <DeleteIcon
                                      // add onClick method here
                                      onClick={() => props.removeListing(idx)}
                                      className="icon text-red" />
                               
                              </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing 