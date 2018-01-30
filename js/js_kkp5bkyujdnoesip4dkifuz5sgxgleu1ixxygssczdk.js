Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Next":"\u0412\u043f\u0435\u0440\u0451\u0434","Status":"\u0421\u0442\u0430\u0442\u0443\u0441","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Size":"\u0420\u0430\u0437\u043c\u0435\u0440","none":"\u043d\u0435\u0442","Sunday":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","Monday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","Tuesday":"\u0432\u0442\u043e\u0440\u043d\u0438\u043a","Wednesday":"\u0441\u0440\u0435\u0434\u0430","Thursday":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433","Friday":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430","Saturday":"\u0441\u0443\u0431\u0431\u043e\u0442\u0430","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Filename":"\u0418\u043c\u044f \u0444\u0430\u0439\u043b\u0430","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","All":"\u0412\u0441\u0435","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","N\/A":"\u041d\/\u0414","OK":"OK","Prev":"\u041d\u0430\u0437\u0430\u0434","Mon":"\u043f\u043d","Tue":"\u0432\u0442","Wed":"\u0441\u0440","Thu":"\u0447\u0442","Fri":"\u043f\u0442","Sat":"\u0441\u0431","Sun":"\u0432\u0441","January":"\u044f\u043d\u0432\u0430\u0440\u044f","February":"\u0444\u0435\u0432\u0440\u0430\u043b\u044f","March":"\u043c\u0430\u0440\u0442\u0430","April":"\u0430\u043f\u0440\u0435\u043b\u044f","May":"\u043c\u0430\u044f","June":"\u0438\u044e\u043d\u044f","July":"\u0438\u044e\u043b\u044f","August":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","September":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","October":"\u043e\u043a\u0442\u044f\u0431\u0440\u044f","November":"\u043d\u043e\u044f\u0431\u0440\u044f","December":"\u0434\u0435\u043a\u0430\u0431\u0440\u044f","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","Jan":"\u044f\u043d\u0432","Feb":"\u0444\u0435\u0432","Mar":"\u043c\u0430\u0440","Apr":"\u0430\u043f\u0440","Jun":"\u0438\u044e\u043d","Jul":"\u0438\u044e\u043b","Aug":"\u0430\u0432\u0433","Sep":"\u0441\u0435\u043d","Oct":"\u043e\u043a\u0442","Nov":"\u043d\u043e\u044f","Dec":"\u0434\u0435\u043a","Su":"\u0432\u0441","Mo":"\u043f\u043d","Tu":"\u0432\u0442","We":"\u0441\u0440","Th":"\u0447\u0442","Fr":"\u043f\u0442","Sa":"\u0441\u0431","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","mm\/dd\/yy":"mm\/dd\/yy","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","Other":"\u0414\u0440\u0443\u0433\u043e\u0435","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","New":"\u041d\u043e\u0432\u043e\u0435","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total","all":"\u0432\u0441\u0435","Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","Select all":"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435","Deselect all":"\u0421\u043d\u044f\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u043e \u0432\u0441\u0435\u0433\u043e","Also allow !name role to !permission?":"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 !name \u043f\u0440\u0430\u0432\u0430 !permission?","Scheduled for publishing":"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044e","Scheduled for unpublishing":"\u0417\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043d\u0430 \u0441\u043d\u044f\u0442\u0438\u0435 \u0441 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","Not scheduled":"\u041d\u0435 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e","Publishing enabled":"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430","Unpublishing enabled":"\u0421\u043d\u044f\u0442\u0438\u0435 \u0441 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b.","Loading token browser...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0442\u043e\u043a\u0435\u043d\u043e\u0432...","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","Media browser":"\u041c\u0435\u0434\u0438\u0430\u0431\u0440\u0430\u0443\u0437\u0435\u0440","Submit":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","Start upload":"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443","Cannot continue, nothing selected":"\u041d\u0435 \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Select all children":"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435\u0445 \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432","Hide description":"\u0421\u043a\u0440\u044b\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","Show description":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0434\u0430\u043d\u043d\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","List additional actions":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","Add files":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b","Select files":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b","Add files to the upload queue and click the start button.":"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0022\u0421\u0442\u0430\u0440\u0442\u0022","Stop current upload":"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443","Start uploading queue":"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443","Drag files here.":"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430","Error: File too large: ":"\u041e\u0448\u0438\u0431\u043a\u0430: \u0424\u0430\u0439\u043b \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439: ","Error: Invalid file extension: ":"\u041e\u0448\u0438\u0431\u043a\u0430: \u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430: ","Uploaded %d\/%d files":"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e %d\/%d \u0444\u0430\u0439\u043b\u043e\u0432","File extension error.":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430.","File size error.":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430.","IO error.":"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0432\u043e\u0434\u0430-\u0432\u044b\u0432\u043e\u0434\u0430.","Stop upload":"\u041f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443","Please wait while your files are being uploaded.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043f\u043e\u043a\u0430 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d.","Uploading...":"\u0417\u0430\u043a\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f...","Inclusion: @value":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: @value","Priority: @value":"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442: @value"}} };;
/**
 * @file
 * Integration file for fancyBox module.
 */

