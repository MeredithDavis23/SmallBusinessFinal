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
import checkAuth from "../Router"
import { Link } from "react-router-dom";
import removeListing from '../Redux/Actions'
// import AddListing from '../Containers/AddListing'

// const Listing = (props) => {
//     const id = props.match.params.id
//     const listing = props.listings.find(c => c.id == id)

 
const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            {props.loggedIn && 
            <h4>Welcome, {props.user.user}</h4>
                }
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
                        <TableCell>
                            <Link to={`/Details/${listing.id}`} className='listingLink'>
                                {listing["name"]}
                            </Link>
                        </TableCell>
                        <TableCell>{listing.details}</TableCell>
                        <TableCell>{listing.hours}</TableCell>
                        <TableCell>{listing.address}</TableCell>
                        {checkAuth() && (
                                  <TableCell>
                         <DeleteIcon
                          onClick={() => props.removeListing(idx)}
                         className="icon text-red" />
                              </TableCell>
                              )}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing 