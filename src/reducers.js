import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
}    from "./constants"

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        default:
            return state
        case(CHANGE_SEARCHFIELD):
            return Object.assign({}, state, {searchField: action.payload})
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
}

// reducer used for fetching robots data from API
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){ // switch statement listens to action.type for changes
        case(REQUEST_ROBOTS_PENDING):
            return Object.assign({}, state, { isPending: true })
        case(REQUEST_ROBOTS_SUCCESS):
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case(REQUEST_ROBOTS_FAILED):
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state
    }
}