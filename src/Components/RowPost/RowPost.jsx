import React from 'react'
import './RowPost.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(Response=>{
   
      setMovies(Response.data.results)

    }).catch(err=>{
    alert('network error')

    })
  
  }, )
  
  return (
    <div className='Row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
                        <img  className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />


          )}
           


        </div>
    </div>
  )
}

export default RowPost