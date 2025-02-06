import { createSlice } from "@reduxjs/toolkit";
import { UserAndToken } from "./types";


type AuthUserOrNull = UserAndToken | null;

const initialState : AuthUserOrNull = null;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state , actions) =>{
            // retourner la nouvelle valeur de user (state)
            return actions.payload;
        }
    }
})

// exportation de mes actions creator ' fonctions qui permettent d'ecrire dans mon 
export const { saveUser } = userSlice.actions

// exportation de mon reducer userSlice
export default userSlice.reducer;