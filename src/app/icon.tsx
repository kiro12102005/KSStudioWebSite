import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181b",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: -1,
          }}
        >
          KS
        </span>
        <div
          style={{
            position: "absolute",
            top: 3,
            right: 3,
            width: 5,
            height: 5,
            borderRadius: 999,
            background: "#059669",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
