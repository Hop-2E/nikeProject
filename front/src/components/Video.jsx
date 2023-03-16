const Video = ({ video, quote, span, button }) => {
  return (
    <div className="picOneContainer">
      {/* <video
        loop=""
        playsinline="playsinline"
        class="vjs-tech"
        id="vjs_video_3_html5_api"
        tabindex="-1"
        preload="auto"
        muted="muted"
        src="blob:https://www.nike.com/6be0507f-cccf-4639-b894-f6c3a7082cd2"
      ></video> */}
      <video src=-{video}></video>
    </div>
  );
// };
export default Video;
