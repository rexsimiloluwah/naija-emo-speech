"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

interface EmotionalData {
  label: string;
  count: number;
}

interface EmotionalPieChartProps {
  data: EmotionalData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

const CrowdsourcePieChart: React.FC<EmotionalPieChartProps> = ({ data }) => {
  return (
    <PieChart width={250} height={200} className="flex justify-center items-center">
      <Pie
        dataKey="count"
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.label}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name, props) => [value, props.payload.label]} />
    </PieChart>
  );
};

export default CrowdsourcePieChart;
