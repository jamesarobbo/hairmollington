var toggle;
toggle = function(target) {
  if (target == ".collapsing-dropdown" && $(target).is(":visible")) {
    $(target).hide('slide', {
      direction: 'right'
    }, 500);
    setTimeout((function() {
      return $(".backdrop").remove();
    }), 500);
    return false;
  } else if (target == ".collapsing-dropdown" && !$(target).is(":visible")) {
    $('<div class="backdrop"></div>').appendTo(document.body);
    $(target).show('slide', {
      direction: 'right'
    }, 500);
    return false;
  } else {
    if (target[0] == $("div.backdrop")[0]) {
      $(".collapsing-dropdown").hide('slide', {
        direction: 'right'
      }, 500);
      setTimeout((function() {
        return $(".backdrop").remove();
      }), 500);
      return false;
    }
  }
};

$(document).ready(function() {
  $(document).trigger('page:load');
  $("body").on("click", ".trigger-toggle-menu", function() {
    return toggle($(this).data('target'));
  });
  $("body").on("click", function(e) {
    return toggle($(e.target));
  });

});
