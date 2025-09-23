import { useRef, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "1058px",
        height: "552px",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "10px",
        marginLeft: "110px",
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
