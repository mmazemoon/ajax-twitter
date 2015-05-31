// constructor
$.FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
};

$.FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowed"){
    return "Follow!";
  }
  if (this.followState === "followed"){
    return "Unfollow!";
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
