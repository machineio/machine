fun.views.digitalMachine = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.digitalMachine = this.$el;
    },
    
    /*
    * Render the branches view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.digitalMachine));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
