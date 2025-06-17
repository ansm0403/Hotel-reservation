
import { BookingData } from "@/pages/BookingPage";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { SearchQuery } from "./atom/search";

const initialBookingData = {
    hotelId : "",
    from : undefined,
    to : undefined,
    room : undefined,
    roomIdx : 0,
    roomId : "",
    adults : undefined,
    children : undefined,
    nights : 0,
    price : 0
} as BookingData

const bookingSlice = createSlice({
    name : 'booking',
    initialState : initialBookingData,
    reducers : {
        SET(state) {
            return { ...state }
        }
    }
})

const navbarSlice = createSlice({
    name : 'navbar',
    initialState : false,
    reducers : {
        TOGGLE(state) {
            return !state
        }
    }
})

const initialSearchQuery = {
    keyword : "",
    city : ""
} as SearchQuery

const searchSlice = createSlice({
    name : 'searchQuery',
    initialState : initialSearchQuery,
    reducers : {
        SET(state, action){
            return { ...action.payload }
        }
    }
})

const store = configureStore({
    reducer : {
        booking : bookingSlice.reducer,
        navbar : navbarSlice.reducer,
        searchQuery : searchSlice.reducer
    }
})

export type ReduxState = ReturnType<typeof store.getState>;

export const bookingActions = bookingSlice.actions;
export const navbarActions = navbarSlice.actions;
export const searchQueryActions = searchSlice.actions;

export default store;