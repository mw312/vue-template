/**
 * 系统公用常量
 * Created by momo
 */
//各环境，各系统域名
var _DOMAIN_CONST_ = {
  DEVELOPMENT: {
    PMS: '',
    OMS: ''
  },
  INNER_TEST: {
    PMS: 'http://pms.local.fanqiele.com',
    OMS: 'http://oms.local.fanqiele.com'
  },
  U_STAGING: {
    PMS: 'http://pms.97kezhan.com',
    OMS: 'http://openapi.97kezhan.com'
  },
  U_PRODUCTION: {
    PMS: 'http://www.fanqiele.com',
    OMS: 'http://oms.fanqiele.com'
  }
}

//当前所用环境域名，开发用非_DOMAIN_CONST_.ONLINE，生成环境用_DOMAIN_CONST_.ONLINE
switch (process.env.NODE_ENV) {
  case  'inner':
    var DOMAIN = _DOMAIN_CONST_.INNER_TEST
    break;
  case  'staging':
    var DOMAIN = _DOMAIN_CONST_.U_STAGING
    break;
  case  'production':
    var DOMAIN = _DOMAIN_CONST_.U_PRODUCTION
    break;
  default:
    var DOMAIN = _DOMAIN_CONST_.DEVELOPMENT
}


module.exports = {
  DOMAIN: DOMAIN,
  //订单操作来源(-1：WEB（房态）、-2：PAD、-3：ANDROID、-4：CLIENT、-5：IPHONE、-6：WEB（订单）)
  ORDER_FROM: {
    WEB_ROOM_STATUS: -1,
    PAD: -2,
    ANDROID: -3,
    CLIENT: -4,
    IPHONE: -5,
    WEB_ORDER_MODULE: -6
  }
}
