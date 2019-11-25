const P = props => (
  <p style={{ lineHeight: "1.8", marginBottom: "2rem" }} {...props} />
);
const H2 = props => (
  <h2
    style={{
      color: "#0070f3",
      marginBottom: "2rem"
    }}
    {...props}
  />
);
const H3 = props => <h3 style={{ marginBottom: "1.5rem" }} {...props} />;
const H4 = props => <h4 style={{ marginBottom: "1.2rem" }} {...props} />;
const Ul = props => (
  <ul
    style={{
      margin: "1.2rem 2rem",
      lineHeight: "1.8",
      listStylePosition: "inside"
    }}
    {...props}
  />
);

export default { h2: H2, h3: H3, h4: H4, p: P, ul: Ul };
