(this["webpackJsonptoastie-results"]=this["webpackJsonptoastie-results"]||[]).push([[0],{10:function(e,t,n){e.exports={score:"pairings_score__1_XJ4",live:"pairings_live__2HfIn",finished:"pairings_finished__2hyLH",pending:"pairings_pending__dZRvQ",pairingRound:"pairings_pairingRound__2yWvy",roundSelected:"pairings_roundSelected__2-WH_",nullRound:"pairings_nullRound__x4Kar",inner:"pairings_inner__26iQp"}},100:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"watch",(function(){return le.a})),n.d(a,"youtube",(function(){return fe.a})),n.d(a,"twitch",(function(){return de.a}));var r=n(1),o=n.n(r),i=n(20),c=n.n(i),s=(n(64),n(56)),l=n(18),u=n(17),d=n(3),m=(n(31),n(27)),f=n.n(m),h=n(28),p=function(){};console.log("isDev",!1);var v=h.a;function b(e){return e=Object.assign(e,{method:"GET"}),f()(e).then((function(e){return e.data})).catch((function(e){var t;throw console.error(e),e.response&&p([e.response.status,e.response.statusText,":","/"+(null===(t=e.response.config.url)||void 0===t?void 0:t.split("/").pop())].join(" ")),e}))}f.a.defaults.baseURL=v;var g=n(9),w=n.n(g),y=n(19),E=n(52),j=n.n(E),O=/chess\.com\/(?:live#tm=|club\/matches\/live\/(?:[a-z-]+\/)?)([0-9]+)/,_=/(?:https:\/\/)?(?:www.)?(?:(twitch.tv|youtube.com))\/(.*)/,k=n(14),M=n.n(k),x=(n(100),n(2)),N=n(55),S=n(4),C=n(5),R=n(25),L=n(6),P=n(7),D=n(53),T=n.n(D),A=n(54),I=n.n(A),W=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],B=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props.headerInfo;if(!e)return null;var t=e.Link,n=e.White,a=e.Black,r=e.WhiteTeam,i=e.BlackTeam,c=e.BlackElo,s=e.WhiteElo,l=e.Round,u=e.Game,d=e.Result,m=e.Event,f=e.Site,h=e.Date.split("."),p=h&&"".concat(h[2]," ").concat(W[new Number(h[1])-1]," ").concat(h[0]),v=m&&f?" ".concat(m," | ").concat(f," | ").concat(d," "):null,b=p&&l&&u?" ".concat(p," | Round ").concat(l," | Game ").concat(u," "):null,g={fontWeight:"bold",marginBottom:"0.25rem"},w={fontSize:"14px"};return o.a.createElement("div",{className:"pgnHeader",style:{padding:"5px"}},t?o.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",style:g},n," (",s,") vs. ",a," (",c,")"):o.a.createElement("div",{style:g},n," (",s,") vs. ",a," (",c,")"),r||i?o.a.createElement("div",{style:g},r," vs. ",i):null,o.a.createElement("div",{style:w},v),o.a.createElement("div",{style:w},b))}}]),n}(o.a.Component),F=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleDownload=function(){var t=e.props.onDownload;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handleDownload,style:this.props.iconStyles},o.a.createElement(x.j,null))}}]),n}(o.a.Component),q=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handlePreviousMove=function(){var t=e.props.onPreviousMove;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handlePreviousMove,style:this.props.iconStyles},o.a.createElement(x.a,null))}}]),n}(o.a.Component),U=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleNextMove=function(){var t=e.props.onNextMove;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handleNextMove,style:this.props.iconStyles},o.a.createElement(x.b,null))}}]),n}(o.a.Component),H=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleLastMove=function(){var t=e.props.onLastMove;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handleLastMove,style:this.props.iconStyles},o.a.createElement(x.o,null))}}]),n}(o.a.Component),J=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleReset=function(){var t=e.props.onReset;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handleReset,style:this.props.iconStyles},o.a.createElement(x.n,null))}}]),n}(o.a.Component),V=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleFlipBoard=function(){var t=e.props.onFlipBoard;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props.iconStyles,t=JSON.parse(JSON.stringify(e));return o.a.createElement("div",{onClick:this._handleFlipBoard,style:t},o.a.createElement(x.p,null))}}]),n}(o.a.Component),G=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handlePlay=function(){var t=e.props.onPlay;"function"===typeof t&&t()},e}return Object(C.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this._handlePlay,style:this.props.iconStyles},this.props.isPlaying?o.a.createElement(x.l,null):o.a.createElement(x.m,null))}}]),n}(o.a.Component),z=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onDownload,n=e.onNextMove,a=e.onPreviousMove,r=e.onReset,i=e.onFlipBoard,c=e.width,s=e.onLastMove,l=e.onPlay,u=e.isPlaying,d=e.fenMove,m={cursor:"pointer",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:c,paddingTop:"10px",paddingBottom:"5px"},f={paddingLeft:"20px"};return o.a.createElement("div",{className:"pgnViewerFooter",style:m},!d&&o.a.createElement(J,{onReset:r,iconStyles:f}),!d&&o.a.createElement(q,{onPreviousMove:a,iconStyles:f}),!d&&o.a.createElement(U,{onNextMove:n,iconStyles:f}),!d&&o.a.createElement(H,{onLastMove:s,iconStyles:f}),!d&&o.a.createElement(G,{onPlay:l,iconStyles:f,isPlaying:u}),o.a.createElement(V,{onFlipBoard:i,iconStyles:f}),o.a.createElement(F,{onDownload:t,iconStyles:f}))}}]),n}(o.a.Component),Q=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._handleChangeMove=function(){var t=e.props,n=t.onChangeMove,a=t.moveIndex;"function"===typeof n&&n(a)},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.move,n=e.moveIndex,a=e.currentIndex,r=n%2!==0,i=Math.ceil(n/2)+".",c={cursor:"pointer",color:"black",display:"inline-block"};return a===n&&(c.fontWeight=700),o.a.createElement("span",{onClick:this._handleChangeMove,style:c},r&&i,"\xa0",t,"\xa0")}}]),n}(o.a.Component),Y=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.result,n=e.moves,a=e.currentIndex,r=e.onChangeMove,i=e.startAtMove,c=e.endAtMove,s=e.fenMove;return n?o.a.createElement("div",{className:"pgnViewerMoveList"},!s&&n.map((function(e,t){return t<i-1||t>c-1?null:o.a.createElement(Q,{onChangeMove:r,key:t,currentIndex:a,move:e,moveIndex:t+1})})),s&&o.a.createElement("div",null,s%2===0?"White":"Black"," to move"),o.a.createElement("span",{className:"bold"},t)):null}}]),n}(o.a.Component),K={base:{display:"flex",justifyContent:"center",flexDirection:"row"},wrapper:{width:500,background:"white"}},X=function(e){var t,n=JSON.parse(JSON.stringify(K)),a=Object(u.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n[r.area][r.stylePair[0]]=r.stylePair[1]}}catch(o){a.e(o)}finally{a.f()}return n},Z=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e))._updateDimensions=function(){a.setState({windowWidth:window&&window.innerWidth})},a._makeIncreasingMoves=function(e){for(var t=e.numberOfMoves,n=e.reset,r=a.state,o=r.chess,i=r.moves,c=r.index,s=n?0:new Number(c),l=0;l<t;l++)o.move(i[s]),s++;a.setState({chess:o,index:s})},a._handleNextMove=function(){var e=a.state,t=e.moves,n=e.chess,r=e.index,o=e.endAtMove,i=new Number(r);i>=t.length||r===o||(n.move(t[i]),i++,a.setState({chess:n,index:i}))},a._handlePreviousMove=function(){var e=a.state,t=e.chess,n=e.index,r=e.startAtMove,o=new Number(n);o<=0||n===r||(t.undo(),o--,a.setState({chess:t,index:o}))},a._handleReset=function(){var e=a.state,t=e.chess,n=e.startAtMove;t.reset(),n?a._makeIncreasingMoves({numberOfMoves:n,reset:!0}):a.setState({chess:t,index:0})},a._handleLastMove=function(){var e=a.state,t=e.moves,n=e.index,r=e.endAtMove;if(!(n>=t.length||n===r)){var o=r?r-n:t.length-n;a._makeIncreasingMoves({numberOfMoves:o})}},a._handleFlipBoard=function(){a.setState({orientation:"w"===a.state.orientation?"b":"w"})},a._handlePlay=function(){var e=a.state,t=e.moves,n=(e.chess,e.index),r=e.isPlaying;r||(n>=t.length&&a._handleReset(),a._handleNextMove()),a.setState({isPlaying:!r})},a._handleChangeMove=function(e){var t=a.state,n=t.chess,r=t.index;if(e!==r)if(e<r){for(var o=0;o<r-e;o++)n.undo();a.setState({chess:n,index:e})}else{var i=e-r;a._makeIncreasingMoves({numberOfMoves:i})}},a._handleDownload=function(){var e=a.state,t=e.headerInfo,n=e.fenMove,r=e.chess,o=document.createElement("a"),i=n?r.fen():a.props.pgnInformation,c=n?"txt":"pgn",s=new Blob([i],{type:"text/plain"}),l=t.White.split(" ")[1],u=t.Black.split(" ")[1];o.href=URL.createObjectURL(s),o.download="".concat(l,"vs").concat(u).concat(t.EventDate,".").concat(c),o.click()},a.state={chess:null,moves:null,index:null,headerInfo:null,isPlaying:null,isLoaded:null,startAtMove:null,fenMove:null,endAtMove:null,windowWidth:window&&window.innerWidth,orientation:a.props.orientation},a}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.pgnInformation,t=new T.a,n=0,a=e.trim().replace(/\[/g,"");if(!a)return null;var r=a.split("]").map((function(e){return e.trim()}));t.load_pgn(e);for(var o=0;o<r.length-2;o++){var i=r[o].split(' "');i[1]?t.header(i[0].replace(/\"/g,""),i[1].replace(/\"/g,"")):t.header(i[0].replace(/\"/g,""))}var c=t.header(),s=t.history();t.reset();var l=2*c.StartAtMove-1,u=2*c.EndAtMove,d=c.Fen&&c.Fen.split(""),m=d&&"b"===d.pop(),f=d&&d.join(""),h=m?2*f:2*f-1;if(l)for(var p=0;p<l;p++)t.move(s[n]),n++;else if(d)for(var v=0;v<h;v++)t.move(s[n]),n++;if(this.props.startAtLatest)for(var b=0;b<s.length;b++)t.move(s[n]),n++;this.setState({chess:t,moves:s,index:n,startAtMove:l,endAtMove:u,fenMove:d?h:null,headerInfo:c}),this._updateDimensions(),window.addEventListener("resize",this._updateDimensions),window.addEventListener("load",this._updateDimensions),window.addEventListener("orientationchange",this._updateDimensions)}},{key:"componentDidUpdate",value:function(){var e=this;this.state.isPlaying?this.timeoutID=setTimeout((function(){return e._handleNextMove()}),1e3):clearTimeout(this.timeoutID)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._updateDimensions),window.removeEventListener("load",this._updateDimensions),window.removeEventListener("orientationchange",this._updateDimensions)}},{key:"render",value:function(){var e=this.props,t=e.blackSquareColor,n=e.whiteSquareColor,a=e.width,r=e.backgroundColor,i=e.showCoordinates,c=this.state,s=c.chess,l=c.moves,u=c.index,d=c.headerInfo,m=c.orientation,f=c.isPlaying,h=c.windowWidth,p=c.startAtMove,v=c.endAtMove,b=c.fenMove,g=function(e){var t=e.windowWidth,n=e.backgroundColor,a=e.defaultWidth,r=t&&t<768,o=r?"100%":a,i=r?"column":"row",c=[];c.push({area:"base",stylePair:["width",o]}),c.push({area:"base",stylePair:["flexDirection",i]}),c.push({area:"wrapper",stylePair:["width",o]}),c.push({area:"wrapper",stylePair:["background",n]});var s=X(c);return{width:o,isMobile:r,baseStyles:s.base,wrapperStyles:s.wrapper}}({windowWidth:h,backgroundColor:r,defaultWidth:a}),w=(g.baseStyles,g.wrapperStyles),y=g.isMobile,E=g.width,j=function(e,t){var n=(t-1)%2===0,a=null;if(e&&t)switch(e[t-1]){case"O-O":a=n?"g1":"g8";break;case"O-O-O":a=n?"c1":"c8";break;default:a=e[t-1].match(/[a-z][1-8]/gm)[0]}return a}(l,u);return o.a.createElement("div",{className:"pgnWrapper",style:w},d&&o.a.createElement(B,{headerInfo:d,width:E}),o.a.createElement("div",{className:"pgnViewerMain",onWheel:function(e){e.stopPropagation()}},o.a.createElement(I.a,{blackSquareColour:t,fen:s&&s.fen()||"start",orientation:m,showCoordinates:i,activeSquare:j,style:{border:"2px solid lightgrey"},whiteSquareColour:n,width:y?E:2/3*E,height:y?E:2/3*E}),!y&&o.a.createElement(Y,{onChangeMove:this._handleChangeMove,currentIndex:u,moves:l,width:1/3*E,startAtMove:p,endAtMove:v,fenMove:b,result:d?d.Result:null})),o.a.createElement(z,{isPlaying:f,onPlay:this._handlePlay,onDownload:this._handleDownload,onFlipBoard:this._handleFlipBoard,onNextMove:this._handleNextMove,onPreviousMove:this._handlePreviousMove,onReset:this._handleReset,fenMove:b,onLastMove:this._handleLastMove,width:E}),y&&o.a.createElement(Y,{onChangeMove:this._handleChangeMove,currentIndex:u,moves:l,width:E,startAtMove:p,endAtMove:v,fenMove:b,result:d?d.Result:null}))}}]),n}(o.a.Component),$=function(e){Object(P.a)(n,e);var t=Object(L.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).makeViewer=function(e){var t=e.pgnInformation,n=a.props,r=n.blackSquareColor,i=n.whiteSquareColor,c=n.orientation,s=n.width,l=n.backgroundColor,u=n.showCoordinates,d=n.startAtLatest;return o.a.createElement(Z,{pgnInformation:t,blackSquareColor:r,whiteSquareColor:i,width:s,orientation:c,backgroundColor:l,showCoordinates:u,startAtLatest:d})},a.createInnerHtml=function(){return{__html:a.props.children}},a.additionalHTMLModification=function(){var e=a.props,t=e.nodeToModify,n=e.nodeModification,r=c.a.findDOMNode(Object(R.a)(a)).querySelectorAll(t);if("function"!==typeof n||!t)return null;for(var o=0;o<r.length;o++)n(r[o])},a.setPgn=function(e){for(var t=c.a.findDOMNode(Object(R.a)(a)).querySelectorAll("pgn"),n=0;n<t.length;n++)c.a.render(a.makeViewer({pgnInformation:e[n]}),t[n])},a.state={pgns:null},a}return Object(C.a)(n,[{key:"componentDidMount",value:function(){for(var e=c.a.findDOMNode(this).querySelectorAll("pgn"),t=[],n=0;n<e.length;n++)t.push(e[n].innerHTML.slice(0));this.setState({pgns:t}),this.additionalHTMLModification(),this.setPgn(t)}},{key:"componentDidUpdate",value:function(){this.additionalHTMLModification(),this.setPgn(this.state.pgns)}},{key:"render",value:function(){var e=this.props,t=e.innerHTML,n=e.children;return o.a.createElement("div",null,t&&o.a.createElement("div",{dangerouslySetInnerHTML:this.createInnerHtml()}),!t&&o.a.createElement("div",null,this.makeViewer({pgnInformation:n})))}}]),n}(o.a.Component);$.defaultProps={backgroundColor:"#e1e5ed",blackSquareColor:"steelblue",orientation:"w",showCoordinates:!0,whiteSquareColor:"aliceblue",width:600};var ee=$,te=new j.a({queue:!0});function ne(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(y.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){te.dispatch(te.getTeamLiveMatchBoard,(function(t,n){if(n)return a(n);e(t.body)}),[t,n])})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){te.dispatch(te.getTeamLiveMatch,(function(t,a){if(a)return n(a);e(t.body)}),[t])})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}new Map([["p",o.a.createElement(x.g,null)],["n",o.a.createElement(x.f,null)],["b",o.a.createElement(x.c,null)],["r",o.a.createElement(x.i,null)],["q",o.a.createElement(x.h,null)],["k",o.a.createElement(x.e,null)]]);function ie(e){var t=Object(r.useState)(e.enforceBoards||20),n=Object(d.a)(t,2),a=n[0],i=n[1],c=Object(r.useReducer)((function(e,t){var n=e.slice(0);return n[t.board]={boardScores:t.boardScores,games:t.games},n}),[]),s=Object(d.a)(c,2),l=s[0],m=s[1],f=Object(r.useState)(0),h=Object(d.a)(f,2),p=h[0],v=h[1],b=Object(r.useReducer)((function(e,t){return e[t.i]=t.name,e}),["",""]),g=Object(d.a)(b,2),E=g[0],j=g[1],_=Object(r.useReducer)((function(e,t){var n=Object.assign({},e);return n[t.player.username.toLowerCase()]=t.team,n}),{}),k=Object(d.a)(_,2),x=k[0],S=k[1],C=Object(r.useState)(!1),R=Object(d.a)(C,2),L=R[0],P=R[1],D=Object(r.useReducer)((function(e,t){var n=e.slice(0);return n[t.board]=t.set,n}),[]),T=Object(d.a)(D,2),A=T[0],I=T[1],W=Object(r.useCallback)(Object(y.a)(w.a.mark((function t(){var n,a,r,o,c,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.matchURL.match(O)){t.next=3;break}return t.abrupt("return",console.error("Invalid URL: ",e.matchURL));case 3:return a=Number(n[1]),t.prev=4,t.next=7,re(a);case 7:for((r=t.sent).boards&&i(r.boards),"finished"!==r.status&&"scheduled"!==r.status||P(!0),o=function(){var e=s[c],t=E.findIndex((function(t){return!t||t===e.name}));j({name:e.name,i:t});var n,a=Object(u.a)(e.players);try{for(a.s();!(n=a.n()).done;){var r=n.value;S({player:r,team:t})}}catch(o){a.e(o)}finally{a.f()}},c=0,s=Object.values(r.teams);c<s.length;c++)o();t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.error(t.t0);case 17:v(a);case 18:case"end":return t.stop()}}),t,null,[[4,14]])}))),[e.matchURL,E]);Object(r.useEffect)((function(){W()}),[W]);var B=Object(r.useCallback)(Object(y.a)(w.a.mark((function t(){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p){t.next=2;break}return t.abrupt("return");case 2:if(!L||!l.length||a){t.next=4;break}return t.abrupt("return");case 4:n=w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!A[n]){t.next=2;break}return t.abrupt("return","continue");case 2:if(r=ne(p,n).then((function(e){m({games:e.games,boardScores:e.board_scores,board:n});var t=e.games[e.games.length-1];return Date.now()>t.end_time&&I({board:n,set:!0}),!0})).catch((function(e){return i(n-1),!1})),a!==(e.enforceBoards||20)){t.next=9;break}return t.next=6,r;case 6:if(t.t0=t.sent,!1!==t.t0){t.next=9;break}return t.abrupt("return","break");case 9:case"end":return t.stop()}}),t)})),r=1;case 6:if(!(r<a+1)){t.next=17;break}return t.delegateYield(n(r),"t0",8);case 8:o=t.t0,t.t1=o,t.next="continue"===t.t1?12:"break"===t.t1?13:14;break;case 12:return t.abrupt("continue",14);case 13:return t.abrupt("break",17);case 14:r++,t.next=6;break;case 17:case"end":return t.stop()}}),t)}))),[p,a,L,A,l.length,e.enforceBoards]);if(Object(r.useEffect)((function(){var e=setInterval(B,1e3);return function(){return clearInterval(e)}}),[B]),!l.length&&!a)return o.a.createElement("div",null,"Match has not yet started!");if(!l.length)return o.a.createElement("div",{className:M.a.loading},o.a.createElement(N.a,null));var F=l.length?{}:{gridTemplateColumns:"1fr"};return o.a.createElement("div",{className:M.a.container,style:F},l.map((function(t,n){return o.a.createElement(ce,{pairing:t,teamDict:x,teams:E,round:e.round,board:n})})))}function ce(e){var t=Object(r.useMemo)((function(){return Object.entries(e.pairing.boardScores)}),[e.pairing.boardScores]),n=Object(r.useState)(e.pairing.games.length-1),a=Object(d.a)(n,2),i=a[0],c=a[1],s=Object(r.useMemo)((function(){return e.pairing.games.map((function(t,n){var a=e.teamDict[t.black.username.toLowerCase()];if(!t.pgn)return null;var r=['[WhiteTeam "'.concat(a?e.teams[0]:e.teams[1],'"]'),'[BlackTeam "'.concat(a?e.teams[1]:e.teams[0],'"]'),'[Board "'.concat(e.board+1,'"]'),'[Game "'.concat(n+1,'"]'),t.pgn.replace('[Round "-"]','[Round "'.concat(e.round,'"]'))].join("\n");return o.a.createElement(ee,{innerHTML:!1,showCoordinates:!0,width:"100%",startAtLatest:!0},r)}))}),[e.pairing.games,e.round,e.teams,e.teamDict]),l=e.pairing.games[i],u=l&&e.teamDict[l.black.username.toLowerCase()]?t.reverse():t;return Object(r.useEffect)((function(){window.dispatchEvent(new Event("resize"))})),i<0?null:o.a.createElement("div",{className:M.a.wrapper},o.a.createElement("div",{className:M.a.boardLabel},o.a.createElement(x.a,{className:[M.a.pan,i?M.a.active:M.a.null].join(" "),onClick:function(){return i?c(i-1):null}}),o.a.createElement("span",{className:"bold"},u[0][1]),o.a.createElement("a",{href:"https://www.chess.com/live/game/"+l.url.split("/").pop(),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(x.d,null)),o.a.createElement("span",{className:"bold"},u[1][1]),o.a.createElement(x.b,{className:[M.a.pan,i===e.pairing.games.length-1?M.a.null:M.a.active].join(" "),onClick:function(){return i<e.pairing.games.length-1?c(i+1):null}})),s.map((function(e,t){return o.a.createElement("div",{className:M.a.gameViewWrapper,style:{visibility:t===i?"visible":"hidden"}},e)})))}var se=n(48),le=n.n(se),ue=n(49),de=n.n(ue),me=n(50),fe=n.n(me),he=n(10),pe=n.n(he);function ve(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],i=n[1],c=Object(r.useReducer)((function(e,t){var n=e.slice(0);return e.includes(t)?n.splice(n.indexOf(t)):n.push(t),n}),[]),s=Object(d.a)(c,2),l=s[0],m=s[1],f=Object(r.useState)(!1),h=Object(d.a)(f,2),p=h[0],v=h[1],g=Object(r.useState)(e.status.round),E=Object(d.a)(g,2),j=E[0],_=E[1],k=Object(r.useReducer)((function(e,t){var n=Object.assign({},e);return n[t.id]=t,n}),{}),M=Object(d.a)(k,2),N=M[0],S=M[1];Object(r.useEffect)((function(){v(!1),b({url:"/tournament/"+e.id+"/getPairings",params:{round:j}}).then(i).then((function(){return v(!0)})).catch((function(){}))}),[i,j]);var C=Object(r.useCallback)(Object(y.a)(w.a.mark((function t(){var n,r,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(u.a)(a),t.prev=1,o=function(){var t=r.value,n=Object.values(t[2]).find((function(e){return e}));if(!n)return"continue";var a=n.match(O);n=a?"https://www.chess.com/club/matches/live/"+a[1]:"",re(Number(a[1])).then((function(e){return S({id:a[1],startTime:1e3*e.start_time,endTime:e.end_time?1e3*e.end_time:void 0,finished:"finished"===e.status})})).catch(function(){var t=Object(y.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.message.includes("not found")?b({url:"/tournament/"+e.id+"/scrapeChessComTeamPage",params:{url:n}}).then((function(e){S({id:a[1],startTime:e.Start_Time?new Date(e["Start Time"]).valueOf():void 0,endTime:e.End_Time?new Date(e["End Time"]).valueOf():void 0,players:e["Players per Team"],finished:!1})})):console.error(r);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},n.s();case 4:if((r=n.n()).done){t.next=10;break}if("continue"!==o()){t.next=8;break}return t.abrupt("continue",8);case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])}))),[a,S]);Object(r.useEffect)((function(){C()}),[C]);for(var R=[],L="Infinity"===e.settings.totalRounds?1:e.settings.totalRounds,P=function(t){R.push(o.a.createElement("div",{className:["header-button",pe.a.pairingRound,j===t?pe.a.roundSelected:"",t>e.status.round?pe.a.nullRound:""].join(" "),onClick:function(){return _(t)}},o.a.createElement("div",{className:"full-text"},o.a.createElement("h4",null,"Round ",t))))},D=1;D<L+1;D++)P(D);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",null,o.a.createElement("div",{className:"button-list"},R)),o.a.createElement("section",null,o.a.createElement("p",null,"All times in ",new Date(Date.now()).toString().slice(25)),o.a.createElement("table",{className:"download-table full-width"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{width:"27.5%"}},"White"),o.a.createElement("td",{style:{width:"12.5%"}},"Link"),o.a.createElement("td",{style:{width:"5%"}}),o.a.createElement("td",{style:{width:"10%"}},"Start Time"),o.a.createElement("td",{style:{width:"5%"}}),o.a.createElement("td",{style:{width:"12.5%"}},"Watch Live"),o.a.createElement("td",{style:{width:"27.5%"}},"Black"))),o.a.createElement("tbody",null,p&&!a.length?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:100},"Draw has not yet taken place!")):"",a.map((function(t,n){var a,r,i,c,s,u=[t[0].trim(),t[1].trim()].join("."),d=e.playerDict.get(t[0].trim()),f=e.playerDict.get(t[1].trim()),h=Object.values(t[2]).find((function(e){return e})),p=null===(a=h)||void 0===a?void 0:a.match(O);h=p?"https://www.chess.com/club/matches/live/"+p[1]:"";var v=N&&p&&N[p[1]]?N[p[1]]:{},b=[v.startTime||1/0,v.endTime||1/0],g=b[0],w=b[1],y=Date.now()>g,E=Date.now()>w,_=p&&N[p[1]]?N[p[1]].players:void 0;return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",{key:["row",n].join(".")},o.a.createElement("td",null,o.a.createElement("div",{className:"playerName"},null===d||void 0===d?void 0:d.firstName)),o.a.createElement("td",{className:pe.a.inner},h?o.a.createElement("a",{className:"button",href:h.trim(),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(x.k,null),o.a.createElement("div",null,"chess.com")):null),o.a.createElement("td",{className:pe.a.inner},o.a.createElement("div",{className:["bold",pe.a.score,v.finished||E?pe.a.finished:!v.started&&null!==(null===d||void 0===d||null===(r=d.histories[j])||void 0===r?void 0:r.game)||y?pe.a.live:pe.a.pending].join(" ")},null===d||void 0===d||null===(i=d.histories[j])||void 0===i?void 0:i.game)),o.a.createElement("td",null,v.startTime||v.endTime?new Date(v.startTime||v.endTime).toString().slice(0,21):"-"),o.a.createElement("td",{className:pe.a.inner},o.a.createElement("div",{className:["bold",pe.a.score,v.finished||E?pe.a.finished:!v.started&&null!==(null===d||void 0===d||null===(c=d.histories[j])||void 0===c?void 0:c.game)||y?pe.a.live:pe.a.pending].join(" ")},null===f||void 0===f||null===(s=f.histories[j])||void 0===s?void 0:s.game)),o.a.createElement("td",{className:pe.a.inner},h?o.a.createElement("div",{className:"button",onClick:function(){return m(u)}},v.finished?o.a.createElement("div",null,"Analysis"):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"icon",src:le.a,alt:"Watch games"}),o.a.createElement("div",null,"Watch live"))):null),o.a.createElement("td",null,o.a.createElement("div",{className:"playerName"},null===f||void 0===f?void 0:f.firstName))),h&&l.includes(u)?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:100},t[2].chessComLink||t[2].chessComTeamLink?(t[2].chessComTeamLink,o.a.createElement(ie,{matchURL:t[2].chessComTeamLink||t[2].chessComLink,enforceBoards:_?Number(_):0,round:e.status.round})):null)):null)}))))))}var be=n(26),ge=n(15),we=n.n(ge),ye={pre:{id:{name:"",className:"blank",sort:!1,value:function(){return 0},postConvert:function(e,t){return(1+t).toString()}},name:{name:"Name",className:"playerName",id:function(e){return e.id},sort:function(e,t){return e>t?1:e<t?-1:0},value:function(e,t,n){return"individual"===n.competitors?[e.firstName,e.lastName].join(" "):e.firstName}},rating:{name:"Rating",className:"locked",value:function(e){return e.rating},show:function(e,t,n){return n.showRatings}}},roundColumn:{name:function(e,t){return e.slice(-1)},className:function(e,t,n){return"*"===e?"edit":""===e?"unset":"locked"},value:function(){},convert:function(e,t,n){if(""===e)return"";if("*"===e)return"*";var a,r=parseInt(e);return a=.5===r?"\xbd":r.toString(),e.endsWith("b")&&(a+="b"),a},sort:function(e,t){if(e===t)return 0;if(""===e)return-1;if(""===t)return-1;if("*"===e)return 1;if("*"===t)return-1;var n=[parseInt(e),parseInt(t)],a=n[0],r=n[1];return e.endsWith("b")&&(a-=.001),t.endsWith("b")&&(r-=.001),r-a}},post:{score:{name:"MP",className:"locked",value:function(e){return parseFloat(e.score.toString())},convert:function(e,t){return e.toFixed(1)+" / "+t.played}},gamePoints:{name:"GP",className:"locked",value:function(e){return e.gamePoints},convert:function(e){return e.toFixed(1)}},winPercentage:{name:"Win %",className:"rating",value:function(e){return 0===e.played?-1:100*e.score/e.played},convert:function(e){return e<0?"-":e.toFixed()}},performanceRating:{name:"Perf",className:"rating",value:function(e){return e.performanceRating},convert:function(e){return e.toFixed()},show:function(e,t,n){return n.showRatings}},ratingDifference:{name:"P. +/-",className:"rating",value:function(e){return e.performanceRating?e.performanceRating-e.rating:0},convert:function(e){return e?e>0?"+"+e.toString():e.toString():""},show:function(e,t,n){return n.showRatings}},expectedScore:{name:"Expected",className:"rating",value:function(e){return e.expectedScore},convert:function(e,t){return e.toFixed(1)+" / "+t.played},show:function(e,t,n){return n.showRatings}},expectedDifference:{name:"E. +/-",className:"rating",value:function(e){return e.score-e.expectedScore},convert:function(e){return"undefined"===typeof e?"":e>0?"+"+e.toFixed(2):e.toFixed(2)},show:function(e,t,n){return n.showRatings}}}};function Ee(e){var t=Object(r.useMemo)((function(){return e.status.round>e.settings.totalRounds||"Infinity"===e.settings.totalRounds?e.status.round:e.settings.totalRounds}),[e.status.round,e.settings.totalRounds]),n=Object(r.useMemo)((function(){for(var e=[],n=1;n<=t;n++)e.push("round."+n.toString());return e}),[t]),a=Object(r.useMemo)((function(){return[].concat(Object(be.a)(Object.keys(ye.pre)),Object(be.a)(n),Object(be.a)(Object.keys(ye.post)))}),[n]).filter((function(t,n){var a=ye.pre[t]||ye.post[t];return!a||!(a.show&&!a.show(null,n,e.settings))})),i=Object(r.useCallback)((function(e,t){return a.includes(t)?e[0]!==t?[t,0]:[t,e[1]+1]:["",0]}),[a]),c=Object(r.useReducer)(i,["score",0]),s=Object(d.a)(c,2),l=s[0],u=s[1],m=Object(r.useCallback)((function(n){for(var a=[""],r=1;r<=t;r++)n.histories[r]?(null===n.histories[r].match||void 0===n.histories[r].match?a[r]="*":a[r]=n.histories[r].match.toString(),"bye"===n.histories[r].id&&(a[r]+="b")):r===e.status.round?a[r]="*":a[r]="";return a.slice(1)}),[t,e.status.round]),f=Object(r.useMemo)((function(){for(var t=[],n=function(n){var a=e.players[n];if("bye"===a.id)return"continue";for(var r=[],o=0,i=Object.entries(ye.pre);o<i.length;o++){var c=Object(d.a)(i[o],2),s=(c[0],c[1]);s.show&&!s.show(a,n,e.settings)||r.push([s.value(a,n,e.settings),s,a])}for(var l=m(a).map((function(e){return[e,ye.roundColumn,a]})),u=[],f=0,h=Object.entries(ye.post);f<h.length;f++){var p=Object(d.a)(h[f],2),v=(p[0],p[1]);v.show&&!v.show(a,n,e.settings)||u.push([v.value(a,n,e.settings),v,a])}var b=[].concat(r,Object(be.a)(l),u);t.push(b)},r=0;r<e.players.length;r++)n(r);var i=function(e,t){return t-e},c=l[0].startsWith("round")?ye.roundColumn:ye.pre[l[0]]||ye.post[l[0]];if(c&&!1!==c.sort){c.sort&&(i=c.sort);var s=a.indexOf(l[0]);-1!==s&&(t=t.sort((function(e,t){return l[1]%2?i(t[s][0],e[s][0]):i(e[s][0],t[s][0])})))}return t.map((function(t,n){return o.a.createElement("tr",{key:"row."+n,className:we.a.tr},t.map((function(t,r){var i=Object(d.a)(t,3),c=i[0],s=i[1],l=i[2],u=c?c.toString():"";s.convert?u=s.convert(c,l,e.settings):s.postConvert&&(u=s.postConvert(u,n)),"undefined"!==typeof u&&""!==u||(u="\u200b");var m="function"===typeof s.className?s.className(u,r,e.settings):s.className;return o.a.createElement(o.a.Fragment,null,o.a.createElement("th",{className:[we.a.cell,we.a.headerCell].join(" ")},o.a.createElement("div",null,"function"===typeof s.name?s.name((a[r]||"").toString(),r):s.name)),o.a.createElement("th",null,o.a.createElement("div",{id:s.id?s.id(l,r):void 0,key:[c,r].join("."),className:[we.a.cell,m,we.a[m]].join(" ")},u)))})))}))}),[e.players,e.settings,m,l]);return o.a.createElement("section",null,o.a.createElement("table",{className:["download-table full-width",we.a.table].join(" ")},o.a.createElement("thead",{className:we.a.headers},o.a.createElement("tr",null,a.map((function(e,t){var n=e.startsWith("round")?ye.roundColumn:ye.pre[e]||ye.post[e];return o.a.createElement("th",{scope:"column",key:["column",t].join("."),className:[we.a.th,e.startsWith("round")?we.a.round:""].join(" "),id:e,onClick:function(){return u(e)}},o.a.createElement("div",{className:[we.a.cell,we.a.headerCell].join(" ")},"function"===typeof n.name?n.name(e,t):n.name))})))),o.a.createElement("tbody",null,f)))}var je=function(){return o.a.createElement("div",{className:"container",style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("img",{src:"/logo512.png",style:{width:256,height:256},alt:"Not-Found"}),o.a.createElement("div",null,"PAGE NOT FOUND"))},Oe=n(29),_e=n.n(Oe);function ke(e){var t=e.match.params.id,n=Object(r.useState)(void 0),i=Object(d.a)(n,2),c=i[0],s=i[1],l=Object(r.useState)({}),m=Object(d.a)(l,2),f=m[0],h=m[1],p=Object(r.useState)({}),v=Object(d.a)(p,2),g=v[0],w=v[1],y=Object(r.useState)([]),E=Object(d.a)(y,2),j=E[0],O=E[1],k=Object(r.useMemo)((function(){if(!j.length)return new Map;var e,t=new Map,n=Object(u.a)(j);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.set(a.id,a)}}catch(r){n.e(r)}finally{n.f()}return t}),[j]),M=g.round||0;Object(r.useEffect)((function(){b({url:"/tournament/"+t+"/getSettings"}).then(h)}),[h,t]),Object(r.useEffect)((function(){b({url:"/tournament/"+t+"/getStatus"}).then(w).then((function(){return s(!0)})).catch((function(){return s(!1)}))}),[w,t,s]),Object(r.useEffect)((function(){b({url:"/tournament/"+t+"/fetchPlayers"}).then(O)}),[O,t]),Object(r.useEffect)((function(){if(M){for(var e=new Array(M+1),t=1;t<M+1;t++)e[t]={match:0,game:0};k.set("bye",{id:"bye",firstName:"BYE",histories:e})}}),[k,M]);var N=["pairings","standings"],S=Object(r.useState)("pairings"),C=Object(d.a)(S,2),R=C[0],L=C[1];Object(r.useEffect)((function(){var e=window.location.hash.slice(1);N.includes(e)&&L(e)}),[window.location.hash]);var P=Object(r.useMemo)((function(){if(!f.streamURL)return!1;var e=f.streamURL.match(_);if(!e)return null;var t=e.slice(1),n=Object(d.a)(t,2),r=n[0],i=n[1],c=r.split(".").shift();return o.a.createElement("a",{href:{twitch:"https://twitch.tv/",youtube:"https://youtube.com/"}[c]+i,className:["header-button","stream-link",c+"-link"].join(" "),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",null,o.a.createElement("img",{src:a[c],alt:c})),o.a.createElement("div",null,o.a.createElement("h2",null,"Commentary")))}),[f.streamURL]);return"undefined"===typeof c?null:c?o.a.createElement("div",{id:"main"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:_e.a.container},o.a.createElement("div",{className:_e.a.profilePicture},o.a.createElement("img",{src:f.logoURL})),o.a.createElement("div",null,o.a.createElement("h1",null,g.name)),o.a.createElement("a",{className:["header-button",_e.a.website].join(" "),href:f.profileURL,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(x.k,null)," Website")),o.a.createElement("section",null,o.a.createElement("div",{className:"button-list"},o.a.createElement("a",{href:"#pairings",className:["header-button","pairings"===R?"selected":""].join(" ")},o.a.createElement("div",{className:"full-text"},o.a.createElement("h2",null,"Pairings"))),o.a.createElement("a",{href:"#standings",className:["header-button","standings"===R?"selected":""].join(" ")},o.a.createElement("div",{className:"full-text"},o.a.createElement("h2",null,"Standings"))),P)),o.a.createElement("section",null,"pairings"===R?o.a.createElement(ve,{id:e.match.params.id,playerDict:k,status:g,settings:f}):null,"standings"===R?o.a.createElement(Ee,{setDisplayPlayer:function(){},show:function(){},status:g,players:Array.from(k.values()),settings:f}):null))):o.a.createElement(je,null)}var Me=function(){return o.a.createElement(s.a,{basename:""},o.a.createElement(l.b,{render:function(e){var t=e.location;return o.a.createElement(l.d,{location:t},o.a.createElement(l.b,{exact:!0,path:"/tournament/:id/",render:function(e){return o.a.createElement(l.a,{to:"/".concat(e.match.params.id,"/")})}}),o.a.createElement(l.b,{exact:!0,path:"/:id/",render:function(e){return o.a.createElement(ke,e)}}),o.a.createElement(l.b,{path:"*",component:je,status:404}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},14:function(e,t,n){e.exports={container:"chesscom_container__AGg5n",wrapper:"chesscom_wrapper__3vwwR",boardlabel:"chesscom_boardlabel__E2EmQ",boardLabel:"chesscom_boardLabel__1N2Qy",gameViewWrapper:"chesscom_gameViewWrapper__T9V4M",board:"chesscom_board__3LGEQ","fade-in":"chesscom_fade-in__15-gn",row:"chesscom_row__17flm",square:"chesscom_square___JdY5",W:"chesscom_W__1Kbfl",B:"chesscom_B__misXA",null:"chesscom_null__13qcL",active:"chesscom_active__1tUDT",loading:"chesscom_loading__2Ayrk",spin:"chesscom_spin__1lrfp"}},15:function(e,t,n){e.exports={th:"crosstable_th__Gp7TR",round:"crosstable_round__2RGZ-",headerCell:"crosstable_headerCell__2zS_u",tr:"crosstable_tr__2Bw-x"}},28:function(e){e.exports=JSON.parse('{"b":"http://localhost:8080/","a":"https://api.oxfordchess.co.uk/","c":true}')},29:function(e,t,n){e.exports={container:"header_container__2eVhq",profilePicture:"header_profilePicture__3FnIB",website:"header_website__15yt9"}},31:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/watch.ddf443c3.svg"},49:function(e,t,n){e.exports=n.p+"static/media/twitch.e1f7813a.svg"},50:function(e,t,n){e.exports=n.p+"static/media/youtube.46bc6904.svg"},59:function(e,t,n){e.exports=n(106)},64:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.ad84473f.chunk.js.map