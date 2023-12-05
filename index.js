'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 默认配置文件
 */
var ATTR_LIST = ['class', 'style'];
var SPLIT_SYMBOL = {
    class: ' ',
    style: ';',
};
var systemDarkTheme = "--shadow-color: #040405;\n--active-shadow-color: #040405;\n\n--border-color: #525253;\n--active-border-color: #525253;\n\n--font-color: #eaeaea;\n--active-font-color: #fff;\n\n--bg-color: #262628;\n--active-bg-color: #68a1f9;\n\n--disabled-font-color: #656668;\n--active-disabled-font-color:#656668;\n\n--disabled-bg-color: #262628;\n--active-disabled-bg-color: #262628;\n\n--split-boder-color: #494a4c;\n\n--menu-skeleton-color: #4c4c4f;\n--menu-skeleton-acitve-color: #444;";
var systemLightTheme = "--shadow-color: rgba(0,0,0,.1);\n--active-shadow-color: rgba(0,0,0,.1);\n\n--border-color: #cdcdcd;\n--active-border-color: #cdcdcd;\n\n--font-color: #222;\n--active-font-color: #fff;\n\n--bg-color: #eae8e9;\n--active-bg-color: #68a1f9;\n\n--disabled-font-color: #a8a8a8;\n--active-disabled-font-color:#a8a8a8;\n\n--disabled-bg-color: #eae8e9;\n--active-disabled-bg-color: #eae8e9;\n\n--split-boder-color: #d0cecf;\n\n--menu-skeleton-color: #f5f5f5;\n--menu-skeleton-acitve-color: #fff;\n";

var userAgent = navigator.userAgent;
var isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows';
var isMac = navigator.platform === 'Mac68K' ||
    navigator.platform === 'MacPPC' ||
    navigator.platform === 'Macintosh' ||
    navigator.platform === 'MacIntel';
var isUnix = navigator.platform === 'X11' && !isWin && !isMac;
var isLinux = String(navigator.platform).indexOf('Linux') > -1;
var isWin2000 = userAgent.indexOf('Windows NT 5.0') > -1 ||
    userAgent.indexOf('Windows 2000') > -1;
var isWinXP = userAgent.indexOf('Windows NT 5.1') > -1 ||
    userAgent.indexOf('Windows XP') > -1;
var isWin2003 = userAgent.indexOf('Windows NT 5.2') > -1 ||
    userAgent.indexOf('Windows 2003') > -1;
var isWinVista = userAgent.indexOf('Windows NT 6.0') > -1 ||
    userAgent.indexOf('Windows Vista') > -1;
var isWin7 = userAgent.indexOf('Windows NT 6.1') > -1 ||
    userAgent.indexOf('Windows 7') > -1;
var isWin8 = userAgent.indexOf('Windows NT 8') > -1 || userAgent.indexOf('Windows 8') > -1;
var isWin10 = userAgent.indexOf('Windows NT 10') > -1 ||
    userAgent.indexOf('Windows 10') > -1;
