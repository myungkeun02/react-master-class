const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo(coinId: string) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinTickers(coinId: string) {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startData = endDate - 60 * 60 * 24 * 7 * 2;
  return await ( 
    //await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startData}&end=${endDate}`)
    await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
  ).json();
}


