Ext.define('Melisa.pens.view.discussions.discussion.Actions', {
    extend: 'Ext.Toolbar',
    alias: 'widget.discussionactions',
    
    cls: 'actions',
    items: [
        {
            iconCls: 'x-fa fa fa-plus-circle',
            listeners: {
                tap: 'onTapBtnVoteUp'
            }
        },
        {
            iconCls: 'x-fa fa fa-minus-circle',
            listeners: {
                tap: 'onTapBtnVoteDown'
            }
        },
        {
            xtype: 'label',
            bind: {
                html: '{votes} points'
            }
        },
        {
            iconCls: 'x-fa fa fa-reply',
            text: 'Reply',
            listeners: {
                tap: 'onTapBtnReply'
            }
        },
        {
            xtype: 'component',
            cls: 'answers',
            tpl: '{total} answers',
            data: {
                total: 0
            }
        }
    ]
});
