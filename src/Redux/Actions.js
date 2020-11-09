// delete a listing, add a listing, login/logout, and fetch coordinates for your map given a certain address

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING', 
        value: index
    }
}

export const userLogin = (user) => {
    return {
        type: 'USER_LOGIN', 
        value: user
    }
}