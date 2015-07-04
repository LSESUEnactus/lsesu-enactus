!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){a.fn.onScreen=function(b){var c=a.extend({container:window,direction:"vertical",toggleClass:!0,doIn:null,doOut:null,tolerance:0,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",debug:!1},b);return this.each(function(){function b(){c.container!=window&&"static"==a(c.container).css("position")&&a(c.container).css("position","relative"),f=a(c.container),g=f.height(),h=f.width(),i=f.scrollTop()+g,j=f.scrollLeft()+h,k=p.outerHeight(!0),l=p.outerWidth(!0),c.container==window?(m=p.offset().top,n=p.offset().left):(m=p.position().top,n=p.position().left),d=f.scrollTop(),e=f.scrollLeft(),c.debug&&(console.log("Container: "+c.container+"\nWidth: "+g+"\nHeight: "+h+"\nBottom: "+i+"\nRight: "+j),console.log("Matched element: "+("undefined"!=typeof p.attr("class")?p.prop("tagName").toLowerCase()+"."+p.attr("class"):p.prop("tagName").toLowerCase())+"\nLeft: "+n+"\nTop: "+m+"\nWidth: "+l+"\nHeight: "+k));var b;b="vertical"==c.direction?c.container==window?m<i-c.tolerance&&d<m+k-c.tolerance&&!o:m<g-c.tolerance&&m>-k+c.tolerance&&!o:"horizontal"==c.direction?c.container==window?n<j-c.tolerance&&e<n+l-c.tolerance&&!o:n<h-c.tolerance&&n>-l+c.tolerance&&!o:void 0,b?(c.toggleClass&&p.addClass("onScreen"),"function"==typeof c.doIn&&c.doIn.call(p[0]),c.lazyAttr&&"IMG"===p.prop("tagName")&&(lazyImg=p.attr(c.lazyAttr),p.css({background:"url("+c.lazyPlaceholder+") center center no-repeat","min-height":"5px","min-width":"16px"}),p.prop("src",lazyImg)),o=!0):(b="vertical"==c.direction?c.container==window?d>m+k&&o||m>i&&o:m>g-c.tolerance&&o||-k+c.tolerance>m&&o:"horizontal"==c.direction?c.container==window?e>n+l&&o||n>j&&o:n>h-c.tolerance&&o||-l+c.tolerance>n&&o:void 0,b&&(c.toggleClass&&p.removeClass("onScreen"),"function"==typeof c.doOut&&c.doOut.call(p[0]),o=!1))}var d,e,f,g,h,i,j,k,l,m,n,o=!1,p=a(this);b(),a(c.container).on("scroll",b).on("resize",b).on("load",b)})}}(jQuery),function(a){a(document).foundation();var b=a(".js-onScreen");Modernizr.touch?b.css({bottom:"0",position:"relative"}).show():a(".footer").onScreen({doIn:function(){b.show()},doOut:function(){b.hide()},tolerance:"-50"});var c=a(window),d=a(".wrapper").height(),e=a(".js-extend"),f=function(){var a=c.height()-d;a>0&&e.css("height",a)};f(),c.on("resize",Foundation.utils.throttle(f,300))}(jQuery);