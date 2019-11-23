export default ({ iconRef, iconSize }) => {
  const REFERENCE = `/all.svg#${iconRef}`;
  return (
    <svg>
      <use xlinkHref={REFERENCE} href={REFERENCE} />
      <style jsx>{`
        svg {
          width: ${iconSize};
          height: ${iconSize};
          fill: currentcolor;
        }
      `}</style>
    </svg>
  );
};
