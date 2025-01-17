import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () =>{
    const apiKey = 'AIzaSyB917tSvJcHGsNmse119zFqBZe85j-jUz0';
    const [bookData, setData]= useState([])
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
            {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB917tSvJcHGsNmse119zFqBZe85j-jUz0'+'&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
    }
    
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Frase epica</h1>
            </div>
            <div className="row2">
                <h2>Procure um livro</h2>
                <div className="search">
                    <input type="text" placeholder="Procure um livro" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}></input>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src="./imagens/images.jpeg"></img>
            </div>
        </div>
        <div className="container">
           { 
            <Card book={bookData}/>
           }
        </div>
        </>
    )
}

export default Main;