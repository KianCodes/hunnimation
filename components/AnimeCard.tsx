import React from 'react'
import { IAnimeCard } from '../utils/types'
import styles from './card.module.scss'
import Image from 'next/image'

const AnimeCard = ({
  image,
  genre,
  episodes,
  titleEng,
  titleJp,
  synopsis,
  score,
  studios,
  url,
}: IAnimeCard) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <Image
            className={styles.nextImage}
            src={image}
            width={180}
            height={250}
          />
        </div>
        <div className={styles.basicInfo}>
          <span className={styles.title}>{titleEng ?? titleJp}</span>
          <span className={styles.studios}>
            {studios.map((studio) => (
              <span key={studio}> {studio} &nbsp;</span>
            ))}
          </span>
        </div>
      </div>
      <div className={styles.advancedInfo}>
        <div className={styles.topContainer}>
          <div className={styles.stats}>
            <div className={styles.episodeInfo}>{episodes} Episodes</div>
            <div className={styles.media}>Stuff goes here</div>
          </div>
          <p>{synopsis}</p>
        </div>
        <div className={styles.tags}>
          {genre.map((genre) => (
            <span key ={genre.name} className={styles.tag}><b>{genre.name}&nbsp;</b></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimeCard
