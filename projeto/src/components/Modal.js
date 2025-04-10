import React from "react";
const Modal = ({show, item}) =>{
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail; 
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close"><i class="fa-solid fa-xmark"></i></button>
                <div className="inner-box">
                    <img src={thumbnail}></img>
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                        <a href={item.volumeInfo.previewLink}><button>Mais informações</button></a>
                    </div>
                </div>
                <h4 className="descrição">{item.volumeInfo.description}</h4>
            </div>
        </div>
        </>
    )
}

export default Modal;