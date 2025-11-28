import { $, __g, __p, __SYD, __u, SYD_VAR, SYD_VAR_constructor } from "./sydneyDom_v3.js";

SYD_VAR.copyAdx = new SYD_VAR_constructor({value:function()
{
    navigator.clipboard.writeText("0xB8c77482e45F1F44dE1745F52C74426C631bDD52").then(e =>{
        const state = __g("nav");
        state.adx = "copied";
        __u("nav",{type:"a",value:state});

        setTimeout(() => {
            const state = __g("nav");
            state.adx = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
            __u("nav",{type:"a",value:state});
        }, 3000);
    })
}})

__SYD.nav = function()
{
    return $(
        "nav",
        {
            style:`position:relative;min-height:100px;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0px ${__p(["nav","padding"],"30px")}`
        },
        [
            __SYD.nav_enclose_f(),
            __SYD.nav_enclose_s(!__p(["nav","isMobile"],false)),
            __SYD.nav_menu(__p(["nav","isMobile"],false))
        ],
        {
            legacyName:"nav",
            createState:{
                stateName:"nav",
                state:{
                    padding:"30px",
                    adxSize:"14px",
                    isMobile:false,
                    dropNav:false,
                    adx:"0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
                }
            },
            mediaQuery:{
                query:[
                        {size:"<700px",prop:{
                        padding:"40px" ,
                        adxSize:"12px",
                    }},
                    {
                        size:"<900px",prop:{
                            isMobile:true
                        }
                    }
                ],
                defState:{
                    padding:"30px" , 
                    adxSize:"14px",
                    isMobile:false,
                    dropNav:false
                }
            }
        }
    )
}

__SYD.nav_enclose_f = function()
{
    return $(
        "div",
        {
            style:"height:fit-content;width:fit-content;display:flex;gap:15px;"
        },
        [
            __SYD.nav_btn({
                bg:SYD_VAR.primaryMidnightBlue.get() ,
                border:SYD_VAR.secondaryGold.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:"16px",
                txt:"Grinch",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().grinch_logo
            }),
        ],
        {
            legacyName:"nav_enclose_f"
        }
    )
}

__SYD.nav_enclose_s = function(render)
{
    return $(
        "div",
        {
            style:`height:fit-content;width:fit-content;display:flex;gap:15px;`
        },
        [
            __SYD.nav_btn({
                id:0,
                bg:SYD_VAR.primaryGrinchGreen.get() ,
                border:SYD_VAR.primaryChristmasRed.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:__p(["nav","adxSize"],"14px"),
                txt:"Home",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`bell_${__p(["nav_enclose_s","hover"],null) === 0 ? "gif" : "png"}`]
            }),
            __SYD.nav_btn({
                id:1,
                bg:SYD_VAR.primaryGrinchGreen.get() ,
                border:SYD_VAR.primaryChristmasRed.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:__p(["nav","adxSize"],"14px"),
                txt:"Story",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`book_${__p(["nav_enclose_s","hover"],null) === 1 ? "gif" : "png"}`]
            }),
            __SYD.nav_btn({
                id:2,
                bg:SYD_VAR.primaryGrinchGreen.get() ,
                border:SYD_VAR.primaryChristmasRed.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:__p(["nav","adxSize"],"14px"),
                txt:"Tokenomics",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`gift_${__p(["nav_enclose_s","hover"],null) === 2 ? "gif" : "png"}`]
            }),
            __SYD.nav_btn({
                id:3,
                bg:SYD_VAR.primaryGrinchGreen.get() ,
                border:SYD_VAR.primaryChristmasRed.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:__p(["nav","adxSize"],"14px"),
                txt:"Roadmap",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`lights_${__p(["nav_enclose_s","hover"],null) === 3 ? "gif" : "png"}`]
            }),
            __SYD.nav_btn({
                id:4,
                bg:SYD_VAR.primaryGrinchGreen.get() ,
                border:SYD_VAR.primaryChristmasRed.get() ,
                clr:SYD_VAR.primarySnowWhite.get() ,
                fSize:__p(["nav","adxSize"],"14px"),
                txt:"Buy",
                icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`sled_${__p(["nav_enclose_s","hover"],null) === 4 ? "gif" : "png"}`]
            }),
        ],
        {
            isRenderable:render,
            legacyName:"nav_enclose_s",
            createState:{
                stateName:"nav_enclose_s",
                state:{
                    hover:null
                }
            }
        }
    )
}

