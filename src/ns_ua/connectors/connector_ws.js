/**
 * PUSH Notification server V 0.2
 * (c) Telefonica Digital, 2012 - All rights reserver
 * Fernando Rodríguez Sela <frsela@tid.es>
 * Guillermo Lopez Leal <gll@tid.es>
 */

function connector_websocket(data,conn) {
  this.data = data;
  this.connection = conn;
}

connector_websocket.prototype = {
  notify: function(msg) {
    this.connection.sendUTF(msg);
  }
}

exports.connector_websocket = connector_websocket;
