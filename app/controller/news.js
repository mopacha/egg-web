'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        await this.ctx.render('/news', {
            name: 'world',
        });
    }
}

module.exports = NewsController;