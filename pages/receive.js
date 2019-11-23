import Layout from "../components/layout";
import Content from "../md/receive.mdx";
import Styles from "../others/styles";
import Aside from "../md/receive-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Receive a Computer">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
