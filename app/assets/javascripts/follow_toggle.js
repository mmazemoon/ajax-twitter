$.FollowToggle = function (el) {

};

$.FollowToggle.prototype.method1 = function() {

};

$.fn.FollowToggle = function (){
  return this.each(function () {
    new $.FollowToggle(this);
  });
};

$(function() {
  $("button.follow-toggle").followToggle();
});
