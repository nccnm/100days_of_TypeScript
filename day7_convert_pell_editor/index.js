"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function (window) {
    var Settings = /** @class */ (function () {
        function Settings() {
            this.styleWithCSS = false;
            this.actions = [];
            this.classes = _classes;
        }
        return Settings;
    }());
    var _actions = {
        bold: {
            icon: '<b>B</b>',
            title: 'Bold',
            result: function () { return exec('bold'); }
        },
        italic: {
            icon: '<i>I</i>',
            title: 'Italic',
            result: function () { return exec('italic'); }
        },
        underline: {
            icon: '<u>U</u>',
            title: 'Underline',
            result: function () { return exec('underline'); }
        },
        strikethrough: {
            icon: '<strike>S</strike>',
            title: 'Strike-through',
            result: function () { return exec('strikeThrough'); }
        },
        heading1: {
            icon: '<b>H<sub>1</sub></b>',
            title: 'Heading 1',
            result: function () { return exec('formatBlock', '<H1>'); }
        },
        heading2: {
            icon: '<b>H<sub>2</sub></b>',
            title: 'Heading 2',
            result: function () { return exec('formatBlock', '<H2>'); }
        },
        paragraph: {
            icon: '&#182;',
            title: 'Paragraph',
            result: function () { return exec('formatBlock', '<P>'); }
        },
        quote: {
            icon: '&#8220; &#8221;',
            title: 'Quote',
            result: function () { return exec('formatBlock', '<BLOCKQUOTE>'); }
        },
        olist: {
            icon: '&#35;',
            title: 'Ordered List',
            result: function () { return exec('insertOrderedList'); }
        },
        ulist: {
            icon: '&#8226;',
            title: 'Unordered List',
            result: function () { return exec('insertUnorderedList'); }
        },
        code: {
            icon: '&lt;/&gt;',
            title: 'Code',
            result: function () { return exec('formatBlock', '<PRE>'); }
        },
        line: {
            icon: '&#8213;',
            title: 'Horizontal Line',
            result: function () { return exec('insertHorizontalRule'); }
        },
        link: {
            icon: '&#128279;',
            title: 'Link',
            result: function () {
                var url = window.prompt('Enter the link URL');
                if (url)
                    exec('createLink', url);
            }
        },
        image: {
            icon: '&#128247;',
            title: 'Image',
            result: function () {
                var url = window.prompt('Enter the image URL');
                if (url)
                    exec('insertImage', url);
            }
        }
    };
    var _classes = {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content'
    };
    var preventTab = function (event) {
        if (event.which === 9)
            event.preventDefault();
    };
    function setActionsDefaults(actions) {
        if (!actions) {
            return Object.keys(_actions).map(function (action) { return _actions[action]; });
        }
        return actions
            .map(function (action) {
            if (typeof action === 'string') {
                return _actions[action];
            }
            if (action.name && _actions[action.name]) {
                return __assign({}, _actions[action.name], action);
            }
            return action;
        })
            .filter(function (action) { return !!action; });
    }
    function setClassesDefaults(classes) {
        return __assign({}, _classes, classes);
    }
    function createActionBar(parent, className) {
        var actionbar = document.createElement('div');
        actionbar.className = className;
        parent.appendChild(actionbar);
        return actionbar;
    }
    function createElementContent(parent, contentClassName, onChange) {
        var content = document.createElement('div');
        content.contentEditable = 'true';
        content.className = contentClassName;
        content.oninput = function (event) { return onChange(event.target.innerHTML); };
        content.onkeydown = preventTab;
        parent.appendChild(content);
    }
    function createActionButtons(actions, buttonClassName, actionbar) {
        actions.forEach(function (action) {
            var button = document.createElement('button');
            button.className = buttonClassName;
            button.innerHTML = action.icon;
            button.title = action.title;
            button.onclick = action.result;
            actionbar.appendChild(button);
        });
    }
    function executeStyleWithCSSCommand(styleWithCSS) {
        if (styleWithCSS) {
            exec('styleWithCSS');
        }
    }
    var exec = function (command, value) {
        if (value === void 0) { value = null; }
        document.execCommand(command, false, value);
    };
    var init = function (settings) {
        // 1. Actions
        settings.actions = setActionsDefaults(settings.actions);
        // 2. Classes
        settings.classes = setClassesDefaults(settings.classes);
        // 3. Create a action bar
        var actionbar = createActionBar(settings.element, settings.classes.actionbar);
        // 4. Createa a element content
        createElementContent(settings.element, settings.classes.content, settings.onChange);
        // 5. Create action buttons
        createActionButtons(settings.actions, settings.classes.button, actionbar);
        // 6. Execute styleWithCSS command
        executeStyleWithCSSCommand(settings.styleWithCSS);
        return settings.element;
    };
    window.pell = {
        init: init,
        exec: exec
    };
})(window);
