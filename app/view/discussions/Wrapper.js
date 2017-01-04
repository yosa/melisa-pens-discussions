Ext.define('Melisa.pens.view.discussions.Wrapper', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.pens.view.discussions.WrapperController',
        'Melisa.pens.view.discussions.discussion.Wrapper',
        'Melisa.pens.view.discussions.login.User'
    ],
    
    controller: 'wrapper',
    hidden: true,
    viewModel: {
        user: {
            name: null,
            avatar: null
        }
    },
    layout: {
        type: 'hbox',
        pack: 'center'
    },
    defaults: {
        hideAnimation: 'fadeOut',
        showAnimation: {
            type: 'slide',
            direction: 'right'
        }
    },
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'textfield',
                    reference: 'description',
                    placeHolder: 'Write your question',
                    flex: 1,
                    listeners: {
                        keyup: 'onKeyupQuestion'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Send',
                    listeners: {
                        tap: 'onTapBtnSend'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            reference: 'conDiscussionList',
            userCls: 'discussion-list',
            scrollable: true,
            flex: 1
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'label',
                    bind: {
                        html: 'Hi {user.name}'
                    }
                },
                '->',
                {
                    xtype: 'component',
                    bind: {
                        html: '<img src="{user.avatar}" />'
                    }
                }
            ]
        }
    ]
});
