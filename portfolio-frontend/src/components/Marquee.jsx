function Marquee({ children }) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">

        <div className="marquee-content">
          {children}
        </div>

        <div
          className="marquee-content"
          aria-hidden="true"
        >
          {children}
        </div>

      </div>
    </div>
  );
}

export default Marquee;