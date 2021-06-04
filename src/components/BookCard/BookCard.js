import React from 'react'



const BookCard = ({data}) => {
    console.log(data.id)
    return (
        <div>
                <img></img>
                Карточка
                <p>{data.id}</p>  
        </div>
    )
}

export default BookCard