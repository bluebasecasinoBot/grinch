import { $, __g, __m, __p, __SYD, __u, manage_mediaQuery, SYD_VAR } from "./sydneyDom_v3.js"
import "./variables.js"
import "./resources_load.js"
import "./footer.js"
import "./nav.js"
import "./page1.js"
import "./page2.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"

__SYD.container = function()
{
    return $(
        "div",
        {
            style:`height:100vh;width:100vw;background-color:${SYD_VAR.bgHero.get()};font-family:font1;overflow-x:hidden;overflow-y:scroll;display:flex;flex-direction:column;background-image:url(${!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`grinch_${__p(["container","mode"],"bad")}`]});`,
            class:"container"
        },
        [
            __SYD.snowFall(),
            __SYD.nav(),
            __SYD.p1(),
            __SYD.p2(),
            __SYD.p3(),
            __SYD.p4(),
            __SYD.p5(),
            __SYD.footer(),
            __SYD.loadPage()
        ],
        {
            genericStyle:["bg_cover"],
            createState:{
                stateName:"container",
                state:{
                    allLoad:false,
                    mode:"bad"
                }
            }
        }
    )
}

__SYD.snowFall = () =>{
    return $(
        "div",
        {
            style:`position:fixed;top:0px;left:0px;height:100vh;width:100vw;background-image:url(./assets/images/snow.gif);z-index:-1;`
        },[],{genericStyle:["bg_cover"]}
    )
}

__SYD.loadPage = () =>{
    return $(
        "div",
        {
            style:`position:fixed;top:0px;left:0px;height:100vh;width:100vw;background-image:url(./assets/images/snow.gif);z-index:999;background:${SYD_VAR.bgLoading.get()};display:flex;flex-direction:column;gap:30px;justify-content:center;align-items:center;padding:0px 15px;`,
            class:"container"
        },
        [
            __SYD.snowFall(),
            __SYD.loadPage_header(),
            __SYD.loadPage_loaderMain(),
            __SYD.loadPage_txt_skip()
            
        ],
        {
            isRenderable:!__p(["container","allLoad"],false),
            createState:{
                stateName:"loadPage",
                state:{font:"40px"}
            },
            mediaQuery:{
                query:[{size:"<700px",prop:{font:"30px"}}],
                defState:{font:"40px"}
            },
            events:{
                onclick:e=>{
                    const state = __g("container");
                    state.allLoad = true;
                    __u("container",{type:"a",value:state});
                }
            }
        }
    )
}

__SYD.loadPage_txt_skip = () =>{
    return $(
        "p",
        {style:`font-size:12px;color:${SYD_VAR.secondaryGold.get()};font-weight:300;font-family:font1;`},
        [
            "Click anywhere to SKIP"
        ]
    )
}

__SYD.loadPage_header = () =>{
    return $(
        "div",
        {
            style:`font-size:${__p(["loadPage","font"],"40px")};font-weight:900;color:${SYD_VAR.primaryGrinchGreen.get()};font-family:font1;text-align:center;`
        },
        [
            "Loading christmas spirit..."
        ]
    )
}

__SYD.loadPage_loaderMain = () =>{
    return $(
        "div",
        {
            style:"height:50px;width:100%;max-width:1000px;background:#000;border:1px solid rgba(255,255,255,.2);border-radius:15px;position:relative;"
        },
        [
            __SYD.loadPage_loaderMain_loader(),
            __SYD.loadPage_loaderMain_grinch()
        ]
    )
}

__SYD.loadPage_loaderMain_loader = () =>{
    return $(
        "div",
        {
            style:`position:absolute;top:50%;left:20px;transform:translateY(-50%);width:calc(${(SYD_VAR.loadedCounts.get()/Object.keys(SYD_VAR.imageLinks.get()).length)*100}% - 40px);height:5px;border-radius:5px;background:red;`
        }
    )
}

__SYD.loadPage_loaderMain_grinch = () =>{
    return $(
        "div",
        {
            style:`position:absolute;top:50%;left:calc(${(SYD_VAR.loadedCounts.get()/Object.keys(SYD_VAR.imageLinks.get()).length)*100}%);transform:translateY(-100%) translateX(-50%) rotateY(180deg);width:100px;height:100px;border-radius:5px;background-image:url(${SYD_VAR.loadedImages.get().grinch_main_bad});`
        },[],{genericStyle:["bg_fit"]}
    )
}

__m(__SYD.container() , () =>{
    manage_mediaQuery(window.innerWidth);

    //initiate images Load
    SYD_VAR.loadImages.get()();
    //initiate images Load
})