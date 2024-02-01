import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/title.png" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            ADD LATER JUST SOME TEXT DESCROPTION.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Kharma</span>
            <span className={styles.date}> - 01.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/title.png" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.sport}`}>Sport</span>
          <h3 className={styles.postTitle}>
            ADD LATER JUST SOME TEXT DESCROPTION.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Kharma</span>
            <span className={styles.date}> - 01.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/title.png" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            ADD LATER JUST SOME TEXT DESCROPTION.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Kharma</span>
            <span className={styles.date}> - 01.01.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/title.png" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.book}`}>Book</span>
          <h3 className={styles.postTitle}>
            ADD LATER JUST SOME TEXT DESCROPTION.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Kharma</span>
            <span className={styles.date}> - 01.01.2024</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts