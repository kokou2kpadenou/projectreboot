import Layout from "../components/layout";
import Content from "../md/policy.mdx";
import Styles from "../others/styles";
import Aside from "../md/policy-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Refer a Client">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
