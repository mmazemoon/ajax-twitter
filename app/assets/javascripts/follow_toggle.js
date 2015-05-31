// constructor
$.FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
};

$.FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed"){
    this.$el.html("Follow!");
  }
  if (this.followState === "followed"){
    this.$el.html("Unfollow!");
  }
};

$.fn.FollowToggle = function (){
  return this.each(function () {
    new $.FollowToggle(this);
  });
};

$(function() {
  $("button.follow-toggle").followToggle();
});
