import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import path = require('path');

@Controller()
export class AppController {
  @Get('*')
  get(@Res() res: Response, @Next() next: NextFunction, @Req() req: Request) {
    // here you can check if the requested path is your api endpoint, if that's the case then we have to return next()
    if (req.path.includes('graphql')) {
      return next();
    }
    // change the path to the correct html page path in your project
    res.sendFile(path.resolve('build/index.html'));
  }
  // @Get('*')
  // get(@Res() res: Response) {
  //   res.sendFile('index.html', {
  //     root: '../client/dist',
  //   });
  // }
}
