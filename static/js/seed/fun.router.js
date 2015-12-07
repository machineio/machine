/*
* In a client-server architecture routes are resource address capability service nouns.
*/
fun.Router = Backbone.Router.extend({

    /*
     Seed server routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "dashboard": "dashboard",        
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",
        "signup": "signup",
        "login": "login",
        "branches": "branches",
        "enterprise": "enterprise",
        "contact": "contact",

        "email-machine": "emailMachine",
        "digital-machine": "digitalMachine",
        "tech-machine": "techMachine",
        "call-machine": "callMachine",

        "tasks": "tasks",
        "tasks/p:page": "tasks",

        "logout": "logout"
    },

    initialize: function(){
        'use strict';

        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });

        // branches
        fun.instances.branches = new fun.views.branches({
            el:"#fun-branches"
        });

        // enterprise
        fun.instances.enterprise = new fun.views.enterprise({
            el:"#fun-enterprise"
        });

        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });

        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });

        // email machine
        fun.instances.emailMachine = new fun.views.emailMachine({
            el:"#fun-email-machine"
        });
        // digital machine
        fun.instances.digitalMachine = new fun.views.digitalMachine({
            el:"#fun-digital-machine"
        });
        // call machine
        fun.instances.callMachine = new fun.views.callMachine({
            el:"#fun-call-machine"
        });
        // tech machine
        fun.instances.techMachine = new fun.views.techMachine({
            el:"#fun-tech-machine"
        });

        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });

        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        });

        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },

    home: function(){
        'use strict';
        console.log('spawn some fun get account and context');

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        console.log(this.account, this.context);

        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }

        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
    },

    landing: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        $('#header').removeClass("about-header");

        fun.instances.landing.render();
        fun.instances.footer.render();
    },

    features: function(){
        'use strict';
        var features = translate('features');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        //fun.instances.subheader.render(features);
        fun.instances.features.render();
        fun.instances.footer.render();
    },

    enterprise: function(){
        'use strict';
        var enterprise = translate('enterprise');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        //fun.instances.subheader.render(enterprise);
        fun.instances.enterprise.render();
        fun.instances.footer.render();
    },

    terms: function(){
        'use strict';
        var terms = translate('terms');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        fun.instances.subheader.render(terms);
        fun.instances.terms.render();
        fun.instances.footer.render();
    },

    tasks: function(){
        'use strict';
        var tasks = translate('tasks'),
            account,
            context,
            vonCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        // first of all here on resources the stuff seems to be fine.
        // new note: wut?
        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            tasks: new fun.models.Tasks()            
        };

        // but, onSuccess we're rendering multiple times the same campaigns.render()
        // and that stuff is bananas. ok

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.tasks.renderTasksList(
                    resources.tasks
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(tasks);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.tasks.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    signup: function(){
        'use strict';
        var signup = translate('signup');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Signup');
            fun.instances.signup.render();
        }
        //fun.instances.footer.render();
    },
    
    login: function(){
        'use strict';
        var login = translate('signIn');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(login);
            fun.instances.login.render();
        }

        //fun.instances.footer.render();
    },

    callMachine: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        fun.instances.callMachine.render();
        fun.instances.footer.render();
    },

    digitalMachine: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        fun.instances.digitalMachine.render();
        fun.instances.footer.render();
    },

    techMachine: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        fun.instances.techMachine.render();
        fun.instances.footer.render();
    },

    emailMachine: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        this.$('#header').addClass("about-header");
        fun.instances.emailMachine.render();
        fun.instances.footer.render();
    },
    
    dashboard: function(account, org){
        'use strict';
        var account,
            vonCount = 0,
            models,
            onSuccess,
            dashboard,
            message;

        console.log(
            fun.utils.format('account: %s, organization: %s', account, org)
        );

        if (!account){
            account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) === ':') { 
                account = account.substring(1);
            }
        }
        
        models = {
            user: new fun.models.User({'account':account}),
            records: new fun.models.Records(),
            billings: new fun.models.Billings(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };

        if (org) {
            models.org = new fun.models.Org({'account': org});
            
            // Set custom url tree, it's not a tree but you got it...
            // window.history.pushState('orgDashboard', 'Dashboard', '/orgs/iofun/dashboard');
        }

        onSuccess = function(){
            if(++vonCount === _.keys(models).length){
                console.log('spawn daemon success!');

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );

                fun.instances.dashboard.renderTodayActivityChart(
                    models.lapseSummary
                );

                fun.instances.dashboard.renderAccountDropdown(
                    models.user
                );

                // need to pass stuff to renderRecordType()                   
                fun.instances.dashboard.renderRecordType();

                // set profile info
                fun.instances.settings.setProfileInformation(
                    models.user
                );
            }
        };

        if(fun.utils.loggedIn()){

            dashboard = translate('dashboard');

            fun.utils.hideAll();
            fun.instances.navbar.render();

            fun.instances.subheader.render(dashboard);
            fun.instances.subheader.renderHeadNav();

            fun.instances.dashboard.render();
            for (message in models){
                models[message].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    logout: function(){
        'use strict';
        var goodBye = translate('goodBye'),
            onSuccess;

        onSuccess = function(){
            fun.instances.navbar.render()
        };

        fun.utils.hideAll();

        fun.utils.logout({
            success: function() {
                console.log('fuck error with kika and success!');
            },
            error: onSuccess
        });

        fun.instances.subheader.render(goodBye);      
        fun.instances.login.render();
        fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});
