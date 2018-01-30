(function($) {
    Drupal.behaviors.initGooglePush  = {
        attach: function (context, settings) {
            init_google_push();
        }
    };


    function google_push_warn_hide() {
        $('.push_warn').hide();
        $('.push_back').hide();
    }

    function google_push_warn_show() {
        $('.push_warn').show();
        $('.push_back').show();
    }

    function init_google_push() {

        //для админки сие действо не нужно
        var pathname = window.location.pathname;
        if (pathname.substr(0, 6) == '/admin' || pathname.substr(0, 6) == '/devel') {
            return;
        }

        //не будем для мобил показывать
        var w = $(window).width();
        if(w<1280) {
            return;
        }

        //работает только для Хрома
        var isChrome = /Chrome/.test(navigator.userAgent);
        if (!isChrome) return;

        var currDate = new Date();
        var currExpired = currDate.getTime();

        //ипаная библиотека загнала значения куки в pathы, теперь надо вычищать эту дрянь со всех pathов сайта
        var pathParts = document.location.pathname.split('/');
        var pathLine = '';
        for(var pthI in pathParts) {
            if(!pathParts[pthI]) continue;
            pathLine += '/'+pathParts[pthI];
            console.log('Cleaning shit path cookie - '+pathLine);
            $.removeCookie('push_question', { path: pathLine });
        }

        var push_question = 1*$.cookie('push_question');

        //console.log('push cookie', push_question + '! ('+currExpired+')');
        //because cookies are always dying for no reason
        if (push_question < 0) {
            $.cookie('push_question', -1, { 'expires': 3 * 365, path: '/' });
            return;
        }else if(push_question > currExpired) {
            $.cookie('push_question', push_question, { 'expires': 3 * 365, path: '/' });
            return;
        }

        $('.push_warn .x').click(function () {
            $.cookie('push_question', currExpired - (-1) * 1000 * 60 * 60 * 24 * 6 * 31, { 'expires': 3 * 365, path: '/' });
            google_push_warn_hide();
            return false;
        });
        $('.push_warn .button').click(function () {
            window.open('https://www.forbes.ru/push/index.php', '_blank');
            google_push_warn_hide();
            $.cookie('push_question', -1, { 'expires': 3 * 365, path: '/' });
            return false;
        });

        google_push_warn_show();

    }

})(jQuery);
;
