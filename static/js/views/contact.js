// import EmailModel from '../models/email'
// import _ from 'underscore'
// import Backbone from 'backbone'

fun.views.contact = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #submit': 'submit'
    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.contact = this.$el;
    },
    
    /*
    * Render the branches view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.contact));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    },

    submit : function(event) {
        console.log('This is a messange, it should display once you clicked');
  },

});
