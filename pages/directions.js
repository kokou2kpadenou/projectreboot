import Layout from "../components/layout";
import Content from "../md/directions.mdx";
import Styles from "../others/styles";
import Aside from "../md/directions-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Directions and Hours">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
