import { micrize } from 'micrize'
import { connect } from './utils/conn'

let connPromise = null

export const services = micrize({
  greeter: () => import('./greeter'),
  blog: async () => (await waitConn(), await import('./blog'))
})

async function waitConn() {
  if (!connPromise) connPromise = connect()
  await connPromise
}