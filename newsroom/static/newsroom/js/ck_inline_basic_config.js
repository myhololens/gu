CKEDITOR.plugins.addExternal( 'codemirror', '/static/newsroom/js/ckeditor/plugins/codemirror/', 'plugin.js' );

CKEDITOR.plugins.addExternal( 'saveedits', '/static/newsroom/js/ckeditor/plugins/saveedits/', 'plugin.js' );


CKEDITOR.editorConfig = function( config ) {
    config.toolbarGroups = [
	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	{ name: 'links', groups: [ 'links' ] },
	{ name: 'insert', groups: [ 'insert' ] },
	{ name: 'forms', groups: [ 'forms' ] },
	{ name: 'tools', groups: [ 'tools' ] },
	{ name: 'others', groups: [ 'others' ] },
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	{ name: 'styles', groups: [ 'styles' ] },
	{ name: 'colors', groups: [ 'colors' ] },
	{ name: 'about', groups: [ 'about' ] }
    ];

    config.extraPlugins = 'sourcedialog,codemirror,saveedits';

    config.removeButtons = 'Underline,Subscript,Superscript,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Image,Table,HorizontalRule,SpecialChar,Maximize,About,Styles,Format,Blockquote,Outdent,Indent,BulletedList,NumberedList,Strike,About,Source,AutoComplete,autoFormat,CommentSelectedRange,UncommentSelectedRange';
    config.enterMode = CKEDITOR.ENTER_BR;
};