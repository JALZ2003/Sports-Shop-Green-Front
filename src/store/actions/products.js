import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import headers from "../../header"
import Swal from "sweetalert2";

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

const updateProduct = createAsyncThunk(
    "updateProduct",
    async (obj) => {
        try {
            let one = await axios.put(apiUrl + "products/" + obj.product_id,
             {
                name : obj.name,
                category_id: obj.category_id,
                price: obj.price,
                stock: obj.stock,
                sex: obj.sex,
                url_photo: obj.url_photo,
                description: obj.description,
            }, headers())
            return one.data.response
        } catch (error) {
            return null
        }
    }
)

const productsActions = {
    save_name,
    save_checks,
    destroyProduct,
    updateProduct
}

export default productsActions