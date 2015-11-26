fun.views.techMachine = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.techMachine = this.$el;
    },
    
    /*
    * Render the branches view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.techMachine));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});
