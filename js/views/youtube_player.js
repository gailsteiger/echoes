define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({el:"#youtube-player-container",events:{"click .hide-player":"hide","click .show-player":"show","click .pause":"pause","click .play":"playVideo","click .volume-down":"decreaseVolume","click .volume-up":"increaseVolume"},initialize:function(){this.model.on("change:play",this.play,this),this.model.youtube().get("info").on("change:title",this.renderTitle,this),window.onYouTubeIframeAPIReady=t.bind(this.createPlayer,this);var e=require(["http://www.youtube.com/iframe_api?&ghost="],function(){});this.$title=this.$(".yt-media-title"),this.$info=this.$(".track-info")},onPlaylistItemClick:function(t){t.preventDefault();var n=e(t.target).data("index");this.player.playVideoAt(n)},createPlayer:function(){this.player=new YT.Player("player",{height:"270",width:"350",playlist:"",playerVars:{autoplay:1,enablejsapi:1},events:{onReady:e.proxy(this.onPlayerReady,this),onStateChange:e.proxy(this.onPlayerStateChange,this)}})},renderPlaylistInfo:function(e,n){var r=t.map(n,function(e,t){return'<li><a href="#'+(t+1)+'" data-index="'+t+'">'+(t+1)+". "+e.title+"</a></li>"});this.$playlist.html(r.join(""))},renderTitle:function(e){var t=e.get("description");t=t.replace(/([0-9][0-9]:[0-9][0-9])/gim,"\n$1","gim"),this.$title.html(e.get("title")),this.$info.html(t)},onPlayerReady:function(){this.queue&&this.play(this.queue)},onPlayerStateChange:function(e){var t=this.model.get("mediaOptions").type==="playlist"||!1;e.data===YT.PlayerState.PAUSED&&this.toggleNowPlaying(!1),e.data===YT.PlayerState.PLAYING&&(t&&(this.model.set("mediaId",this.player.getPlaylist()[this.player.getPlaylistIndex()]),this.model.fetchPlaylistInfo(this.player.getPlaylist())),this.model.fetchCurrentMediaInfo(),this.toggleNowPlaying(!0))},play:function(e){var t=e.get("mediaId"),n=e.get("mediaOptions");if(!this.player||!this.player.loadVideoById){this.show(),this.queue=e;return}this.player.stopVideo(),this.player.clearVideo&&this.player.clearVideo(),this.playMedia(t,n),this.$el.addClass("yt-playing"),this.show()},playMedia:function(e,n){var r=t.isObject(e)?e.id:e;n&&n.type==="playlist"?this.player.loadPlaylist({list:r,playlist:"playlist",suggestedQuality:"large"}):this.player.loadVideoById(r)},playPlaylist:function(e){player.loadPlaylist(e)},pause:function(e){e.preventDefault(),this.player.pauseVideo()},playVideo:function(e){e&&e.preventDefault(),this.player.playVideo()},decreaseVolume:function(e){e&&e.preventDefault(),this.player.setVolume(this.player.getVolume()-5)},increaseVolume:function(e){e&&e.preventDefault(),this.player.setVolume(this.player.getVolume()+5)},toggleNowPlaying:function(e){this.$el.toggleClass("yt-playing",e)},show:function(e){e&&e.preventDefault(),this.$el.addClass("show-youtube-player")},hide:function(e){e.preventDefault(),this.$el.removeClass("show-youtube-player")}});return r})