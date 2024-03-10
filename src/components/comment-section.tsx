import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function CommentSection() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="hakudevtw/blog-site"
      repoId="R_kgDOLZ0P6g"
      category="General"
      categoryId="DIC_kwDOLZ0P6s4Cdr12"
      mapping="url"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-TW"
      loading="lazy"
    />
  );
}
