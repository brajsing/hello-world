import {Command} from '@oclif/core'
import { TCBaseCommand } from '@tibco-software/cic-cli-core'

export default class World extends TCBaseCommand {
  static description = 'Say hello world'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = {}

  async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
