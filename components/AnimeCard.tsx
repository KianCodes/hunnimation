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
              <span> {studio} &nbsp;</span>
            ))}
          </span>
        </div>
      </div>
      <div className={styles.advancedInfo}>
        <div className={styles.stats}></div>
        <p></p>
      </div>
    </div>
  )
}

export default AnimeCard
