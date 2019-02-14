'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async show(zc, hh) { //异步防阻塞
        return zc + " and " + hh;
    }
}
module.exports = UserService;
