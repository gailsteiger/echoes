define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({collection:null,view:null,render:function(){return this.renderCollection(),this},renderCollection:function(){this.resetViews(),this.$el.empty(),this.collection.each(function(e){var t=this.views.length;this.views.push(new this.view({model:e})),this.delegateBroadcasts(this.views[t]),this.$el.append(this.views[t].render().el)},this),this.onRenderComplete&&this.onRenderComplete()},delegateBroadcasts:function(e){t.each(this.broadcasts,function(t,n){e.on(n,this[t],this)},this)},resetViews:function(){t.each(this.views,function(e){e.off(),e.destroy()}),this.views=[]},update:function(e){this.collection.reset(e)}}),i=r.extend,s=function(){this.collection=new this.collection,this.collection.on("reset",this.render,this),this.views=[]};return r.extend=function(e){var t=e.initialize||function(){},n=e.broadcasts;return this.instance=[],e.initialize=function(){s.apply(this,arguments),n&&(this.broadcasts=n),t.apply(this,arguments)},i.call(r,e)},n.CollectionView=r,r})