import { __g, __u, SYD_VAR, SYD_VAR_constructor } from "./sydneyDom_v3.js";

SYD_VAR.imageLinks = new SYD_VAR_constructor({value:{
    grinch_main_bad:"grinch_main_bad.gif",
    menu:"menu.png",
    bell_png:"bell/bell.png",
    bell_gif:"bell/bell.gif",
    sled_png:"sled/sled.png",
    sled_gif:"sled/sled.gif",
    lights_png:"lights/lights.png",
    lights_gif:"lights/lights.gif",
    book_png:"book/book.png",
    book_gif:"book/book.gif",
    gift_png:"gift/gift.png",
    gift_gif:"gift/gift.gif",
    grinch_bad:"grinch_bad.png",
    grinch_good:"grinch_good.png",
    grinch_main_good:"grinch_main_good.gif",
    p2_evil:"p2_evil.png",
    p2_mid:"p2_mid.png",
    p2_good:"p2_good.png",
    p3_evil:"p3_evil.png",
    p3_mid:"p3_mid.png",
    p3_good:"p3_good.png",
    dollar:"dollar.png",
    no_tax:"no-tax.png",
    fire:"fire.png",
    community:"community.png",
    binance:"binance.png",
    kucoin:"kucoin.png",
    pancakeswap:"pancakeswap.png",
    snow:"snow.gif",
    grinch_logo:"grinch_logo.png"
}})

SYD_VAR.loadedImages = new SYD_VAR_constructor({value:{}});
SYD_VAR.loadedCounts = new SYD_VAR_constructor({value:0});

SYD_VAR.loadImages = new SYD_VAR_constructor({value:() =>{
    for(let x in SYD_VAR.imageLinks.get())
    {
        const image = new Image();
        image.src = `./assets/images/${SYD_VAR.imageLinks.get()[x]}`;
        image.onload = () =>{
            const obj = {};
            obj[`${x}`] = image.src;
            SYD_VAR.loadedImages.change({...SYD_VAR.loadedImages.get() , ...obj})
            SYD_VAR.loadedCounts.update({value:SYD_VAR.loadedCounts.get() + 1});

            if(SYD_VAR.loadedCounts.get() === Object.keys(SYD_VAR.imageLinks.get()).length)
            {
                console.log("all images have been loaded");
                const state = __g("container");
                state.allLoad = true;
                __u("container" , {type:"a",value:state});
                SYD_VAR.animate_img_txt.get()();
            }
        }
    }
}})