import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string,
    email: string,
    created_at: string,
    update_at: string,
    id: number
}
export interface UserState{
    user: User,
    token: string
}

const initialState : UserState = null;

export const userSlice = createSlice{
    name: "user",

}