import React from 'react'
import { PageGridItem } from './PageGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'

export const PageGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category)
  console.log('ME EJECUTO', data, loading)

  return (
    <>
      { 
      loading ? 
        <div className="loading">
          <div className="circle">
            <div className="inner"></div>
          </div>
        </div>
      : 
        <div className="page-grid">
          {/* <h3>{ category }</h3> */}
          <div className="page-grid__container">
            {
              data.length > 0 && data.map(gif => (
                <PageGridItem key={`gif-${gif.id}`} {...gif} />
              ))
            }
          </div>
        </div>
      }
    </>
  )
}
