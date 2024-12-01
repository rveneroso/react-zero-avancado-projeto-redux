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
        },
        addAddress: (state, action) => {

            if(action.payload.location === '' || action.payload.number === '') {
                alert("Preencha todos os campos");
                return { ...state}
            }

            if(state.user === null) {
                alert("faça o login para poder cadastrar um endereço");
                return { ...state }
            }

            alert("Dados atualizados");
            
            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        }
    }
})

export const { createUser, logoutUser, addAddress } = userSlice.actions;
export default userSlice.reducer;