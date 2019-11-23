import Layout from "../components/layout";
import Content from "../md/faq.mdx";
import Styles from "../others/styles";
import Aside from "../md/faq-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="FAQ">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
