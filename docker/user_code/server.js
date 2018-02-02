const { WeakClient } = require('zetapush-js')
const NodeJSTransports = require('zetapush-cometd/lib/node/Transports')
// Create new ZetaPush Client
const client = new WeakClient({
  transports: NodeJSTransports,
  sandboxId: process.env.sandboxId
})
client.setLogLevel('debug')
// Add connection establised listener
client.onConnectionEstablished(() => {
  console.log('onConnectionEstablished')
})
client.connect()

