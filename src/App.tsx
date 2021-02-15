import { Row, Col, PageHeader, Layout, BackTop } from "antd";
import "antd/dist/antd.dark.css";
import { Switch, Route } from "react-router-dom";
import OverclocksPage from "pages/overclocks/OverclocksPage";
import FrameworksPage from "pages/frameworks/FrameworksPage";
import Tabs from "components/Tabs";

const { Content, Footer } = Layout;

type TabName =
  | "overclocks"
  | "frameworks"
  | "skins"
  | "accessories"
  | "pickaxe";

export const DEFAULT_TAB: TabName = "overclocks";

export const TABS: Array<{
  title: string;
  key: TabName;
  content: JSX.Element;
}> = [
  {
    title: "Overclocks",
    key: "overclocks",
    content: <OverclocksPage />,
  },
  {
    title: "Weapon Frameworks",
    key: "frameworks",
    content: <FrameworksPage />,
  },
  {
    title: "Weapon Skins",
    key: "skins",
    content: <></>,
  },
  {
    title: "Miner Accessories",
    key: "accessories",
    content: <></>,
  },
  {
    title: "Pickaxe Components",
    key: "pickaxe",
    content: <></>,
  },
];

export default function App() {
  return (
    <Layout>
      <BackTop />
      <Content>
        <Row>
          <Col span={18} offset={3}>
            <PageHeader
              title="DRG Completionist"
              subTitle="Rock and Stone!"
              footer={<Tabs />}
            />
          </Col>
          <Col span={18} offset={3}>
            <Switch>
              {TABS.map((tab) => (
                <Route
                  exact
                  path={
                    [
                      `/${tab.key}`,
                      tab.key === DEFAULT_TAB ? "/" : undefined,
                    ].filter((x) => x !== undefined) as string[]
                  }
                  key={tab.key}
                >
                  {tab.content}
                </Route>
              ))}
            </Switch>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>Made with &#x2665; in ATX</Footer>
    </Layout>
  );
}
