///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        UIBase = baidu.editor.ui.UIBase;

    var LinkPicker = baidu.editor.ui.LinkPicker = function (options) {
        this.initOptions(options);
        this.initLinkPicker();
    };
    LinkPicker.prototype = {
        initLinkPicker:function () {
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl:function () {
            var list = this.editor.options.linkList, arr = [];

            arr.push('<div id="##" class="edui-linkpicker %%">' +
                '<div class="edui-linkpicker-body">');
            for (var i = 0, item; item = list[i++];) {
                arr.push('<div onclick="$$._onClick(event);" class="edui-linkpicker-item" stateful>' + item.title + '</div>');
            }
            arr.push('</div>' +
                '<div onclick="$$._showDialog(event);" class="edui-linkpicker-edit edui-linkpicker-item">编辑</div>' +
                ' </div>');

            return arr.join("");
        },
        getStateDom:function () {
            return this.target;
        },
        _showDialog:function (evt) {
            this.editor.getDialog("link").open();
            Popup.postHide(evt);
        },
        _onClick:function (evt) {

        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(LinkPicker, UIBase);
    utils.extend(LinkPicker.prototype, Stateful, true);
})();


