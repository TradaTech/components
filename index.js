"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rcQueueAnim = _interopRequireDefault(require("rc-queue-anim"));

require("./botui.min.css");

require("./botui-theme-default.css");

var _bot = require("./bot");

var _utils = require("../common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  line-height: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-width: 320px;\n  max-width: 650px;\n  height: 750px;\n  width: 100%;\n  #my-botui-app:first-child {\n    position: relative;\n    height: 100%;\n  }\n  // icon menu\n  .menu-icon {\n    position: fixed;\n    top: 60px;\n    right: 30px;\n    z-index: 10;\n    width: 50px;\n    height: 50px;\n    font-size: 30px;\n    color: rgb(90, 90, 90);\n  }\n  //background-sidebar\n  .background-sidebar {\n    position: fixed;\n    z-index: 4;\n    width: 0px;\n    height: 100%;\n    background-color: #28635a;\n    overflow: none;\n    // display: none;\n  }\n  //side-bar\n  .sidebar {\n    width: 0px;\n    height: 0px;\n    position: fixed;\n    top: 0px;\n    z-index: 3;\n  }\n\n  // side-bar_right\n  .side-bar_right {\n    z-index: 100;\n    position: fixed;\n    right: 17px;\n    top: 57px;\n    height: 648px;\n    background-color: #28635a;\n    transition: 300ms;\n\n    .content-sidebar {\n      width: 100%;\n      height: 92%;\n      position: absolute;\n      top: 8%;\n      color: whitesmoke;\n      color: white;\n      padding: 10px;\n    }\n\n    .bot-menu-items {\n      padding-top: 60px;\n    }\n    .bot-menu-items a {\n      padding: 8px 8px 8px 32px;\n      text-decoration: none;\n      font-size: 25px;\n      color: #818181;\n      display: block;\n      transition: 0.3s;\n    }\n\n    .bot-menu-items a:hover {\n      color: #f1f1f1;\n    }\n  }\n  border-radius: 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: ", ";\n  box-shadow: ", ";\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  @media (max-width: 768px) {\n    width: 100%;\n    min-width: 300px;\n    max-width: 300px;\n    padding: 15px;\n    top: 10%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PuContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.popupBg;
}, function (props) {
  return props.theme.boxShadow;
});

var WrapperBtnCloseCus = (0, _styledComponents.default)(_utils.WrapperBtnClose)(_templateObject2());

var BotShow =
/*#__PURE__*/
function (_Component) {
  _inherits(BotShow, _Component);

  function BotShow(props) {
    var _this;

    _classCallCheck(this, BotShow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BotShow).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_start",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, botAddress, privateKey;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, botAddress = _this$props.botAddress, privateKey = _this$props.privateKey;

              if (!botAddress) {
                _context.next = 13;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return (0, _bot.connectBot)(botAddress, privateKey);

            case 5:
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              window.alert(String(_context.t0));

            case 11:
              _context.next = 14;
              break;

            case 13:
              window.alert('No bot to connect!');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 7]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "openBar", function () {
      _this.setState({
        showMenu: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hiddenSibar", function () {
      _this.setState({
        showMenu: false
      });
    });

    _this.state = {
      showMenu: false
    };
    return _this;
  }

  _createClass(BotShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2._start();
      }, 150);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _bot.disConnectBot)();
    }
  }, {
    key: "render",
    value: function render() {
      var showMenu = this.state.showMenu;
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          address = _this$props2.address;
      return _react.default.createElement(_rcQueueAnim.default, {
        animConfig: {
          opacity: [1, 0]
        }
      }, _react.default.createElement(_utils.PuLayout, {
        key: 1
      }, _react.default.createElement(_rcQueueAnim.default, {
        leaveReverse: true,
        delay: 100,
        type: ['top', 'bottom']
      }, _react.default.createElement(PuContainer, {
        key: 2
      }, _react.default.createElement(_utils.PuHeader, {
        style: {
          color: '#232937'
        }
      }, "Your Address: ", address), _react.default.createElement(_utils.PuContent, {
        style: {
          height: '90%'
        }
      }, _react.default.createElement("div", {
        id: "my-botui-app"
      }, _react.default.createElement("bot-ui", null)), _react.default.createElement("div", {
        className: "sidebar",
        id: "sidebar"
      }, _react.default.createElement("div", {
        className: "background-sidebar"
      }), _react.default.createElement("div", {
        className: "menu-icon phone"
      }, _react.default.createElement("i", {
        className: "fa fa-bars",
        onClick: this.openBar
      })), _react.default.createElement("div", {
        className: "side-bar_right",
        id: "side-bar_right",
        style: {
          width: showMenu === true ? '15pc' : '0px'
        },
        onBlur: this.hiddenSibar
      }, _react.default.createElement(WrapperBtnCloseCus, {
        id: "btnClose",
        onClick: this.hiddenSibar,
        style: {
          display: showMenu === true ? 'block' : 'none'
        }
      }, _react.default.createElement(_utils.Icon, {
        type: "close",
        size: "18",
        color: "inherit"
      })), _react.default.createElement("div", {
        className: "content-rsideba",
        id: "content-rsideba",
        style: {
          display: showMenu === true ? 'block' : 'none'
        } // onBlur={this.hiddenSibar}

      }, _react.default.createElement("div", {
        className: "bot-menu-items",
        id: "bot-menu-items"
      }, _react.default.createElement("a", {
        href: "#"
      }, "About"), _react.default.createElement("a", {
        href: "#"
      }, "Services"), _react.default.createElement("a", {
        href: "#"
      }, "Clients"), _react.default.createElement("a", {
        href: "#"
      }, "Contact")))))), _react.default.createElement(WrapperBtnCloseCus, {
        onClick: onClose
      }, _react.default.createElement(_utils.Icon, {
        type: "close",
        size: "18",
        color: "inherit"
      }))))));
    }
  }]);

  return BotShow;
}(_react.Component);

