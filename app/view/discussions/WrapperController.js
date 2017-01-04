Ext.define('Melisa.pens.view.discussions.WrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wrapper',
    
    listen: {
        global: {
            creatediscussion: 'createDiscussion',
            showdiscussion: 'onShowDiscussion'
        }
    },
    
    init: function() {
        
        Ext.Viewport.add({
            xtype: 'user'
        });
        
    },
    
    onShowDiscussion: function(user) {
        
        var me = this;
        
        me.getViewModel().set('user', user);
        me.getView().show();
        
    },
    
    onKeyupQuestion: function(field, e) {
        
        if( e.getKey() !== Ext.event.Event.ENTER || Ext.isEmpty(field.getValue())) {
            
            return;
            
        }
        
        this.createDiscussion(field.getValue());
        field.reset();
        field.focus();
        
    },
    
    createDiscussion: function(question, parent) {
        
        var me = this,
            conDiscussionList = me.lookup('conDiscussionList'),
            viewModel = me.getViewModel(),
            discussion = {
                xtype: 'discussion',
                viewModel: {
                    data: {
                        user: {
                            name: viewModel.get('user.name'),
                            avatar: viewModel.get('user.avatar')
                        },
                        question: question,
                        date: new Date(),
                        votes: 1
                    }
                }
            };
        
        if(parent) {
            
            parent.insert(0, discussion);
            
        } else {
            
            conDiscussionList.insert(0, discussion);
            
        }
        
    }
    
});