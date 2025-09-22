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
          backgroundImage: `url(/forest-image.jpg)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl">
            <blockquote className="text-white text-2xl font-semibold mb-6 leading-relaxed">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”{" "}
            </blockquote>
            <div className="text-white">
              <div className="font-bold text-lg">
                Paul Johnson, Director Nottingham Forest Football Club
              </div>
              <div className="font-bold text-lg">
                Director Nottingham Forest Football Club
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
