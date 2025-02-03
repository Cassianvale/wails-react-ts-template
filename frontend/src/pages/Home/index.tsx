import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1>{t('pages.home.title')}</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic
              title={t('pages.home.totalTasks')}
              value={11}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title={t('pages.home.activeTasks')}
              value={3}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title={t('pages.home.completedTasks')}
              value={8}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
