import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import * as mmovie from "../components/Movie"

function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    //console.log(json)

    setMovie(json)
    setLoading(false)
  }

  useEffect(() => {
    getMovie()
  }, [])

  console.log(movie)
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <mmovie.Movie2 key={movie.status} />
        </div>
      )}
    </div>
  )
}

export default Detail