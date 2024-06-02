import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from 'styled-components';

function AlertsBySource({ data }) {
  const theme = useTheme();

  const aggregatedData = data.reduce((acc, alert) => {
    if (!acc[alert.src_ip]) {
      acc[alert.src_ip] = { src_ip: alert.src_ip, count: 0 };
    }
    acc[alert.src_ip].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="src_ip" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={theme.chart.fill} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AlertsBySource;