(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5abfa0d6"],{"025e":function(e,a,t){"use strict";t("5742")},5742:function(e,a,t){},7745:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"Cargando...",gutter:10,type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("strong",[t("span",[e._v("Crear Usuario")])])]),t("div",{staticClass:"text item"},[t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(a){var r=a.invalid;return[t("el-form",{attrs:{"label-position":"top","label-width":"120px",model:e.form}},[t("el-form-item",{attrs:{label:"Foto de Perfil"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{drag:"",name:"image",action:"","show-file-list":!1,"http-request":e.postImage,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v(" Suelta tu foto aquí o "),t("em",[e._v("haz clic para cargar")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" Solo archivos jpg/png con un tamaño menor de 500kb ")])])],1),t("el-form-item",{attrs:{label:"Nombre"}},[t("ValidationProvider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Correo electrónico"}},[t("ValidationProvider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Contraseña"}},[t("ValidationProvider",{attrs:{name:"Password",rules:"required|confirmed:passwordc|min:6"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Confirmar contraseña"}},[t("ValidationProvider",{attrs:{name:"Password Confirmation",rules:"required",vid:"passwordc"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{attrs:{"show-password":""},model:{value:e.form.password_confirmation,callback:function(a){e.$set(e.form,"password_confirmation",a)},expression:"form.password_confirmation"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-upload2",disabled:r},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.onStore.apply(null,arguments)}}},[e._v(" Agregar")])],1)],1)]}}])})],1)])],1)],1)],1)},o=[],s=t("c7eb"),n=t("1da1"),i=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("9861"),t("d81d"),t("50fc")),l=t("4ab8"),c={data:function(){return{form:{name:"",email:"",image:"",password:"",password_confirmation:"",role:"admin"},loading:!1,loadingDelete:!1,isVisibleCollection:!1,formEditCollection:{},imageUrl:"",isIndeterminate:!0}},methods:{onStore:function(){var e=this;return Object(n["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e.form),a.next=3,Object(i["g"])(e.form).then((function(a){e.$message({showClose:!0,message:"¡Registro completo!",type:"success"}),e.$router.push({name:"admin"})})).catch(e.responseCatch);case 3:case"end":return a.stop()}}),a)})))()},clearFilter:function(){this.$refs.filterTable.clearFilter()},postImage:function(e){var a=this;return Object(n["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.loading=!0,r=new FormData,r.append("image",e.file),r.append("width","250"),r.append("height","250"),r.append("title","Image"),r.append("alt","ciberseguridad"),Object(l["d"])(r).then((function(a){console.log(a),e.onSuccess(a.data.path)})).catch((function(a){console.log(a),e.onError()})).finally((function(){return a.loading=!1}));case 8:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,a){this.imageUrl=URL.createObjectURL(a.raw),console.log(this.imageUrl),this.form.image=e},beforeAvatarUpload:function(e){var a=!0,t="image/jpeg"===e.type,r="image/png"===e.type,o=e.size/1024<500;return t||r||(this.$message.error("La imagen debe estar en formato JPG o PNG!"),a=!1),o||(this.$message.error("La imagen excede los 500kB!"),a=!1),a},handleCheckAllChange:function(e){var a=this.scopes.map((function(e){return e.value}));this.form.scopes=e?a:[],this.isIndeterminate=!1}}},d=c,u=(t("025e"),t("2877")),m=Object(u["a"])(d,r,o,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5abfa0d6.c5991d76.js.map