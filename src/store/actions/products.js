import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import headers from "../../header"

const save_name = createAction('save_name', obj => {
    return { payload: { name: obj.name} }
})

const save_checks = createAction('save_checks', obj => {
    return { payload: { checks: obj.checks } }
})

const destroyProduct = createAsyncThunk(
    "destroyProduct",
    async (obj) => {
        try {
            let one = await axios.delete(apiUrl + "products/" + obj.product_id, headers())
            return {
                id_to_delete: one.data.response 
            }
        } catch (error) {
            return null
        }
    }
)

const productsActions = {
    save_name,
    save_checks,
    destroyProduct
}

export default productsActions