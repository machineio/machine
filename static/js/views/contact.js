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
    event.preventDefault();
    var model = new fun.models.Email();
    var data, confirmation;
    data = {
      account: 'spartaadmin',
      subject: 'Information requested - Contact page form',
      source: $('#email').val(),
      destination: 'bchassoul@spartanapproach.com',
      html: 'Message from: ' + $('#first_name').val() + ' ' + $('#last_name').val() + ', email: ' + $('#email').val() + ', phone: ' + $('#phone').val() + ', message: ' + $('#message').val()
      };

    confirmation = {
      account: 'spartaadmin',
      subject: 'Thank you for your recent insurance inquiry',
      source: ' info@codemachine.io',
      destination: $('#email').val(),
      html: 'testing'
      };

    model.url = fun.conf.urls.emails
    model.save(confirmation);
    model.save(data, {success: function (model, respose) {
        console.log('yay')
    }});
    console.log(data);
    console.log(confirmation);
    console.log(model);
  },

});
