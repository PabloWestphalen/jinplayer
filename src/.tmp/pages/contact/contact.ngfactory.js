/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './contact';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from 'ionic-angular/components/list/list';
import * as import16 from 'ionic-angular/components/item/item';
import * as import17 from 'ionic-angular/components/list/list-header';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from 'ionic-angular/components/icon/icon';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import32 from 'ionic-angular/util/form';
var renderType_ContactPage_Host = null;
var _View_ContactPage_Host0 = (function (_super) {
    __extends(_View_ContactPage_Host0, _super);
    function _View_ContactPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage_Host0, renderType_ContactPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-contact', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ContactPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ContactPage_0_4 = new import3.ContactPage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._ContactPage_0_4, [], compView_0);
        compView_0.create(this._ContactPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ContactPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ContactPage) && (0 === requestNodeIndex))) {
            return this._ContactPage_0_4;
        }
        return notFoundResult;
    };
    return _View_ContactPage_Host0;
}(import1.AppView));
function viewFactory_ContactPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactPage_Host === null)) {
        (renderType_ContactPage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_ContactPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ContactPageNgFactory = new import10.ComponentFactory('page-contact', viewFactory_ContactPage_Host0, import3.ContactPage);
var styles_ContactPage = [];
var renderType_ContactPage = null;
var _View_ContactPage0 = (function (_super) {
    __extends(_View_ContactPage0, _super);
    function _View_ContactPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage0, renderType_ContactPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import25.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Contact\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import26.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import15.List(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import31.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import16.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import17.ListHeader(this.parentInjector.get(import20.Config), this.renderer, new import21.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import18.QueryList();
        this._query_Button_13_1 = new import18.QueryList();
        this._query_Icon_13_2 = new import18.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, 'Follow us on Twitter', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'item item-block');
        this._appEl_16 = new import2.AppElement(16, 11, this, this._el_16);
        var compView_16 = import31.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import16.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import16.ItemContent();
        this._query_Label_16_0 = new import18.QueryList();
        this._query_Button_16_1 = new import18.QueryList();
        this._query_Icon_16_2 = new import18.QueryList();
        this._appEl_16.initComponent(this._Item_16_4, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_18, 'item-left', '');
        this.renderer.setElementAttribute(this._el_18, 'name', 'ionic');
        this.renderer.setElementAttribute(this._el_18, 'role', 'img');
        this._Icon_18_3 = new import19.Icon(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_18), this.renderer);
        this._text_19 = this.renderer.createText(null, '\n      @ionicframework\n    ', null);
        this._query_Label_16_0.reset([]);
        this._Item_16_4.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4, [
            [].concat([this._el_18]),
            [],
            [].concat([
                this._text_17,
                this._text_19
            ]),
            [],
            []
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_21
            ]),
            []
        ], null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22
        ], [], []);
        return null;
    };
    _View_ContactPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import16.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4;
        }
        if (((token === import17.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5;
        }
        if (((token === import19.Icon) && (18 === requestNodeIndex))) {
            return this._Icon_18_3;
        }
        if (((token === import16.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_16_4;
        }
        if (((token === import16.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_16_5;
        }
        if (((token === import15.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._List_11_3;
        }
        if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_ContactPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_3 = 'ionic';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Icon_18_3.name = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_16_1.dirty) {
                this._query_Button_16_1.reset([]);
                this._Item_16_4._buttons = this._query_Button_16_1;
                this._query_Button_16_1.notifyOnChanges();
            }
            if (this._query_Icon_16_2.dirty) {
                this._query_Icon_16_2.reset([this._Icon_18_3]);
                this._Item_16_4._icons = this._query_Icon_16_2;
                this._query_Icon_16_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Icon_18_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_18, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_ContactPage0.prototype.destroyInternal = function () {
        this._Icon_18_3.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    return _View_ContactPage0;
}(import1.AppView));
export function viewFactory_ContactPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactPage === null)) {
        (renderType_ContactPage = viewUtils.createRenderComponentType('/Users/psutherland/Desktop/Polyonic/src/.tmp/pages/contact/contact.html', 0, import9.ViewEncapsulation.None, styles_ContactPage, {}));
    }
    return new _View_ContactPage0(viewUtils, parentInjector, declarationEl);
}
