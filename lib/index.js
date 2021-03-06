'use strict';

/**
 * Module dependencies
 */

var debug = require('debug')('mango:api');

/**
 * Resources
 */

var Customers = require('./resources/customers');
var Cards = require('./resources/cards');
var Charges = require('./resources/charges');
var Refunds = require('./resources/refunds');
var Queue = require('./resources/queue');
var Installments = require('./resources/installments');

/**
 * Expose constructor
 */

module.exports = Mango;

/**
 * Mango constructor
 *
 * @param {String} api_key
 * @return {Mango} API client instance
 * @api public
 */

function Mango(options) {
  if(!(this instanceof Mango)) {
    return new Mango(options);
  }

  /* istanbul ignore next */
  if('string' != typeof options.api_key) {
    throw new Error('Please provide a valid api_key');
  }

  this._api_key = options.api_key;
  this.Customers = new Customers(this);
  this.Cards = new Cards(this);
  this.Charges = new Charges(this);
  this.Refunds = new Refunds(this);
  this.Queue = new Queue(this);
  this.Installments = new Installments(this);

  debug('Client intialized');
}
