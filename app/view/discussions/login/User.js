Ext.define('Melisa.pens.view.discussions.login.User', {
    extend: 'Ext.form.Panel',
    alias: 'widget.user',
    
    requires: [
        'Melisa.pens.view.discussions.login.UserController'
    ],
    
    controller: 'user',
    cls: 'login',
    fullscreen: true,
    modal: true,
    items: [
        {
            xtype: 'container',
            cls: 'background',
            flex: 1
        },
        {
            xtype: 'container',
            cls: 'credentials',
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'middle'
            },
            items: [
                {
                    xtype: 'textfield',
                    label: "What's your name?",
                    name: 'name',
                    placeHolder: 'Write your name'
                },
                {
                    xtype: 'textfield',
                    label: 'Paste an image url for your avatar',
                    name: 'avatar',
                    placeHolder: 'example : https://pbs.twimg.com/profile_images/480073396072742912/h6VGOhH6.jpeg'
                },
                {
                    xtype: 'button',
                    text: 'Enter',
                    listeners: {
                        tap: 'onTapBtnEnter'
                    }
                }
            ]
        }
    ]
});
