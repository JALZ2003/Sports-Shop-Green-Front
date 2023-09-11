import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";
import creatorsReducer from "./reducers/creators";

const store = configureStore({
	reducer: {
		products: productsReducer,
		creators: creatorsReducer
	}
})

export default store