__SYD.nav_btn = ({id , bg , border , clr , fSize , txt , bRad = "25px" , action = ()=>{} , icon = null , render = true}) =>
{
    return $(
        "div",
        {
            style:`background:${bg};color:${clr};border:3px solid ${border};font-weight:500;font-size:${fSize};padding:10px 10px;border-radius:${bRad};cursor:pointer;display:flex;align-items:center;gap:10px;`,
            class:"navClick"
        },
        [   ...(icon ? [__SYD.nav_btn_icon({icon})] : []),
            `${txt}`
        ],
        {
            isRenderable:render,
            legacyName:"nav_btn",
            events:{
                onclick:action,
                onmouseover:()=>{
                    const state = __g("nav_enclose_s");
                    state.hover = id;
                    __u("nav_enclose_s",{type:"a",value:state})
                },
                onmouseleave:()=>{
                    const state = __g("nav_enclose_s");
                    state.hover = null;
                    __u("nav_enclose_s",{type:"a",value:state})
                }
            }
        }
    )
}

__SYD.nav_btn_icon = function({icon})
{
    return $(
        "div",
        {
            style:`height:25px;width:25px;background-image:url(${icon});`
        },[],
        {
            legacyName:"nav_btn_icon",
            genericStyle:["bg_fit"]
        }
    )
}

//mobile code section
__SYD.nav_menu = function(render)
{
    return $(
        "div",
        {
            style:`height:50px;width:50px;position:relative;display:flex;align-items:center;justify-content:center;`,
            tabindex:"1"
        },
        [
            __SYD.nav_menu_logo(),
            __SYD.navMenu_main()
        ],
        {
            events:{
                onblur:e=>{
                    const state = __g("nav");
                    state.dropNav = !__p(["nav","dropNav"]);
                    __u("nav",{type:"a",value:state})
                }
            },
            isRenderable:render,
            legacyName:"nav_menu"
        }
    )
}

__SYD.nav_menu_logo = function()
{
    return $(
        "div",
        {
            style:`height:40px;width:40px;background-image:url(${!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().menu});cursor:pointer;`
        },[],
        {
            legacyName:"nav_menu_logo",
            genericStyle:["bg_fit"],
            events:{
                onclick:e=>{
                    const state = __g("nav");
                    state.dropNav = !__p(["nav","dropNav"]);
                    __u("nav",{type:"a",value:state})
                }
            }
        }
    )
}

__SYD.navMenu_main = function()
{
    return $(
        "div",
        {
            style:`position:absolute;top:100%;right:0px;height:fit-content;width:fit-content;min-width:250px;padding:20px 10px;display:${__p(["nav","dropNav"],false) ? "flex" : "none"};flex-direction:column;gap:20px;background:${SYD_VAR.navBackground.get()};border:1px solid ${SYD_VAR.primarySnowWhite.get()};border-radius:5px;`
        },
        [
            __SYD.navList({txt:"Home"}),
            __SYD.navList({txt:"Story"}),
            __SYD.navList({txt:"Tokenomics"}),
            __SYD.navList({txt:"Roadmap"}),
            __SYD.navList({txt:"Buy"})
        ],
        {
            legacyName:"navMenu_main"
        }
    )
}

__SYD.navList = function({txt , href = "#" , action = null}){
    return $(
        "div",
        {
            style:`padding:15px 10px;font-size:14px;color:${SYD_VAR.primarySnowWhite.get()};font-family:font1;font-weight:400;max-width:200px;text-overflow: ellipsis;overflow:hidden;white-space: nowrap;`,
            class:"navList navClick"
        },
        [
            `${txt}`
        ],
        {
            legacyName:"navList",
            events:{
                onclick:action ? action : e=> location.href = href
            }
        }
    )
}