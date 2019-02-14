'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
  async custonIndex() {
    //let str = await this.ctx.service.customService.show('zc','hh');
    //this.ctx.body = 'this is my controller '+str;
    this.ctx.body = this.ctx.helper.show();
  }
}

module.exports = CustomController;
