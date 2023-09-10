import { createReducer } from "@reduxjs/toolkit"
import categories_actions from "../actions/categories"

const { create_category, read_categories } = categories_actions

const initial_state = {
    categories: []
}

const categoriesReducer = createReducer(
    initial_state,
    builder => builder.addCase(
        create_category.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                categories: [action.payload, ...state.categories]
            }
            return new_state
        }
    ).addCase(
        read_categories.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                categories: action.payload.categories,
            }
            return new_state
        }
    )



)
export default categoriesReducer