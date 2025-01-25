import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import { Theme } from '@mui/material';
import Title from './Title';

// 定义数据类型接口
interface SalesData {
  [key: string]: string | number | null; // 添加索引签名
  time: string;
  amount: number | null;
}

// 生成销售数据的工具函数
const createData = (time: string, amount?: number): SalesData => ({
  time,
  amount: amount ?? null,
});

// 静态销售数据
const salesData: SalesData[] = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00'),
];

// 图表配置类型
interface ChartConfig {
  margin: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
  maxValue: number;
  tickNumber: number;
}

// 图表默认配置
const chartConfig: ChartConfig = {
  margin: {
    top: 16,
    right: 20,
    left: 70,
    bottom: 30,
  },
  maxValue: 2500,
  tickNumber: 3,
};

const Chart: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={salesData}
          margin={chartConfig.margin}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'time',
              tickNumber: 2,
              tickLabelStyle: {
                fontSize: theme.typography.body2.fontSize,
                fontFamily: theme.typography.body2.fontFamily,
              },
            },
          ]}
          yAxis={[
            {
              label: 'Sales ($)',
              labelStyle: {
                fontSize: theme.typography.body1.fontSize,
                fontFamily: theme.typography.body1.fontFamily,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: {
                fontSize: theme.typography.body2.fontSize,
                fontFamily: theme.typography.body2.fontFamily,
              },
              max: chartConfig.maxValue,
              tickNumber: chartConfig.tickNumber,
            },
          ]}
          series={[
            {
              dataKey: 'amount',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            width: '100%',
            flexGrow: 1,
            overflow: 'hidden',
            [`.${axisClasses.root} line`]: {
              stroke: theme.palette.text.secondary,
            },
            [`.${axisClasses.root} text`]: {
              fill: theme.palette.text.secondary,
            },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Chart; 