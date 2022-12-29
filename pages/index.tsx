import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from '../utils/requests';
import {Movie} from "../models";
import Row from "../components/Row";
import Footer from "../components/Footer";

interface HomeProps {
  netflixOriginals: Movie[],
  trendingNow: Movie[],
  topRated: Movie[],
  actionMovies: Movie[],
  comedyMovies: Movie[],
  horrorMovies: Movie[],
  romanceMovies: Movie[],
  documentaries: Movie[],
}

const Home = ({
                netflixOriginals,
                trendingNow,
                topRated,
                actionMovies,
                comedyMovies,
                horrorMovies,
                romanceMovies,
                documentaries
              }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Streamit - Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <main className='bg-[#141414]'>
        <Banner netflixOriginals={netflixOriginals}/>
        <Row movieCategoryTitle='Trending Now' movieCategory={trendingNow}/>
        <Row movieCategoryTitle='Top Rated' movieCategory={topRated}/>
        <Row movieCategoryTitle='Action Movies' movieCategory={actionMovies}/>
        <Row movieCategoryTitle='Comedy Movies' movieCategory={comedyMovies}/>
        <Row movieCategoryTitle='Horror Movies' movieCategory={horrorMovies}/>
        <Row movieCategoryTitle='Romance Movies' movieCategory={romanceMovies}/>
        <Row movieCategoryTitle='Documentary Movies' movieCategory={documentaries}/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
