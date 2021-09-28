
import React from 'react'
import "./datasearch.scss";

export default function Datasearch(props) {
    const mapData = props.dataShowSelect.map((item) => {
        return (<li key={item.id} onClick={() => {
            props.onclickDataToday(item.url);
            props.setloading()
        }}>{item.name}</li>)
    })
    return (
        <>
            <ul>
                <p>Hãy nhập City name , bạn cần và bấm enter</p>
                {mapData}
            </ul>
        </>
    )
}
