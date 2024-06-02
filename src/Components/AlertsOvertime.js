import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from 'styled-components';

function AlertsOvertime({ data }) {
  const theme = useTheme();

  const aggregatedData = data.reduce((acc, alert) => {
    const date = new Date(alert.timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { date, count: 0 };
    }
    acc[date].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="date" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke={theme.chart.stroke} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AlertsOvertime;