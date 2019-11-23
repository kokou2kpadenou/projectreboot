import Layout from "../components/layout";
import Content from "../md/donate.mdx";
import Styles from "../others/styles";
import Aside from "../md/donate-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Donate a Computer">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
