import React from "react";
import "./Favorites.css";
import {useDispatch, useSelector} from "react-redux";
//import { useParams } from "react-router";
import {addToDetails, removeFromFavorites} from "../redux/actions";
import { useNavigate } from "react-router";

const Favorites=()=>{
    //const params=useParams();
    const dispatch=useDispatch();
   // console.log(params.id)
//console.log(props)
const navigate=useNavigate();
const {favorites} = useSelector((state) => state);
let newFav=favorites.filter((c,index)=>{
    return favorites.indexOf(c)===index;
});
console.log(newFav);
console.log(favorites);

const handleAddDetails=(book)=>{
        dispatch(addToDetails(book));
        navigate(`/book/${book.id}`);
    }
    return(
        <div className="favorites">
            {newFav.length>0?
            newFav.map((fav)=>(
                <div className="favorites_cont">
                <div><h3 style={{height:"30px"}}>{fav.title}</h3></div>
                <div className="fav_img"><img src={fav.image_url} alt="#"/></div>
                <button className="fav_view" onClick={()=>handleAddDetails(fav)}>View Details</button>
                <button className="btn_remove" onClick={()=>dispatch(removeFromFavorites(fav))}>Remove</button>
                
                </div>))
                :
                <div>
                    
                <h5>There are No Favorites books.</h5>
                </div>
                }
        
        </div>
    );
}

export default Favorites;

