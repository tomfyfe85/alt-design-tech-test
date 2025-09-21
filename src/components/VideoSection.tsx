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
    <video
      controls
      width="870"
      height="651"
      src="/video/Screen-Recording-2024-08-08.mp4"
    >
      Your browser doesn't support video.
    </video>
  );
}
