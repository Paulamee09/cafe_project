import React from 'react'

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>street_no</th>
          <th>locality</th>
          <th>postal_code</th>
          <th>lat</th>
          <th>long</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.street_no}</td>
            <td>{item.locality}</td>
            <td>{item.postal_code}</td>
            <td>{item.lat}</td>
            <td>{item.long}</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Table
