import React from 'react'

export const Base123 = ({ imagen }) => {


    return (
        <div>
            {
                imagen.map((img, i) => {
                    return <img src={img.url} style={{width:'100px', height:'100px'}}/>
                })
            }
           
        </div>
    )
}
