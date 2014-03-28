var app = app || {};

app.SiteRouter = Backbone.Router.extend({
    routes: {
      "about": "aboutAct",
      "service": "serviceAct",
      "stores": "storeAct",
      "career": "careerAct",
      "contact": "contactAct",
      "*other": "aboutAct"
    },
    

    changeBg: function(bgName){
       $('body').css('background-image', 'url(img/bg/' + bgName + '.jpg)');
    },
    // placeInfoBlock: function(v, h){
    //   $('.infoblock').css('top', 'none');
    //   $('.infoblock').css('bottom', 'none');

      
    //   if (v == 'top') {
    //     $('.infoblock').css('top', '40px');
    //   } else {
    //     $('.infoblock').css('bottom', '40px');
    //   }
    // },

    // promo section event catcher
    // @method promoSection
    // @param NONE
    // @return NONE
    aboutAct: function(){
      this.changeBg('about');
      // this.placeInfoBlock('top');
      this.switchSection('about');
    },
    
    // about section event catcher
    // @method aboutSection
    // @param NONE
    // @return NONE
    serviceAct: function(){
      this.changeBg('service');
      // this.placeInfoBlock('bottom');
      this.switchSection('service');
    },

    // service section event catcher
    // @method serviceSection
    // @param NONE
    // @return NONE
    storeAct: function(){
      this.changeBg('stores');
      this.switchSection('stores');
      
      // });      
    },

    // store section event catcher
    // @method storeSection
    // @param NONE
    // @return NONE
    careerAct: function(){
      this.changeBg('career');
        this.switchSection('career');

    },    

    // store section event catcher
    // @method storeSection
    // @param NONE
    // @return NONE
    contactAct: function(){
      this.changeBg('contact');
        this.switchSection('contact');

    },    



    // section switcher
    // @method switchSection
    // @param "sectionName"
    // @return NONE
    switchSection: function(sectionName){
        $('section').fadeOut(0);
        $('#' + sectionName).fadeIn(0);
        
        $('nav a').removeClass('active');
        $('nav a.'+ sectionName).addClass('active');
    }

});