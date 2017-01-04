/**
 * inspirate by http://leonidasesteban.github.io/react-discussions/
 * source code in https://github.com/yosa/melisa-pens-discussions
 */

Ext.manifest = {
	melisa: {
		server: window.location.href.indexOf('codepen') === -1 ? window.location.href :
            'https://yosa.github.io/melisa-pens-discussions/',
        avatar: 'https://static.platzi.com/media/avatares/default.png'
	}
};

Ext.application({
    name: 'Melisa.pens',
    
    paths: {
        'Melisa.pens': Ext.manifest.melisa.server + 'app'
    },
    
    requires: [
        'Melisa.pens.view.discussions.Wrapper'
    ],
    
    mainView: 'Melisa.pens.view.discussions.Wrapper'
    
});
