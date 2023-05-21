import { ADD_FAVORITES, ADD_DETAILS, REMOVE_FAVORITES,
ADD_LOGGED_USER,
ADD_TOGGLE_LOGIN,
ADD_LOGGED_PROFILE } from "./actionTypes";

export const addToFavorites=(payload)=>(
    {
    type:ADD_FAVORITES,
    payload,
    
} )

export const addToDetails=(payload)=>(
    {
    type:ADD_DETAILS,
    payload,
    
} )

export const removeFromFavorites=(payload)=>(
    {
        type: REMOVE_FAVORITES,
        payload,
    }
)

export const handleAddLoggedProfile= (payload) => ({
        type: ADD_LOGGED_PROFILE,
        payload,
        });

    export const handleAddLoggedUser=(payload)=>({
        type:ADD_LOGGED_USER,
        payload,
    });

    export const handleAddToggleLogin=(payload)=>({
        type:ADD_TOGGLE_LOGIN,
        payload,
    });


