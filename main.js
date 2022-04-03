const config = require("./src/jeast-utils/config");

module.exports = {
  Jeast: require("./src/jeast"),

  version: require("./package.json").version,

  ClientInfo: require("./src/jeast-models/client-info.jeast"),
  Location: require("./src/jeast-models/location.jeast"),
  Message: require("./src/jeast-models/message.jeast"),
  MsgMedia: require("./src/jeast-models/message-media.jeast"),
  Order: require("./src/jeast-models/order.jeast"),
  Product: require("./src/jeast-models/product.jeast"),
  Contact: require("./src/jeast-models/contact.jeast"),
  Payment: require("./src/jeast-models/payment.jeast"),
  Buttons: require("./src/jeast-models/buttons.jeast"),
  List: require("./src/jeast-models/list.jeast.js"),
  GroupChat: require("./src/jeast-models/group-chat.jeast"),
  PrivateChat: require("./src/jeast-models/private-chat.jeast"),
  Chat: require("./src/jeast-models/chat.jeast"),
  ...config,
};
