import { $, __p, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p4 = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;padding:0px 10px;padding-bottom:50px;display:flex;flex-direction:column;gap:50px;align-items:center;background-color:${SYD_VAR.bgHero.get()};`,
            id:"p4"
        },
        [
            __SYD.p4_header(),
            __SYD.page4_main()
        ],
        {
            createState:{
                stateName:"p4",
                state:{
                    fontSize:"20px",
                    fSize:"40px"
                }
            },
            mediaQuery:{
                query:[{size:"<700px",prop:{fontSize:"16px" , fSize:"25px"}}],
                defState:{fontSize:"20px" , fSize:"40px"}
            }
        }
    )
}

__SYD.p4_header = function()
{
    return $(
        "div",
        {
            style:`font-size:${__p(["p4","fSize"],"40px")};color:${SYD_VAR.textSubhead.get()};font-weight:900;text-align:center;width:fit-content;border-bottom: 2px solid ${SYD_VAR.secondaryGold.get()};`
        },
        [
            "Grinch Tokenomics"
        ],
        {
            legacyName:"p4_header"
        }
    )
}

__SYD.page4_main = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;max-width:1000px;display:flex;gap:40px;flex-wrap:wrap;justify-content:center;align-items:center;`
        },
        [
            __SYD.page4_main_tabs({txt:"100% LP BURNED" , color:SYD_VAR.secondaryCandyAppleRed_trans.get() , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().fire}),
            __SYD.page4_main_tabs({txt:"999,999,999 SUPPLY" , color:SYD_VAR.primaryGrinchGreen_trans.get() , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().dollar}),
            __SYD.page4_main_tabs({txt:"0/0 TAX" , color:SYD_VAR.secondaryGold_trans.get() , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().no_tax}),
            __SYD.page4_main_tabs({txt:"100% community driven" , color:SYD_VAR.bgRoadmap_trans.get() , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().community})
        ],
        {
            legacyName:"page4_main"
        }
    )
}

__SYD.page4_main_tabs = function({txt , icon , color})
{
    return $(
        "div",
        {
            style:`height:120px;min-width:300px;border:3px solid ${SYD_VAR.secondaryDeepGreen.get()};display:flex;align-items:center;justify-content:center;background:${SYD_VAR.primaryGrinchGreen.get()};color:${SYD_VAR.textBody.get()};foont-weight:700;font-size:${__p(["page4" , "fSize_s"],"20px")};font-family:font1;text-shadow:1px 1px 1px rgba(0,0,0,4);border-radius:10px;position:relative;`,
            class:"navClick"
        },
        [
            __SYD.page4_main_tabs_blobs({icon , color}),
            txt
        ],
        {
            legacyName:"page4_main_tabs"
        }
    )
}

__SYD.page4_main_tabs_blobs = function({icon , color = ""})
{
    return $(
        "div",
        {
            style:`height:fit-content;width:fit-content;background-color:${SYD_VAR.primaryMidnightBlue.get()};border-radius:50%;position:absolute;top:0%;left:50%;transform:translateY(-50%) translateX(-50%);`
        },
        [   
            __SYD.page4_main_tabs_blobs_img({icon , color})
        ],
        {
            legacyName:"page4_main_tabs_blobs"
        }
    )
}

__SYD.page4_main_tabs_blobs_img = function({color , icon})
{
    return $(
        "div",
        {
            style:`height:80px;width:80px;border-radius:50%;background-color:${color};border:3px solid ${SYD_VAR.secondaryDeepGreen.get()};background-image:url(${icon});background-size:70%;`
        },[],{legacyName:"page4_main_tabs_blobs_img",genericStyle:["bg_fit"]}
    )
}