import EpnsSDK from "@epnsproject/backend-sdk-staging"

export default async function handler(req, res) {

  const sdk = new EpnsSDK(process.env.EPNS_CHANNEL_PK)
  const tx = await sdk.sendNotification(
    req.query.address,
    "Fusion Score",
    `You are reqested by ${req.query.sender} to update your fusion score.`,
    "Fusion Score",
    `You are reqested by ${req.query.sender} to update your fusion score.`,
    3, //this is the notificationType
    "https://fusion-credit-blrc4sy5e-amadeobrands.vercel.app/", // a url for users to be redirected to
    "https://fusion-credit-blrc4sy5e-amadeobrands.vercel.app/img/logo-fc.png",// an image url, or an empty string
    null, //this can be left as null
  )

  console.log(tx)

  res.status(200).send({ message: 'Message Sent' })
}