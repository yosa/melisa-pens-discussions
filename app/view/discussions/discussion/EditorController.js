Ext.define('Melisa.pens.view.discussions.discussion.EditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.discussioneditor',
    
    init: function() {
        
        var me = this;
        
        me.getView().on('painted', me.onPainted, me);
        
    },
    
    onPainted: function() {
        
        var me = this;
        
        me.getView().down('textfield').focus();
        
    },
    
    onTapBtnSend: function() {
        
        var me = this,
            discussion = me.getView().down('textfield').getValue();
        
        if( Ext.isEmpty(discussion)) {
            
            return;
            
        }
        
        me.createDiscussion(discussion);
        
    },
    
    onKeyupQuestion: function(field, e) {
        
        var me = this;
        
        if( e.getKey() === Ext.event.Event.ESC) {
            
            me.getView().hide();
            return;
            
        }
        
        if( e.getKey() !== Ext.event.Event.ENTER || Ext.isEmpty(field.getValue())) {
            
            return;
            
        }
        
        me.createDiscussion(field.getValue());
        
    },
    
    createDiscussion: function(question) {
        
        var me = this,
            view = me.getView(),
            discussionanswers = view.up().down('discussionanswers');
        
        discussionanswers.show();
        
        Ext.GlobalEvents.fireEvent('creatediscussion', question, discussionanswers);
        
        view.hide();
        view.down('textfield').reset();
        
    }
    
});
