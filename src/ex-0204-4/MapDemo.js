import './MapDemo.css'
import data from './data/products.json'
import React from 'react'

const MapDemo = () => {
  return (
    <>
      <h1>Map 展示</h1>
      <table>
        <thead>
          <th>ID</th>
          <th>image</th>
          <th>name</th>
          <th>stock</th>
          <th>price</th>
          <th>tags</th>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} alt="" />
                </td>
                <td>{v.name}</td>
                <td>{v.stock}</td>
                <td>{v.price}</td>
                <td>{v.tags}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MapDemo
