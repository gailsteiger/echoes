define(["jquery","underscore","backbone"],function(e,t,n){var r=Backbone.View.extend({el:"#user-profile",events:{"click .sign-in":"signIn","click .sign-out":"signOut"},initialize:function(){this.model.user().on("change:author",this.renderUsername,this)},renderUsername:function(e){this.$(".icon-user").css("backgroundImage","url("+e.getThumbnail()+")"),this.$(".username").html(e.getUsername()),this.$el.addClass("user-signed-in")},connect:function(e){window.open(e,"hybridauth_social_sing_on","location=0,status=0,scrollbars=0,width=800,height=500")},signIn:function(e){e.preventDefault(),window.location.href=this.model.user().signin()},signOut:function(e){e.preventDefault(),window.location.reload()}});return r})