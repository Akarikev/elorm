"use client";
import Giscus from "@giscus/react";
import React, { Fragment } from "react";

function Discussions() {
  return (
    <Fragment>
      <Giscus
        id="comments"
        repo="akarikev/elorm"
        repoId="R_kgDOLN0yxQ"
        category="General"
        categoryId="DIC_kwDOLN0yxc4ChzGl"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="transparent_dark"
        lang="en"
        term="what you think?"
        loading="lazy"
        // async
      />
    </Fragment>
  );
}

export default Discussions;
