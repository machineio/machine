fun.views.footer = Backbone.View.extend({

    events: {
        'click #newsletter': 'newsletter'
    },

    initialize: function(options) {
        fun.containers.footer = this.$el;
    },

    render: function() {
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.footer)
        );
        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    },

    newsletter: function(event) {
        'use strict';
        event.preventDefault();
        $('#newsletterFrm').validate();
        if ($('#newsletterFrm').valid()) {
            console.log('soy valido');
        } else {
            console.log('soy invalido');
        }
    }
});