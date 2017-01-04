Ext.define('Melisa.pens.view.discussions.discussion.Header', {
    extend: 'Ext.Toolbar',
    alias: 'widget.discussionheader',
    
    layout: 'hbox',
    cls: 'header',
    defaults: {
        flex: 1
    },
    items: [
        {
            xtype: 'container',
            cls: 'avatar',
            tpl: [
                '<img class="image" src="{avatar}" />',
                '<a href="#" title="Ver perfil de usuario" target="_blank">{name}</a>'
            ],
            bind: {
                data: '{user}'
            },
            data: {
                avatar: 'https://static.platzi.com/media/avatares/default.png',
                username: 'Guest'
            }
        },
        {
            xtype: 'container',
            cls: 'date',
            tpl: '{date} minutes ago',
            data: {
                date: 32
            }
        }
    ]
});