BotShow.defaultProps = {
  botAddress: '',
  address: '',
  privateKey: '',
  onClose: function onClose() {}
};
var _default = BotShow;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectBot = connectBot;
exports.disConnectBot = disConnectBot;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _botui = _interopRequireDefault(require("botui"));

var _tweb = _interopRequireDefault(require("../../services/tweb3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initWeb3 = function initWeb3(privateKey) {
  var showAlert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  try {
    _tweb.default.wallet.importAccount(privateKey);

    return true;
  } catch (error) {
    console.error(error);
    var err = 'Please go to Wallet tab to create or import one first.';
    byId('address').textContent = err;
    showAlert && window.alert(err);
    return false;
  }
};

var web3Inited;
var queue = [];
var botui = null;
var handleInterval = null;

var say = function say(text, options) {
  botui.message.add(Object.assign({
    content: String(text)
  }, options || {}));
};
/**
 * generate buttons
 * @param {string} action array of button title
 */


var sayButton = function sayButton(action) {
  if (!Array.isArray(action)) {
    action = [action];
  }

  return botui.action.button({
    action: action
  });
};

var saySelect = function saySelect(action) {
  return botui.action.select({
    action: action
  });
};

var speak = function speak(items) {
  if (!items) return;

  if (!Array.isArray(items)) {
    items = [items];
  }

  if (!items.length) return;
  return items.reduce(function (prev, item) {
    if (typeof item === 'string') {
      return say(item);
    }

    item.type = item.type || 'text';

    switch (item.type) {
      case 'text':
      case 'html':
        {
          return botui.message.add(item);
        }

      case 'input':
        return botui.action.text({
          action: item.content
        });

      case 'button':
        return sayButton(item.content);

      case 'select':
        return saySelect(item.content);
    }
  }, undefined);
};
/**
 * get element by id
 * @param {string} id element id
 */


function byId(id) {
  return document.getElementById(id);
}

function fmtMicroTea(n) {
  var tea = n / Math.pow(10, 6);
  return tea.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 9
  });
}

function confirmTransfer(amount) {
  say("ATTENTION: you are about to transfer <b>".concat(fmtMicroTea(amount), "</b> TEA to this bot."), {
    type: 'html',
    cssClass: 'bot-confirm'
  });
  return sayButton([{
    text: "Let's transfer",
    value: 'transfer'
  }, {
    text: 'No way',
    value: 'no'
  }]).then(function (result) {
    return !!result && result.value === 'transfer';
  });
}

