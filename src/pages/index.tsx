import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/components/layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <p>Main Page</p>
    </Layout>
  );
}
