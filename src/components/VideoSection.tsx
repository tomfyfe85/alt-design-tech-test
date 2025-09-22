import { useRef, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "760px",
        height: "651px",
        overflow: "hidden",

        // width: "760px",
        // height: "651px",
        // overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "90%",

          objectFit: "fill",
          // This will stretch to fill, distorting aspect ratio
        }}
      >
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
