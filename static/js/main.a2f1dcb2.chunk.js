(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,a){e.exports=a(489)},480:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);a(258),a(283);var n=a(0),r=a.n(n),c=a(50),o=a.n(c),i=a(41),l=a(206),s=a(28),u=a(18),p=a(8),m=a(85),d=a(56),h=a.n(d),E=a(71),v=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},b=function(e,t){return t.access_token=fe.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,E.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},f={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},y={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},O={forms:[]},k=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,r=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:r}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var r=e.panelsHistory[a]||[],c=e.viewsHistory[e.activeStory]||[],o=c.indexOf(a);return-1!==o&&c.splice(o,1),-1===r.indexOf(n)&&(r=[].concat(Object(m.a)(r),[n])),r.length>1&&E.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,r)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(m.a)(c),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],d=e.panelsHistory[s]||[t.payload.initial_panel],h=d[d.length-1];if(t.payload.story===e.activeStory)if(d.length>1){var v=d.shift();h=(d=[v])[d.length-1]}else if(i.length>1){var b=i.shift();s=(i=[b])[i.length-1],h=(d=e.panelsHistory[s])[d.length-1]}return t.payload.story===e.activeStory&&1===d.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(m.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,d)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var y=e.activeView,O=e.activePanel,k=e.activeStory,j=e.popouts;if(j[y])return j[y]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:j})});var S=e.modalHistory[y];if(void 0!==S&&0!==S.length){var g=S[S.length-2]||null;return null===g?S=[]:-1!==S.indexOf(g)?S=S.splice(0,S.indexOf(g)+1):S.push(g),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},y,g)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},y,S))})}var C=e.panelsHistory[y]||[],w=e.viewsHistory[e.activeStory]||[],T=e.storiesHistory;if(C.length>1)C.pop(),O=C[C.length-1];else if(w.length>1){w.pop(),y=w[w.length-1];var A=e.panelsHistory[y];O=A[A.length-1]}else if(T.length>1&&"Android"===t.payload.from){T.pop(),k=T[T.length-1],y=e.viewsHistory[k][e.viewsHistory[k].length-1];var _=e.panelsHistory[y];O=_.length>1?_[_.length-1]:_[0]}else E.a.send("VKWebAppClose",{status:"success"});return 1===C.length&&"iOS"===t.payload.from&&E.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:y,activePanel:O,activeStory:k,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,w)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,C))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,D=e.modalHistory[e.activeView]?Object(m.a)(e.modalHistory[e.activeView]):[];return null===P?D=[]:-1!==D.indexOf(P)?D=D.splice(0,D.indexOf(P)+1):D.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,D))});case"CLOSE_MODAL":var B=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,H=e.modalHistory[e.activeView]?Object(m.a)(e.modalHistory[e.activeView]):[];return null===B?H=[]:-1!==H.indexOf(B)?H=H.splice(0,H.indexOf(B)+1):H.push(B),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,B)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),j=a(208),S=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},g=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},C=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},w=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},T=function(){return{type:"CLOSE_POPOUT"}},A=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},_=function(){return{type:"CLOSE_MODAL"}},P=(a(479),a(480),a(25)),D=a(26),B=a(29),H=a(27),z=a(30),U=a(3),V=a(218),I=a.n(V),M=a(219),x=a.n(M),L=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(B.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(z.a)(t,e),Object(D.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(r.a.createElement(U.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!1},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},r.a.createElement("h2",null,"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438?"),r.a.createElement("p",null,"\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")))}},{key:"render",value:function(){var e=this,t=this.props.id;return r.a.createElement(U.w,{id:t},r.a.createElement(U.x,null,"\u041a\u043e\u043f \u0421\u0442\u043e\u043f"),r.a.createElement("img",{className:"div-center",src:"https://www.gifki.org/data/media/114/politsiya-i-politseyskiy-animatsionnaya-kartinka-0048.gif",alt:"\u0430\u043a\u0430\u043a"}),r.a.createElement(U.m,null,r.a.createElement(U.h,null,r.a.createElement(U.c,{size:"l",stretched:!0,onClick:function(){return e.openPopout()}},"\u041e \u0441\u0435\u0440\u0432\u0438\u0441\u0435")),r.a.createElement(U.h,null,r.a.createElement(U.c,{size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0447\u0430\u0442")),this.state.showImg&&r.a.createElement(U.h,null,r.a.createElement("h2",{className:"div-center"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),r.a.createElement("img",{className:"div-center",src:"https://sun9-61.userapi.com/c855128/v855128888/120c81/tXaTALBUcWs.jpg",alt:"\u0421\u0442\u0438\u043a\u0435\u0440 VK"}),r.a.createElement("h4",null,"1.\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h4",null,"1.\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0432 \u0447\u0430\u0442\u0435"),r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("br",null),"\u043a\u0449\u0443\u0435\u043e\u0440\u0448\u0443\u0435\u043e\u0437\u0443\u043b\u0435\u044c\u0438\u043b\u0448\u0443\u044c\u0435\u0448\u044c\u0438 "),r.a.createElement("img",{className:"div-center",src:"https://vk.com/images/upload_2x.gif",alt:"\u0430\u043a\u043a\u0430\u043a\u043a\u0430"})),this.state.showImg1&&r.a.createElement(U.h,{className:"div-center"})))}}]),t}(r.a.Component),J={setPage:g,goBack:C,openPopout:w,closePopout:T,openModal:A},G=Object(s.b)(null,J)(L),N=a(150),Q=a.n(N),F=a(220),K=function(e){function t(){return Object(P.a)(this,t),Object(B.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,c=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return r.a.createElement(U.d,{description:c,before:r.a.createElement(U.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),W=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return r.a.createElement(K,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},R=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(B.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(z.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){E.a.send("VKWebAppGetAuthToken",{app_id:7082092,scope:e.join(",")}).then(function(e){t(v(e.data.access_token))}).catch(function(){t(v(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(F.a)(Q.a.mark(function e(){var t,a,n;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,b("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,c=W(this.state.groups.admined),o=W(this.state.groups.other);return r.a.createElement(U.w,{id:a},r.a.createElement(U.x,{left:r.a.createElement(U.y,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&r.a.createElement(U.z,null),!this.state.loading&&this.state.errorGetAuthToken&&r.a.createElement(U.m,null,r.a.createElement(U.h,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),r.a.createElement(U.h,null,r.a.createElement(U.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&c&&r.a.createElement(U.m,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},r.a.createElement(U.s,null,c)),!this.state.loading&&!this.state.errorGetAuthToken&&o&&r.a.createElement(U.m,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},r.a.createElement(U.s,null,o)))}}]),t}(r.a.Component);var X=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:C,openPopout:w,closePopout:T,openModal:A},e))})(R),Y=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(B.a)(this,Object(H.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(z.a)(t,e),Object(D.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=fe.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return r.a.createElement(U.w,{id:a},r.a.createElement(U.x,{noShadow:!0},"Examples 2"),r.a.createElement(U.j,{vertical:"top"},r.a.createElement(U.D,{theme:"header",type:"buttons"},r.a.createElement(U.o,{id:"EXAMPLE_TABS_LIST"},r.a.createElement(U.E,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),r.a.createElement(U.E,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430"),r.a.createElement(U.E,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 2"),r.a.createElement(U.E,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 3")))),r.a.createElement(U.m,{style:{marginTop:56}},"modal"===this.state.activeTab&&r.a.createElement(U.e,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&r.a.createElement(U.h,null,this.state.activeTab)))}}]),t}(r.a.Component),q={setPage:g,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},Z=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},q)(Y),$=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(B.a)(this,Object(H.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(z.a)(t,e),Object(D.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return r.a.createElement(U.w,{id:t},r.a.createElement(U.x,{left:r.a.createElement(U.y,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),r.a.createElement(U.m,null,r.a.createElement(U.k,null,r.a.createElement(U.l,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},r.a.createElement(U.r,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),r.a.createElement(U.r,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),r.a.createElement(U.l,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},r.a.createElement(U.f,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),r.a.createElement(U.f,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),r.a.createElement(U.h,{className:"buttons-group"},r.a.createElement(U.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement(U.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(r.a.Component),ee={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:C},te=Object(s.b)(function(e){return{inputData:e.formData.forms}},ee)($),ae=a(108),ne=a.n(ae),re=a(84),ce=a.n(re),oe=a(21),ie=a.n(oe),le=[{name:"test",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"test test"}],se=[{name:"test",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"test test"}],ue=[{name:"test",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"test test"}],pe=function(e){function t(){return Object(P.a)(this,t),Object(B.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=function(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.dispatchEvent(new window.MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))};return r.a.createElement(U.t,{id:t,header:r.a.createElement(U.u,{left:!U.p&&r.a.createElement(U.n,{onClick:a},r.a.createElement(ce.a,null)),right:U.p&&r.a.createElement(U.n,{onClick:a},r.a.createElement(ne.a,null))},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0447\u0430\u0442\u044b"),onClose:a,settlingHeight:80},r.a.createElement(U.s,null,le.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,se.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})),r.a.createElement(U.s,null,ue.map(function(e,t){return r.a.createElement(U.d,{key:t,description:e.desc,before:r.a.createElement(U.b,{size:40,src:e.avatar}),onClick:function(){return n("https://vk.me/join/AJQ1d9/jdhUDh3U14zEBrCSS")},asideContent:r.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})))}}]),t}(r.a.Component),me={openModal:A},de=Object(s.b)(null,me)(pe),he=function(e){function t(){return Object(P.a)(this,t),Object(B.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return r.a.createElement(U.t,{id:t,header:r.a.createElement(U.u,{left:!U.p&&r.a.createElement(U.n,{onClick:a},r.a.createElement(ce.a,null)),right:U.p&&r.a.createElement(U.n,{onClick:a},r.a.createElement(ne.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},r.a.createElement(U.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:r.a.createElement(U.b,{size:140,src:"https://vk.com/images/community_100.png?ava=1"})}),r.a.createElement(U.s,null,r.a.createElement(U.d,null,r.a.createElement(U.q,{title:"\u0427\u0430\u0442 \u043e\u043d\u043b\u0430\u0439\u043d Shinka"})),r.a.createElement(U.d,null,r.a.createElement(U.q,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),r.a.createElement(U.d,null,r.a.createElement(U.q,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(r.a.Component),Ee=Object(s.b)()(he),ve=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(B.a)(this,Object(H.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(z.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),E.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.activeView,c=n.activeStory,o=n.activePanel,i=n.scrollPosition;if(e.activeView!==r||e.activePanel!==o||e.activeStory!==c){var l=i[c+"_"+r+"_"+o]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,c=e.popouts,o=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,m=void 0===u[o]?[o]:u[o],d=void 0===c[o]?null:c[o],h=void 0===s[o]?null:s[o],E=r.a.createElement(U.v,{activeModal:h},r.a.createElement(de,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),r.a.createElement(Ee,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return r.a.createElement(U.g,{isWebView:!0,scheme:p},r.a.createElement(U.i,{activeStory:i,tabbar:r.a.createElement(U.B,null,r.a.createElement(U.C,{onClick:function(){return a("home","base")},selected:"home"===i},r.a.createElement(I.a,null)),r.a.createElement(U.C,{onClick:function(){return a("more","callmodal")},selected:"more"===i},r.a.createElement(x.a,null)))},r.a.createElement(U.A,{id:"home",activeView:o,popout:d},r.a.createElement(U.F,{id:"home",modal:E,activePanel:l,history:m,onSwipeBack:function(){return t()}},r.a.createElement(G,{id:"base",withoutEpic:!1}),r.a.createElement(X,{id:"groups"}))),r.a.createElement(U.A,{id:"more",activeView:o,popout:d},r.a.createElement(U.F,{id:"more",modal:E,activePanel:l,history:m,onSwipeBack:function(){return t()}},r.a.createElement(Z,{id:"callmodal"})),r.a.createElement(U.F,{id:"modal",modal:E,activePanel:l,history:m,onSwipeBack:function(){return t()}},r.a.createElement(te,{id:"filters"})))))}}]),t}(r.a.Component);var be=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:S,goBack:C,closeModal:_},e))})(ve);a.d(t,"store",function(){return fe});var fe=Object(i.createStore)(k,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));fe.dispatch(S("home","base")),o.a.render(r.a.createElement(s.a,{store:fe},r.a.createElement(be,null)),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.a2f1dcb2.chunk.js.map