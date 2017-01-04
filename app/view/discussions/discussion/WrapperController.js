Ext.define('Melisa.pens.view.discussions.discussion.WrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.discussioncontroller',
    
    init: function() {
        
        var me = this;
        me.getView().on('painted', me.onPainted, me, {
            single: true
        });
        
    },
    
    onPainted: function() {
        
        var me = this;
        
        me.getView().addCls('active');
        
    },
    
    onTapBtnVoteUp: function() {
        
        var me = this,
            viewModel = me.getViewModel(),
            votes = viewModel.get('votes');
    
        viewModel.set('votes', ++votes);
        
    },
    
    onTapBtnVoteDown: function() {
        
        var me = this,
            viewModel = me.getViewModel(),
            votes = viewModel.get('votes');
    
        viewModel.set('votes', --votes);
        
    },
    
    onTapBtnReply: function() {
        
        var me = this,
            discussioneditor = me.getView().down('discussioneditor');
        
        discussioneditor.show();
        
    }
    
});
