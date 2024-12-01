import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState, // Como o nome é o mesmo da constante definida anteriormente, não há a necessidade de atribuição
    reducers: {

    }
})

export default userSlice.reducer;