(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a334386"],{"495e":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"Cargando...",gutter:10,type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("strong",[t("span",[e._v("Editar Usuario")])])]),t("div",{staticClass:"text item"},[t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(a){var r=a.invalid;return[t("el-form",{attrs:{"label-position":"top","label-width":"100px",model:e.form}},[""!==e.form.image&&""!==e.urlImagProfile?t("div",[t("el-image",{attrs:{src:e.urlImagProfile}},[t("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" Loading"),t("span",{staticClass:"dot"},[e._v("...")])])])],1):e._e(),t("el-form-item",{attrs:{label:e.firstLabel}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{drag:"",name:"image",action:"","show-file-list":!1,"http-request":e.postImage,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v(" Suelta tu foto aquí o "),t("em",[e._v("haz clic para cargar")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" Solo archivos jpg/png con un tamaño menor de 500kb ")])])],1),t("el-form-item",{attrs:{label:"Nombre"}},[t("ValidationProvider",{attrs:{name:"Nombre",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Descripción"}},[t("ValidationProvider",{attrs:{name:"description",rules:"length:100"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{model:{value:e.form.description,callback:function(a){e.$set(e.form,"description",a)},expression:"form.description"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Correo electrónico"}},[t("ValidationProvider",{attrs:{name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{attrs:{disabled:!0},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Contraseña"}},[t("ValidationProvider",{attrs:{name:"Password",rules:"confirmed:passwordc|min:6"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",{attrs:{label:"Confirmar contraseña"}},[t("ValidationProvider",{attrs:{name:"Password Confirmation",rules:"",vid:"passwordc"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("el-input",{attrs:{"show-password":""},model:{value:e.form.password_confirmation,callback:function(a){e.$set(e.form,"password_confirmation",a)},expression:"form.password_confirmation"}}),t("span",[e._v(e._s(r[0]))])]}}],null,!0)})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-upload2",disabled:r},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.onUpdate.apply(null,arguments)}}},[e._v(" Actualizar")])],1)],1)]}}])})],1)])],1)],1)],1)},o=[],s=t("c7eb"),n=t("1da1"),i=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("9861"),t("d81d"),t("50fc")),l=t("4ab8"),c={data:function(){return{form:{name:"",email:"",description:"",image:"",role:"admin",password:"",password_confirmation:""},loading:!1,loadingDelete:!1,isVisibleCollection:!1,formEditCollection:{},imageUrl:"",checkAll:!1,isIndeterminate:!0,urlImagProfile:"",firstLabel:""}},created:function(){this.fetchData()},methods:{postImage:function(e){var a=this;return Object(n["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.loading=!0,r=new FormData,r.append("image",e.file),r.append("width","250"),r.append("height","250"),r.append("title","Image"),r.append("alt","ciberseguridad"),Object(l["d"])(r).then((function(a){e.onSuccess(a.data.path)})).catch((function(a){e.onError()})).finally((function(){return a.loading=!1}));case 8:case"end":return t.stop()}}),t)})))()},fetchData:function(){var e=this;return Object(n["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loading=!0,a.next=3,Object(i["b"])(e.$route.params._id).then((function(a){e.form=a.data,e.form.image?(e.urlImagProfile=e.form.image,e.firstLabel="Cambiar foto de perfil"):e.firstLabel="Agregar foto de perfil"})).catch(e.responseCatch).finally((function(){return e.loading=!1}));case 3:case"end":return a.stop()}}),a)})))()},onUpdate:function(){var e=this;return Object(n["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["h"])(e.$route.params._id,e.form).then((function(a){e.$message({showClose:!0,message:"¡Registro actualizado!",type:"success"}),e.$router.push({name:"admin"})})).catch(e.responseCatch);case 2:case"end":return a.stop()}}),a)})))()},clearFilter:function(){this.$refs.filterTable.clearFilter()},handleAvatarSuccess:function(e,a){this.imageUrl=URL.createObjectURL(a.raw),this.urlImagProfile="",this.form.image=e},beforeAvatarUpload:function(e){var a=!0,t="image/jpeg"===e.type,r="image/png"===e.type,o=e.size/1024<500;return t||r||(this.$message.error("La imagen debe estar en formato JPG o PNG!"),a=!1),o||(this.$message.error("La imagen excede los 500kB!"),a=!1),a},handleCheckAllChange:function(e){var a=this.scopes.map((function(e){return e.value}));this.form.scopes=e?a:[],this.isIndeterminate=!1},handleCheckedScopesChange:function(e){var a=e.length;this.checkAll=a===this.scopes.length,this.isIndeterminate=a>0&&a<this.scopes.length}}},d=c,u=(t("8edf"),t("2877")),f=Object(u["a"])(d,r,o,!1,null,null,null);a["default"]=f.exports},"8edf":function(e,a,t){"use strict";t("9c6d")},"9c6d":function(e,a,t){}}]);
//# sourceMappingURL=chunk-3a334386.26dd0a0a.js.map