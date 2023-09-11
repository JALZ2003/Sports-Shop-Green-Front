import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import categoriesReducer from "./reducers/categories"
import creatorsReducer from "./reducers/creators";


const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		creators: creatorsReducer
	}
})

export default store