import { PieChart, Pie, Cell } from 'recharts';
export default function Stats({ allTasksCounter, tasksCheckedCounter }) {
  const data = [
    { name: 'Done', value: 6 },
    { name: 'Remaining', value: 3 },
  ];
  const COLORS = ['#ee861e', '#5d6d91'];
  const total = allTasksCounter;
  const checked = tasksCheckedCounter;
  const nonChecked = allTasksCounter - tasksCheckedCounter;
  const checkedPercent = Math.round((checked / total) * 100);
  const nonCheckedPercent = Math.round((nonChecked / total) * 100);
  return (
    <div>
      <h1>Statistics</h1>

      <div className='stats-messages'>
        <div className='stats-message'>
          <div className='number done'> {checked}</div>
          <div>things done today!</div>
        </div>
        <div className='stats-message'>
          <div className='number not-done'>{nonChecked}</div>
          <div>things are still waiting for you</div>
        </div>
      </div>

      <div className='diagram'>
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey='value' innerRadius={60} outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div>
          <div className='percents'>
            <div className='cirlce done'></div>
            <div>{checkedPercent || 0} %</div>
          </div>
          <div className='percents'>
            <div className='cirlce not-done'></div>
            <div>{nonCheckedPercent || 0} %</div>
          </div>
        </div>
        <div className='fraction'>
          {checked}/{total}
        </div>
      </div>
    </div>
  );
}
