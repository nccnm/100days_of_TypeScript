(function(window) {
    interface IAction {
        name?: string;
        icon: string;
        title: string;
        result: () => void;
    }

    interface IActions {
        [key: string]: IAction;
    }

    interface IClasses {
        [key: string]: string;
    }

    class Settings {
        element: HTMLElement;

        onChange: (element: string) => void;

        styleWithCSS: boolean = false;

        actions: Array<IAction | string> = [];

        classes = _classes;
    }

    const _actions: IActions = {
        bold: {
            icon: '<b>B</b>',
            title: 'Bold',
            result: () => exec('bold')
        },
        italic: {
            icon: '<i>I</i>',
            title: 'Italic',
            result: () => exec('italic')
        },
        underline: {
            icon: '<u>U</u>',
            title: 'Underline',
            result: () => exec('underline')
        },
        strikethrough: {
            icon: '<strike>S</strike>',
            title: 'Strike-through',
            result: () => exec('strikeThrough')
        },
        heading1: {
            icon: '<b>H<sub>1</sub></b>',
            title: 'Heading 1',
            result: () => exec('formatBlock', '<H1>')
        },
        heading2: {
            icon: '<b>H<sub>2</sub></b>',
            title: 'Heading 2',
            result: () => exec('formatBlock', '<H2>')
        },
        paragraph: {
            icon: '&#182;',
            title: 'Paragraph',
            result: () => exec('formatBlock', '<P>')
        },
        quote: {
            icon: '&#8220; &#8221;',
            title: 'Quote',
            result: () => exec('formatBlock', '<BLOCKQUOTE>')
        },
        olist: {
            icon: '&#35;',
            title: 'Ordered List',
            result: () => exec('insertOrderedList')
        },
        ulist: {
            icon: '&#8226;',
            title: 'Unordered List',
            result: () => exec('insertUnorderedList')
        },
        code: {
            icon: '&lt;/&gt;',
            title: 'Code',
            result: () => exec('formatBlock', '<PRE>')
        },
        line: {
            icon: '&#8213;',
            title: 'Horizontal Line',
            result: () => exec('insertHorizontalRule')
        },
        link: {
            icon: '&#128279;',
            title: 'Link',
            result: () => {
                const url = window.prompt('Enter the link URL');
                if (url) exec('createLink', url);
            }
        },
        image: {
            icon: '&#128247;',
            title: 'Image',
            result: () => {
                const url = window.prompt('Enter the image URL');
                if (url) exec('insertImage', url);
            }
        }
    };

    const _classes: IClasses = {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content'
    };

    const preventTab = (event: KeyboardEvent) => {
        if (event.which === 9) event.preventDefault();
    };

    function setActionsDefaults(actions: Array<IAction | string>) {
        if (!actions) {
            return Object.keys(_actions).map(action => _actions[action]);
        }

        return actions
            .map(function(action) {
                if (typeof action === 'string') {
                    return _actions[action];
                }

                if (action.name && _actions[action.name]) {
                    return { ..._actions[action.name], ...action };
                }

                return action;
            })
            .filter(action => !!action) as Array<IAction>;
    }

    function setClassesDefaults(classes: IClasses) {
        return { ..._classes, ...classes };
    }

    function createActionBar(parent: HTMLElement, className: string) {
        const actionbar = document.createElement('div');

        actionbar.className = className;
        parent.appendChild(actionbar);

        return actionbar;
    }

    function createElementContent(parent: HTMLElement, contentClassName: string, onChange: (element: string) => void) {
        const content = document.createElement('div') as HTMLElement;

        content.contentEditable = 'true';
        content.className = contentClassName;
        content.oninput = (event: Event) => onChange((event.target as HTMLElement).innerHTML);
        content.onkeydown = preventTab;

        parent.appendChild(content);
    }

    function createActionButtons(actions: Array<IAction>, buttonClassName: string, actionbar: HTMLElement) {
        actions.forEach(function(action) {
            const button = document.createElement('button');

            button.className = buttonClassName;
            button.innerHTML = action.icon;
            button.title = action.title;
            button.onclick = action.result;

            actionbar.appendChild(button);
        });
    }

    function executeStyleWithCSSCommand(styleWithCSS: boolean) {
        if (styleWithCSS) {
            exec('styleWithCSS');
        }
    }

    const exec = (command: string, value: string | null = null) => {
        document.execCommand(command, false, value);
    };

    const init = (settings: Settings) => {
        // 1. Actions
        settings.actions = setActionsDefaults(settings.actions);

        // 2. Classes
        settings.classes = setClassesDefaults(settings.classes);

        // 3. Create a action bar
        const actionbar = createActionBar(settings.element, settings.classes.actionbar);

        // 4. Createa a element content
        createElementContent(settings.element, settings.classes.content, settings.onChange);

        // 5. Create action buttons
        createActionButtons(settings.actions as Array<IAction>, settings.classes.button, actionbar);

        // 6. Execute styleWithCSS command
        executeStyleWithCSSCommand(settings.styleWithCSS);

        return settings.element;
    };

    (window as any).pell = {
        init,
        exec
    };
})(window);
