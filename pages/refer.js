import Layout from "../components/layout";
import Content from "../md/refer.mdx";
import Styles from "../others/styles";
import Aside from "../md/refer-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Refer a Client">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
