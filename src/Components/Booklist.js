import React, {useState, useEffect} from "react";
import "../App.css";
import { API_URL } from "../API";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { addToDetails, addToFavorites } from "../redux/actions";
//import BookDetails from "./BookDetails";

const Booklist=()=>{

const navigate=useNavigate();
const [books, setBooks]=useState([]);
const dispatch=useDispatch();
const {favorites,loggedUser} = useSelector((state) => state);
console.log(favorites);

useEffect(()=>{
    axios.get(API_URL).then((res)=>{
        console.log(res.data);
        setBooks(res.data);
    }).catch((err)=>console.log(err));
    },[]);

    
const handleAdd=(book)=>{
    
    dispatch(addToFavorites(book));
    alert("Added to Favorites");
    
}
    return(
        <div>{loggedUser&&
            <h2 style={{textAlign:"center"}}>welcome, {loggedUser}</h2>}
        <div className="book__list">
            
            {books.map((book)=>(
        
                <div key="book.id" className="book">
                    <div><h4>{book.title}</h4></div>
                    <div><img src={book.image_url} alt="#"/></div>
                    <div>              
                    <button onClick ={()=>handleAdd(book)}>AddTo Favorites</button>
                    </div>
                    </div>
            ))}
            
        </div>
        </div>
    );
}

export default Booklist;