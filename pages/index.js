import Layout from "../components/layout";
import Content from "../md/main.mdx";
import Aside from "../md/main-aside.mdx";
import Styles from "../others/styles";
import Hero from "../components/hero";
import Container from "../components/container";

export default () => (
  <Layout pageTitle="Homepage" headerless={true}>
    <Hero />
    <Container
      mainSection={<Content components={Styles} />}
      aside={<Aside />}
    />

    <style jsx>{``}</style>
  </Layout>
);
