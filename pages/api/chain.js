export default function handler(req, res) {
  res.status(200).json([
    {
      "name": "eth-mainnet",
      "chain_id": "1",
      "is_testnet": false,
      "db_schema_name": "chain_eth_mainnet",
      "label": "Ethereum Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
    },
    {
      "name": "eth-kovan",
      "chain_id": "42",
      "is_testnet": true,
      "db_schema_name": "chain_eth_kovan",
      "label": "Ethereum Testnet Kovan",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png"
    },
    {
      "name": "matic-mainnet",
      "chain_id": "137",
      "is_testnet": false,
      "db_schema_name": "chain_matic_mainnet",
      "label": "Matic Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png"
    },
    {
      "name": "matic-mumbai",
      "chain_id": "80001",
      "is_testnet": true,
      "db_schema_name": "chain_matic_mumbai",
      "label": "Matic Testnet Mumbai",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png"
    },
    {
      "name": "avalanche-mainnet",
      "chain_id": "43114",
      "is_testnet": false,
      "db_schema_name": "chain_avalanche_mainnet",
      "label": "Avalanche C-Chain Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png"
    },
    {
      "name": "avalanche-testnet",
      "chain_id": "43113",
      "is_testnet": true,
      "db_schema_name": "chain_avalanche_testnet",
      "label": "Avalanche Fuji Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png"
    },
    {
      "name": "bsc-mainnet",
      "chain_id": "56",
      "is_testnet": false,
      "db_schema_name": "chain_bsc_mainnet",
      "label": "Binance Smart Chain",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png"
    },
    {
      "name": "bsc-testnet",
      "chain_id": "97",
      "is_testnet": true,
      "db_schema_name": "chain_bsc_testnet",
      "label": "Binance Smart Chain Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png"
    },
    {
      "name": "moonbeam-mainnet",
      "chain_id": "1284",
      "is_testnet": false,
      "db_schema_name": "chain_moonbeam_mainnet",
      "label": "Moonbeam Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/moonbeam-logo.png"
    },
    {
      "name": "moonbeam-moonbase-alpha",
      "chain_id": "1287",
      "is_testnet": true,
      "db_schema_name": "chain_moonbeam_moonbase_alpha",
      "label": "Moonbeam Moonbase Alpha",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/moonbeam-logo.png"
    },
    {
      "name": "moonbeam-moonriver",
      "chain_id": "1285",
      "is_testnet": false,
      "db_schema_name": "chain_moonbeam_moonriver",
      "label": "Moonbeam Moonriver",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/moonriver.png"
    },
    {
      "name": "rsk-mainnet",
      "chain_id": "30",
      "is_testnet": false,
      "db_schema_name": "chain_rsk_mainnet",
      "label": "RSK Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/rsk-mainnet-logo.svg"
    },
    {
      "name": "rsk-testnet",
      "chain_id": "31",
      "is_testnet": true,
      "db_schema_name": "chain_rsk_testnet",
      "label": "RSK Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/rsk-mainnet-logo.svg"
    },
    {
      "name": "arbitrum-mainnet",
      "chain_id": "42161",
      "is_testnet": false,
      "db_schema_name": "chain_arbitrum_mainnet",
      "label": "Arbitrum Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/arbitrum-mainnet-logo.svg"
    },
    {
      "name": "arbitrum-testnet",
      "chain_id": "421611",
      "is_testnet": true,
      "db_schema_name": "chain_arbitrum_testnet",
      "label": "Arbitrum Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/arbitrum-mainnet-logo.svg"
    },
    {
      "name": "fantom-mainnet",
      "chain_id": "250",
      "is_testnet": false,
      "db_schema_name": "chain_fantom_mainnet",
      "label": "Fantom Opera",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png"
    },
    {
      "name": "fantom-testnet",
      "chain_id": "4002",
      "is_testnet": true,
      "db_schema_name": "chain_fantom_testnet",
      "label": "Fantom Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png"
    },
    {
      "name": "palm-mainnet",
      "chain_id": "11297108109",
      "is_testnet": false,
      "db_schema_name": "chain_palm_mainnet",
      "label": "Palm Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/palm-mainnet-logo.svg"
    },
    {
      "name": "palm-testnet",
      "chain_id": "11297108099",
      "is_testnet": true,
      "db_schema_name": "chain_palm_testnet",
      "label": "Palm Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/palm-mainnet-logo.svg"
    },
    {
      "name": "klaytn-mainnet",
      "chain_id": "8217",
      "is_testnet": false,
      "db_schema_name": "chain_klaytn_mainnet",
      "label": "Klaytn Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/klaytn-mainnet-logo.svg"
    },
    {
      "name": "heco-mainnet",
      "chain_id": "128",
      "is_testnet": false,
      "db_schema_name": "chain_heco_mainnet",
      "label": "HECO Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/heco-mainnet-logo.svg"
    },
    {
      "name": "heco-testnet",
      "chain_id": "256",
      "is_testnet": true,
      "db_schema_name": "chain_heco_testnet",
      "label": "HECO Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/heco-testnet-logo.svg"
    },
    {
      "name": "nervos-polyjuice-testnet",
      "chain_id": "71393",
      "is_testnet": true,
      "db_schema_name": "chain_nervos_polyjuice_testnet",
      "label": "Nervos Polyjuice Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/nervos-polyjuice-testnet-logo.svg"
    },
    {
      "name": "axie-mainnet",
      "chain_id": "2020",
      "is_testnet": false,
      "db_schema_name": "chain_axie_mainnet",
      "label": "Axie Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/axie-logo.svg"
    },
    {
      "name": "evmos-mainnet",
      "chain_id": "9001",
      "is_testnet": true,
      "db_schema_name": "chain_evmos_mainnet",
      "label": "EVMOS Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/evmos-logo.svg"
    },
    {
      "name": "evmos-testnet",
      "chain_id": "9000",
      "is_testnet": true,
      "db_schema_name": "chain_evmos_testnet",
      "label": "EVMOS Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/evmos-logo.svg"
    },
    {
      "name": "astar-mainnet",
      "chain_id": "592",
      "is_testnet": false,
      "db_schema_name": "chain_astar_mainnet",
      "label": "Astar Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/astar-mainnet-logo.svg"
    },
    {
      "name": "astar-shiden",
      "chain_id": "336",
      "is_testnet": false,
      "db_schema_name": "chain_astar_shiden",
      "label": "Astar Shiden",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/astar-shiden-logo.svg"
    },
    {
      "name": "iotex-mainnet",
      "chain_id": "4689",
      "is_testnet": false,
      "db_schema_name": "chain_iotex_mainnet",
      "label": "IoTeX Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/iotex-logo.svg"
    },
    {
      "name": "iotex-testnet",
      "chain_id": "4690",
      "is_testnet": true,
      "db_schema_name": "chain_iotex_testnet",
      "label": "IoTeX Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/iotex-logo.svg"
    },
    {
      "name": "harmony-mainnet",
      "chain_id": "1666600000",
      "is_testnet": false,
      "db_schema_name": "chain_harmony_mainnet",
      "label": "Harmony Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/harmony-logo.svg"
    },
    {
      "name": "harmony-testnet",
      "chain_id": "1666700000",
      "is_testnet": false,
      "db_schema_name": "chain_harmony_testnet",
      "label": "Harmony Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/harmony-logo.svg"
    },
    {
      "name": "aurora-mainnet",
      "chain_id": "1313161554",
      "is_testnet": false,
      "db_schema_name": "chain_aurora_mainnet",
      "label": "Aurora Mainnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/aurora-logo.svg"
    },
    {
      "name": "aurora-testnet",
      "chain_id": "1313161555",
      "is_testnet": true,
      "db_schema_name": "chain_aurora_testnet",
      "label": "Aurora Testnet",
      "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/aurora-logo.svg"
    },
    {
      "name": "covalent-internal-network-v1",
      "chain_id": "1131378225",
      "is_testnet": false,
      "db_schema_name": "chain_covint1",
      "label": "Covalent Internal V1",
      "logo_url": "https://www.covalenthq.com/static/images/covalent-logomark.png"
    }
  ])
}