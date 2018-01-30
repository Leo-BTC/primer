(function ($) {
  var scrollSlickAnticrashTimer = 0;


  Drupal.behaviors.sectionLoadMore = {
    attach: function (context, settings) {
      $('.block-href-material .load_more, .page-life-woman .load_more').click(section_load_more_nodes);
      $('.block-href-material .search_load_more').click(search_load_more_nodes);
    }
  };

  Drupal.behaviors.forbesLifeWoman = {
    attach: function (context, settings) {
      forbes_life_woman();
    }
  };

  Drupal.behaviors.fancyBox = {
    attach: function (context, settings) {
      fancyBoxInit();
    }
  };

  Drupal.behaviors.brandvoice = {
    attach: function (context, settings) {
      brandVoiceInit();
    }
  };

  Drupal.behaviors.mldrTooltip = {
    attach: function (context, settings) {
      mldrTooltipInit();
    }
  };

  Drupal.behaviors.authorPage = {
    attach: function (context, settings) {
      authorInforMoreInit();
    }
  };

  Drupal.behaviors.mainSectionTab = {
    attach: function (context, settings) {
      $('.main-section-tab .list li').click(function(){
        mainSectionTabClick($(this));
      });
      if(window.location.hash) {
        changePopularTab();
      }
      if( (window.location.pathname=='/popular') ||
          (window.location.pathname.toString().indexOf('/popular')===0) ) {
        changePopularTitle();
      }
    }
  };

  Drupal.behaviors.antiBlock = {
    attach: function (context, settings) {
      createBW_Warning();
    }
  };


  Drupal.behaviors.nodeOpenEdit = {
    attach: function (context, settings) {
      var tab_links = null;
      setInterval(function(){
        tab_links = $('.pane-page-tabs a');

        for (var i = 0; i < tab_links.length; i++) {
          href = $(tab_links[i]).attr('href');
          if(href.indexOf('/edit') + 1) {
            ver_nid = parseInt(href.substr(6));
            if (window.sessionStorage && window.localStorage) {
              now_time = parseInt(new Date().getTime()/1000);
              edit_now = localStorage.getItem('in_edit_' + ver_nid);
              edit_now = parseInt(edit_now);
              if ((now_time - edit_now) < 5) {
                //редактируется, блочим
                $(tab_links[i]).attr('onclick', 'return false;');
                $(tab_links[i]).addClass('locked-link');
              } else {
                //редактировалась давно, разблочить
                $(tab_links[i]).removeClass('locked-link');
                $(tab_links[i]).removeAttr('onclick');
                //удалить из стораджа
                localStorage.removeItem('in_edit_' + ver_nid);
              }
            }
          }
        }
      },3000)
    }
  };


  Drupal.behaviors.popular = {
    attach: function (context, settings) {
      $('.page-popular #forbes-section .main-section-tab .show_category').click(function() {
        $(this).addClass('hide');
        $('.page-popular #forbes-section .main-section-tab .categories').removeClass('hide');
      });
    }
  };


  Drupal.behaviors.brandvoice_link = {
    attach: function (context, settings) {
      var brandVoiceLogo = $('.drum-brandvoice .logo a');
      if(brandVoiceLogo.length) {
        var url = brandVoiceLogo.attr('href');

        $('header .under-menu .forbes-pic-logo').closest('a').attr('href', url);
      }
    }
  };


  Drupal.behaviors.forbes_100years = {
    attach: function (context, settings) {
      if(1*jQuery('#node_section').attr('content') == 19480) {
        var url = '/special/100/';
        $('header .under-menu .forbes-pic-logo').closest('a').attr('href', url);
      }
    }
  };

  Drupal.behaviors.page_subscribe = {
    attach: function (context, settings) {
      $('.drum-brandvoice-head-right .bt-blue-mode').click(function(e){
        subscribe_unisender_layer(1);
      });
      $('.subscribe-this-page .x').click(function() {
        subscribe_unisender_layer(0);
      });
      $('.subscribe-this-page .subm-it').click(function(e) {
        console.log('emailed');
        subscribeThisPage($(this));
        e.stopPropagation();
      });
    }
  };

  Drupal.behaviors.iframe_resize = {
    attach: function (context, settings) {
      iframeTotalResize();
      setTimeout(function () {
        iframeTotalResize();
      }, 2000);
    }
  };

  Drupal.behaviors.slickAntiCrash = {
    attach: function (context, settings) {
      slickAntiCrash();
      $(window).scroll(function () { slickAntiCrashRunner(); });
    }
  };


  Drupal.behaviors.antiHideAlsoInterested  = {
    attach: function (context, settings) {
      showBottomAlsoInterested();
    }
  };

  function section_load_more_nodes() {
    var tag = $(this);
    var tid = tag.attr('data-tid');
    var pack_nid = tag.attr('data-pack-nid');
    var author_id = tag.attr('data-author-id');
    var opt = '';
    var optional = tag.attr('data-optional');
    var popular_list = tag.attr('data-popular');
    var display = tag.attr('data-display');
    var url = '';
    if (optional != undefined) {
      opt = '?optional=' + optional;
    }
    var page = tag.attr('data-pagenumber');
    var for_section = tag.attr('data-forsection');
    tag.html('<img src="/sites/all/themes/forbes/img/wait1.gif" alt="wait please" title="wait please" />');

    if(page>0) {
      if (author_id > 0) {
        url = '/author_more_pages/' + author_id + '/' + display + '/' + page + opt
      } else if (popular_list) {
        if(!for_section) for_section = '0';
        url = '/popular_more_pages/' + popular_list + '/' + page + '/' + for_section
      } else if (tid > 0 || tid == '0') {
        url = '/section_more_pages/' + tid + '/' + page + '/' + for_section + opt
      } else if (pack_nid > 0 || pack_nid == '0') {
        url = '/package_more_pages/' + pack_nid + '/' + page
      }
      if (url) {
        $.ajax({
          url: url,
          success: function (data) {
            if (data != '') {
              tag.after(data);
              load_more_news(tag);
              var parnt = tag.parent();
              tag.remove();
              parnt.find('.load_more').click(section_load_more_nodes);
            } else {
              tag.css('opacity', 0);
            }
          }
        });
      }
    }
  }

  function load_more_news(tag) {
    if(mob) return;

    var newsList = $('.view-id-news .view-content');
    //console.log('news count', newsList.length);
    if(newsList.length) {
      var newsCount = newsList.find('.views-row').length;
      var currentMaterialBlock = tag.closest('.block-href-material');
      var materialList = currentMaterialBlock.find('.item-material').length;
      var neededNewsCount = materialList*2 - 6;
      var newsDiff = neededNewsCount - newsCount;
      //console.log('news', newsCount, neededNewsCount, newsDiff, '/news_more_pages/' + newsCount + '/' + newsDiff);
      if(newsDiff>0) {
        $.ajax({
          url: '/news_more_pages/' + newsCount + '/' + newsDiff,
          success: function (data) {
            if (data != '') {
              newsList.parent().append($(data).find('.view-content'));
              newsVisibilityChanging(currentMaterialBlock);
            }
          }
        });
      }else{
        newsVisibilityChanging(currentMaterialBlock);
      }
    }
  }

  function newsVisibilityChanging(currentMaterialBlock) {
    var newsList = $('.view-id-news .view-content');
    if(!newsList.length) return;
    var newsMaterials = newsList.find('.views-row');
    var newsMaterialsCount = newsMaterials.length;
    var materialCount = currentMaterialBlock.find('.item-material').length;
    var newsMustBe = materialCount*2-6;
    //console.log('count compare', newsMaterialsCount, newsMustBe, materialCount);
    newsMaterials.each(function(i, item) {
      if(i<newsMustBe) {
        $(item).show();
      }else{
        $(item).hide();
      }
    })
  }


  function mainSectionTabClick(tab) {
    var tagAge = tab.attr('data-age');
    var indx = tab.index();
    if (tab.attr('class') != 'active' && tab.hasClass('mobile') != true) { //for desktop
      var indxIdName = tab.parents('.main-section-list').attr('id');
      if(!indxIdName) indxIdName = 'forbes-author';
      var $blockHrefMaterial = $('#' + indxIdName + ' .block-href-material');
      tab.parent().find('li').removeClass('active');
      tab.addClass('active');
      $blockHrefMaterial.addClass('hide').removeClass('active');
      var currentMaterialBlock = $blockHrefMaterial.eq(indx);
      currentMaterialBlock.addClass('active').removeClass('hide');
      newsVisibilityChanging(currentMaterialBlock);
    } else if (tab.hasClass('mobile') == true){                                //for mobile
      if( tab.hasClass('true') != true) {
        var indent = ($('body').hasClass('page-news')) ? 3 : 0;
        console.log(indent);
        tab.addClass('true');
        var $thisMainSectionTab  = tab.parents('.main-section-tab');
        var top = $thisMainSectionTab.outerHeight(true) - parseInt($thisMainSectionTab.css('border-top-width'));
        var massText = [];
        tab.parent().find('li').each(function(indx){
          var thisLiText = $(this).not('.active,.mobile').text();
          if ( thisLiText != ''){
            var thisBlockText = '<div class="item-section" data-index="' + indx + '">' + thisLiText + '</div>';
            massText.push(thisBlockText);
          }
        });
        $thisMainSectionTab.append('<div class="list-for-mobile" style="top:' + (top - indent) + 'px;">' + massText.join('') + '</div>');
        $('body').on('click', '.item-section', function(){
          var s = parseInt($(this).attr('data-index'));
          $(this).parents('.main-section-tab').find('.list li').eq(s).click();
          $(this).parents('.main-section-tab').find('.list li.mobile').removeClass('true').text($(this).text());
          $(this).parent().remove();
        });
      } else {
        $('.main-section-tab .list-for-mobile').remove();
        tab.removeClass('true');
      }
    }
    var poplist = $('.page-popular .block-authors-rating .author_poplist');
    poplist.removeClass('active');
    poplist.eq(indx).addClass('active');
    if(tagAge) {
      window.location.hash = '#' + tagAge;
    }

    changePopularTitle();
  }

  function changePopularTitle() {
    var tagAge = $('.main-section-tab .list li.active').attr('data-age');

    var title = 'Forbes.ru | Самые популярные материалы';
    var section = $('.main-section-tab .categories a.active').text();
    if(section && section!='Все категории') title += ' раздела '+section;
    var tagAges = { 'today': 'сегодня',  'week': 'неделю',  'month': 'месяц',  'year': 'год' };
    if(tagAges[tagAge]) title += ' за '+tagAges[tagAge];
    //document.title = title;
  }

  function changePopularTab() {
    var items = $('.main-section-tab .list li');
    var ages = [];
    items.each(function (i, item) {
      var age = $(item).attr('data-age');
      ages[age] = i;
    });
    var currAge = window.location.hash.replace('#', '');
    if(ages[currAge]) {
      items.eq(ages[currAge]).click();
    }
  }



  function search_load_more_nodes() {
    var tag = $(this);
    var page = tag.attr('data-pagenumber');
    var search = $('.block-page-search input[name="search_api_views_fulltext"]').attr('value');
    var sort = $('.ap-solr-filter a.active-link').attr('data-sort-by');
    tag.html('<img src="/sites/all/themes/forbes/img/wait1.gif" alt="wait please" title="wait please" />');

    if(page > 0){
      $.ajax({
        url: '/search_more_pages?page=' + page + '&sort_by=' + sort + '&search_api_views_fulltext=' + search,
        success: function(data) {
          tag.after(data);
          var parnt = tag.parent();
          tag.remove();
          parnt.find('.search_load_more').click(search_load_more_nodes);
        }
      });

    }
  }

  function forbes_life_woman() {
    if(!$('.page-life-woman').length) {
      return;
    }
    var w = $(window).width();
    //console.log('w', w);
    if(w<=768 && w>414) {
      $('.page-life-woman').parent().prepend('<div class="page-life-woman page-life-woman2"></div>');
      $('.page-life-woman2').append($('.page-life-woman').find('.first-material'));

    }

  }

  function fancyBoxInit() {
    var i = 0;
    $('.body-part-top img.forbes-wysiwyg-image-no-border, .body-part-top img.forbes-wysiwyg-image, ' +
      '.body-part-top img.fancyboxed, ' + '.body-part-bottom img.fancyboxed, ' +
      '.body-part-bottom img.forbes-wysiwyg-image-no-border, ' +
      '.body-part-bottom img.forbes-wysiwyg-image').each(function(i, item) {
      var img = $(item);
      if(img.parent().prop('tagName')=='A') { return; }
      img.after('<a href="'+img.attr('src')+'" class="body_image_'+i+' body_image"></a>');
      var a = img.parent().find('.body_image_'+i).append(img);
      if(a.fancybox) a.fancybox({
        //'hideOnContentClick': true
      });
    });
  }

  function brandVoiceInit() {
    $('.drum-brandvoice .bt-blue-mode, .pane-bottom-in-brandvoice .bt-blue-mode').click(function(){
      var btn = $(this);
      btn.parent().find('.text').height('auto');
      btn.hide();
    });

    if($('body').hasClass('page-forbes-brandvoice-emc')) {
      $('.small-photo-block .small-photo-block-item .photo_title').each(function(i, item){
        var titleTag = $(item);
        var text = titleTag.text().split(':');
        if(text.length>1) {
          titleTag.html(text[0].split(' ').join("<br/>"));
        }
      });


    }
  }


  function mldrTooltipInit() {
    var body_divs = $('.body-part-top, .body-part-bottom, .photo-text-block');
    var isMob =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

    body_divs.find('a[href^="/node/"], a[href^="http://www.forbes.ru/node/"]').each(function () {
      var tag_a = $(this);
      var nid = tag_a.attr('href').replace('http://www.forbes.ru/node/', '');
      nid = nid.replace('/node/', '');
      var tooltip = $('.mldr_tooltip[data-nid="'+nid+'"]');
      var rating = tooltip.attr('data-rating');
      var pr_type = tooltip.attr('data-p-type');
      if (rating > 0) {
        var tag_a_letter = '';
        if (isMob != true) {
          if (tag_a.parents('.slick-list').length == 0){
            tag_a_letter = 'a'
            $('.mldr_tooltip_anchor[data-nid='+nid+']').append(tooltip);
          } else {
            tag_a_letter = 'g'
            $('body').append(tooltip.clone().attr('data-nid', nid + 'clone'));
          }
        } else {
          $('.mldr_tooltip_anchor[data-nid='+nid+']').append(tooltip);
        }
        tag_a.after(tag_a.text() + ' <span class="mldr_tooltip_anchor '+tag_a_letter+' '+pr_type+'" data-nid="'+nid+'"><span>F</span> '+rating+'</span>');

        tag_a.remove();
      }
    });

    if (isMob != true) {
      // mldr_tooltip_anchor в статье.
      $('.mldr_tooltip_anchor.a').mouseover(function (e) {
        var anch = $(this);
        $('.mldr_tooltip').each(function () {
          $(this).hide();
        });

        var temp_nid = $(this).attr('data-nid');
        var float_div = $(".mldr_tooltip[data-nid='" + temp_nid + "']");
        var pos = anch.position();
        float_div.css({
          "position" : "absolute",
          "top"      : (pos.top-(float_div.outerHeight()+13)) + "px",
          "left"     : (pos.left-float_div.outerWidth()/2+anch.width()/2+5) + "px"
        });
        float_div.show();
        float_div.mouseover(function (event) {
          clearTimeout($(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId'));
        }).mouseleave(function () {
          timeoutId = setTimeout(function () {
            $(".mldr_tooltip[data-nid=" + temp_nid + "]").fadeOut(300);
          }, 300);
          $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
        });

        clearTimeout($(".mldr_tooltip_anchor[data-nid=" + $(this).attr('data-nid') + "]").data('timeoutId'));
      }).mouseleave(function () {
        temp_nid = $(this).attr('data-nid');
        timeoutId = setTimeout(function () {
          $(".mldr_tooltip[data-nid=" + temp_nid + "]").fadeOut(300);
        }, 300);
        $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
      });

      // mldr_tooltip_anchor внутри галлереи.
      $('.mldr_tooltip_anchor.g').mouseover(function (e) {
        var anch = $(this);
        $('.mldr_tooltip').each(function () {
          $(this).hide();
        });

        var temp_nid = anch.attr('data-nid');
        var float_div = $(".mldr_tooltip[data-nid='" + temp_nid + 'clone' + "']");
        float_div.css({
          "position" : "absolute",
          "top"      : (anch.offset().top - float_div.outerHeight() - 13) + "px",
          "left"     : (anch.offset().left - float_div.outerWidth()/2 + anch.width()/2 + 5 ) + "px"
        });
        float_div.show();
        float_div.mouseover(function (event) {
          clearTimeout($(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId'));
        }).mouseleave(function () {
            timeoutId = setTimeout(function () {
              $(".mldr_tooltip[data-nid=" + temp_nid + 'clone' + "]").fadeOut(300);
            }, 300);
            $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
          });

        clearTimeout($(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId'));
      }).mouseleave(function () {
        var temp_nid = $(this).attr('data-nid');
        var timeoutId = setTimeout(function () {
          $(".mldr_tooltip[data-nid=" + temp_nid + 'clone' + "]").fadeOut(300);
        }, 300);
        $(".mldr_tooltip_anchor[data-nid=" + temp_nid + "]").data('timeoutId', timeoutId);
      });
    } else {
      $('.mldr_tooltip_anchor').click(function(){
        var thisBlockMTA = $('.mldr_tooltip[data-nid="' + $(this).attr('data-nid') + '"]')[0].outerHTML;
        $('body').addClass('modal-mldr-open').append('<div class="modal-menu modal-mldr_tooltip_true">' +
          '<div class="modal-menu-close">' +
            '<img src="http://cdn.forbes.ru/sites/all/themes/forbes/img/modal-menu-close-v0.1.svg" width="18" height="18" alt="Закрыть" title="Закрыть">' +
          '</div>' + thisBlockMTA + '</div>');
        $('.modal-mldr_tooltip_true .mldr_tooltip').show();
      });

      $('body').on('click', '.modal-mldr_tooltip_true .modal-menu-close', function(){
        $('body').removeClass('modal-mldr-open').find('.modal-menu.modal-mldr_tooltip_true').remove();
      });
    }

  }




  //Ex-js.js

  // Запуск mediator
  var timerMediatorId = setInterval(function() {
    if(window._mediator) {
      window._mediator.start();
      console.log('mediator started');
      clearInterval(timerMediatorId);
    } else {
      console.log('mediator not started');
    }
  }, 500);
  setTimeout(function() {
    clearInterval(timerMediatorId);
    console.log('stop mediator started');
  }, 5000);


  var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
  var dWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var $bannerBlock = $('.top-bn');
  var tbh = $bannerBlock.height();
  (tbh == null) ? tbh = 0 : tbh = tbh;
  var adminMenuHeight = 0;
  setTimeout(function(){
    if ($('body').hasClass('admin-menu')) {
      adminMenuHeight = $('#admin-menu').outerHeight();
      tbh = tbh + adminMenuHeight;
      var adm1 = document.getElementById('admin-menu');
      //какая-то херня убивает весь скрипт ниже. Убрал в отдельный поток
      if(adm1) adm1.insertAdjacentHTML('afterend', '<style>html body.admin-menu {margin-top: ' + adminMenuHeight + 'px !important;}</style>');
    }
  }, 200);


  fixMenuOrNoFixMenu();

  function fixMenuOrNoFixMenu() {
    function fixMenu() {
      $('.header-menu').addClass('fix');
      if ($('body').hasClass('admin-menu')) {
        $('.header-menu').addClass('fix-admmenu').css('top', adminMenuHeight + 'px');
      }
      $('body').css('padding-top', $('.header-menu').outerHeight(true) + 'px');
    }
    $(document).scroll(function () {
      tbh = $bannerBlock.height();
      if ($(document).scrollTop() >= tbh) {
        fixMenu();
      } else {
        $('.header-menu').removeClass('fix fix-admmenu').css('top', '');
        $('body').css('padding-top', '0');
      }
    });
  }

  function changesTheTopBanner(){
    // выбираем целевой элемент
    var target = document.getElementsByClassName('top-bn')[0];
    // создаём экземпляр MutationObserver
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == 'childList' || mutation.type == 'subtree'){
          tbh = $bannerBlock.height();
          fixMenuOrNoFixMenu();
        }
      });
    });
    /*
     конфигурация нашего observer:
     subtree: true - изменения должны быть не только у элемента, но и у потомков
     childList: true - это указывает что нужно отслеживать изменение количества потомков
     */
    var config = { childList: true, subtree: true };
    // передаём в качестве аргументов целевой элемент и его конфигурацию
    observer.observe(target, config);
    // позже можно остановить наблюдение
    //observer.disconnect();
  }
  changesTheTopBanner();


  // open modal menu
  if (isMobile != true) {
    var scrollWidth = (function(){
      var div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      var width = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      return width;
    })();
  }
  $('.burger').click(function(){
    $('body').addClass('modal-menu-open').css({
      'padding-right' : ((scrollWidth != undefined)? scrollWidth + 'px' : '')
    });
    var $modalMenu = $('.modal-menu');
    var modalMenuContentHeight = $('.modal-menu-body').outerHeight() + $('.modal-menu-footer').height();
    if ($modalMenu.height() > modalMenuContentHeight){
      $modalMenu.addClass('big-height');
    }
  });
  $('.modal-menu-close').click(function(){
    $('body').css({
      'padding-right' : ''
    }).removeClass('modal-menu-open');
    $('.modal-menu').removeClass('big-height');
  });
  $(window).keydown(function(eventObject){
    if (eventObject.which == 27 && $('body').hasClass('modal-menu-open')) {
      $('.modal-menu-close').click();
    }
  });


  // header width
    function headerMenuWidth(){
      var headerWidth = $('.content').innerWidth();
      var headerWidthIn = $('.content').width();
      $('header').css({
        'width' : headerWidth + 'px'
      });
      $('.header-menu').css({
        'width' : headerWidthIn + 'px'
      });
    }
    $(window).resize(function(){
      headerMenuWidth();
    });


  // header menu search
  $('.header-menu-search-open').click(function(){
    $(this).addClass('true');
    $('body').addClass('open-search');
    $('.header-menu-search').addClass('input-focus-true').find('input[type="text"]').focus();
  });
  $('.header-menu-search input[type="submit"]').click(function(){
    if($(this).parents('.header-menu-search').hasClass('input-focus-true')){
      if ($('.header-menu-search input[type="text"]').val() == '') {
        $('.header-menu-search-open').removeClass('true');
        $('.header-menu-search').removeClass('input-focus-true');
        $('body').removeClass('open-search');
        return false;
      }
    }
  });
  $('.menu-search-close').click(function(){
    $('.header-menu-search-open').removeClass('true');
    $('.header-menu-search').removeClass('input-focus-true');
    $('body').removeClass('open-search');
  });


  // on main forbes-life and -woman max height first elements
  if ( $('.main-life-woman').length != 0){
    function runMaxHeight(){
      var massHeight = [];
      var $blocks = $('.main-life-woman .col-left .item-material:lt(2), .main-life-woman .col-right .item-material:lt(2)');
      $blocks.each(function(indx){
        massHeight.push($(this).outerHeight());
      });
      massHeight.max = function(){
        return Math.max.apply( Math, this );
      };
      var maxHeight = massHeight.max();
      $blocks.each(function(indx){
        $(this).css('min-height',maxHeight + 'px');
      });
    }
    if (dWidth > 560) {
      $('.main-life-woman .col-left .item-material:lt(2) img, .main-life-woman .col-right .item-material:lt(2) img').load(function () {
        runMaxHeight();
      });
      setTimeout(function(){
        runMaxHeight();
      },1500);
    }
  }


  // on main actual-news max height the first two elements
  if ( $('body').hasClass('front') && $('.actual-news').length != 0 && isMobile == true && dWidth > 736 ){
    var dHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;
    function maxHeightActualNewsItem(){
      setTimeout(function(){
        var $dai = $('.drum .actual-news .item-news');
        var dai1 = $dai.eq(0).outerHeight();
        var dai2 = $dai.eq(1).outerHeight();
        var massHeight = [dai1,dai2];
        massHeight.max = function(){
          return Math.max.apply( Math, this );
        };
        var maxHeight = massHeight.max();
        $('.drum .actual-news .item-news:lt(2)').css({
          'height' : maxHeight + 'px'
        });
      },100);
    }
    var mql = window.matchMedia("(orientation: portrait)");
    if(mql.matches) {
      // portrait
      if (dWidth < 1024) {
        maxHeightActualNewsItem();
      }
    }
    mql.addListener(function(m) {
      if(m.matches) {
        // Changed to portrait
        if (dHeight <= 1024) {
          maxHeightActualNewsItem();
        }
      } else {
        // Changed to landscape
        if (dHeight <= 1024) {
          $('.drum .actual-news .item-news:lt(2)').css({
            'height' : 'auto'
          });
        }
      }
    });
  }

  //Our Brands
  if (isMobile == true) {
    $('.block-choice').click(function(){
      var bl = $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display');
      if (bl != 'block') {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','block');
      } else {
        $(this).parents('.acmg-button-footer').find('.block-choice-open').css('display','none');
      }
    });
  }


  // right banner on main page
  function motionsBnrOnMainPage(){
    var $blBn = $('.block-bnr-in-text')[0];
    if ($blBn != undefined) {
      var $blockBnrInTextBn = $('.block-bnr-in-text .bn');
      var hMHeight = $('.header-menu').outerHeight();
      var numberIndent = 20;
      $(document).scroll(function () {
        var mainSectionListPB = parseInt($('.main-section-list').css('padding-bottom'));
        (isNaN(mainSectionListPB)) ? mainSectionListPB = 60 : mainSectionListPB = mainSectionListPB;

        var blBnOffsetTop = $('.block-bnr-in-text').offset().top - hMHeight - numberIndent;
        if ($('.article-top').length != 0) {
          $('.block-bnr-in-text').css('height', $('.article-top').height() + 'px');
        }
        if ($('.drum-brandvoice') != 0){
          if ($('.block-href-material').height() <= 600 && $('.block-bnr-in-text .bn').height() >= 600) {
            $('.block-bnr-in-text').css('height', '600px');
          }
        }
        var Ra = $blBn.getBoundingClientRect();
        var R = Ra.bottom - $blockBnrInTextBn.height() - mainSectionListPB - numberIndent;
        if (dWidth > 560){
          if ($(document).scrollTop() >= blBnOffsetTop) {
            if (R < 0) {
              if (!$blockBnrInTextBn.hasClass('fix-bttm')){
                $blockBnrInTextBn.removeClass('fix no-fix').addClass('fix-bttm').css({
                  'position' : 'absolute',
                  'z-index' : '',
                  'top' : 'auto',
                  'bottom' : '0px'
                });
              }
            } else {
              if (!$blockBnrInTextBn.hasClass('fix')){
                $blockBnrInTextBn.addClass('fix').removeClass('fix-bttm no-fix').css({
                  'position' : 'fixed',
                  'z-index' : ($('.header-menu').css('z-index') - 1),
                  'top' : (hMHeight + numberIndent) + 'px',
                  'bottom' : 'auto'
                });
              }
            }
          } else {
            if (!$blockBnrInTextBn.hasClass('no-fix')){
              $blockBnrInTextBn.removeClass('fix fix-bttm').addClass('no-fix').css({
                'position' : '',
                'z-index' : '',
                'top' : '',
                'bottom' : ''
              });
            }
          }
        }
      });
    }
  }
  if($('body').hasClass('infinity-page') != true){
    motionsBnrOnMainPage();
  }


  // main gallery
  // http://kenwheeler.github.io/slick/
  function onMainGallery() {
    var $galleryBlock = $('.main-gallery');
    $galleryBlock.slick({
      infinite: true,
        //variableWidth: true,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="slick-prev" title="назад"></div>',
        nextArrow: '<div class="slick-next" title="вперед"></div>',
        responsive: [
      {
        breakpoint: 788,//ширина экрана, от которой параметры изменятся
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 580,//ширина экрана, от которой параметры изменятся
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          draggable: true
        }
      }
      ]
    }).addClass('show');
  }

  if($('body').hasClass('front') || $('body').hasClass('page-taxonomy-term-423') || $('body').hasClass('page-taxonomy-term-57') ){
    onMainGallery();
  }


  // слайдер Сюжет
  // http://kenwheeler.github.io/slick/
  function onMainGallerySuzhet() {
    var $galleryBlock = $('.suzhet-slider');
    $galleryBlock.slick({
      infinite: true,
      draggable: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            infinite: true,
            draggable: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            infinite: true,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  $('.suzhet-slider').on('init', function(event, slick){
    var $this = $(this);
    if ($this.find('.slick-arrow').length == 0){
      $this.addClass('no-arrow');
    }
    $this.parents('.suzhet').addClass('show');
    setTimeout(function(){
      if(slick.options.adaptiveHeight != true){
        var thisBlockHeight = event.currentTarget.clientHeight;
        if (thisBlockHeight > 69){
          $this.find('.suzhet-item-material').each(function(indx, element){
            $(element).css('height',thisBlockHeight + 'px');
          });
        }
      }

      if ($('.header-menu .suzhet').length != 0){
        var eCtCh = event.currentTarget.clientHeight;
        // Появление и скрытие блока Сюжет в статьях
        var tempTop, curTop = 0;
        $(window).scroll(function(){
          var indentTop = tbh + $('.header-menu').outerHeight(true) + eCtCh;
          curTop = $(window).scrollTop();
          if (tempTop < curTop && curTop >= indentTop ){
            //scrolling down
            $('.header-menu .suzhet').removeClass('true');
          } else if (tempTop > curTop ){
            //scrolling up
            if (curTop < indentTop) {
              $('.header-menu .suzhet').removeClass('true');
            } else {
              $('.header-menu .suzhet').addClass('true');
              if (dWidth > 768 ) {
                $('.read-also.fix').css({
                  'height' : ($('.read-also').height() - eCtCh) + 'px',
                  'top' : (parseInt($('.read-also').css('top')) + eCtCh) + 'px'
                });
              }
            }
          }
          tempTop = curTop;
        });
      }
    },250);
  });
  if($('.suzhet').length != 0){
    onMainGallerySuzhet();
  }



  // все движения в блоке материала
  // http://manos.malihu.gr/jquery-custom-content-scroller/
  function motionsOnPage(){

    $('.content').each(function(indx, element){

      //Вас также может заинтересовать
      if ( $(element).find('.also-interested-gallery').length != 0 ) {
        if ($(element).find('.also-interested-gallery').hasClass('show') != true) {
          onAlsoInterestedGallery(indx);
        }
      }

      // read-also альтернативный скроллбар
      if ( $(element).find('.read-also-block-href').length != 0 ) {
        if ($(element).find('.read-also-block-href').hasClass('mCustomScrollbar') != true) {
          runMCustomScrollbar(indx);
        }
      }

    });

    // движения баннера справа и блока "читать также" слева
    if ($('body').attr('data-first-read-also') == '0') {
      $('.read-also').eq(0).css({
        'height' : ($(window).height() - tbh - $('header').outerHeight()) + 'px'
      });
      $('.read-also').eq(0).find('.read-also-block-href').css({
        'height' : ($(window).height() - tbh - $('header').outerHeight() - $('.content .soc-seti').outerHeight()) + 'px'
      });
      $('body').attr('data-first-read-also','1');
    }
    $('.content').each(function(indx, element){
      var i = $(element).attr('class');
      var elClassName = '.' + i.slice(i.indexOf(' ') + 1);

      $(elClassName + ' .col-left').css({
        'height' : $(elClassName + ' .col-center-in').outerHeight() + 'px'
      });

      var $blBnInText = $('.block-bnr-in-text')[indx];
      var $blLc = $('.content')[indx];
      //$('.fake-body').eq(indx).css('height',$(''+elClassName+'').innerHeight() + 'px');
      $(document).scroll(function () {
        // читать также слева
        $(elClassName + ' .col-left').css({
          'height' : $(elClassName + ' .col-center-in').outerHeight() + 'px'
        });
        var socSetiContent = $(elClassName + ' .soc-seti-content').outerHeight() + $(elClassName + ' .soc-seti-content').next().innerHeight();
        var Ra = $blBnInText.getBoundingClientRect();
        //var hMHeight = $('.header-menu').outerHeight() + suzhetHeight;
        var hMHeight = $('.header-menu').outerHeight();
        if ($('body').hasClass('admin-menu')) {
          hMHeight = hMHeight + adminMenuHeight;
        }
        var La = $blLc.getBoundingClientRect();
        if (Ra.top - hMHeight <= 0) { // соц сети
          $(elClassName + ' .soc-seti-content').show();
          $(elClassName + ' .read-also').addClass('soc');
          $(elClassName + ' .col-center-in .shares').css('opacity','0');
          $(elClassName + ' .read-also-block-href').css({
            'height' : ($(window).height() - socSetiContent - $('.header-menu').outerHeight()) + 'px'
          });
        } else {
          $(elClassName + ' .soc-seti-content').hide();
          $(elClassName + ' .read-also').removeClass('soc');
          $(elClassName + ' .col-center-in .shares').css('opacity','1');
        }
        var bnLeftHeight  = $(elClassName + ' .block-bnr-left').height();
        var L = La.bottom - bnLeftHeight - $(window).height();
        if (La.top - hMHeight <= 0) {
          if (L <= 0) {
            $(elClassName + ' .read-also').css({
              'position' : 'absolute',
              'top' : 'auto',
              'bottom' : ($(elClassName + ' .block-bnr-left').height() + 20 ) + 'px'
            }).addClass('stop').removeClass('fix');
          } else {
            //var socSetiHeight = 0;
            //($(elClassName + ' .read-also').hasClass('soc')) ? socSetiHeight = socSetiContent : socSetiHeight = 0;
            $(elClassName + ' .read-also').css({
              'position' : 'fixed',
              'top'      : hMHeight + 'px',
              'bottom'   : '',
              'height'   : ($(window).height() - hMHeight) + 'px'
            }).addClass('fix').removeClass('stop');
            $(elClassName + ' .read-also-block-href').css({
              'height' : ($(window).height() - hMHeight /*- $(elClassName + ' .soc-seti').outerHeight()*/) + 'px'
            });
          }
        } else {
          $(elClassName + ' .read-also').css({
            'position' : 'static',
            'top'      : 'auto',
            'bottom'   : 'auto',
            'height'   : ($(window).height() - La.top) + 'px'
          }).removeClass('fix');
          $(elClassName + ' .read-also-block-href').css({
            'height' : ($(window).height() - La.top /*- $(elClassName + ' .soc-seti').outerHeight()*/) + 'px'
          });
        }

        // баннер справа в тексте
        var articleTopHeight = $(elClassName + ' .article-top').outerHeight();
        var $blockBnrInTextBn  = $(elClassName + ' .block-bnr-in-text .bn');
        var bBnrInTextHeight = $blockBnrInTextBn.height();
        var textIndent = 10;
        var mobBanActive = 0; // движение блока с баннером справа, 0 - да, 1 - нет
        if (isMobile != true || isMobile == true && screen.width >= 768 ) {
          mobBanActive = 0;
        } else {
          mobBanActive = 1;
        }
        if (mobBanActive == 0) {
          if (articleTopHeight > bBnrInTextHeight && bBnrInTextHeight != 0) {
            $(elClassName + ' .block-bnr-in-text').css({
              'height' : articleTopHeight + 'px'
            });//.removeClass('min-height-false');
            if (Ra.top - hMHeight < 0) {
              if (Ra.bottom - bBnrInTextHeight - hMHeight - textIndent < 0) {
                $blockBnrInTextBn.removeClass('fix').css({
                  'position' : 'absolute',
                  'top' : 'auto',
                  'bottom' : '0'
                });
              } else {
                $blockBnrInTextBn.addClass('fix').css({
                  'position' : 'fixed',
                  'top' : (hMHeight + 1) + 'px',
                  'bottom' : 'auto'
                });
              }
            } else {
              $blockBnrInTextBn.removeClass('fix').css({
                'position' : '',
                'top' : '',
                'bottom' : ''
              });
            }
          }
        }
      });

    });


    //чтобы работали галереи в подгружаемых мат-х
    gallery();
  }

  //пересчитываю позиции
  function recalculateInfinityTopNHeight() {
    $('.content').each(function(i, item){
      var $item = $(item);
      for(var indx in window.infinity_scroll) {
        var divClass = 'screen-'+indx;
        if(!$item.hasClass(divClass)) { continue; }
        var posit = getInfinityTopNHeight($item);
        window.infinity_scroll[indx].top = posit.top;
        window.infinity_scroll[indx].height = posit.height;
      }
    });
  }


  //очищаю верхние материалы
  function clearTopInfMaterials() {
    var topNow = $(document).scrollTop();

    for(var indx in window.infinity_scroll) {
      var item = window.infinity_scroll[indx];

      if ((indx <= (window.infinity_scroll_pointer - 2)) && item.enabled) {
        $('.screen-' + indx).html('').remove();
        $('.page_addon-' + indx).html('').remove();
        $(document).scrollTop(topNow - item.height);
        window.infinity_scroll_download_init[indx] = 0;
        item.top = 0;
        item.height = 0;
        window.infinity_scroll[indx].enabled = false;

      }
    }

    //удаляю хвост
    for(var indx=window.infinity_scroll.length-1; indx>=0; indx--) {
      if((indx>(window.infinity_scroll_pointer-(-2)))) {
        $('.screen-'+indx).html('').remove();
        $('.page_addon-'+indx).html('').remove();
        $('.cover-'+indx).html('').remove();
        window.infinity_scroll_download_init[indx] = 0;
        window.infinity_scroll.splice(indx, 1);
      }
    }

    recalculateInfinityTopNHeight();
  }

    //переключения заголовков и урлов при перемещении между материалами
  function winScroll() {
    var scrollTop = $(document).scrollTop();

    for(var indx in window.infinity_scroll) {
      startRefreshInfinityElementData(indx);
      var contBlock = window.infinity_scroll[indx];
      var blockTop = contBlock.top;
      var blockHeight = contBlock.height;

      if ( scrollTop > blockTop && (scrollTop < (blockTop - (-1)*blockHeight - 0*0.5*window.winHeight))) {
        var newPointer = indx;
        if(newPointer != window.infinity_scroll_pointer) {
          window.infinity_scroll_pointer = newPointer;
          history.pushState('', '', window.infinity_scroll[newPointer].url);
          window.document.title = window.infinity_scroll[newPointer].title;

          //LentaInform - Размещение дополнительного счетчика
          lentaInformPixel();

          clearTopInfMaterials();

          if(window._mediator) {
            window._mediator.stop();
            console.log('mediator stopped');
            window._mediator.start({ // запускаем модуль с новыми параметрами
              article: $('.screen-'+indx+' .js-mediator-article'),
              url: $('.screen-'+indx).attr('data-url')
            });
            console.log('mediator started with article = .screen-'+indx+' .js-mediator-article | url = ' + $('.screen-'+indx).attr('data-url'));
          }
        }

        // для мобильной версии, появления блока соц кнопок вверху страницы
        if (isMobile != false) {
          if ( scrollTop > blockTop && scrollTop < blockTop + blockHeight) {
            var div = $('.screen-'+newPointer);
            if (div.find('.article-soc-for-mobile').hasClass('true') != true ) {
              $('.article-soc-for-mobile').removeClass('true');
              div.find('.article-soc-for-mobile').addClass('true');
            }
          }
        }
      }

      // затемнение слайда
      var $blCov = $('.cover-'+indx);
      if($blCov.length) {
        var blCov = $blCov[0];
        var Ca = blCov.getBoundingClientRect();
        if ((Ca.top - window.hMHeight > window.hMHeight) && (Ca.top < window.winHeight)) {
          var opacity = ('.' + Math.floor(Ca.top * 100 / $(window).height())).slice(0, 2);
          $blCov.css({ 'opacity': opacity });
          if(!$blCov.hasClass('true')) {
            $blCov.removeClass('false').addClass('true');
          }
        } else {
          if(!$blCov.hasClass('false')) {
            $blCov.css({ 'opacity': '0' }).removeClass('true').addClass('false');
          }
        }
      }
    }

    var lastIndx = window.infinity_scroll.length-1;
    var currentTop = $(document).scrollTop();
    //полтора экрана вниз будет новый материал
    var topLimit = window.infinity_scroll[lastIndx].top - (-1)*window.infinity_scroll[lastIndx].height - 3*window.winHeight;
    if(!window.infinity_scroll_download_init[window.infinity_scroll.length] && currentTop >= topLimit) {
      window.infinity_scroll_download_init[window.infinity_scroll.length] = 1;
      addNewContent();
    }

    var currItem = window.infinity_scroll[window.infinity_scroll_pointer];
    var prevIndx = window.infinity_scroll_pointer - 1;
    topLimit = currItem.top - (-2)*window.winHeight;
    if(prevIndx>=0 && !window.infinity_scroll[prevIndx].height && !window.infinity_scroll_download_init[prevIndx]
          && (currentTop < topLimit) ) {
      window.infinity_scroll_download_init[prevIndx] = 1;
      addOldContent(prevIndx);
    }

  }


  if ( $('body').hasClass('infinity-page') ) {
    $('body').attr('data-first-read-also','0');
    window.infinity_scroll = [];
    window.infinity_scroll_pointer = 0;
    window.infinity_scroll_download_init = [1];
    window.winHeight = $(window).height();
    window.hMHeight = $('.header-menu').outerHeight();

    var first_cont = $('.content:last');
    addInfinityElement(0, first_cont, window.location.pathname, window.document.title);

    motionsOnPage();

    // возврат ссылки при прокрутки назад
    $(document).scroll(function () { winScroll(); });

    // страница сразу вверх (по кнопке Home)
    $(window).keydown(function(eventObject){
      if (eventObject.which == 36) {
        for(var indx in window.infinity_scroll) {
          var inf_block = window.infinity_scroll[indx];
          if(inf_block.enabled){
            history.pushState('', '', inf_block.url);
            window.document.title = inf_block.title;
            window.infinity_scroll_pointer = indx;
            //LentaInform - Размещение дополнительного счетчика
            lentaInformPixel();
            break;
          }
        }
      }
    });

  }

  if ( $('body').find('.also-interested-gallery').length != 0 && $('body').hasClass('infinity-page') != true ) {
    onAlsoInterestedGallery(0);
  }
  if ( $('body').find('.read-also-block-href').length != 0 && $('body').hasClass('infinity-page') != true ) {
    runMCustomScrollbar(0);
  }



  function getInfinityTopNHeight(block) {
    var res = {};
    if(!block || !block.length) return {top:0, height:0};

    res.top = parseInt(block.offset().top.toString().split(/\./)[0]);
    res.height = block.height();
    return res;
  }



  function refreshInfinityElementData(indx, block) {
    if(!block || !block.length){
      block = $('.screen-'+indx);
    }
    var currentScrollItem = getInfinityTopNHeight(block);
    window.infinity_scroll[indx].top = currentScrollItem.top;
    window.infinity_scroll[indx].height = currentScrollItem.height;

  }

  function startRefreshInfinityElementData(indx) {
    if(!window.startInfRefresh) {
      window.startInfRefresh = {};
    }
    if(window.startInfRefresh[indx]) {
      clearTimeout(window.startInfRefresh[indx]);
    }
    window.startInfRefresh[indx] = setTimeout(function(){
      refreshInfinityElementData(indx);
    }, 500);
  }


  function addInfinityElement(indx, block, url, title) {
    if(window.infinity_scroll[indx]) { return; }

    var currentScrollItem = getInfinityTopNHeight(block);
    currentScrollItem.url = url;
    currentScrollItem.title = title;
    currentScrollItem.enabled = true;

    window.infinity_scroll[indx] = currentScrollItem;

    block.addClass('screen-' + indx).attr('data-screen', indx);
    setTimeout(function(){
      refreshInfinityElementData(indx, block);
    }, 1500);
  }


  // добавление нового материала
  function addNewContent(){
    var prev_cont = $('.content:last');
    var lastInfinityIndx = window.infinity_scroll.length-1;

    var url = prev_cont.attr('next-url');
    if (url != '') {
      yaCounter433635.reachGoal('infinity_page');

      $.ajax({
        url: url + '?cut=1',
        success: function(data) {
          var nextPointer = lastInfinityIndx - (-1);
          var newMaterial = $(data);

          $(newMaterial.get().reverse()).each(function(i, element) {
            $el = $(element);
            if($el.hasClass('cover')) $el.addClass('cover-'+nextPointer);
            if($el.hasClass('page_addon')) $el.addClass('page_addon-'+nextPointer);
            prev_cont.after($el);
          });
          //newMaterial.append('<div class="cover-'+nextPointer+'"></div>');
          var last_cont = $('.content:last');
          //prev_cont.after(newMaterial[0]);

          addInfinityElement(nextPointer, last_cont, url, prev_cont.attr('data-next-title'));

          //console.log('window.infinity_scroll', window.infinity_scroll);

          //console.log('height', $(document).height());
          //history.pushState('', '', window.infinity_scroll[nextPointer]['url']);

          motionsOnPage();
        }
      });
    }
  }

  function addOldContent(indx) {
    var url = window.infinity_scroll[indx].url;
    if (url != '') {
      yaCounter433635.reachGoal('infinity_page');

      $.ajax({
        url: url + '?cut=1',
        success: function(data) {
          var topAddon = $('body .top-content-place');
          if(!topAddon.length) {
            $('body header').after('<div class="top-content-place" style="height: 0;"></div>');
            topAddon = $('body .top-content-place');
          }
          var w = $('.content:last').width();
          topAddon.css({'width': w+'px'});
          topAddon.append(data);
          topAddon.find('.cover').remove();

          var content = topAddon.find('.content');
          var h = content.height();
          content.addClass('screen-'+indx);
          var pos = $(document).scrollTop();
          content.insertAfter(topAddon);

          content.insertAfter($('.cover-'+indx));
          topAddon.find('.page_addon').addClass('page_addon-'+indx);

          window.infinity_scroll[indx].enabled = true;

          $(document).scrollTop(pos-(-1)*h);

          recalculateInfinityTopNHeight();

          motionsOnPage();
        }
      });
    }
  }


  // http://manos.malihu.gr/jquery-custom-content-scroller/
  // read-also альтернативный скроллбар
  function runMCustomScrollbar(id){
    if (isMobile != true) {
      $('.content').eq(id).find('.read-also-block-href').mCustomScrollbar({
        theme: 'minimal-dark'
      });
    }
    setTimeout(function(){
      var teasers = $('.content').eq(id).find('.read-also-ads [id ^= "AdFox_banner"]');
      var news_a = $('.content').eq(id).find('.read-also-block-href .mCSB_container a');
      if (isMobile == true) {
        news_a = $('.content').eq(id).find('.read-also-block-href a');
      }
      //[3,4,5,8,9]

      var spam_items = {1:[2,1,0], 3:[6,5,4,3]};
      for(var news_i in spam_items){
        var poses = spam_items[news_i];
        //console.log('a', news_a.eq(news_i));
        for(var j in poses) {
          var pos = poses[j];
          //console.log('t', teasers[pos]);
          if(typeof teasers[pos] != 'undefined') {
            news_a.eq(news_i).after(teasers[pos]);
          }
        }
      }
    }, 1000);
  }

  // Вас также может заинтересовать
  function onAlsoInterestedGallery(id) {
    var $galleryBlock = $('.content').eq(id).find('.also-interested-gallery');
    $galleryBlock.slick({
      //centerMode: true,
      //centerPadding: '0px',
      infinite: true,
      variableWidth: true,
      draggable: false,
      slidesToShow: 4,
      slidesToScroll: 3,
      prevArrow: '<div class="slick-prev" title="назад"></div>',
      nextArrow: '<div class="slick-next" title="вперед"></div>',
      responsive: [
        {
          breakpoint: 788,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            draggable: true
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            draggable: true,
            prevArrow: '<div class="slick-prev-mob" title="назад"></div>',
            nextArrow: '<div class="slick-next-mob" title="вперед"></div>'
          }
        }
      ]
    }).addClass('show');

    //add adfox
    setTimeout(function(){
      //[3, 5]
      var teasers = $('.content').eq(id).find('.also-interested-ads div[id ^= "AdFox_banner"]');
      if (teasers.length > 0) {
        if (teasers[0].innerHTML != '') {
          $('.content').eq(id).find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="2"]').html('').prepend(teasers[0].innerHTML);
          $('.content').eq(id).find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="-2"]').html('').prepend(teasers[0].innerHTML);
        }
        if (teasers[1].innerHTML != '') {
          $('.content').eq(id).find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="4"]').html('').prepend(teasers[1].innerHTML);
          $('.content').eq(id).find('.also-interested:eq(0) .also-interested-gallery-item[data-slick-index="-4"]').html('').prepend(teasers[1].innerHTML);
        }
      }
    }, 1000);
  }

  // mobile for block also-interested-gallery
  if (isMobile == true && screen.width <= 736) {
    var b = document.getElementsByTagName('body')[0];
    var aigiWidth = Math.round(screen.width/1.7);
    var aigiHeight = Math.round(aigiWidth/1.2);
    b.insertAdjacentHTML('beforeend', '<style>' +
        '.page-node .content .also-interested .also-interested-gallery .also-interested-gallery-item {' +
        'width:' + aigiWidth + 'px;' +
        'height:' + aigiHeight + 'px;' +
        '}' +
        '</style>');
  }


  // show-for-mobile in block read-also for mobile
  $('.content').on('click touchstart', '.show-read-also-for-mobile', function(e){
    e.preventDefault();
    var screenIndex = $(this).parents('.content').attr('data-screen');
    if ($(this).hasClass('true') != true){
      $('body').addClass('open-read-also-for-mobile');
      $('.content[data-screen="' + screenIndex + '"] .col-left').css({
        'left' : '0'
      });
      $('.content[data-screen="' + screenIndex + '"] .col-left .show-read-also-for-mobile').addClass('true');
      $('.cover').eq(parseInt(screenIndex)).css('z-index','-1');
    } else {
      $('.content[data-screen="' + screenIndex + '"] .col-left').css({
        'left' : ''
      });
      $('.content[data-screen="' + screenIndex + '"] .col-left .show-read-also-for-mobile').removeClass('true');
      $('body').removeClass('open-read-also-for-mobile');
      $('.cover').eq(parseInt(screenIndex)).css('z-index','');
    }
  });


  // показывать и скрвывть блок с социальными кнопками при прокрутки страницы
  if (isMobile == true && screen.width <= 736) {
    var tempScrollTop, currentScrollTop = 0;
    $(window).scroll(function(){
      currentScrollTop = $(window).scrollTop();
      if (tempScrollTop < currentScrollTop && currentScrollTop >= 62 ){
        //scrolling down
        $('body').addClass('artSocForMobile-true');
      } else if (tempScrollTop > currentScrollTop ){
        //scrolling up
        $('body').removeClass('artSocForMobile-true');
      }
      tempScrollTop = currentScrollTop;
    });
  }



  // documentation
  // http://kenwheeler.github.io/slick/
  // Блок галереи на странице
  function gallery(){
    var $gallery = $('.block-gallery');
    $('.block-gallery').each(function(indx, element){
      var $bigSlickElement = $gallery.eq(indx).find('.big-photo-block');
      var $smallSlickElement = $gallery.eq(indx).find('.small-photo-block');
      var $photoTextElement = $gallery.eq(indx).find('.photo-text-block');
      if ($bigSlickElement.hasClass('show') != true) {
        var slickParams = {
          infinite: false,
          draggable: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          lazyLoad: 'progressive',
          prevArrow: '<div class="slick-prev" title="назад"></div>',
          nextArrow: '<div class="slick-next" title="вперед"></div>',
          asNavFor: $photoTextElement,
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: true
              }
            },
            {
              breakpoint: 580,
              settings: {
                draggable: true,
                prevArrow: '<div class="slick-prev-mob" title="назад"></div>',
                nextArrow: '<div class="slick-next-mob" title="вперед"></div>'
              }
            }
          ]
        };
        if($('body').hasClass('page-forbes-brandvoice-emc')) {
          slickParams.infinite = true;
          slickParams.responsive[0].variableWidth = true;
        }
        $bigSlickElement.slick(slickParams);


        var smallSlickParams = {
          slidesToShow: 8,
          slidesToScroll: 8,
          lazyLoad: 'ondemand',
          variableWidth: true,
          infinite: false,
          draggable: false,
          prevArrow: '<div class="slick-prev"></div>',
          nextArrow: '<div class="slick-next"></div>',
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: true
              }
            },
            {
              breakpoint: 580//,
              //settings: 'unslick'
            }
          ]
        };
        if($('body').hasClass('page-forbes-brandvoice-emc')) {
          smallSlickParams.infinite = true;
          smallSlickParams.slidesToShow = 4;
          smallSlickParams.slidesToScroll = 4;
        }
        $smallSlickElement.slick(smallSlickParams).find('.small-photo-block-item[data-slick-index=0]').addClass('slick-show-slide');

        $photoTextElement.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slickParams.infinite,
          draggable: false,
          adaptiveHeight: true,
          prevArrow: '',
          nextArrow: '',
          responsive: [
            {
              breakpoint: 788,
              settings: {
                draggable: false,
                swipe: false
              }
            }
          ]
        });

        $bigSlickElement.addClass('show');
        $smallSlickElement.addClass('show');
        $photoTextElement.addClass('show');

        $bigSlickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = currentSlide ? currentSlide : 0;
          $smallSlickElement.find('.small-photo-block-item').removeClass('slick-show-slide');
          $smallSlickElement.find('.small-photo-block-item[data-slick-index="' + i + '"]').addClass('slick-show-slide');
          $smallSlickElement.slick('slickGoTo',currentSlide);
        });

        var itemLength = $smallSlickElement.find('.small-photo-block-item').length;
        if (itemLength <= 8){
          var itemElementWidth = $smallSlickElement.find('.small-photo-block-item').outerWidth(true);
          $smallSlickElement.find('.slick-track').css({
            'max-width' : (itemElementWidth * itemLength) + 'px'
          });
        }

        $bigSlickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
          //сменить урл, дёрнуть рекламу и счётчики
          var new_url = window.location.origin + window.location.pathname + '?photo='+ (currentSlide + 1);
          var curr_page = window.location.search;
          curr_page = curr_page.match('photo=([0-9]+)');
          var curr_ph = 1;//номер фото до переключения
          if (curr_page != null) {
            curr_ph = parseInt(curr_page[1]);
          }
          var old_title_part = $smallSlickElement.find('.photo-slick-title').eq(curr_ph-1).html();
          var new_title_part = $smallSlickElement.find('.photo-slick-title').eq(currentSlide).html();
          var new_title = document.title.replace(old_title_part, new_title_part);

          var gall_nid = $(this).parent().attr('data-gall-nid');


          refreshCounters(new_url, new_title, gall_nid);
        });

        var galleryTop = $(".article-bottom-first").offset().top;
        $gallery.eq(indx).find('.small-photo-block-item').on('click', function(){
          var tag = $(this);
          if(tag.hasClass('second')) {
            $('html, body').animate({ scrollTop: galleryTop }, 2000)
          }
          var slideIndex = parseInt(tag.attr('data-slick-index'));
          $bigSlickElement.slick('slickGoTo',slideIndex);
          $photoTextElement.slick('slickGoTo',slideIndex);
          $('.small-photo-block-item').removeClass('slick-show-slide');
          tag.addClass('slick-show-slide');
        });
      }
    });
    $(document).resize();//lifehack

    // прокрутка (скролл) к фото
    var dlh = decodeURIComponent(document.location.search);
    if (dlh != ''){
      var myRe = /photo=\d*/;
      if ( myRe.test(dlh) ) {
        var $blGall = $('.block-gallery').eq(0);
        var numberPhoto = myRe.exec(dlh)[0].split('=')[1];
        if ($blGall.attr('data-scroll-to') == undefined){
          $blGall.attr('data-scroll-to','true');
          $blGall.find('.small-photo-block-item[data-slick-index="' + (numberPhoto - 1) + '"]').click();
          var mobIndent = 0;
          if (isMobile == true && dWidth <= 414){
            mobIndent = 70;
          }
          setTimeout(function(){
            var marTop = parseInt($blGall.css('margin-top'));
            $(document).scrollTop($blGall.offset().top - $('.header-menu').outerHeight() - mobIndent - (marTop - 2));
          }, 2000);
        }
      }
    }
  }
  gallery();

  //функция сменит урл, обновит счётчики и рекламные коды
  function refreshCounters(newUrl, title, gall_nid) {
    history.pushState('', title, newUrl);

    //counters
    console.log('New tns hit ' + newUrl);
    if(typeof tnsCounterforbes_ru != 'undefined')tnsCounterforbes_ru.hit('forbes_total', newUrl);
    console.log('New ya hit ' + newUrl);
    if(yaCounter433635)yaCounter433635.hit(newUrl);
    console.log('New instat hit ' + gall_nid);
    renderInStatPixel(gall_nid);

    //ga('set', { page: newUrl, title: title });
    //ga('send', 'pageview');

    // Reload adfox.
    timestamp = localStorage.getItem('gall_ads_timestamp');
    if (timestamp == null) {
      timestamp = new Date().getTime() / 1000 | 0;
      localStorage.setItem('gall_ads_timestamp', timestamp);
    }
    var now = new Date().getTime() / 1000 | 0;
    var delta = now - timestamp;
    if (delta > 10) {
      //if(window.ADFOX) window.ADFOX.RELOAD_CODE.reloadBanners();//убрать
      //if(window.Ya) window.Ya.adfoxCode.reload();//оставить

      var top_300_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="top_300"]').attr('id');
      var bottom_300_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="bottom_300"]').attr('id');
      var middle_690_240_id = $('div.content[data-nid="'+gall_nid+'"] [data-banner-type="middle_690_240"]').attr('id');
      var bg_id =  $('[data-banner-type="bg"]').attr('id');
      if(mob == true) {
        var header_id = $('div.content[data-nid="'+gall_nid+'"]').prev().prev().find('[data-banner-type="top-header-mob"]').attr('id');
      } else {
        var header_id = $('div.content[data-nid="'+gall_nid+'"]').prev().prev().find('[data-banner-type="top-header"]').attr('id');
      }

      if (top_300_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(top_300_id);
      }
      if (bottom_300_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(bottom_300_id);
      }
      if (middle_690_240_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(middle_690_240_id);
      }
      if (bg_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(bg_id);
      }
      if (header_id) {
        if(window.Ya) window.Ya.adfoxCode.reload(header_id);
      }
      console.log('Banners reloaded');

      localStorage.setItem('gall_ads_timestamp', now);
    }
  }


  //пейджер внутри материала
  $('body').on('click', '.pagination-item', function(){
    var page = $(this).attr('data-number');
    $(this).parents('.content').find('.body-page').hide();
    $(this).parents('.content').find('.body-part-top .body-page').eq(page - 1).show();
    $(this).parents('.content').find('.body-part-bottom .body-page').eq(page - 1).show();
    $('.pagination-item').removeClass('active');
    $(this).addClass('active');
    var topC = $(this).parents('.content').offset().top;
    $('html,body').animate({ scrollTop: topC }, 300);
  });
  $('body').on('click','.further', function(){
    var curr_page = $(this).parents('.pagination').find('.active').attr('data-number');
    if (curr_page == $(this).parents('.pagination').find('.pagination-item').length) {
      return false;
    } else {
      var next = parseInt(curr_page) + 1;
      $(this).parents('.pagination').find('.pagination-item').eq(next-1).click();
    }
  });


  // появление кнопки "Наверх"
  if ( $('.page-node').length != 0 && isMobile == false ){
    var $upButtonPage = $('.up-button-page');
    var cWidth = $('.content').width();
    var wWidth = $(window).width();

    function rightUpBuutonPage(){
      $upButtonPage.css({
        'right' : ((wWidth - cWidth)/2) + 'px'
      });
    }
    rightUpBuutonPage();

    $(window).resize(function(){
      rightUpBuutonPage();
    });

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      var wHeight = $(window).height();
      if (wScroll > wHeight/2){
        $('.up-button-page').addClass('true');
      } else {
        $('.up-button-page').removeClass('true');
      }
    });

    $upButtonPage.click(function(){
      if ($(this).hasClass('true')){
        yaCounter433635.reachGoal('to_top');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      }
    });
  }


  // страница Видео
  if ($('.block-page-video').length != 0){
    var VideoBigImg = document.getElementById('big-img-block-page-video');
    function onPageVideoCustomScrollbar(){
      var VideoBigImgHeight = VideoBigImg.height;
      var VideoFreshVideoName = $('.block-page-video').find('.fresh-videos .name').outerHeight();
      $('.fresh-videos').addClass('true');
      $('.fresh-videos .block-href').css({
        'height' : (VideoBigImgHeight - VideoFreshVideoName)  + 'px'
      });
      $('.block-page-video').find('.fresh-videos .block-href').mCustomScrollbar({
        theme: 'minimal-dark'
      });
    }
    onPageVideoCustomScrollbar();
    VideoBigImg.addEventListener('load', onPageVideoCustomScrollbar);
    //VideoBigImg.onload = onPageVideoCustomScrollbar();
  }


  // страница Результатов Поиска
  $('.ap-solr-filter .link-sort').click(function(){
    var thisAttr = $(this).attr('data-sort-by');
    if ($(this).hasClass('active-link') != true) {
      $('.block-page-search form input[name="sort_by"]').val(thisAttr);
      $('.block-page-search form').submit();
    }
    return false;
  });


  // страница 404 или 403
  if( $('.four-hundred-four').length != 0) {
    $('body').addClass('four-0-four');
  }


  // страница Популярное на forbes.ru
  if( $('.page-popular').length != 0 && $(window).width() <= 560) {
    var $bar = $('.block-authors-rating');
    $('.main-section-list.popular').append($bar);
  }


  // В подвале странице Our Brands в мобильной версии и таблет
  if (isMobile == true) {
    $('.acmg-button-footer .block-choice-open').addClass('false');
    $('.acmg-button-footer .block-choice.in').click(function(){
      var bco = $(this).parent('.block-choice-open').css('display');
      if (bco == 'block'){
        $(this).parent('.block-choice-open').addClass('false').removeClass('true');
      } else {
        $(this).parent('.block-choice-open').addClass('true').removeClass('false');
      }
    });
    $('.acmg-button-footer .block-choice.top').click(function(){
      var tnd = $(this).next().css('display');
      if (tnd == 'none'){
        $(this).next().addClass('true').removeClass('false');
      }
    });
  }


  function subscribeThisPage(tag) {
    var email = tag.parent().find('input.email').val();
    var type = tag.attr('data-type');
    var id = tag.attr('data-id');
    var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('!!!', email, type, id, checkEmail.test(email));
    if(email && checkEmail.test(email) && type && id) {
      console.log('!!! email ok');
      $.ajax({
        type: 'POST',
        url: '/admin/unisender/subscribe',
        data: {
          'email':email,
          'id':id,
          'type':type
        },
        success: function (data) {
          console.log('subscr', data);
          subscribe_unisender_layer(0);
        }
      });
    }
  }


  function subscribe_unisender_layer(show) {
    if(show) {
      $('body').addClass('subscribe-this-page-open');
      $('.subscribe-this-page-bgnd').addClass('show');
      //$('.drum-brandvoice-head-right .bt-blue-mode').hide();
    }else{
      $('body').removeClass('subscribe-this-page-open');
      $('.subscribe-this-page-bgnd').removeClass('show');
      $('.drum-brandvoice-head-right .bt-blue-mode').show();
    }
  }

  function authorInforMoreInit() {
    $('.author-box .more').click(function() {
      $('.author-box .more').hide();
      var textDiv = $('.author-box .about-author .text');
      textDiv.css({height: 'auto'});
      var h = textDiv.height();
      $('.author-box .about-author .text-up').animate({height: h+'px'}, "slow");
    });
  }


  function iframeTotalResize() {
    $('.body-part-top .body-page iframe, .body-part-bottom .body-page iframe, iframe.youtube, iframe.tvigle').each(function(i, item) {
      var frame = $(item);
      if(!frame.attr('id')) {
        var id = 'frame'+Date.now();
        frame.attr('id', id);
        var new_w = frame.closest('div').width();
        var w = frame.attr('width')?frame.attr('width'):frame.width();
        var h = frame.attr('height')?frame.attr('height'):frame.height();
        frame.css('width', new_w+'px');
        var new_w = parseInt(frame.css('width'));
        var prop = new_w / w;
        frame.css('height', parseInt(h * prop))
      }
    });
  }

  function slickAntiCrashRunner() {
      if(scrollSlickAnticrashTimer){
        clearTimeout(scrollSlickAnticrashTimer);
      }
      scrollSlickAnticrashTimer = setTimeout(function () {
          slickAntiCrash();
      }, 1000);
  }


  function slickAntiCrash() {
    console.log('slick checking...');
    var photoBlock = $('.content .article-bottom .photo-text-block');
    console.log('slick - search photoBlock...');
    if(!photoBlock.length) return;

    var items = photoBlock.find('.photo-text-block-item');
    console.log('slick - search items...');
    if(!items.length) return;

    var slickList = photoBlock.find('.slick-list');
    console.log('slick - slickList width...');
    if(slickList.width()>0) return;
    console.log('slick bug!');

    photoBlock.show();
    var w = photoBlock.width();
    var h = 0;
    var totalW = 0;
    items.each(function (i, item) {
        $(item).width(w);
        totalW -= (-1)*w;
        if(!h) h = $(item).height();
    });
    photoBlock.find('.slick-track').width(totalW);
    slickList.height(h);

    console.log('slick patched!');
  }

  //я не знаю, какая херь скрывает этот блок. поиск по вхождению ни черта не дал. просто включаю блок назад
  function showBottomAlsoInterested() {
    $(window).scroll(function(){
        var alsoInterested = $('.also-interested.place-bottom');
        var bottomBody = alsoInterested.parent().find('.body-part-bottom');
        if(bottomBody.height()<30) {
            alsoInterested.hide();
        }else{
            alsoInterested.show();
        }
    });


  }

})(jQuery);
