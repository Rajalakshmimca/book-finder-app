import React from "react";
import "../App";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const BookDetails=()=>{
    const params=useParams();
    console.log(parseInt(params.id));
    const {details}=useSelector((state)=>state);
    const bookDet=details.find((item)=>item.id===parseInt(params.id));
    console.log(bookDet);
    
    return (
      <div className="bookDet_cont">
        <div className="detail">
          <h2 className="heading">{bookDet.title}</h2>
        </div>
        <div className="details_book">
          <div>
            <img src={bookDet.image_url} alt="#" />
          </div>
          <div className="container">
            <h3 className="title_bookDet">Title : {bookDet.title}</h3>
            <h4 className="author">Author(s) : {bookDet.authors}</h4>
            <h4 className="edition">Edition : {bookDet.edition}</h4>
            <h4 className="pages">Total Pages : {bookDet.num_pages}</h4>
            <h4 className="format">Format : {bookDet.format}</h4>
            <h4 className="rating">Rating : {bookDet.rating}</h4>
          </div>
        </div>
        <div className="quotes">
          <h3>Famous Quotes of the Book : </h3>
          <h4 className="q1">{bookDet.Quote1}</h4>
          <h4 className="q2">{bookDet.Quote2}</h4>
          <h4 className="q3">{bookDet.Quote3}</h4>
        </div>
        <div className="desc">
          <h4>Description : </h4>
          {bookDet.description}
        </div>
      </div>
    );
}

export default BookDetails;