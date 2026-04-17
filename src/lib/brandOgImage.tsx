import { ImageResponse } from "next/og";

/** Image 1200×630 pour partages (OG + Twitter). */
export function brandOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #f5f4f1 0%, #e7e5e4 35%, #ccfbf1 100%)",
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "#1c1917",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
          }}
        >
          Propale 2026
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            color: "#115e59",
            fontWeight: 650,
          }}
        >
          Gorges du Verdon
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 22,
            color: "#57534e",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Vacances d’été · 24 août — 1er septembre
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
