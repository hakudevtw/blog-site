import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from "@site/src/components/giscus";

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Giscus />
    </>
  );
}
