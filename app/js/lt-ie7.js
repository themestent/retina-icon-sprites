/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
    function addIcon(el, entity) {
        var html = el.innerHTML;
        el.innerHTML = '<span style="font-family: \'ThemesTent-Source-Pack\'">' + entity + '</span>' + html;
    }
    var icons = {
            'ttf-html5' : '&#xe009;',
            'ttf-css3' : '&#xe001;',
            'ttf-chrome' : '&#xe002;',
            'ttf-firefox' : '&#xe003;',
            'ttf-IE' : '&#xe004;',
            'ttf-opera' : '&#xe005;',
            'ttf-safari' : '&#xe006;',
            'ttf-github' : '&#xe007;',
            'ttf-IcoMoon' : '&#xe008;'
        },
        els = document.getElementsByTagName('*'),
        i, attr, html, c, el;
    for (i = 0; i < els.length; i += 1) {
        el = els[i];
        attr = el.getAttribute('data-icon');
        if (attr) {
            addIcon(el, attr);
        }
        c = el.className;
        c = c.match(/ttf-[^\s'"]+/);
        if (c && icons[c[0]]) {
            addIcon(el, icons[c[0]]);
        }
    }
};