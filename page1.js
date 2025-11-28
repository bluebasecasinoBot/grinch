import { $, __p, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p1 = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:column;gap:30px;align-items:center;padding:20px 10px;font-family:font2;`,
            id:"p1"
        },
        [
            __SYD.p1_img(),
            __SYD.p1_txt()
        ],
        {
            createState:{
                stateName:"p1",
                state:{
                    fontSize:"50px"
                }
            },
            mediaQuery:{
                query:[{size:"<700px" , prop:{fontSize:"30px"}}],
                defState:{fontSize:"50px"}
            },
            legacyName:"p1"
        }
    )
}

__SYD.p1_img = function()
{
    return $(
        "div",
        {
            style:`height:400px;min-height:400px;width:100%;max-width:600px;background-image:url(${!__p(["container","allLoad"],false) ? "" : SYD_VAR.loadedImages.get()[`grinch_main_${__p(["container","mode"],"bad")}`]});`
        },[],{genericStyle:["bg_fit"] , legacyName:"p1_img"}
    )
}

__SYD.p1_txt = function()
{
    return $(
        "div",
        {
            style:`font-size:${__p(["p1","fontSize"],"50px")};font-family:font1;font-weight:900;text-transform:uppercase;width:100%;text-align:center;color:${SYD_VAR.tokenHeader.get()};`
        },
        [
            "格林奇 -$ Grinch"
        ],
        {
            legacyName:"p1_txt"
        }
    )
}