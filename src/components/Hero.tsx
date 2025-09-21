export default function Hero() {
  return (
    <div>
      <section
        className="relative w-[1512px] h-[742px] absolute top-[1px] left-[-8px]"
        style={{ backgroundColor: "#31297D" }}
      >
        <div
          className="absolute top-[-262.26] left-[291px] w-[1348px] h-[1501.5px]"
          style={{
            backgroundImage: "url('/Geomteric1.png')",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute"
          style={{
            top: "212px",
            left: "841px",
            width: "489.68px",
            height: "480px",
            backgroundImage: "url(/lap-top-and-router.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

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
        <p
          className="absolute top-[412px] left-[133px] text-white text-[16px]"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            lineHeight: "30px",
            letterSpacing: "0%",
            width: "567px",
            height: "90px",
          }}
        >
          Recognising your frustrations with your print environment, IT
          services, document management & communications and finding a solution
          to overcome them.
        </p>
      </section>
    </div>
  );
}
