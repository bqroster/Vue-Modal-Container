var e={props:{isVisible:{type:Boolean,default:!1},position:{type:String,default:"center"},size:{type:Object,default:function(){return{minWidth:0,width:0,maxWidth:0,minHeight:0,height:0,maxHeight:0}}},className:{type:String,default:""},autoHide:{type:Number,default:0}}},i={props:{isBgVisible:{type:Boolean,default:!0},isScrollBlocked:{type:Boolean,default:!0}}},t={render:function(){var e,i,t=this.$createElement,s=this._self._c||t;return this.isVisible?s("div",{class:(e={"bqr__modal-container":!0},e[this.getBgVisibleClass]=!0,e[this.getPositionClass]=!0,e),attrs:{id:"bqr__modal-container"}},[s("div",{ref:"modalWrapper",class:(i={"bqr__modal-wrapper":!0},i[this.className]=!0,i)},[this._t("default")],2)]):this._e()},staticRenderFns:[],mixins:[e,i],watch:{isVisible:{handler:function(e){this.isModalVisible=e},immediate:!0},isModalVisible:function(e){this.handleDimensions(),this.handleAutoHide(e),this.handleScrollBlocked(e)}},data:function(){return{bodyOverflow:null,isModalVisible:!1}},methods:{closeModal:function(){this.$emit("close")},handleAutoHide:function(e){var i=this;e&&this.autoHide>0&&setTimeout((function(){i.closeModal()}),this.autoHide)},handleScrollBlocked:function(e){this.isScrollBlocked&&(e?(this.bodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden"):e||this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow))},handleDimensions:function(){var e=this;this.$nextTick((function(){e.$refs.modalWrapper&&(e.size.width>0&&(e.$refs.modalWrapper.style.width=e.size.width+"px"),e.size.height>0&&(e.$refs.modalWrapper.style.height=e.size.height+"px"),e.size.minWidth>0&&(e.$refs.modalWrapper.style.minWidth=e.size.minWidth+"px"),e.size.minHeight>0&&(e.$refs.modalWrapper.style.minHeight=e.size.minHeight+"px"),e.size.maxWidth>0&&(e.$refs.modalWrapper.style.maxWidth=e.size.maxWidth+"px"),e.size.maxHeight>0&&(e.$refs.modalWrapper.style.maxHeight=e.size.maxHeight+"px"))}))}},computed:{getPositionClass:function(){return""===this.position?"center":this.position},getBgVisibleClass:function(){return this.isBgVisible?"bg-visible":"bg-hidden"}}};function s(e){s.installed||(s.installed=!0,e.component("ModalContainer",t))}var l={install:s},o=null;"undefined"!=typeof window?o=window.Vue:"undefined"!=typeof global&&(o=global.vue),o&&o.use(l),t.install=s;export default t;export{i as ModalContainerPropsMixin,e as ModalSettingsMixin};