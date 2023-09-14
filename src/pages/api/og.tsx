/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const imageData = await fetch(
    new URL("./feynman-logo.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#000",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="630px"
          height="630px"
          src={imageData as any}
          alt="OG Image"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
