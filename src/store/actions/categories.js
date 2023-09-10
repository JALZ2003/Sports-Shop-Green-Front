import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import apiUrl from "../../apiUrl";
import header from "../../header"

const create_category = createAsyncThunk(
    "create_category",
    async (obj) => {
        try {
            let one = await axios.post(apiUrl + "categories", obj, header())
            return one.data.response
        } catch (error) {
            return null
        }
    }
);

const read_categories = createAsyncThunk(
    "read_categories",
    async () => {
        try {
            let categories = await axios.get(apiUrl + "categories", header())
            console.log(categories)
        } catch (error) {
            return {
                categories: []
            }
        }
    }
)

const categories_actions = {
    create_category,
    read_categories
}
export default categories_actions