webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var o=t("/oeL"),u=t("aR8+"),r=t("wQAS"),e=t("q4dy"),i=t("qbdv"),a=t("fc+i");t.d(l,"a",function(){return c});var c=o.b(u.a,[r.a],function(n){return o.c([o.d(512,o.e,o.f,[[8,[e.a]],[3,o.e],o.g]),o.d(5120,o.h,o.i,[[3,o.h]]),o.d(4608,i.a,i.b,[o.h]),o.d(4608,o.j,o.j,[]),o.d(5120,o.k,o.l,[]),o.d(5120,o.m,o.n,[]),o.d(5120,o.o,o.p,[]),o.d(4608,a.b,a.c,[i.c]),o.d(6144,o.q,null,[a.b]),o.d(4608,a.d,a.e,[]),o.d(5120,a.f,function(n,l,t,o){return[new a.g(n),new a.h(l),new a.i(t,o)]},[i.c,i.c,i.c,a.d]),o.d(4608,a.j,a.j,[a.f,o.r]),o.d(135680,a.k,a.k,[i.c]),o.d(4608,a.l,a.l,[a.j,a.k]),o.d(6144,o.s,null,[a.l]),o.d(6144,a.m,null,[a.k]),o.d(4608,o.t,o.t,[o.r]),o.d(4608,a.n,a.n,[i.c]),o.d(4608,a.o,a.o,[i.c]),o.d(512,i.d,i.d,[]),o.d(1024,o.u,a.p,[]),o.d(1024,o.v,function(n,l){return[a.q(n,l)]},[[2,a.r],[2,o.w]]),o.d(512,o.x,o.x,[[2,o.v]]),o.d(131584,o.y,o.y,[o.r,o.z,o.A,o.u,o.e,o.x]),o.d(2048,o.B,null,[o.y]),o.d(512,o.C,o.C,[o.B]),o.d(512,a.s,a.s,[[3,a.s]]),o.d(512,u.a,u.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"N7i/":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=[".title[_ngcontent-%COMP%]{text-align:center;font-family:Roboto;color:#fff;margin-bottom:0}.buttonRow[_ngcontent-%COMP%]{text-align:center;display:inline-block;margin:auto 0!important;padding:10px;background:#2f2f2f}.generationCount[_ngcontent-%COMP%]{padding-left:20px;text-align:left;float:right;display:inline-block;margin:0;color:#fff;font-family:Roboto;width:170px!important;line-height:30px}.board[_ngcontent-%COMP%]{margin:auto!important;margin:0;padding:0;background:#2f2f2f;border-style:solid;border-color:#2f2f2f;border-width:5px;border-radius:5px;display:inline-block;height:auto}.fa[_ngcontent-%COMP%]{color:#fff}button[_ngcontent-%COMP%]{font-family:Roboto;background:#fff;outline:none;padding:2px;margin-right:1px;border-style:solid!important;border-color:#000;border-width:2px!important;border-radius:5px;font-size:1rem;height:30px;width:60px}button[_ngcontent-%COMP%]:active{border-color:#000!important}button[_ngcontent-%COMP%]:hover{background:#000;color:#fff}select[_ngcontent-%COMP%]{font-family:Roboto;font-size:1rem;padding:0;height:30px;outline:none;width:105px;border-width:2px;border-radius:5px;border-color:#000}select[_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:hover{outline:none;background:#000;color:#fff}option[_ngcontent-%COMP%]{border-radius:5px}option[_ngcontent-%COMP%]:hover{outline:none;background:#000;color:#fff}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked:after{content:attr(title);background:#666;color:#fff;position:absolute;width:100%;left:0;border:none}table[_ngcontent-%COMP%]{border-spacing:1px;table-layout:fixed;width:auto}td[_ngcontent-%COMP%]{border-style:none!important;border-color:#fff!important;background:maroon;width:10px;height:10px;min-width:10px;min-height:10px;border-radius:2px}.on[_ngcontent-%COMP%]{background:#000}"]},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=["body[_ngcontent-%COMP%]{overflow-x:scroll;background-color:red}"]},"TO+V":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){this.simulationSpeed=1e3,this.board2d=[],this.nextBoard=[],this.nCol=[],this.nRow=[],this.rowId=0,this.colId=0,this.generationNum=0,this.isSimRunning=!1,this.patternState="Random",this.patterns=["Random","Pulsar","Glider Gun"],this.speeds=[1,2,3,4,5],this.pulsarPattern=[[0,0],[0,1],[0,2],[0,6],[0,7],[0,8],[5,0],[5,1],[5,2],[5,6],[5,7],[5,8],[7,0],[7,1],[7,2],[7,6],[7,7],[7,8],[12,0],[12,1],[12,2],[12,6],[12,7],[12,8],[2,-2],[3,-2],[4,-2],[2,3],[3,3],[4,3],[2,5],[3,5],[4,5],[2,10],[3,10],[4,10],[8,-2],[9,-2],[10,-2],[8,3],[9,3],[10,3],[8,5],[9,5],[10,5],[8,10],[9,10],[10,10]],this.gliderGunPattern=[[0,0],[0,1],[1,1],[1,0],[0,10],[1,10],[3,11],[4,12],[4,13],[-1,11],[-2,12],[-2,13],[1,14],[-1,15],[0,16],[1,16],[2,16],[3,15],[1,17],[0,20],[2,10],[-1,20],[-2,20],[0,21],[-1,21],[-2,21],[1,22],[-3,22],[-3,24],[-4,24],[1,24],[2,24],[-2,34],[-1,34],[-1,35],[-2,35]],this.numOfRows=30,this.numOfCols=50;for(var n=1;n<=this.numOfCols;n++)this.nCol[n-1]=n;for(var n=1;n<=this.numOfRows;n++)this.nRow[n-1]=n;for(var n=0;n<this.numOfRows;n++){for(var l=[],t=0;t<this.numOfCols;t++)l.push(!1);this.board2d.push(l)}for(var n=0;n<this.numOfRows;n++){for(var l=[],t=0;t<this.numOfCols;t++)l.push(!1);this.nextBoard.push(l)}}return n.prototype.ngOnInit=function(){this.randomizeBoard(),this.run()},n.prototype.refresh=function(){this.changePattern(this.patternState)},n.prototype.changePattern=function(n){this.patternState=n,"Random"===n?this.randomizeBoard():"Pulsar"===n?this.update(this.pulsarPattern,10,20):"Glider Gun"===n&&this.update(this.gliderGunPattern,5,5)},n.prototype.update=function(n,l,t){this.clearBoard();for(var o=0;o<n.length;o++)this.board2d[n[o][0]+l][n[o][1]+t]=!0},n.prototype.changeSpeed=function(n){n=parseInt(n),this.simulationSpeed=1e3/n},n.prototype.changeCellState=function(n,l){console.log(n-1,l-1);var t=!this.board2d[n-1][l-1];this.board2d[n-1][l-1]=t},n.prototype.checkState=function(n,l){return this.board2d[n-1][l-1]},n.prototype.clearBoard=function(){this.generationNum=0,this.isSimRunning=!1;for(var n=0;n<this.numOfRows;n++)for(var l=0;l<this.numOfCols;l++)this.board2d[n][l]=!1},n.prototype.randomizeBoard=function(){this.generationNum=0,this.isSimRunning=!1;for(var n=0;n<this.numOfRows;n++)for(var l=0;l<this.numOfCols;l++)this.board2d[n][l]=!(Math.random()>.3)},n.prototype.run=function(){this.isSimRunning=!0,this.simGeneration()},n.prototype.pause=function(){this.isSimRunning=!1},n.prototype.simGeneration=function(){for(var n=this,l=0;l<this.numOfRows;l++)for(var t=0;t<this.numOfCols;t++){for(var o=0,u=-1;u<=1;u++)for(var r=-1;r<=1;r++)l+u>=0&&l+u<this.numOfRows&&t+r>=0&&t+r<this.numOfCols&&(0==u&&0==r||this.board2d[l+u][t+r]&&o++);this.board2d[l][t]?2===o||3===o?(this.nextBoard[l][t]=!0,"live cell lives"):(this.nextBoard[l][t]=!1,"live cell dies"):3===o?(this.nextBoard[l][t]=!0,"dead cell becomes alive"):(this.nextBoard[l][t]=!1,"dead cell stays dead"),this.nextBoard[l][t]}if(this.isSimRunning){for(var l=0;l<this.numOfRows;l++)for(var t=0;t<this.numOfCols;t++)this.board2d[l][t]=this.nextBoard[l][t];this.generationNum++,setTimeout(function(){n.simGeneration()},this.simulationSpeed)}},n.ctorParameters=function(){return[]},n}()},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("/oeL"),u=t("p5Ee"),r=t("+h1B"),e=t("fc+i");u.a.production&&t.i(o.a)(),t.i(e.a)().bootstrapModuleFactory(r.a)},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o={production:!0}},q4dy:function(n,l,t){"use strict";function o(n){return e._12(0,[(n()(),e._13(0,null,null,1,"app-board",[],null,null,null,i.a,i.b)),e._14(114688,null,0,a.a,[],null,null),(n()(),e._15(null,["\n"]))],function(n,l){n(l,1,0)},null)}function u(n){return e._12(0,[(n()(),e._13(0,null,null,1,"app-root",[],null,null,null,o,d)),e._14(49152,null,0,c.a,[],null,null)],null,null)}var r=t("NhKt"),e=t("/oeL"),i=t("zGWG"),a=t("TO+V"),c=t("wQAS");t.d(l,"a",function(){return f});var s=[r.a],d=e._11({encapsulation:0,styles:s,data:{}}),f=e._16("app-root",c.a,u,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){this.title="app"}return n}()},zGWG:function(n,l,t){"use strict";function o(n){return s._12(0,[(n()(),s._13(0,null,null,1,"td",[["class","cell"]],[[1,"id",0],[4,"background",null]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;if("click"===l){o=!1!==u.changeCellState(n.parent.context.$implicit,n.context.$implicit)&&o}return o},null,null)),(n()(),s._15(null,["\n      "]))],null,function(n,l){var t=l.component;n(l,0,0,"Cell-"+l.parent.context.$implicit+"-"+l.context.$implicit,t.checkState(l.parent.context.$implicit,l.context.$implicit)?"#9C1111":"black")})}function u(n){return s._12(0,[(n()(),s._13(0,null,null,4,"tr",[["class","row"]],null,null,null,null,null)),(n()(),s._15(null,["\n      "])),(n()(),s._17(16777216,null,null,1,null,o)),s._14(802816,null,0,d.h,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._15(null,["\n    "]))],function(n,l){n(l,3,0,l.component.nCol)},null)}function r(n){return s._12(0,[(n()(),s._13(0,null,null,1,"option",[],null,null,null,null,null)),(n()(),s._15(null,["\n        "," gen/sec\n      "]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function e(n){return s._12(0,[(n()(),s._13(0,null,null,1,"option",[],null,null,null,null,null)),(n()(),s._15(null,["\n        ","\n      "]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function i(n){return s._12(0,[(n()(),s._13(0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),s._15(null,["Game Of Life"])),(n()(),s._15(null,["\n\n\n\n"])),(n()(),s._13(0,null,null,37,"div",[["class","board"]],null,null,null,null,null)),(n()(),s._15(null,["\n\n  "])),(n()(),s._13(0,null,null,5,"table",[],null,null,null,null,null)),(n()(),s._15(null,["\n    "])),(n()(),s._13(0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),s._17(16777216,null,null,1,null,u)),s._14(802816,null,0,d.h,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._15(null,["\n  "])),(n()(),s._15(null,["\n\n  "])),(n()(),s._13(0,null,null,27,"div",[["class","buttonRow"]],null,null,null,null,null)),(n()(),s._15(null,["\n    "])),(n()(),s._13(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0,u=n.component;if("click"===l){o=!1!==u.run()&&o}return o},null,null)),(n()(),s._15(null,["Run"])),(n()(),s._15(null,["\n    "])),(n()(),s._13(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0,u=n.component;if("click"===l){o=!1!==u.pause()&&o}return o},null,null)),(n()(),s._15(null,["Pause"])),(n()(),s._15(null,["\n    "])),(n()(),s._13(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var o=!0,u=n.component;if("click"===l){o=!1!==u.clearBoard()&&o}return o},null,null)),(n()(),s._15(null,["Clear"])),(n()(),s._15(null,["\n\n    "])),(n()(),s._13(0,null,null,4,"select",[],null,[[null,"change"]],function(n,l,t){var o=!0,u=n.component;if("change"===l){o=!1!==u.changeSpeed(t.target.value)&&o}return o},null,null)),(n()(),s._15(null,["\n      "])),(n()(),s._17(16777216,null,null,1,null,r)),s._14(802816,null,0,d.h,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["\n\n    "])),(n()(),s._13(0,null,null,4,"select",[],null,[[null,"change"]],function(n,l,t){var o=!0,u=n.component;if("change"===l){o=!1!==u.changePattern(t.target.value)&&o}return o},null,null)),(n()(),s._15(null,["\n      "])),(n()(),s._17(16777216,null,null,1,null,e)),s._14(802816,null,0,d.h,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["\n    "])),(n()(),s._13(0,null,null,0,"i",[["class","fa fa-refresh"]],null,[[null,"click"]],function(n,l,t){var o=!0,u=n.component;if("click"===l){o=!1!==u.refresh()&&o}return o},null,null)),(n()(),s._15(null,["\n\n    "])),(n()(),s._13(0,null,null,1,"h3",[["class","generationCount"]],null,null,null,null,null)),(n()(),s._15(null,["Generation: ",""])),(n()(),s._15(null,["\n  "])),(n()(),s._15(null,["\n\n"])),(n()(),s._15(null,["\n"]))],function(n,l){var t=l.component;n(l,9,0,t.nRow),n(l,26,0,t.speeds),n(l,32,0,t.patterns)},function(n,l){n(l,38,0,l.component.generationNum)})}function a(n){return s._12(0,[(n()(),s._13(0,null,null,1,"app-board",[],null,null,null,i,h)),s._14(114688,null,0,f.a,[],null,null)],function(n,l){n(l,1,0)},null)}var c=t("N7i/"),s=t("/oeL"),d=t("qbdv"),f=t("TO+V");t.d(l,"b",function(){return h}),l.a=i;var p=[c.a],h=s._11({encapsulation:0,styles:p,data:{}});s._16("app-board",f.a,a,{},{},[])}},[0]);