export default ({ title, children }) => (
  <div className="aside-elt">
    <div className="aside-elt__title">{title}</div>
    <div className="aside-elt__content">{children}</div>
    <style jsx>{`
      .aside-elt {
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }
      .aside-elt__title {
        color: #fff;
        background-color: var(--secondary-color);
        font-weight: bold;
        padding: 1rem;
      }
      .aside-elt__content {
        padding: 1rem;
        line-height: 1.5;
      }
    `}</style>
  </div>
);
