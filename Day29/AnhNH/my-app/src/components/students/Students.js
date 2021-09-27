import React from 'react'

export default function Students(props) {
  
  return (
    <>
      <tr className="border">
        <td>{props.id}</td>
        <td>{props.FirstName}</td>
        <td>{props.lastName}</td>
        <td>{props.gender}</td>
        <td>{props.dob}</td>
        <td>{props.rank}</td>
      </tr>
    </>
  )
}
