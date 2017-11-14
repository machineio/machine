import EmailModel from '../models/email';

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
        var data, model, confirmation, html0, htmlA, htmlB, htmlC, emailx;
        html0 = '<p>Dear ' + $('#first_name').val() + '</p>';
        htmlA = '<p>Thank you for your asking for our help. Here at Code Machine, we are committed to helping you find the best possible approach for your request at the lowest price. One of our experienced and professional engineer will be reaching out to you shortly to review your options.</p>';
        htmlB = '<p>DON&#39;T WANT TO WAIT? Call us now at 772-223-2946 for immediate assistance. Professional engineers are standing by to give you a quote over the phone.</p>';
        htmlC = '<p>We appreciate you entrusting us with your company needs.</p>';

        emailx = html0 + '<br>' + htmlA + '<br>' + htmlB + '<br>' + htmlC;
        console.log(emailx);

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
            html: emailx
          };

        var model = new EmailModel();
        model.save(confirmation);
        model.save(data, {success: function (model, respose) {
            Backbone.history.navigate('thank-you', { trigger: true });
        }});
        console.log(data);
        console.log(confirmation);
        console.log(model);
    },

});
