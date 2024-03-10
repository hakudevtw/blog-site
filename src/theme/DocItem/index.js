import DocItem from "@theme-original/DocItem";
import CommentSection from "@site/src/components/comment-section";

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <CommentSection />
    </>
  );
}
