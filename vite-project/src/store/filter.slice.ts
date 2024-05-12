import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Filters {
    filter: string
}

const initialState: Filters = {
    filter: ""
}

export const filterSlice = createSlice({
    name: "filters",
    initialState, 
    reducers: {
            setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        }
    }
})


export default filterSlice.reducer;
export const  filterAction = filterSlice.actions;