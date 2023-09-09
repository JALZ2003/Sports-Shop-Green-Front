import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";

const { save_name, save_checks } = productsActions

const initialState = {
    name: "",
    checks: [],
}

const productsReducer = createReducer(
    initialState,
    (builder) => builder.addCase(save_name, (state, action) => {
        const newState = { ...state, name: action.payload?.name }
        return newState;
    }).addCase(save_checks, (state, action) => {
        const newState = { ...state, checks: action.payload?.checks }
        return newState;
    })
)

export default productsReducer;