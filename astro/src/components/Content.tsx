import { getPageData } from "./utils";
import Content from "./baseContent";

const pageData = await getPageData(1);
export default function LazyContent(props: any) {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Content
        title={props.title}
        description={props.description}
        data={pageData}
        disabledRealTime={true}
      />
    </main>
  );
}
