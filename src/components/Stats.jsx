export default function Stats() {
  return (
    <div>
      <h1>Statistics</h1>

      <div>
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
        Diagram
        <div className='percents'>
          <div className='cirlce done'></div>
          <div>66 %</div>
        </div>
        <div className='percents'>
          <div className='cirlce not-done'></div>
          <div>33 %</div>
        </div>
      </div>
      <div>6/9</div>
    </div>
  );
}
