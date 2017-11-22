fun.views.navbar = Backbone.View.extend({

    events: {
        'click #details-report-btn': 'detailsReport',
        'click #machine-login': 'machineLogin',
        'click #machine-register': 'machineRegister',
        'click #search': 'machineSearch'
    },

    initialize: function(options) {
        fun.containers.navbar = this.$el;
        // get account and context from local and session storages.
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        fun.omnibus.on("change:context", function() {
            console.log('omnibus inside navbar change:context and stuff');
            this.renderDashboard();
        }, this);
    },

    render: function() {
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navbar));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");

        // Cache the DOM stuff
        this.loginError = this.$('#signin-alert');

        if (fun.utils.loggedIn()) {
            $('#header').addClass('about-header');
            console.log('Just enter the dungeon!');
            this.renderDashboard();
        } else {
            console.log('Out of the dungeon');
            this.renderLanding();
        }
    },

    renderLanding: function() {
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navLanding));

        var navLanding = this.$('#fun-nav-landing');
        navLanding.html(template);
    },

    renderDashboard: function() {
        'use strict';
        var template,
            navDashboard,
            account,
            context;

        template = _.template(fun.utils.getTemplate(fun.conf.templates.navDashboard));

        navDashboard = this.$('#fun-nav-dashboard');
        navDashboard.html(template);

        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        // first we check for system admin
        if (context !== null && context.trim() === 'System Admin') {
            this.$('#nav-new-account').removeClass('hide').addClass('show');
            this.$('#nav-new-cube').removeClass('hide').addClass('show');
            this.$('#nav-new-resource').removeClass('hide').addClass('show');
            this.$('#nav-new-gateway').removeClass('hide').addClass('show');
            this.$('#nav-new-contact').removeClass('show').addClass('hide');
            this.$('#nav-new-campaign').removeClass('show').addClass('hide');
            this.$('#nav-new-org').removeClass('show').addClass('hide');
        } else {
            // if not admin, we check for user or organization accounts
            if (account !== context && context !== null) {
                // check if context !== null fix the stuff 
                this.$('#nav-new-org').removeClass('show').addClass('hide');
                this.$('#nav-new-team').removeClass('hide').addClass('show');
                this.$('#nav-new-member').removeClass('hide').addClass('show');
            } else {
                this.$('#nav-new-member').removeClass('show').addClass('hide');
                this.$('#nav-new-team').removeClass('show').addClass('hide');
                this.$('#nav-new-org').removeClass('hide').addClass('show');
            }
        }
    },

    renderAdmin: function() {
        var template = _.template(fun.utils.getTemplate(fun.conf.templates.navAdmin));

        var navAdmin = this.$('#fun-nav-admin');
        navAdmin.html(template);
    },

    detailsReport: function() {
        console.log('navbar detail reports')
    },

    /*
     * Machine login
     */
    machineLogin: function(event) {
        'use strict';
        event.preventDefault();
        $('#login-frm').validate();
        // check jquery validation
        if ($('#login-frm').valid()) {
            var view = this,
                loginError = this.loginError,
                loginSuccess,
                username,
                password;

            loginSuccess = function(view, loginError) {
                // Clear the stuff from the inputs ;)
                view.$('#username-machine').val('');
                view.$('#password-machine').val('');
                loginError.removeClass("show").addClass("hide");
                fun.utils.redirect(fun.conf.hash.dashboard);
            };

            fun.utils.login(username, password, {
                success: function(jqXHR, textStatus) {
                    // currently this success call is never executed
                    // the success stuff is going on case 200 of the error function.
                    // Why? well... I really don't fucking know...
                    loginSuccess(view, loginError);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    switch (jqXHR.status) {
                        case 403:
                            var message = fun.utils.translate("usernameOrPasswordError");
                            loginError.find('p').html(message);
                            loginError.removeClass("hide").addClass("show");
                            break;
                        case 200:
                            // Check browser support
                            if (typeof(Storage) != "undefined") {
                                // Store
                                localStorage.setItem("username", username);
                            }
                            loginSuccess(view, loginError);
                            break;
                        default:
                            console.log('the monkey is down');
                            break;
                    }
                }

            });
        } else {
            $(".form-group").effect("shake");
            console.log('missing data');
        }
    },

    /*
     * Machine register
     */
    machineRegister: function(event) {
        'use strict';
        event.preventDefault();
        $('#register-frm').validate();
        // check jquery validation
        if ($('#register-frm').valid()) {
            const data = {
                first_name: $('#first_name').val(),
                last_name: $('#last_name').val(),
                email: $('#email').val(),
                account: $('#account').val(),
                password: $('#password').val(),
            }

            var user = new fun.models.User();
            user.url = fun.conf.urls.users + '?account=' + data.account;
            user.save(data, {
                success: function() {
                    console.log(data)

                    const dta = {
                        account: 'spartaadmin',
                        subject: 'Information requested - Contact page form',
                        source: $('#email').val(),
                        destination: 'bchassoul@spartanapproach.com',
                        html: 'New accout has joined to code machine from: ' + $('#first_name').val() + ' ' + $('#last_name').val() + ', email: ' + $('#email').val()
                    };

                    const confimation = {
                        account: 'spartaadmin',
                        source: 'info@codemachine.io',
                        subject: 'New CodeMachine Account',
                        destination: data.email,
                        html: 'Hi ' + data.first_name + '<br>Your new CodeMachine credentials are ready, please login using the following.<br><br>Account: ' + data.account + '<br>Password: ' + data.password + '<br><br>Regards,<br>Spartanapproach'
                    };
                    var model = new fun.models.Email();
                    model.url = fun.conf.urls.emails
                    model.save(confimation);
                    model.save(dta, {
                        success: function(model, respose) {
                            console.log('oh no');
                        }
                    });
                }
            });
            console.log(data);
            console.log(user.url);
        } else {
            console.log('not valid');
        }
        // var view = this,
        // stuff;   
    },

});