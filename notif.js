//Add to Home Banners
        $('.simulate-android-badge').on('click',function(){$('.add-to-home').removeClass('add-to-home-ios').addClass('add-to-home-visible add-to-home-android');});
        $('.simulate-iphone-badge').on('click',function(){$('.add-to-home').removeClass('add-to-home-android').addClass('add-to-home-visible add-to-home-ios');});
        $('.add-to-home').on('click',function(){$('.add-to-home').removeClass('add-to-home-visible');})
        $('.simulate-android-banner').on('click',function(){$('#menu-install-pwa-android, .menu-hider').addClass('menu-active')})
        $('.simulate-ios-banner').on('click',function(){$('#menu-install-pwa-ios, .menu-hider').addClass('menu-active')})
