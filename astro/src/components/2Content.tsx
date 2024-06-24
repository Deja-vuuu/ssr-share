import { getPageData } from "./utils";
import Content from "./baseContent";
import { useAsyncEffect } from "ahooks";
import { useState } from "react";

export default function LazyContent(props: any) {
  const [pageData, setPageData] = useState<any>({});
  useAsyncEffect(async () => {
    const pageData = await getPageData(20);
    setPageData(pageData);
  }, []);

  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Content title={props.title} data={pageData} disabledRealTime={true} />
    </main>
  );
}
