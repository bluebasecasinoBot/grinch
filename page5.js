import { $, __p, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p5 = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;padding:100px 10px;padding-bottom:100px;display:flex;flex-direction:column;gap:30px;align-items:center;background-color:${"transparent"};`
        },
        [
            __SYD.p5_header(),
            __SYD.p5_txt_statement(),
            __SYD.p5_main()
        ],
        {
            createState:{
                stateName:"p5",
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

__SYD.p5_header = function()
{
    return $(
        "div",
        {
            style:`font-size:${__p(["p5","fSize"],"40px")};color:${SYD_VAR.textSubhead.get()};font-weight:400;text-align:center;width:fit-content;border-bottom: 2px solid ${SYD_VAR.secondaryGold.get()};`
        },
        [
            "How To Buy Grinch"
        ],
        {
            legacyName:"p5_header"
        }
    )
}

__SYD.p5_txt_statement = () =>{
    return $(
        "div",
        {
            style:`font-size:18px;font-weight:400;color:${SYD_VAR.textHeadline.get()};text-shadow:1px 1px 1px rgba(0,0,0,4);width:100%;text-align:center;margin-bottom:15px;`
        },
        [
            "Join the heist - help the Grinch steal the crypto spotlight this Christmas!"
        ]
    )
}

__SYD.p5_main = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;max-width:1000px;display:flex;gap:40px;flex-wrap:wrap;justify-content:center;align-items:center;`
        },
        [
            __SYD.p5_main_tabs({txt:"Pancakeswap" , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().pancakeswap , href:"https://pancakeswap.finance/swap"}),
            __SYD.p5_main_tabs({txt:"Binance" , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().binance , href:"https://binance.com/en"}),
            __SYD.p5_main_tabs({txt:"kucoin" , icon:!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get().kucoin , href:"https://kucoin.com"}),
        ]
    )
}

__SYD.p5_main_tabs = ({icon , txt , href}) =>{
    return $(
        "div",
        {
            style:`height:80px;min-width:250px;width:fit-content;border:3px solid ${SYD_VAR.secondaryDeepGreen.get()};display:flex;align-items:center;justify-content:center;background:${SYD_VAR.primaryGrinchGreen.get()};color:${SYD_VAR.textBody.get()};foont-weight:700;font-size:${__p(["p5" , "fontSize"],"20px")};font-family:font1;text-shadow:1px 1px 1px rgba(0,0,0,4);border-radius:10px;position:relative;padding:0px 5px;gap:10px;text-decoration:underline;cursor:pointer;`,
            class:"navClick"
        },
        [
            __SYD.p5_main_tabs_img({icon}),
            txt
        ],
        {
            events:{
                onclick:e=>{
                    location.href = href;
                }
            }
        }
    )
}

__SYD.p5_main_tabs_img = function({icon})
{
    return $(
        "div",
        {
            style:`height:40px;width:40px;background-image:url(${icon});`
        },[],{legacyName:"p5_main_tabs_img",genericStyle:["bg_fit"]}
    )
}