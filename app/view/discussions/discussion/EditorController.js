Ext.define('Melisa.pens.view.discussions.discussion.EditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.discussioneditor',
    
    init: function() {
        
        var me = this;
        
        me.getView().on('painted', me.onPainted, me);
        
    },
    
    onPainted: function() {
        
        var me = this;
        
        me.getView().down('textareafield').focus();
        
    },
    
    onKeyupQuestion: function(field, e) {
        
        if( e.getKey() === Ext.event.Event.ESC) {
            
            this.getView().hide();
            return;
            
        }
        
        if( e.getKey() !== Ext.event.Event.ENTER || Ext.isEmpty(field.getValue())) {
            
            return;
            
        }
        
        var me = this,
            view = me.getView(),
            discussionanswers = view.up().down('discussionanswers');
        
        discussionanswers.show();
        
        Ext.GlobalEvents.fireEvent('creatediscussion', field.getValue(), discussionanswers);
        
        view.hide();
        view.down('textareafield').reset();
        
    }
    
});
