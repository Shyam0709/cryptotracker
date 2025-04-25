import BitcoinLogo from '../../assets/Bitcoin.png';
import EthereumLogo from '../../assets/Ethereum.png';
import TetherLogo from '../../assets/Tether.png';
import XrpLogo from '../../assets/Xrp.png';
import BnbLogo from '../../assets/Bnb.png';
import SolanaLogo from '../../assets/Solana.png';




export const initialCryptoData = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      logo :BitcoinLogo,
      chartData: [91000, 92000, 93000, 92500, 93800, 93600, 93759]
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 1802.46,
      change1h: 0.60,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
      logo: EthereumLogo,
      chartData: [1700, 1750, 1720, 1780, 1790, 1800, 1802]
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: 1.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: 0.04,
      marketCap: 145320022085,
      volume: 92288882007,
      circulatingSupply: 145.27,
      maxSupply: null,
      logo: TetherLogo,
      chartData: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume: 5131481491,
      circulatingSupply: 58.39,
      maxSupply: 100,
      logo: XrpLogo,
      chartData: [2.10, 2.15, 2.18, 2.20, 2.19, 2.21, 2.22]
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      price: 606.65,
      change1h: 0.09,
      change24h: -1.20,
      change7d: 3.73,
      marketCap: 85471956947,
      volume: 1874281784,
      circulatingSupply: 140.89,
      maxSupply: 200,
      logo: BnbLogo,
      chartData: [590, 595, 600, 605, 602, 604, 606]
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      price: 151.51,
      change1h: 0.53,
      change24h: 1.26,
      change7d: 14.74,
      marketCap: 78381958631,
      volume: 4881674486,
      circulatingSupply: 517.31,
      maxSupply: null,
      logo: SolanaLogo,
      chartData: [140, 142, 145, 148, 149, 150, 151]
    }
  ];