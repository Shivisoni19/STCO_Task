// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([false])
  const navigate = useNavigate()

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      const response = await fetch('https://api.quotable.io/quotes')
      const json = await response?.json()
      console.log(json?.results)
      setData(json?.results)

      setLoading(false)
    }
    loadData()
  }, [])

  return (
    <div>
      <table
        className='table table-bordered'
        id='dataTable'
        width='100%'
        cellSpacing='0'
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>AUTHOR</th>
            <th>CONTENT</th>
            <th>AUTHOR SLUG</th>
            <th>LENGTH</th>
            <th>DATE ADDED</th>
            <th>DATE MODIFIED</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>AUTHOR</th>
            <th>CONTENT</th>
            <th>AUTHOR SLUG</th>
            <th>LENGTH</th>
            <th>DATE ADDED</th>
            <th>DATE MODIFIED</th>
          </tr>
        </tfoot>
        <tbody id='myTable_row'>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            data.map(item => (
              <tr>
                <td>
                  <Link
                    to={`/show/${item?._id}`}
                    onClick={() => {
                      navigate(`/show/${item?._id}/`, {
                        state: { itemId: item?._id }
                      })
                    }}
                    className='text-decoration'
                  >
                    {item._id}
                  </Link>
                </td>
                <td>{item.author}</td>
                <td>{item.content} </td>
                <td>{item.authorSlug}</td>
                <td>{item.length}</td>
                <td>{item.dateAdded}</td>
                <td>{item.dateModified}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Home
