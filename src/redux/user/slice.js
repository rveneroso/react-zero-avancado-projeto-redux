import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState, // Como o nome é o mesmo da constante definida anteriormente, não há a necessidade de atribuição
    reducers: {
        createUser: (state, action) => {
            return {
                ... state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,
                },
            }
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        }
    }
})

export const { createUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;