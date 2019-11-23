export default ({ children, style = "" }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin-bottom: 1.5rem;
      }
      div::after {
        content: "";
        clear: both;
        display: table;
      }
      ${style}
    `}</style>
  </div>
);