(function($) {
  Drupal.behaviors.fancyBox = {
    attach: function(context, settings) {
      var selectors = ['.fancybox'];

      if (typeof settings.fancybox === 'undefined') {
        settings.fancybox = {};
      }

      if (typeof settings.fancybox.options === 'undefined') {
        settings.fancybox.options = {};
      }

      if (typeof settings.fancybox.callbacks !== 'undefined') {
        $.each(settings.fancybox.callbacks, function(i, cal) {
          settings.fancybox.options[i] = window[cal];
        });
      }

      if (typeof settings.fancybox.helpers !== 'undefined') {
        settings.fancybox.options.helpers = settings.fancybox.helpers;
        delete settings.fancybox.helpers;
      }

      if (typeof settings.fancybox.selectors !== 'undefined') {
        selectors = selectors.concat(settings.fancybox.selectors);
      }

      // Not needed because behaviors are reattached.
      settings.fancybox.options.live = false;

      $(selectors.join(',')).fancybox(settings.fancybox.options);
    }
  };
})(jQuery);
;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
(function($){
  var stat;

  var Stat = function(group, sections, staffs_) {
    var self = this;
    self.sections = {};
    self.sectionsOrder = [];
    var root = $('.statistic');
    var tableHead = root.find('.data table thead');
    var tableBody = root.find('.data table tbody');
    var tablePager = root.find('.content .pager');
    var tableSumm = root.find('.data .summary .summary_table');
    var excelResponse = root.find('.excel-response');

    var staffs = staffs_;
    var summConfig = {
      sections : {fields:
        {'nid_users':'Читателей', 'nid_views':'Просмотров', 'nid_shares':'Шар'},
        appearance:'section'
      },
      authors : {fields:
        {'author_count':'Авторов', 'nid_users':'Читателей', 'nid_views':'Просмотров', 'nid_shares':'Шар'},
        appearance:'section'
      },
      nodes : {fields:
        {'nid_count':'Материалов', 'nid_users':'Читателей', 'nid_views':'Просмотров', 'nid_shares':'Шар'},
        appearance:'section'
      },
      authpay : {fields:
        {'nid_count':'Всего материалов за %month%', 'nid_views':'Всего просмотров созданных материалов за 31 день после публикации'},
        appearance:'authpay'
      },
      statement : {fields:
        {'nid_count':'Всего материалов за %month%', 'nid_views':'Всего просмотров созданных материалов за 31 день после публикации'},
        appearance:'authpay'
      }

    };

    var dayMonthYear = function(date, type){
      var res = 0;
      switch (type) {
        case 'd':
          res = date.getDate();
          if(res<10) res = '0'+res;
          break;
        case 'm':
          res = date.getMonth()-(-1);
          if(res<10) res = '0'+res;
          break;
        case 'y':
          res = date.getFullYear();
          break;
      }
      return res;
    };

    //======================
    self.setSections = function(inputSections) {
        self.sections = {};
        self.sectionsOrder = [0];
        //сказали удалить
        if (window.location.host == 'www.forbes.ru') {
            var forDelete = [4, 2858, 17038, 19521, 20665, 38459, 40097];
            /* todo добавить в удалённые и компании 19481*/
            for (var i in forDelete) {
                delete inputSections[forDelete[i]];
            }
        }
        for(var secId in inputSections) {
          self.sections[+secId] = inputSections[secId];
        }

        //порядок должен быть привычным - замороченная тема в javascript
        var orderedSections = [
            { id:35777, name: 'Бизнес' },
            { id:5, name: 'Финансы и инвестиции' },
            { id:19480, name: 'Миллиардеры' },
            { id:19481, name: 'Компании' },
            { id:8, name: 'Технологии' },
            { id:7, name: 'Карьера и свой бизнес' },
            { id:57, name: 'life' },
            { id:423, name: 'woman' }
        ];
        for (var i in orderedSections) {
          var ordSect = orderedSections[i];
          if (self.sections[ordSect.id]) {
              self.sectionsOrder.push(+ordSect.id);
          }
        }
        var ordI = self.sectionsOrder.length;
        for(var sectId in self.sections) {
          //console.log(sectId+'!('+self.sections[sectId]+')', $.inArray( +sectId,  self.sectionsOrder), self.sectionsOrder);
          if($.inArray( +sectId,  self.sectionsOrder) == -1) {
            self.sectionsOrder.push(+sectId);
            ordI++;
          }
        }
        // console.log(self.sections);
        // console.log(self.sectionsOrder);
    };

    self.setSections(sections);

    var date = new Date();
    var date2 = new Date();
    date.setDate(date.getDate()-1);
    var reqv = {
      begin : dayMonthYear(date, 'd')+'-'+dayMonthYear(date, 'm')+'-'+dayMonthYear(date, 'y'),
      end : dayMonthYear(date2, 'd')+'-'+dayMonthYear(date2, 'm')+'-'+dayMonthYear(date2, 'y'),
      section_id : 0,
      author_id : 0,
      sort : 'nid_views', //author, date, views, users, nid_count,
      sort_desc : 1,
      page : 0,
      mode: self.sections,
      only_new: 1,
      only_payed: 1,
      only_contrib: 0,
      year:2017,
      month:1,
      staff_name:''
    };

    var titles = {
      sections : {
        'main': {
          date_pub: 'Дата публикации',
          title: 'Заголовок материала',
          main_section: 'Каналы',
          a_names: 'Автор материала',
          nid_users: 'Количество читателей',
          nid_views: 'Просмотров',
          total_shares: 'Количество шар'
        }
      },
      authors : {
        'main': {
            a_names: 'Имя автора',
            main_section: 'Каналы',
            staff: 'Staff/Contrib',
            nid_count: 'Материалов',
            nid_users: 'Количество читателей',
            nid_views: 'Просмотров',
            total_shares: 'Количество шар'
          }
        },
      nodes : {
        'main': {
          title: 'Название материала',
          a_names: 'Имя автора',
          main_section: 'Каналы',
          nid_users: 'Количество читателей',
          nid_views: 'Просмотров',
          total_shares: 'Количество шар'
        }
      },
      authpay : {
        'main': {
          a_names: 'Имя автора',
          staff: 'Staff/Contrib',
          main_section: 'Каналы',
          nid_count: 'Материалов',
          nid_views: 'Просмотров за 31 день',
          pay_fix: 'Фикс.',
          pay_traff: 'За трафик',
          pay_total: 'К оплате'
        },
        'author': {
          date_pub: 'Дата публикации',
          title: 'Заголовок материала',
          main_section: 'Канал',
          nid_views: 'Просмотров за 31 день',
          pay_fix: 'Фикс.',
          pay_traff: 'За трафик',
          pay_total: 'К оплате'
        }
      },
      statement : {
        'main': {
          a_names: 'Имя автора',
          staff: 'Staff/Contrib',
          main_section: 'Канал',
          date_pub: 'Дата публикации',
          title: 'Заголовок материала',
          nid_users: 'Пользователей за 31 день',
          //nid_views: 'Просмотров за 31 день',
          pay_fix: 'Фикс.',
          pay_traff: 'За трафик',
          pay_total: 'К оплате'
        },
        'author': {
            date_pub: 'Дата публикации',
            title: 'Заголовок материала',
            main_section: 'Канал',
            nid_views: 'Просмотров за 31 день',
            pay_fix: 'Фикс.',
            pay_traff: 'За трафик',
            pay_total: 'К оплате'
        }
      },
      status_author : {
        'main': {
          name: 'Имя автора',
          staff: 'Staff/Contrib',
          nid_count: 'Материалов',
          nodes: 'Материалы'
        }
      }
    };

    var currentGroup = group?group:'sections';
    var currentGroupMode = 'main';


    //======================
    self.setGroup = function(group) {
      currentGroup = group;
      currentGroupMode = 'main';
      var filter = root.find('.filter');
      if(currentGroup == 'authpay' || currentGroup == 'statement') {
        if(reqv.sort == 'nid_views') {
            reqv.sort = 'a_names';
            reqv.sort_desc = 0;
        }

        for(var nm in {'year':1, 'month':1, 'staff_name':1, 'only-payed':1}) { //, 'staff_name':1
          filter.find('.'+nm).show();
        }
        for(var nm in {'dates':1, 'only-new':1, 'only-contrib':1}) { //, 'only-contrib':1
          filter.find('.'+nm).hide();
        }
      }else{
        for(var nm in {'year':1, 'month':1, 'only-contrib':1, 'only-payed':1}) { //, 'staff_name':1
          filter.find('.'+nm).hide();
        }
        for(var nm in {'dates':1, 'only-new':1, 'staff_name':1}) { //, 'only-contrib':1
          filter.find('.'+nm).show();
        }
      }
      console.log('current group = ', currentGroup);
    };


    //======================
    self.fill_FieldType_title = function(name, line) {
      return '<td class="' + name + '"><a target="_blank" href="/node/'+line.nid+'">' + line[name] + '</a></td>';
    };


    //======================
    self.fill_FieldType_main_section = function(name, line) {
      var value = line[name];
      var section_names = [];

      if(value && value.indexOf(',')){
        var names = value.split(',');
        for(var i in names){
          if(self.sections[names[i]]) {
            section_names.push(self.sections[names[i]]);
          }else if(names[i]) {
            section_names.push(names[i]);
          }
        }
      }else{
        if(self.sections[value]) {
          section_names.push(self.sections[value]);
        }else if(value) {
          section_names.push(value);
        }
      }

      return '<td class="' + name + '">' + section_names.join(', ') + '</td>';
    };


    //======================
    self.fill_FieldType_a_names = function(name, line) {
      var res = '<td class="' + name + '">';
      for(var nid in line.authors) {
        res += '<span class="author_name" data-author-id="'+nid+'">' + line.authors[nid] + '</span> <a target="_blank" href="/node/'+nid+'">[info]</a> ';
      }
      res += '</td>';
      return res;
    };

    //======================
    self.fill_FieldType_nid_users = function(name, line) {
      if(currentGroup == 'statement' || currentGroup == 'authpay') {
          // console.log('$$$', line.nid_view_list);
          var nid_count = line['nid_count'];
          var val_users = 0;
          var val_ya_users = 0;
          if(line.nid_view_list) {
              for(var nid in line.nid_view_list) {
                  val_users -= -1*line.nid_view_list[nid].users;
                  val_ya_users -= -1*line.nid_view_list[nid].ya_users;
              }
          }else{
              val_users = line[name];
          }
          //console.log('$$$', line.nid_view_list, val_users, val_ya_users);

          if(val_users==null) val_users = '';
          if(val_ya_users==null) val_ya_users = '';
          if(nid_count>0 && !val_ya_users && currentGroup == 'authpay') {
              val_users += ' ('+Math.round(val_users/nid_count)+' за мат.)';
          }
          return '<td class="' + name + '">' + (val_ya_users ? val_ya_users+' ('+val_users+')' : val_users) + '</td>';
//          return self.fill_FieldType_any(name, line);
      }else {
          return self.fill_FieldType__by_nid_count(name, line);
      }
    };


    //======================
    self.fill_FieldType_total_shares = function(name, line) {
      return self.fill_FieldType__by_nid_count(name, line);
    };


    //======================
    self.fill_FieldType_nid_views = function(name, line) {
        if(currentGroup == 'authpay') {
            return self.fill_FieldType_any(name, line);
        }else{
          return self.fill_FieldType__by_nid_count(name, line);
        }
    };

    //======================
    self.fill_FieldType__by_nid_count = function(name, line) {
      var nid_count = line['nid_count'];
      var val = line[name];
      if(val==null) val = '';
      if(nid_count>0) {
        val += ' ('+Math.round(line[name]/nid_count)+' за мат.)';
      }
      return '<td class="' + name + '">' + val + '</td>';
    };


    //======================
    self.fill_FieldType_pay_fix = function(name, line) {
      var total_pay = 0;
      for(var nid in line.nid_view_list) {
        var pay_line = line.nid_view_list[nid];
        total_pay -= (-1)*pay_line.fix_payment;
      }

      return '<td class="' + name + '" >'+total_pay+' руб</td>';
    };


    //======================
    self.fill_FieldType_pay_traff = function(name, line) {
      var total_pay = 0;
      for(var nid in line.nid_view_list) {
        var pay_line = line.nid_view_list[nid];
        total_pay -= (-1)*pay_line.traf_payment;
      }

      return '<td class="' + name + '" data-nid-view-list="'+ JSON.stringify(line.nid_view_list) +'">'+total_pay+' руб</td>';
    };


    //======================
    self.fill_FieldType_pay_total = function(name, line) {
      //console.log('line', line);
      var total_pay = 0;
      var nid_list = [];
      for(var nid in line.nid_view_list) {
        var pay_line = line.nid_view_list[nid];
        total_pay -= (-1)*pay_line.fix_payment - pay_line.traf_payment;
        nid_list.push(nid);
      }

      return '<td class="' + name + '" data-nid-pays=\'' + JSON.stringify(line.nid_view_list) + '\'>'+total_pay+' руб</td>';
    };


    //======================
    self.fill_FieldType_any = function(name, line) {
      var title = line[name];
      if(title==null) title='';
      return '<td class="' + name + '">' + title + '</td>';
    };


    //======================
    var fill = function(data, count, summ, error) {
      var tbody = '';
      if(count>0) {
        for (var i in data) {
          var line = data[i];
          tbody += '<tr>';
          for (var name in titles[currentGroup][currentGroupMode]) {
            var funcName = 'fill_FieldType_'+name;
            if(typeof self[funcName] == 'function'){
              tbody += self[funcName](name, line);
            }else {
              tbody += self.fill_FieldType_any(name, line);
            }
          }
          tbody += '</tr>';
        }
      }else{
        tbody += '<tr><td colspan="5">Значения не найдены</td></td>';
      }
      fillTable(tbody, count, summ, error);
    };



    //======================
    var fillPager = function(count) {
      tablePager.html('').empty();
      if(!(count>0)) return;

      var pager = '';
      var pageCnt = Math.ceil(count/20);
      //console.log('pageCnt=', pageCnt);
      if(!(pageCnt>1)) return;
      for(var i=0; i<pageCnt; i++) {
        if(reqv.page==i) {
          pager += '<span>'+(i-(-1))+'</span>';
        }else{
          pager += '<span class="goto">'+(i-(-1))+'</span>';
        }
      }
      tablePager.append(pager);
      tablePager.find('.goto').click(gotoPage);
    };

    //======================
    var addComma = function(val) {
      var val_str = '';
      var val_source = ''+val;
      if(val_source.length<=3){
        val_str = val_source;
      }else if(val_source.length<=6) {
        var l = val_source.length-3;
        val_str = val_source.substr(-3-l,l)+','+val_source.substr(-3,3);
      }else if(val_source.length>6) {
        var l = val_source.length-6;
        val_str = val_source.substr(-6-l,l)+','+val_source.substr(-6,3)+','+val_source.substr(-3,3);
      }
      return val_str;
    };

    //======================
    var summParameterTitle = function(summ, summParName) {
      var month = root.find('.filter #month option:selected').text();
      var parTitle = summConfig[currentGroup].fields[summParName].replace('%month%', month);
      return parTitle;
    };

    //======================
    var fillSummary = function(summ) {
      tableSumm.html('').empty();
      if(!summ || !Object.keys(summConfig[currentGroup].fields).length) return;

      var summHTML = '';
      var firstSummLine = '';
      var total = {};

      //строка Другое
      var summaryListOtherLine = function() {
        var otherVals = {};
        for (var summParName in summConfig[currentGroup].fields) {
          otherVals[summParName] = 0;
        }

        for (var summ_i in summ) {

          if ((summ[summ_i].main_section>0) &&
              (typeof self.sections[+summ[summ_i].main_section] != 'undefined')) continue;

          //console.log('summ_i', summ_i, summ[summ_i].main_section, self.sections[+summ[summ_i].main_section]);

          for (var summParName in otherVals) {
            var val = summ[summ_i][summParName] ? +summ[summ_i][summParName] : 0;

            //if(summParName=='nid_count') console.log('summ', 'other('+summ_i+')', total[summParName], val, 'itogo', total[summParName] - (-1) * val);
            otherVals[summParName] -= (-1)*val;
            total[summParName] -= (-1) * val;
            //console.log(summParName, val);
          }
        }

        //если Other пустой. ничего не надо выводить
        var breakIt = 1;
        for (var summParName in otherVals) {
          if(otherVals[summParName]>0) {
            breakIt = 0;
            break;
          }
        }
        //alert('break_it='+breakIt)
        if(breakIt) return '';

        var summLine = '<tr><td class="section_name non-clickable" data-sect-id="-1">Остальное</td> ';
        for (var summParName in summConfig[currentGroup].fields) {
          var summParTitle = summParameterTitle(summConfig, summParName);
          var val = otherVals[summParName];
          if (!total[summParName]) total[summParName] = 0;
          //total[summParName] -= (-1) * val;
          var val_str = addComma(val);
          summLine += '<td class="count_name">' + summParTitle + ' </td><td class="count">' + val_str + '</td> ';
        }
        summLine += '</tr>';

        return summLine;
      };

      var fullSummaryList = {
        section:function(){
          for (var summParName in summConfig[currentGroup].fields) {
              total[summParName] = 0;
          }

          var summLines = [];
          for (var summ_i in summ) {
            if(typeof summ[summ_i].main_section == 'undefined') continue;
            var section_id = +summ[summ_i].main_section;
            if(!(section_id>0) || typeof self.sections[section_id] == 'undefined') continue;
            var summLine = '';
            summLine += '<tr><td class="section_name" data-sect-id="'+section_id+'">'
                + self.sections[section_id]+'</td> ';


            for (var summParName in summConfig[currentGroup].fields) {
              var summParTitle = summParameterTitle(summConfig, summParName);
              var val = summ[summ_i][summParName] ? +summ[summ_i][summParName] : 0;
              var val_str = addComma(val);
              //if(summParName=='nid_count') console.log('summ', summParName, total[summParName], val, 'itogo', total[summParName] - (-1) * val);
              total[summParName] -= (-1) * val;
              summLine += '<td class="count_name">' + summParTitle + ' </td><td class="count">' + val_str + '</td> ';
            }
            summLine += '</tr>';

            if (section_id && self.sections[section_id]) {
                summLines[section_id] = summLine;
            }
          }

          for(var i in self.sectionsOrder) {
            var secId = self.sectionsOrder[i];
            if (summLines[secId]) {
                summHTML += summLines[secId];
            }
          }
          //строка Другое
          summHTML += summaryListOtherLine();
        },
        authpay:function(){

        }
      };
      var fullSummaryFirstSumm = {
        section:function() {
          if(summ.length>1) {
            firstSummLine = '<tr class="total" ><td class="section_name"></td>';
            for (var summParName in summConfig[currentGroup].fields) {
              var summParTitle = summParameterTitle(summConfig, summParName);
              var val = (total[summParName] ? total[summParName] : 0)+'';
              var val_str = addComma(val);
              firstSummLine += '<td class="count_name">' + summParTitle + ' </td><td class="count">' + val_str + '</td> ';
            }
            firstSummLine += '</tr>';
          }
        },
        authpay:function() {
          firstSummLine = '<tr>';
          for (var summParName in summConfig[currentGroup].fields) {
            var summParTitle = summParameterTitle(summConfig, summParName);
            //console.log('summ', summParName, summParTitle, summ);
            var val = (summ[summParName] ? summ[summParName] : 0)+'';
            var val_str = addComma(val);
            firstSummLine += '<td class="">' + summParTitle + ' </td><td class="count">' + val_str + '</td> ';
          }
          firstSummLine += '</tr>';
        },
        statement:function() {
          firstSummLine = '<tr>';
          for (var summParName in summConfig[currentGroup].fields) {
            var summParTitle = summParameterTitle(summConfig, summParName);
            //console.log('summ', summParName, summParTitle, summ);
            var val = (summ[summParName] ? summ[summParName] : 0)+'';
            var val_str = addComma(val);
            firstSummLine += '<td class="">' + summParTitle + ' </td><td class="count">' + val_str + '</td> ';
          }
          firstSummLine += '</tr>';
        }
      };

      fullSummaryList[summConfig[currentGroup].appearance]();
      fullSummaryFirstSumm[summConfig[currentGroup].appearance]();

      tableSumm.append(firstSummLine+summHTML);
      tableSumm.find('.section_name').click(changeSectionID);
    };

    var changeSectionID = function() {
      var section_id = $(this).attr('data-sect-id');
      if(section_id<0) return false;

      var select = root.find('.content .filter .channels select');
      select.val(section_id);
      reqv.section_id = section_id;
      reqv.page = 0;
      self.request();

      return false;
    };

    //======================
    var gotoPage = function() {
      var page = $(this).text()-1;
      reqv.page = page;
      console.log('page', page, reqv.page);
      self.request();
    };


    //======================
    var clearAuthor = function() {
      var authorTag = root.find('.content .author_name');
      authorTag.find('.name').html('').empty();
      authorTag.find('.staff').html('').empty();
      authorTag.find('.x').hide();
      reqv.author_id = 0;
      reqv.page = 0;
      currentGroupMode = 'main';
      self.request();
    };


    //======================
    var runAuthor = function() {
      var tag = $(this);
      var authorId = tag.attr('data-author-id');
      if(!(authorId>0)) return;
      var authorName = tag.text();
      var authorTag = root.find('.content .author_name');
      authorTag.find('.name').html(authorName+' <a target="_blank" href="/node/'+authorId+'">[info]</a>');
      var staff_name = 'Contributor';
      for(var i in staffs) {
        if(staffs[i]==authorId) {
          staff_name = 'Staff';
          break;
        }
      }
      authorTag.find('.staff').html(staff_name);
      authorTag.find('.x').show();
      reqv.author_id = authorId;
      if(currentGroup=='authpay') {
        currentGroupMode = 'author';
      }else{
        currentGroupMode = 'main';
      }
      reqv.page = 0;
      self.request();
    };


    //======================
    var sortTable = function() {
      var sortParam = $(this).attr('data-sort-name');
      var sortAvail = {date_pub:1, title:1, main_section:1, a_names:1, nid_count:1, nid_users:1, nid_views:1, total_shares:1, staff: 1 };

      if(sortAvail[sortParam]) {
        if(reqv.sort == sortParam) {
          reqv.sort_desc =  reqv.sort_desc ? 0 : 1;
        }
        reqv.sort = sortParam;
        console.log('sort as', sortParam);
        self.request();
      }
    };


    //======================
    var fillHead = function() {
      var head = '';
      for(var name in titles[currentGroup][currentGroupMode]) {
        var ordType = '';
        if(reqv.sort == name) {
          ordType = reqv.sort_desc?'desc':'asc';
        }
        head += '<th data-sort-name="'+name+'" class="'+ordType+'">'+titles[currentGroup][currentGroupMode][name]+'</th>';
      }
      tableHead.empty().append(head);
      tableHead.find('th').click(sortTable);
    };




    //больше не используется, поскольку данные поступают сразу из базы статистики
    //======================
    var fillPayData = function() {
      var payList = [];
      var nids = [];
      tableBody.find('tr').each(function (i, item) {
          var tr = $(item);
          var pay_fix = tr.find('.pay_fix');
          var pay_traff = tr.find('.pay_traff');
          var pay_total = tr.find('.pay_total');
          if (!pay_fix.length) return;

          var nidPays = JSON.parse(pay_total.attr('data-nid-pays'));
          for(var nid in nidPays) {
              nids.push(nid);
          }
          //console.log('tr', nids, nidPays);
          payList[i] = { td: pay_fix, nidsPays:nidPays };
      });

      if(nids.length) $.ajax({
        url: '/admin/stat/fixpay_info',
        method: 'POST',
        cache: false,
        data: { nids:nids },
        dataType: 'json',
            //contentType: "application/json",
        success: function(data) {
            console.log('success', data);
            if (data.status && data.status == 'ok') {
                var calculated = data.list;

                for (var i in payList) {
                    var exceed = 0;
                    for (var nid in payList[i].nidsPays) {
                        var fixPayment = payList[i].nidsPays[nid].fix_payment;
                        var calcPayment = calculated[nid].sum;
                        if (fixPayment > calcPayment) {
                            exceed = 1;
                            break;
                        }
                    }
                    if (exceed) {
                        payList[i].td.css('color', 'red');
                    }
                }


            }
        }
      }).done(function(json){
          //console.log('done json', json);
      }).fail(function(f){
          console.log("failed!", f);
          fillTable('<tr></tr>', 0, '', 'Ошибка загрузки данных');
      });

    };


    //======================
    var fillTable = function(data, count, summ, error) {
      fillHead();
      fillPager(count);
      fillSummary(summ);
      root.find('.warning_line').html(error);
      tableBody.empty().html(data);

      tableBody.find('.author_name').click(runAuthor);

      fillPayData();
    };


    //======================
    var reqvInput = function() {
      reqv.begin = root.find('#date_begin').val();
      reqv.end = root.find('#date_end').val();
      reqv.section_id = root.find('#channel').val();
      reqv.only_new = root.find('.filter .only-new input').is(':checked')?1:0;
      reqv.only_payed = root.find('.filter .only-payed input').is(':checked')?1:0;
      reqv.only_contrib = root.find('.filter .only-contrib input').is(':checked')?1:0;
      reqv.mode = currentGroup;
      reqv.year = root.find('#year').val();
      reqv.month = root.find('#month').val();
      reqv.staff_name = root.find('#staff_name').val();
    };



    //======================
    self.request = function() {
      if(self.ajaxReqv) {
        self.ajaxReqv.abort();
      }

      excelResponse.html('');
      fillTable('<tr><td colspan="7">wait... <img src="/sites/all/themes/forbes/img/wait1.gif" /></td></tr>', 0, '', '');
      reqvInput();

      var rand = 1*Math.random();
      var url = '/admin/stat/proxy?';
      for(var val_nm in reqv){
        url += '&'+val_nm+'='+reqv[val_nm];
      }
      url += '&rand='+rand;

      self.ajaxReqv = $.ajax({
        url: url,
        method: 'GET',
        cache: false,
        data:{ staffs:staffs.join(',') },
        dataType: 'json',
        contentType: "application/json",
        success: function(data){
          //console.log('success');
          var error = '';

          if(currentGroup=='authpay' || currentGroup=='statement'){
            var dt = new Date();
            var reqvDate = new Date(reqv.year, reqv.month);
            var finalAuthpayDate = new Date(reqvDate.getTime() + 31*24*60*60*1000);
            if(dt<finalAuthpayDate) {
              error = 'Внимание! Отчет не полный, период для отчета еще не завершен!';
            }
          }
          if(data.status=='ok') {
            fill(data.result, data.count, data.sum, error);
          }else{
            fillTable('<tr></tr>', 0, '', 'Ошибка запроса');
          }
        }
      }).done(function(json){
        console.log('done json', json);
        //callback(json);
      }).fail(function(f){
        console.log("failed!", f);
        fillTable('<tr></tr>', 0, '', 'Ошибка загрузки данных');
      });

    };


    //======================
    self.requestExportCycle = function (p) {
      var rand = 1*Math.random();
      var bonusPars = '&curr_file='+self.currXlsFile;
      $.ajax({
        url: self.xlsExportUrl+rand+bonusPars+'&page='+p,
        method: 'GET',
        cache: false,
        data:{ staffs:staffs.join(',') },
        dataType: 'json',
          contentType: "application/json",
          success: function(data){
            var error = '';

            if(data.status == 'ok') {
              p++;
              if(p >= self.xlsPageCnt) {
                excelResponse.html('<a href="/sites/default/files/' + data.path + '" target="_blank">Скачать</a>');
              }else{
                excelResponse.html(self.requestExport_pagesLeftText(self.xlsPageCnt - p));
                self.requestExportCycle(p);
              }
            }else{
                excelResponse.html('Ошибка запроса');
            }
          }
        }).done(function(json){
            //console.log('done json', json);
            //callback(json);
        }).fail(function(f){
            console.log("failed!", f);
            excelResponse.html('Ошибка загрузки данных');
        });

    };


    //======================
    self.requestExport_pagesLeftText = function (p) {
      if(p>0) {
        return 'Осталось ' + (p*5) + ' страниц <img src="/sites/all/themes/forbes/img/wait1.gif" />';
      }else{
        return 'Подготовка xls-файла... <img src="/sites/all/themes/forbes/img/wait1.gif" />';
      }
    };


    //======================
    self.requestExport = function () {
      excelResponse.html('Запрашиваем количество... <img src="/sites/all/themes/forbes/img/wait1.gif" />');
      self.xlsPageCnt = 0;
      reqvInput();

      self.currXlsFile = '';
      self.xlsExportUrl = '/admin/stat/export?';
      var rand = 1*Math.random();
      for(var val_nm in reqv){
        self.xlsExportUrl += '&'+val_nm+'='+reqv[val_nm];
      }
      self.xlsExportUrl += '&rand=';
      $.ajax({
        url: self.xlsExportUrl+rand,
        method: 'GET',
        cache: false,
        data:{ staffs:staffs.join(',') },
        dataType: 'json',
        contentType: "application/json",
        success: function(data){
          var error = '';

          if(data.status=='ok') {
            self.xlsPageCnt = data.page_count;
            self.currXlsFile = data.curr_file;
            if(self.xlsPageCnt>0) {
              if(self.xlsPageCnt==1){
                excelResponse.html('<a href="/sites/default/files/' + data.path + '" target="_blank">Скачать</a>');
              }else {
                excelResponse.html(self.requestExport_pagesLeftText(self.xlsPageCnt - 1));
                self.requestExportCycle(1);
              }
            }else{
                excelResponse.html('Ошибка расчета страниц');
            }
          }else{
            excelResponse.html('Ошибка запроса');
          }
        }
      }).done(function(json){
        //console.log('done json', json);
        //callback(json);
      }).fail(function(f){
        console.log("failed!", f);
        $('.excel-response').html('Ошибка загрузки данных');
      });

    };

    self.fillSectionsSelect = function() {

      //sections = self.sections;

      var select = root.find('.content .filter .channels select');
      select.empty().html('');
      var html = '<option value="">'+self.sections[0]+'</option>';
      for(var i in self.sectionsOrder) {
        var tid = self.sectionsOrder[i];
        if(!(tid>0)) continue;
        html += '<option value="'+tid+'">'+self.sections[tid]+'</option>';
      }
      select.append(html);
    };

    self.fillSectionsSelect();

    root.find('#date_begin').val(reqv.begin);
    root.find('#date_end').val(reqv.end);

    root.find('.statistic-group > div').click(function() {
      $('.excel-response').html('');
      root.find('.statistic-group > div').removeClass('active');
      var tag = $(this);
      tag.addClass('active');
      var choice = tag.attr('data-group');
      reqv.page = 0;
      self.setGroup(choice);
      self.request();
    });

    root.find('.filter select, .filter input').change(function() {
        reqv.page = 0;
    });

    root.find('.content .run').click(function(){ self.request(); return false; });
    root.find('.content .excel').click(function(){ self.requestExport(); return false; });
    root.find('.content .author_name .x').click(clearAuthor);

    self.setGroup('sections');
    self.request();

    //console.log('group=', currentGroup);
  };

  Drupal.behaviors.adminStatistic = {
    attach: function (context, settings) {
      //console.log('settings', settings);
      adminStatInit(settings.adminStatistic);
    }
  };

  Drupal.behaviors.statTariff = {
    attach: function (context, settings) {
      //console.log('settings', settings);
      tariffChangeInit();
    }
  };




  function adminStatInit(settings) {
    if(!settings) return;

    if(jQuery().datepicker) {
      $('.datepicker').datepicker({ dateFormat: 'dd-mm-yy' });
    }




    stat = new Stat('', settings.sections, settings.staffs);

  }

  function tariffChangeInit() {
    if(jQuery().datepicker) {
      $('.datepicker').datepicker({ dateFormat: 'yy-mm-dd' });
    }
    $('.page-admin-stat-config .add_new_tariff').click(tariffChange_ShowForm);
    $('.page-admin-stat-config .change_it').click(tariffChange_ChangeForm);
    $('.page-admin-stat-config .delete_it').click(tariffChange_DeleteItem);
    $('#tariff_element_submit').click(tariffChange_SaveForm);
  }

  function tariffChange_SaveForm() {
    var form_div = $('.tariff_element_form');
    var form = form_div.find('form');
    var priceEl = form.find('input[name="price"]');
    var val = 1*priceEl.val();
    priceEl.val(val);

    var rand = 1*Math.random();
    var url = '/admin/stat/config/save?' + form.serialize();
    url += '&rand='+rand;
    $.ajax({
      url: url,
      method: 'GET',
      cache: false,
      //data:{ staffs:staffs.join(',') },
      dataType: 'json',
      contentType: "application/json",
      success: function(data) {
        if(data.status == 'ok') {
          window.location.reload();
        }else{
          form.find('.warning').html(data.msg);
        }
      }
    }).done(function(json){
        //console.log('done json', json);
    }).fail(function(f){
        console.log("failed!", f);
        fillTable('<tr></tr>', 0, '', 'Ошибка загрузки данных');
    });


  }

  function tariffChange_DeleteItem() {
    var id = $(this).attr('data-id');

    var url = '/admin/stat/config/delete?id=' + id;

    $.ajax({
      url: url,
      method: 'GET',
      cache: false,
      dataType: 'json',
      contentType: "application/json",
      success: function(data) {
        if(data.status == 'ok') {
          window.location.reload();
        }else{
          alert('Ошибка! '.data.msg);
        }
      }
    }).done(function(json){
        //console.log('done json', json);
    }).fail(function(f){
        console.log("failed!", f);
        fillTable('<tr></tr>', 0, '', 'Ошибка загрузки данных');
    });
  }

  function tariffChange_ChangeForm() {
    var tds = $(this).closest('tr').find('td');
    var values = {};
    tds.each(function (i, item) {
      var tag = $(item);
      var name = tag.attr('data-name');
      var val = tag.attr('data-content');
      if(name) {
        values[name] = val;
      }
    });

    tariffChange_ShowForm(values);
  }


  function tariffChange_ShowForm(formContent) {
    var form_div = $('.tariff_element_form');
    form_div.find('.warning').html('');
    var els = {
      id:form_div.find('input[name="id"]'),
      code:form_div.find('select[name="code"]'),
      date:form_div.find('input[name="date"]'),
      price:form_div.find('input[name="price"]')
    };
    if(!formContent) formContent = { 'code':'sign' };
    if(!formContent.code) formContent.code = 'sign';
    for(var name in els) {
      var el = els[name];
      el.val(formContent[name]?formContent[name]:'');
      //console.log(name, el.length, el.val());
    }
    form_div.show();
  }

})(jQuery);
;
// forbes currency informer
(function($) {
  Drupal.behaviors.forbes_curr_informer = {
    attach: function (context) {
      $('.forbes_currencies .curr_list_arr').click(roll_curr_informer);
    }
  };

  function roll_curr_informer() {
    var curr_list = $('.forbes_currencies .curr_list');
    var curr_items = $('.forbes_currencies .curr_item');

    curr_list.append($(curr_items[0]));
  }
})(jQuery);;
(function ($) {
  var forbes_ratings_delete_value_line = function(vals_line, i) {
    if(vals_line) {
      $.ajax({
        type:'POST',
        dataType: 'json',
        url:'/admin/ratings/delete_conn_values/'+vals_line,
        success:function(data){
          if(data.status && data.status=='ok') {
            forbes_ratings_drop_value_line(i);
          }
        }
      });
    }else{
      forbes_ratings_drop_value_line(i);
    }
  };

  function forbes_ratings_drop_value_line(i) {
    $('table.forbes_ratings_rate_cont .line_'+i).empty().remove();
  }

  function rating_clone_this_record(rid, tag) {
      if(confirm('Подтверждаете клонирование записи?')) $.ajax({
          type:'POST',
          dataType: 'json',
          url:'/admin/ratings/rating_object/'+rid+'/clone',
          success:function(data){
              if(data.status && data.status=='ok') {
                var tr = tag.closest('tr');
                var newLine = '<tr style="background-color: darkseagreen;">'+
                    '<td>'+data.res.rid+'</td><td>'+data.res.type+'</td>'+
                    '<td>'+data.res.year+'</td><td>'+(data.res.showPhoto?'да':'нет')+'</td>'+
                    '<td>'+data.res.profileType+'</td><td>'+(data.res.enabled?'да':'нет')+'</td>'+
                    '<td><a href="/admin/ratings/rating_object/'+data.res.rid+'">изменить</a>'+
                        '<a href="/admin/ratings/rating_stuffing/'+data.res.rid+'">содержимое</a>'+
                        '<a href="#" class="clone_rating_record" data-rid="'+data.res.rid+'">клонировать</a>'+
                        '<a href="#" class="delete_rating_record" data-rid="'+data.res.rid+'">удалить</a></td>'+
                  '</tr>';
                tr.after(newLine)
              }
          }
      });
  }

  function rating_delete_this_record(rid, tag) {
    if(confirm('Подтверждаете удаление записи?')) $.ajax({
      type:'POST',
      dataType: 'json',
      url:'/admin/ratings/rating_object/'+rid+'/delete',
      success:function(data) {
        if(data.status && data.status=='ok') {
          tag.closest('tr').remove();
        }
      }
    });
  }

  function field_title_changed(i, value){
    var reg = /.*\[(\d+)\]/;
    var sch = reg.exec(value);
    if(sch && sch[1]) {
      var fid = ''+sch[1];
      $.ajax({
        type:'POST',
        dataType: 'json',
        url:'/admin/ratings/field_data/'+fid,
        success:function(data){
          if(data && data.status && data.status=='ok') {
            if(data.res && data.res[0]) {
              var fid_record = data.res[0];
              $('#edit-field-pre-str-'+i).val(fid_record.pre_str);
              $('#edit-field-sub-str-'+i).val(fid_record.sub_str);
              $('#edit-field-is-float-'+i).val(fid_record.is_float);
            }
          }
        }
      });
    }
  }

  function link_input_blur(tag) {
    var reg = /field_title_(\d+)/;
    var name = tag.attr('name');
    var sch = reg.exec(name);
    if(sch && sch[1]){
      tag.attr('data-orig-val', tag.val());
      tag.on('blur', function(){
        var value = tag.val();
        var orig_val = tag.attr('data-orig-val');
        if(value!=orig_val){
          tag.attr('data-orig-val', value);
          field_title_changed(sch[1], value);
        }
      })
    }
  }
  
  function show_rating_table_lines() {
    var hidden_begin=0;
    var hidden_end=20;

    if(!$('.common_rating_list tbody tr.hidden').length) {
      $('.show_more_ratings').hide();
      return;
    }
    
    for(var i=1; i<1000; i++) {
      var search_line = '.common_rating_list tbody tr.line_' + i;
      var tr = $(search_line);
      if(tr.hasClass('hidden')) {
        if (!hidden_begin) {
          hidden_begin = i;
          hidden_end = hidden_begin - (-hidden_end);
        }
        if(i<hidden_end) {
          tr.removeClass('hidden');
        }else{
          break;
        }
      }
    }
  }

  function table_rating_show_details() {
    var tr = $(this);
    var last_tr = tr.parent().find('.active');
    var new_h = 0;
    tr.find('td').each(function(i,item){
      if(i) new_h -= (-1)*$(item).outerHeight();
    });
    if (tr.find('.to_learn_more').length != 0){
      new_h += tr.find('.to_learn_more').outerHeight();
    }
    /*if(last_tr.length) {
      last_tr.removeClass('active');
      last_tr.animate({height: '100px'}, 1000, function () {
        $('html, body').animate({
          scrollTop: tr.offset().top-100
        }, 500, function(){
          tr.addClass('active');
          tr.animate({height: new_h+'px'}, 1000);
        });
      });
    }*/
    if(tr.hasClass('active')) {
      tr.removeClass('active');
      tr.animate({height:  $(this).attr('data-height')}, 800);
    }else{
        last_tr.removeClass('active');
        last_tr.animate({height:  last_tr.attr('data-height')}, 800);
      tr.addClass('active').attr('data-height', $(this).outerHeight()+'px');
      tr.animate({height: new_h+'px'}, 800);
    }
    return false;
  }

  function rating_methodology_init() {
    $('.rating_top_content .methodology_show').click( function(){
      $(this).hide();
      $('.rating_top_content .methodology').slideDown();
    });
  }

  Drupal.behaviors.forbes_ratings = {
    attach : function(context, settings) {
      $('table.forbes_ratings_rate_cont a.delete_line').click(function(){
        var data = $(this).data();
        forbes_ratings_delete_value_line(data.ids, data.number)
      });

      $('a.delete_rating_record').click(function(){
        var tag = $(this);
        var rid = (tag.data()).rid;
        rating_delete_this_record(rid, tag);
      });


      $('a.clone_rating_record').click(function(){
        var tag = $(this);
        var rid = (tag.data()).rid;
        rating_clone_this_record(rid, tag);
      });


      //если поле изменилось, подкачать остальные поля надо
      $('table.avail_fields input.form-autocomplete').each(function(){ link_input_blur($(this)); });


      $('table.avail_fields a.drop_connected_field').click(function(){
        var tag = $(this);
        var cf_id = tag.attr('data-cf-id');
        if(cf_id>0) {
          $.ajax({
            type:'POST',
            dataType: 'json',
            url:'/admin/ratings/rating_connected_field/'+cf_id+'/delete',
            success:function(data){
              if(data && data.status && data.status=='ok') {
                tag.closest('tr').remove();
              }
            }
          });

        }
      });

      if($(window).width()<415) {
       var tbl = $('table.common_rating_list');
        //tbl.find('tbody tr').append('<div class="clear"></div>');
        var field_names = [];
        tbl.find('thead th.before_photo, tbody td.before_photo').remove();
        console.log('before_photo columns removed');
        tbl.find('thead th').each(function(){
          field_names.push($(this).text());
        });
        var tbl_count = field_names.length;
        var trs = tbl.find('tbody tr');
        trs.click(table_rating_show_details);
        trs.each(function(){
          var tr = $(this);
          tr.find('td').each(function(i, item){
            if(i>1) {
              //console.log(i,item,field_names[i]);
              var it = $(item);
              var value = it.text();
              it.html('<div class="name">'+field_names[i]+'</div><div class="value">'+value+'</div>');
            }
          });
          var aHrefProfile = tr.find('a.profile_title').attr('href');
          if (aHrefProfile != undefined){
            tr.append('<div class="to_learn_more"><a href="' + aHrefProfile + '" class="bt-blue-mode">Узнать больше</a></div>');
            tr.find('.bt-blue-mode').click(function(){
              document.location.assign($(this).attr('href'));
            });
          }
        });

      }else{
        if($('table.common_rating_list').DataTable) {
          $.fn.dataTable.ext.type.order['name-family-pre'] = function ( d ) {
            var dArr1 = d.split('<div class="descr"><h4>');
            if(dArr1[1]){
              var dArr2 = dArr1[1].split('</h4>');
              if(dArr2[1]) {
                var dArr3 = dArr2[0].split(' ');
                if(dArr3[1]) {
                  var family = dArr3.pop();
                  dArr3.unshift(family);
                  d = dArr3.join(' ');

                  return d;
                }
              }
            }
            return d;
          };

          $('table.common_rating_list').DataTable({
            "paging": false,
            "info": false,
            "searching":false,
            "columnDefs": [ {
              "type": "name-family",
              "targets": 1
            } ]
          });
        }
      }


      if($('.common_rating_list tbody tr.hidden').length) {
        $('.show_more_ratings').click(show_rating_table_lines);
      }else{
        $('.node-type-rating .show_more_ratings').hide();
      }

      rating_methodology_init();
    }

  };
})(jQuery);


;
