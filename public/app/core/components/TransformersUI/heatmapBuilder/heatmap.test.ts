import { FieldType } from '@grafana/data';
import { toDataFrame } from '@grafana/data/src/dataframe/processDataFrame';
import { calculateHeatmapFromData, HeatmapOptions } from './heatmap';

describe('Heatmap transformer', () => {
  it('calculate heatmap from input data', async () => {
    const options: HeatmapOptions = {
      //
    };

    const data = toDataFrame({
      name: 'locations',
      fields: [
        { name: 'location', type: FieldType.string, values: ['AL', 'AK', 'Arizona', 'Arkansas', 'Somewhere'] },
        { name: 'values', type: FieldType.number, values: [0, 10, 5, 1, 5] },
      ],
    });

    const heatmap = calculateHeatmapFromData([data], options);

    expect(heatmap).toBeDefined();
  });
});
