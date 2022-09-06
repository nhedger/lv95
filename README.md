# LV95

This library exposes a `fromLV65` function to transform LV95 coordinates to
WGS84 coordinates.

## Installation

Install with your favorite package manager.

```bash
# npm
npm install @hedger/lv95

# pnpm
pnpm add @hedger/lv95

# yarn
yarn add @hedger/lv95
```

## Usage

### CommonJS import

```ts
const { fromLV95 } = require('@hedger/lv95');

const { latitude, longitude } = fromLV95(2_700_000, 1_100_000);
```

### ESM

```ts
import { fromLV95 } from '@hedger/lv95';

const { latitude, longitude } = fromLV95(2_700_000, 1_100_000);
```

## License

This library is open-sourced software distributed under the [MIT License](./LICENSE.md).

## Credits

The formulas used in this library come from the following document provided by the [Federal Office of Topography swisstopo](https://www.swisstopo.admin.ch/en/home.html).

-   [Formulas and constants for the calculation of the Swiss conformal cylindrical projection
    and for the transformation between coordinate systems](https://www.swisstopo.admin.ch/content/swisstopo-internet/en/online/calculation-services/_jcr_content/contentPar/tabs/items/documents_publicatio/tabPar/downloadlist/downloadItems/20_1467104436749.download/refsys_e.pdf)
