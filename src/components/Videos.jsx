// // import React from 'react'
// // import {Stack,Box} from '@mui/material';
 
// // import { VideoCard,ChannelCard } from './';

// // const Videos = ({videos,direction}) => {

// //     // console.log(videos);
// //   return (
// //     <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
// //         {videos.map((item,idx)=>(
// //             <Box key={idx}>
// //             {item.id.videoId && <VideoCard video={item} /> }
// //             {item.id.channelId && <ChannelCard channelDetail={item} />}
// //           </Box>
// //         ))}
// //     </Stack>
// //   )
// // }

// // export default Videos;
// import React from "react";
// import { Stack, Box } from "@mui/material";

// import { ChannelCard, Loader, VideoCard } from "./";

// const Videos = ({ videos }) => {
//   // if(!videos?.length) return <Loader />;
  
//   return (
//     <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
//       {videos.map((item, idx) => (
//         <Box key={idx}>
//           {item.id.videoId && <VideoCard video={item} /> }
//           {item.id.channelId && <ChannelCard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// }

// export default Videos;

import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  // Add a conditional check to handle null or undefined 'videos'
  if (!videos) {
    return <Loader />; // You can render a loader or handle this case as needed
  }

  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
