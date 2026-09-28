import { ImageResponse } from "next/og";
export const alt =
  "Fundacja Rozwoju ALIS. Rozwijamy skrzydła. Ludzi. Idei. Społeczności.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px 75px",
        background: "#162c46",
        color: "#fafbf9",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 20, letterSpacing: 4 }}>
        FUNDACJA ROZWOJU ALIS
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 91, letterSpacing: -5 }}>
          Rozwijamy skrzydła.
        </div>
        <div style={{ fontSize: 46, color: "#b9c9b0", marginTop: 18 }}>
          Ludzi. Idei. Społeczności.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 16, letterSpacing: 1 }}>
        EDUKACJA · ZDROWIE PSYCHICZNE · TECHNOLOGIE · ROZWÓJ SPOŁECZNY
      </div>
    </div>,
    size,
  );
}
