export default function Hero() {
  return (
    <div>
      <section
        className="w-[1512px] h-[742px] absolute top-[1px] left-[-8px]"
        style={{ backgroundColor: "#31297D" }}
      >
        <h1
          className="absolute top-[249px] left-[133px] text-white text-[70px]"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
            width: "463px",
            height: "85px",
            top: "249px",
            left: "133px",
            whiteSpace: "nowrap",
          }}
        >
          We make your
        </h1>
        <h1
          className="absolute top-[318px] left-[133px] text-white text-[70px]"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
            width: "412px",
            height: "85px",
            whiteSpace: "nowrap",
          }}
        >
          IT work easy.
        </h1>
      </section>
    </div>
  );
}
