import BlogPostItem from "@theme-original/BlogPostItem";
import CommentSection from "@site/src/components/comment-section";

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <CommentSection />
    </>
  );
}
