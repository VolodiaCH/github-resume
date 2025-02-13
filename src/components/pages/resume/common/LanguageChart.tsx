import React, { FC, useMemo } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { COLORS, Repo } from '../utils.ts';

interface LanguageChartProps {
  repos: Repo[];
}

const LanguageChart: FC<LanguageChartProps> = ({ repos }) => {
  const languageData = useMemo(() => {
    const languageStats = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }

      return acc;
    }, {});

    return Object.entries(languageStats).map(([language, count]) => ({
      name: language,
      value: count,
    }));
  }, [repos]);

  return (
    <div>
      <h2>Top Languages Used</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={languageData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        >
          {languageData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default LanguageChart;
