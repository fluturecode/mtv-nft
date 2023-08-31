import styled from "@emotion/styled";
import { Video } from "./Video";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const Videos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoList, setVideoList] = useState<{ videoId: string }[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedVideoList = [
        { videoId: "wTP2RUD_cL0" },
        { videoId: "oRdxUFDoQe0" },
        { videoId: "vabnZ9-ex7o" },
        { videoId: "R8AOAap6_k4" },
        { videoId: "aGSKrC7dGcY" },
        { videoId: "xuZA6qiJVfU" },
        { videoId: "iIpfWORQWhU" },
        { videoId: "kxNJV83EMJw" },
        { videoId: "Y3ywicffOj4" },
        { videoId: "RP0_8J7uxhs" },
        { videoId: "5HI_xFQWiYU" },
        { videoId: "pWxJEIz7sSA" },
        { videoId: "d1n_O6DeS1c" },
        { videoId: "FTQbiNvZqaY" },
      ];

      setVideoList(fetchedVideoList);
      setIsLoading(false);
    }, 4000);
  }, []);
 
  const VideosContainer = styled.div`
    background-color: #575352;
    margin-top: 20px;
    border-radius: 10px;
  `;

  const VideoRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
  `;

  if (isLoading) {
    return (
      <VideosContainer>
        <CircularProgress />
        <p>Grabbing your videos from YouTube</p>
      </VideosContainer>
    );
  };

  return (
    <VideosContainer>
      <VideoRow>
        {videoList.map((video, index) => (
          <Video
						key={index}
						video={video.videoId}
          />
        ))}
      </VideoRow>
    </VideosContainer>
  );
};

export default Videos;
