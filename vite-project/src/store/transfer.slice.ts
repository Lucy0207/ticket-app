import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type SelectAllPayload = string[];

export interface Transfers {
    selected: string[]
}

const initialState: Transfers = {
    selected: [] as SelectAllPayload,
}

const transferSlice = createSlice({
    name: "transfers",
    initialState,
    reducers: {
        addToSelect: (state, action: PayloadAction<string>) => {
            state.selected.push(action.payload)
        },
        removeFromSelect: (state, action: PayloadAction<string>) => {
            state.selected = state.selected.filter((item) => item !== action.payload)
        },
        selectAll: (state, action: PayloadAction<SelectAllPayload>) => {
            state.selected = action.payload;
        },
        unselectAll: (state) => {
            state.selected = []
        }
    }
})

export default transferSlice.reducer;
export const  transferAction = transferSlice.actions;