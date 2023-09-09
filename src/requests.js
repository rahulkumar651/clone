const API_KEY= "96c138c2ac3e02533a2b56ad4c7a9a89";


const requests ={
    fetchNowPlaying:`/movie/now_playing?api_key=${API_KEY}`,
    fetchPopular:`/movie/popular?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}`,
    fetchUpngcomig:`/movie/upcoming?api_key=${API_KEY}`,
    fetchTvShow:`/tv/top_rated?api_key=${API_KEY}`
   
}
export default  requests;