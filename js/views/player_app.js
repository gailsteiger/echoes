define(["jquery","underscore","backbone","views/media_search","views/youtube_player","views/content_layout","views/results_navigation","views/feed_filter","views/youtube_playlists_provider","views/user_profile_manager","collections/history_playlist"],function(e,t,n,r,i,s,o,u,a,f,l){var c=n.View.extend({initialize:function(){this.modules={},this.modules.searchBar=new r({model:this.model}),this.modules.youtubePlayer=new i({model:this.model}),this.modules.contentView=new s({model:this.model}),this.modules.resultsNav=new o({model:this.model}),this.modules.searchFeedFilter=new u({model:this.model}),this.modules.userPlaylists=new a({model:this.model}),this.modules.userProfileManager=new f({model:this.model})}});return c})