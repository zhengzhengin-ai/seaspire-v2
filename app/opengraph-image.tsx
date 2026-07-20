import { ImageResponse } from "next/og";

export const alt =
  "SEASPIRE PHUKET - Premium Seafood Supplier";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";


export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F172A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >

        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
          }}
        >
          SEASPIRE PHUKET
        </div>


        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 32,
            fontWeight: 400,
          }}
        >
          Premium Seafood Supplier
          from Phuket, Thailand
        </div>


      </div>
    ),
    {
      ...size,
    }
  );
}