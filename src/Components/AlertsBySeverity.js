import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from 'styled-components';

function AlertsBySeverity({ data }) {
  const theme = useTheme();

  const aggregatedData = data.reduce((acc, alert) => {
    const severity = alert.alert && alert.alert.severity ? alert.alert.severity : 'Unknown';
    if (!acc[severity]) {
      acc[severity] = { severity, count: 0 };
    }
    acc[severity].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="severity" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={theme.chart.stroke} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AlertsBySeverity;