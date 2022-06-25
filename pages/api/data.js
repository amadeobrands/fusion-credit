export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  // expect req.body to be like {chainId, address, signature}
  const result = {
    chainId: req.body.chainId,
    address: req.body.address,
    creationTime: Date.now() - 3600 * 24 * 365,
    transactionCount: 200,
    balanceAmount: 700,
    signature: "a483928b3746583473646374665483",
  }

  res.status(200).json(result)
}