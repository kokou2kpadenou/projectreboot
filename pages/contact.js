import Layout from "../components/layout";
import Content from "../md/contact.mdx";
import Styles from "../others/styles";
import Aside from "../md/contact-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Contact Us">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
