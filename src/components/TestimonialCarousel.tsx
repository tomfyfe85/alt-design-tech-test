export default function TestimonialCarousel() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        position: "absolute",
        width: "1247px",
        height: "596px",
        top: "2146px",
        left: "134px",
        borderRadius: "10px",
        borderWidth: "1px",
        opacity: 1,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('forest-image.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex-1 flex items-center">
          <div
            style={{
              width: "742px",
              height: "269px",
              position: "absolute",
              top: "85px",
              left: "71px",
            }}
          >
            <blockquote
              className="text-white font-semibold mb-6 leading-relaxed"
              style={{ fontFamily: "Inter", fontSize: "33px" }}
            >
              "We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. "{" "}
            </blockquote>
            <div className="text-white" style={{ fontFamily: "IBM Plex Mono" }}>
              <div className="text-sm font-light">Paul Johnson, Director</div>
              <div className="text-sm font-light">
                Nottingham Forest Football Club
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
