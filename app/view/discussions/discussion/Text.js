Ext.define('Melisa.pens.view.discussions.discussion.Text', {
    extend: 'Ext.Component',
    alias: 'widget.discussiontext',
    
    cls: 'text',
    bind: {
        html: '{question}'
    }
});
