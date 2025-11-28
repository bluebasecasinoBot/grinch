import { $, __p, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;padding:130px 10px;padding-bottom:300px;display:flex;flex-direction:column;gap:30px;align-items:center;background-color:${SYD_VAR.bgHero.get()};`,
            id:"p3"
        },
        [
            __SYD.p3_header(),
            __SYD.p3_txt_statement(),
            __SYD.p3_main()
        ],
        {
            legacyName:"p3",
            createState:{
                stateName:"p3",
                state:{
                    fSize:"40px",
                    fSize_s:"20px",
                    isMobile:false,
                    currentIndex:0
                }
            },
            mediaQuery:{
                query:[{size:"<600px" , prop:{
                    fSize:"25px",
                    isMobile:true,
                    fSize_s:"16px",
                }}],
                defState:{
                    fSize:"40px",
                    isMobile:false,
                    fSize_s:"20px",
                }
            }
        }
    )
}

__SYD.p3_header = function()
{
    return $(
        "div",
        {
            style:`font-size:${__p(["p3","fSize"],"40px")};color:${SYD_VAR.textSubhead.get()};font-weight:900;text-align:center;width:fit-content;border-bottom: 2px solid ${SYD_VAR.secondaryGold.get()};`
        },
        [
            "Grinch Roadmap"
        ],
        {
            legacyName:"p3_header"
        }
    )
}

__SYD.p3_txt_statement = () =>{
    return $(
        "div",
        {
            style:`font-size:18px;font-weight:400;color:${SYD_VAR.textHeadline.get()};text-shadow:1px 1px 1px rgba(0,0,0,4);width:100%;text-align:center;margin-bottom:15px;`
        },
        [
            "From Christmas villain to crypto hero - the Grinch redemption arc is now on blockchain."
        ]
    )
}

__SYD.p3_main = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;max-width:1000px;display:flex;gap:5px;`
        },
        [
            __SYD.p3_main_left(),
            __SYD.p3_main_right()
        ],
        {
            legacyName:"p3_main"
        }
    )
}

__SYD.p3_main_left = function()
{
    return $(
        "div",
        {
            style:`height:-webkit-fill-available;min-width:50px;display:${__p(["p3","isMobile"],false) ? "none" : "flex"};position:relative;`
        },
        [
            __SYD.p3_main_left_str(),
            __SYD.p3_main_left_shotHand({top:"calc(130px / 2)"}),
            __SYD.p3_main_left_shotHand({top:"calc((130px * 1) + (130px / 2) + (15px * 1))"}),
            __SYD.p3_main_left_shotHand({top:"calc((130px * 2) + (130px / 2) + (15px * 2))"}),
            __SYD.p3_main_left_shotHand({top:"calc((130px * 3) + (130px / 2) + (15px * 3) - 2px)"}),
        ],
        {
            legacyName:"p3_main_left"
        }
    )
}

__SYD.p3_main_left_str = function()
{
    return $(
        "div",
        {
            style:`height:calc(100% - 130px);width:3px;background-color:${SYD_VAR.primaryMidnightBlue.get()};position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);`
        },[],
        {
            legacyName:"p3_main_left_str"
        }
    )
}

__SYD.p3_main_left_shotHand = function({top})
{
    return $(
        "div",
        {
            style:`position:absolute;top:${top};left:50%;width:25px;height:3px;background-color:${SYD_VAR.primaryMidnightBlue.get()};`
        },[],
        {
            legacyName:"p3_main_left_shotHand"
        }
    )
}

__SYD.p3_a = function({txt , href})
{ 
    return $("a",{class:"a_hover" , href:href,style:`color:${SYD_VAR.primaryGrinchGreen.get()};`},[txt],{legacyName:"p3_a"})
}