function callContract(method, type, value, from) {
  if (value) {
    type = 'write';
  }

  var map = {
    none: 'callPure',
    read: 'call',
    write: 'sendCommit'
  };

  for (var _len = arguments.length, params = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    params[_key - 4] = arguments[_key];
  }

  return method.apply(void 0, params)[map[type]]({
    value: value,
    from: from
  }).then(function (r) {
    return type === 'write' ? r.returnValue : r;
  });
}

function getBotInfoFromStore(_x) {
  return _getBotInfoFromStore.apply(this, arguments);
}

function _getBotInfoFromStore() {
  _getBotInfoFromStore = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(alias) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _tweb.default.contract('system.botstore').methods.query(alias);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {});

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _getBotInfoFromStore.apply(this, arguments);
}

function getBotInfoFromBot(_x2) {
  return _getBotInfoFromBot.apply(this, arguments);
}

function _getBotInfoFromBot() {
  _getBotInfoFromBot = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(alias) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _tweb.default.contract(alias).methods.botInfo().callPure();

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {});

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _getBotInfoFromBot.apply(this, arguments);
}

function getBotInfo(_x3) {
  return _getBotInfo.apply(this, arguments);
}

function _getBotInfo() {
  _getBotInfo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(alias) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = Object;
            _context3.next = 3;
            return getBotInfoFromBot(alias);

          case 3:
            _context3.t1 = _context3.sent;
            _context3.next = 6;
            return getBotInfoFromStore(alias);

          case 6:
            _context3.t2 = _context3.sent;
            return _context3.abrupt("return", _context3.t0.assign.call(_context3.t0, _context3.t1, _context3.t2));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getBotInfo.apply(this, arguments);
}

function pushToQueue(type, content, stateAccess, transferValue, sendback) {
  if (content.value.indexOf(':') > 0) {
    var parts = content.value.split(':', 2);
    type = parts[0];
    content.value = parts[1];
  }

  queue.push({
    type: type,
    content: content,
    transferValue: transferValue,
    sendback: sendback,
    stateAccess: stateAccess
  });
}

function setCommands(commands, defStateAccess) {
  var t = byId('bot-menu-items');
  t.innerHTML = '';
  commands.forEach(function (c) {
    var a = document.createElement('A');
    a.href = '#';
    a.setAttribute('data-value', c.value);
    a.textContent = c.text || c.value;
    t.appendChild(a);

    a.onclick = function () {
      closeNav(); // botui.action.hide()

      say(c.text || c.value, {
        human: true
      }); // console.log('Check', `${c.text} Xem ${c.value}`);

      pushToQueue('command', c, c.stateAccess || defStateAccess);
    };
  });
}

function handleQueue(contract, defStateAccess) {
  if (queue.length) {
    var item = queue.shift();
    callContract(contract.methods["on".concat(item.type)], item.stateAccess, item.transferValue || 0, _tweb.default.wallet.defaultAccount, item.content.value, {
      sendback: item.sendback
    }).then(function (contractResult) {
      // console.log(contractResult);
      return speak(contractResult.messages || contractResult).then(function (speakResult) {
        if (_typeof(speakResult) === 'object') {
          speakResult.sendback = contractResult.sendback;
          speakResult.stateAccess = (contractResult.options || {}).nextStateAccess;
        }

        if (contractResult.options && contractResult.options.value) {
          return confirmTransfer(contractResult.options.value).then(function (ok) {
            if (!ok) {
              say('Transfer canceled. You could reconnect to this bot to start a new conversation.');
              return sayButton({
                text: 'Restart',
                value: 'command:start'
              });
            }

            speakResult.transferValue = contractResult.options.value;
            return speakResult;
          });
        }

        return speakResult;
      });
    }).then(function (r) {
      if (r && r.value) {
        pushToQueue('text', r, r.stateAccess || defStateAccess, r.transferValue, r.sendback);
      }
    }).catch(function (err) {
      console.error(err);
      say("An error has occured: ".concat(err), {
        type: 'html',
        cssClass: 'bot-error'
      });
    });
  }
}

function closeNav() {
  byId('side-bar_right').style.width = '0px';
  byId('content-rsideba').style.display = 'none';
  byId('btnClose').style.display = 'none';
}
/**
 * connect to bot smart contract
 * @param {string} botAddr bot smart contract address
 */


function connectBot(_x4, _x5) {
  return _connectBot.apply(this, arguments);
}

