import {TPBaseCommand} from '@tibco-software/cic-cli-core';

export default class World extends TPBaseCommand {
  static description = 'Say hello world';
  public static enableJsonFlag = true;
  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static flags = {};

  static args = {};

  async run(): Promise<void> {
    this.log('hello world! (./src/commands/hello/world.ts)');
  }
}
