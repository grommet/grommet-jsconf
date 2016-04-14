import React from 'react';

const ChartTwo = () => {
  return (
    <svg className="chart__graphic" viewBox="0 0 558 192"
      preserveAspectRatio="none" role="application"
      aria-label="Bar Chart" style={{maxWidth: '558px'}}>
      <g className="chart__xaxis" aria-hidden='true'>
        <g className="chart__xaxis-index">
          <text x="437" y="14" fontSize="16">May 22</text>
        </g>
        <g className="chart__xaxis-index">
          <text x="297" y="14" fontSize="16">May 21</text>
        </g>
        <g className="chart__xaxis-index">
          <text x="158" y="14" fontSize="16">May 20</text>
        </g>
        <g className="chart__xaxis-index">
          <text x="18" y="14" fontSize="16">May 19</text>
        </g>
      </g>
      <g className="chart__values">
        <g tabIndex="0" role='img' aria-label='May 22: First: 5, Second: 5.'>
          <rect className="chart__values-bar color-index-graph-1" x="437" y="108" width="104" height="84"></rect>
          <rect className="chart__values-bar color-index-graph-2" x="437" y="24" width="104" height="84"></rect>
        </g>
        <g tabIndex="0" role='img' aria-label='May 21: First: 5, Second: 0.'>
          <rect className="chart__values-bar color-index-graph-1" x="297" y="108" width="104" height="84"></rect>
          <rect className="chart__values-bar color-index-graph-2" x="297" y="108" width="104" height="0"></rect>
        </g>
        <g tabIndex="0" role='img' aria-label='May 20: First: 3, Second: 2.'>
          <rect className="chart__values-bar color-index-graph-1" x="158" y="136" width="104" height="56"></rect>
          <rect className="chart__values-bar color-index-graph-2" x="158" y="108" width="104" height="28"></rect>
        </g>
        <g tabIndex="0" role='img' aria-label='May 19: First: 6, Second: 0.'>
          <rect className="chart__values-bar color-index-graph-1" x="18" y="80" width="104" height="112"></rect>
          <rect className="chart__values-bar color-index-graph-2" x="18" y="80" width="104" height="0"></rect>
        </g>
      </g>
      <g className="chart__front">
        <g id="complexBarChartTitle_x_band_0" className="chart__front-xband">
          <rect className="chart__front-xband-background" x="419" y="0" width="140" height="192"></rect>
        </g>
        <g id="complexBarChartTitle_x_band_1" className="chart__front-xband">
          <rect className="chart__front-xband-background" x="279" y="0" width="140" height="192"></rect>
        </g>
        <g id="complexBarChartTitle_x_band_2" className="chart__front-xband">
          <rect className="chart__front-xband-background" x="140" y="0" width="140" height="192"></rect>
        </g>
        <g id="complexBarChartTitle_x_band_3" className="chart__front-xband">
          <rect className="chart__front-xband-background" x="0" y="0" width="140" height="192"></rect>
        </g>
      </g>
    </svg>
  );
};

ChartTwo.displayName = 'ChartTwo';

export default ChartTwo;
