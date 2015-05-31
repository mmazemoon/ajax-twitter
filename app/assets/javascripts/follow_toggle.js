// constructor
$.FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
};

// click handler
$.FollowToggle.prototype.handleClick = function (event) {
  var followToggle = this;

  event.preventDefault();
  if (this.followState === "unfollowed"){
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      method: "POST",
      success: function () {
        followToggle.followState = "following";
        followToggle.render();
      }
    });
  }
  else if (this.followState === "followed"){
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      method: "DELETE",
      success: function () {
        followToggle.followState = "unfollowing";
        followToggle.render();
      }
    });
  }
};

$.FollowToggle.prototype.render = function() {
  if (this.followState === "unfollowing"){
    this.$el.text("Follow!");
  }
  else if (this.followState === "following"){
    this.$el.text("Unfollow!");   // why .html()
  }
};

$.fn.FollowToggle = function (){
  return this.each(function () {
    new $.FollowToggle(this);
  });
};

$(function() {
  $("button.follow-toggle").FollowToggle();
});
