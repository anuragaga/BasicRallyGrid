Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',


   launch: function(){
	 console.log('Our First Rally App!!!');
        this._loadData();
   },


    _loadData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
         model: 'User Story',
         autoLoad: true,
         listeners: {
              load: function(myStore, myData, success) {
              console.log('get data', myStore, myData, success);
		     this._loadGrid(myStore);
              },
		 scope: this
	 },
    fetch: ['FormattedID' , 'Name', 'ScheduleState']

	});
     },


	_loadGrid: function(myGridStore) {
                      var myGrid =  Ext.create('Rally.ui.grid.Grid', {
                              store: myGridStore,
                              columnCfgs: [
                                      'FormattedID',
                                      'Name',
                                      'ScheduleState',
                              ]
                      });
		console.log('what is this' , this);
		this.add(myGridStore);
	}
});
