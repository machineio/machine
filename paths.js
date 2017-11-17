module.exports = {
  build: function(){
    var build = [
      //Jquery Libs
      './static/js/jquery-2.1.3.min.js',
      './static/js/bootstrap.min.js',
      // './static/js/jquery.sticky.js',
      './static/js/plugins/validate/jquery.validate.min.js',
      './static/js/jquery.parallax-1.1.3.js',
      './static/js/jquery.counterup.min.js',
      './static/js/waypoints.min.js',
      // './static/js/jquery.cubeportfolio.min.js',
      // './static/js/cbp-3.js',
      './static/js/jquery.ui.totop.js',
      './static/js/easing.js',

      // //Owl Carousel Plugin
      './static/js/owl.carousel.min.js',

      //Theme Custom
      './static/js/preloader.js',
      './static/js/switcher.js',
      './static/js/custom.js',

      //System Libraries
      './static/js/libs/core-min.js',
      './static/js/libs/enc-base64-min.js',
      './static/js/libs/underscore-min.js',
      './static/js/libs/backbone-min.js',

      //Relax, and have some fun
      './static/js/seed/fun.utils.js',
      './static/js/seed/fun.configuration.js',
      './static/js/seed/fun.strings.js',
      './static/js/seed/fun.models.js',

      //Codemachine Views JS
      './static/js/views/navbar.js',
      './static/js/views/landing.js',
      './static/js/views/branches.js',

      //Machine Branches
      './static/js/views/call-machine.js',
      './static/js/views/email-machine.js',
      './static/js/views/tech-machine.js',
      './static/js/views/digital-machine.js',

      //More Stuff
      './static/js/views/enterprise.js',
      './static/js/views/contact.js',
      './static/js/views/signup.js',
      './static/js/views/login.js',
      './static/js/views/dashboard.js',
      './static/js/views/footer.js',
      
      //Fun router
      './static/js/seed/fun.router.js'
    ];
    return build;
  }
  	
};