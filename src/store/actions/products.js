import { createAction} from "@reduxjs/toolkit";

const save_name = createAction('save_name', obj => {
    return { payload: { name: obj.name} }
})

const save_checks = createAction('save_checks', obj => {
    return { payload: { checks: obj.checks } }
})

const productsActions = {
    save_name,
    save_checks
}

export default productsActions