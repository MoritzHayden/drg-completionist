import { Col, BackTop, Layout, Row, Spin } from 'antd';
import 'antd/dist/antd.dark.css';
import React, { lazy, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';

const { Content } = Layout;

export type TabName =
  | 'overclocks'
  | 'frameworks'
  | 'armor'
  | 'weaponPaintjobs'
  | 'pickaxes'
  | 'victoryPoses'
  | 'cosmetics'
  | 'bosco'
  | 'matrixCore'
  | 'cargoCrate'
  | 'lostPack';

export const DEFAULT_TAB: TabName = 'overclocks';

const CATEGORY_TABS: Array<{
  title: string;
  key: TabName;
  content: React.ComponentType;
}> = [
  {
    title: 'Overclocks',
    key: 'overclocks',
    content: lazy(() => import('pages/overclocks/OverclocksPage')),
  },
  {
    title: 'Frameworks',
    key: 'frameworks',
    content: lazy(() => import('pages/frameworks/FrameworksPage')),
  },
  {
    title: 'Armor',
    key: 'armor',
    content: lazy(() => import('pages/armor/ArmorPage')),
  },
  {
    title: 'Weapons',
    key: 'weaponPaintjobs',
    content: lazy(() => import('pages/weaponPaintjobs/WeaponPaintjobsPage')),
  },
  {
    title: 'Pickaxes',
    key: 'pickaxes',
    content: lazy(() => import('pages/pickaxes/PickaxesPage')),
  },
  {
    title: 'Victory Poses',
    key: 'victoryPoses',
    content: lazy(() => import('pages/victoryPoses/VictoryPosesPage')),
  },
  {
    title: 'Cosmetics',
    key: 'cosmetics',
    content: lazy(() => import('pages/cosmetics/CosmeticsPage')),
  },
  {
    title: 'Bosco',
    key: 'bosco',
    content: lazy(() => import('pages/bosco/BoscoPage')),
  },
];

const ORIGIN_TABS: Array<{
  title: string;
  key: TabName;
  content: React.ComponentType;
}> = [
  {
    title: 'Matrix Core',
    key: 'matrixCore',
    content: lazy(() => import('pages/origin/MatrixCorePage')),
  },
  {
    title: 'Cargo Crate',
    key: 'cargoCrate',
    content: lazy(() => import('pages/origin/CargoCratePage')),
  },
  {
    title: 'Lost Pack',
    key: 'lostPack',
    content: lazy(() => import('pages/origin/LostPackPage')),
  },
];

export const TABS = [...CATEGORY_TABS, ...ORIGIN_TABS];

const PageSpinner = memo(function PageSpinner() {
  return (
    <div
      style={{
        lineHeight: '50vh',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Spin />
    </div>
  );
});

export default function App() {
  return (
    <Layout style={{ backgroundColor: '#1a1a1a' }}>
      <BackTop style={{ bottom: 110 }} />
      <Content style={{ marginBottom: 100 }}>
        <Row justify="center">
          <Col xs={22} lg={18}>
            <PageHeader />
          </Col>
          <Col xs={22} lg={18}>
            <Switch>
              {TABS.map((tab) => (
                <Route
                  exact
                  path={
                    [
                      `/${tab.key}`,
                      tab.key === DEFAULT_TAB ? '/' : undefined,
                    ].filter((x) => x !== undefined) as string[]
                  }
                  key={tab.key}
                >
                  <React.Suspense fallback={<PageSpinner />}>
                    <tab.content />
                  </React.Suspense>
                </Route>
              ))}
            </Switch>
          </Col>
        </Row>
      </Content>
      <PageFooter />
    </Layout>
  );
}
