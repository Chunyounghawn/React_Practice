import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

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

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          데이터 가져오기 성공 / 링크:
          <a href={movie.data.movie.url}>상세정보 바로가기</a>
        </div>
      )}
    </div>
  )
}

export default Detail
