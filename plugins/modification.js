var protocolButt = '<div id="secured" class="head__action proto"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="25.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #ffffff)" d="M400,200H388V144a128,128,0,0,0-256,0v56H120a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H400a24.028,24.028,0,0,0,24-24V224A24.028,24.028,0,0,0,400,200ZM164,144a96,96,0,0,1,192,0v56H164ZM392,464H128V232H392Z" class="ci-primary"></path> <rect width="40" height="40" x="240" y="328" fill="var(--ci-primary-color, #ffffff)" class="ci-primary"></rect> </g></svg>';
if (window.location.protocol == 'https:') $('#app > div.head > div > div.head__actions').prepend(protocolButt);

Lampa.Storage.set('protocol', 'http');
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
	   pluginsArray.push({"author": "@bylampa","url": "https://bylampa.github.io/tmdb-proxy.js","name":"TMDB Proxy","status": 1});
           Lampa.Storage.set('plugins', pluginsArray);
	}
           Lampa.Storage.set('set','true');
           Lampa.Storage.set('protocol', 'http');
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


