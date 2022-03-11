import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'




function Home() {
    <div className={styles.container}>
      <Head>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="http://127.0.0.1:8000/music/">Music Library</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#link">Home <span class="sr-only">(current)</span></a>
      </li>








      <li class="nav-item">
        <a class="nav-link" href="#link">Music Table</a>
      </li>








      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Music Resources
        </a>





        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Spotify link?</a>
          <a class="dropdown-item" href="#">Music News link?</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Youtube link?</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search Library</button>
    </form>
  </div>
</nav>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Music Library 
        </h1>


        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>!!! &rarr;</h2>
            <p>!!!</p>
          </a>

          <a href="" className={styles.card}>
            <h2>!!! &rarr;</h2>
            <p>!!!</p>
          </a>

        </div>
      </main>
<footer>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="https://www.musicianshalloffame.com/">Musicians Hall of Fame and Museum Official Site</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"  target="_blank" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="True" aria-label="Toggle navigation" rel="noopener noreferrer">
    <span class="navbar-toggler-icon"></span>
    </button>
      </nav>
      </footer> 
        </div>
        
}

  export default Home;