var getOperatSystem = function () {
    var osList = {
        isWin10: isWin10,
        isMac: isMac,
        isWin7: isWin7,
        isWin8: isWin8,
        isWin2003: isWin2003,
        isWin2000: isWin2000,
        isWinXP: isWinXP,
        isWinVista: isWinVista,
        isWin: isWin,
        isUnix: isUnix,
        isLinux: isLinux,
    };
    for (var key in osList) {
        // @ts-ignore
        if (osList[key]) {
            return key;
        }
    }
    // 如果没有对应的主题样式，默认引入mac的样式
    return 'isMac';
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$2 = "/**\n * 基础样式\n */\n.right-menu-list {\n  width: auto;\n  z-index: 9999999;\n  position: fixed;\n  display: block;\n  box-sizing: border-box;\n  user-select: none;\n}\n.right-menu-list li {\n  display: block;\n  list-style: none;\n  cursor: default;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n}\n.right-menu-list li.skeleton::before {\n  content: '.';\n  display: inline-block;\n  width: 100%;\n  border-radius: 3px;\n  background-image: linear-gradient(-45deg, #ccc 40%, #fff 55%, #ccc 63%);\n  background-size: 400% auto;\n  background-repeat: no-repeat;\n  position: relative;\n  color: transparent;\n  animation: skeleton-animation 2s ease infinite;\n}\n.right-menu-list li.skeleton:hover {\n  color: transparent;\n  background-color: transparent;\n}\n.right-menu-list li.menu-hr {\n  height: 0;\n  border-bottom: 1px solid #ccc;\n}\n.right-menu-list li.menu-hr:hover {\n  background-color: transparent !important;\n}\n.right-menu-list li.menu-ul::after {\n  content: '▸';\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 0px;\n}\n@keyframes skeleton-animation {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n";
n(css$2,{});

var css$1 = "/**\n * mac主题色\n */\n.theme-mac {\n  min-width: 180px;\n  max-width: 300px;\n  color: var(--font-color);\n  font-size: 13px;\n  margin: 0;\n  padding: 5px 4px;\n  border: 0.5px solid var(--border-color);\n  border-radius: 5px;\n  background-color: var(--bg-color);\n  box-shadow: 0 2px 12px 0 var(--shadow-color);\n}\n.theme-mac li {\n  padding: 2.5px 26px 2.5px 8px;\n  border-radius: 3px;\n}\n.theme-mac li:hover {\n  color: var(--active-font-color);\n  background-color: var(--active-bg-color);\n}\n.theme-mac li.skeleton {\n  padding: 2.5px 8px;\n}\n.theme-mac li.skeleton::before {\n  background-image: linear-gradient(-45deg, var(--menu-skeleton-color) 40%, var(--menu-skeleton-acitve-color) 55%, var(--menu-skeleton-color) 63%);\n}\n.theme-mac li.menu-hr {\n  border-bottom: 1px solid var(--split-boder-color);\n  padding: 0;\n  margin: 5px 8px;\n}\n.theme-mac li.menu-disabled {\n  color: var(--disabled-font-color);\n}\n.theme-mac li.menu-disabled:hover {\n  color: var(--active-disabled-font-color);\n  background-color: var(--active-disabled-bg-color);\n}\n";
n(css$1,{});

var css = "/**\n * win10主题色\n */\n.theme-win10 {\n  min-width: 260px;\n  max-width: 500px;\n  color: #202124;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 0px;\n  border: 0.5px solid #dadce0;\n  border-radius: 0px;\n  background-color: #fff;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.theme-win10 li {\n  padding: 7px 40px;\n  border-radius: 0px;\n}\n.theme-win10 li:hover {\n  color: #202124;\n  background-color: #e8e8e9;\n}\n.theme-win10 li.menu-hr {\n  border-bottom: 1px solid #dadce0;\n  padding: 0;\n  margin: 5px 0px;\n}\n.theme-win10 li.menu-disabled {\n  color: #ccc;\n}\n.theme-win10 li.menu-disabled:hover {\n  color: #ccc;\n  background-color: #fff;\n}\n.theme-win10 li.menu-ul::after {\n  color: #626365;\n  font-size: 20px;\n  position: absolute;\n  right: 17px;\n}\n";
n(css,{});

var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
var watchSystemThemeChange = function () {
    var rootElement = document.querySelector(':root');
    rootElement &&
        rootElement.setAttribute('style', systemTheme.matches ? systemDarkTheme : systemLightTheme);
};
// 先判断下当前系统的主题
watchSystemThemeChange();
systemTheme.addEventListener('change', watchSystemThemeChange);
var OperatSystem = getOperatSystem();

/**
 * 获取元素在窗口中的几何属性
 * bottom = y + height = top + height
 * right = x + width = left + width
 * @param { HTMLElement | MouseEvent } node 元素
 * @returns { width, height, left, right, top, bottom, x, y }
 */
var computeRectPosition = function (node) { var _a, _b; return ((_b = (_a = node).getBoundingClientRect) === null || _b === void 0 ? void 0 : _b.call(_a)) || node; };

/**
 * 阻止默认事件和冒泡
 * @param { Event } e 事件参数
 * @returns { void }
 */
var preventDefault = function (e) {
    // 阻止冒泡
    window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    // 阻止默认事件
    e.preventDefault
        ? e.preventDefault()
        : (window.event.returnValue = false);
};
var updatePosition = function (el, x, y) {
    el.style.left = x + 'px';
    el.style.top = y + 'px';
};
/**
 * 过滤合法的 dom 属性
 * @param { object } opt 菜单的item
 * @returns { object }
 */
var filterAttrs = function (options, params) {
    var res = {};
    ATTR_LIST.forEach(function (key) {
        // @ts-ignore
        if (options[key]) {
            // @ts-ignore
            res[key] = options[key];
        }
        if (params[key]) {
            // @ts-ignore
            if (res[key]) {
                // @ts-ignore
                res[key] += SPLIT_SYMBOL[key] + params[key];
            }
            else {
                // @ts-ignore
                res[key] = params[key];
            }
        }
    });
    return res;
};
var handleCamelCase = function (arg) {
    return arg.replace(/[A-Z]/g, function (res, index) { return "".concat(index ? '-' : '').concat(res.toLowerCase()); });
};
var handleStyle = function (params) {
    if (typeof params === 'string')
        return params;
    var res = [];
    Object.keys(params).forEach(function (key) {
        if (!params[key])
            return;
        res.push("".concat(handleCamelCase(key), ": ").concat(params[key]));
    });
    return res.join('; ');
};
var layoutMenuPositionEffect = function (base, menu, direction) {
    if (direction === void 0) { direction = 1 /* LayoutMenuDirection.Right */; }
    // 计算位置
    var _a = computeRectPosition(menu), width = _a.width, height = _a.height;
    var _b = computeRectPosition(base), baseX = _b.x, baseY = _b.y, _c = _b.width, baseW = _c === void 0 ? 0 : _c, _d = _b.height, baseH = _d === void 0 ? 0 : _d;
    var currentDirection = direction;
    // 从 base:li 的 parentElement:ul（上一级menu）继承 direction
    if ('parentElement' in base && base.parentElement) {
        currentDirection = menu.direction =
            base.parentElement.direction || currentDirection;
    }
    var layoutToRight = function () {
        var x = baseX + baseW;
        // 尝试向右布局，判断菜单最右端是否超出屏幕右边缘（视窗宽度）
        if (menu.offsetWidth + x > window.innerWidth) {
            x = baseX - width;
            // 右 -> 左
            menu.direction = -1 /* LayoutMenuDirection.Left */;
        }
        return x;
    };
    var layoutToLeft = function () {
        var x = baseX - width;
        // 尝试向左布局，判断菜单最左端是否超出屏幕左边缘（0）
        if (x < 0) {
            x = baseX + baseW;
            // 左 -> 右
            menu.direction = 1 /* LayoutMenuDirection.Right */;
        }
        return x;
    };
    var layoutToTop = function () {
        var y = baseY;
        // 尝试向上布局，判断菜单最顶端是否超出屏幕上边缘（视窗高度）
        if (menu.offsetHeight + y > window.innerHeight) {
            y = baseY + baseH - height;
        }
        return y;
    };
    var x;
    switch (currentDirection) {
        case -1 /* LayoutMenuDirection.Left */:
            x = layoutToLeft();
            break;
        case 1 /* LayoutMenuDirection.Right */:
            x = layoutToRight();
            break;
        default:
            throw new Error("Unsupported direction: ".concat(direction));
    }
    var y = layoutToTop();
    updatePosition(menu, x, y);
};
var getValue = function (val) {
    if (typeof val === 'string') {
        return val;
    }
    else {
        return val + 'px';
    }
};

var version = "1.0.0";

var RightMenu = /** @class */ (function () {
    function RightMenu(el, options) {
        var _this = this;
        this.version = version;
        this.menu = null;
        this.eventList = [];
        this.menuStyle = {
            'min-width': '',
            'max-width': '',
        };
        var config = this.config = typeof el === 'string' ? { el: el } : el;
        // 设置主题
        config.theme = config.theme || OperatSystem.toLowerCase().replace(/is/, '') || 'mac';
        // 如果用户输入的主题名称里包含了 'theme-' 则删除
        if (config.theme.indexOf('theme-') === 0) {
            config.theme = config.theme.slice(6);
        }
        // 设置菜单最大/最小宽度
        if (config.minWidth) {
            this.menuStyle['min-width'] = getValue(config.minWidth);
        }
        if (config.maxWidth) {
            this.menuStyle['max-width'] = getValue(config.maxWidth);
        }
        // 获取dom并绑定事件
        var dom = typeof config.el === 'string' ? document.querySelector(config.el) : config.el;
        dom === null || dom === void 0 ? void 0 : dom.addEventListener('contextmenu', function (e) {
            var res = typeof options === 'function' ? options(e, config) : options;
            _this.init(e, res);
        });
    }
    /**
     * 组件初始化
     * @param e 鼠标事件参数
     * @param thenable 菜单列表
     * @returns { Promise<void> }
     */
    RightMenu.prototype.init = function (e, thenable) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var flag, countClick, options;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // 触发生命周期
                        (_a = this.config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
                        // 开始就要阻止本身的默认事件
                        preventDefault(e);
                        // 先移除之前的菜单
                        this.destroyMenu();
                        // 创建菜单骨架
                        this.initSkeleton(e);
                        flag = false;
                        countClick = function () { return (flag = true); };
                        document.addEventListener('mousedown', countClick);
                        return [4 /*yield*/, Promise.resolve(thenable)
                            // 清除异步前创建的事件
                        ];
                    case 1:
                        options = _c.sent();
                        // 清除异步前创建的事件
                        document.removeEventListener('mousedown', countClick);
                        // // 如果异步前有点击次数, 则打断逻辑, 不创建菜单
                        if (flag)
                            return [2 /*return*/];
                        // 再次移除骨架屏
                        this.destroyMenu();
                        // 开始创建菜单栏
                        this.menu = this.renderMenu(options);
                        // 渲染菜单栏
                        this.initMenu(e, this.menu);
                        // 触发生命周期
                        (_b = this.config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 初始化菜单栏
     * @param { Event } e 事件参数
     * @param menu { HTMLElement } 菜单标签
     * @returns { void }
     */
    RightMenu.prototype.initMenu = function (e, menu) {
        var _this = this;
        // 添加到页面上
        document.body.appendChild(menu);
        // 计算一级菜单栏的位置
        layoutMenuPositionEffect(e, menu, 1 /* LayoutMenuDirection.Right */);
        // 防止菜单组件里点出系统菜单
        menu.addEventListener('contextmenu', preventDefault);
        // 窗口 blur 时销毁菜单栏
        this.addEvent(window, 'blur', this.destroyMenu.bind(this));
        // 窗口 resize 时销毁菜单栏
        this.addEvent(window, 'resize', this.destroyMenu.bind(this));
        // 页面点击时销毁菜单栏
        this.addEvent(document, 'mousedown', function (e) {
            var _a;
            // @ts-ignore
            var hasMenu = (_a = e['path']) === null || _a === void 0 ? void 0 : _a.some(function (node) { return node === menu; });
            if (!hasMenu)
                _this.destroyMenu();
        });
    };
    /**
     * 创建菜单骨架
     * @param e 鼠标点击事件
     */
    RightMenu.prototype.initSkeleton = function (e) {
        var _this = this;
        // 创建 dom 元素
        var children = new Array(3).fill(null).map(function () {
            return _this.createDom('li', { class: 'skeleton' });
        });
        var skeleton = this.createDom('ul', {
            class: "right-menu-list theme-".concat(this.config.theme),
            style: this.menuStyle,
        }, children);
        // 初始化菜单骨架
        this.initMenu(e, skeleton);
    };
    /**
     * 销毁菜单栏/骨架屏
     * @returns { void }
     */
    RightMenu.prototype.destroyMenu = function () {
        var menuList = document.querySelectorAll('.right-menu-list');
        // 清除所有菜单栏, 有多少清多少
        menuList && menuList.forEach(function (item) {
            var _a;
            (_a = item.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(item);
        });
        // 移除所有事件
        this.removeEvent();
        this.menu = null;
    };
    /**
     * 添加事件
     * @param { Window | Document } target 目标事件源
     * @param { string } eventName 事件名称
     * @param { Function } callback 事件回调
     * @returns { void }
     */
    RightMenu.prototype.addEvent = function (target, eventName, callback) {
        target.addEventListener(eventName, callback);
        this.eventList.push([target, eventName, callback]);
    };
    /**
     * 移除所有事件
     * @returns { void }
     */
    RightMenu.prototype.removeEvent = function () {
        while (this.eventList.length) {
            var _a = this.eventList.shift(), target = _a[0], eventName = _a[1], callback = _a[2];
            target.removeEventListener(eventName, callback);
        }
    };
    /**
     * 渲染菜单栏
     * @param { object[] } options
     * @returns { HTMLElement }
     */
    RightMenu.prototype.renderMenu = function (options) {
        var _this = this;
        var children = options.map(function (item) {
            switch (item.type) {
                case 'hr':
                    return _this.createHr(item);
                case 'li':
                    return _this.createLi(item);
                case 'ul':
                    return _this.createUl(item);
                default:
                    throw new Error('未知的 type 类型 => ' + item['type']);
            }
        });
        return this.createDom('ul', {
            class: "right-menu-list theme-".concat(this.config.theme),
            style: this.menuStyle,
        }, children);
    };
    /**
     * 渲染dom
     * @param { String } [ tagName = 'ul' ] 元素名称
     * @param { Object } [ attrs = {} ] 元素属性对象
     * @param { Array } [ children = [] ] 子元素集合
     * @returns { HTMLElement }
     */
    RightMenu.prototype.createDom = function (tagName, attrs, children) {
        if (tagName === void 0) { tagName = 'ul'; }
        if (attrs === void 0) { attrs = {}; }
        if (children === void 0) { children = []; }
        var dom = document.createElement(tagName);
        Object.keys(attrs).forEach(function (key) {
            var value = attrs[key];
            if (!value)
                return;
            var res = '';
            switch (key) {
                case 'style':
                    res = handleStyle(value);
                    break;
                // [TODO:] 这里很奇怪, 按理说 key=class 的时候只剩 string 类型了
                case 'class':
                    res = value;
                    break;
            }
            dom.setAttribute(key, res);
        });
        // append所有子元素
        // [TODO:]bug here  innerHTML 会清除之前 append 的所有 child
        children.forEach(function (child) {
            if (typeof child === 'string') {
                dom.innerHTML += child;
            }
            else if (child.nodeType === 1) {
                dom.appendChild(child);
            }
        });
        return dom;
    };
    RightMenu.prototype.createHr = function (opt) {
        var attrs = { class: 'menu-hr' };
        return this.createDom('li', filterAttrs(opt, attrs));
    };
    RightMenu.prototype.createLi = function (opt) {
        var _this = this;
        var span = this.createDom('span', {}, [String(opt.text)]);
        var attrs = {
            class: [
                opt.disabled ? 'menu-disabled' : '',
                opt.type === 'ul' ? 'menu-ul' : '',
            ].join(' '),
        };
        var li = this.createDom('li', filterAttrs(opt, attrs), [span]);
        if (!opt.disabled && opt.type === 'li' && opt.callback) {
            li.addEventListener('mousedown', function (e) {
                opt.callback(e);
                _this.destroyMenu();
            });
        }
        return li;
    };
    RightMenu.prototype.createUl = function (opt) {
        var li = this.createLi(opt);
        // 添加二级菜单
        if (opt.children && opt.children.length) {
            var ul_1 = this.renderMenu(opt.children);
            li.addEventListener('mouseenter', function (e) {
                li.appendChild(ul_1);
                layoutMenuPositionEffect(li, ul_1);
            });
            li.addEventListener('mouseleave', function (e) {
                // @ts-ignore
                if (!e['toElement'])
                    return;
                // @ts-ignore
                var curr = e['toElement'];
                while (curr) {
                    // 如果路径里存在 ul 标签, 就不需要销毁
                    if (curr === ul_1)
                        return;
                    curr = curr.parentNode;
                }
                li.removeChild(ul_1);
            });
        }
        return li;
    };
    return RightMenu;
}());

module.exports = RightMenu;
