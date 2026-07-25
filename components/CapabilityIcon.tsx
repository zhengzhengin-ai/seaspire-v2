type CapabilityIconProps = {
  type:
    | "sourcing"
    | "processing"
    | "quality"
    | "supply";
};

export default function CapabilityIcon({
  type,
}: CapabilityIconProps) {

  const color = "#0E7490";

  switch (type) {

    case "sourcing":

      return (

        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >

          <path
            d="M10 33C18 22 29 18 43 18C49 18 54 22 54 28C54 36 45 42 33 42C25 42 18 39 13 34"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <circle
            cx="47"
            cy="26"
            r="2"
            fill={color}
          />

          <path
            d="M15 34L8 28"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

        </svg>

      );



    case "processing":

      return (

        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >

          <path
            d="M14 46L48 12"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d="M39 10L53 24"
            stroke={color}
            strokeWidth="2.5"
          />

          <circle
            cx="18"
            cy="42"
            r="5"
            stroke={color}
            strokeWidth="2.5"
          />

        </svg>

      );



    case "quality":

      return (

        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >

          <path
            d="M32 10L49 16V30C49 41 42 49 32 54C22 49 15 41 15 30V16L32 10Z"
            stroke={color}
            strokeWidth="2.5"
          />

          <path
            d="M24 31L30 37L41 24"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>

      );



    case "supply":

      return (

        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >

          <path
            d="M12 40H52"
            stroke={color}
            strokeWidth="2.5"
          />

          <path
            d="M18 40V22H42L50 32V40"
            stroke={color}
            strokeWidth="2.5"
          />

          <path
            d="M10 46C16 50 22 50 28 46C34 42 40 42 46 46C50 49 54 49 58 46"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

        </svg>

      );



    default:

      return null;

  }

}