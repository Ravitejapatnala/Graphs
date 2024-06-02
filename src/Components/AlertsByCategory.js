import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from 'styled-components';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function AlertsByCategory({ data }) {
  const theme = useTheme();

  const aggregatedData = data.reduce((acc, alert) => {
    const category = alert.alert && alert.alert.category ? alert.alert.category : 'Unknown';
    if (!acc[category]) {
      acc[category] = { name: category, count: 0 };
    }
    acc[category].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={chartData} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={theme.chart.fill} label>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default AlertsByCategory;
