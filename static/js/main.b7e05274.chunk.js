(this["webpackJsonptoastie-results"]=this["webpackJsonptoastie-results"]||[]).push([[0],{10:function(e,t,n){e.exports={th:"crosstable_th__Gp7TR",round:"crosstable_round__2RGZ-"}},13:function(e,t,n){e.exports={wrapper:"chesscom_wrapper__3vwwR",container:"chesscom_container__AGg5n",boardLabel:"chesscom_boardLabel__1N2Qy",board:"chesscom_board__3LGEQ","fade-in":"chesscom_fade-in__15-gn",row:"chesscom_row__17flm",square:"chesscom_square___JdY5",W:"chesscom_W__1Kbfl",B:"chesscom_B__misXA"}},21:function(e){e.exports=JSON.parse('{"b":"http://localhost:8080/","a":"https://api.oxfordchess.co.uk/","c":true}')},27:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/watch.ddf443c3.svg"},41:function(e,t,n){e.exports=n.p+"static/media/twitch.e1f7813a.svg"},42:function(e,t,n){e.exports=n.p+"static/media/youtube.46bc6904.svg"},50:function(e,t,n){e.exports=n(97)},55:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"watch",(function(){return I.a})),n.d(a,"youtube",(function(){return A.a})),n.d(a,"twitch",(function(){return G.a}));var r=n(1),c=n.n(r),s=n(44),o=n.n(s),u=(n(55),n(47)),i=n(11),l=n(15),m=n(2),d=(n(27),n(20)),f=n.n(d),b=n(21),h=function(){};console.log("isDev",!1);var p=b.a;function v(e){return e=Object.assign(e,{method:"GET"}),f()(e).then((function(e){return e.data})).catch((function(e){var t;throw console.error(e),e.response&&h([e.response.status,e.response.statusText,":","/"+(null===(t=e.response.config.url)||void 0===t?void 0:t.split("/").pop())].join(" ")),e}))}f.a.defaults.baseURL=p;var g=n(4),w=n.n(g),E=n(12),j=n(45),O=n.n(j),y=n(46),k=n.n(y),N=/chess\.com\/(?:live#tm=|club\/matches\/live\/(?:[a-z-]+\/)?)([0-9]+)/,x=/(?:https:\/\/)?(?:www.)?(?:(twitch.tv|youtube.com))\/(.*)/,_=n(13),S=n.n(_),R=n(8),L=n(23),C=new k.a({queue:!0});function P(e,t){return W.apply(this,arguments)}function W(){return(W=Object(E.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){C.dispatch(C.getTeamLiveMatchBoard,(function(t,n){if(n)return a(n);e(t.body)}),[t,n])})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return D.apply(this,arguments)}function D(){return(D=Object(E.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){C.dispatch(C.getTeamLiveMatch,(function(t,a){if(a)return n(a);e(t.body)}),[t])})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=new Map([["p",c.a.createElement(R.e,null)],["n",c.a.createElement(R.d,null)],["b",c.a.createElement(R.a,null)],["r",c.a.createElement(R.g,null)],["q",c.a.createElement(R.f,null)],["k",c.a.createElement(R.c,null)]]);function B(e){var t=Object(r.useState)(e.enforceBoards||20),n=Object(m.a)(t,2),a=n[0],s=n[1],o=Object(r.useReducer)((function(e,t){var n=e.slice(0);return n[t.board]={boardScores:t.boardScores,game:t.game},n}),[]),u=Object(m.a)(o,2),i=u[0],d=u[1],f=Object(r.useState)(0),b=Object(m.a)(f,2),h=b[0],p=b[1],v=Object(r.useReducer)((function(e,t){return e[t.i]=t.name,e}),["",""]),g=Object(m.a)(v,2),j=g[0],y=g[1],k=Object(r.useReducer)((function(e,t){var n=Object.assign({},e);return n[t.player.username.toLowerCase()]=t.team,n}),{}),x=Object(m.a)(k,2),_=x[0],C=x[1],W=Object(r.useState)(!1),D=Object(m.a)(W,2),B=D[0],F=D[1],I=Object(r.useReducer)((function(e,t){var n=e.slice(0);return n[t.board]=t.set,n}),[]),U=Object(m.a)(I,2),G=U[0],q=U[1],A=Object(r.useCallback)(Object(E.a)(w.a.mark((function t(){var n,a,r,c,o,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.matchURL.match(N)){t.next=3;break}return t.abrupt("return",console.error("Invalid URL: ",e.matchURL));case 3:return a=Number(n[1]),t.prev=4,t.next=7,M(a);case 7:for((r=t.sent).boards&&s(r.boards),"finished"!==r.status&&"scheduled"!==r.status||F(!0),c=function(){var e=u[o],t=j.findIndex((function(t){return!t||t===e.name}));y({name:e.name,i:t});var n,a=Object(l.a)(e.players);try{for(a.s();!(n=a.n()).done;){var r=n.value;C({player:r,team:t})}}catch(c){a.e(c)}finally{a.f()}},o=0,u=Object.values(r.teams);o<u.length;o++)c();t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.error(t.t0);case 17:p(a);case 18:case"end":return t.stop()}}),t,null,[[4,14]])}))),[e.matchURL,j]);Object(r.useEffect)((function(){A()}),[A]);var J=Object(r.useCallback)(Object(E.a)(w.a.mark((function t(){var n,r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return");case 2:if(!B||!i.length){t.next=4;break}return t.abrupt("return");case 4:n=w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!G[n]){t.next=2;break}return t.abrupt("return","continue");case 2:if(r=P(h,n).then((function(e){var t=e.games[e.games.length-1];return d({game:t,boardScores:e.board_scores,board:n}),Date.now()>t.end_time&&q({board:n,set:!0}),!0})).catch((function(e){return!e.message.includes("doesn't have board")||(s(n-1),!1)})),a!==(e.enforceBoards||20)){t.next=9;break}return t.next=6,r;case 6:if(t.t0=t.sent,!1!==t.t0){t.next=9;break}return t.abrupt("return","break");case 9:case"end":return t.stop()}}),t)})),r=1;case 6:if(!(r<a+1)){t.next=17;break}return t.delegateYield(n(r),"t0",8);case 8:c=t.t0,t.t1=c,t.next="continue"===t.t1?12:"break"===t.t1?13:14;break;case 12:return t.abrupt("continue",14);case 13:return t.abrupt("break",17);case 14:r++,t.next=6;break;case 17:case"end":return t.stop()}}),t)}))),[h,a,B,G,i.length]);return Object(r.useEffect)((function(){var e=setInterval(J,1e3);return function(){return clearInterval(e)}}),[J]),i.length||a?c.a.createElement("div",{className:S.a.container},i.map((function(e,t){if(!e)return null;var n=Object.entries(e.boardScores),a=e.game,r=_[a.black.username.toLowerCase()],s=c.a.createElement(c.a.Fragment,null,a.white.username," (",a.white.rating,")"," ",c.a.createElement(L.b,null)),o=c.a.createElement(c.a.Fragment,null,a.black.username," (",a.black.rating,")"," ",c.a.createElement(L.a,null));r&&(n=n.reverse());var u=new O.a(a.fen).board;return c.a.createElement("div",{className:S.a.wrapper},c.a.createElement("div",{className:S.a.boardLabel},c.a.createElement("span",{className:"bold"},n[0][1]),c.a.createElement("a",{href:"https://www.chess.com/live/game/"+a.url.split("/").pop(),target:"_blank",rel:"noopener noreferrer"},c.a.createElement(R.b,null)),c.a.createElement("span",{className:"bold"},n[1][1])),c.a.createElement("div",null,r?s:o," ",j[0]),c.a.createElement("div",{className:S.a.board},u.map((function(e){return c.a.createElement("div",{className:S.a.row},e.map((function(e){return c.a.createElement("div",{className:[S.a.square,S.a[(t=e,t.toLowerCase()===t?"B":"W")]].join(" ")},T.get(e.toLowerCase()));var t})))}))),c.a.createElement("div",null,r?o:s," ",j[1]))}))):c.a.createElement("div",null,"Match has not yet started!")}var F=n(40),I=n.n(F),U=n(41),G=n.n(U),q=n(42),A=n.n(q);function J(e){var t=Object(r.useState)(""),n=Object(m.a)(t,2),a=n[0],s=n[1],o=e.status.round||0,u=Object(r.useReducer)((function(e,t){var n=Object.assign({},e);return n[t.id]=[t.time,t.players],n}),{}),i=Object(m.a)(u,2),d=i[0],f=i[1],b=Object(r.useCallback)(Object(E.a)(w.a.mark((function t(){var n,a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(l.a)(e.pairings),t.prev=1,r=function(){var t=a.value,n=Object.values(t[2]).find((function(e){return e}));if(!n)return"continue";var r=n.match(N);n=r?"https://www.chess.com/club/matches/live/"+r[1]:"",M(Number(r[1])).then((function(e){return f({id:r[1],time:1e3*e.start_time})})).catch(function(){var t=Object(E.a)(w.a.mark((function t(a){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.message.includes("not found")){t.next=7;break}return t.next=3,v({url:"/tournament/"+e.id+"/scrapeChessComTeamPage",params:{url:n}});case 3:c=t.sent,f({id:r[1],time:new Date(c["Start Time"]).valueOf(),players:c["Players per Team"]}),t.next=8;break;case 7:console.error(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},n.s();case 4:if((a=n.n()).done){t.next=10;break}if("continue"!==r()){t.next=8;break}return t.abrupt("continue",8);case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])}))),[e.pairings,f]);return Object(r.useEffect)((function(){b()}),[b]),c.a.createElement("section",null,c.a.createElement("p",null,"All times in ",new Date(Date.now()).toString().slice(25)),c.a.createElement("table",{className:"download-table full-width"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{style:{width:"27.5%"}},"White"),c.a.createElement("td",{style:{width:"12.5%"}},"Link"),c.a.createElement("td",{style:{width:"5%"}}),c.a.createElement("td",{style:{width:"10%"}},"Start Time"),c.a.createElement("td",{style:{width:"5%"}}),c.a.createElement("td",{style:{width:"12.5%"}},"Watch Live"),c.a.createElement("td",{style:{width:"27.5%"}},"Black"))),c.a.createElement("tbody",null,e.pairings.map((function(t,n){var r,u,i,l=[t[0].trim(),t[1].trim()].join("."),m=e.playerDict.get(t[0].trim()),f=e.playerDict.get(t[1].trim()),b=Object.values(t[2]).find((function(e){return e})),h=null===(r=b)||void 0===r?void 0:r.match(N);b=h?"https://www.chess.com/club/matches/live/"+h[1]:"";var p=h&&d[h[1]]?d[h[1]][0]:0,v=h&&d[h[1]]?d[h[1]][1]:void 0;return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:["row",n].join(".")},c.a.createElement("td",null,c.a.createElement("div",{className:"playerName"},null===m||void 0===m?void 0:m.firstName)),c.a.createElement("td",{style:{padding:0}},b?c.a.createElement("a",{className:"button",href:b.trim(),target:"_blank",rel:"noopener noreferrer"},c.a.createElement(R.h,null)):null),c.a.createElement("td",{className:"bold"},null===m||void 0===m||null===(u=m.histories[o])||void 0===u?void 0:u.game),c.a.createElement("td",null,p?new Date(p).toString().slice(0,21):"-"),c.a.createElement("td",{className:"bold"},null===f||void 0===f||null===(i=f.histories[o])||void 0===i?void 0:i.game),c.a.createElement("td",{style:{padding:0}},b?c.a.createElement("div",{className:"button",onClick:function(){return s(a?"":l)}},c.a.createElement("img",{className:"icon",src:I.a,alt:"Watch games"})):null),c.a.createElement("td",null,c.a.createElement("div",{className:"playerName"},null===f||void 0===f?void 0:f.firstName))),b&&a===l?c.a.createElement("tr",null,c.a.createElement("td",{colSpan:100},(t[2].chessComLink||t[2].chessComTeamLink)&&t[2].chessComTeamLink?c.a.createElement(B,{matchURL:t[2].chessComTeamLink,enforceBoards:Number(v)}):null)):null)})))))}var Y=n(19),Q=n(10),z=n.n(Q),K={pre:{id:{name:"",className:"blank",sort:!1,value:function(){return 0},postConvert:function(e,t){return(1+t).toString()}},name:{name:"Name",className:"playerName",id:function(e){return e.id},sort:function(e,t){return e>t?1:e<t?-1:0},value:function(e,t,n){return"individual"===n.competitors?[e.firstName,e.lastName].join(" "):e.firstName}},rating:{name:"Rating",className:"locked",value:function(e){return e.rating},show:function(e,t,n){return n.showRatings}}},roundColumn:{name:function(e,t){return e.slice(-1)},className:function(e,t,n){return"*"===e?"edit":""===e?"unset":"locked"},value:function(){},convert:function(e,t,n){if(""===e)return"";if("*"===e)return"*";var a,r=parseInt(e);return a=.5===r?"\xbd":r.toString(),e.endsWith("b")&&(a+="b"),a},sort:function(e,t){if(e===t)return 0;if(""===e)return-1;if(""===t)return-1;if("*"===e)return 1;if("*"===t)return-1;var n=[parseInt(e),parseInt(t)],a=n[0],r=n[1];return e.endsWith("b")&&(a-=.001),t.endsWith("b")&&(r-=.001),r-a}},post:{score:{name:"MP",className:"locked",value:function(e){return parseFloat(e.score.toString())},convert:function(e,t){return e.toFixed(1)+" / "+t.played}},gamePoints:{name:"GP",className:"locked",value:function(e){return e.gamePoints},convert:function(e){return e.toFixed(1)}},winPercentage:{name:"Win %",className:"rating",value:function(e){return 0===e.played?-1:100*e.score/e.played},convert:function(e){return e<0?"-":e.toFixed()}},performanceRating:{name:"Perf",className:"rating",value:function(e){return e.performanceRating},convert:function(e){return e.toFixed()},show:function(e,t,n){return n.showRatings}},ratingDifference:{name:"P. +/-",className:"rating",value:function(e){return e.performanceRating?e.performanceRating-e.rating:0},convert:function(e){return e?e>0?"+"+e.toString():e.toString():""},show:function(e,t,n){return n.showRatings}},expectedScore:{name:"Expected",className:"rating",value:function(e){return e.expectedScore},convert:function(e,t){return e.toFixed(1)+" / "+t.played},show:function(e,t,n){return n.showRatings}},expectedDifference:{name:"E. +/-",className:"rating",value:function(e){return e.score-e.expectedScore},convert:function(e){return"undefined"===typeof e?"":e>0?"+"+e.toFixed(2):e.toFixed(2)},show:function(e,t,n){return n.showRatings}}}};function X(e){var t=Object(r.useMemo)((function(){return e.status.round>e.settings.totalRounds||"Infinity"===e.settings.totalRounds?e.status.round:e.settings.totalRounds}),[e.status.round,e.settings.totalRounds]),n=Object(r.useMemo)((function(){for(var e=[],n=1;n<=t;n++)e.push("round."+n.toString());return e}),[t]),a=Object(r.useMemo)((function(){return[].concat(Object(Y.a)(Object.keys(K.pre)),Object(Y.a)(n),Object(Y.a)(Object.keys(K.post)))}),[n]).filter((function(t,n){var a=K.pre[t]||K.post[t];return!a||!(a.show&&!a.show(null,n,e.settings))})),s=Object(r.useCallback)((function(e,t){return a.includes(t)?e[0]!==t?[t,0]:[t,e[1]+1]:["",0]}),[a]),o=Object(r.useReducer)(s,["score",0]),u=Object(m.a)(o,2),i=u[0],l=u[1],d=Object(r.useCallback)((function(n){for(var a=[""],r=1;r<=t;r++)n.histories[r]?(null===n.histories[r].match||void 0===n.histories[r].match?a[r]="*":a[r]=n.histories[r].match.toString(),"bye"===n.histories[r].id&&(a[r]+="b")):r===e.status.round?a[r]="*":a[r]="";return a.slice(1)}),[t,e.status.round]),f=Object(r.useMemo)((function(){for(var t=[],n=function(n){var a=e.players[n];if("bye"===a.id)return"continue";void 0===a.score&&console.trace();for(var r=[],c=0,s=Object.entries(K.pre);c<s.length;c++){var o=Object(m.a)(s[c],2),u=(o[0],o[1]);u.show&&!u.show(a,n,e.settings)||r.push([u.value(a,n,e.settings),u,a])}for(var i=d(a).map((function(e){return[e,K.roundColumn,a]})),l=[],f=0,b=Object.entries(K.post);f<b.length;f++){var h=Object(m.a)(b[f],2),p=(h[0],h[1]);p.show&&!p.show(a,n,e.settings)||l.push([p.value(a,n,e.settings),p,a])}var v=[].concat(r,Object(Y.a)(i),l);t.push(v)},r=0;r<e.players.length;r++)n(r);var s=function(e,t){return t-e},o=i[0].startsWith("round")?K.roundColumn:K.pre[i[0]]||K.post[i[0]];if(o&&!1!==o.sort){o.sort&&(s=o.sort);var u=a.indexOf(i[0]);-1!==u&&(t=t.sort((function(e,t){return i[1]%2?s(t[u][0],e[u][0]):s(e[u][0],t[u][0])})))}return t.map((function(t,n){return c.a.createElement("tr",{key:"row."+n,className:z.a.tr},t.map((function(t,a){var r=Object(m.a)(t,3),s=r[0],o=r[1],u=r[2],i=s?s.toString():"";o.convert?i=o.convert(s,u,e.settings):o.postConvert&&(i=o.postConvert(i,n)),"undefined"!==typeof i&&""!==i||(i="\u200b");var l="function"===typeof o.className?o.className(i,a,e.settings):o.className;return c.a.createElement("th",null,c.a.createElement("div",{id:o.id?o.id(u,a):void 0,key:[s,a].join("."),className:[z.a.cell,l,z.a[l]].join(" ")},i))})))}))}),[e.players,e.settings,d,i]);return c.a.createElement("section",null,c.a.createElement("table",{className:["download-table full-width",z.a.table].join(" ")},c.a.createElement("thead",null,c.a.createElement("tr",null,a.map((function(e,t){var n=e.startsWith("round")?K.roundColumn:K.pre[e]||K.post[e];return c.a.createElement("th",{scope:"column",key:["column",t].join("."),className:[z.a.th,e.startsWith("round")?z.a.round:""].join(" "),id:e,onClick:function(){return l(e)}},c.a.createElement("div",{className:[z.a.cell,z.a.headerCell].join(" ")},"function"===typeof n.name?n.name(e,t):n.name))})))),c.a.createElement("tbody",null,f)))}function Z(e){var t=e.match.params.id,n=Object(r.useState)(!1),s=Object(m.a)(n,2),o=s[0],u=s[1],i=Object(r.useState)({}),d=Object(m.a)(i,2),f=(d[0],d[1],Object(r.useState)({})),b=Object(m.a)(f,2),h=b[0],p=b[1],g=Object(r.useState)({}),w=Object(m.a)(g,2),E=w[0],j=w[1],O=Object(r.useState)([]),y=Object(m.a)(O,2),k=y[0],N=y[1],_=Object(r.useState)([]),S=Object(m.a)(_,2),R=S[0],L=S[1],C=Object(r.useMemo)((function(){if(!k.length)return new Map;var e,t=new Map,n=Object(l.a)(k);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.set(a.id,a)}}catch(r){n.e(r)}finally{n.f()}return t}),[k]),P=E.round||0;Object(r.useEffect)((function(){Promise.all([v({url:"/tournament/"+t+"/fetchPlayers"}).then(N).catch((function(){})),v({url:"/tournament/"+t+"/getPairings"}).then(L).catch((function(){})),v({url:"/tournament/"+t+"/getStatus"}).then(j).catch((function(){})),v({url:"/tournament/"+t+"/getSettings"}).then(p)]).then((function(){return u(!0)}))}),[L,N]),Object(r.useEffect)((function(){if(P){for(var e=new Array(P+1),t=1;t<P+1;t++)e[t]={match:0,game:0};C.set("bye",{id:"bye",firstName:"BYE",histories:e})}}),[C,P]);var W=["pairings","standings"],M=Object(r.useState)("pairings"),D=Object(m.a)(M,2),T=D[0],B=D[1];Object(r.useEffect)((function(){var e=window.location.hash.slice(1);W.includes(e)&&B(e)}),[window.location.hash]);var F=Object(r.useMemo)((function(){if(!h.streamURL)return!1;var e=h.streamURL.match(x);if(!e)return null;var t=e.slice(1),n=Object(m.a)(t,2),r=n[0],s=n[1],o=r.split(".").shift();return c.a.createElement("a",{href:{twitch:"https://twitch.tv/",youtube:"https://youtube.com/"}[o]+s,className:["header-button",o+"-link"].join(" ")},c.a.createElement("div",null,c.a.createElement("img",{src:a[o],alt:o})),c.a.createElement("div",null,c.a.createElement("h2",null,"Watch Live")))}),[h.streamURL]);return o?c.a.createElement("div",{id:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,E.name),c.a.createElement("section",null,c.a.createElement("div",{className:"button-list"},c.a.createElement("a",{href:"#pairings",className:"header-button"},c.a.createElement("div",{className:"full-text"},c.a.createElement("h2",null,"Pairings"))),c.a.createElement("a",{href:"#standings",className:"header-button"},c.a.createElement("div",{className:"full-text"},c.a.createElement("h2",null,"Standings"))),F)),c.a.createElement("section",null,"pairings"===T?c.a.createElement(J,{id:e.match.params.id,playerDict:C,status:E,pairings:R}):null,"standings"===T?c.a.createElement(X,{setDisplayPlayer:function(){},show:function(){},status:E,players:Array.from(C.values()),settings:h}):null))):null}var $=function(){return c.a.createElement(u.a,{basename:""},c.a.createElement(i.a,{render:function(e){var t=e.location;return c.a.createElement(i.c,{location:t},c.a.createElement(i.a,{exact:!0,path:"/tournament/:id/",render:function(e){return c.a.createElement(Z,e)}}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.b7e05274.chunk.js.map