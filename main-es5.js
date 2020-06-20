function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/bar/bar.component.html":
  /*!******************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/bar/bar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsBarBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-bar-layer\">\n  <div *ngIf=\"ganttRef.draggable\" class=\"drag-handles\">\n    <ng-container>\n      <span class=\"handle\"></span>\n      <span class=\"handle\"></span>\n    </ng-container>\n  </div>\n  <div *ngIf=\"ganttRef.linkable\" class=\"link-handles\">\n    <span class=\"handle\"><span class=\"point\"></span></span>\n    <span class=\"handle\"> <span class=\"point\"></span></span>\n  </div>\n</div>\n<div class=\"gantt-bar-border\"></div>\n<div #content class=\"gantt-bar-content\" (click)=\"onBarClick($event)\">\n  <ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ item: item.origin, refs: item.refs }\"></ng-template>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/calendar/calendar.component.html":
  /*!****************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/calendar/calendar.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsCalendarCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-calendar-today-overlay\">\n  <svg [attr.width]=\"view.width\" height=\"1\">\n    <g>\n      <polygon class=\"today-line-angle\" />\n      <line class=\"today-line\"></line>\n    </g>\n  </svg>\n</div>\n<svg [attr.width]=\"view.width\" [attr.height]=\"'100%'\">\n  <g>\n    <text class=\"primary-text\" *ngFor=\"let point of view.primaryDatePoints; trackBy: trackBy\" [attr.x]=\"point.x\" [attr.y]=\"point.y\">\n      {{ point.text }}\n    </text>\n    <text\n      *ngFor=\"let point of view.secondaryDatePoints; trackBy: trackBy\"\n      class=\"secondary-text\"\n      [class.secondary-text-weekend]=\"point.additions?.isWeekend\"\n      [attr.x]=\"point.x\"\n      [attr.y]=\"point.y\"\n    >\n      {{ point.text }}\n    </text>\n    <g>\n      <line\n        *ngFor=\"let point of view.primaryDatePoints; let i = index; trackBy: trackBy\"\n        [attr.x1]=\"(i + 1) * view.primaryWidth\"\n        [attr.x2]=\"(i + 1) * view.primaryWidth\"\n        [attr.y1]=\"0\"\n        [attr.y2]=\"60\"\n        class=\"primary-line\"\n      ></line>\n    </g>\n\n    <g>\n      <line [attr.x1]=\"0\" [attr.x2]=\"view.width\" [attr.y1]=\"headerHeight\" [attr.y2]=\"headerHeight\" class=\"header-line\"></line>\n    </g>\n  </g>\n  <g>\n    <g *ngIf=\"view.showTimeline\">\n      <line\n        *ngFor=\"let point of view.secondaryDatePoints; let i = index; trackBy: trackBy\"\n        [attr.x1]=\"(i + 1) * view.cellWidth\"\n        [attr.x2]=\"(i + 1) * view.cellWidth\"\n        [attr.y1]=\"0\"\n        [attr.y2]=\"'100%'\"\n        class=\"secondary-line\"\n      ></line>\n      <line\n        *ngFor=\"let point of view.primaryDatePoints; let i = index; trackBy: trackBy\"\n        [attr.x1]=\"(i + 1) * view.primaryWidth\"\n        [attr.x2]=\"(i + 1) * view.primaryWidth\"\n        [attr.y1]=\"0\"\n        [attr.y2]=\"'100%'\"\n        class=\"primary-line\"\n      ></line>\n    </g>\n    <g *ngIf=\"view.showWeekBackdrop\">\n      <g *ngFor=\"let point of view.secondaryDatePoints; let i = index; trackBy: trackBy\">\n        <rect\n          *ngIf=\"point.additions?.isWeekend\"\n          [attr.x]=\"i * view.cellWidth\"\n          [attr.y]=\"0\"\n          [attr.width]=\"view.cellWidth\"\n          [attr.height]=\"'100%'\"\n          class=\"secondary-backdrop\"\n        ></rect>\n      </g>\n    </g>\n  </g>\n</svg>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsDragBackdropDragBackdropComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-drag-mask\">\n  <div class=\"date-range\">\n    <span class=\"start\"></span>\n    <span class=\"end\"></span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/links/links.component.html":
  /*!**********************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/links/links.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsLinksLinksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg [attr.width]=\"gantt.view.width\" height=\"1\">\n  <ng-container *ngFor=\"let link of links; let i = index; trackBy: trackBy\">\n    <path [attr.d]=\"link.path\" fill=\"transparent\" stroke-width=\"2\" [attr.stroke]=\"link.color\" pointer-events=\"none\"></path>\n    <g>\n      <path\n        class=\"link-line\"\n        (click)=\"onLineClick($event, link)\"\n        (mouseenter)=\"mouseEnterPath(link)\"\n        (mouseleave)=\"mouseLeavePath(link)\"\n        [attr.d]=\"link.path\"\n        stroke=\"transparent\"\n        stroke-width=\"9\"\n        fill=\"none\"\n        cursor=\"pointer\"\n      ></path>\n    </g>\n  </ng-container>\n  <line class=\"link-dragging-line\"></line>\n</svg>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/main/gantt-main.component.html":
  /*!**************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/main/gantt-main.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsMainGanttMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<gantt-links-overlay [groups]=\"groups\" [items]=\"items\" *ngIf=\"ganttRef.linkable\" (lineClick)=\"lineClick.emit($event)\"></gantt-links-overlay>\n<!-- groups -->\n<div class=\"gantt-main-groups\" *ngIf=\"groups && groups.length > 0; else itemsTemplate\" [style.width.px]=\"ganttRef.view.width\">\n  <ng-container *ngFor=\"let group of groups; trackBy: trackBy\">\n    <div class=\"gantt-group\"></div>\n    <div *ngIf=\"group.expand\" class=\"gantt-items\">\n      <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: group.items }\"></ng-template>\n    </div>\n  </ng-container>\n</div>\n<!-- items -->\n<ng-template #itemsTemplate>\n  <div class=\"gantt-main-items\" [style.width.px]=\"ganttRef.view.width\">\n    <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: items }\"></ng-template>\n  </div>\n</ng-template>\n\n<ng-template #ganttItems let-items=\"items\">\n  <ng-container *ngFor=\"let item of items; trackBy: trackBy\">\n    <div class=\"gantt-item\" [style.height.px]=\"ganttRef.styles.lineHeight\">\n      <gantt-bar [item]=\"item\" [template]=\"barTemplate\" (barClick)=\"barClick.emit($event)\"></gantt-bar>\n    </div>\n    <ng-container *ngFor=\"let item of item.children; trackBy: trackBy\">\n      <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: item.children }\"></ng-template>\n    </ng-container>\n  </ng-container>\n</ng-template>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/table/gantt-table.component.html":
  /*!****************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/table/gantt-table.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcComponentsTableGanttTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-side-container\">\n  <div class=\"gantt-table-header gantt-table-row\">\n    <div class=\"header-column gantt-table-column\" *ngFor=\"let column of columnList\" [style.width.px]=\"column.width\">\n      <ng-container *ngIf=\"column.headerTemplateRef; else default\" [ngTemplateOutlet]=\"column.headerTemplateRef\"></ng-container>\n      <ng-template #default>\n        {{ column.name }}\n      </ng-template>\n    </div>\n  </div>\n\n  <div class=\"gantt-table-body\">\n    <ng-container *ngIf=\"groups && groups.length > 0; else itemsTemplate\">\n      <ng-container *ngFor=\"let group of groups\">\n        <div class=\"gantt-table-group\">\n          <div class=\"gantt-table-group-title\" [class.expand]=\"group.expand\" (click)=\"expandGroup(group)\">\n            <gantt-icon class=\"expand-icon\" [iconName]=\"group.expand ? 'angle-down' : 'angle-right'\"></gantt-icon>\n            <ng-container *ngIf=\"groupTemplate; else default\">\n              <ng-template\n                [ngTemplateOutlet]=\"groupTemplate\"\n                [ngTemplateOutletContext]=\"{ $implicit: group.origin, group: group.origin }\"\n              ></ng-template>\n            </ng-container>\n            <ng-template #default>\n              <span class=\"group-title\">{{ group.title }}</span>\n            </ng-template>\n          </div>\n        </div>\n\n        <ng-container *ngIf=\"group.expand\">\n          <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: group.items }\"></ng-template>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #itemsTemplate>\n  <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: items }\"></ng-template>\n</ng-template>\n\n<ng-template #ganttItems let-items=\"items\">\n  <ng-container *ngFor=\"let item of items\">\n    <div class=\"gantt-table-item gantt-table-row\" [style.height.px]=\"ganttRef.styles.lineHeight\" [style.lineHeight.px]=\"ganttRef.styles.lineHeight\">\n      <div class=\"item-column gantt-table-column\" *ngFor=\"let column of columnList\" [style.width.px]=\"column.width\">\n        <ng-template\n          [ngTemplateOutlet]=\"column.templateRef\"\n          [ngTemplateOutletContext]=\"{ $implicit: item.origin, item: item.origin }\"\n        ></ng-template>\n      </div>\n    </div>\n\n    <ng-container *ngFor=\"let item of item.children\">\n      <ng-template [ngTemplateOutlet]=\"ganttItems\" [ngTemplateOutletContext]=\"{ items: item.children }\"></ng-template>\n    </ng-container>\n  </ng-container>\n</ng-template>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/flat/gantt-flat.component.html":
  /*!***************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/flat/gantt-flat.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcFlatGanttFlatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-side gantt-side-has-shadow\" [style.width.px]=\"300\">\n  <div class=\"gantt-side-container\">\n    <div class=\"gantt-flat-side-header\">\n      {{ sideTitle }}\n    </div>\n    <div class=\"gantt-flat-side-body\">\n      <div\n        class=\"gantt-flat-side-group\"\n        *ngFor=\"let group of groups; trackBy: trackBy\"\n        [style.height.px]=\"(group.mergedItems.length) * styles.lineHeight\"\n      >\n        <ng-template [ngTemplateOutlet]=\"groupTemplate\" [ngTemplateOutletContext]=\"{ group: group.origin }\"></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gantt-container\">\n  <gantt-calendar-overlay></gantt-calendar-overlay>\n  <gantt-drag-backdrop></gantt-drag-backdrop>\n  <div class=\"gantt-main\">\n    <div class=\"gantt-main-container\">\n      <!-- groups -->\n      <div class=\"gantt-main-groups\" *ngIf=\"groups && groups.length > 0\" [style.width.px]=\"view.width\">\n        <ng-container *ngFor=\"let group of groups; trackBy: trackBy\">\n          <div class=\"gantt-flat-group\">\n            <ng-container *ngFor=\"let items of group.mergedItems\">\n              <div class=\"gantt-flat-items\" [style.height.px]=\"styles.lineHeight\">\n                <ng-container *ngFor=\"let item of items; trackBy: trackBy\">\n                  <gantt-bar [item]=\"item\" [template]=\"barTemplate\" (barClick)=\"barClick.emit($event)\"></gantt-bar>\n                </ng-container>\n              </div>\n            </ng-container>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/gantt.component.html":
  /*!*****************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/gantt.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesGanttSrcGanttComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gantt-side gantt-side-has-shadow\" [style.width.px]=\"sideTableWidth\">\n  <gantt-table\n    [groups]=\"groups\"\n    [items]=\"items\"\n    [columns]=\"columns\"\n    [groupTemplate]=\"groupTemplate\"\n  ></gantt-table>\n</div>\n<div class=\"gantt-container\">\n  <gantt-calendar-overlay></gantt-calendar-overlay>\n  <gantt-drag-backdrop></gantt-drag-backdrop>\n  <gantt-main\n    [groups]=\"groups\"\n    [items]=\"items\"\n    [barTemplate]=\"barTemplate\"\n    (barClick)=\"barClick.emit($event)\"\n    (lineClick)=\"lineClick.emit($event)\"\n  >\n  </gantt-main>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!***************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<dg-navbar></dg-navbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html":
  /*!*****************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplesExamplesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">视图：</span>\n    <span class=\"header-section-content\">\n      <input id=\"day\" type=\"radio\" value=\"day\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"day\">日</label>\n      <input id=\"month\" type=\"radio\" value=\"month\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"month\">月</label>\n      <input id=\"quarter\" type=\"radio\" value=\"quarter\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"quarter\">季度</label>\n    </span>\n  </div>\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">是否可拖拽：</span>\n    <span class=\"header-section-content\">\n      <input type=\"checkbox\" [(ngModel)]=\"options.draggable\" />\n    </span>\n  </div>\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">是否可关联：</span>\n    <span class=\"header-section-content\">\n      <input type=\"checkbox\" [(ngModel)]=\"options.linkable\" />\n    </span>\n  </div>\n</div>\n<div class=\"content\">\n  <ngx-gantt\n    start=\"1514736000\"\n    end=\"1609430400\"\n    [items]=\"items\"\n    [groups]=\"groups\"\n    [viewType]=\"options.viewType\"\n    [draggable]=\"options.draggable\"\n    [linkable]=\"options.linkable\"\n    (barClick)=\"barClick($event)\"\n    (lineClick)=\"lineClick($event)\"\n    (dragEnded)=\"dragEnded($event)\"\n    (linkDragEnded)=\"linkDragEnded($event)\"\n    (loadOnScroll)=\"loadOnScroll($event)\"\n  >\n    <ngx-gantt-table>\n      <ngx-gantt-column name=\"标题\">\n        <ng-template #cell let-item=\"item\">\n          {{ item.title }}\n        </ng-template>\n      </ngx-gantt-column>\n      <ngx-gantt-column>\n        <ng-template #header> 开始时间 -> </ng-template>\n        <ng-template #cell let-item=\"item\">\n          {{ item.start * 1000 | date: 'yyyy-MM-dd' }}\n        </ng-template>\n      </ngx-gantt-column>\n      <ngx-gantt-column name=\"截止时间\">\n        <ng-template #cell let-item=\"item\">\n          {{ item.end * 1000 | date: 'yyyy-MM-dd' }}\n        </ng-template>\n      </ngx-gantt-column>\n    </ngx-gantt-table>\n  </ngx-gantt>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/flat/flat.component.html":
  /*!*********************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/flat/flat.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFlatFlatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">视图：</span>\n    <span class=\"header-section-content\">\n      <input id=\"day\" type=\"radio\" value=\"day\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"day\">日</label>\n      <input id=\"month\" type=\"radio\" value=\"month\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"month\">月</label>\n      <input id=\"quarter\" type=\"radio\" value=\"quarter\" name=\"view-type\" [(ngModel)]=\"options.viewType\" /> <label for=\"quarter\">季度</label>\n    </span>\n  </div>\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">是否可拖拽：</span>\n    <span class=\"header-section-content\">\n      <input type=\"checkbox\" [(ngModel)]=\"options.draggable\" />\n    </span>\n  </div>\n  <div class=\"header-section\">\n    <span class=\"header-section-title\">合并间隔天数：</span>\n    <span class=\"header-section-content\">\n      <input type=\"number\" [style.width.px]=\"50\" [(ngModel)]=\"options.mergeIntervalDays\" />\n    </span>\n  </div>\n</div>\n<div class=\"content\">\n  <ngx-gantt-flat\n    [sideTitle]=\"'项目'\"\n    [start]=\"1514736000\"\n    [end]=\"1609430400\"\n    [items]=\"items\"\n    [groups]=\"groups\"\n    [viewType]=\"options.viewType\"\n    [draggable]=\"options.draggable\"\n    [mergeIntervalDays]=\"options.mergeIntervalDays\"\n    [styles]=\"options.styles\"\n  >\n    <ng-template #group let-group=\"group\">\n      {{ group.title }}\n    </ng-template>\n  </ngx-gantt-flat>\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/tslib/tslib.es6.js":
  /*!******************************************!*\
    !*** ../node_modules/tslib/tslib.es6.js ***!
    \******************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
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

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "../packages/gantt/src/class/date-point.ts":
  /*!*************************************************!*\
    !*** ../packages/gantt/src/class/date-point.ts ***!
    \*************************************************/

  /*! exports provided: GanttDatePoint */

  /***/
  function packagesGanttSrcClassDatePointTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDatePoint", function () {
      return GanttDatePoint;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var GanttDatePoint = function GanttDatePoint(start, text, x, y, additions) {
      _classCallCheck(this, GanttDatePoint);

      this.start = start;
      this.text = text;
      this.x = x;
      this.y = y;
      this.additions = additions;
    };
    /***/

  },

  /***/
  "../packages/gantt/src/class/event.ts":
  /*!********************************************!*\
    !*** ../packages/gantt/src/class/event.ts ***!
    \********************************************/

  /*! exports provided: GanttDragEvent, GanttLinkDragEvent, GanttLoadOnScrollEvent, GanttLineClickEvent, GanttBarClickEvent */

  /***/
  function packagesGanttSrcClassEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDragEvent", function () {
      return GanttDragEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttLinkDragEvent", function () {
      return GanttLinkDragEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttLoadOnScrollEvent", function () {
      return GanttLoadOnScrollEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttLineClickEvent", function () {
      return GanttLineClickEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttBarClickEvent", function () {
      return GanttBarClickEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var GanttDragEvent = function GanttDragEvent() {
      _classCallCheck(this, GanttDragEvent);
    };

    var GanttLinkDragEvent = function GanttLinkDragEvent() {
      _classCallCheck(this, GanttLinkDragEvent);
    };

    var GanttLoadOnScrollEvent = function GanttLoadOnScrollEvent() {
      _classCallCheck(this, GanttLoadOnScrollEvent);
    };

    var GanttLineClickEvent = function GanttLineClickEvent() {
      _classCallCheck(this, GanttLineClickEvent);
    };

    var GanttBarClickEvent = function GanttBarClickEvent() {
      _classCallCheck(this, GanttBarClickEvent);
    };
    /***/

  },

  /***/
  "../packages/gantt/src/class/group.ts":
  /*!********************************************!*\
    !*** ../packages/gantt/src/class/group.ts ***!
    \********************************************/

  /*! exports provided: GanttGroupInternal */

  /***/
  function packagesGanttSrcClassGroupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttGroupInternal", function () {
      return GanttGroupInternal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var GanttGroupInternal = function GanttGroupInternal(group) {
      _classCallCheck(this, GanttGroupInternal);

      this.expand = true;
      this.refs = {};
      this.id = group.id;
      this.origin = group;
      this.title = group.title;
      this.items = [];
      this.mergedItems = [[]];
    };
    /***/

  },

  /***/
  "../packages/gantt/src/class/index.ts":
  /*!********************************************!*\
    !*** ../packages/gantt/src/class/index.ts ***!
    \********************************************/

  /*! exports provided: GanttDatePoint, GanttDragEvent, GanttLinkDragEvent, GanttLoadOnScrollEvent, GanttLineClickEvent, GanttBarClickEvent, GanttItemInternal, GanttGroupInternal, GanttViewType */

  /***/
  function packagesGanttSrcClassIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _date_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date-point */
    "../packages/gantt/src/class/date-point.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttDatePoint", function () {
      return _date_point__WEBPACK_IMPORTED_MODULE_1__["GanttDatePoint"];
    });
    /* harmony import */


    var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./event */
    "../packages/gantt/src/class/event.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttDragEvent", function () {
      return _event__WEBPACK_IMPORTED_MODULE_2__["GanttDragEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLinkDragEvent", function () {
      return _event__WEBPACK_IMPORTED_MODULE_2__["GanttLinkDragEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLoadOnScrollEvent", function () {
      return _event__WEBPACK_IMPORTED_MODULE_2__["GanttLoadOnScrollEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLineClickEvent", function () {
      return _event__WEBPACK_IMPORTED_MODULE_2__["GanttLineClickEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttBarClickEvent", function () {
      return _event__WEBPACK_IMPORTED_MODULE_2__["GanttBarClickEvent"];
    });
    /* harmony import */


    var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item */
    "../packages/gantt/src/class/item.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttItemInternal", function () {
      return _item__WEBPACK_IMPORTED_MODULE_3__["GanttItemInternal"];
    });
    /* harmony import */


    var _group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./group */
    "../packages/gantt/src/class/group.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttGroupInternal", function () {
      return _group__WEBPACK_IMPORTED_MODULE_4__["GanttGroupInternal"];
    });
    /* harmony import */


    var _view_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-type */
    "../packages/gantt/src/class/view-type.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttViewType", function () {
      return _view_type__WEBPACK_IMPORTED_MODULE_5__["GanttViewType"];
    });
    /***/

  },

  /***/
  "../packages/gantt/src/class/item.ts":
  /*!*******************************************!*\
    !*** ../packages/gantt/src/class/item.ts ***!
    \*******************************************/

  /*! exports provided: GanttItemInternal */

  /***/
  function packagesGanttSrcClassItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttItemInternal", function () {
      return GanttItemInternal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");

    var GanttItemInternal = /*#__PURE__*/function () {
      function GanttItemInternal(item) {
        _classCallCheck(this, GanttItemInternal);

        this.refs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.origin = item;
        this.id = this.origin.id;
        this.links = this.origin.links || [];
        this.color = this.origin.color;
        this.start = item.start ? new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"](item.start) : null;
        this.end = item.end ? new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"](item.end) : null;
        this.children = (item.children || []).map(function (subItem) {
          return new GanttItemInternal(subItem);
        }); // fill one month when start or end is null

        if (item.start && !item.end) {
          this.end = new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"](item.start).addMonths(1).endOfDay();
        }

        if (!item.start && item.end) {
          this.start = new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"](item.end).addMonths(-1).startOfDay();
        }
      }

      _createClass(GanttItemInternal, [{
        key: "updateRefs",
        value: function updateRefs(refs) {
          this.refs$.next(refs);
        }
      }, {
        key: "updateDate",
        value: function updateDate(start, end) {
          this.start = start.startOfDay();
          this.end = end.endOfDay();
          this.origin.start = this.start.getUnixTime();
          this.origin.end = this.end.getUnixTime();
        }
      }, {
        key: "addLink",
        value: function addLink(linkId) {
          this.links = [].concat(_toConsumableArray(this.links), [linkId]);
          this.origin.links = this.links;
        }
      }, {
        key: "refs",
        get: function get() {
          return this.refs$.getValue();
        }
      }]);

      return GanttItemInternal;
    }();
    /***/

  },

  /***/
  "../packages/gantt/src/class/view-type.ts":
  /*!************************************************!*\
    !*** ../packages/gantt/src/class/view-type.ts ***!
    \************************************************/

  /*! exports provided: GanttViewType */

  /***/
  function packagesGanttSrcClassViewTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttViewType", function () {
      return GanttViewType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var GanttViewType;

    (function (GanttViewType) {
      GanttViewType["day"] = "day";
      GanttViewType["quarter"] = "quarter";
      GanttViewType["month"] = "month";
      GanttViewType["year"] = "year";
    })(GanttViewType || (GanttViewType = {}));
    /***/

  },

  /***/
  "../packages/gantt/src/components/bar/bar-drag.ts":
  /*!********************************************************!*\
    !*** ../packages/gantt/src/components/bar/bar-drag.ts ***!
    \********************************************************/

  /*! exports provided: GanttBarDrag */

  /***/
  function packagesGanttSrcComponentsBarBarDragTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttBarDrag", function () {
      return GanttBarDrag;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _gantt_dom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../gantt-dom.service */
    "../packages/gantt/src/gantt-dom.service.ts");
    /* harmony import */


    var _gantt_drag_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../gantt-drag-container */
    "../packages/gantt/src/gantt-drag-container.ts");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");

    var dragMinWidth = 10;
    var activeClass = 'gantt-bar-active';
    var linkDropClass = 'gantt-bar-link-drop';

    function createSvgElement(qualifiedName, className) {
      var element = document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);
      element.classList.add(className);
      return element;
    }

    var GanttBarDrag = /*#__PURE__*/function () {
      function GanttBarDrag(dragDrop, dom, dragContainer) {
        _classCallCheck(this, GanttBarDrag);

        this.dragDrop = dragDrop;
        this.dom = dom;
        this.dragContainer = dragContainer;
        this.dragRefs = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(GanttBarDrag, [{
        key: "createMouseEvents",
        value: function createMouseEvents() {
          var _this = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.barElement, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (_this.dragContainer.linkDraggingId && _this.dragContainer.linkDraggingId !== _this.item.id) {
              _this.barElement.classList.add(linkDropClass);

              _this.dragContainer.emitLinkDragEntered(_this.item);
            } else {
              _this.barElement.classList.add(activeClass);
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.barElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (!_this.dragContainer.linkDraggingId) {
              _this.barElement.classList.remove(activeClass);
            } else {
              _this.dragContainer.emitLinkDragLeaved();
            }

            _this.barElement.classList.remove(linkDropClass);
          });
        }
      }, {
        key: "createBarDrag",
        value: function createBarDrag() {
          var _this2 = this;

          var dragRef = this.dragDrop.createDrag(this.barElement);
          dragRef.lockAxis = 'x';
          dragRef.started.subscribe(function () {
            _this2.setDraggingStyles();

            _this2.dragContainer.dragStarted.emit({
              item: _this2.item.origin
            });
          });
          dragRef.moved.subscribe(function (event) {
            var x = _this2.item.refs.x + event.distance.x;
            var days = Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["differenceInCalendarDays"])(_this2.item.end.value, _this2.item.start.value);

            var start = _this2.ganttRef.view.getDateByXPoint(x);

            var end = start.addDays(days);

            _this2.openDragBackdrop(_this2.barElement, _this2.ganttRef.view.getDateByXPoint(x), end);
          });
          dragRef.ended.subscribe(function (event) {
            var days = Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["differenceInCalendarDays"])(_this2.item.end.value, _this2.item.start.value);

            var start = _this2.ganttRef.view.getDateByXPoint(_this2.item.refs.x + event.distance.x);

            var end = start.addDays(days);

            _this2.item.updateDate(start, end);

            _this2.clearDraggingStyles();

            _this2.closeDragBackdrop();

            event.source.reset();

            _this2.dragContainer.dragEnded.emit({
              item: _this2.item.origin
            });
          });
          this.barDragRef = dragRef;
          return dragRef;
        }
      }, {
        key: "createBarHandleDrags",
        value: function createBarHandleDrags() {
          var _this3 = this;

          var dragRefs = [];
          var handles = this.barElement.querySelectorAll('.drag-handles .handle');
          handles.forEach(function (handle, index) {
            var isBefore = index === 0;

            var dragRef = _this3.dragDrop.createDrag(handle);

            dragRef.lockAxis = 'x';
            dragRef.withBoundaryElement(_this3.dom.root);
            dragRef.started.subscribe(function () {
              _this3.setDraggingStyles();

              _this3.dragContainer.dragStarted.emit({
                item: _this3.item.origin
              });
            });
            dragRef.moved.subscribe(function (event) {
              if (isBefore) {
                var x = _this3.item.refs.x + event.distance.x;
                var width = _this3.item.refs.width + event.distance.x * -1;

                if (width > dragMinWidth) {
                  _this3.barElement.style.width = width + 'px';
                  _this3.barElement.style.left = x + 'px';

                  _this3.openDragBackdrop(_this3.barElement, _this3.ganttRef.view.getDateByXPoint(x), _this3.ganttRef.view.getDateByXPoint(x + width));
                }
              } else {
                var _width = _this3.item.refs.width + event.distance.x;

                if (_width > dragMinWidth) {
                  _this3.barElement.style.width = _width + 'px';

                  _this3.openDragBackdrop(_this3.barElement, _this3.ganttRef.view.getDateByXPoint(_this3.item.refs.x), _this3.ganttRef.view.getDateByXPoint(_this3.item.refs.x + _width));
                }
              }

              event.source.reset();
            });
            dragRef.ended.subscribe(function (event) {
              if (isBefore) {
                var width = _this3.item.refs.width + event.distance.x * -1;

                if (width > dragMinWidth) {
                  _this3.item.updateDate(_this3.ganttRef.view.getDateByXPoint(_this3.item.refs.x + event.distance.x), _this3.item.end);
                } else {
                  _this3.item.updateDate(_this3.item.end.startOfDay(), _this3.item.end);
                }
              } else {
                var _width2 = _this3.item.refs.width + event.distance.x;

                if (_width2 > dragMinWidth) {
                  _this3.item.updateDate(_this3.item.start, _this3.ganttRef.view.getDateByXPoint(_this3.item.refs.x + _this3.item.refs.width + event.distance.x));
                } else {
                  _this3.item.updateDate(_this3.item.start, _this3.item.start.endOfDay());
                }
              }

              _this3.clearDraggingStyles();

              _this3.closeDragBackdrop();

              _this3.dragContainer.dragEnded.emit({
                item: _this3.item.origin
              });
            });
            dragRefs.push(dragRef);
          });
          return dragRefs;
        }
      }, {
        key: "createLinkHandleDrags",
        value: function createLinkHandleDrags() {
          var _this4 = this;

          var dragRefs = [];
          var handles = this.barElement.querySelectorAll('.link-handles .handle');
          handles.forEach(function (handle, index) {
            var isBefore = index === 0;

            var dragRef = _this4.dragDrop.createDrag(handle);

            dragRef.withBoundaryElement(_this4.dom.root);
            dragRef.beforeStarted.subscribe(function () {
              handle.style.pointerEvents = 'none';

              if (_this4.barDragRef) {
                _this4.barDragRef.disabled = true;
              }

              _this4.createLinkDraggingLine();

              _this4.dragContainer.emitLinkDragStarted(isBefore ? 'target' : 'source', _this4.item);
            });
            dragRef.moved.subscribe(function () {
              var positions = _this4.calcLinkLinePositions(handle, isBefore);

              _this4.linkDraggingLine.setAttribute('x1', positions.x1.toString());

              _this4.linkDraggingLine.setAttribute('y1', positions.y1.toString());

              _this4.linkDraggingLine.setAttribute('x2', positions.x2.toString());

              _this4.linkDraggingLine.setAttribute('y2', positions.y2.toString());
            });
            dragRef.ended.subscribe(function (event) {
              event.source.reset();
              handle.style.pointerEvents = '';

              if (_this4.barDragRef) {
                _this4.barDragRef.disabled = false;
              }

              _this4.barElement.classList.remove(activeClass);

              _this4.destroyLinkDraggingLine();

              _this4.dragContainer.emitLinkDragEnded();
            });
            dragRefs.push(dragRef);
          });
          return dragRefs;
        }
      }, {
        key: "openDragBackdrop",
        value: function openDragBackdrop(dragElement, start, end) {
          var dragMaskElement = this.dom.root.querySelector('.gantt-drag-mask');
          var dragBackdropElement = this.dom.root.querySelector('.gantt-drag-backdrop');
          var rootRect = this.dom.root.getBoundingClientRect();
          var dragRect = dragElement.getBoundingClientRect();
          var left = dragRect.left - rootRect.left - this.dom.side.clientWidth;
          var width = dragRect.right - dragRect.left;
          dragMaskElement.style.left = left + 'px';
          dragMaskElement.style.width = width + 'px';
          dragMaskElement.querySelector('.start').innerHTML = start.format('MM-dd');
          dragMaskElement.querySelector('.end').innerHTML = end.format('MM-dd');
          dragMaskElement.style.display = 'block';
          dragBackdropElement.style.display = 'block';
        }
      }, {
        key: "closeDragBackdrop",
        value: function closeDragBackdrop() {
          var dragMaskElement = this.dom.root.querySelector('.gantt-drag-mask');
          var dragBackdropElement = this.dom.root.querySelector('.gantt-drag-backdrop');
          dragMaskElement.style.display = 'none';
          dragBackdropElement.style.display = 'none';
        }
      }, {
        key: "setDraggingStyles",
        value: function setDraggingStyles() {
          this.barElement.style.pointerEvents = 'none';
          this.barElement.classList.add('gantt-bar-draggable-drag');
        }
      }, {
        key: "clearDraggingStyles",
        value: function clearDraggingStyles() {
          this.barElement.style.pointerEvents = '';
          this.barElement.classList.remove('gantt-bar-draggable-drag');
        }
      }, {
        key: "calcLinkLinePositions",
        value: function calcLinkLinePositions(target, isBefore) {
          var rootRect = this.dom.root.getBoundingClientRect();
          var targetRect = target.getBoundingClientRect();
          var layerRect = target.parentElement.parentElement.getBoundingClientRect();
          return {
            x1: layerRect.left + (isBefore ? 0 : layerRect.width) - rootRect.left,
            y1: layerRect.top + layerRect.height / 2 - rootRect.top,
            x2: targetRect.left - rootRect.left + targetRect.width / 2,
            y2: targetRect.top - rootRect.top + targetRect.height / 2
          };
        }
      }, {
        key: "createLinkDraggingLine",
        value: function createLinkDraggingLine() {
          if (!this.linkDraggingLine) {
            var svgElement = createSvgElement('svg', 'gantt-link-drag-container');
            var linElement = createSvgElement('line', 'link-dragging-line');
            svgElement.appendChild(linElement);
            this.dom.root.appendChild(svgElement);
            this.linkDraggingLine = linElement;
          }
        }
      }, {
        key: "destroyLinkDraggingLine",
        value: function destroyLinkDraggingLine() {
          if (this.linkDraggingLine) {
            this.linkDraggingLine.parentElement.remove();
            this.linkDraggingLine = null;
          }
        }
      }, {
        key: "createDrags",
        value: function createDrags(elementRef, item, ganttRef) {
          this.item = item;
          this.barElement = elementRef.nativeElement;
          this.ganttRef = ganttRef;

          if (this.dragDisabled && this.linkDragDisabled) {
            return;
          } else {
            this.createMouseEvents();

            if (!this.dragDisabled) {
              var _this$dragRefs;

              var dragRef = this.createBarDrag();
              var dragHandlesRefs = this.createBarHandleDrags();

              (_this$dragRefs = this.dragRefs).push.apply(_this$dragRefs, [dragRef].concat(_toConsumableArray(dragHandlesRefs)));
            }

            if (!this.linkDragDisabled) {
              var _this$dragRefs2;

              var linkDragRefs = this.createLinkHandleDrags();

              (_this$dragRefs2 = this.dragRefs).push.apply(_this$dragRefs2, _toConsumableArray(linkDragRefs));
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.closeDragBackdrop();
          this.dragRefs.forEach(function (dragRef) {
            return dragRef.dispose();
          });
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "dragDisabled",
        get: function get() {
          return !this.ganttRef.draggable;
        }
      }, {
        key: "linkDragDisabled",
        get: function get() {
          return !this.ganttRef.linkable;
        }
      }]);

      return GanttBarDrag;
    }();

    GanttBarDrag.ctorParameters = function () {
      return [{
        type: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDrop"]
      }, {
        type: _gantt_dom_service__WEBPACK_IMPORTED_MODULE_3__["GanttDomService"]
      }, {
        type: _gantt_drag_container__WEBPACK_IMPORTED_MODULE_4__["GanttDragContainer"]
      }];
    };

    GanttBarDrag = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GanttBarDrag);
    /***/
  },

  /***/
  "../packages/gantt/src/components/bar/bar.component.ts":
  /*!*************************************************************!*\
    !*** ../packages/gantt/src/components/bar/bar.component.ts ***!
    \*************************************************************/

  /*! exports provided: GanttBarComponent */

  /***/
  function packagesGanttSrcComponentsBarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttBarComponent", function () {
      return GanttBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _bar_drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bar-drag */
    "../packages/gantt/src/components/bar/bar-drag.ts");
    /* harmony import */


    var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../utils/helpers */
    "../packages/gantt/src/utils/helpers.ts");
    /* harmony import */


    var _gantt_drag_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../gantt-drag-container */
    "../packages/gantt/src/gantt-drag-container.ts");
    /* harmony import */


    var _gantt_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../gantt.styles */
    "../packages/gantt/src/gantt.styles.ts");

    function linearGradient(sideOrCorner, color, stop) {
      return "linear-gradient(".concat(sideOrCorner, ",").concat(color, " 0%,").concat(stop, " 40%)");
    }

    var GanttBarComponent = /*#__PURE__*/function () {
      function GanttBarComponent(elementRef, ngZone, dragContainer, drag, ganttRef) {
        _classCallCheck(this, GanttBarComponent);

        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.dragContainer = dragContainer;
        this.drag = drag;
        this.ganttRef = ganttRef;
        this.barClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ganttItemClass = true;
        this.firstChange = true;
        this.color = 'red';
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(GanttBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.firstChange = false;
          this.item.refs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this5.setPositions();
          });
          this.dragContainer.dragEnded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this5.setContentBackground();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.drag.createDrags(this.elementRef, this.item, this.ganttRef);
          this.setContentBackground();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.firstChange) {
            this.setPositions();
          }
        }
      }, {
        key: "onBarClick",
        value: function onBarClick(event) {
          this.barClick.emit({
            event: event,
            item: this.item.origin
          });
        }
      }, {
        key: "setPositions",
        value: function setPositions() {
          var barElement = this.elementRef.nativeElement;
          barElement.style.left = this.item.refs.x + 'px';
          barElement.style.top = this.item.refs.y + 'px';
          barElement.style.width = this.item.refs.width + 'px';
          barElement.style.height = this.ganttRef.styles.barHeight + 'px';
        }
      }, {
        key: "setContentBackground",
        value: function setContentBackground() {
          var contentElement = this.contentElementRef.nativeElement;
          var color = this.item.color || _gantt_styles__WEBPACK_IMPORTED_MODULE_8__["barBackground"];

          if (this.item.origin.start && this.item.origin.end) {
            contentElement.style.background = color;
            contentElement.style.borderRadius = '';
          }

          if (this.item.origin.start && !this.item.origin.end) {
            contentElement.style.background = linearGradient('to left', Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgb"])(color, 0.55), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgb"])(color, 1));
            contentElement.style.borderRadius = '4px 12.5px 12.5px 4px';
          }

          if (!this.item.origin.start && this.item.origin.end) {
            contentElement.style.background = linearGradient('to right', Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgb"])(color, 0.55), Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["hexToRgb"])(color, 1));
            contentElement.style.borderRadius = '12.5px 4px 4px 12.5px';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return GanttBarComponent;
    }();

    GanttBarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _gantt_drag_container__WEBPACK_IMPORTED_MODULE_7__["GanttDragContainer"]
      }, {
        type: _bar_drag__WEBPACK_IMPORTED_MODULE_5__["GanttBarDrag"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttBarComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttBarComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttBarComponent.prototype, "barClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], GanttBarComponent.prototype, "contentElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-bar')], GanttBarComponent.prototype, "ganttItemClass", void 0);
    GanttBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bar.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/bar/bar.component.html"))["default"],
      providers: [_bar_drag__WEBPACK_IMPORTED_MODULE_5__["GanttBarDrag"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]))], GanttBarComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/calendar/calendar.component.ts":
  /*!***********************************************************************!*\
    !*** ../packages/gantt/src/components/calendar/calendar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: GanttCalendarComponent */

  /***/
  function packagesGanttSrcComponentsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttCalendarComponent", function () {
      return GanttCalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");
    /* harmony import */


    var _gantt_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../gantt.styles */
    "../packages/gantt/src/gantt.styles.ts");
    /* harmony import */


    var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../utils/helpers */
    "../packages/gantt/src/utils/helpers.ts");
    /* harmony import */


    var _gantt_dom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../gantt-dom.service */
    "../packages/gantt/src/gantt-dom.service.ts");

    var GanttCalendarComponent = /*#__PURE__*/function () {
      function GanttCalendarComponent(ganttRef, cdr, ngZone, dom, elementRef) {
        _classCallCheck(this, GanttCalendarComponent);

        this.ganttRef = ganttRef;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.dom = dom;
        this.elementRef = elementRef;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.headerHeight = _gantt_styles__WEBPACK_IMPORTED_MODULE_5__["headerHeight"];
        this.className = true;
      }

      _createClass(GanttCalendarComponent, [{
        key: "setTodayPoint",
        value: function setTodayPoint() {
          var x = this.view.getTodayXPoint();
          var angle = this.elementRef.nativeElement.getElementsByClassName('today-line-angle')[0];
          var line = this.elementRef.nativeElement.getElementsByClassName('today-line')[0];

          if (angle && line && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(x)) {
            angle.setAttribute('points', ["".concat(x - 6, ",").concat(_gantt_styles__WEBPACK_IMPORTED_MODULE_5__["headerHeight"]), "".concat(x + 5, ",").concat(_gantt_styles__WEBPACK_IMPORTED_MODULE_5__["headerHeight"]), "".concat(x, ",").concat(_gantt_styles__WEBPACK_IMPORTED_MODULE_5__["headerHeight"] + 5)].join(' '));
            line.setAttribute('x1', x.toString());
            line.setAttribute('x2', x.toString());
            line.setAttribute('y1', _gantt_styles__WEBPACK_IMPORTED_MODULE_5__["headerHeight"].toString());
            line.setAttribute('y2', this.dom.root.clientHeight.toString());
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this6.ganttRef.view.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this6.unsubscribe$)).subscribe(function () {
              _this6.setTodayPoint();
            });
          });
          this.dom.getResize().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this6.setTodayPoint();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }, {
        key: "trackBy",
        value: function trackBy(point, index) {
          return point.text || index;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "view",
        get: function get() {
          return this.ganttRef.view;
        }
      }]);

      return GanttCalendarComponent;
    }();

    GanttCalendarComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_gantt_ref__WEBPACK_IMPORTED_MODULE_4__["GANTT_REF_TOKEN"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _gantt_dom_service__WEBPACK_IMPORTED_MODULE_7__["GanttDomService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-calendar-overlay')], GanttCalendarComponent.prototype, "className", void 0);
    GanttCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-calendar-overlay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/calendar/calendar.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gantt_ref__WEBPACK_IMPORTED_MODULE_4__["GANTT_REF_TOKEN"]))], GanttCalendarComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.ts":
  /*!*********************************************************************************!*\
    !*** ../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: GanttDragBackdropComponent */

  /***/
  function packagesGanttSrcComponentsDragBackdropDragBackdropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDragBackdropComponent", function () {
      return GanttDragBackdropComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var GanttDragBackdropComponent = /*#__PURE__*/function () {
      function GanttDragBackdropComponent() {
        _classCallCheck(this, GanttDragBackdropComponent);

        this.backdropClass = true;
      }

      _createClass(GanttDragBackdropComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GanttDragBackdropComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-drag-backdrop')], GanttDragBackdropComponent.prototype, "backdropClass", void 0);
    GanttDragBackdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-drag-backdrop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drag-backdrop.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.html"))["default"]
    })], GanttDragBackdropComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/icon/icon.component.ts":
  /*!***************************************************************!*\
    !*** ../packages/gantt/src/components/icon/icon.component.ts ***!
    \***************************************************************/

  /*! exports provided: GanttIconComponent */

  /***/
  function packagesGanttSrcComponentsIconIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttIconComponent", function () {
      return GanttIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icons */
    "../packages/gantt/src/components/icon/icons.ts");

    var GanttIconComponent = /*#__PURE__*/function () {
      function GanttIconComponent(elementRef) {
        _classCallCheck(this, GanttIconComponent);

        this.elementRef = elementRef;
        this.isIcon = true;
      }

      _createClass(GanttIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "setSvg",
        value: function setSvg(name) {
          var iconSvg = _icons__WEBPACK_IMPORTED_MODULE_2__["icons"][name];

          if (iconSvg) {
            this.elementRef.nativeElement.innerHTML = iconSvg;
          } else {
            this.elementRef.nativeElement.innerHTML = '';
          }
        }
      }, {
        key: "iconName",
        set: function set(name) {
          this.setSvg(name);
        }
      }]);

      return GanttIconComponent;
    }();

    GanttIconComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-icon')], GanttIconComponent.prototype, "isIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttIconComponent.prototype, "iconName", null);
    GanttIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-icon',
      template: ''
    })], GanttIconComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/icon/icons.ts":
  /*!******************************************************!*\
    !*** ../packages/gantt/src/components/icon/icons.ts ***!
    \******************************************************/

  /*! exports provided: icons */

  /***/
  function packagesGanttSrcComponentsIconIconsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "icons", function () {
      return icons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var angleRight = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fit=\"\"  preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><g id=\"amnavigation/angle-right\" stroke-width=\"1\" fill-rule=\"evenodd\"><path d=\"M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z\"   transform=\"rotate(-90 7.978 8.252)\"></path></g></svg>";
    var angleDown = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fit=\"\"  preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><g id=\"aknavigation/angle-down\" stroke-width=\"1\" fill-rule=\"evenodd\"><path d=\"M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z\" ></path></g></svg>";
    var plusSquare = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fit=\"\"   preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><g id=\"kxaction/plus-square\" stroke-width=\"1\" fill-rule=\"evenodd\"><path d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8H2zm5.45 6.2V4.75h1.2V7.4h2.65v1.2H8.65v2.65h-1.2V8.6H4.8V7.4h2.65z\"></path></g></svg>";
    var minusSquare = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><g id=\"jnaction/minus-square\" stroke-width=\"1\" fill-rule=\"evenodd\"><path d=\"M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1.2a.8.8 0 0 0-.8.8v12a.8.8 0 0 0 .8.8h12a.8.8 0 0 0 .8-.8V2a.8.8 0 0 0-.8-.8H2zm2.8 6.2h6.5v1.2H4.8V7.4z\"></path></g></svg>";
    var icons = {
      'angle-right': angleRight,
      'angle-down': angleDown,
      'plus-square': plusSquare,
      'minus-square': minusSquare
    };
    /***/
  },

  /***/
  "../packages/gantt/src/components/links/links.component.ts":
  /*!*****************************************************************!*\
    !*** ../packages/gantt/src/components/links/links.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GanttLinksComponent */

  /***/
  function packagesGanttSrcComponentsLinksLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttLinksComponent", function () {
      return GanttLinksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");
    /* harmony import */


    var _gantt_drag_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../gantt-drag-container */
    "../packages/gantt/src/gantt-drag-container.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");

    var LinkColors;

    (function (LinkColors) {
      LinkColors["default"] = "#cacaca";
      LinkColors["blocked"] = "#FF7575";
      LinkColors["active"] = "#348FE4";
    })(LinkColors || (LinkColors = {}));

    var GanttLinksComponent = /*#__PURE__*/function () {
      function GanttLinksComponent(gantt, cdr, elementRef, ganttDragContainer) {
        _classCallCheck(this, GanttLinksComponent);

        this.gantt = gantt;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.ganttDragContainer = ganttDragContainer;
        this.groups = [];
        this.items = [];
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.links = [];
        this.linkItems = [];
        this.bezierWeight = -0.5;
        this.firstChange = true;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.ganttLinksOverlay = true;
      }

      _createClass(GanttLinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.buildLinks();
          this.firstChange = false;
          this.ganttDragContainer.dragStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this7.elementRef.nativeElement.style.visibility = 'hidden';
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.ganttDragContainer.dragEnded, this.ganttDragContainer.linkDragEnded, this.gantt.view.start$, this.gantt.groupExpand$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1)).subscribe(function () {
            _this7.elementRef.nativeElement.style.visibility = 'visible';

            _this7.buildLinks();

            _this7.cdr.detectChanges();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (!this.firstChange) {
            this.buildLinks();
          }
        }
      }, {
        key: "computeItemPosition",
        value: function computeItemPosition() {
          var _this8 = this;

          var lineHeight = this.gantt.styles.lineHeight;
          var barHeight = this.gantt.styles.barHeight;
          this.linkItems = [];

          if (this.groups.length > 0) {
            var itemNum = 0;
            var groupNum = 0;
            this.groups.forEach(function (group) {
              groupNum++;

              if (group.expand) {
                group.items.forEach(function (item, itemIndex) {
                  var y = (groupNum + itemNum + itemIndex) * lineHeight + item.refs.y + barHeight / 2;

                  _this8.linkItems.push(Object.assign({}, item, {
                    before: {
                      x: item.refs.x,
                      y: y
                    },
                    after: {
                      x: item.refs.x + item.refs.width,
                      y: y
                    }
                  }));
                });
                itemNum += group.items.length;
              }
            });
          } else {
            this.items.forEach(function (item, itemIndex) {
              var y = itemIndex * lineHeight + item.refs.y + barHeight / 2;

              _this8.linkItems.push(Object.assign({}, item, {
                before: {
                  x: item.refs.x,
                  y: y
                },
                after: {
                  x: item.refs.x + item.refs.width,
                  y: y
                }
              }));
            });
          }
        }
      }, {
        key: "generatePath",
        value: function generatePath(source, target) {
          if (source.before && source.after && target.before && target.after) {
            var x1 = source.after.x;
            var y1 = source.after.y;
            var x4 = target.before.x;
            var y4 = target.before.y;
            var dx = Math.abs(x4 - x1) * this.bezierWeight;
            var x2 = x1 - dx;
            var x3 = x4 + dx;
            return "M ".concat(x1, " ").concat(y1, " C ").concat(x2, " ").concat(y1, " ").concat(x3, " ").concat(y4, " ").concat(x4, " ").concat(y4);
          }
        }
      }, {
        key: "buildLinks",
        value: function buildLinks() {
          var _this9 = this;

          console.log(1);
          this.computeItemPosition();
          this.links = [];
          this.linkItems.forEach(function (source) {
            source.links.forEach(function (linkId) {
              var target = _this9.linkItems.find(function (item) {
                return item.id === linkId;
              });

              if (target) {
                _this9.links.push({
                  path: _this9.generatePath(source, target),
                  source: source.origin,
                  target: target.origin,
                  color: source.origin.end > target.origin.start ? LinkColors.blocked : LinkColors["default"]
                });
              }
            });
          });
        }
      }, {
        key: "trackBy",
        value: function trackBy(index) {
          return index;
        }
      }, {
        key: "onLineClick",
        value: function onLineClick(event, link) {
          this.lineClick.emit({
            event: event,
            source: link.source,
            target: link.target
          });
        }
      }, {
        key: "mouseEnterPath",
        value: function mouseEnterPath(link) {
          if (link.color === LinkColors["default"]) {
            link.color = LinkColors.active;
          }
        }
      }, {
        key: "mouseLeavePath",
        value: function mouseLeavePath(link) {
          if (link.color === LinkColors.active) {
            link.color = LinkColors["default"];
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return GanttLinksComponent;
    }();

    GanttLinksComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _gantt_drag_container__WEBPACK_IMPORTED_MODULE_3__["GanttDragContainer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttLinksComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttLinksComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttLinksComponent.prototype, "lineClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-links-overlay')], GanttLinksComponent.prototype, "ganttLinksOverlay", void 0);
    GanttLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-links-overlay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./links.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/links/links.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]))], GanttLinksComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/main/gantt-main.component.ts":
  /*!*********************************************************************!*\
    !*** ../packages/gantt/src/components/main/gantt-main.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GanttMainComponent */

  /***/
  function packagesGanttSrcComponentsMainGanttMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttMainComponent", function () {
      return GanttMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");

    var GanttMainComponent = /*#__PURE__*/function () {
      function GanttMainComponent(ganttRef) {
        _classCallCheck(this, GanttMainComponent);

        this.ganttRef = ganttRef;
        this.barClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ganttMainClass = true;
      }

      _createClass(GanttMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "trackBy",
        value: function trackBy(item, index) {
          return item.id || index;
        }
      }]);

      return GanttMainComponent;
    }();

    GanttMainComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttMainComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttMainComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttMainComponent.prototype, "barTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttMainComponent.prototype, "barClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttMainComponent.prototype, "lineClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-main-container')], GanttMainComponent.prototype, "ganttMainClass", void 0);
    GanttMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gantt-main.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/main/gantt-main.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]))], GanttMainComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/components/table/gantt-table.component.ts":
  /*!***********************************************************************!*\
    !*** ../packages/gantt/src/components/table/gantt-table.component.ts ***!
    \***********************************************************************/

  /*! exports provided: GanttTableComponent */

  /***/
  function packagesGanttSrcComponentsTableGanttTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttTableComponent", function () {
      return GanttTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");

    var GanttTableComponent = /*#__PURE__*/function () {
      function GanttTableComponent(ganttRef, elementRef) {
        _classCallCheck(this, GanttTableComponent);

        this.ganttRef = ganttRef;
        this.elementRef = elementRef;
        this.ganttTableClass = true;
      }

      _createClass(GanttTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "expandGroup",
        value: function expandGroup(group) {
          group.expand = !group.expand;
          this.ganttRef.groupExpand$.next();
          this.ganttRef.detectChanges();
        }
      }, {
        key: "columns",
        set: function set(columns) {
          this.columnList = columns;
        }
      }]);

      return GanttTableComponent;
    }();

    GanttTableComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttTableComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttTableComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttTableComponent.prototype, "columns", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttTableComponent.prototype, "groupTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-table')], GanttTableComponent.prototype, "ganttTableClass", void 0);
    GanttTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'gantt-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gantt-table.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/components/table/gantt-table.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"]))], GanttTableComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/flat/gantt-flat.component.ts":
  /*!**********************************************************!*\
    !*** ../packages/gantt/src/flat/gantt-flat.component.ts ***!
    \**********************************************************/

  /*! exports provided: NgxGanttFlatComponent */

  /***/
  function packagesGanttSrcFlatGanttFlatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttFlatComponent", function () {
      return NgxGanttFlatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");
    /* harmony import */


    var _gantt_upper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../gantt-upper */
    "../packages/gantt/src/gantt-upper.ts");
    /* harmony import */


    var _gantt_dom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../gantt-dom.service */
    "../packages/gantt/src/gantt-dom.service.ts");
    /* harmony import */


    var _gantt_drag_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../gantt-drag-container */
    "../packages/gantt/src/gantt-drag-container.ts");

    var NgxGanttFlatComponent_1;

    var NgxGanttFlatComponent = NgxGanttFlatComponent_1 = /*#__PURE__*/function (_gantt_upper__WEBPACK) {
      _inherits(NgxGanttFlatComponent, _gantt_upper__WEBPACK);

      var _super = _createSuper(NgxGanttFlatComponent);

      function NgxGanttFlatComponent(elementRef, cdr, ngZone, dom, dragContainer) {
        var _this10;

        _classCallCheck(this, NgxGanttFlatComponent);

        _this10 = _super.call(this, elementRef, cdr, ngZone, dom, dragContainer);
        _this10.mergeIntervalDays = 0;
        _this10.ganttFlatClass = true;
        return _this10;
      }

      _createClass(NgxGanttFlatComponent, [{
        key: "buildGroupMergedItems",
        value: function buildGroupMergedItems(group) {
          var _this11 = this;

          var mergedItems = [];
          var groupItems = group.items.filter(function (item) {
            return item.start && item.end;
          }).sort(function (a, b) {
            return a.start.getUnixTime() - b.start.getUnixTime();
          });
          groupItems.forEach(function (item) {
            var indexOfMergedItems = -1;

            for (var i = 0; i < mergedItems.length; i++) {
              var subItems = mergedItems[i];

              if (item.start.value > subItems[subItems.length - 1].end.addDays(_this11.mergeIntervalDays).value) {
                subItems.push(item);
                indexOfMergedItems = i;
                break;
              }
            } // 如果没有合适的位置插入，则插入到最后一行


            if (indexOfMergedItems === -1) {
              mergedItems.push([item]);
              indexOfMergedItems = mergedItems.length - 1;
            }
          });
          return mergedItems;
        }
      }, {
        key: "computeItemRef",
        value: function computeItemRef(item) {
          item.updateRefs({
            width: item.start && item.end ? this.view.getDateRangeWidth(item.start.startOfDay(), item.end.endOfDay()) : 0,
            x: item.start ? this.view.getXPointByDate(item.start) : 0,
            y: (this.styles.lineHeight - this.styles.barHeight) / 2 - 1
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(NgxGanttFlatComponent.prototype), "onInit", this).call(this);
        }
      }, {
        key: "computeRefs",
        value: function computeRefs() {
          var _this12 = this;

          this.groups.forEach(function (group) {
            group.items.forEach(function (item) {
              _this12.computeItemRef(item);
            });
            group.mergedItems = _this12.buildGroupMergedItems(group); // 如果没有数据，默认填充一行空行

            group.mergedItems = group.mergedItems.length === 0 ? [[]] : group.mergedItems;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(NgxGanttFlatComponent.prototype), "onChanges", this).call(this, changes);

          if (!this.firstChange && changes.mergeIntervalDays) {
            this.computeRefs();
            this.cdr.detectChanges();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(NgxGanttFlatComponent.prototype), "onDestroy", this).call(this);
        }
      }]);

      return NgxGanttFlatComponent;
    }(_gantt_upper__WEBPACK_IMPORTED_MODULE_3__["GanttUpper"]);

    NgxGanttFlatComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _gantt_dom_service__WEBPACK_IMPORTED_MODULE_4__["GanttDomService"]
      }, {
        type: _gantt_drag_container__WEBPACK_IMPORTED_MODULE_5__["GanttDragContainer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGanttFlatComponent.prototype, "mergeIntervalDays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGanttFlatComponent.prototype, "sideTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-flat')], NgxGanttFlatComponent.prototype, "ganttFlatClass", void 0);
    NgxGanttFlatComponent = NgxGanttFlatComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-gantt-flat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gantt-flat.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/flat/gantt-flat.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: _gantt_ref__WEBPACK_IMPORTED_MODULE_2__["GANTT_REF_TOKEN"],
        useExisting: NgxGanttFlatComponent_1
      }, _gantt_dom_service__WEBPACK_IMPORTED_MODULE_4__["GanttDomService"], _gantt_drag_container__WEBPACK_IMPORTED_MODULE_5__["GanttDragContainer"]]
    })], NgxGanttFlatComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt-dom.service.ts":
  /*!**************************************************!*\
    !*** ../packages/gantt/src/gantt-dom.service.ts ***!
    \**************************************************/

  /*! exports provided: ScrollDirection, GanttDomService */

  /***/
  function packagesGanttSrcGanttDomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDirection", function () {
      return ScrollDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDomService", function () {
      return GanttDomService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils/helpers */
    "../packages/gantt/src/utils/helpers.ts");

    var scrollThreshold = 50;
    var ScrollDirection;

    (function (ScrollDirection) {
      ScrollDirection[ScrollDirection["NONE"] = 0] = "NONE";
      ScrollDirection[ScrollDirection["LEFT"] = 1] = "LEFT";
      ScrollDirection[ScrollDirection["RIGHT"] = 2] = "RIGHT";
    })(ScrollDirection || (ScrollDirection = {}));

    var GanttDomService = /*#__PURE__*/function () {
      function GanttDomService() {
        _classCallCheck(this, GanttDomService);

        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(GanttDomService, [{
        key: "monitorScrollChange",
        value: function monitorScrollChange() {
          var _this13 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.mainContainer, 'scroll'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.sideContainer, 'scroll')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {
            _this13.syncScroll(event);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.mainContainer, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {// if (this.mainContainer.scrollLeft > 0) {
            //     this.side.classList.add('gantt-side-has-shadow');
            // } else {
            //     this.side.classList.remove('gantt-side-has-shadow');
            // }
          });
        }
      }, {
        key: "syncScroll",
        value: function syncScroll(event) {
          var target = event.currentTarget;
          this.calendarOverlay.scrollLeft = this.mainContainer.scrollLeft;
          this.sideContainer.scrollTop = target.scrollTop;
          this.mainContainer.scrollTop = target.scrollTop;
        }
      }, {
        key: "disableBrowserWheelEvent",
        value: function disableBrowserWheelEvent() {
          var container = this.mainContainer;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {
            var delta = event.deltaX;

            if (!delta) {
              return;
            }

            if (container.scrollLeft + container.offsetWidth === container.scrollWidth && delta > 0 || container.scrollLeft === 0 && delta < 0) {
              event.preventDefault();
            }
          });
        }
      }, {
        key: "initialize",
        value: function initialize(root) {
          this.root = root.nativeElement;
          this.side = this.root.getElementsByClassName('gantt-side')[0];
          this.container = this.root.getElementsByClassName('gantt-container')[0];
          this.sideContainer = this.root.getElementsByClassName('gantt-side-container')[0];
          this.mainContainer = this.root.getElementsByClassName('gantt-main-container')[0];
          this.calendarOverlay = this.root.getElementsByClassName('gantt-calendar-overlay')[0];
          this.monitorScrollChange();
          this.disableBrowserWheelEvent();
        }
      }, {
        key: "getViewerScroll",
        value: function getViewerScroll() {
          var _this14 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.mainContainer, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this14.mainContainer.scrollLeft;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                previous = _ref2[0],
                current = _ref2[1];

            var event = {
              target: _this14.mainContainer,
              direction: ScrollDirection.NONE
            };

            if (current - previous < 0) {
              if (_this14.mainContainer.scrollLeft < scrollThreshold && _this14.mainContainer.scrollLeft > 0) {
                event.direction = ScrollDirection.LEFT;
              }
            }

            if (current - previous > 0) {
              if (_this14.mainContainer.scrollWidth - _this14.mainContainer.clientWidth - _this14.mainContainer.scrollLeft < scrollThreshold) {
                event.direction = ScrollDirection.RIGHT;
              }
            }

            return event;
          }));
        }
      }, {
        key: "getResize",
        value: function getResize() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(150));
        }
      }, {
        key: "scrollMainContainer",
        value: function scrollMainContainer(left) {
          if (Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(left)) {
            var scrollLeft = left - this.mainContainer.clientWidth / 2;
            this.mainContainer.scrollLeft = scrollLeft > scrollThreshold ? scrollLeft : 0;
            this.calendarOverlay.scrollLeft = this.mainContainer.scrollLeft;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }]);

      return GanttDomService;
    }();

    GanttDomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GanttDomService);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt-drag-container.ts":
  /*!*****************************************************!*\
    !*** ../packages/gantt/src/gantt-drag-container.ts ***!
    \*****************************************************/

  /*! exports provided: GanttDragContainer */

  /***/
  function packagesGanttSrcGanttDragContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDragContainer", function () {
      return GanttDragContainer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var GanttDragContainer = /*#__PURE__*/function () {
      function GanttDragContainer() {
        _classCallCheck(this, GanttDragContainer);

        this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.linkDragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.linkDragEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.linkDragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GanttDragContainer, [{
        key: "emitLinkDragStarted",
        value: function emitLinkDragStarted(from, item) {
          this.linkDraggingId = item.id;
          this.linkDragFrom = from;
          this.linkDragSource = this.linkDragFrom === 'source' ? item : null;
          this.linkDragTarget = this.linkDragFrom === 'target' ? item : null;
          this.linkDragStarted.emit({
            source: this.linkDragSource && this.linkDragSource.origin,
            target: this.linkDragTarget && this.linkDragTarget.origin
          });
        }
      }, {
        key: "emitLinkDragEntered",
        value: function emitLinkDragEntered(item) {
          if (this.linkDragFrom === 'source') {
            this.linkDragTarget = item;
          } else {
            this.linkDragSource = item;
          }

          this.linkDragEntered.emit({
            source: this.linkDragSource.origin,
            target: this.linkDragTarget.origin
          });
        }
      }, {
        key: "emitLinkDragLeaved",
        value: function emitLinkDragLeaved() {
          if (this.linkDragFrom === 'source') {
            this.linkDragTarget = null;
          } else {
            this.linkDragSource = null;
          }
        }
      }, {
        key: "emitLinkDragEnded",
        value: function emitLinkDragEnded() {
          this.linkDraggingId = null;

          if (this.linkDragSource && this.linkDragTarget) {
            this.linkDragSource.addLink(this.linkDragTarget.id);
            this.linkDragEnded.emit({
              source: this.linkDragSource.origin,
              target: this.linkDragTarget.origin
            });
          }

          this.linkDragSource = null;
          this.linkDragTarget = null;
        }
      }]);

      return GanttDragContainer;
    }();

    GanttDragContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GanttDragContainer);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt-ref.ts":
  /*!******************************************!*\
    !*** ../packages/gantt/src/gantt-ref.ts ***!
    \******************************************/

  /*! exports provided: GANTT_REF_TOKEN */

  /***/
  function packagesGanttSrcGanttRefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GANTT_REF_TOKEN", function () {
      return GANTT_REF_TOKEN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var GANTT_REF_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('GANTT_REF_TOKEN');
    /***/
  },

  /***/
  "../packages/gantt/src/gantt-upper.ts":
  /*!********************************************!*\
    !*** ../packages/gantt/src/gantt-upper.ts ***!
    \********************************************/

  /*! exports provided: GanttUpper */

  /***/
  function packagesGanttSrcGanttUpperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttUpper", function () {
      return GanttUpper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./class */
    "../packages/gantt/src/class/index.ts");
    /* harmony import */


    var _views_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/factory */
    "../packages/gantt/src/views/factory.ts");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var _gantt_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gantt.styles */
    "../packages/gantt/src/gantt.styles.ts");
    /* harmony import */


    var _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gantt-dom.service */
    "../packages/gantt/src/gantt-dom.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/calendar/calendar.component */
    "../packages/gantt/src/components/calendar/calendar.component.ts");
    /* harmony import */


    var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./utils/helpers */
    "../packages/gantt/src/utils/helpers.ts");

    var GanttUpper = /*#__PURE__*/function () {
      function GanttUpper(elementRef, cdr, ngZone, dom, dragContainer) {
        _classCallCheck(this, GanttUpper);

        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.dom = dom;
        this.dragContainer = dragContainer;
        this.originItems = [];
        this.originGroups = [];
        this.viewType = _class__WEBPACK_IMPORTED_MODULE_2__["GanttViewType"].month;
        this.loadOnScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.barClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.items = [];
        this.groups = [];
        this.firstChange = true;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.ganttClass = true;
      }

      _createClass(GanttUpper, [{
        key: "onInit",
        value: function onInit() {
          var _this15 = this;

          this.styles = Object.assign({}, _gantt_styles__WEBPACK_IMPORTED_MODULE_5__["defaultStyles"], this.styles);
          this.createView();
          this.setupGroups();
          this.setupItems();
          this.computeRefs();
          this.firstChange = false;
          this.onStable().subscribe(function () {
            _this15.dom.initialize(_this15.elementRef);

            _this15.setupViewScroll();

            _this15.scrollToToday(); // 优化初始化时Scroll滚动体验问题，通过透明度解决，默认透明度为0，滚动结束后恢复


            _this15.element.style.opacity = '1';
          });
          this.view.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
            _this15.computeRefs();
          });
          this.dragContainer.dragStarted.subscribe(function (event) {
            _this15.dragStarted.emit(event);
          });
          this.dragContainer.dragEnded.subscribe(function (event) {
            _this15.dragEnded.emit(event);

            _this15.computeRefs();

            _this15.cdr.detectChanges();
          });
        }
      }, {
        key: "onChanges",
        value: function onChanges(changes) {
          var _this16 = this;

          if (!this.firstChange) {
            if (changes.viewType && changes.viewType.currentValue) {
              this.createView();
              this.computeRefs();
              this.calendar.setTodayPoint();
              this.onStable().subscribe(function () {
                _this16.scrollToToday();
              });
            }

            if (changes.originItems || changes.originGroups) {
              this.setupGroups();
              this.setupItems();
              this.computeRefs();
            }
          }
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "trackBy",
        value: function trackBy(item, index) {
          return item.id || index;
        }
      }, {
        key: "createView",
        value: function createView() {
          var viewDate = this.getViewDate();
          this.view = Object(_views_factory__WEBPACK_IMPORTED_MODULE_3__["createViewFactory"])(this.viewType, viewDate.start, viewDate.end, this.viewOptions);
        }
      }, {
        key: "setupGroups",
        value: function setupGroups() {
          var _this17 = this;

          var collapsedIds = this.groups.filter(function (group) {
            return !group.expand;
          }).map(function (group) {
            return group.id;
          });
          this.groupsMap = {};
          this.groups = [];
          this.originGroups.forEach(function (origin) {
            var group = new _class__WEBPACK_IMPORTED_MODULE_2__["GanttGroupInternal"](origin);
            group.expand = !collapsedIds.includes(group.id);
            _this17.groupsMap[group.id] = group;

            _this17.groups.push(group);
          });
        }
      }, {
        key: "setupItems",
        value: function setupItems() {
          var _this18 = this;

          this.items = [];
          this.originItems = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["uniqBy"])(this.originItems, 'id');

          if (this.groups.length > 0) {
            this.originItems.forEach(function (origin) {
              var group = _this18.groupsMap[origin.group_id];

              if (group) {
                group.items.push(new _class__WEBPACK_IMPORTED_MODULE_2__["GanttItemInternal"](origin));
              }
            });
          } else {
            this.originItems.forEach(function (origin) {
              _this18.items.push(new _class__WEBPACK_IMPORTED_MODULE_2__["GanttItemInternal"](origin));
            });
          }
        }
      }, {
        key: "getViewDate",
        value: function getViewDate() {
          var start = this.start;
          var end = this.end;
          this.originItems.forEach(function (item) {
            start = start ? Math.min(start, item.start) : item.start;
            end = end ? Math.max(end, item.end) : item.end;
          });
          return {
            start: new _utils_date__WEBPACK_IMPORTED_MODULE_4__["GanttDate"](start),
            end: new _utils_date__WEBPACK_IMPORTED_MODULE_4__["GanttDate"](end)
          };
        }
      }, {
        key: "setupViewScroll",
        value: function setupViewScroll() {
          var _this19 = this;

          if (this.disabledLoadOnScroll) {
            return;
          }

          this.dom.getViewerScroll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {
            if (event.direction === _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__["ScrollDirection"].LEFT) {
              var dates = _this19.view.addStartDate();

              if (dates) {
                event.target.scrollLeft += _this19.view.getDateRangeWidth(dates.start, dates.end);

                _this19.ngZone.run(function () {
                  _this19.loadOnScroll.emit({
                    start: dates.start.getUnixTime(),
                    end: dates.end.getUnixTime()
                  });
                });
              }
            }

            if (event.direction === _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__["ScrollDirection"].RIGHT) {
              var _dates = _this19.view.addEndDate();

              if (_dates) {
                _this19.ngZone.run(function () {
                  _this19.loadOnScroll.emit({
                    start: _dates.start.getUnixTime(),
                    end: _dates.end.getUnixTime()
                  });
                });
              }
            }
          });
        }
      }, {
        key: "onStable",
        value: function onStable() {
          return this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
        }
      }, {
        key: "scrollToToday",
        value: function scrollToToday() {
          var x = this.view.getTodayXPoint();
          this.dom.scrollMainContainer(x);
        }
      }, {
        key: "element",
        get: function get() {
          return this.elementRef.nativeElement;
        }
      }, {
        key: "sideWidth",
        get: function get() {
          return _gantt_styles__WEBPACK_IMPORTED_MODULE_5__["sideWidth"];
        }
      }]);

      return GanttUpper;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('items')], GanttUpper.prototype, "originItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('groups')], GanttUpper.prototype, "originGroups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "viewType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "start", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "end", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "draggable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "styles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "viewOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GanttUpper.prototype, "disabledLoadOnScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttUpper.prototype, "loadOnScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttUpper.prototype, "dragStarted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttUpper.prototype, "dragEnded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GanttUpper.prototype, "barClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('bar', {
      "static": true
    })], GanttUpper.prototype, "barTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('group', {
      "static": true
    })], GanttUpper.prototype, "groupTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__["GanttCalendarComponent"], {
      "static": false
    })], GanttUpper.prototype, "calendar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt')], GanttUpper.prototype, "ganttClass", void 0);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt.component.ts":
  /*!************************************************!*\
    !*** ../packages/gantt/src/gantt.component.ts ***!
    \************************************************/

  /*! exports provided: NgxGanttComponent */

  /***/
  function packagesGanttSrcGanttComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttComponent", function () {
      return NgxGanttComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _gantt_upper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gantt-upper */
    "../packages/gantt/src/gantt-upper.ts");
    /* harmony import */


    var _gantt_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gantt-ref */
    "../packages/gantt/src/gantt-ref.ts");
    /* harmony import */


    var _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gantt-dom.service */
    "../packages/gantt/src/gantt-dom.service.ts");
    /* harmony import */


    var _gantt_drag_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gantt-drag-container */
    "../packages/gantt/src/gantt-drag-container.ts");
    /* harmony import */


    var _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./table/gantt-column.component */
    "../packages/gantt/src/table/gantt-column.component.ts");
    /* harmony import */


    var _gantt_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gantt.styles */
    "../packages/gantt/src/gantt.styles.ts");
    /* harmony import */


    var _utils_column_compute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./utils/column-compute */
    "../packages/gantt/src/utils/column-compute.ts");

    var NgxGanttComponent_1;

    var NgxGanttComponent = NgxGanttComponent_1 = /*#__PURE__*/function (_gantt_upper__WEBPACK2) {
      _inherits(NgxGanttComponent, _gantt_upper__WEBPACK2);

      var _super2 = _createSuper(NgxGanttComponent);

      function NgxGanttComponent(elementRef, cdr, ngZone, dom, dragContainer) {
        var _this20;

        _classCallCheck(this, NgxGanttComponent);

        _this20 = _super2.call(this, elementRef, cdr, ngZone, dom, dragContainer);
        _this20.ngUnsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this20.sideTableWidth = _gantt_styles__WEBPACK_IMPORTED_MODULE_9__["sideWidth"];
        _this20.groupExpand$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this20.linkDragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this20.linkDragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this20.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this20;
      }

      _createClass(NgxGanttComponent, [{
        key: "computeItemRef",
        value: function computeItemRef(item) {
          item.updateRefs({
            width: item.start && item.end ? this.view.getDateRangeWidth(item.start.startOfDay(), item.end.endOfDay()) : 0,
            x: item.start ? this.view.getXPointByDate(item.start) : 0,
            y: (this.styles.lineHeight - this.styles.barHeight) / 2 - 1
          });
        }
      }, {
        key: "computeColumnWidth",
        value: function computeColumnWidth() {
          var count = this.columns.length;
          var widthConfig = Object(_utils_column_compute__WEBPACK_IMPORTED_MODULE_10__["getColumnWidthConfig"])(count);
          this.sideTableWidth = widthConfig.width;
          this.columns.forEach(function (column, index) {
            if (index === 0) {
              column.width = widthConfig.primaryWidth;
            } else {
              column.width = widthConfig.secondaryWidth;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          _get(_getPrototypeOf(NgxGanttComponent.prototype), "onInit", this).call(this);

          this.dragContainer.linkDragStarted.subscribe(function (event) {
            _this21.linkDragStarted.emit(event);
          });
          this.dragContainer.linkDragEnded.subscribe(function (event) {
            _this21.linkDragEnded.emit(event);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this22 = this;

          this.columns.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe$)).subscribe(function () {
            _this22.computeColumnWidth();

            _this22.detectChanges();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(NgxGanttComponent.prototype), "onChanges", this).call(this, changes);
        }
      }, {
        key: "computeRefs",
        value: function computeRefs() {
          var _this23 = this;

          this.groups.forEach(function (group) {
            group.items.forEach(function (item) {
              _this23.computeItemRef(item);
            });
          });
          this.items.forEach(function (item) {
            _this23.computeItemRef(item);
          });
        }
      }, {
        key: "detectChanges",
        value: function detectChanges() {
          this.cdr.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(NgxGanttComponent.prototype), "onDestroy", this).call(this);
        }
      }]);

      return NgxGanttComponent;
    }(_gantt_upper__WEBPACK_IMPORTED_MODULE_4__["GanttUpper"]);

    NgxGanttComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__["GanttDomService"]
      }, {
        type: _gantt_drag_container__WEBPACK_IMPORTED_MODULE_7__["GanttDragContainer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGanttComponent.prototype, "linkable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGanttComponent.prototype, "linkDragStarted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGanttComponent.prototype, "linkDragEnded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxGanttComponent.prototype, "lineClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('group', {
      "static": true
    })], NgxGanttComponent.prototype, "groupTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_table_gantt_column_component__WEBPACK_IMPORTED_MODULE_8__["NgxGanttTableColumnComponent"], {
      descendants: true
    })], NgxGanttComponent.prototype, "columns", void 0);
    NgxGanttComponent = NgxGanttComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-gantt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gantt.component.html */
      "../node_modules/raw-loader/dist/cjs.js!../packages/gantt/src/gantt.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: _gantt_ref__WEBPACK_IMPORTED_MODULE_5__["GANTT_REF_TOKEN"],
        useExisting: NgxGanttComponent_1
      }, _gantt_dom_service__WEBPACK_IMPORTED_MODULE_6__["GanttDomService"], _gantt_drag_container__WEBPACK_IMPORTED_MODULE_7__["GanttDragContainer"]]
    })], NgxGanttComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt.module.ts":
  /*!*********************************************!*\
    !*** ../packages/gantt/src/gantt.module.ts ***!
    \*********************************************/

  /*! exports provided: NgxGanttModule */

  /***/
  function packagesGanttSrcGanttModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttModule", function () {
      return NgxGanttModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _flat_gantt_flat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./flat/gantt-flat.component */
    "../packages/gantt/src/flat/gantt-flat.component.ts");
    /* harmony import */


    var _gantt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gantt.component */
    "../packages/gantt/src/gantt.component.ts");
    /* harmony import */


    var _table_gantt_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table/gantt-table.component */
    "../packages/gantt/src/table/gantt-table.component.ts");
    /* harmony import */


    var _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./table/gantt-column.component */
    "../packages/gantt/src/table/gantt-column.component.ts");
    /* harmony import */


    var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/calendar/calendar.component */
    "../packages/gantt/src/components/calendar/calendar.component.ts");
    /* harmony import */


    var _components_table_gantt_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/table/gantt-table.component */
    "../packages/gantt/src/components/table/gantt-table.component.ts");
    /* harmony import */


    var _components_bar_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/bar/bar.component */
    "../packages/gantt/src/components/bar/bar.component.ts");
    /* harmony import */


    var _components_main_gantt_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/main/gantt-main.component */
    "../packages/gantt/src/components/main/gantt-main.component.ts");
    /* harmony import */


    var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/icon/icon.component */
    "../packages/gantt/src/components/icon/icon.component.ts");
    /* harmony import */


    var _components_drag_backdrop_drag_backdrop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/drag-backdrop/drag-backdrop.component */
    "../packages/gantt/src/components/drag-backdrop/drag-backdrop.component.ts");
    /* harmony import */


    var _components_links_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/links/links.component */
    "../packages/gantt/src/components/links/links.component.ts");

    var NgxGanttModule = function NgxGanttModule() {
      _classCallCheck(this, NgxGanttModule);
    };

    NgxGanttModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_gantt_component__WEBPACK_IMPORTED_MODULE_4__["NgxGanttComponent"], _flat_gantt_flat_component__WEBPACK_IMPORTED_MODULE_3__["NgxGanttFlatComponent"], _table_gantt_table_component__WEBPACK_IMPORTED_MODULE_5__["NgxGanttTableComponent"], _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_6__["NgxGanttTableColumnComponent"]],
      declarations: [_gantt_component__WEBPACK_IMPORTED_MODULE_4__["NgxGanttComponent"], _flat_gantt_flat_component__WEBPACK_IMPORTED_MODULE_3__["NgxGanttFlatComponent"], _table_gantt_table_component__WEBPACK_IMPORTED_MODULE_5__["NgxGanttTableComponent"], _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_6__["NgxGanttTableColumnComponent"], _components_table_gantt_table_component__WEBPACK_IMPORTED_MODULE_8__["GanttTableComponent"], _components_main_gantt_main_component__WEBPACK_IMPORTED_MODULE_10__["GanttMainComponent"], _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["GanttCalendarComponent"], _components_links_links_component__WEBPACK_IMPORTED_MODULE_13__["GanttLinksComponent"], _components_bar_bar_component__WEBPACK_IMPORTED_MODULE_9__["GanttBarComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["GanttIconComponent"], _components_drag_backdrop_drag_backdrop_component__WEBPACK_IMPORTED_MODULE_12__["GanttDragBackdropComponent"]],
      providers: []
    })], NgxGanttModule);
    /***/
  },

  /***/
  "../packages/gantt/src/gantt.styles.ts":
  /*!*********************************************!*\
    !*** ../packages/gantt/src/gantt.styles.ts ***!
    \*********************************************/

  /*! exports provided: defaultStyles, headerHeight, sideWidth, sideMiddleWidth, sideMaxWidth, sideMinWidth, barBackground */

  /***/
  function packagesGanttSrcGanttStylesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultStyles", function () {
      return defaultStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "headerHeight", function () {
      return headerHeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideWidth", function () {
      return sideWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideMiddleWidth", function () {
      return sideMiddleWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideMaxWidth", function () {
      return sideMaxWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideMinWidth", function () {
      return sideMinWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "barBackground", function () {
      return barBackground;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var defaultStyles = {
      lineHeight: 44,
      barHeight: 22
    };
    var headerHeight = 44;
    var sideWidth = 400;
    var sideMiddleWidth = 500;
    var sideMaxWidth = 600;
    var sideMinWidth = 400;
    var barBackground = '#348fe4';
    /***/
  },

  /***/
  "../packages/gantt/src/public-api.ts":
  /*!*******************************************!*\
    !*** ../packages/gantt/src/public-api.ts ***!
    \*******************************************/

  /*! exports provided: NgxGanttModule, NgxGanttComponent, NgxGanttTableComponent, NgxGanttTableColumnComponent, NgxGanttFlatComponent, GanttDatePoint, GanttDragEvent, GanttLinkDragEvent, GanttLoadOnScrollEvent, GanttLineClickEvent, GanttBarClickEvent, GanttItemInternal, GanttGroupInternal, GanttViewType */

  /***/
  function packagesGanttSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gantt_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gantt.module */
    "../packages/gantt/src/gantt.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttModule", function () {
      return _gantt_module__WEBPACK_IMPORTED_MODULE_1__["NgxGanttModule"];
    });
    /* harmony import */


    var _gantt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gantt.component */
    "../packages/gantt/src/gantt.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttComponent", function () {
      return _gantt_component__WEBPACK_IMPORTED_MODULE_2__["NgxGanttComponent"];
    });
    /* harmony import */


    var _table_gantt_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table/gantt-table.component */
    "../packages/gantt/src/table/gantt-table.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttTableComponent", function () {
      return _table_gantt_table_component__WEBPACK_IMPORTED_MODULE_3__["NgxGanttTableComponent"];
    });
    /* harmony import */


    var _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./table/gantt-column.component */
    "../packages/gantt/src/table/gantt-column.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttTableColumnComponent", function () {
      return _table_gantt_column_component__WEBPACK_IMPORTED_MODULE_4__["NgxGanttTableColumnComponent"];
    });
    /* harmony import */


    var _flat_gantt_flat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./flat/gantt-flat.component */
    "../packages/gantt/src/flat/gantt-flat.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttFlatComponent", function () {
      return _flat_gantt_flat_component__WEBPACK_IMPORTED_MODULE_5__["NgxGanttFlatComponent"];
    });
    /* harmony import */


    var _class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./class */
    "../packages/gantt/src/class/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttDatePoint", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttDatePoint"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttDragEvent", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttDragEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLinkDragEvent", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttLinkDragEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLoadOnScrollEvent", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttLoadOnScrollEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttLineClickEvent", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttLineClickEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttBarClickEvent", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttBarClickEvent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttItemInternal", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttItemInternal"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttGroupInternal", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttGroupInternal"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GanttViewType", function () {
      return _class__WEBPACK_IMPORTED_MODULE_6__["GanttViewType"];
    });
    /*
     * Public API Surface of gantt
     */

    /***/

  },

  /***/
  "../packages/gantt/src/table/gantt-column.component.ts":
  /*!*************************************************************!*\
    !*** ../packages/gantt/src/table/gantt-column.component.ts ***!
    \*************************************************************/

  /*! exports provided: NgxGanttTableColumnComponent */

  /***/
  function packagesGanttSrcTableGanttColumnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttTableColumnComponent", function () {
      return NgxGanttTableColumnComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var NgxGanttTableColumnComponent = /*#__PURE__*/function () {
      function NgxGanttTableColumnComponent() {
        _classCallCheck(this, NgxGanttTableColumnComponent);
      }

      _createClass(NgxGanttTableColumnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgxGanttTableColumnComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxGanttTableColumnComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('cell', {
      "static": true
    })], NgxGanttTableColumnComponent.prototype, "templateRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('header', {
      "static": true
    })], NgxGanttTableColumnComponent.prototype, "headerTemplateRef", void 0);
    NgxGanttTableColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-gantt-column',
      template: ''
    })], NgxGanttTableColumnComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/table/gantt-table.component.ts":
  /*!************************************************************!*\
    !*** ../packages/gantt/src/table/gantt-table.component.ts ***!
    \************************************************************/

  /*! exports provided: NgxGanttTableComponent */

  /***/
  function packagesGanttSrcTableGanttTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGanttTableComponent", function () {
      return NgxGanttTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var NgxGanttTableComponent = /*#__PURE__*/function () {
      function NgxGanttTableComponent() {
        _classCallCheck(this, NgxGanttTableComponent);
      }

      _createClass(NgxGanttTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgxGanttTableComponent;
    }();

    NgxGanttTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngx-gantt-table',
      template: ''
    })], NgxGanttTableComponent);
    /***/
  },

  /***/
  "../packages/gantt/src/utils/column-compute.ts":
  /*!*****************************************************!*\
    !*** ../packages/gantt/src/utils/column-compute.ts ***!
    \*****************************************************/

  /*! exports provided: getColumnWidthConfig */

  /***/
  function packagesGanttSrcUtilsColumnComputeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getColumnWidthConfig", function () {
      return getColumnWidthConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gantt_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../gantt.styles */
    "../packages/gantt/src/gantt.styles.ts");

    var ColumnWidthConfig = function ColumnWidthConfig() {
      _classCallCheck(this, ColumnWidthConfig);
    };

    var computeStrategiesMap = new Map([[function (count) {
      return count === 1;
    }, {
      width: _gantt_styles__WEBPACK_IMPORTED_MODULE_1__["sideWidth"],
      primaryWidth: 1
    }], [function (count) {
      return count === 2;
    }, {
      width: _gantt_styles__WEBPACK_IMPORTED_MODULE_1__["sideWidth"],
      primaryWidth: 0.6
    }], [function (count) {
      return count === 3;
    }, {
      width: _gantt_styles__WEBPACK_IMPORTED_MODULE_1__["sideMiddleWidth"],
      primaryWidth: 0.5
    }], [function (count) {
      return count > 3;
    }, {
      width: _gantt_styles__WEBPACK_IMPORTED_MODULE_1__["sideMaxWidth"],
      primaryWidth: 0.5
    }]]);

    function getColumnWidthConfig(count, width) {
      var config = null;
      computeStrategiesMap.forEach(function (value, condition) {
        if (condition(count)) {
          config = value;
          return false;
        }
      });
      var configWidth = width || config.width;
      var primaryWidth = configWidth * config.primaryWidth;
      var secondaryWidth = (configWidth - primaryWidth) / (count - 1);
      return {
        width: configWidth,
        primaryWidth: primaryWidth,
        secondaryWidth: secondaryWidth
      };
    }
    /***/

  },

  /***/
  "../packages/gantt/src/utils/date.ts":
  /*!*******************************************!*\
    !*** ../packages/gantt/src/utils/date.ts ***!
    \*******************************************/

  /*! exports provided: GanttDate, add, addBusinessDays, addDays, addHours, addISOWeekYears, addMilliseconds, addMinutes, addMonths, addQuarters, addSeconds, addWeeks, addYears, areIntervalsOverlapping, closestIndexTo, closestTo, compareAsc, compareDesc, differenceInBusinessDays, differenceInCalendarDays, differenceInCalendarISOWeekYears, differenceInCalendarISOWeeks, differenceInCalendarMonths, differenceInCalendarQuarters, differenceInCalendarWeeks, differenceInCalendarYears, differenceInDays, differenceInHours, differenceInISOWeekYears, differenceInMilliseconds, differenceInMinutes, differenceInMonths, differenceInQuarters, differenceInSeconds, differenceInWeeks, differenceInYears, eachDayOfInterval, eachHourOfInterval, eachMonthOfInterval, eachQuarterOfInterval, eachWeekOfInterval, eachWeekendOfInterval, eachWeekendOfMonth, eachWeekendOfYear, eachYearOfInterval, endOfDay, endOfDecade, endOfHour, endOfISOWeek, endOfISOWeekYear, endOfMinute, endOfMonth, endOfQuarter, endOfSecond, endOfToday, endOfTomorrow, endOfWeek, endOfYear, endOfYesterday, format, formatDistance, formatDistanceStrict, formatDistanceToNow, formatDistanceToNowStrict, formatDuration, formatISO, formatISO9075, formatISODuration, formatRFC3339, formatRFC7231, formatRelative, fromUnixTime, getDate, getDay, getDayOfYear, getDaysInMonth, getDaysInYear, getDecade, getHours, getISODay, getISOWeek, getISOWeekYear, getISOWeeksInYear, getMilliseconds, getMinutes, getMonth, getOverlappingDaysInIntervals, getQuarter, getSeconds, getTime, getUnixTime, getWeek, getWeekOfMonth, getWeekYear, getWeeksInMonth, getYear, intervalToDuration, isAfter, isBefore, isDate, isEqual, isExists, isFirstDayOfMonth, isFriday, isFuture, isLastDayOfMonth, isLeapYear, isMonday, isPast, isSameDay, isSameHour, isSameISOWeek, isSameISOWeekYear, isSameMinute, isSameMonth, isSameQuarter, isSameSecond, isSameWeek, isSameYear, isSaturday, isSunday, isThisHour, isThisISOWeek, isThisMinute, isThisMonth, isThisQuarter, isThisSecond, isThisWeek, isThisYear, isThursday, isToday, isTomorrow, isTuesday, isValid, isWednesday, isWeekend, isWithinInterval, isYesterday, lastDayOfDecade, lastDayOfISOWeek, lastDayOfISOWeekYear, lastDayOfMonth, lastDayOfQuarter, lastDayOfWeek, lastDayOfYear, lightFormat, max, min, parse, parseISO, parseJSON, roundToNearestMinutes, set, setDate, setDay, setDayOfYear, setHours, setISODay, setISOWeek, setISOWeekYear, setMilliseconds, setMinutes, setMonth, setQuarter, setSeconds, setWeek, setWeekYear, setYear, startOfDay, startOfDecade, startOfHour, startOfISOWeek, startOfISOWeekYear, startOfMinute, startOfMonth, startOfQuarter, startOfSecond, startOfToday, startOfTomorrow, startOfWeek, startOfWeekYear, startOfYear, startOfYesterday, sub, subBusinessDays, subDays, subHours, subISOWeekYears, subMilliseconds, subMinutes, subMonths, subQuarters, subSeconds, subWeeks, subYears, toDate, maxTime, minTime */

  /***/
  function packagesGanttSrcUtilsDateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttDate", function () {
      return GanttDate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns */
    "../node_modules/date-fns/esm/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "add", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["add"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addBusinessDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addBusinessDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addHours", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addISOWeekYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addISOWeekYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addMilliseconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addMilliseconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addMonths", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addMonths"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addQuarters", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addQuarters"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addSeconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addSeconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addWeeks", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addWeeks"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["addYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "areIntervalsOverlapping", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["areIntervalsOverlapping"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "closestIndexTo", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["closestIndexTo"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "closestTo", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["closestTo"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "compareAsc", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["compareAsc"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "compareDesc", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["compareDesc"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInBusinessDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInBusinessDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarISOWeekYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarISOWeekYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarISOWeeks", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarISOWeeks"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarMonths", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarMonths"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarQuarters", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarQuarters"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarWeeks", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarWeeks"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInCalendarYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInHours", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInHours"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInISOWeekYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInISOWeekYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInMilliseconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMilliseconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInMonths", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMonths"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInQuarters", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInQuarters"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInSeconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInSeconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInWeeks", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInWeeks"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "differenceInYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachDayOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachDayOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachHourOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachHourOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachMonthOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachMonthOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachQuarterOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachQuarterOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachWeekOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachWeekOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachWeekendOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachWeekendOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachWeekendOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachWeekendOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachWeekendOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachWeekendOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "eachYearOfInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["eachYearOfInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfDay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfDecade", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDecade"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfHour", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfHour"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfMinute", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMinute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfSecond", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfSecond"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfToday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfToday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfTomorrow", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfTomorrow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "endOfYesterday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfYesterday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "format", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["format"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatDistance", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistance"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatDistanceStrict", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistanceStrict"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatDistanceToNow", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistanceToNow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatDistanceToNowStrict", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistanceToNowStrict"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatDuration", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDuration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatISO", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatISO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatISO9075", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatISO9075"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatISODuration", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatISODuration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatRFC3339", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatRFC3339"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatRFC7231", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatRFC7231"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "formatRelative", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["formatRelative"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fromUnixTime", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["fromUnixTime"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDate", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDayOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDayOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDaysInMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDaysInYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDaysInYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getDecade", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getDecade"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getHours", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getHours"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getISODay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getISODay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getISOWeeksInYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMilliseconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getMilliseconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getOverlappingDaysInIntervals", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getOverlappingDaysInIntervals"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getSeconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getSeconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getTime", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getTime"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getUnixTime", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getUnixTime"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeekOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getWeekOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getWeeksInMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getWeeksInMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "intervalToDuration", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["intervalToDuration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isAfter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isBefore", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isDate", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isDate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isEqual", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isEqual"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isExists", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isExists"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isFirstDayOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isFirstDayOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isFriday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isFriday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isFuture", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isFuture"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isLastDayOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isLastDayOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isLeapYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isLeapYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isMonday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isMonday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isPast", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isPast"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameDay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameHour", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameHour"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameMinute", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMinute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameSecond", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameSecond"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSameYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSaturday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSaturday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isSunday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isSunday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisHour", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisHour"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisMinute", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisMinute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisSecond", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisSecond"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThisYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThisYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isThursday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isThursday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isToday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isToday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isTomorrow", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isTomorrow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isTuesday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isTuesday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isValid", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isWednesday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isWednesday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isWeekend", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isWeekend"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isWithinInterval", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isWithinInterval"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "isYesterday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["isYesterday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfDecade", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfDecade"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lastDayOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lastDayOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "lightFormat", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["lightFormat"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "max", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["max"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "min", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["min"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parse", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["parse"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseISO", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseJSON", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["parseJSON"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "roundToNearestMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["roundToNearestMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "set", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["set"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setDate", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setDate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setDay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setDay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setDayOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setDayOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setHours", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setHours"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setISODay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setISODay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setMilliseconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setMilliseconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setSeconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setSeconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["setYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfDay", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfDecade", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDecade"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfHour", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfHour"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfISOWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfISOWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfISOWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfISOWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfMinute", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfMonth", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfQuarter", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfQuarter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfSecond", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfSecond"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfToday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfToday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfTomorrow", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfTomorrow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfWeek", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfWeekYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeekYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfYear", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfYear"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "startOfYesterday", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfYesterday"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sub", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["sub"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subBusinessDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subBusinessDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subDays", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subHours", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subHours"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subISOWeekYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subISOWeekYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subMilliseconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subMilliseconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subMinutes", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subMonths", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subMonths"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subQuarters", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subQuarters"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subSeconds", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subSeconds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subWeeks", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subWeeks"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "subYears", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["subYears"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "toDate", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["toDate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "maxTime", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["maxTime"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "minTime", function () {
      return date_fns__WEBPACK_IMPORTED_MODULE_1__["minTime"];
    });

    var GanttDate = /*#__PURE__*/function () {
      function GanttDate(date) {
        _classCallCheck(this, GanttDate);

        if (date) {
          if (date instanceof Date) {
            this.value = date;
          } else if (typeof date === 'string' || typeof date === 'number') {
            if (date.toString().length < 13) {
              this.value = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["fromUnixTime"])(+date);
            } else {
              this.value = new Date(date);
            }
          } else {
            throw new Error("The input date type is not supported expect Date | string\n                     | number | { date: number; with_time: 0 | 1}, actual ".concat(JSON.stringify(date)));
          }
        } else {
          this.value = new Date();
        }
      }

      _createClass(GanttDate, [{
        key: "getYear",
        value: function getYear() {
          return this.value.getFullYear();
        }
      }, {
        key: "getMonth",
        value: function getMonth() {
          return this.value.getMonth();
        }
      }, {
        key: "getDay",
        value: function getDay() {
          return this.value.getDay();
        }
      }, {
        key: "getTime",
        value: function getTime() {
          return this.value.getTime();
        }
      }, {
        key: "getDate",
        value: function getDate() {
          return this.value.getDate();
        }
      }, {
        key: "getHours",
        value: function getHours() {
          return this.value.getHours();
        }
      }, {
        key: "getMinutes",
        value: function getMinutes() {
          return this.value.getMinutes();
        }
      }, {
        key: "getSeconds",
        value: function getSeconds() {
          return this.value.getSeconds();
        }
      }, {
        key: "getMilliseconds",
        value: function getMilliseconds() {
          return this.value.getMilliseconds();
        }
      }, {
        key: "getDaysInMonth",
        value: function getDaysInMonth() {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDaysInMonth"])(this.value);
        }
      }, {
        key: "getDaysInQuarter",
        value: function getDaysInQuarter() {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarDays"])(this.endOfQuarter().addSeconds(1).value, this.startOfQuarter().value);
        }
      }, {
        key: "setDate",
        value: function setDate(dayOfMonth) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setDate"])(this.value, dayOfMonth));
        }
      }, {
        key: "clone",
        value: function clone() {
          return new GanttDate(new Date(this.value));
        }
      }, {
        key: "add",
        value: function add(amount, unit) {
          switch (unit) {
            case 'second':
              return new GanttDate(this.value).addSeconds(amount);

            case 'minute':
              return new GanttDate(this.value).addMinutes(amount);

            case 'hour':
              return new GanttDate(this.value).addHours(amount);

            case 'day':
              return new GanttDate(this.value).addDays(amount);

            case 'week':
              return new GanttDate(this.value).addWeeks(amount);

            case 'month':
              return new GanttDate(this.value).addMonths(amount);

            case 'quarter':
              return new GanttDate(this.value).addQuarters(amount);

            case 'year':
              return new GanttDate(this.value).addYears(amount);

            default:
              return new GanttDate(this.value).addSeconds(amount);
          }
        }
      }, {
        key: "addSeconds",
        value: function addSeconds(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addSeconds"])(this.value, amount));
        }
      }, {
        key: "addMinutes",
        value: function addMinutes(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMinutes"])(this.value, amount));
        }
      }, {
        key: "addHours",
        value: function addHours(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(this.value, amount));
        }
      }, {
        key: "addDays",
        value: function addDays(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(this.value, amount));
        }
      }, {
        key: "addWeeks",
        value: function addWeeks(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addWeeks"])(this.value, amount));
        }
      }, {
        key: "addMonths",
        value: function addMonths(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMonths"])(this.value, amount));
        }
      }, {
        key: "addQuarters",
        value: function addQuarters(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addQuarters"])(this.value, amount));
        }
      }, {
        key: "addYears",
        value: function addYears(amount) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addYears"])(this.value, amount));
        }
      }, {
        key: "startOfDay",
        value: function startOfDay() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(this.value));
        }
      }, {
        key: "startOfWeek",
        value: function startOfWeek(options) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"])(this.value, options));
        }
      }, {
        key: "startOfMonth",
        value: function startOfMonth() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(this.value));
        }
      }, {
        key: "startOfQuarter",
        value: function startOfQuarter() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfQuarter"])(this.value));
        }
      }, {
        key: "startOfYear",
        value: function startOfYear() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfYear"])(this.value));
        }
      }, {
        key: "endOfDay",
        value: function endOfDay() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(this.value));
        }
      }, {
        key: "endOfWeek",
        value: function endOfWeek(options) {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"])(this.value, options));
        }
      }, {
        key: "endOfMonth",
        value: function endOfMonth() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(this.value));
        }
      }, {
        key: "endOfQuarter",
        value: function endOfQuarter() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfQuarter"])(this.value));
        }
      }, {
        key: "endOfYear",
        value: function endOfYear() {
          return new GanttDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfYear"])(this.value));
        }
      }, {
        key: "getUnixTime",
        value: function getUnixTime() {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getUnixTime"])(this.value);
        }
      }, {
        key: "format",
        value: function format(mat, options) {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(this.value, mat, options);
        }
      }, {
        key: "isWeekend",
        value: function isWeekend() {
          return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isWeekend"])(this.value);
        }
      }]);

      return GanttDate;
    }();
    /***/

  },

  /***/
  "../packages/gantt/src/utils/helpers.ts":
  /*!**********************************************!*\
    !*** ../packages/gantt/src/utils/helpers.ts ***!
    \**********************************************/

  /*! exports provided: isNumber, hexToRgb, uniqBy */

  /***/
  function packagesGanttSrcUtilsHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isNumber", function () {
      return isNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hexToRgb", function () {
      return hexToRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uniqBy", function () {
      return uniqBy;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    function isNumber(value) {
      return typeof value === 'number';
    }

    function hexToRgb(color) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (/^#/g.test(color)) {
        return "rgba(".concat(parseInt(color.slice(1, 3), 16), ",").concat(parseInt(color.slice(3, 5), 16), ",").concat(parseInt(color.slice(5, 7), 16), ",").concat(opacity, ")");
      } else {
        return null;
      }
    }

    function uniqBy(array, key) {
      var valuesMap = {};
      var result = [];
      (array || []).forEach(function (value) {
        var _key = value[key];

        if (!valuesMap[_key]) {
          valuesMap[_key] = value;
          result.push(value);
        }
      });
      return result;
    }
    /***/

  },

  /***/
  "../packages/gantt/src/views/day.ts":
  /*!******************************************!*\
    !*** ../packages/gantt/src/views/day.ts ***!
    \******************************************/

  /*! exports provided: GanttViewDay */

  /***/
  function packagesGanttSrcViewsDayTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttViewDay", function () {
      return GanttViewDay;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view */
    "../packages/gantt/src/views/view.ts");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var _class_date_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../class/date-point */
    "../packages/gantt/src/class/date-point.ts");

    var viewOptions = {
      cellWidth: 35,
      start: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().startOfYear().startOfWeek({
        weekStartsOn: 1
      }),
      end: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().endOfYear().endOfWeek({
        weekStartsOn: 1
      }),
      addAmount: 1,
      addUnit: 'month'
    };

    var GanttViewDay = /*#__PURE__*/function (_view__WEBPACK_IMPORT) {
      _inherits(GanttViewDay, _view__WEBPACK_IMPORT);

      var _super3 = _createSuper(GanttViewDay);

      function GanttViewDay(start, end, options) {
        var _this24;

        _classCallCheck(this, GanttViewDay);

        _this24 = _super3.call(this, start, end, Object.assign(viewOptions, options));
        _this24.showWeekBackdrop = true;
        _this24.showTimeline = false;
        return _this24;
      }

      _createClass(GanttViewDay, [{
        key: "startOf",
        value: function startOf(date) {
          return date.startOfWeek({
            weekStartsOn: 1
          });
        }
      }, {
        key: "endOf",
        value: function endOf(date) {
          return date.endOfWeek({
            weekStartsOn: 1
          });
        }
      }, {
        key: "getPrimaryWidth",
        value: function getPrimaryWidth() {
          return this.getCellWidth() * 7;
        }
      }, {
        key: "getDayOccupancyWidth",
        value: function getDayOccupancyWidth(date) {
          return this.cellWidth;
        }
      }, {
        key: "getPrimaryDatePoints",
        value: function getPrimaryDatePoints() {
          var weeks = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["eachWeekOfInterval"])({
            start: this.start.value,
            end: this.end.addSeconds(1).value
          }, {
            weekStartsOn: 1
          });
          var points = [];

          for (var i = 0; i < weeks.length; i++) {
            var weekStart = new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"](weeks[i]);
            var increaseWeek = weekStart.getDaysInMonth() - weekStart.getDate() >= 3 ? 0 : 1;
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](weekStart, weekStart.addWeeks(increaseWeek).format('yyyy年MM月'), this.getCellWidth() * 7 / 2 + i * (this.getCellWidth() * 7), _view__WEBPACK_IMPORTED_MODULE_1__["primaryDatePointTop"]);
            points.push(point);
          }

          return points;
        }
      }, {
        key: "getSecondaryDatePoints",
        value: function getSecondaryDatePoints() {
          var days = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["eachDayOfInterval"])({
            start: this.start.value,
            end: this.end.value
          });
          var points = [];

          for (var i = 0; i < days.length; i++) {
            var start = new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"](days[i]);
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](start, start.getDate().toString(), i * this.getCellWidth() + this.getCellWidth() / 2, _view__WEBPACK_IMPORTED_MODULE_1__["secondaryDatePointTop"], {
              isWeekend: start.isWeekend()
            });
            points.push(point);
          }

          return points;
        }
      }]);

      return GanttViewDay;
    }(_view__WEBPACK_IMPORTED_MODULE_1__["GanttView"]);
    /***/

  },

  /***/
  "../packages/gantt/src/views/factory.ts":
  /*!**********************************************!*\
    !*** ../packages/gantt/src/views/factory.ts ***!
    \**********************************************/

  /*! exports provided: createViewFactory */

  /***/
  function packagesGanttSrcViewsFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createViewFactory", function () {
      return createViewFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./month */
    "../packages/gantt/src/views/month.ts");
    /* harmony import */


    var _class_view_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../class/view-type */
    "../packages/gantt/src/class/view-type.ts");
    /* harmony import */


    var _quarter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quarter */
    "../packages/gantt/src/views/quarter.ts");
    /* harmony import */


    var _day__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./day */
    "../packages/gantt/src/views/day.ts");

    function createViewFactory(type, start, end, options) {
      switch (type) {
        case _class_view_type__WEBPACK_IMPORTED_MODULE_2__["GanttViewType"].month:
          return new _month__WEBPACK_IMPORTED_MODULE_1__["GanttViewMonth"](start, end, options);

        case _class_view_type__WEBPACK_IMPORTED_MODULE_2__["GanttViewType"].quarter:
          return new _quarter__WEBPACK_IMPORTED_MODULE_3__["GanttViewQuarter"](start, end, options);

        case _class_view_type__WEBPACK_IMPORTED_MODULE_2__["GanttViewType"].day:
          return new _day__WEBPACK_IMPORTED_MODULE_4__["GanttViewDay"](start, end, options);

        default:
          throw new Error('gantt view type invalid');
      }
    }
    /***/

  },

  /***/
  "../packages/gantt/src/views/month.ts":
  /*!********************************************!*\
    !*** ../packages/gantt/src/views/month.ts ***!
    \********************************************/

  /*! exports provided: GanttViewMonth */

  /***/
  function packagesGanttSrcViewsMonthTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttViewMonth", function () {
      return GanttViewMonth;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view */
    "../packages/gantt/src/views/view.ts");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var _class_date_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../class/date-point */
    "../packages/gantt/src/class/date-point.ts");

    var viewOptions = {
      start: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().startOfQuarter().addQuarters(-1),
      end: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().endOfQuarter().addQuarters(2),
      cellWidth: 280,
      addAmount: 1,
      addUnit: 'quarter'
    };

    var GanttViewMonth = /*#__PURE__*/function (_view__WEBPACK_IMPORT2) {
      _inherits(GanttViewMonth, _view__WEBPACK_IMPORT2);

      var _super4 = _createSuper(GanttViewMonth);

      function GanttViewMonth(start, end, options) {
        _classCallCheck(this, GanttViewMonth);

        return _super4.call(this, start, end, Object.assign(viewOptions, options));
      }

      _createClass(GanttViewMonth, [{
        key: "startOf",
        value: function startOf(date) {
          return date.startOfQuarter();
        }
      }, {
        key: "endOf",
        value: function endOf(date) {
          return date.endOfQuarter();
        }
      }, {
        key: "getPrimaryWidth",
        value: function getPrimaryWidth() {
          return this.getCellWidth() * 3;
        }
      }, {
        key: "getDayOccupancyWidth",
        value: function getDayOccupancyWidth(date) {
          return this.cellWidth / date.getDaysInMonth();
        }
      }, {
        key: "getPrimaryDatePoints",
        value: function getPrimaryDatePoints() {
          var quarters = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["differenceInCalendarQuarters"])(this.end.addSeconds(1).value, this.start.value);
          var points = [];

          for (var i = 0; i < quarters; i++) {
            var start = this.start.addQuarters(i);
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](start, start.format('yyyy年QQQ'), this.getCellWidth() * 3 / 2 + i * (this.getCellWidth() * 3), _view__WEBPACK_IMPORTED_MODULE_1__["primaryDatePointTop"]);
            points.push(point);
          }

          return points;
        }
      }, {
        key: "getSecondaryDatePoints",
        value: function getSecondaryDatePoints() {
          var months = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["eachMonthOfInterval"])({
            start: this.start.value,
            end: this.end.value
          });
          var points = [];

          for (var i = 0; i < months.length; i++) {
            var start = new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"](months[i]);
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](start, "".concat(start.getMonth() + 1, "\u6708"), i * this.getCellWidth() + this.getCellWidth() / 2, _view__WEBPACK_IMPORTED_MODULE_1__["secondaryDatePointTop"]);
            points.push(point);
          }

          return points;
        }
      }]);

      return GanttViewMonth;
    }(_view__WEBPACK_IMPORTED_MODULE_1__["GanttView"]);
    /***/

  },

  /***/
  "../packages/gantt/src/views/quarter.ts":
  /*!**********************************************!*\
    !*** ../packages/gantt/src/views/quarter.ts ***!
    \**********************************************/

  /*! exports provided: GanttViewQuarter */

  /***/
  function packagesGanttSrcViewsQuarterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttViewQuarter", function () {
      return GanttViewQuarter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view */
    "../packages/gantt/src/views/view.ts");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var _class_date_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../class/date-point */
    "../packages/gantt/src/class/date-point.ts");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "../node_modules/date-fns/esm/index.js");

    var viewOptions = {
      start: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().addYears(-1).startOfYear(),
      end: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().addYears(1).endOfYear(),
      min: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().addYears(-2).startOfYear(),
      max: new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"]().addYears(2).endOfYear(),
      cellWidth: 500,
      addAmount: 1,
      addUnit: 'year'
    };

    var GanttViewQuarter = /*#__PURE__*/function (_view__WEBPACK_IMPORT3) {
      _inherits(GanttViewQuarter, _view__WEBPACK_IMPORT3);

      var _super5 = _createSuper(GanttViewQuarter);

      function GanttViewQuarter(start, end, options) {
        _classCallCheck(this, GanttViewQuarter);

        return _super5.call(this, start, end, Object.assign(viewOptions, options));
      }

      _createClass(GanttViewQuarter, [{
        key: "startOf",
        value: function startOf(date) {
          return date.startOfYear();
        }
      }, {
        key: "endOf",
        value: function endOf(date) {
          return date.endOfYear();
        }
      }, {
        key: "getPrimaryWidth",
        value: function getPrimaryWidth() {
          return this.getCellWidth() * 4;
        }
      }, {
        key: "getDayOccupancyWidth",
        value: function getDayOccupancyWidth(date) {
          return this.cellWidth / date.getDaysInQuarter();
        }
      }, {
        key: "getPrimaryDatePoints",
        value: function getPrimaryDatePoints() {
          var years = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["eachYearOfInterval"])({
            start: this.start.value,
            end: this.end.value
          });
          var points = [];

          for (var i = 0; i <= years.length; i++) {
            var start = new _utils_date__WEBPACK_IMPORTED_MODULE_2__["GanttDate"](years[i]);
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](start, "".concat(start.format('yyyy'), "\u5E74"), this.getCellWidth() * 4 / 2 + i * (this.getCellWidth() * 4), _view__WEBPACK_IMPORTED_MODULE_1__["primaryDatePointTop"]);
            points.push(point);
          }

          return points;
        }
      }, {
        key: "getSecondaryDatePoints",
        value: function getSecondaryDatePoints() {
          var quarters = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["differenceInCalendarQuarters"])(this.end.value, this.start.value);
          var points = [];

          for (var i = 0; i <= quarters; i++) {
            var start = this.start.addQuarters(i);
            var point = new _class_date_point__WEBPACK_IMPORTED_MODULE_3__["GanttDatePoint"](start, start.format('QQQ'), i * this.getCellWidth() + this.getCellWidth() / 2, _view__WEBPACK_IMPORTED_MODULE_1__["secondaryDatePointTop"]);
            points.push(point);
          }

          return points;
        }
      }]);

      return GanttViewQuarter;
    }(_view__WEBPACK_IMPORTED_MODULE_1__["GanttView"]);
    /***/

  },

  /***/
  "../packages/gantt/src/views/view.ts":
  /*!*******************************************!*\
    !*** ../packages/gantt/src/views/view.ts ***!
    \*******************************************/

  /*! exports provided: primaryDatePointTop, secondaryDatePointTop, GanttView */

  /***/
  function packagesGanttSrcViewsViewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "primaryDatePointTop", function () {
      return primaryDatePointTop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "secondaryDatePointTop", function () {
      return secondaryDatePointTop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GanttView", function () {
      return GanttView;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/date */
    "../packages/gantt/src/utils/date.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../node_modules/rxjs/_esm2015/index.js");

    var primaryDatePointTop = 18;
    var secondaryDatePointTop = 36;
    var viewOptions = {
      min: new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"]().addYears(-1).startOfYear(),
      max: new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"]().addYears(1).endOfYear()
    };

    var GanttView = /*#__PURE__*/function () {
      function GanttView(start, end, options) {
        _classCallCheck(this, GanttView);

        this.showTimeline = true;
        this.options = Object.assign({}, viewOptions, options);
        start = this.startOf(start.value < this.options.start.value ? start : this.options.start);
        end = this.endOf(end.value > this.options.end.value ? end : this.options.end);
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](start);
        this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](end);
        this.initialize();
      }

      _createClass(GanttView, [{
        key: "getDateIntervalWidth",
        value: function getDateIntervalWidth(start, end) {
          var result = 0;
          var days = Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__["differenceInDays"])(end.value, start.value);

          for (var i = 0; i < days; i++) {
            result += this.getDayOccupancyWidth(start.addDays(i));
          }

          return Number(result.toFixed(3));
        }
      }, {
        key: "initialize",
        value: function initialize() {
          this.primaryDatePoints = this.getPrimaryDatePoints();
          this.secondaryDatePoints = this.getSecondaryDatePoints();
          this.width = this.getWidth();
          this.cellWidth = this.getCellWidth();
          this.primaryWidth = this.getPrimaryWidth();
        }
      }, {
        key: "addStartDate",
        value: function addStartDate() {
          var start = this.startOf(this.start.add(this.options.addAmount * -1, this.options.addUnit));

          if (start.value >= this.options.min.value) {
            var origin = this.start;
            this.start$.next(start);
            this.initialize();
            return {
              start: this.start,
              end: origin
            };
          }

          return null;
        }
      }, {
        key: "addEndDate",
        value: function addEndDate() {
          var end = this.endOf(this.end.add(this.options.addAmount, this.options.addUnit));

          if (end.value <= this.options.max.value) {
            var origin = this.end;
            this.end$.next(end);
            this.initialize();
            return {
              start: origin,
              end: this.end
            };
          }

          return null;
        }
      }, {
        key: "updateDate",
        value: function updateDate(start, end) {
          start = this.startOf(start);
          end = this.endOf(end);

          if (start.value < this.start.value) {
            this.start$.next(start);
          }

          if (end.value > this.end.value) {
            this.end$.next(end);
          }

          this.initialize();
        } // 获取View的宽度

      }, {
        key: "getWidth",
        value: function getWidth() {
          return this.getCellWidth() * this.secondaryDatePoints.length;
        } // 获取单个网格的宽度

      }, {
        key: "getCellWidth",
        value: function getCellWidth() {
          return this.options.cellWidth;
        } // 获取当前时间的X坐标

      }, {
        key: "getTodayXPoint",
        value: function getTodayXPoint() {
          var toady = new _utils_date__WEBPACK_IMPORTED_MODULE_1__["GanttDate"]().startOfDay();

          if (toady.value > this.start.value && toady.value < this.end.value) {
            var x = this.getXPointByDate(toady) + this.getDayOccupancyWidth(toady) / 2;
            return x;
          } else {
            return null;
          }
        } // 获取指定时间的X坐标

      }, {
        key: "getXPointByDate",
        value: function getXPointByDate(date) {
          return this.getDateIntervalWidth(this.start, date);
        } // 根据X坐标获取对应时间

      }, {
        key: "getDateByXPoint",
        value: function getDateByXPoint(x) {
          var indexOfSecondaryDate = Math.floor(x / this.getCellWidth());
          var matchDate = this.secondaryDatePoints[indexOfSecondaryDate];
          var dayWidth = this.getDayOccupancyWidth(matchDate.start);

          if (dayWidth === this.getCellWidth()) {
            return matchDate.start;
          } else {
            var day = Math.floor(x % this.getCellWidth() / dayWidth) + 1;
            return matchDate.start.setDate(day);
          }
        } // 获取指定时间范围的宽度

      }, {
        key: "getDateRangeWidth",
        value: function getDateRangeWidth(start, end) {
          // addSeconds(1) 是因为计算相差天会以一个整天来计算 end时间一般是59分59秒不是一个整天，所以需要加1
          return this.getDateIntervalWidth(start, end.addSeconds(1));
        }
      }, {
        key: "start",
        get: function get() {
          return this.start$.getValue();
        }
      }, {
        key: "end",
        get: function get() {
          return this.end$.getValue();
        }
      }]);

      return GanttView;
    }();
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./examples/examples.component */
    "./src/app/examples/examples.component.ts");
    /* harmony import */


    var _flat_flat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./flat/flat.component */
    "./src/app/flat/flat.component.ts");

    var routes = [{
      path: 'examples',
      component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_3__["AppExamplesComponent"]
    }, {
      path: 'flat',
      component: _flat_flat_component__WEBPACK_IMPORTED_MODULE_4__["AppFlatExampleComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.isRoot = true;
      this.title = 'example';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.dg-main")], AppComponent.prototype, "isRoot", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'example-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _docgeni_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @docgeni/template */
    "../node_modules/@docgeni/template/fesm2015/docgeni-template.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _content_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content/config */
    "./src/app/content/config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _content_example_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./content/example-loader */
    "./src/app/content/example-loader.ts");
    /* harmony import */


    var _content_navigations_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/navigations.json */
    "./src/app/content/navigations.json");

    var _content_navigations_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./content/navigations.json */
    "./src/app/content/navigations.json", 1);
    /* harmony import */


    var ngx_gantt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-gantt */
    "../packages/gantt/src/public-api.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _examples_examples_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./examples/examples.component */
    "./src/app/examples/examples.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _flat_flat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./flat/flat.component */
    "./src/app/flat/flat.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _examples_examples_component__WEBPACK_IMPORTED_MODULE_9__["AppExamplesComponent"], _flat_flat_component__WEBPACK_IMPORTED_MODULE_12__["AppFlatExampleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _docgeni_template__WEBPACK_IMPORTED_MODULE_1__["DocgeniTemplateModule"], ngx_gantt__WEBPACK_IMPORTED_MODULE_7__["NgxGanttModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_toConsumableArray(_docgeni_template__WEBPACK_IMPORTED_MODULE_1__["routes"]))],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: _docgeni_template__WEBPACK_IMPORTED_MODULE_1__["initializeDocgeniSite"],
        deps: [_docgeni_template__WEBPACK_IMPORTED_MODULE_1__["GlobalContext"]],
        multi: true
      }, _content_example_loader__WEBPACK_IMPORTED_MODULE_5__["LIB_EXAMPLE_LOADER_PROVIDER"], {
        provide: _docgeni_template__WEBPACK_IMPORTED_MODULE_1__["CONFIG_TOKEN"],
        useValue: _content_config__WEBPACK_IMPORTED_MODULE_3__["config"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/content/component-examples.ts":
  /*!***********************************************!*\
    !*** ./src/app/content/component-examples.ts ***!
    \***********************************************/

  /*! exports provided: EXAMPLE_COMPONENTS */

  /***/
  function srcAppContentComponentExamplesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function () {
      return EXAMPLE_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var EXAMPLE_COMPONENTS = {};
    /***/
  },

  /***/
  "./src/app/content/config.ts":
  /*!***********************************!*\
    !*** ./src/app/content/config.ts ***!
    \***********************************/

  /*! exports provided: config */

  /***/
  function srcAppContentConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var config = {
      "title": "NgxGantt",
      "heading": "Ngx Gantt",
      "description": "A modern documentation generator for doc and Angular Lib",
      "mode": "site",
      "baseHref": "/",
      "heads": [],
      "locales": [{
        "key": "en-us",
        "name": "EN"
      }, {
        "key": "zh-cn",
        "name": "中文"
      }],
      "defaultLocale": "zh-cn",
      "repoUrl": "https://github.com/worktile/ngx-gantt"
    };
    /***/
  },

  /***/
  "./src/app/content/example-loader.ts":
  /*!*******************************************!*\
    !*** ./src/app/content/example-loader.ts ***!
    \*******************************************/

  /*! exports provided: LibExampleLoader, LIB_EXAMPLE_LOADER_PROVIDER */

  /***/
  function srcAppContentExampleLoaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibExampleLoader", function () {
      return LibExampleLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIB_EXAMPLE_LOADER_PROVIDER", function () {
      return LIB_EXAMPLE_LOADER_PROVIDER;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _docgeni_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @docgeni/template */
    "../node_modules/@docgeni/template/fesm2015/docgeni-template.js");
    /* harmony import */


    var _component_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component-examples */
    "./src/app/content/component-examples.ts");

    var LibExampleLoader = /*#__PURE__*/function (_docgeni_template__WE) {
      _inherits(LibExampleLoader, _docgeni_template__WE);

      var _super6 = _createSuper(LibExampleLoader);

      function LibExampleLoader() {
        _classCallCheck(this, LibExampleLoader);

        return _super6.apply(this, arguments);
      }

      _createClass(LibExampleLoader, [{
        key: "load",
        value: function load(exampleKey) {
          var _this25 = this;

          var example = _component_examples__WEBPACK_IMPORTED_MODULE_3__["EXAMPLE_COMPONENTS"][exampleKey];
          return new Promise(function (resolve) {
            _this25[example.module.importSpecifier]().then(function (result) {
              resolve({
                moduleType: result.EXAMPLES_MODULE,
                componentType: result.EXAMPLE_COMPONENTS[exampleKey],
                example: example
              });
            });
          });
        }
      }]);

      return LibExampleLoader;
    }(_docgeni_template__WEBPACK_IMPORTED_MODULE_2__["ExampleLoader"]);

    LibExampleLoader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LibExampleLoader);
    var LIB_EXAMPLE_LOADER_PROVIDER = {
      provide: _docgeni_template__WEBPACK_IMPORTED_MODULE_2__["ExampleLoader"],
      useClass: LibExampleLoader
    };
    /***/
  },

  /***/
  "./src/app/content/navigations.json":
  /*!******************************************!*\
    !*** ./src/app/content/navigations.json ***!
    \******************************************/

  /*! exports provided: en-us, zh-cn, default */

  /***/
  function srcAppContentNavigationsJson(module) {
    module.exports = JSON.parse("{\"en-us\":[{\"title\":\"Examples\",\"path\":\"examples\"},{\"title\":\"Flat\",\"path\":\"flat\"},{\"title\":\"GitHub\",\"path\":\"https://github.com/worktile/ngx-gantt\",\"isExternal\":true},{\"title\":\"Changelog\",\"path\":\"https://github.com/worktile/ngx-gantt/changelog.md\",\"isExternal\":true}],\"zh-cn\":[{\"id\":\"guide\",\"path\":\"guide\",\"title\":\"指南\",\"subtitle\":\"\",\"items\":[{\"id\":\"intro\",\"path\":\"\",\"title\":\"介绍\",\"subtitle\":\"\",\"contentPath\":\"/docs/guide/intro.html\"},{\"id\":\"getting-started\",\"path\":\"getting-started\",\"title\":\"快速开始\",\"subtitle\":\"\",\"contentPath\":\"/docs/guide/getting-started.html\"}]},{\"title\":\"Examples\",\"path\":\"examples\"},{\"title\":\"Flat\",\"path\":\"flat\"},{\"title\":\"GitHub\",\"path\":\"https://github.com/worktile/ngx-gantt\",\"isExternal\":true},{\"title\":\"更新日志\",\"path\":\"https://github.com/worktile/ngx-gantt/changelog.md\",\"isExternal\":true}]}");
    /***/
  },

  /***/
  "./src/app/examples/examples.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/examples/examples.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplesExamplesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlL3NyYy9hcHAvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/examples/examples.component.ts":
  /*!************************************************!*\
    !*** ./src/app/examples/examples.component.ts ***!
    \************************************************/

  /*! exports provided: AppExamplesComponent */

  /***/
  function srcAppExamplesExamplesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppExamplesComponent", function () {
      return AppExamplesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mocks */
    "./src/app/examples/mocks.ts");
    /* harmony import */


    var ngx_gantt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-gantt */
    "../packages/gantt/src/public-api.ts");

    var AppExamplesComponent = /*#__PURE__*/function () {
      function AppExamplesComponent() {
        _classCallCheck(this, AppExamplesComponent);

        this.items = _mocks__WEBPACK_IMPORTED_MODULE_2__["mockItems"];
        this.groups = _mocks__WEBPACK_IMPORTED_MODULE_2__["mockGroups"];
        this.options = {
          viewType: ngx_gantt__WEBPACK_IMPORTED_MODULE_3__["GanttViewType"].month,
          draggable: true,
          linkable: true
        };
        this["class"] = true;
      }

      _createClass(AppExamplesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "barClick",
        value: function barClick(event) {
          console.log(event);
        }
      }, {
        key: "lineClick",
        value: function lineClick(event) {
          console.log(event);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded(event) {
          this.groups = _toConsumableArray(this.groups);
          this.items = _toConsumableArray(this.items);
        }
      }, {
        key: "linkDragEnded",
        value: function linkDragEnded(event) {
          if (event.source.links && event.source.links.includes(event.target.id)) {
            return;
          }

          this.items.forEach(function (item) {
            if (item.id === event.source.id) {
              item.links = [].concat(_toConsumableArray(item.links || []), [event.target.id]);
            }
          });
          this.items = _toConsumableArray(this.items);
        }
      }, {
        key: "loadOnScroll",
        value: function loadOnScroll(event) {}
      }]);

      return AppExamplesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-demo')], AppExamplesComponent.prototype, "class", void 0);
    AppExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-examples-gantt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examples.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examples.component.scss */
      "./src/app/examples/examples.component.scss"))["default"]]
    })], AppExamplesComponent);
    /***/
  },

  /***/
  "./src/app/examples/mocks.ts":
  /*!***********************************!*\
    !*** ./src/app/examples/mocks.ts ***!
    \***********************************/

  /*! exports provided: mockGroups, mockItems */

  /***/
  function srcAppExamplesMocksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mockGroups", function () {
      return mockGroups;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mockItems", function () {
      return mockItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var mockGroups = [{
      id: '00001',
      title: 'Project 1'
    }, {
      id: '00002',
      title: 'Project 2'
    }, {
      id: '00003',
      title: 'Project 3'
    }, {
      id: '00004',
      title: 'Project 4'
    }, {
      id: '00005',
      title: 'Project 5'
    }];
    var mockItems = [{
      id: 'item-0101',
      title: 'VERSION 0101',
      start: 1590035675,
      group_id: '00001',
      color: '#FF0000'
    }, {
      id: 'item-0102',
      title: 'VERSION 0102',
      start: 1590935675,
      end: 1591318400,
      color: '#9ACD32',
      group_id: '00001'
    }, {
      id: 'item-0103',
      title: 'VERSION 0103',
      end: 1592018400,
      group_id: '00001'
    }, {
      id: 'item-0201',
      title: 'VERSION 0201',
      group_id: '00002'
    }, {
      id: 'item-0202',
      title: 'VERSION 0202',
      start: 1591035675,
      end: 1593018400,
      group_id: '00002',
      links: ['item-0203']
    }, {
      id: 'item-0203',
      title: 'VERSION 0203',
      start: 1590235675,
      end: 1591718400,
      group_id: '00002',
      links: ['item-0204']
    }, {
      id: 'item-0204',
      title: 'VERSION 0204',
      start: 1591035675,
      end: 1592418400,
      group_id: '00002',
      links: ['item-0301', 'item-0402']
    }, {
      id: 'item-0301',
      title: 'VERSION 0301',
      start: 1596035675,
      end: 1599018400,
      group_id: '00003'
    }, {
      id: 'item-0302',
      title: 'VERSION 0302',
      start: 1592035675,
      end: 1598018400,
      group_id: '00003'
    }, {
      id: 'item-0303',
      title: 'VERSION 0303',
      start: 1590135675,
      end: 1594018400,
      group_id: '00003'
    }, {
      id: 'item-0401',
      title: 'VERSION 0401',
      start: 1589035675,
      end: 1594018400,
      group_id: '00004'
    }, {
      id: 'item-0402',
      title: 'VERSION 0402',
      start: 1596035675,
      end: 1599918400,
      group_id: '00004'
    }, {
      id: 'item-0403',
      title: 'VERSION 0403',
      start: 1593035675,
      end: 1599018400,
      group_id: '00004'
    }, {
      id: 'item-0404',
      title: 'VERSION 0404',
      start: 1591035675,
      end: 1592918400,
      group_id: '00004'
    }, {
      id: 'item-0501',
      title: 'VERSION 0501',
      start: 1599935675,
      end: 1602018400,
      group_id: '00005'
    }, {
      id: 'item-0502',
      title: 'VERSION 0502',
      start: 1591035675,
      end: 1594018400,
      group_id: '00005'
    }, {
      id: 'item-0503',
      title: 'VERSION 0503',
      start: 1595035675,
      end: 1599018400,
      group_id: '00005'
    }];
    /***/
  },

  /***/
  "./src/app/flat/flat.component.scss":
  /*!******************************************!*\
    !*** ./src/app/flat/flat.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFlatFlatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlL3NyYy9hcHAvZmxhdC9mbGF0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/flat/flat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/flat/flat.component.ts ***!
    \****************************************/

  /*! exports provided: AppFlatExampleComponent */

  /***/
  function srcAppFlatFlatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFlatExampleComponent", function () {
      return AppFlatExampleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _examples_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../examples/mocks */
    "./src/app/examples/mocks.ts");
    /* harmony import */


    var ngx_gantt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-gantt */
    "../packages/gantt/src/public-api.ts");

    var AppFlatExampleComponent = /*#__PURE__*/function () {
      function AppFlatExampleComponent() {
        _classCallCheck(this, AppFlatExampleComponent);

        this.items = _examples_mocks__WEBPACK_IMPORTED_MODULE_2__["mockItems"];
        this.groups = _examples_mocks__WEBPACK_IMPORTED_MODULE_2__["mockGroups"];
        this.options = {
          viewType: ngx_gantt__WEBPACK_IMPORTED_MODULE_3__["GanttViewType"].month,
          draggable: true,
          mergeIntervalDays: 3,
          styles: {
            lineHeight: 50
          }
        };
        this["class"] = true;
      }

      _createClass(AppFlatExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppFlatExampleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.gantt-demo')], AppFlatExampleComponent.prototype, "class", void 0);
    AppFlatExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'example-flat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./flat.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/flat/flat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./flat.component.scss */
      "./src/app/flat/flat.component.scss"))["default"]]
    })], AppFlatExampleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Walker/Documents/worktile/ngx-gantt/example/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map