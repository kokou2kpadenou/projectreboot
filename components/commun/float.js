export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      float: left;
      width: 200px;
      border: 1px solid transparent;
      color: #fff;
      background-color: var(--secondary-color);
      margin: 0 2rem 2rem 0;
      padding: 2rem;
      line-height: 1.6;
      font-style: italic;
    `}</style>
  </div>
);
