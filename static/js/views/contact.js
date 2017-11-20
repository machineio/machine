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
    $('#frm').validate();
    // check jquery validation
      if ($('#frm').valid()) {
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
        subject: 'Thank you for your trusting Code Machine',
        source: ' info@codemachine.io',
        destination: $('#email').val(),
        html: 'Thank for getting in touch with Code Machine Team. Our compromise is to find the best practices and methologies to make your company more sucessful. Professional Developers will be sending you an email shortly to discuss for a better future in your businesses.'
        };

      model.url = fun.conf.urls.emails
      model.save(confirmation);    
      model.save(data, {success: function (model, respose) {
        $('#frm').addClass('display-none');
        $('#thankyou').html('We will be in touch soon');
        $('#contact-wrapper').attr('style', 'margin-bottom: 20%');
        console.log('Email sent');      
      }});
    } else {
      console.log('missing data');
    }
  },
});