function _connectBot() {
  _connectBot = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(botAddr, privateKey) {
    var contract, botInfo, commands, meta, deco;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            botui = (0, _botui.default)('my-botui-app', {
              vue: _vue.default
            });

            if (!web3Inited) {
              web3Inited = initWeb3(privateKey);
            }

            if (web3Inited) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return");

          case 4:
            contract = _tweb.default.contract(botAddr); // get bot info

            _context4.next = 7;
            return getBotInfo(botAddr);

          case 7:
            botInfo = _context4.sent;
            commands = botInfo.commands || [{
              text: 'Start',
              value: 'start',
              stateAccess: 'none'
            }];

            if (botInfo.stateAccess) {
              _context4.next = 16;
              break;
            }

            _context4.next = 12;
            return _tweb.default.getMetadata(botAddr);

          case 12:
            meta = _context4.sent;

            if (meta && meta.oncommand && meta.oncommand.decorators && meta.oncommand.decorators.length > 0) {
              deco = meta.oncommand.decorators[0];

              if (deco === 'transaction' || deco === 'payable') {
                botInfo.stateAccess = 'write';
              } else if (deco === 'pure') {
                botInfo.stateAccess = 'none';
              } else {
                botInfo.stateAccess = 'read';
              }
            } else {
              botInfo.stateAccess = 'read';
            }

            _context4.next = 17;
            break;

          case 16:
            if (!['read', 'write', 'none'].includes(botInfo.stateAccess)) {
              botInfo.stateAccess = 'read';
            }

          case 17:
            !botInfo.name && (botInfo.name = botAddr.split('.', 2)[1]);
            !botInfo.description && (botInfo.description = 'No description.');
            botui.message.removeAll();
            setCommands(commands, botInfo.stateAccess); // display bot info

            _context4.next = 23;
            return say("<b>".concat(botInfo.name, "</b><br>").concat(botInfo.description), {
              type: 'html',
              cssClass: 'bot-intro'
            });

          case 23:
            sayButton({
              text: botInfo.startButtonText || 'Start',
              value: 'start'
            }).then(function (r) {
              pushToQueue('command', r, botInfo.stateAccess);
            }); // console.log('Connect to Contract', contract);

            handleInterval = setInterval(function () {
              handleQueue(contract, botInfo.stateAccess);
            }, 100);

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _connectBot.apply(this, arguments);
}

function disConnectBot() {
  clearInterval(handleInterval);
}

var _default = connectBot;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BotShow", {
  enumerable: true,
  get: function get() {
    return _BotShow.default;
  }
});

