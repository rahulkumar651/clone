import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Banner/>
     
      <Row 
      title="NOW PLAYING" fetchUrl={requests.fetchNowPlaying} 
      isLargeRow={true}
      />
      <Row title="POPULAR" fetchUrl={requests.fetchPopular}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="UPCOMING SHOW" fetchUrl={requests.fetchUpngcomig}/>
      <Row title="TV SHOWS" fetchUrl={requests.fetchTvShow}/>
    </div>
    
  );
}

export default App;
