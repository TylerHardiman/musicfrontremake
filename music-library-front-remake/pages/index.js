import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Music Library</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
  </div>
</nav>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Music Library
        </h1>

        <p className={styles.description}>
          Whats your jam?{' '}
          <code className={styles.code}>Where the music lives!</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>!!! &rarr;</h2>
            <p>!!!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>!!! &rarr;</h2>
            <p>!!!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>!!! &rarr;</h2>
            <p>!!!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>!!! &rarr;</h2>
            <p>
              !!!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.billboard.com/charts/hot-100/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <span className={styles.logo}>
            <p>Current Billboard Top 100</p>
          </span>
        </a>
      </footer>
    </div>
  )
}
