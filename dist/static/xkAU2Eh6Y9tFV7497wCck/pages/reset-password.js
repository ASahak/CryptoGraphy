(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{GfUn:function(e,t,n){"use strict";n.r(t);var a=n("pbKT"),i=n.n(a),r=n("0iUn"),o=n("sLSF"),s=n("Tit0"),c=n("MI3g"),l=n("a7VT"),p=n("MX0m"),u=n.n(p),m=n("q1tI"),f=n.n(m),d=n("8Kt/"),g=n.n(d),h=n("RdWu"),b=n("MHX4"),x=n("CmEq"),w=n("nOHt"),_=n.n(w),j=n("Ib1X"),v=n("RyvX"),y=n("flVO"),k=n("YFqc"),O=n.n(k),L=n("/MKj"),N=n("Xp8U"),S=f.a.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=i()(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}function T(){var e=Object(m.useState)(!1),t=e[0],n=e[1],a=Object(m.useState)(""),i=a[0],r=a[1],o=Object(m.useState)(""),s=o[0],c=o[1],l=Object(b.a)(),p=l.register,u=l.handleSubmit,f=l.errors,d=l.reset;return S("form",{className:"login-form",onSubmit:u((function(e){n(!0),v.__resetPassword(e.email).then((function(e){d(),n(!1),c("Please check your email"),setTimeout((function(){_.a.replace("/login")}),4e3)})).catch((function(e){d(),n(!1),r(e.message)}))}))},i&&S(x.a,{type:"error",timeout:4e3,message:i}),s&&S(x.a,{type:"success",timeout:4e3,message:s}),S(h.a.Input,{name:"email",type:"email",refBind:p({required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}),fullWidth:!0,errors:f.email&&f.email.message,placeholder:"Email ID",size:"md"}),S(h.a.Button,{type:"submit",icon:t?{dir:"right",element:"loading"}:{},text:"Reset Password",width:230,size:"md"}),S(O.a,{href:"/login",prefetch:!1},S("a",{className:"link-to-reset"},"I have changed my password already. Move to login")))}var A=function(e){Object(s.a)(n,e);var t=I(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isLoading:a.props.isLoading},Object(y.a)(a.state.isLoading),v.__isLogged().then((function(e){e?_.a.push("/"):a.setState({isLoading:!1},(function(){return Object(y.a)(a.state.isLoading,!1)}))})),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.__CHANGE_STATUS_IS_LOADING(!1)}},{key:"render",value:function(){return this.state.isLoading?"":S("div",{className:"jsx-862192449 container"},S(g.a,null,S("title",{className:"jsx-862192449"},"Reset Password")),S("main",{className:"jsx-862192449"},S("div",{className:"jsx-862192449 reset-form-container"},S("div",{className:"jsx-862192449 form-icon"},S(j.a,{name:"user"})),S("h4",{className:"jsx-862192449 title-form"},"Reset Password"),S(T,null))),S(u.a,{id:"862192449"},[".reset-form-container{position:absolute;left:0;right:0;margin:auto;width:400px;padding:25px 20px;background:#ececec30;bottom:0;top:0;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-radius:5px;-webkit-backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid #ffffff24;}",".reset-form-container .title-form{margin-bottom:10px;text-align:center;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-size:23px;margin:10px 10px 20px 10px;color:#fbfbfc;font-weight:400;}",".reset-form-container .link-to-reset{text-align:center;display:block;margin:10px;font-size:13px;font-style:italic;color:#e5e6e8;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}",".reset-form-container .form-icon{width:40px;height:40px;margin:auto;}",".reset-form-container .form-icon svg{width:100%;height:100%;}"]))}}]),n}(f.a.Component),X={__CHANGE_STATUS_IS_LOADING:N.c};t.default=Object(L.b)((function(e){return{isLoading:e.auth.isLoading}}),X)(f.a.memo(A))},X9eL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password",function(){return n("GfUn")}])}},[["X9eL",1,2,3,4,6,0,5,7]]]);