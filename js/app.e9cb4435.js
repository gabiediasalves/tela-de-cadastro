(function(){"use strict";var e={774:function(e,o,s){var a=s(144),t=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app"}},[e._m(0),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6"},[o("h3",[e._v("Entrada")]),o("form",{on:{submit:function(o){return o.preventDefault(),e.enviar.apply(null,arguments)},reset:function(o){return e.resetar()}}},[o("div",{staticClass:"form-group"},[o("label",[e._v("Nome:")]),o("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.desenvolvedor.nome,expression:"desenvolvedor.nome",modifiers:{lazy:!0,trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seu nome"},domProps:{value:e.desenvolvedor.nome},on:{change:function(o){e.$set(e.desenvolvedor,"nome",o.target.value.trim())},blur:function(o){return e.$forceUpdate()}}})]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("label",[e._v("Endereço de email:")]),o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.desenvolvedor.email,expression:"desenvolvedor.email",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"email",placeholder:"Seu email"},domProps:{value:e.desenvolvedor.email},on:{change:function(o){return e.$set(e.desenvolvedor,"email",o.target.value)}}})]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("label",[e._v("Idade:")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.desenvolvedor.idade,expression:"desenvolvedor.idade",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Sua idade"},domProps:{value:e.desenvolvedor.idade},on:{input:function(o){o.target.composing||e.$set(e.desenvolvedor,"idade",e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}})]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("p",[e._v("Gênero:")]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.genero,expression:"desenvolvedor.genero"}],staticClass:"form-check-input",attrs:{type:"radio",value:"Masculino",checked:""},domProps:{checked:e._q(e.desenvolvedor.genero,"Masculino")},on:{change:function(o){return e.$set(e.desenvolvedor,"genero","Masculino")}}}),o("label",{staticClass:"form-check-label"},[e._v("Masculino")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.genero,expression:"desenvolvedor.genero"}],staticClass:"form-check-input",attrs:{type:"radio",value:"Feminino"},domProps:{checked:e._q(e.desenvolvedor.genero,"Feminino")},on:{change:function(o){return e.$set(e.desenvolvedor,"genero","Feminino")}}}),o("label",{staticClass:"form-check-label"},[e._v("Feminino")])])]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("label",[e._v("Ocupação:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.ocupacao,expression:"desenvolvedor.ocupacao"}],staticClass:"form-control",on:{change:function(o){var s=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var o="_value"in e?e._value:e.value;return o}));e.$set(e.desenvolvedor,"ocupacao",o.target.multiple?s:s[0])}}},[o("option",{attrs:{value:"",disabled:""}},[e._v("Selecione uma opção...")]),e._l(e.ocupacoes,(function(s,a){return o("option",{key:a,domProps:{value:s}},[e._v(" "+e._s(s)+" ")])}))],2)]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("p",[e._v("Tecnologias:")]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.tecnologias,expression:"desenvolvedor.tecnologias"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"JavaScript"},domProps:{checked:Array.isArray(e.desenvolvedor.tecnologias)?e._i(e.desenvolvedor.tecnologias,"JavaScript")>-1:e.desenvolvedor.tecnologias},on:{change:function(o){var s=e.desenvolvedor.tecnologias,a=o.target,t=!!a.checked;if(Array.isArray(s)){var r="JavaScript",i=e._i(s,r);a.checked?i<0&&e.$set(e.desenvolvedor,"tecnologias",s.concat([r])):i>-1&&e.$set(e.desenvolvedor,"tecnologias",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.desenvolvedor,"tecnologias",t)}}}),o("label",{staticClass:"form-check-label"},[e._v("JavaScript")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.tecnologias,expression:"desenvolvedor.tecnologias"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"Vue JS"},domProps:{checked:Array.isArray(e.desenvolvedor.tecnologias)?e._i(e.desenvolvedor.tecnologias,"Vue JS")>-1:e.desenvolvedor.tecnologias},on:{change:function(o){var s=e.desenvolvedor.tecnologias,a=o.target,t=!!a.checked;if(Array.isArray(s)){var r="Vue JS",i=e._i(s,r);a.checked?i<0&&e.$set(e.desenvolvedor,"tecnologias",s.concat([r])):i>-1&&e.$set(e.desenvolvedor,"tecnologias",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.desenvolvedor,"tecnologias",t)}}}),o("label",{staticClass:"form-check-label"},[e._v("Vue JS")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.tecnologias,expression:"desenvolvedor.tecnologias"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"Vuex"},domProps:{checked:Array.isArray(e.desenvolvedor.tecnologias)?e._i(e.desenvolvedor.tecnologias,"Vuex")>-1:e.desenvolvedor.tecnologias},on:{change:function(o){var s=e.desenvolvedor.tecnologias,a=o.target,t=!!a.checked;if(Array.isArray(s)){var r="Vuex",i=e._i(s,r);a.checked?i<0&&e.$set(e.desenvolvedor,"tecnologias",s.concat([r])):i>-1&&e.$set(e.desenvolvedor,"tecnologias",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.desenvolvedor,"tecnologias",t)}}}),o("label",{staticClass:"form-check-label"},[e._v("Vuex")])]),o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.tecnologias,expression:"desenvolvedor.tecnologias"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"Vue Router"},domProps:{checked:Array.isArray(e.desenvolvedor.tecnologias)?e._i(e.desenvolvedor.tecnologias,"Vue Router")>-1:e.desenvolvedor.tecnologias},on:{change:function(o){var s=e.desenvolvedor.tecnologias,a=o.target,t=!!a.checked;if(Array.isArray(s)){var r="Vue Router",i=e._i(s,r);a.checked?i<0&&e.$set(e.desenvolvedor,"tecnologias",s.concat([r])):i>-1&&e.$set(e.desenvolvedor,"tecnologias",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.desenvolvedor,"tecnologias",t)}}}),o("label",{staticClass:"form-check-label"},[e._v("Vue Router")])])]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("label",[e._v("Resumo de perfil:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.biografia,expression:"desenvolvedor.biografia"}],staticClass:"form-control",attrs:{placeholder:"Conte-nos um pouco sobre você..."},domProps:{value:e.desenvolvedor.biografia},on:{input:function(o){o.target.composing||e.$set(e.desenvolvedor,"biografia",o.target.value)}}})]),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("AppRange",{attrs:{label:"Pretensão salarial:",min:"1000",max:"15000",step:"500",inputClasses:{"form-range":!0}},model:{value:e.desenvolvedor.salario,callback:function(o){e.$set(e.desenvolvedor,"salario",e._n(o))},expression:"desenvolvedor.salario"}})],1),o("div",{staticClass:"space"}),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-check form-check-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.desenvolvedor.notificacoes,expression:"desenvolvedor.notificacoes"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"Sim","false-value":"Não"},domProps:{checked:Array.isArray(e.desenvolvedor.notificacoes)?e._i(e.desenvolvedor.notificacoes,null)>-1:e._q(e.desenvolvedor.notificacoes,"Sim")},on:{change:function(o){var s=e.desenvolvedor.notificacoes,a=o.target,t=a.checked?"Sim":"Não";if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(e.desenvolvedor,"notificacoes",s.concat([r])):i>-1&&e.$set(e.desenvolvedor,"notificacoes",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.desenvolvedor,"notificacoes",t)}}}),o("label",{staticClass:"form-check-label"},[e._v("Receber notificações por email")])])]),o("div",{staticClass:"space"}),o("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[e._v("Resetar")]),o("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Enviar")]),o("div",{staticClass:"space"})])]),o("div",{staticClass:"col-sm-6"},[o("h3",[e._v("Saída")]),o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[e._v("Dados")]),o("ul",{staticClass:"list-group list-group-flush"},[o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Nome:")]),e._v(" "+e._s(e.desenvolvedor.nome)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Email:")]),e._v(" "+e._s(e.desenvolvedor.email)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Idade:")]),e._v(" "+e._s(e.desenvolvedor.idade)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Gênero:")]),e._v(" "+e._s(e.desenvolvedor.genero)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Ocupação:")]),e._v(" "+e._s(e.desenvolvedor.ocupacao)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Tecnologias:")]),o("ul",e._l(e.desenvolvedor.tecnologias,(function(s,a){return o("li",{key:a},[e._v(" "+e._s(s)+" ")])})),0)]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Biografia:")]),o("pre",[e._v(e._s(e.desenvolvedor.biografia))])]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Receber notificações?")]),e._v(" "+e._s(e.desenvolvedor.notificacoes)+" ")]),o("li",{staticClass:"list-group-item"},[o("strong",[e._v("Pretensão salarial: ")]),e._v(" "+e._s(e.desenvolvedor.salario)+" ")])])])])])])])},r=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"jumbotron jumbotron-fluid"},[o("div",{staticClass:"header"},[o("h1",{staticClass:"titulo"},[e._v("Faça seu cadastro")])])])}],i=function(){var e=this,o=e._self._c;return o("div",[o("label",[e._v(" "+e._s(e.costumLabel))]),o("input",e._b({class:e.inputClasses,attrs:{type:"range"},domProps:{value:e.value},on:{input:e.atualizar}},"input",e.$attrs,!1))])},n=[],l={inheritAttrs:!1,props:{label:String,value:[Number,String],inputClasses:[String,Object,Array]},data(){return{valorAtual:this.value||this.$attrs.min}},computed:{costumLabel(){return`${this.label} (R$ ${this.valorAtual})`}},methods:{atualizar(e){const o=e.target.value;this.$emit("input",o),this.valorAtual=o}}},c=l,v=s(1),d=(0,v.Z)(c,i,n,!1,null,null,null),u=d.exports,m={components:{AppRange:u},data(){return{desenvolvedor:{},valoresPadroes:{nome:"",email:"",idade:0,biografia:"",genero:"Masculino",tecnologias:[],notificacoes:"Não",ocupacao:"",salario:1e3},ocupacoes:["Desenvolvedor Front End (Web)","Desenvolvedor Front End (Mobile)","Desenvolvedor Front End (Web e Mobile)","Desenvolvedor Back End","Desenvolvedor Full Stack"]}},methods:{enviar(){const e=Object.assign({},this.desenvolvedor);console.log("Formulário enviado",e)},resetar(){this.desenvolvedor=Object.assign({},this.valoresPadroes)}},created(){this.resetar()}},p=m,f=(0,v.Z)(p,t,r,!1,null,"6c95cf32",null),g=f.exports;a.ZP.config.productionTip=!1,new a.ZP({render:e=>e(g)}).$mount("#app")}},o={};function s(a){var t=o[a];if(void 0!==t)return t.exports;var r=o[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(o,a,t,r){if(!a){var i=1/0;for(v=0;v<e.length;v++){a=e[v][0],t=e[v][1],r=e[v][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(n=!1,r<i&&(i=r));if(n){e.splice(v--,1);var c=t();void 0!==c&&(o=c)}}return o}r=r||0;for(var v=e.length;v>0&&e[v-1][2]>r;v--)e[v]=e[v-1];e[v]=[a,t,r]}}(),function(){s.d=function(e,o){for(var a in o)s.o(o,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};s.O.j=function(o){return 0===e[o]};var o=function(o,a){var t,r,i=a[0],n=a[1],l=a[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(t in n)s.o(n,t)&&(s.m[t]=n[t]);if(l)var v=l(s)}for(o&&o(a);c<i.length;c++)r=i[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(v)},a=self["webpackChunkvue_formularios"]=self["webpackChunkvue_formularios"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(774)}));a=s.O(a)})();
//# sourceMappingURL=app.e9cb4435.js.map