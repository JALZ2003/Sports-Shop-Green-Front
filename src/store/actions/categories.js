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
            let all =  await axios.get(apiUrl + "categories", header())
            let categories = all.data
            return {
                categories
            }
        } catch (error) {
            return {
                categories: []
            }
        }
    }
)

const update_category = createAsyncThunk(
    "update_category",
    async ({obj })=> {
        try{
let one = await axios.put(apiUrl + "categories", + obj._id, {name:obj.name, color:obj.color}, header())
return one.data.response
        }catch(error){
            return null
        }
    }
)

const categories_actions = {
    create_category,
    read_categories,
    update_category
}
export default categories_actions