import React, {useState, useEffect} from 'react';
import axios from 'axios';

function VideoPlayer({ url }) {
  const handleClick = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5150/videos/${url}`);
      console.log('Video data:', response.data);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };
  return (
    <div onClick={handleClick}>
    <video controls width="600">
    <source src={url} type='video/mp4'/>
    Can't play video
    </video>
    </div>
  )
};

function VideosPage({LoggedIn}) {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get('http://127.0.0.1:5150/videos');
        
        setVideoUrls(response.data);
        
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    fetchVideos();
  }, []);


  if (LoggedIn === true){
    return (
    
        <>
        <h2>Videos</h2>
      <p>
        Here are some interesting videos related to financial knowledge about investing, bitcoin and all things related to finance.
      </p>
      <div>
      {videoUrls.length > 0 ? (
        videoUrls.map((videoUrl, index) => (
          <div>
          <h2>Video {index + 1}</h2>
          <VideoPlayer key={index} url={`http://localhost:5150/videos/${videoUrl}`} />
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )
      }
      </div>
        </>
    );
};
}

export default VideosPage;