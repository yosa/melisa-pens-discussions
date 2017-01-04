Ext.define('Melisa.pens.view.discussions.discussion.Editor', {
    extend: 'Ext.Container',
    alias: 'widget.discussioneditor',
    
    requires: [
        'Melisa.pens.view.discussions.discussion.EditorController'
    ],
    
    controller: 'discussioneditor',
    cls: 'editor',
    layout: 'hbox',
    hidden: true,
    items: [
        {
            xtype: 'textareafield',
            placeHolder: 'Add your reply',
            flex: 1,
            listeners: {
                keyup: 'onKeyupQuestion'
            }
        },
        {
            xtype: 'button',
            text: 'Send',
            flex: .1
        }
    ]
});