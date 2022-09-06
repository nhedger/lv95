export interface WGS84Coordinates {
    latitude: number;
    longitude: number;
}

/**
 * Converts an LV95 coordinate to WGS84
 */
export const fromLV95 = (easting: number, northing: number): WGS84Coordinates => {
    return {
        latitude: toDegrees(latitude(eastingToY(easting), northingToX(northing))),
        longitude: toDegrees(longitude(eastingToY(easting), northingToX(northing))),
    };
};

const eastingToY = (easting: number): number => (easting - 2_600_000) / 1_000_000;

const northingToX = (northing: number): number => (northing - 1_200_000) / 1_000_000;

const longitude = (y: number, x: number): number =>
    2.6779094 + 4.728982 * y + 0.791484 * y * x + 0.1306 * y * x ** 2 - 0.0436 * y ** 3;

const latitude = (y: number, x: number) =>
    16.9023892 +
    3.238272 * x -
    0.270978 * y ** 2 -
    0.002528 * x ** 2 -
    0.0447 * y ** 2 * x -
    0.014 * y ** 3;

const toDegrees = (n: number): number => (n * 100) / 36;

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('converts the E (easting) coordinate to the civilan system', () => {
        expect(eastingToY(2_700_000)).toBe(0.1);
    });

    it('converts the N (northing) coordinate to the civilan system', () => {
        expect(northingToX(1_100_000)).toBe(-0.1);
    });

    it('calculates the latitude', () => {
        expect(latitude(eastingToY(2_700_000), northingToX(1_100_000))).toBe(16.57585764);
    });

    it('calculates the longitude', () => {
        expect(longitude(eastingToY(2_700_000), northingToX(1_100_000))).toBe(3.1429797599999993);
    });
}
