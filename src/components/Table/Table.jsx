import React from "react";

import "./Table.css";

export const Table = (props) => {
    const spawnHeader = (data) => (
        <tr>
            {Object.keys(data[0]).map((item, index) => <th key={index}>{item}</th>)}
        </tr>

    )

    let rows = props.data.map((item, i) => {
        return <tr key={i}>
            {Object.values(item).map((val, i) => <td key={i}>{val}</td>)}
        </tr>
    })


    return (
        <table>
            <thead>
                {spawnHeader(props.data)}
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}