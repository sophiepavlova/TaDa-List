import { PieChart, Pie, Cell } from 'recharts';
export default function Stats() {
  const data = [
    { name: 'Done', value: 6 },
    { name: 'Remaining', value: 3 },
  ];
  const COLORS = ['#ee861e', '#5d6d91'];

  return (
    <div>
      <h1>Statistics</h1>

      <div className='stats-messages'>
        <div className='stats-message'>
          <div className='number done'>6</div>
          <div>things done today!</div>
        </div>
        <div className='stats-message'>
          <div className='number not-done'>3</div>
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
            <div>66 %</div>
          </div>
          <div className='percents'>
            <div className='cirlce not-done'></div>
            <div>33 %</div>
          </div>
        </div>
        <div className='fraction'>6/9</div>
      </div>
    </div>
  );
}