__SYD.p3_main_right = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:column;gap:${__p(["p3","isMobile"],false) ? "0px" : "15px"};align-items:center;`
        },
        [
            __SYD.p3_main_tabs({num:"I" , content:["Fair launch with locked liquidity for safety and trust"]}),
            __SYD.p3_main_tick(),
            __SYD.p3_main_tabs({num:"II" , content:["Major marketing push and community growth campaigns"]}),
            __SYD.p3_main_tick(),
            __SYD.p3_main_tabs({num:"III" , content:["Strategic exchange listings and key partnerships"]}),
            __SYD.p3_main_tick(),
            __SYD.p3_main_tabs({num:"Iv" , content:["Charity initiatives and full ecosystem expansion"
            ] , lock:true})
        ],
        {
            legacyName:"p3_main_right"
        }
    )
}

__SYD.p3_main_tabs = function({num , content , lock = false} = {})
{
    return $(
        "div",
        {
            style:`height:130px;width:100%;background-color:${SYD_VAR.primaryGrinchGreen.get()};border:3px solid ${lock ? SYD_VAR.secondaryDeepGreen.get() : SYD_VAR.primaryMidnightBlue.get()};display:flex;align-items:center;padding:0px 10px;cursor:pointer;position:relative;`,
            class:"navClick"
        },
        [
            __SYD.p3_main_tabs_num(num),
            __SYD.p3_main_tabs_contents(content),
            ...(lock ? [__SYD.p3_main_tabs_padlock()] : [])
        ],
        {
            legacyName:"p3_main_tabs"
        }
    )
}

__SYD.p3_main_tabs_num = function(num)
{
    return $(
        "div",
        {
            style:`height:50px;min-width:50px;border-radius:50%;border:3px solid ${SYD_VAR.primaryChristmasRed.get()};background:${SYD_VAR.secondaryDeepGreen.get()};display:flex;justify-content:center;align-items:center;font-weight:900;font-size:18px;color:${SYD_VAR.textHeadline.get()};`
        },
        [
            `${num}`
        ],
        {
            legacyName:"p3_main_tabs_num"
        }
    )
}

__SYD.p3_main_tabs_contents = function(content)
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;color:${SYD_VAR.textBody.get()};font-family:font2;font-weight:300;font-size:${__p(["p3","fSize_s"],"20px")};white-space:break-spaces;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,4);`
        },
        [
            ...content
        ],
        {
            legacyName:"p3_main_tabs_contents"
        }
    )
}

__SYD.p3_main_tick = function()
{
    return $(
        "div",
        {
            style:`height:15px;width:3px;background-color:${SYD_VAR.primaryMidnightBlue.get()};display:${__p(["p3","isMobile"],false) ? "flex" : "none"};`
        },[],
        {
            legacyName:"p3_main_tick"
        }
    )
}

__SYD.p3_main_tabs_padlock = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:fit-content;display:flex;align-items:center;flex-direction:column;justify-content:center;position:absolute;top:100%;left:50%;transform:translateX(-50%);`
        },
        [
            __SYD.p3_main_tabs_padlock_line(),
            __SYD.p3_main_tabs_padlock_lock()
        ],
        {
            legacyName:"p3_main_tabs_padlock"
        }
    )
}

__SYD.p3_main_tabs_padlock_line = function()
{
    return $(
        "div",
        {
            style:`height:70px;width:3px;background-color:${SYD_VAR.primaryGrinchGreen.get()};`
        },[],
        {
            legacyName:"p3_main_tabs_padlock_line"
        }
    )
}

__SYD.p3_main_tabs_padlock_lock = function()
{
    return $(
        "div",
        {
            style:`height:100px;width:100px;border-radius:50%;background-color:${SYD_VAR.primaryGrinchGreen.get()};border:3px solid ${SYD_VAR.secondaryDeepGreen.get()};background-image:url(${!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`${SYD_VAR.grinchFacial.get()[__p(["p3","currentIndex"],0)]}`]});`
        },[],{genericStyle:["bg_fit"] , legacyName:"p3_main_tabs_padlock_lock"}
    )
}