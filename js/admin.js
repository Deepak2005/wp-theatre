"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(function(){var e,t;jQuery((function(){return jQuery(document).on("click","#bulk_edit",(function(){var e,t,n;return e=jQuery("#bulk-edit"),t=new Array,e.find("#bulk-titles").children().each((function(){return t.push(jQuery(this).attr("id").replace(/^(ttle)/i,""))})),n=e.find('select[name="_status"]').val(),jQuery.ajax({url:ajaxurl,type:"POST",async:!1,cache:!1,data:{action:"wpt_bulk_editor",post_ids:t,post_status:n,wpt_bulk_editor_ajax_nonce:wpt_bulk_editor_security.nonce}})}))})),t=function(){function e(){_classCallCheck(this,e),this.init_delete_links=this.init_delete_links.bind(this),this.init_actions=this.init_actions.bind(this),this.init_datetime_inputs(),this.init_create(),this.init_actions_callbacks=[this.init_delete_links],this.init_actions()}return _createClass(e,[{key:"init_datetime_inputs",value:function e(){var t=this;return this.event_date=jQuery("#wpt_event_editor_event_date"),this.enddate=jQuery("#wpt_event_editor_enddate"),this.event_date.flatpickr({defaultHour:20,enableTime:!0,format:wpt_event_editor_defaults.datetime_format,minuteIncrement:15,locale:wpt_event_editor_defaults.language,allowInput:!0,onChange:function e(n,i,r){return jQuery.get(ajaxurl,{action:"wpt_event_editor_get_new_enddate",event_date:i,end_date:t.enddate.val()},(function(e){return t.enddate.val(e)}))}}),this.enddate.flatpickr({format:wpt_event_editor_defaults.datetime_format,locale:wpt_event_editor_defaults.language,enableTime:!0,allowInput:!0,minuteIncrement:15})}},{key:"init_delete_links",value:function e(){var t=this;return jQuery(".wpt_event_editor_listing_action_delete").unbind("click").click((function(e){var n;return confirm(wpt_event_editor_defaults.confirm_delete_message)&&(n={action:"wpt_event_editor_delete_event",event_id:jQuery(e.currentTarget).parents("tr").data("event_id"),nonce:wpt_event_editor_security.nonce},jQuery(".wpt_event_editor_listing").load(ajaxurl,n,(function(){return t.init_actions()}))),!1}))}},{key:"init_actions",value:function e(){var t,n,i,r,a;for(a=[],n=0,i=(r=this.init_actions_callbacks).length;n<i;n++)t=r[n],a.push(t());return a}},{key:"init_create",value:function e(){var t=this,n,i,r;return this.create=jQuery(".wpt_event_editor_create"),(i=this.create.find(".wpt_event_editor_create_open")).click((function(){return t.create.addClass("open"),!1})),(n=this.create.find(".wpt_event_editor_create_cancel")).click((function(){return t.create.removeClass("open"),!1})),(r=this.create.find(".wpt_event_editor_create_save")).click((function(){var e,n;return e={action:"wpt_event_editor_create_event",post_data:(n=jQuery("#post")).serialize(),nonce:wpt_event_editor_security.nonce},jQuery(".wpt_event_editor_listing").load(ajaxurl,e,(function(){return t.init_delete_links(),t.create.removeClass("open"),t.reset_create_form()})),!1}))}},{key:"reset_create_form",value:function e(){var t=this,n,i;return n=this.create.find(".wpt_event_editor_create_form"),i={action:"wpt_event_editor_reset_create_form",production_id:jQuery("#post_ID").val(),nonce:wpt_event_editor_security.nonce},n.load(ajaxurl,i,(function(){return t.init_datetime_inputs()}))}}]),e}(),jQuery((function(){return wpt_event_editor_defaults.editor=new t})),jQuery((function(){var e;return(e=jQuery("input[name=wpt_production_permalink_custom_base]")).focus((function(){var e;return(e=jQuery("input[name=wpt_production_permalink_base][value=custom]")).prop("checked",!0)}))})),e=function(){function e(){var t=this;_classCallCheck(this,e),this.ticketspage=jQuery("select#iframepage").parents("tr"),this.integrationstypes=jQuery("input[name='wpt_tickets[integrationtype]']"),this.ticketspage.length>0&&this.integrationstypes.length>0&&(this.update(),this.integrationstypes.click((function(){return t.update()})))}return _createClass(e,[{key:"update",value:function e(){var t;return"iframe"===(t=jQuery("input[name='wpt_tickets[integrationtype]']:checked").val())?this.ticketspage.show(1e3):this.ticketspage.hide(500)}}]),e}()}).call(void 0);