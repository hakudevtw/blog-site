import DocItem from "@theme-original/DocItem";
import Giscus from "@site/src/components/giscus";

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Giscus />
    </>
  );
}
