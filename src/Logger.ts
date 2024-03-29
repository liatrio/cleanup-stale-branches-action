import pc from 'picocolors'

export class Logger {
  public info(message: string | unknown, source: string = 'Logger#info') {
    if (typeof message === 'string') {
      console.log(pc.gray(`[INFO][${source}] ${message}`))
    } else {
      console.log(pc.gray(`[INFO][${source}] ${JSON.stringify(message, null, 2)}`))
    }
  }

  public warn(message: string | unknown, source: string = 'Logger#warn') {
    if (typeof message === 'string') {
      console.log(pc.yellow(`[WARN][${source}] ${message}`))
    } else {
      console.log(pc.yellow(`[WARN][${source}] ${JSON.stringify(message, null, 2)}`))
    }
  }

  public error(message: string | unknown, source: string = 'Logger#error') {
    if (typeof message === 'string') {
      console.error(pc.red(`[ERROR][${source}] ${message}`))
    } else {
      console.error(pc.red(`[ERROR][${source}] ${JSON.stringify(message, null, 2)}`))
    }
  }

  public debug(message: string | unknown, source: string = 'Logger#debug') {
    if (typeof message === 'string') {
      console.log(pc.cyan(`[DEBUG][${source}] ${message}`))
    } else {
      console.log(pc.cyan(`[DEBUG][${source}] ${JSON.stringify(message, null, 2)}`))
    }
  }

  public success(message: string | unknown, source: string = 'Logger#success') {
    if (typeof message === 'string') {
      console.log(pc.green(`[SUCCESS][${source}] ${message}`))
    } else {
      console.log(pc.green(`[SUCCESS][${source}] ${JSON.stringify(message, null, 2)}`))
    }
  }
}

export const logger = new Logger()
