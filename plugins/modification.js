
       Lampa.Lang.add({
          extensions_worked: {
            ru: "Доступен для загрузки"
          },
          title_error: {
            ru: "Недоступен или ошибка в адресе"
          },
	  torrent_parser_no_hash: {
            ru: "Не удалось получить HASH. Перезагрузите свой TorrServer или смените адрес TorrServer!"
	  }
        })

    window.lampa_settings = {
    torrents_use: true,    // кнопка торренты включена
    demo: false,           // demo off
    read_only: false,      // demo off
    socket_use: false,     // cub 
    account_use: false,     // сохраним ради расширенных закладок 
    account_sync: false,   // cub синхронизация
    plugins_store: false,  // cub магазин
    feed: false,           // cub лента
    white_use: false,      // cub 
    push_state: false,     // адрес в url /?card=1241982&media=movie 
    lang_use: true,        // выбор языка в настройках
    plugins_use: true      // настройки, расширения
  }

  window.lampa_settings.disable_features = {
    dmca: true,          // шлет нахер правообладателей - on
    reactions: true,    // cub реакции - on
    discuss: true,      // cub комментарии - on
    ai: true,            // cub AI-поиск - off
    install_proxy: true, // cub tmdb proxy - off
    subscribe: true,     // cub подписки - off
    blacklist: true,     // off
    persons: true        // off
  }


   Lampa.Utils.putScriptAsync([
	    'https://bylampa.github.io/notice.js?v=' + Math.random(),
	    'https://bylampa.github.io/addon.js?v=' + Math.random(),
	    'https://andreyurl54.github.io/diesel5/tricks.js?v=' + Math.random()   
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
	   pluginsArray.push({"author": "@bylampa","url": "https://bylampa.github.io/tmdb-proxy.js","name":"TMDB Proxy","status": 1});
           Lampa.Storage.set('plugins', pluginsArray);
	}
           Lampa.Storage.set('set','true');
          // Lampa.Storage.set('keyboard_type', 'integrate');
           Lampa.Storage.set('start_page', 'main');
           Lampa.Storage.set('tmdb', 'source');
           Lampa.Storage.set('background', 'false');
	   Lampa.Storage.set('animation', 'true');
	   Lampa.Storage.set('mask', 'false');
	   Lampa.Storage.set('player_normalization', 'false');
	   Lampa.Storage.set('player_timecode', 'ask');
	   Lampa.Storage.set('screensaver', 'false');
           Lampa.Storage.set('pages_save_total', '3');
	   Lampa.Storage.set('device_name', 'Lampa Uncensored');
	   Lampa.Storage.set('torrserver_url', '');  // http://ip:9118/ts
	   Lampa.Storage.set('jackett_url', 'jacred.xyz');       
           Lampa.Storage.set('jackett_key', '');     // ключ доступа
           Lampa.Storage.set('parser_torrent_type', 'jackett');
	   Lampa.Storage.set('parser_use', 'true');
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


