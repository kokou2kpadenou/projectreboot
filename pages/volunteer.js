import Layout from "../components/layout";
import Content from "../md/volunteer.mdx";
import Styles from "../others/styles";
import Aside from "../md/volunteer-aside.mdx";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Volunteer">
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />
  </Layout>
);
