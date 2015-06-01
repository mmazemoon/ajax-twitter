$.UsersSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input[name=username]");
  this.$ul = this.$el.find(".users");
  this.$input.on("keyup", this.handleInput.bind(this));
};

$.UsersSearch.prototype.handleInput = function (event){
  $.ajax({
    url: "/users/search",
    method: "GET",
    dataType: "json",
    data: { query: this.$input.val() },
    success: this.renderResults.bind(this)
  });
};

$.UsersSearch.prototype.renderResults = function (users) {
  this.$ul.empty();
  for(var i = 0; i < users.length; i++){
    var user = users[i];

    var $a = $("<a>");
    $a.attr("href", "/users/" + user.id);
    $a.text(user.username);

    var $li = $("<li>");
    $li.append($a);
    this.$ul.append($li);
    }
};

$.fn.usersSearch = function () {
  return this.each(function () {
    new $.UsersSearch(this);
  });
};

// responsibility
$(function () {
  $("div.users-search").usersSearch();
});