var _BotShow = _interopRequireDefault(require("./BotShow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDevice = exports.MnemonicItemBase = exports.DivSelectWordBase = exports.WrapperBtnClose = exports.PuBtnGoback = exports.PuBtnCancel = exports.PuBtnNext = exports.PuFooterBtn = exports.PuContent = exports.PuHeader = exports.PuContainer = exports.PuLayout = exports.Loading = exports.BtnInactive = exports.BtnActive = exports.FontDin = exports.Icon = exports.DivContentW2 = exports.DivPreviousBt = exports.DivFooterCheckBox = exports.DivFooter = exports.DivUnlockLink = exports.DivControlBtn = exports.DivControlBtnKeystore = exports.DivValidPass = exports.InputConfirmPass = exports.InputPass = exports.Header2 = exports.Header1 = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../elements/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  color: #15b5dd;\n  display: flex;\n  line-height: 16px;\n  span {\n    margin-left: 5px;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: underline;\n  width: ", ";\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  &:hover {\n    color: #15b5dd;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  height: ", ";\n  padding: 0;\n  margin: ", ";\n  user-select: none;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  align-items: ", ";\n  background: ", ";\n  display: flex;\n  flex: ", ";\n  flex-basis: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  height: ", ";\n  justify-content: ", ";\n  margin: ", ";\n  padding: ", ";\n  align-content: ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 5px;\n  right: 8px;\n  cursor: pointer;\n  color: #848e9c;\n  &:hover {\n    color: #15b5dd;\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  background: inherit;\n  color: #15b5dd;\n  border: 1px solid #15b5dd;\n  box-shadow: none;\n  height: 34px;\n  line-height: 34px;\n  margin-right: 25px;\n  box-sizing: border-box;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  height: 34px;\n  line-height: 34px;\n  background: #fff;\n  border: 1px solid #15b5dd;\n  color: #15b5dd;\n  margin-right: 10px;\n  box-sizing: border-box;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  height: 34px;\n  line-height: 34px;\n  padding: 0 20px;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  font-size: 16px;\n  & a {\n    &,\n    &:hover,\n    &:active,\n    &:visited {\n      color: inherit !important;\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: bold;\n  font-family: 'DIN';\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  min-width: 320px;\n  padding: 30px;\n  box-sizing: border-box;\n  background: ", ";\n  box-shadow: ", ";\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: ", ";\n  background: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  border-left: 1px solid transparent;\n  animation: load 0.8s infinite linear;\n  align-self: center;\n  @keyframes load {\n    0% {\n      transform: rotate(0deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  background: #848e9c;\n  box-shadow: none;\n  width: ", ";\n  &:hover {\n    transform: scale(1);\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  line-height: ", ";\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  /* background: linear-gradient(90deg, rgba(239, 184, 11, 1) 0%, rgba(251, 218, 60, 1) 100%); */\n  background: linear-gradient(90deg, rgba(24, 123, 221, 1) 0%, rgba(52, 197, 249, 1) 100%);\n  border-radius: 3px;\n  cursor: pointer;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #999 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10, 10);\n    opacity: 0;\n    transition: transform 0.3s, opacity 0.5s;\n  }\n  &:active:after {\n    transform: scale(0, 0);\n    opacity: 0.6;\n    transition: 0s;\n  }\n  span {\n    transition: transform 0.2s ease;\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n  }\n  a {\n    transition: transform 0.2s ease;\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n  }\n  i {\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n  &:hover span {\n    transform: scale(0.9);\n  }\n  &:hover a {\n    transform: scale(0.9);\n  }\n  &:hover i {\n    transform: scale(0.9);\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'DIN';\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  & .shield {\n    font-size: 70px;\n  }\n  & .text {\n    font-size: 16px;\n    margin-top: 40px;\n    color: rgb(72, 81, 93);\n    text-align: center;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  /* cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: rgb(132, 142, 156);\n  & i {\n    margin-right: 10px;\n    color: inherit;\n  }\n  & div {\n    color: inherit;\n  }\n  &:hover div, &:hover i {\n    color: rgb(240, 185, 11);\n  }\n  &:hover div {\n    text-decoration: underline;\n  } */\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: #848e9c;\n  &:hover {\n    color: #15b5dd;\n  }\n  a {\n    color: inherit;\n  }\n  i {\n    margin-right: 10px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  & input:checked + label span:first-child {\n    background: #15b5dd;\n    border-color: #15b5dd;\n    animation: 0.4s ease 0s 1 normal none running wave;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: rgb(132, 142, 156);\n  padding: 20px 0px;\n  & .lbFooter {\n    user-select: none;\n    cursor: pointer;\n    display: flex;\n    margin: auto;\n  }\n  & .textFooter {\n    font-size: 12px;\n    color: rgb(132, 142, 156);\n    white-space: normal;\n    padding-left: 5px;\n    line-height: 20px;\n    width: 90%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #15b5dd;\n  i {\n    margin-right: 10px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  a {\n    color: inherit;\n    &:hover {\n      color: #15b5dd;\n    }\n  }\n  margin-top: 40px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  @media (min-width: 320px) and (max-width: 623px) {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 70px;\n    padding-bottom: 40px;\n    .previous-button {\n      order: 1;\n    }\n    .continue {\n      order: 0;\n      margin-top: 20px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 0 0 0;\n  font-size: 14px;\n  @media (min-width: 320px) and (max-width: 623px) {\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 70px;\n    .previous-button {\n      order: 1;\n    }\n    .download-keystore {\n      order: 0;\n      margin-top: 20px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  background: rgb(251, 251, 251);\n  padding: 10px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(234, 236, 239, 0.5);\n  border-image: initial;\n  & ul {\n    color: rgb(38, 49, 71);\n    display: flex;\n    justify-content: flex-start;\n    padding-left: 15px;\n  }\n  & ul li:first-child {\n    margin-right: 60px;\n  }\n  & ul li {\n    position: relative;\n    font-size: 12px;\n    white-space: nowrap;\n  }\n  & .invalid {\n    color: rgb(242, 48, 81);\n  }\n  & ul li.invalid::before {\n    background: rgb(242, 48, 81);\n  }\n  & ul li.pass::before {\n    background: rgb(0, 192, 135);\n  }\n  & ul li::before {\n    content: '';\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    top: 5px;\n    left: -15px;\n    border-radius: 50%;\n    background: rgb(132, 142, 156);\n  }\n  @media (max-width: 623px) and (min-width: 320px) {\n    & ul {\n      flex-direction: column;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 40px 0px 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  position: relative;\n  & .label {\n    font-size: 16px;\n    position: absolute;\n    transform: translateY(0px);\n    z-index: 100;\n    color: rgb(132, 142, 156);\n    transition: all 0.2s ease 0s;\n  }\n  & .label-value {\n    transform: translateY(-20px);\n    color: rgb(72, 81, 93);\n    font-size: 12px;\n  }\n  & .inputWrap {\n    position: relative;\n    z-index: 300;\n  }\n  & input {\n    width: 100%;\n    height: 100%;\n    font-size: 14px;\n    caret-color: #15b5dd;\n    color: rgb(72, 81, 93);\n    border-style: none none solid;\n    outline: none;\n    border-bottom: 1px solid rgba(234, 236, 239, 0.5);\n    padding: 0px 0px 10px;\n    background: inherit;\n  }\n  & input:focus {\n    border-color: #15b5dd;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: #848e9c;\n  margin: 40px 0 20px;\n  font-weight: bold;\n  span {\n    font-size: 16px;\n  }\n  .totalPage {\n    color: #eaecef;\n  }\n  .title {\n    font-size: 18px;\n    color: #48515d;\n    margin-left: 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 10px;}\n  padding-bottom: 18px;\n  text-align: center;\n  font-family: DIN;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// For create keystore
var Header1 = _styledComponents.default.div(_templateObject());

exports.Header1 = Header1;

var Header2 = _styledComponents.default.div(_templateObject2());

exports.Header2 = Header2;

var InputPass = _styledComponents.default.div(_templateObject3());

exports.InputPass = InputPass;

var InputConfirmPass = _styledComponents.default.div(_templateObject4());

exports.InputConfirmPass = InputConfirmPass;

var DivValidPass = _styledComponents.default.div(_templateObject5());

exports.DivValidPass = DivValidPass;

var DivControlBtnKeystore = _styledComponents.default.div(_templateObject6());

exports.DivControlBtnKeystore = DivControlBtnKeystore;

var DivControlBtn = _styledComponents.default.div(_templateObject7());

exports.DivControlBtn = DivControlBtn;

var DivUnlockLink = _styledComponents.default.div(_templateObject8());

exports.DivUnlockLink = DivUnlockLink;

var DivFooter = _styledComponents.default.div(_templateObject9());

exports.DivFooter = DivFooter;

var DivFooterCheckBox = _styledComponents.default.div(_templateObject10());

exports.DivFooterCheckBox = DivFooterCheckBox;

var DivPreviousBt = _styledComponents.default.div(_templateObject11());

exports.DivPreviousBt = DivPreviousBt;

var DivContentW2 = _styledComponents.default.div(_templateObject12());

exports.DivContentW2 = DivContentW2;

var IconBase = _styledComponents.default.i(_templateObject13(), function (props) {
  return props.color;
}, function (props) {
  return ''.concat(props.size, 'px');
}, function (props) {
  return props.hoverColor ? props.hoverColor : props.color;
});

var Icon = function Icon(props) {
  var size = props.size,
      color = props.color,
      type = props.type,
      hoverColor = props.hoverColor;
  return _react.default.createElement(IconBase, {
    className: 'iconfont icon-'.concat(type),
    size: size || '16px',
    color: color,
    hoverColor: hoverColor
  });
};

exports.Icon = Icon;
Icon.defaultProps = {
  size: 16,
  color: '',
  hoverColor: ''
};

var FontDin = function FontDin(props) {
  var Item = _styledComponents.default.span(_templateObject14());

  return _react.default.createElement(Item, null, props.value);
};

exports.FontDin = FontDin;
FontDin.defaultProps = {
  value: ''
}; // For create

var BtnActive = _styledComponents.default.button(_templateObject15(), function (props) {
  return props.width ? props.width : '100px';
}, function (props) {
  return props.height ? props.height : '40px';
}, function (props) {
  return props.height ? props.height : '40px';
});

exports.BtnActive = BtnActive;
var BtnInactive = (0, _styledComponents.default)(BtnActive)(_templateObject16(), function (props) {
  return props.width ? props.width : '100px';
});
exports.BtnInactive = BtnInactive;

var Loading = _styledComponents.default.div(_templateObject17()); // For Popup


exports.Loading = Loading;

var PuLayout = _styledComponents.default.div(_templateObject18(), _styles.zIndex.modal);

exports.PuLayout = PuLayout;

var PuContainer = _styledComponents.default.div(_templateObject19(), function (props) {
  return props.theme.fontColor || 'black';
}, function (props) {
  return props.theme.popupBg || '#fff';
}, function (props) {
  return props.theme.boxShadow;
});

exports.PuContainer = PuContainer;

var PuHeader = _styledComponents.default.div(_templateObject20());

exports.PuHeader = PuHeader;

var PuContent = _styledComponents.default.div(_templateObject21());

exports.PuContent = PuContent;

var PuFooterBtn = _styledComponents.default.div(_templateObject22(), function (props) {
  return props.align;
});

exports.PuFooterBtn = PuFooterBtn;
var PuBtnNext = (0, _styledComponents.default)(BtnActive)(_templateObject23());
exports.PuBtnNext = PuBtnNext;
var PuBtnCancel = (0, _styledComponents.default)(BtnActive)(_templateObject24());
exports.PuBtnCancel = PuBtnCancel;
var PuBtnGoback = (0, _styledComponents.default)(BtnActive)(_templateObject25());
exports.PuBtnGoback = PuBtnGoback;

var WrapperBtnClose = _styledComponents.default.div(_templateObject26()); // For DivSelectWord


exports.WrapperBtnClose = WrapperBtnClose;

var DivSelectWordBase = _styledComponents.default.div(_templateObject27(), function (props) {
  return props.align;
}, function (props) {
  return props.bg === 'theme' ? props.theme.bg : '';
}, function (props) {
  return props.flex;
}, function (props) {
  return props.basis;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.wrap || 'wrap';
}, function (props) {
  return props.height;
}, function (props) {
  return props.justify;
}, function (props) {
  return props.margin;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.content;
}); // MnemonicItem


exports.DivSelectWordBase = DivSelectWordBase;

var MnemonicItemBase = _styledComponents.default.div(_templateObject28(), function (props) {
  return props.theme.border || '#eee';
}, function (props) {
  return props.height;
}, function (props) {
  return props.margin || '5px';
});

exports.MnemonicItemBase = MnemonicItemBase;

var Hash = _styledComponents.default.div(_templateObject29(), function (_ref) {
  var theme = _ref.theme;
  return theme.TxHashColor;
}, function (_ref2) {
  var width = _ref2.width;
  return width || '150px';
});

var HashLoading = _styledComponents.default.div(_templateObject30());

var checkDevice = {
  URI: function URI(e) {
    var t = new RegExp('(^|&)'.concat(e, '=([^&]*)(&|$)')),
        n = window.location.search.substr(1).match(t);
    return null != n ? decodeURIComponent(n[2]) : null;
  },
  isMobile: function isMobile() {
    return /mobile|phone|android|pad/i.test(window.navigator.userAgent);
  },
  ios: function ios() {
    return /iphone|ipad/i.test(window.navigator.userAgent);
  },
  redirect: function redirect() {
    var e = window.location,
        t = e.origin,
        n = e.pathname;
    window.location.href = t + n;
  }
};
exports.checkDevice = checkDevice;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.theme = void 0;
var size = {
  contentMargin: '20px auto 30px',
  maxWidth: '1200px',
  minWidth: '1200px',
  basictTradePageMaxWidth: '1260px',
  basictTradePageMinWidth: '1260px',
  fontSizeSm: '12px',
  fontSizeMd: '14px',
  fontSizeLg: '16px',
  fontSizeXl: '18px',
  fontSizeXxl: '20px',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700
};
var color = {
  bg: '#FBFBFB',
  crosshair: '#888888',
  short: '#ea0070',
  shortFill: '#ea0070',
  long: '#70a800',
  longFill: '#70a800',
  cta: '#FBFBFB',
  ctaHighlight: '#F5F5F5',
  alert: '#FFD506',
  category: 'light',
  grid: '#E6E6E6',
  lineColor: '#555',
  textColor: '#999',
  maLine: '#15b5dd',
  ma1: '#ffc200',
  ma2: '#6600cc',
  ma3: '#cc0066'
};
var theme = Object.assign({}, size, {
  mode: 'LIGHT',
  headerBg: '#12161C',
  fiatPriceColor: '#333333',
  TxHashColor: '#212833',
  CheckBoxLabelColor: '#848E9C',
  thColor: '#848E9C',
  qrcodeBg: '#fff',
  exchangeTitleColor: '#848e9c',
  headerDropdownBg: '#252D38',
  dropdownBg: '#fff',
  dropdownSelectBgColor: 'rgba(234, 236, 239, 0.2)',
  dropdownSelectItemColor: '#848E9C',
  dropdownTextDisplayColor: '#fff',
  popupBg: '#fff',
  bg1: '#fff',
  bg2: '#fff',
  inputBgColor: '#fff',
  inputColor: '#212833',
  borderColor: '#DFE2E7',
  selcetItemColor: '#DFE2E7',
  calendarButtonEnable: '#212833',
  calendarButtonDisable: '#848E9C',
  greyBg: '#f7f7f7',
  border: '#e6e6e6',
  border1: '#d4d4d4',
  activeBorder: '#f3ba2f',
  boxShadow: '0px 3px 20px 0px rgba(90,102,124,0.2)',
  toolTipBoxShadow: '0 0 12px rgba(0,0,0,.175)',
  activeBg: '#fff9e7',
  boxheadbg: '#f7f7f7',
  tableRowBg: '#fafafa',
  tabBorderColor: '#ddd',
  tabBg: '#fff',
  buttonbg: '#fff',
  chartbuttonbg: '#e6e6e6',
  buttonbgactive: '#15b5dd',
  buttonbgdisabled: '#ddd',
  buttonColorActive: '#15b5dd',
  okButtonBg: '#15b5dd',
  cancelButtonBg: '#fff',
  up: '#70a800',
  down: '#ea0070',
  shallowDigitOpacity: 0.45,
  highlight: '#15b5dd',
  chartTheme: 'chart-white2',
  depthTheme: 'depth-white',
  chartDropdownSeparator: '#f4f4f4',
  fontColor: '#48515d',
  fontColor2: '#555',
  fontColor3: '#666',
  fontColor4: '#999',
  fontColor5: '#ccc',
  fontColor6: '#fff',
  formsbg: '#f7f7f7',
  inputBorder: '#e2e2e2',
  formsHeaderbg: 'transparent',
  inputBg: '#fff',
  heading: '#262d33',
  tableRowHoverBg: 'rgba(253,247,236,1)',
  miniSymbolsTabActive: 'rgba(253, 242, 216, 0.75)',
  loadingShadeColor: 'rgba(255,255,255,0.3)',
  errorInputBg: '#f7dee0',
  errorInputBorderColor: '#ef4b5a',
  tooltipBg: '#fff',
  counterColor: '#f5bc00',
  bnbBurning: '#e8b342',
  bnbBurnClose: '#aaa',
  buttonPrimaryColor: '#15b5dd',
  xfersLogoBoxBg: '#23448E',
  lineColor: '#f0f0f0',
  sectionBorderRadius: '4px',
  sectionBoxShadow: '-4px 4px 10px 0px rgba(0,0,0,0.1)',
  tradingViewStyle: {
    color: color
  }
});
exports.theme = theme;
var zIndex = {
  negitive: -1,
  zeroIndex: 0,
  normalZIndex: 100,
  inputLabel: 100,
  textContent: 100,
  input: 300,
  inputUnit: 600,
  fixedTableHeader: 700,
  filter: 800,
  fixedTab: 900,
  placeOrder: 900,
  placeOrderWidth: 1e3,
  dropdown: 1e3,
  calendar: 1e3,
  shade: 1e3,
  footer: 1e3,
  tradeOrders: 1e3,
  tradePair: 1e3,
  header: 1100,
  modal: 1100,
  loading: 1100,
  fullScreen: 1100,
  routeLoading: 1200
};
exports.zIndex = zIndex;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bot = require("./components/Bot");

Object.keys(_Bot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Bot[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = require("@iceteachain/web3");

var _default = window.tweb3 = new _web.IceteaWeb3(process.env.REACT_APP_RPC);

exports.default = _default;
