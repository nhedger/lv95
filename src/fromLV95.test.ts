import { describe, expect, it } from 'vitest';
import { fromLV95 } from './fromLV95';

describe('Convert LV95 to WGS84', () => {
    it('converts LV95 coordinates to WGS84', () => {
        const { latitude, longitude } = fromLV95(2_700_000, 1_100_000);
        expect(latitude).toBe(46.044049);
        expect(longitude).toBe(8.730499333333333);
    });
});
