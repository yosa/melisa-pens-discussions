Ext.define('Melisa.pens.view.discussions.login.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    
    onTapBtnEnter: function() {
        
        var view = this.getView(),
            values = view.getValues();
        
        values.name = values.name || 'Guest';
        values.avatar = values.avatar || Ext.manifest.melisa.avatar;
        
        view.hide();
        
        Ext.GlobalEvents.fireEvent('showdiscussion', values);
        
    }
    
});
