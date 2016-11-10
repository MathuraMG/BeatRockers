// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap

var ready = function() {
  $('.tag-list input[type=checkbox]').click(function() {
    console.log('hi');
    if($('.tag-list :checked').length > 0){
      $('.lesson').hide();
    }
    else {
      $('.lesson').show();
    }

    $('.tag-list :checked').each(function(){
      // console.log($(this).val())
      var className=  '.lesson-' + $(this).val();
      $(className).show();
    });

  })

}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
