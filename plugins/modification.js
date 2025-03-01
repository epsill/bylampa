//   Lampa.Storage.set('cub_domain', 'standby.cub.red');

       Lampa.Lang.add({
          extensions_worked: {
            ru: "Доступен для загрузки"
          },
          title_error: {
            ru: "Недоступен или ошибка в адресе"
          }
        })

   window.lampa_settings.torrents_use = true;
   window.lampa_settings.demo = false;
   window.lampa_settings.read_only = false;

   Lampa.Utils.putScriptAsync([
	    'https://bylampa.github.io/notice.js?v=' + Math.random(),
	    'https://bylampa.github.io/addon.js?v=' + Math.random()
   ], function () {});

   var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);

            if(!Lampa.Storage.get('set','false')) start_set();
		 
        }
    },200);

    function start_set(){
	if (Lampa.Storage.get('language') == 'ru') {
	   var pluginsArray = Lampa.Storage.get('plugins','[]')
	   pluginsArray.push({"author": "lampa","url": "https://bylampa.github.io/tmdb-proxy.js","name":"TMDB Proxy","status": 1});
           Lampa.Storage.set('plugins', pluginsArray);
	}
           Lampa.Storage.set('set','true');
           Lampa.Storage.set('keyboard_type', 'integrate');
           Lampa.Storage.set('start_page', 'main');
           Lampa.Storage.set('source', 'tmdb');
           Lampa.Storage.set('background', 'false');
	   Lampa.Storage.set('animation', 'false');
	   Lampa.Storage.set('mask', 'false');
	   Lampa.Storage.set('player_normalization', 'true');
	   Lampa.Storage.set('player_timecode', 'ask');
	   Lampa.Storage.set('screensaver', 'false');
           Lampa.Storage.set('pages_save_total', '3');
	   Lampa.Storage.set('device_name', 'Lampa Uncensored');
	//   Lampa.Storage.set('cub_domain', 'standby.cub.red');
	   location.reload()
     } 

     Lampa.Storage.listener.follow('change', function (event) {
      if (event.name == 'activity' && Lampa.Activity.active().component === 'bookmarks') {
        setTimeout(function(){
          Lampa.Controller.move('down');
          Lampa.Controller.move('up');
        },50)
      }
     });

$(document).ready(function() {
    var interval = setInterval(function() {
        $('.navigation-tabs__button').each(function() {
            if ($(this).text().trim() === 'Lampa') {
                $(this).html('BYLAMPA');
            }
        });
    }, 100); 
 
    $('.navigation-tabs__button').on('focus', function() {
        if ($(this).text().trim() === 'Lampa') {
            $(this).html('BYLAMPA');
        }
    });
});

/* var plugins = Lampa.Storage.get('plugins','[]')

    plugins.forEach(function(plug) {
       // plug.url = (plug.url + '').replace('http://cub.red/plugin/tmdb-proxy', 'https://bylampa.github.io/tmdb-proxy.js');
       // plug.url = (plug.url + '').replace('https://bylampa.github.io/m.js', 'http://showy.online/m.js');
    })

    Lampa.Storage.set('plugins',plugins) */

var backImport = localStorage.getItem('plugins') || [];
  localStorage.setItem('pluginsBack', backImport);

// Получаем все ключи из localStorage
/*for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    
    if (key && key.indexOf('movie_') === 0) {
        // Удаляем элемент из localStorage
        localStorage.removeItem(key);
        i--;
    }
}*/


