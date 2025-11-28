import { $, __p, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.footer = function()
{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;padding:20px;display:flex;align-items:center;justify-content:center;color:${SYD_VAR.footerText.get()};font-size:14px;font-weight:700;border:2px solid ${SYD_VAR.footerBorder.get()};border-left:unset;border-right:unset;background:${SYD_VAR.footerBackground.get()};`
        },
        [
            "© 2025 Grinch-BSC. All rights reserved."
        ],
        {
            legacyName:"footer"
        }
    )
}