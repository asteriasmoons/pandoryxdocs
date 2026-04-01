"use client";

import React from "react";
import Giscus from "@giscus/react";

export default function GiscusThread() {
  return (
    <Giscus
      repo="asteriasmoons/pandoryxdocs"
      repoId="R_kgDOR2f0Nw"
      category="Announcements"
      categoryId="DIC_kwDOR2f0N84C5yx1"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
