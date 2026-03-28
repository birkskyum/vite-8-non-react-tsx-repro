import { hydrate } from './runtime'
import { StartClient } from './client'

export function render() {
  hydrate(() => <StartClient />, document)
}
