define(["jquery","underscore","backbone","views/youtube_user_playlist_item","collections/youtube_playlists_provider","collectionView"],function(e,t,n,r,i,s){var o=s.extend({el:"#user-playlists",collection:i,view:r,broadcasts:{"playlist-selected":"onPlaylistSelected"},initialize:function(){this.listenTo(this.model.user(),"change:author",this.onUserChange),this.onUserChange()},onUserChange:function(){var e=this.model.user();e&&e.getUsername()&&(this.collection.username=e.getUsername(),this.collection.fetch())},onPlaylistSelected:function(){this.$el.find(".active").removeClass("active")}});return o})