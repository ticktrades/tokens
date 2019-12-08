import { writable, derived } from 'svelte/store';

const tradeStreamStore = writable({ symbol: 'XBTUSD', price: 7234.9, side: 'Buy' });

export { tradeStreamStore };
