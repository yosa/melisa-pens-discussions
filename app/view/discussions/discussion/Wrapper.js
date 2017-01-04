Ext.define('Melisa.pens.view.discussions.discussion.Wrapper', {
    extend: 'Ext.Container',
    alias: 'widget.discussion',
    
    requires: [
        'Melisa.pens.view.discussions.discussion.Header',
        'Melisa.pens.view.discussions.discussion.Actions',
        'Melisa.pens.view.discussions.discussion.Text',
        'Melisa.pens.view.discussions.discussion.Editor',
        'Melisa.pens.view.discussions.discussion.Answers',
        'Melisa.pens.view.discussions.discussion.WrapperController'
    ],
    
    controller: 'discussioncontroller',
    cls: 'discussion enter',
    viewModel: {
        data: {
            username: null,
            votes: 1
        }
    },
    items: [
        {
            xtype: 'discussionheader'
        },
        {
            xtype: 'discussiontext'
        },
        {
            xtype: 'discussionactions'            
        },
        {
            xtype: 'discussioneditor'
        },
        {
            xtype: 'discussionanswers'
        }
    ]
    
});
