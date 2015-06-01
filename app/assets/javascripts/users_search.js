$.UsersSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input[name=username]");
  this.$ul = this.$el.find(".users");

  this.$input.on("input", this.handleInput.bind(this));
};

$.UsersSearch.prototype.handleInput = function (event){
  var searchInput = this;

  $.ajax({
    url: "/users/search",
    method: "GET",
    dataType: "json",
    data: { query: this.$input.val() },
    success: searchInput.renderResults
  });
};

$.UsersSearch.prototype.renderResults = function (users) {
  this.$ul.empty();
  for(var i = 0; i < users.length; i++){
    var user = users[i];

    var $li = $("<li>");
    var $a = $("<a>");

    $a.attr("href", "/users/" + user.id);
    $a.text(user.username);

    $li.append($a);
    this.$ul.append($li);
    }
};
