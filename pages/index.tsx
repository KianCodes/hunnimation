import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react'
import AnimeCard from '../components/AnimeCard'
import axios from 'axios'

export default function Home() {
  type Seasons = 'winter' | 'spring' | 'fall' | 'summer'
  const [season, setSeason] = useState<Seasons>('spring')

  const [year, setYear] = useState(2022)
  const [anime, setAnime] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/seasons/${year}/${season}?page=${page}`)
      .then((res) => {
        setAnime(res.data.data)
        setPageCount(res.data.pagination.last_visible_page)
      })
      .catch((error) => console.log(error))
  }, [season, year, page])

  const handleClick = (e) => {
    let { year: updatedYear, season: updatedSeason } = JSON.parse(
      e.target.value
    )
    setYear(updatedYear)
    setSeason(updatedSeason)
    setPage(1)
  }

  const handlePageClick = (page) => {
    setPage(page)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunnimation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/hunnysoft-pot.png" />
      </Head>
      <header id={styles.header}>
        <nav id={styles.seasons}>
          <button
            name="winter2022"
            value='{"year":2022,"season":"winter"}'
            onClick={(e) => handleClick(e)}
            className={styles.button}
          >
            Winter 2022
          </button>
          <button
            name="spring2022"
            value='{"year":2022,"season":"spring"}'
            onClick={(e) => handleClick(e)}
            className={styles.button}
          >
            Spring 2022
          </button>
          <button
            name="summer2022"
            value='{"year":2022,"season":"summer"}'
            onClick={(e) => handleClick(e)}
            className={styles.button}
          >
            Summer 2022
          </button>
          <button
            name="fall2022"
            value='{"year":2022,"season":"fall"}'
            onClick={(e) => handleClick(e)}
            className={styles.button}
          >
            Fall 2022
          </button>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Hunnimation!</h1>
        <nav>
          {Array.from(Array(pageCount).keys()).map((page) => (
            <button key={page + 1} onClick={() => handlePageClick(page + 1)}>
              {page + 1}
            </button>
          ))}
        </nav>
        <div className={styles.grid}>
          {anime.map((anime) => (
            <AnimeCard
              key={anime.titleEng ?? anime.titleJp}
              image={anime.images.jpg.image_url}
              genre={anime.genres}
              episodes={anime.episodes}
              titleEng={anime.title_english}
              titleJp={anime.title_japanese}
              synopsis={anime.synopsis}
              score={anime.score}
              studios={anime.studios.map((studio) => studio.name)}
              url={anime.url}
            />
          ))}
        </div>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kiancodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image
            src="/hunnysoft-pot.png"
            alt="Hunnysoft Logo"
            width={48}
            height={48}
          />
        </a>
      </footer>
    </div>
  )
}
