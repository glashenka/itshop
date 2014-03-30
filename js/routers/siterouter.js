var app = app || {};

app.SiteRouter = Backbone.Router.extend({
		routes: {
			"about"		:	"aboutAct",
			"service"	:	"serviceAct",
			"stores"	:	"storeAct",
			"career"	:	"careerAct",
			"contact"	:	"contactAct",
			"login"		:	"loginAct",
			"*other"	:	"aboutAct"
		},
		

		changeBg: function(bgName){
			 $('body').css('background-image', 'url(img/bg/' + bgName + '.jpg)');
		},

		// about section event catcher
		// @method promoSection
		// @param NONE
		// @return NONE
		aboutAct: function(){
			this.changeBg('about');
			// this.placeInfoBlock('top');
			this.switchSection('about');
		},
		
		// service section event catcher
		// @method aboutSection
		// @param NONE
		// @return NONE
		serviceAct: function(){
			this.changeBg('service');
			// this.placeInfoBlock('bottom');
			this.switchSection('service');
		},

		// stores list section event catcher
		// @method serviceSection
		// @param NONE
		// @return NONE
		storeAct: function(){
			this.changeBg('stores');
			this.switchSection('stores');
			
			// });      
		},

		// career section event catcher
		// @method storeSection
		// @param NONE
		// @return NONE
		careerAct: function(){
			this.changeBg('career');
				this.switchSection('career');

		},    

		// contact section event catcher
		// @method storeSection
		// @param NONE
		// @return NONE
		contactAct: function(){
			this.changeBg('contact');
				this.switchSection('contact');

		},    

		// login section event catcher
		// @method storeSection
		// @param NONE
		// @return NONE
		loginAct: function(){
			// this.changeBg('login');
				this.switchSection('login');

		},


		// section switcher
		// @method switchSection
		// @param "sectionName"
		// @return NONE
		switchSection: function(sectionName){
				//switch a visible section 
				$('section').fadeOut(0);
				$('#' + sectionName).fadeIn(0);
				
				//change nav bg
				$('nav a').removeClass('active');
				$('nav a.'+ sectionName).addClass('active');
		}

});