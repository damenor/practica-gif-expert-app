import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const responseDefault = {
    data: [],
    loading: true
  }
  const [state, setstate] = useState(responseDefault)

  useEffect(() => {
    setstate(responseDefault)
    setTimeout(() => {
      getGifs(category).then(data => {
        setstate({
          data, 
          loading: false
        })
      })
    }, 300)
    return () => {}
  }, [category])

  return state

}