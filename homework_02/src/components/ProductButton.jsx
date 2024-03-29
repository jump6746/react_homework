function ProductButton({ size = 45 }) {
  return (
    <button type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 45 45"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
          fill="#2A0038"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.4897 17.29L29.3197 26.52H16.8997L14.7397 17.29H31.4897Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M27.3797 32.94C28.3186 32.94 29.0797 32.1789 29.0797 31.24C29.0797 30.3012 28.3186 29.54 27.3797 29.54C26.4408 29.54 25.6797 30.3012 25.6797 31.24C25.6797 32.1789 26.4408 32.94 27.3797 32.94Z"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M18.8499 32.94C19.7888 32.94 20.5499 32.1789 20.5499 31.24C20.5499 30.3012 19.7888 29.54 18.8499 29.54C17.911 29.54 17.1499 30.3012 17.1499 31.24C17.1499 32.1789 17.911 32.94 18.8499 32.94Z"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M11.0298 14.38H14.0498L15.4598 20.36"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ProductButton;
