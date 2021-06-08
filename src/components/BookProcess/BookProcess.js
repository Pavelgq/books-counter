import React from 'react'

const BookProcess = ({data}) => {

    return (
        <div>
            {data.title}
            Всего страниц
            Прочитано
            Процент
        </div>
    )
}

export default BookProcess