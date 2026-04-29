import { PieChart, Pie, Cell } from 'recharts';
export default function Stats({ allTasksCounter, tasksCheckedCounter }) {
  const COLORS = ['var(--color-done)', 'var(--color-not-done)'];
  const total = allTasksCounter;
  const checked = tasksCheckedCounter;
  const nonChecked = allTasksCounter - tasksCheckedCounter;
  const checkedPercent = Math.round((checked / total) * 100);
  const nonCheckedPercent = Math.round((nonChecked / total) * 100);
  const data = [
    { name: 'Done', value: checked },
    { name: 'Remaining', value: nonChecked },
  ];
  return (
    <div className='stats'>
      <div className='stats-top'>
        <h2>Statistics</h2>
        <div className='fraction'>
          {checked}/{total}
        </div>
      </div>
      <div className='stats-messages'>
        <div className='stats-message'>
          <div className='number done'> {checked}</div>
          <div className='stats-text'>things done today!</div>
        </div>
        <div className='stats-message'>
          <div className='number not-done'>{nonChecked}</div>
          <div className='stats-text'>things are still waiting for you</div>
        </div>
      </div>

      <div className='diagram'>
        <PieChart width={260} height={260}>
          <Pie
            data={data}
            dataKey='value'
            innerRadius={55}
            outerRadius={105}
            stroke='none'
          >
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
      </div>
    </div>
  );
}
