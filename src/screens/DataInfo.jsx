import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'

const DataInfo = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([false])

  console.log('location ', location.pathname.split('/')[2])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      const response = await fetch(
        `http://api.quotable.io/quotes/${location.pathname.split('/')[2]}`
      )
      const json = await response?.json()
      console.log(json)
      setData(json)

      setLoading(false)
    }
    loadData()
  }, [])

  return (
    <>
      <h1 className='text-center mt-5 pb-3'>Details of data</h1>
      <div className='container'>
        <div className='row mt-4 pb-4'>
          <div className='col-lg-2 col-sm-12'></div>
          <div className='bg-box border border-radius col-lg-8 col-sm-12 text-white pt-4 pb-5'>
            <h2 className='text-center pb-3'>{data?._id}</h2>
            <div className='row'>
              <div className='col-lg-3 col-sm-12'></div>
              <div className='col-lg-6 col-sm-12'>
                <h5>Author:{data?.author}</h5>
                <h5>Content:{data?.content}</h5>
                <h5>AuthorSlug:{data?.length}</h5>
                <h5>Length:{data?.authorSlug}</h5>
                <h5>DateAdded:{data?.dateAdded}</h5>
                <h5>DateModified:{data?.dateModified}</h5>
              </div>
              <div className='col-lg-3 col-sm-12'></div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-12'></div>
        </div>
      </div>
    </>
  )
}

export default DataInfo
