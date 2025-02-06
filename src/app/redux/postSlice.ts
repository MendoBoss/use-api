import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const postSlice = createSlice(
    {
        name:"post",
        initialState:[],
        reducers:{
            addPost:(state,actions)=>{      // Ajouter un post dans le store

                return state;
            },
            updatePost:(state,actions)=>{      // Modifier un post dans le store

                return state;
            },
            deletePost:(state,actions)=>{      // Supprimer un post dans le store

                return state;
            }
        }
    }
)

export const { addPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;