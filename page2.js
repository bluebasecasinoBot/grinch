import { $, __g, __p, __SYD, __u, SYD_VAR, SYD_VAR_constructor } from "./sydneyDom_v3.js";

SYD_VAR.animate_img_txt = new SYD_VAR_constructor({value:() =>{
    const {class_img} = __p(["p2"]);

    if(class_img === "slide-in-left")
    {
        setTimeout(() => {
            const state = __g("p2");
            state.class_img = "slide-in-left_r";
            state.class_txt = "slide-in-right_r";
            __u("p2",{type:"a",value:state});
            SYD_VAR.animate_img_txt.get()()
        }, 10000);
    }else if(class_img === "slide-in-left_r")
    {
        setTimeout(() => {
            const state_p2 = __g("p2");
            state_p2.class_img = "slide-in-left";
            state_p2.class_txt = "slide-in-right";
            state_p2.currentIndex = state_p2.currentIndex === SYD_VAR.grinchStory.get().length-1 ? 0 : state_p2.currentIndex+1;
            __u("p2",{type:"a",value:state_p2},{isDiff:true});

            const state_p3 = __g("p3");
            state_p3.currentIndex = state_p3.currentIndex === 2 ? 0 : state_p3.currentIndex+1;
            __u("p3",{type:"a",value:state_p3},{isDiff:false});

            const parentState = __g("container")
            switch(__p(["p2","currentIndex"]))
            {
                case 0:
                    parentState.mode = "bad";
                break;
                case 2:
                    parentState.mode = "good"
            }
            __u("container" , {type:"a",value:parentState});

            SYD_VAR.animate_img_txt.get()()
        }, 600);
    }
}})

__SYD.p2 = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(["p2" , "mobile"],false) ? "column" : "row"};gap:30px;align-items:center;padding:20px 10px;font-family:font2;background-color:${SYD_VAR.bgHero.get()};`
        },
        [
            __SYD.p2_img(),
            __SYD.p2_text()
        ],
        {
            createState:{
                stateName:"p2",
                state:{
                    mobile:false,
                    fontSize:"30px",
                    fontSize_s:"18px",
                    currentIndex:0,
                    class_img:"slide-in-left",
                    class_txt:"slide-in-right"
                }
            },
            mediaQuery:{
                query:[{size:"<700px" , prop:{mobile:true , fontSize:"20px" , fontSize_s:"16px"}}],
                defState:{mobile:false , fontSize:"30px",fontSize_s:"18px"}
            }
        }
    )
}

__SYD.p2_img = () =>{
    return $(
        "div",
        {
            style:`height:400px;width:${__p(["p2" , "mobile"],false) ? "100%" : "50%"};background-image:url(${!__p(["container","allLoad"],false) ? "" :SYD_VAR.loadedImages.get()[`${SYD_VAR.grinchStory.get()[__p(["p2","currentIndex"],0)].img}`]});`,
            class:__p(["p2","class_img"],"slide-in-left")
        },[],{genericStyle:["bg_fit"]}
    )
}

__SYD.p2_text = () =>{
    return $(
        "div",
        {
            style:`height:fit-content;width:${__p(["p2" , "mobile"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;align-items:${__p(["p2","mobile"],false) ? "center" : "flex-start"};`,
            class:__p(["p2","class_txt"],"slide-in-right")
        },
        [
            __SYD.p2_text_header(),
            __SYD.p2_text_story()
        ]
    )
}

__SYD.p2_text_header = () =>{
    return $(
        "p",
        {
            style:`font-family:font1;font-size:${__p(["p2","fontSize"],"30px")};color:${SYD_VAR.textHeadline.get()};border-bottom: 2px solid ${SYD_VAR.secondaryGold.get()};`
        },
        [
            SYD_VAR.grinchStory.get()[__p(["p2","currentIndex"],0)].header
        ]
    )
}

__SYD.p2_text_story = () =>{
    return $(
        "div",
        {
            style:`font-family:font2;font-weight:100;color:${SYD_VAR.textBody.get()};font-size:${__p(["p2","fontSize_s"],"18px")};text-align:${__p(["p2","mobile"],false) ? "center" : "left"};max-width:600px;text-shadow:1px 1px 1px rgba(0,0,0,4);`
        },[
            SYD_VAR.grinchStory.get()[__p(["p2","currentIndex"],0)].story
        ]
    )
}