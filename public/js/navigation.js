$(()=> {
        // GENERAL TO ALL PAGES
        //Hamburger menu 1st level/wokrks
      
        const navMenu = () => {
          $("nav .hamburger-menu").on("click", (event) => $(event.target).next("ul").toggle());
          $("ul li").on({
            mouseenter: (event) => $(event.target).toggleClass("active"),
            mouseleave: (event) => $(event.target).toggleClass("active"),
            click: (event) => {
              $(event.target).find(".submenu").toggle("active");
              $(event.target).siblings().find(".submenu").hide("active");
            },
          });
          //hamburger 2nd level-works
          $(".submenu li").on("click", (event) => $(event.target).next("ul").toggle());
          $(".submenu li").on({
            click: (event) => {
              $(event.target).find(".submenu-2").toggle("active");
              $(event.target).siblings().find(".submenu-2").hide("active");
            },
          });
          
          
        };
      
        navMenu();
        
     
      

})