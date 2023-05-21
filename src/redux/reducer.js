import {ADD_FAVORITES, ADD_DETAILS, REMOVE_FAVORITES,
ADD_LOGGED_PROFILE,
ADD_TOGGLE_LOGIN,
ADD_LOGGED_USER} from "./actionTypes.js";
const initialState={
    details:[],
    favorites:[],
    loggedProfile:{},
    loggedUser:"",
    login:false,
};
     
    const reducer=(state=initialState, action)=>{
console.log(action.payload);
console.log(state);
    switch(action.type){
        case ADD_FAVORITES:
            
            return{
                ...state,
                favorites:[...state.favorites, action.payload],
                
                //book_id : [ ...state.book_id, action.payload.id],
                
            }
            
            case ADD_DETAILS:
            return{
                ...state,
                details:[...state.details, action.payload],
                
                //book_id : [ ...state.book_id, action.payload.id],
                
            }

            
            case REMOVE_FAVORITES:
            const index=state.favorites.findIndex((book)=>book.id===action.payload.id);
                return{
                    
                    ...state,
                    favorites:[...state.favorites.slice(0, index),
                    ...state.favorites.slice(index+1),]
                };

                case ADD_LOGGED_PROFILE:
                return{
                ...state,
                loggedProfile: action.payload,
            }

            case ADD_LOGGED_USER:
            console.log(action.payload);
            return{
                ...state,
                loggedUser:action.payload,
            }

            case ADD_TOGGLE_LOGIN:
            console.log(action.payload);
            return{
                ...state,
                login:action.payload,
            }

            default:
                return state;
    }
    
}

export default reducer;