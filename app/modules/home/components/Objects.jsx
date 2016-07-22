import React from 'react';
import ReactDOM from 'react-dom';

export default class Objects extends React.Component {
    constructor() {
        super();
        if(Meteor.isClient){
            this.templateDictionary = new ReactiveDict();
            this.templateDictionary.set({
                "statBall1Y":670.5,
                "statBall1X":1333.9,
                "statBall2Y":630-26,
                "statBall2X":1416.6,
                "statBall3Y":732.7,
                "statBall3X":1518,
                "statBall4Y":675.3,
                "statBall4X":1563.6,
                "statBall5Y":716.2,
                "statBall5X":1609.2
            });
            this.animation = this.animation.bind(this);
        }
    }



    animation() {
        updateProgress = updateProgress.bind(this);
        function updateProgress(frame){
            this.props.updateProgress(frame);
        }
        var isIE10 = false;
        /*@cc_on
            if (/^10/.test(@_jscript_version)) {
                isIE10 = true;
            }
        @*/
        /* vars */
        let textScale = 1, fierOffset = 0;
        if($(window).width()<768){
            textScale = 0.7;
            fierOffset = -150;
        }
        var w = this.refs.svg.getBoundingClientRect().width;
        var h = this.refs.svg.getBoundingClientRect().height;
        mainTl = new TimelineMax(/*{onUpdate:updateProgress}*/),
            toolsTl = new TimelineMax(),
            $allObjects = $(".svg>g"),
            $container = document.getElementsByClassName("animationContainer"),
            $part2Hidden = $("#part2 .hidden"),
            $text = {
                complet:document.getElementById("text"),
                full:$(".f1, .f2, .f4 .f4_1, .f4 .f4_2, .f6 .f6_1, .f6 .f6_2, .f7_main .f7, .f7_main .f7_1, .f7_main .f7_2, .f7_main .f7_3, .f7_main .f7_4, .f9, .f10 .f10_1, .f10 .f10_2, .f11 .f11_1, .f11 .f11_2, .f12 .f12_1, .f12 .f12_2, .f13 .f13_1, .f13 .f13_2"),
                text1:document.getElementsByClassName("f1"),
                text2:document.getElementsByClassName("f2"),
                text3:document.getElementsByClassName("f3"),
                text4:{
                    full:document.getElementsByClassName("f4"),
                    p1:document.getElementsByClassName("f4_1"),
                    p2:document.getElementsByClassName("f4_2")
                },
                text5:document.getElementsByClassName("f5"),
                text6:{
                    full:document.getElementsByClassName("f6"),
                    p1:document.getElementsByClassName("f6_1"),
                    p2:document.getElementsByClassName("f6_2")
                },
                text7:{
                    complet:document.getElementsByClassName("f7_main"),
                    full:document.getElementsByClassName("f7"),
                    creativite:document.getElementsByClassName("f7_1"),
                    reseau:document.getElementsByClassName("f7_2"),
                    outils:document.getElementsByClassName("f7_3"),
                    savoir:document.getElementsByClassName("f7_4")
                },
                text8:document.getElementsByClassName("f8"),
                text9:{
                    full:document.getElementsByClassName("f9")
                },
                text10:{
                    full:document.getElementsByClassName("f10"),
                    p1:document.getElementsByClassName("f10_1"),
                    p2:document.getElementsByClassName("f10_2")
                },
                text11:{
                    full:document.getElementsByClassName("f11"),
                    p1:document.getElementsByClassName("f11_1"),
                    p2:document.getElementsByClassName("f11_2")
                },
                text12:{
                    full:document.getElementsByClassName("f12"),
                    p1:document.getElementsByClassName("f12_1"),
                    p2:document.getElementsByClassName("f12_2")
                },
                text13:{
                    full:document.getElementsByClassName("f13"),
                    p1:document.getElementsByClassName("f13_1"),
                    p2:document.getElementsByClassName("f13_2")
                },
                text14:document.getElementsByClassName("f14")
            },
            $character = {
                full:document.getElementById("MainCharFull"),
                lines:document.getElementById("MainCharLines"),
                eachLines:document.getElementsByClassName("mainCharLine"),
                head:document.getElementById("head"),
                crane:$("#MainChar #head .crane"),
                body:document.getElementById("body"),
                shadow:document.getElementById("mainCharShadow"),
                everyLines:[document.getElementsByClassName("headLinesLine"), document.getElementsByClassName("mainCharLine")],
                morphHead:document.getElementById("headMorph_1_"),
                headLines:document.getElementsByClassName("headLinesLine")
            },
            $idea = {
                full: document.getElementById("MainIdeaFull"),
                mainGroup:document.getElementById("idea_2_"),
                main:{
                    idea:document.getElementById("idea_1_"),
                    shadow:document.getElementById("ideaShadow_1_")
                },
                step1:{
                    idea:document.getElementById("idea_4_"),
                    shadow:document.getElementById("ideaShadow_3_")
                },
                step2:{
                    idea:document.getElementById("idea"),
                    shadow:document.getElementById("ideaShadow")
                },
                shadow:document.getElementById("mainIdeaShadow"),
                rubanLeft:document.getElementById("rubanLeft"),
                rubanRight:document.getElementById("rubanRight"),
                no1:document.getElementById("no1")
            },
            $bigCloudFull = document.getElementById("Cloud"),
            $bigCloud = {
                full:$("#Cloud_1_, #fakeClouds"),
                earthShadow:document.getElementById("earthShadow"),
                earth:document.getElementById("earth"),
                earthShade:document.getElementById("earthShade"),
                earthLines:$(".earthLines"),
                eachEarthLines:$(".earthLines path, .earthLines line"),
                earthClip:document.getElementById("SVGID_2_"),
                earthMask:document.getElementById("SVGID_1_"),
                cloud:document.getElementById("Cloud_1_"),
                fakeClouds:document.getElementById("fakeClouds"),
                fakeCloudys:$("#fakeCloud1,#fakeCloud2,#fakeCloud3,#fakeCloud4,#fakeCloud5,#fakeCloud6,#fakeCloud7,#fakeCloud8,#fakeCloud9,#fakeCloud10, #Cloud_1_"),
                continent:document.getElementById("Continent"),
                ground:document.getElementById("ground"),
                groundys:$("#miniGround1,#miniGround2,#miniGround3,#miniGround4,#miniGround5,#miniGround6,#miniGround7,#miniGround8,#miniGround9,#miniGround10, #ground"),
                fakeCloud:{
                    c1:document.getElementById("fakeCloud1"),
                    c2:document.getElementById("fakeCloud2"),
                    c3:document.getElementById("fakeCloud3"),
                    c4:document.getElementById("fakeCloud4"),
                    c5:document.getElementById("fakeCloud5"),
                    c6:document.getElementById("fakeCloud6"),
                    c7:document.getElementById("fakeCloud7"),
                    c8:document.getElementById("fakeCloud8"),
                    c9:document.getElementById("fakeCloud9"),
                    c10:document.getElementById("fakeCloud10")
                }
            },
            $bigMask = {
                mainMask:document.getElementById("bigMask"),
                sta05:"#step05",
                sta1:"#step1",
                sta2:"#step2",
                sta15:"#step15",
                sta25:"#step25",
                sta35:"#step35",
                sta3:"#step3_2_",
                finale:"#final_1_"
            },
            $box = {
                container:document.getElementById("BlockFull"),
                rightHandle:document.getElementById("boxRightHandle"),
                leftHandle:document.getElementById("boxLeftHandle"),
                boxMorph:document.getElementById("boxMorph"),
                boxMorphShadow:document.getElementById("boxShadowMorph"),
                box:document.getElementById("box_1_"),
                boxShadow:document.getElementById("boxShadow_1_"),
                lines:{
                    full:document.getElementById("BlockLine"),
                    down1:document.getElementById("down1"),
                    down2:document.getElementById("down2"),
                    down3:document.getElementById("down3"),
                    down4:document.getElementById("down4"),
                    popLeft1:document.getElementById("popLeft1"),
                    popLeft2:document.getElementById("popLeft2"),
                    popLeft3:document.getElementById("popLeft3"),
                    popRight1:document.getElementById("popRight1"),
                    popRight2:document.getElementById("popRight2"),
                    popRight3:document.getElementById("popRight3")
                },
                boxNHandles:document.getElementById("Block"),
                balls:{
                    ball1:document.getElementById("Ball1"),
                    ball2:document.getElementById("Ball2"),
                    ball3:document.getElementById("Ball3"),
                    ball4:document.getElementById("Ball4"),
                    ball5:document.getElementById("Ball5"),
                    ball6:document.getElementById("Ball6"),
                    ball7:document.getElementById("Ball7"),
                    ball8:document.getElementById("Ball8"),
                    ball21:document.getElementById("Ball21"),
                    ball22:document.getElementById("Ball22"),
                    ball23:document.getElementById("Ball23"),
                    ball24:document.getElementById("Ball24"),
                    ball25:document.getElementById("Ball25"),
                    ball26:document.getElementById("Ball26"),
                    ball27:document.getElementById("Ball27"),
                    ball28:document.getElementById("Ball28"),
                    ball31:document.getElementById("ball31"),
                    ball32:document.getElementById("ball32"),
                    ball33:document.getElementById("ball33"),
                    ball34:document.getElementById("ball34"),
                    ball35:document.getElementById("ball35"),
                    ball36:document.getElementById("ball36"),
                    ball37:document.getElementById("ball37")
                }
            },
            $network = {
                l1:document.getElementById("nl1"),
                l2:document.getElementById("nl2"),
                l3:document.getElementById("nl3"),
                l4:document.getElementById("nl4"),
                l5:document.getElementById("nl5"),
                l6:document.getElementById("nl6"),
                l7:document.getElementById("nl7"),
                l8:document.getElementById("nl8"),
                centralPoints:$("#ball32, #body3, #body2, #body1, #ball31, #ball33, #ball37, #ball35, #ball36, #ball34, #r1, #r2, #r3, #r4, #r51, #r52, #r6, #r7"),
                stats:$("statGraph"),
                lines:document.getElementById("NetworkLines")
            },
            $browsers = {
                full:document.getElementById("browserBgs"),
                bar1:document.getElementById("ToolsBrowserTop1"),
                bar2:document.getElementById("ToolsBrowserTop2"),
                bar3:document.getElementById("ToolsBrowserTop3"),
                page:document.getElementById("BrowserBg"),
                search:document.getElementById("SearchBar"),
                pin1:document.getElementById("pin1"),
                pin2:document.getElementById("pin2"),
                pin3:document.getElementById("pin3"),
                sparkles:$("#sparkle1, #sparkle2, #sparkle3, #sparkle4, #sparkle5"),
                mouse:document.getElementById("mouse")
            },
            $exp = {
                full:document.getElementById("ExpertiseFull"),
                arm1:{
                    full:document.getElementById("ExpertiseArm1Full"),
                    tool:document.getElementById("ExpertiseArm1Pen"),
                    hand:document.getElementById("ExpertiseArm1Hand"),
                    arm:document.getElementById("ExpertiseArm1"),
                    line1:$("#exp1Line1 line"),
                    line2:$("#exp1Line2 line"),
                    handNtool:$("#ExpertiseArm1Full .handNtool")
                },
                arm2:{
                    full:document.getElementById("ExpertiseArm2Full"),
                    tool:document.getElementById("ExpertiseArm2MagGlass"),
                    hand:document.getElementById("ExpertiseArm2Hand"),
                    arm:document.getElementById("ExpertiseArm2"),
                    line1:$("#exp2Line1 line"),
                    line2:$("#exp2Line2 line"),
                    handNtool:$("#ExpertiseArm2Full .handNtool")
                },
                arm3:{
                    full:document.getElementById("ExpertiseArm3Full"),
                    tool:document.getElementById("ExpertiseArm3Camera"),
                    hand:document.getElementById("doigt"),
                    arm:document.getElementById("ExpertiseArm3"),
                    handNtool:$("#ExpertiseArm3Full .handNtool"),
                    line1:$("#exp3Line1 line"),
                    line2:$("#exp3Line2 line")
                },
                arm4:{
                    full:document.getElementById("ExpertiseArm4Full"),
                    tool:document.getElementById("ExpertiseArm4Mouse"),
                    hand:document.getElementById("ExpertiseArm4Hand"),
                    arm:document.getElementById("ExpertiseArm4"),
                    line1:$("#exp4Line1 line"),
                    line2:$("#exp4Line2 line"),
                    handNtool:$("#ExpertiseArm4Full .handNtool")
                },
                arm5:{
                    full:document.getElementById("ExpertiseArm5Full"),
                    left:document.getElementById("ExpertiseArm5Left"),
                    hand:document.getElementById("ExpertiseArm5Hands"),
                    arm:document.getElementById("ExpertiseArm5"),
                    right:document.getElementById("ExpertiseArm5Right"),
                    line1:$("#exp5Line1 line"),
                    line2:$("#exp5Line2 line"),
                    line3:$("#exp5Line3 line"),
                    line4:$("#exp5Line4 line")
                },
                flash:{
                    big:document.getElementById("bigFlash"),
                    small:document.getElementById("smallFlash"),
                    circle:document.getElementById("circle"),
                    counterCircle:document.getElementById("counterCircle")
                }
            },
            $tree = {
                fruit6:document.getElementById("fr6")
            },
            $sky = {
                sky:document.getElementById("sky"),
                eachPlaneLine:$("#PlaneLines line"),
                cloudGroup2:document.getElementById("cloudGroup2"),
                hiMomPath:$("#hiMom path"),
                wavinBan:$(".wavingBan"),
                cloud3:document.getElementById("Cloud3"),
                planeBundle:[document.getElementById("PlaneFull"), document.getElementById("completePlane")]
            },
            $ideaLines = {
                eachLines:$("#ideaLines .il"),
                lines:document.getElementById("ideaLines")
            },
            $space = {
                planet:$(".planet"),
                starsCircle:$("#stars circle"),
                shootingStar:document.getElementById("shootingStar"),
                flag:$(".allFlag"),
                dollars:$("#dollars"),
                spaceWaves:[document.getElementById("spaceWave1"), document.getElementById("spaceWave2"), document.getElementById("spaceWave3"), $("#dollars1 path")],
                dollars4:$("#dollars4 g")
            },
            $chart = {
                full:$("#ChartsFull .chart"),
                shadows:$(".chartShadow, .chartShadowl, .chartShadowr"),
                charts:$("#ChartsFull #Chart5_2, #ChartsFull #Chart3_2, #ChartsFull #Chart2_2, #ChartsFull #Chart1_2")
            };

            function clearStage(){
                var clearTl = new TimelineMax({onComplete:()=>{updateProgress(0)}});

                clearTl
                    //cta
                    .set($(".callToAction, .love"), {autoAlpha:0, y:1000})
                    //objs
                    .set([$allObjects], {autoAlpha:0})
                    //texts
                    .set($text.full, {transformOrigin:"50% 50%", autoAlpha:0, y:10})
                    .set([$text.text3, $text.text5, $text.text8], {transformOrigin:"50% 50%", y:-30, scale:1.5, autoAlpha:0})
                    .set([$text.text8], {scale:0.8, autoAlpha:0})
                    .set([$text.text14], {autoAlpha:0})
                    //headLines
                    .set([$character.head, $character.shadow], {scale:0.05, transformOrigin:"50% 50%"})
                    .set($character.body, {scale:0.05, transformOrigin:"50% 100%"})
                    .set([$character.head, $character.body, $character.shadow], {autoAlpha:0})
                    .set($character.full, {autoAlpha:1})
                    .set($character.everyLines, {drawSVG:"0% 0%"})
                    //MorphedHead
                    .set($character.morphHead, {autoAlpha:0})
                    //BigCloud set
                    .set([$bigCloudFull, $text.complet], {autoAlpha:1})
                    .set([$bigCloud.earthShadow, $bigCloud.earthShade, $bigCloud.fakeClouds, $bigCloud.ground, $bigCloud.groundys], {autoAlpha:0})
                    .set($bigCloud.cloud, {scale:6, fill:"#fcf4e1", transformOrigin:"center center"})
                    //earth
                    .set($bigCloud.earth, {scale:6, fill:"#f6cd99", transformOrigin:"50% 50%"})
                    //earthLines
                    .set($bigCloud.earthLines, {autoAlpha:1})
                    .set($bigCloud.eachEarthLines, {drawSVG:"0% 0%"})
                    //.set($bigCloud.earthClip, {scale:6, transformOrigin:"50% 50%"})
                    .set($bigCloud.earthMask, {attr:{r:1200}})
                    .set($bigCloud.continent,{autoAlpha:1})
                    //part2
                    .set([$part2Hidden, $box.boxMorph, $box.boxMorphShadow, $box.lines.full], {autoAlpha:0})
                    .set([$box.rightHandle], {rotation:-90, transformOrigin:"0% 100%", autoAlpha:0})
                    .set([$box.leftHandle], {rotation:90, transformOrigin:"0% 100%", autoAlpha:0})
                    .set([$box.boxNHandles], {y:-200, rotation:180, transformOrigin:"50% 50%"})
                    //ballsOut
                    .set([BallsLines], {autoAlpha:0})
                    //NetworkLines
                    .set($network.lines, {autoAlpha:1})
                    .set([$network.l1, $network.l2, $network.l3, $network.l4, $network.l5, $network.l6, $network.l7, $network.l8], {drawSVG:"0% 0%"})
                    //Tools sparkle
                    .set($browsers.sparkles, {scale:0.4, transformOrigin:"50% 50%", drawSVG:"0% 0%"})
                    //mouse
                    .set($browsers.mouse, {x:50, y:300})
                    //flash
                    .set([$exp.flash.small, $exp.flash.circle, $exp.flash.counterCircle, $exp.flash.big], {autoAlpha:1, transformOrigin:"50% 50%", scale:0, x:-14, y:-13})
                    //Tree
                    //.set($("#littlMan #poule"), {x:2})
                    .set($tree.fruit6, {x:-30})
                    //sky
                    .set($sky.sky, {autoAlpha:0})
                    .set($sky.eachPlaneLine, {drawSVG:"0% 0%"})
                    .set($sky.cloudGroup2, {x:-1900})
                    .set($sky.hiMomPath, {transformOrigin:"50% 50%"})
                    .set($sky.wavinBan, {y:0})
                    .set($sky.cloud3, {y:77})
                    .set($sky.planeBundle, {y:-2000, autoAlpha:1})
                    //Idea lines
                    .set($ideaLines.eachLines, {drawSVG:"0% 0%"})
                    .set($ideaLines.lines, {x:-16, y:0})
                    //Space
                    .set($space.planet, {scale:10, transformOrigin:"112px 214px", y:2300})
                    .set($space.starsCircle, {scale:0})
                    .set($space.shootingStar, {drawSVG:"0% 0%"})
                    .set($space.flag, {autoAlpha:0, y:-100, x:50})
                    //.set($space.dollars, {autoAlpha:0})
                    .set($space.spaceWaves, {scale:0, transformOrigin:"50% 50%"})
                    .set($space.dollars4, {transformOrigin:"50% 50%", scale:1.2})
                    //chart
                    .set($chart.full, {drawSVG:"0% 0%"})
                    .set([$chart.shadows, $chart.charts], {autoAlpha:0})
                ;

                if($(window).width()<=768){
                    clearTl.set([$text.text1, $text.text2, $text.text3, $text.text4.full, $text.text5, $text.text6.full, $text.text7.complet, $text.text8, $text.text9.full, $text.text10.full, $text.text11.full, $text.text12.full, $text.text13.full, $text.text14], {scale:0.7, transformOrigin:"50% 50%"});

                }

                return clearTl;
            }

            function spawnText(text, duration, type){
                var textSpawnTl = new TimelineMax();
                if(type){
                    if(duration!="none"){
                        textSpawnTl
                            .add("spawnText")
                            .to(text[0], 0.3, {transformOrigin:"50% 50% -80px", transformPerspective:100, rotationX:0, ease:Power2.easeOut, y:0}, "spawnText")
                            .to(text[0], 0.5, {transformOrigin:"50% 50% -80px", transformPerspective:100, autoAlpha:1, ease:Power0.easeNone}, "spawnText")
                            .to(text[0], 0.2, {autoAlpha:0}, "spawnText+="+duration)
                            .to(text[1], 0.3, {transformOrigin:"50% 50% -80px", transformPerspective:100, rotationX:0, ease:Power2.easeOut, y:0}, "spawnText")
                            .to(text[1], 0.5, {transformOrigin:"50% 50% -80px", transformPerspective:100, autoAlpha:1, ease:Power0.easeNone}, "spawnText")
                            .to(text[1], 0.2, {autoAlpha:0}, "spawnText+="+duration);;
                    }
                }else{
                    if(duration!="none"){
                        textSpawnTl
                            .add("spawnText")
                            .to(text, 0.3, {transformOrigin:"50% 50% -80px", transformPerspective:100, rotationX:0, ease:Power2.easeOut, y:0}, "spawnText")
                            .to(text, 0.5, {transformOrigin:"50% 50% -80px", transformPerspective:100, autoAlpha:1, ease:Power0.easeNone}, "spawnText")
                            .to(text, 0.2, {autoAlpha:0}, "spawnText+="+duration);
                    }else{
                        textSpawnTl
                            .add("spawnText")
                            .fromTo(text, 0.2, {autoAlpha:0}, {autoAlpha:1});
                    }
                }

                return textSpawnTl;
            }

            function text1(duration){
                var text1Tl = new TimelineMax({onStart:()=>{updateProgress(0)}});
                text1Tl
                    .add("text")
                    .to($(".spaceBarPress"), 0.3, {autoAlpha:1}, "text")
                    .to($text.text1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to([$text.text1, $(".spaceBarPress")], 0.2, {autoAlpha:0}, "text+="+duration);
                return text1Tl;
            }

            function text2(duration){
                var text2Tl = new TimelineMax({onStart:()=>{updateProgress(1)}});
                text2Tl
                    .add("text")
                    .to($text.text2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text2Tl;
            }

            function text3(duration){
                var text3Tl = new TimelineMax({onStart:()=>{updateProgress(2)}});
                text3Tl
                    .add("text")
                    .to($text.text3, 0.2, {transformOrigin:"50% 50%", y:0, scale:textScale, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text3, 0.2, {autoAlpha:0}, "text+="+duration);
                return text3Tl;
            }

            function text4(duration){
                var text4Tl = new TimelineMax({onStart:()=>{updateProgress(3)}});
                text4Tl
                    .add("text")
                    .to($text.text4.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text4.p1, 0.2, {autoAlpha:0}, "text+="+duration)
                    .to($text.text4.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text4.p2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text4Tl;
            }

            function text5(duration){
                var text5Tl = new TimelineMax({onStart:()=>{updateProgress(4)}});
                text5Tl
                    .add("text")
                    .to($text.text5, 0.2, {y:0, scale:textScale, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text5, 0.2, {autoAlpha:0}, "text+="+duration);
                return text5Tl;
            }

            function text6(duration){
                var text6Tl = new TimelineMax({onStart:()=>{updateProgress(5)}});
                text6Tl
                    .add("text")
                    .to($text.text6.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text6.p1, 0.2, {autoAlpha:0}, "text+="+duration)
                    .to($text.text6.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text6.p2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text6Tl;
            }

            function skillsText(){
                var skillsTextTl = new TimelineMax();

                skillsTextTl
                    .add("text")
                    .to($text.text7.full, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")

                    .to($text.text7.creativite, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text+=0")
                    .to($text.text7.creativite, 0.2, {autoAlpha:0}, "text+=4.5")

                    .to($text.text7.reseau, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text+=5")
                    .to($text.text7.reseau, 0.2, {autoAlpha:0}, "text+=8.5")

                    .to($text.text7.outils, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text+=10")
                    .to($text.text7.outils, 0.2, {autoAlpha:0}, "text+=14.3")

                    .to($text.text7.savoir, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text+=15")

                    .to($text.text7.complet, 0.1, {autoAlpha:0}, "text+=16.7");
                return skillsTextTl;
            }

            function text8(duration){
                var text8Tl = new TimelineMax({onStart:()=>{updateProgress(10)}});
                text8Tl
                    .add("text")
                    .to($text.text8, 0.1, {y:0, scale:textScale, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text8, 0.2, {autoAlpha:0}, "text+="+duration);
                return text8Tl;
            }

            function text9(duration){
                var text9Tl = new TimelineMax({onStart:()=>{updateProgress(11)}});
                text9Tl
                    .add("text")
                    .to($text.text9.full, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text9.full, 0.2, {autoAlpha:0}, "text+="+duration)
                return text9Tl;
            }

            function text10(duration){
                var text10Tl = new TimelineMax({onStart:()=>{updateProgress(12)}});
                text10Tl
                    .add("text")
                    .to($text.text10.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text10.p1, 0.2, {autoAlpha:0}, "text+="+duration)
                    .to($text.text10.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text10.p2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text10Tl;
            }

            function text11(duration){
                var text11Tl = new TimelineMax({onStart:()=>{updateProgress(13)}});
                text11Tl
                    .add("text")
                    .to($text.text11.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text11.p1, 0.2, {autoAlpha:0}, "text+="+duration)
                    .to($text.text11.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text11.p2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text11Tl;
            }

            function text12(duration){
                var text12Tl = new TimelineMax({onStart:()=>{updateProgress(14)}});
                text12Tl
                    .add("text")
                    .to($text.text12.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text12.p1, 0.2, {autoAlpha:0}, "text+="+duration)
                    .to($text.text12.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text12.p2, 0.2, {autoAlpha:0}, "text+="+duration);
                return text12Tl;
            }

            function text13(){
                var text13Tl = new TimelineMax({onStart:()=>{updateProgress(15)}});
                text13Tl
                    .add("text")
                    .to($text.text13.p1, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text")
                    .to($text.text13.p2, 0.3, {y:0, autoAlpha:1, ease:Power2.easeOut}, "text");
                return text13Tl;
            }

            function step1(){
                var step1Tl = new TimelineMax();
                step1Tl
                    .add("slide1Start")
                    //character spawn
                    .to([$character.body, $character.shadow], 0.2, {autoAlpha:1}, "slide1Start")
                    .to([$character.body, $character.shadow], 1, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, "slide1Start")
                    .to($character.head, 0.2, {autoAlpha:1}, "slide1Start+=0.2")
                    .to($character.head, 1, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, "slide1Start+=0.2")
                    //Head lines
                    .to($character.eachLines, 0.1, {drawSVG:"100% 0%"}, "slide1Start+=0.2")
                    .to($character.eachLines, 0.1, {drawSVG:"100% 100%"}, "slide1Start+=0.3")
                    //Background
                    .to([$bigCloud.cloud], 3, {fill:"#fbedd6"}, "slideStart+=2");
                return step1Tl;
            }

            function headMorph(){
                var headMorphTl = new TimelineMax();
                headMorphTl
                    .add("ideaStart")
                    .to($character.crane, 0.5, {morphSVG:"#headMorph_1_", ease: Power2.easeIn})
                    .to($character.crane, 0.5, {morphSVG:"#MainChar #head .crane", ease: Back.easeOut.config(1.7)});
                return headMorphTl;
            }

            function ideaOut(){
                var ideaOutTl = new TimelineMax();
                ideaOutTl
                    .add("ideaOut")
                    .to($idea.full, 0.01, {autoAlpha:1}, "ideaOut")
                    .to([$idea.main.idea, $idea.main.shadow, $idea.step1.idea, $idea.step1.shadow, $idea.step2.idea, $idea.step2.shadow, $idea.shadow, $idea.rubanLeft, $idea.rubanRight, $idea.no1], 0.01, {autoAlpha:0}, "ideaOut")
                    .to([$idea.main.idea, $idea.main.shadow], 0.01, {autoAlpha:1}, "ideaOut")
                    //morph idea
                    .to($idea.main.idea, 0.3, {morphSVG:"#idea_4_", fill:"#ffcf03"}, "ideaOut")
                    .to($idea.main.shadow, 0.3, {morphSVG:"#ideaShadow_3_", fill:"#dbb309"}, "ideaOut")
                    //Move idea along path
                    .to([$idea.main.shadow, $idea.main.idea], 0.3, {bezier:{type:"soft", values:[{x:50, y:-28}, {x:88, y:-20}, {x:105, y:10}]}, ease:Power0.easeNone}, "ideaOut")
                    .to([$idea.main.shadow, $idea.main.idea], 0.55, {bezier:{type:"soft", values:[{x:110, y:22}, {x:102, y:5}, {x:105, y:10}]}, ease:Power2.easeOut}, "ideaOut+=0.3")
                    //Lines
                    .to($character.headLines, 0.1, {drawSVG:"100% 0%"}, "ideaOut+=0.12")
                    .to($character.headLines, 0.1, {drawSVG:"100% 100%"}, "ideaOut+=0.22")
                    //Scale idea
                    .to([$idea.main.idea, $idea.main.shadow], 0.3, {scale:4.22}, "ideaOut+=0.15")
                    //idea shadow
                    .to($idea.shadow, 0.85, {autoAlpha:1, x:18}, "ideaOut")
                    //Center Charater and idea
                    .to($character.full, 0.45, {x:-140, ease:Power2.easeOut}, "ideaOut")
                    .to($idea.full, 0.45, {x:-44, ease:Power2.easeOut}, "ideaOut");
                return ideaOutTl;
            }

            function zoomOutCloud(){
                var zoomOutCloudTl = new TimelineMax();
                zoomOutCloudTl
                    .add("zoomOut")
                    .set([$idea.main.shadow, $idea.main.idea], {transformOrigin:"0% 0%"}, "zoomOut")
                    .to($character.full , 0.3, {scale:0.59, x:"+=12", y:"+=50", transformOrigin:"top right"}, "zoomOut")
                    .to([$idea.main.idea, $idea.main.shadow] , 0.3, {scale:2.5, x:15, y:45}, "zoomOut")
                    .to($idea.full , 0.3, {x:2}, "zoomOut")
                    .to($bigCloud.cloud, 0.3, {scale:1, ease:Power2.easeOut}, "zoomOut")
                    .to($idea.shadow, 0.3, {scale:0.7, x:-90, y:-98}, "zoomOut")
                    //idea -> ruban
                    .set([$idea.rubanLeft, $idea.rubanRight], {autoAlpha:1, scaleY:0}, "zoomOut+=0.5")
                    .to($idea.no1, 0.2, {autoAlpha:1}, "zoomOut+=0.8")
                    .to([$idea.rubanLeft, $idea.rubanRight], 0.8, {scaleY:1, ease:Elastic.easeOut.config(1, 0.3)}, "zoomOut+=0.8");
                return zoomOutCloudTl;
            }

            function cloudMorph(){
                var cloudMorphTl = new TimelineMax(),
                    morphTime = 0.5;
                cloudMorphTl
                    .add("cloudMorph")
                    .set($bigCloud.fakeCloud.c10, {clipPath:""}, "cloudMorph")
                    .to($bigCloud.fakeClouds, 0.1, {autoAlpha:1}, "cloudMorph")
                    //cloud color
                    .to([$bigCloud.cloud, $bigCloud.fakeCloud.c1, $bigCloud.fakeCloud.c2, $bigCloud.fakeCloud.c3, $bigCloud.fakeCloud.c4, $bigCloud.fakeCloud.c5, $bigCloud.fakeCloud.c6, $bigCloud.fakeCloud.c7, $bigCloud.fakeCloud.c8, $bigCloud.fakeCloud.c9, $bigCloud.fakeCloud.c10], 0.3, {fill:"#71545a"}, "cloudMorph")
                    //cloud shape
                    .to($bigCloud.cloud, morphTime, {morphSVG:{shape:"#ground", shapeIndex:300}}, "cloudMorph")
                    //remove elements
                    .to([$character.body, $character.shadow, $idea.no1, $idea.shadow], 0.1, {autoAlpha:0}, "cloudMorph")
                    .to([$idea.rubanLeft, $idea.rubanRight], 0.3, {scaleY:0, ease:Back.easeIn.config(1.2)}, "cloudMorph")
                    //backgroundColor
                    .to([$bigCloud.earth], 0.25, {fill:"#62484f", ease:Power2.easeOut}, "cloudMorph")
                    //fakeCloud
                    .to($bigCloud.fakeCloud.c1, morphTime, {morphSVG:"#miniGround1"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c2, morphTime, {morphSVG:"#miniGround2"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c3, morphTime, {morphSVG:"#miniGround3"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c4, morphTime, {morphSVG:"#miniGround4"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c5, morphTime, {morphSVG:"#miniGround5"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c6, morphTime, {morphSVG:"#miniGround6"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c7, morphTime, {morphSVG:"#miniGround7"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c8, morphTime, {morphSVG:"#miniGround8"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c9, morphTime, {morphSVG:"#miniGround9"}, "cloudMorph")
                    .to($bigCloud.fakeCloud.c10, morphTime, {morphSVG:"#miniGround10"}, "cloudMorph")
                    //change Clouds to ground
                    .to($bigCloud.fakeCloudys, 0.1, {autoAlpha:0}, "cloudMorph+=0.6")
                    .to($bigCloud.groundys, 0.1, {autoAlpha:1}, "cloudMorph+=0.5");
                return cloudMorphTl;
            }



            function zoomOutEarth(){
                var zoomOutEarthTl = new TimelineMax(),
                    spinIdeaTl = new TimelineMax({repeat:2});

                spinIdeaTl
                    .add("spin")//idea = x:15, y:45
                    .to($(".earthLines #path1, .earthLines #path2, .earthLines #path3, .earthLines #curveline"), 0.01, {autoAlpha:0, x:0, y:0}, "spin")
                    .to($idea.mainGroup, 2, {bezier:{type:"thru", values:[{x:"-=95", y:"+=60"}, {x:"+=400", y:"-=40"}, {x:"+=355", y:"-=40"}], curviness:0.75}, ease:Sine.easeInOut }, "spin")
                    .to($idea.mainGroup, 0.3, {autoAlpha:1}, "spin+=0.35")
                    .to($idea.mainGroup, 0.3, {autoAlpha:0, ease:Power1.easeInOut}, "spin+=1.6")
                    .to($idea.mainGroup, 1, {scale:0.8, transformOrigin:"50% 50%"}, "spin")
                    .to($idea.mainGroup, 1, {scale:0.5, ease:Power2.easeIn, transformOrigin:"50% 50%"}, "spin+=1")
                    //Lines
                    .to($(".earthLines #path1, .earthLines #path2, .earthLines #path3, .earthLines #curveline"), 0.01, {autoAlpha:1, drawSVG:"0 0"}, "spin+=0.50")
                    //Smalls
                    .to($(".earthLines #path2, .earthLines #path3"), 0.15, {drawSVG:"100% 0%", ease:Power0.easeNone}, "spin+=1.25")
                    .to($(".earthLines #path2, .earthLines #path3"), 0.1, {drawSVG:"100% 100%", ease:Power0.easeNone}, "spin+=1.4")
                    .to($(".earthLines #path2, .earthLines #path3"), 0.25, { y:-10, x:30}, "spin+=1.25")
                    //Long
                    .to($(".earthLines #curveline"), 0.3, {drawSVG:"50% 20%", ease:Power0.easeNone}, "spin+=0.52")
                    .to($(".earthLines #curveline"), 0.3, {drawSVG:"100% 100%", ease:Power0.easeNone}, "spin+=0.82")
                ;

                zoomOutEarthTl
                    .add("zoomOut")
                    .to($character.head, 0.3, {scale:0, autoAlpha:0}, "zoomOut+=0.1")
                    .to($bigCloud.earth, 0.3, {scale:1, fill:"#007e9b"}, "zoomOut+=0.1")
                    .to($("#SVGID_1_"), 0.3, {attr:{r:197.7}}, "zoomOut+=0.1")
                    .to($bigCloud.groundys, 0.3, {fill:"#fbedd6"}, "zoomOut+=0.1")
                    .to($("#grounders"), 0.3, {scale:0.32, x:-25, y:-25, transformOrigin:"50% 50%"}, "zoomOut+=0.1")
                    .to($bigCloud.earthShadow, 0.2, {autoAlpha:1}, "zoomOut+=0.3")
                    .to($bigCloud.earthShade, 3, {autoAlpha:0.68}, "zoomOut+=0.4")
                    //spin idea
                    .to([$idea.main.idea, $idea.main.shadow], 0.8, {bezier:{type:"thru", values:[{x:"+=250", y:"-=50"}, {x:"+=100", y:"+=100"}], curviness:1}, ease:Power1.easeIn}, "zoomOut")
                    .to($idea.mainGroup, 1, {scale:0.5, transformOrigin:"50% 50%"}, "zoomOut")
                    .to($idea.mainGroup, 0.1, {autoAlpha:0}, "zoomOut+=0.6")
                    .to($idea.mainGroup, 0.05, {x:"-=300", y:"-=20"}, "zoomOut+=0.7")
                    //spin head
                    .to($character.head, 1, {bezier:{type:"thru", values:[{x:"+=550", y:"+=0"}, {x:"+=450", y:"-=80"}], curviness:1}, ease:Sine.easeIn}, "zoomOut")
                    .to($character.head, 1, {scale:0.45, transformOrigin:"50% 50%"}, "zoomOut")
                    .to($character.head, 0.1, {autoAlpha:0}, "zoomOut+=0.9")
                    .to($character.head, 0.1, {x:"-=580", y:"-=70"}, "zoomOut+=1")
                    .add(spinIdeaTl, "zoomOut+=1.4");
                return zoomOutEarthTl;
            }

            function cubeSpawn(){
                var cubeSpawnTl = new TimelineMax();
                cubeSpawnTl
                    .add("transition")
                    .set([$("#part2"), $box.container, $box.lines.full], {autoAlpha:1},"transition+=0.01")
                    .set([$box.lines.down1, $box.lines.down2, $box.lines.down3, $box.lines.down4, $box.lines.popLeft1, $box.lines.popLeft2, $box.lines.popLeft3, $box.lines.popRight1, $box.lines.popRight2, $box.lines.popRight3], {drawSVG:"0% 0%"}, "transition+=0.01")
                    .set([$box.lines.down1, $box.lines.down2], {x:"+=50", y:"-=100"},"transition+=0.01")
                    .set([$box.lines.down3, $box.lines.down4], {x:"-=50", y:"-=100"},"transition+=0.01")
                    .to($bigMask.mainMask, 0.11, {morphSVG:$bigMask.sta05, ease:Power0.easeNone}, "transition")
                    .to($bigMask.mainMask, 0.10, {morphSVG:$bigMask.sta1, ease:Power0.easeNone}, "transition+=0.11")
                    .to($bigMask.mainMask, 0.09, {morphSVG:$bigMask.sta15, ease:Power0.easeNone}, "transition+=0.21")
                    .to($bigMask.mainMask, 0.08, {morphSVG:$bigMask.sta2, ease:Power0.easeNone}, "transition+=0.3")
                    .to($bigMask.mainMask, 0.07, {morphSVG:$bigMask.sta25, ease:Power0.easeNone}, "transition+=0.38")
                    .to($bigMask.mainMask, 0.06, {morphSVG:$bigMask.sta3, ease:Power0.easeNone}, "transition+=0.45")
                    .to($bigMask.mainMask, 0.05, {morphSVG:$bigMask.sta35, ease:Power0.easeNone}, "transition+=0.51")
                    .to($bigMask.mainMask, 0.04, {morphSVG:$bigMask.finale, ease:Power0.easeNone}, "transition+=0.56")
                    .to($box.boxNHandles, 0.6, {rotation:360}, "transition")
                    //earthMorph
                    .to($bigCloud.earth, 0.6, {morphSVG:"#box_1_", rotation:180, y:120, transformOrigin:"50% 50%"}, "transition")
                    .to($bigCloud.earthShade, 0.1, {autoAlpha:0, transformOrigin:"100% 50%"}, "transition")
                    .to([$bigCloud.earth, $bigCloud.continent, $bigCloud.earthShadow], 0.2, {autoAlpha:0}, "transition+=0.6")
                    .set($container, {backgroundColor:"#372e42"},"transition+=0.6")
                    //CubeDown
                    .to($box.boxNHandles, 0.2, {y:0, ease:Back.easeIn.config(3)}, "transition+=0.6")
                    //.add(function(){ spinIdeaTl.pause(0);}, "transition+=0.6")
                    //Lines
                    //down
                    .to([$box.lines.down1, $box.lines.down2, $box.lines.down3, $box.lines.down4], 0.1, {drawSVG:"0% 100%", y:"+=25"}, "transition+=0.7")
                    .to([$box.lines.down1, $box.lines.down2, $box.lines.down3, $box.lines.down4], 0.1, {drawSVG:"100% 100%", y:"+=50"}, "transition+=0.8")
                    //left
                    .to([$box.lines.popLeft1, $box.lines.popLeft2, $box.lines.popLeft3], 0.1, {drawSVG:"0% 100%"}, "transition+=0.85")
                    .to([$box.lines.popLeft1, $box.lines.popLeft2, $box.lines.popLeft3], 0.1, {drawSVG:"100% 100%"}, "transition+=0.95")
                    //Right
                    .to([$box.lines.popRight1, $box.lines.popRight2, $box.lines.popRight3], 0.1, {drawSVG:"0% 100%"}, "transition+=0.85")
                    .to([$box.lines.popRight1, $box.lines.popRight2, $box.lines.popRight3], 0.1, {drawSVG:"100% 100%"}, "transition+=0.95");
                return cubeSpawnTl;
            }

            function blowBox(){
                var blowBoxTl = new TimelineMax({onStart:()=>{updateProgress(6)}}),
                    ballOutTl = new TimelineMax(),
                    velocityMin=1500,
                    velocityMax=1700,
                    friction=0.05,
                    gravity=2200;

                ballOutTl
                    .add("ballOut")
                    .to($box.balls.ball1, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-120, gravity:gravity, friction:friction}}, "ballOut")
                    .to($box.balls.ball2, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-110, gravity:gravity, friction:friction}}, "ballOut+=0.1")
                    .to($box.balls.ball3, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-100, gravity:gravity, friction:friction}}, "ballOut+=0.05")
                    .to($box.balls.ball4, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-95, gravity:gravity, friction:friction}}, "ballOut+=0.2")
                    .to($box.balls.ball5, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-80, gravity:gravity, friction:friction}}, "ballOut+=0.15")
                    .to($box.balls.ball6, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-70, gravity:gravity, friction:friction}}, "ballOut+=0.25")
                    .to($box.balls.ball7, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-60, gravity:gravity, friction:friction}}, "ballOut+=0.1")
                    .to($box.balls.ball8, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-50, gravity:gravity, friction:friction}}, "ballOut+=0.15")

                    .to($box.balls.ball21, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-130, gravity:gravity, friction:friction}}, "ballOut+=0.5")
                    .to($box.balls.ball22, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-125, gravity:gravity, friction:friction}}, "ballOut+=0.53")
                    .to($box.balls.ball23, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-115, gravity:gravity, friction:friction}}, "ballOut+=0.52")
                    .to($box.balls.ball24, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-105, gravity:gravity, friction:friction}}, "ballOut+=0.58")
                    .to($box.balls.ball25, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-95, gravity:gravity, friction:friction}}, "ballOut+=0.62")
                    .to($box.balls.ball26, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-70, gravity:gravity, friction:friction}}, "ballOut+=0.6")
                    .to($box.balls.ball27, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-60, gravity:gravity, friction:friction}}, "ballOut+=0.58")
                    .to($box.balls.ball28, 6, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-50, gravity:gravity, friction:friction}}, "ballOut+=0.42")

                    .to($box.balls.ball31, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-130, gravity:gravity, friction:friction}}, "ballOut+=0.3")
                    .to($box.balls.ball32, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-125, gravity:gravity, friction:friction}}, "ballOut+=0.4")
                    .to($box.balls.ball33, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-115, gravity:gravity, friction:friction}}, "ballOut+=0.35")
                    .to($box.balls.ball34, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-100, gravity:gravity, friction:friction}}, "ballOut+=0.45")
                    .to($box.balls.ball35, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-80, gravity:gravity, friction:friction}}, "ballOut+=0.4")
                    .to($box.balls.ball36, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-70, gravity:gravity, friction:friction}}, "ballOut+=0.45")
                    .to($box.balls.ball37, 1.3, {rotation:0.01, physics2D:{velocity:Math.floor(Math.random() * velocityMax) + velocityMin, angle:-60, gravity:gravity, friction:friction}}, "ballOut+=0.32")
                    //Place network
                    .to($box.balls.ball31, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=75"}, {x:"+=50", y:"+=180"}, {x:-521.2, y:-405}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.6")
                    .to($box.balls.ball32, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"+=45", y:"+=180"}, {x:-388.4, y:18.5}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.7")
                    .to($box.balls.ball33, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"+=10", y:"+=180"}, {x:-218.7, y:-336.8}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.65")
                    .to($box.balls.ball34, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"+=10", y:"+=180"}, {x:9.1, y:-127}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.75")
                    .to($box.balls.ball35, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"+=0", y:"+=180"}, {x:159.05, y:-222.1}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.8")
                    .to($box.balls.ball36, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"-=30", y:"+=180"}, {x:197.9, y:32.5}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.75")
                    .to($box.balls.ball37, 1.8, {bezier:{type:"thru", values:[{x:"+=0", y:"+=70"}, {x:"-=45", y:"+=180"}, {x:522, y:-231.4}], curviness:1.5}, ease:Power1.easeOut}, "ballOut+=1.65")
                ;

                blowBoxTl
                    .add("blowBox")
                    .to($box.box, 0.5, {morphSVG:"#boxBump", ease:Power1.easeIn}, "blowBox")
                    .to($box.boxShadow, 0.5, {morphSVG:"#boxShadowBump", ease:Power1.easeIn}, "blowBox")
                    .to($box.box, 0.8, {morphSVG:"#boxMorph", transformOrigin:"50% 100%", ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.5")
                    .to($box.boxShadow, 0.8, {morphSVG:"#boxShadowMorph", transformOrigin:"50% 100%", ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.5")
                    //Set Handles
                    .set([$box.leftHandle, $box.rightHandle], {autoAlpha:1}, "blowBox+=0.6")
                    .set([$box.leftHandle], {x:10, y:0}, "blowBox+=0.6")
                    .set([$box.rightHandle], {x:-10, y:0}, "blowBox+=0.6")
                    //Handles out
                    .to($box.leftHandle, 0.8, {rotation:-140, ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.6")
                    .to($box.rightHandle, 0.8, {rotation:140, ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.6")
                    .to($box.leftHandle, 0.8, {y:1, ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.6")
                    .to($box.rightHandle, 0.8, {y:1, ease:Elastic.easeOut.config(1, 0.5)}, "blowBox+=0.6")
                    .to($box.leftHandle, 0.4, {x:0, ease:Power0.easeNone}, "blowBox+=0.6")
                    .to($box.rightHandle, 0.4, {x:0, ease:Power0.easeNone}, "blowBox+=0.6")
                    //set hidden network
                    .set([$("#BallsFull")], {autoAlpha:1}, "blowBox+=0.6")
                    .set([$("#body1"), $("#body2"), $("#body3")], {scale:0, transformOrigin:"50% 100%"}, "blowBox+=0.6")
                    .set([$("#r1"), $("#r2"), $("#r3"), $("#r4"), $("#r51"), $("#r52"), $("#r6"), $("#r7")], {scale:0, transformOrigin:"50% 50%"}, "blowBox+=0.6")
                    .set([$("#w1"), $("#w2"), $("#w3")], {autoAlpha:0, transformOrigin:"50% 50%"}, "blowBox+=0.6")
                    //setCracklines and dots
                    .set([$("#cg1_l1"), $("#cg1_l2"), $("#cg1_l3"), $("#cg1_l4"), $("#cg1_l5"), $("#cg1_l6"), $("#cg1_l7"), $("#cg1_l8"), $("#cg1_l9"), $("#cg1_l10"), $("#cg1_l11"), $("#cg1_l12"), $("#cg1_l13"), $("#cg1_l14"), $("#cg1_l15"), $("#cg1_l16"), $("#cg1_l17"), $("#cg1_l18"), $("#cg2_l1"), $("#cg2_l2"), $("#cg2_l3"), $("#cg2_l4"), $("#cg2_l5"), $("#cg2_l6"), $("#cg2_l7"), $("#cg2_l8"), $("#cg2_l9"), $("#cg2_l10"), $("#cg2_l11"), $("#cg2_l12"), $("#cg2_l13"), $("#cg2_l14"), $("#cg5_l1"), $("#cg5_l2"), $("#cg5_l3"), $("#cg3_l1"), $("#cg3_l2"), $("#cg3_l3"), $("#cg3_l4"), $("#cg3_l5"), $("#cg3_l6"), $("#cg3_l7"), $("#cg3_l8"), $("#cg3_l9"), $("#cg3_l10"), $("#cg3_l11"), $("#cg3_l12"), $("#cg3_l13"), $("#cg3_l14"), $("#cg4_l1"), $("#cg4_l2"), $("#cg4_l3"), $("#cg4_l4"), $("#cg4_l5"), $("#cg4_l6"), $("#cg4_l7"), $("#cg4_l8"), $("#cg4_l9"), $("#cg4_l10"), $("#cg4_l11"), $("#cg4_l12"), $("#cg4_l13"), $("#cg4_l14"), $("#cg6_l1"), $("#cg6_l2"), $("#cg6_l3")], {drawSVG:"0% 0%"}, "blowBox+=0.6")
                    .set([$("#cg1_b2"), $("#cg1_b5"), $("#cg1_b14"), $("#cg1_b11"), $("#cg1_b17"), $("#cg1_b15"), $("#cg1_b3"), $("#cg1_b8"), $("#cg1_b12"), $("#cg1_b1"), $("#cg1_b4"), $("#cg1_b6"), $("#cg1_b9"), $("#cg1_b13"), $("#cg1_b16"), $("#cg1_b17"), $("#cg1_b7"), $("#cg1_b10"), $("#cg2_b1"), $("#cg2_b2"), $("#cg2_b3"), $("#cg2_b4"), $("#cg2_b5"), $("#cg2_b6"), $("#cg2_b7"), $("#cg2_b8"), $("#cg2_b9"), $("#cg2_b10"), $("#cg2_b11"), $("#cg2_b12"), $("#cg2_b13"), $("#cg2_b14"), $("#cg5_b1"), $("#cg5_b2"), $("#cg5_b3"), $("#cg3_b1"), $("#cg3_b2"), $("#cg3_b3"), $("#cg3_b4"), $("#cg3_b5"), $("#cg3_b6"), $("#cg3_b9"), $("#cg3_b8"), $("#cg3_b7"), $("#cg3_b10"), $("#cg3_b11"), $("#cg3_b12"), $("#cg4_b1"), $("#cg4_b2"), $("#cg4_b3"), $("#cg4_b4"), $("#cg4_b5"), $("#cg4_b13"), $("#cg4_b14"), $("#cg4_b6"), $("#cg4_b7"), $("#cg4_b8"), $("#cg4_b9"), $("#cg4_b10"), $("#cg4_b11"), $("#cg4_b12"), $("#cg6_b1"), $("#cg6_b2"), $("#cg6_b3")], {scale:0.001, transformOrigin:"50% 50%"}, "blowBox+=0.6")
                    .add(ballOutTl, "blowBox+=0.6")
                    .to($box.boxNHandles, 0.3, {autoAlpha:0}, "blowBox+=1.2")
                ;
                return blowBoxTl;
            }

            function network(){
                var networkTl = new TimelineMax({onStart:()=>{setTimeout(()=>{updateProgress(7)},3000)}});
                networkTl
                    .add("networkCreation")
                    //spawn bodys and circles
                    .staggerTo([$("#body1"), $("#body2"), $("#body3")], 0.9, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, 0.1, "networkCreation+=1.8")
                    .to($("#r1"), 0.9, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, "networkCreation+=1.4")
                    .staggerTo([$("#r2"), $("#r3"), $("#r4"), $("#r51"), $("#r6"), $("#r7")], 0.9, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, 0.05, "networkCreation+=1.6")
                    .to($("#r52"), 1.1, {scale:1, ease:Elastic.easeOut.config(1, 0.3)}, "networkCreation+=1.8")

                    .fromTo($("#w1"), 1, {scale:1}, {scale:1.3}, "networkCreation+=2.7")
                    .to($("#w1"), 0.5, {autoAlpha:1}, "networkCreation+=2.7")
                    .to($("#w1"), 0.5, {autoAlpha:0}, "networkCreation+=3.2")
                    .fromTo($("#w2"), 1, {scale:1}, {scale:1.3}, "networkCreation+=2.8")
                    .to($("#w2"), 0.5, {autoAlpha:1}, "networkCreation+=2.8")
                    .to($("#w2"), 0.5, {autoAlpha:0}, "networkCreation+=3.3")
                    .to($("#w3"), 0.5, {autoAlpha:1}, "networkCreation+=2.6")
                    .to($("#w3"), 0.5, {autoAlpha:0}, "networkCreation+=3.1")
                    //CRACKS group 1
                    .to($("#cg1_l1"), 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.6")
                    .to([$("#cg1_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.72")
                    .to([$("#cg1_l3")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.75")
                    .to([$("#cg1_l7")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=3.85")
                    .to([$("#cg1_l14")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=3.93")
                    .to([$("#cg1_l4")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.88")
                    //+0.2
                    .to([$("#cg1_l5")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.02")
                    .to([$("#cg1_l9")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.1")
                    .to([$("#cg1_l11")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.2")
                    .to([$("#cg1_l12")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.15")
                    .to([$("#cg1_l16")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.2")
                    .to([$("#cg1_l18")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.2")
                    .to([$("#cg1_l6")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.04")
                    .to([$("#cg1_l10")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.12")
                    .to([$("#cg1_l15")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.17")
                    .to([$("#cg1_l17")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.22")
                    .to([$("#cg1_l8")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.05")
                    .to([$("#cg1_l13")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.13")
                    //balls group 1
                    .to([$("#cg1_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.8")
                    .to([$("#cg1_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.83")
                    .to([$("#cg1_b8")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.91")
                    .to([$("#cg1_b12")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.96")
                    .to([$("#cg1_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.86")
                    .to([$("#cg1_b4")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.96")
                    //+0.2
                    .to([$("#cg1_b6")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.1")
                    .to([$("#cg1_b9")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.15")
                    .to([$("#cg1_b13")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.2")
                    .to([$("#cg1_b16")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.25")
                    .to([$("#cg1_b7")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.11")
                    .to([$("#cg1_b10")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.16")
                    .to([$("#cg1_b5")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.08")
                    .to([$("#cg1_b14")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.23")
                    .to([$("#cg1_b11")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.18")
                    .to([$("#cg1_b17")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.23")
                    .to([$("#cg1_b15")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.23")
                    //CRACKS group 2
                    .to([$("#cg2_l1")], 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.65")
                    .to([$("#cg2_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.77")
                    .to([$("#cg2_l3")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=3.87")
                    //+0.2
                    .to([$("#cg2_l4")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.07")
                    .to([$("#cg2_l5")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.15")
                    .to([$("#cg2_l6")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.21")
                    .to([$("#cg2_l7")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.27")
                    .to([$("#cg2_l8")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.33")
                    .to([$("#cg2_l9")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.10")
                    .to([$("#cg2_l10")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.18")
                    .to([$("#cg2_l11")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.24")
                    .to([$("#cg2_l12")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.26")
                    .to([$("#cg2_l13")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.28")
                    .to([$("#cg2_l14")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.20")
                    //balls group 2
                    .to([$("#cg2_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.75")
                    .to([$("#cg2_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.93")
                    .to([$("#cg2_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.88")
                    .to([$("#cg2_b4")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.13")
                    .to([$("#cg2_b5")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.19")
                    .to([$("#cg2_b6")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.25")
                    .to([$("#cg2_b7")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.31")
                    .to([$("#cg2_b8")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.37")
                    .to([$("#cg2_b9")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.16")
                    .to([$("#cg2_b10")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.22")
                    .to([$("#cg2_b11")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.28")
                    .to([$("#cg2_b12")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.3")
                    .to([$("#cg2_b13")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.32")
                    .to([$("#cg2_b14")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.24")
                    //Cracks group 5
                    .to([$("#cg5_l1")], 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.65")
                    //+0.2
                    .to([$("#cg5_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.97")
                    .to([$("#cg5_l3")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.07")
                    //Balls group 5
                    .to([$("#cg5_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.75")
                    //+0.2
                    .to([$("#cg5_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.05")
                    .to([$("#cg5_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.11")
                    //Cracks group 3 //+0.2
                    .to([$("#cg3_l1")], 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.75")
                    .to([$("#cg3_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.87")
                    .to([$("#cg3_l3")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=3.97")
                    .to([$("#cg3_l4")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=4.05")
                    //+0.2
                    .to([$("#cg3_l5")], 0.07, {drawSVG:"100% 0%"}, "networkCreation+=4.35")
                    .to([$("#cg3_l6")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.42")
                    .to([$("#cg3_l7")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.48")
                    .to([$("#cg3_l8")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.53")
                    .to([$("#cg3_l10")], 0.07, {drawSVG:"100% 0%"}, "networkCreation+=4.37")
                    .to([$("#cg3_l9")], 0.07, {drawSVG:"100% 0%"}, "networkCreation+=4.39")
                    .to([$("#cg3_l11")], 0.07, {drawSVG:"100% 0%"}, "networkCreation+=4.39")
                    .to([$("#cg3_l12")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.45")
                    .to([$("#cg3_l13")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.5")
                    .to([$("#cg3_l14")], 0.05, {drawSVG:"100% 0%"}, "networkCreation+=4.5")
                    //Balls group 3 //+0.2
                    .to([$("#cg3_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.85")
                    .to([$("#cg3_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.03")
                    .to([$("#cg3_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.11")
                    //+0.2
                    .to([$("#cg3_b4")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.4")
                    .to([$("#cg3_b5")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.51")
                    .to([$("#cg3_b6")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.56")
                    .to([$("#cg3_b9")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.42")
                    .to([$("#cg3_b8")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.44")
                    .to([$("#cg3_b7")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.44")
                    .to([$("#cg3_b10")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.48")
                    .to([$("#cg3_b11")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.53")
                    .to([$("#cg3_b12")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.53")
                    //Cracks group 4
                    .to([$("#cg4_l1")], 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.75")
                    .to([$("#cg4_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.87")
                    .to([$("#cg4_l3")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.9")
                    .to([$("#cg4_l4")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.88")
                    .to([$("#cg4_l5")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=3.98")
                    .to([$("#cg4_l6")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.9")
                    //+0.2
                    .to([$("#cg4_l7")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.26")
                    .to([$("#cg4_l8")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.28")
                    .to([$("#cg4_l9")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.34")
                    .to([$("#cg4_l10")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.4")
                    .to([$("#cg4_l11")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.46")
                    .to([$("#cg4_l12")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.36")
                    .to([$("#cg4_l13")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.42")
                    .to([$("#cg4_l14")], 0.06, {drawSVG:"100% 0%"}, "networkCreation+=4.48")
                    //Balls group 4
                    .to([$("#cg4_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.85")
                    .to([$("#cg4_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.95")
                    .to([$("#cg4_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.98")
                    .to([$("#cg4_b4")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.96")
                    .to([$("#cg4_b5")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.04")
                    .to([$("#cg4_b13")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.98")
                    //+0.2
                    .to([$("#cg4_b14")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.3")
                    .to([$("#cg4_b6")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.32")
                    .to([$("#cg4_b7")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.38")
                    .to([$("#cg4_b8")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.44")
                    .to([$("#cg4_b9")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.5")
                    .to([$("#cg4_b10")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.4")
                    .to([$("#cg4_b11")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.46")
                    .to([$("#cg4_b12")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=4.52")
                    //Cracks group 6
                    .to([$("#cg6_l1")], 0.12, {drawSVG:"100% 0%"}, "networkCreation+=3.7")
                    .to([$("#cg6_l2")], 0.1, {drawSVG:"100% 0%"}, "networkCreation+=3.82")
                    .to([$("#cg6_l3")], 0.08, {drawSVG:"100% 0%"}, "networkCreation+=3.92")
                    //Balls group 6
                    .to([$("#cg6_b1")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.8")
                    .to([$("#cg6_b2")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.9")
                    .to([$("#cg6_b3")], 0.1, {scale:1, ease:Back.easeOut.config(1.7)}, "networkCreation+=3.98")
                    //center bumps
                    .set([$box.balls.ball35, $box.balls.ball37, $box.balls.ball33, $box.balls.ball32, $("#body3"), $("#body2")], {transformOrigin:"50% 50%"}, "networkCreation+=3.6")
                    .to($box.balls.ball35, 0.05, {scale:1.1}, "networkCreation+=3.72")
                    .to($box.balls.ball35, 0.05, {scale:1}, "networkCreation+=3.77")
                    .to($box.balls.ball37, 0.05, {scale:1.2}, "networkCreation+=4.15")
                    .to($box.balls.ball37, 0.05, {scale:1}, "networkCreation+=4.2")
                    .to($box.balls.ball32, 0.05, {scale:1.1}, "networkCreation+=3.88")
                    .to($box.balls.ball32, 0.05, {scale:1}, "networkCreation+=3.93")
                    .to($box.balls.ball33, 0.05, {scale:1.2}, "networkCreation+=3.97")
                    .to($box.balls.ball33, 0.05, {scale:1}, "networkCreation+=4.02")
                    .to($("#body3"), 0.05, {scale:1.1}, "networkCreation+=4.47")
                    .to($("#body3"), 0.05, {scale:1}, "networkCreation+=4.52")
                    .to($("#body2"), 0.05, {scale:1.1}, "networkCreation+=3.87")
                    .to($("#body2"), 0.05, {scale:1}, "networkCreation+=3.92")
                ;
                return networkTl;
            }

            toolsTl.eventCallback( "onUpdate" , ()=>{
                let ball1Y = parseFloat($('#cg4_b5').css('transform').split(',')[5]),
                    ball1X = parseFloat($('#cg4_b5').css('transform').split(',')[4]),
                    ball2Y = parseFloat($('#cg4_b6').css('transform').split(',')[5]),
                    ball2X = parseFloat($('#cg4_b6').css('transform').split(',')[4]),
                    ball3Y = parseFloat($('#cg4_b7').css('transform').split(',')[5]),
                    ball3X = parseFloat($('#cg4_b7').css('transform').split(',')[4]),
                    ball4Y = parseFloat($('#cg4_b8').css('transform').split(',')[5]),
                    ball4X = parseFloat($('#cg4_b8').css('transform').split(',')[4]),
                    ball5Y = parseFloat($('#cg4_b9').css('transform').split(',')[5]),
                    ball5X = parseFloat($('#cg4_b9').css('transform').split(',')[4]);
                if(!ball1Y){
                    ball1Y = parseFloat($('#cg4_b5').attr('transform').split(',')[5]);
                    ball1X = parseFloat($('#cg4_b5').attr('transform').split(',')[4]);
                    ball2Y = parseFloat($('#cg4_b6').attr('transform').split(',')[5]);
                    ball2X = parseFloat($('#cg4_b6').attr('transform').split(',')[4]);
                    ball3Y = parseFloat($('#cg4_b7').attr('transform').split(',')[5]);
                    ball3X = parseFloat($('#cg4_b7').attr('transform').split(',')[4]);
                    ball4Y = parseFloat($('#cg4_b8').attr('transform').split(',')[5]);
                    ball4X = parseFloat($('#cg4_b8').attr('transform').split(',')[4]);
                    ball5Y = parseFloat($('#cg4_b9').attr('transform').split(',')[5]);
                    ball5X = parseFloat($('#cg4_b9').attr('transform').split(',')[4]);
                }
                if(!ball1Y){
                    ball1Y = parseFloat($('#cg4_b5').attr('transform').split(' ')[5]);
                    ball1X = parseFloat($('#cg4_b5').attr('transform').split(' ')[4]);
                    ball2Y = parseFloat($('#cg4_b6').attr('transform').split(' ')[5]);
                    ball2X = parseFloat($('#cg4_b6').attr('transform').split(' ')[4]);
                    ball3Y = parseFloat($('#cg4_b7').attr('transform').split(' ')[5]);
                    ball3X = parseFloat($('#cg4_b7').attr('transform').split(' ')[4]);
                    ball4Y = parseFloat($('#cg4_b8').attr('transform').split(' ')[5]);
                    ball4X = parseFloat($('#cg4_b8').attr('transform').split(' ')[4]);
                    ball5Y = parseFloat($('#cg4_b9').attr('transform').split(' ')[5]);
                    ball5X = parseFloat($('#cg4_b9').attr('transform').split(' ')[4]);
                }
                var line1 = $('.svg').find('#cg4_l8')[0], line2 = $('.svg').find('#cg4_l9')[0], line3 = $('.svg').find('#cg4_l10')[0], line4 = $('.svg').find('#cg4_l11')[0];

                line1.setAttribute('x1', ball1X+1333.9);
                line1.setAttribute('y1', ball1Y+670.5);
                line1.setAttribute('x2', ball2X+1416.6);
                line1.setAttribute('y2', ball2Y+604);

                line2.setAttribute('x1', ball2X+1416.6);
                line2.setAttribute('y1', ball2Y+604);
                line2.setAttribute('x2', ball3X+1518);
                line2.setAttribute('y2', ball3Y+732.7);

                line3.setAttribute('x1', ball3X+1518);
                line3.setAttribute('y1', ball3Y+732.7);
                line3.setAttribute('x2', ball4X+1563.6);
                line3.setAttribute('y2', ball4Y+675.3);

                line4.setAttribute('x1', ball4X+1563.6);
                line4.setAttribute('y1', ball4Y+675.3);
                line4.setAttribute('x2', ball5X+1609.2);
                line4.setAttribute('y2', ball5Y+716.2);
            });

            function tools(){
                var statsTl = new TimelineMax({onStart:()=>{setTimeout(()=>{updateProgress(8)},1500)}});

                statsTl
                    .add("statGraph")
                    .to($("#cg4_b5"), 0.7, {css:{x:"+=52", y:"+=25"}}, "statGraph")
                    .to($("#cg4_b6"), 0.7, {css:{x:"+=7", y:"+=91.5"}}, "statGraph")
                    .to($("#cg4_b7"), 0.7, {css:{x:"-=55", y:"-=37"}}, "statGraph")
                    .to($("#cg4_b8"), 0.7, {css:{x:"-=63", y:"+=20.5"}}, "statGraph")
                    .to($("#cg4_b9"), 0.7, {css:{x:"-=69", y:"-=20.5"}}, "statGraph")

                    .to($("#cg4_b5"), 0.6, {css:{y:"-=9"}, ease:Elastic.easeOut.config(1, 0.2)}, "statGraph+=2.8")
                    .to($("#cg4_b6"), 0.6, {css:{y:"-=29"}, ease:Elastic.easeOut.config(1, 0.2)}, "statGraph+=3.1")
                    .to($("#cg4_b7"), 0.6, {css:{y:"-=33"}, ease:Elastic.easeOut.config(1, 0.2)}, "statGraph+=3.35")
                    .to($("#cg4_b8"), 0.6, {css:{y:"-=50"}, ease:Elastic.easeOut.config(1, 0.2)}, "statGraph+=3.6")
                    .to($("#cg4_b9"), 0.6, {css:{y:"-=55"}, ease:Elastic.easeOut.config(1, 0.2)}, "statGraph+=3.8")

                    .to($("#sparkle1 line"), 0.1, {drawSVG:"0% 100%"}, "statGraph+=2.85")
                    .to($("#sparkle1 line"), 0.1, {drawSVG:"100% 100%"}, "statGraph+=3")

                    .to($("#sparkle2 line"), 0.1, {drawSVG:"0% 100%"}, "statGraph+=3.15")
                    .to($("#sparkle2 line"), 0.1, {drawSVG:"100% 100%"}, "statGraph+=3.25")

                    .to($("#sparkle3 line"), 0.1, {drawSVG:"0% 100%"}, "statGraph+=3.40")
                    .to($("#sparkle3 line"), 0.1, {drawSVG:"100% 100%"}, "statGraph+=3.50")

                    .to($("#sparkle4 line"), 0.1, {drawSVG:"0% 100%"}, "statGraph+=3.65")
                    .to($("#sparkle4 line"), 0.1, {drawSVG:"100% 100%"}, "statGraph+=3.75")

                    .to($("#sparkle5 line"), 0.1, {drawSVG:"0% 100%"}, "statGraph+=3.85")
                    .to($("#sparkle5 line"), 0.1, {drawSVG:"100% 100%"}, "statGraph+=3.95")
                ;
                toolsTl
                    .add("tools")
                    .to([$(".cracks")], 1, {scale:3, transformOrigin:"103% 86%"}, "tools")
                    .to([$network.centralPoints], 0.2, {autoAlpha:0}, "tools")
                    .to($("#cg4_b6 .bods"), 0.4, {autoAlpha:0}, "tools")
                    //fade extras
                    .to([$("#cg4_b13"), $("#cg4_l6"), $("#cg4_l4"), $("#cg4_b4"), $("#cg4_l5"), $("#cg4_l7"), $("#cg4_b14"), $("#cg4_l12"), $("#cg4_b10"), $("#cg4_l13"), $("#cg4_l14"), $("#cg4_b11"), $("#cg4_b12"), $("#cg1_b7"), $("#cg1_l13"), $("#cg1_l8"), $("#cg4_b2")], 0.5, {autoAlpha:0}, "tools+=0.3")
                    //scale
                    .to($("#cg4_b5 .wrapper"), 1, {scale:0.243, transformOrigin:"50% 50%"}, "tools")
                    .to($("#cg4_b6 .heady .wrapper"), 1, {scale:0.413, transformOrigin:"50% 50%"}, "tools")
                    .to($("#cg4_b7 .wrapper"), 1, {scale:0.5, transformOrigin:"50% 50%"}, "tools")
                    .to($("#cg4_b9 .wrapper"), 1, {scale:0.767, transformOrigin:"50% 50%"}, "tools")
                    .to($(".toolStat line"), 1, {strokeWidth:1}, "tools")
                    .add(statsTl, "tools")
                    .set($browsers.full, {autoAlpha:1}, "tools+=0.7")
                    .fromTo($browsers.page, 0.4, {autoAlpha:0, scale:0.7, y:"+=30", transformOrigin:"50% 100%"}, {y:0, autoAlpha:1, scale:1}, "tools+=1.2")
                    .fromTo($browsers.bar1, 0.4, {autoAlpha:0, scale:0.7, y:"-=50", transformOrigin:"50% 0%"}, {y:0, autoAlpha:1, scale:1}, "tools+=1.2")
                    .staggerFromTo([$browsers.bar2, $browsers.bar3], 0.4, {autoAlpha:0, scale:0.7, y:"-=50", transformOrigin:"50% 0%"}, {y:0, autoAlpha:1, scale:1}, 0.1, "tools+=1.5")
                    .staggerFromTo([$browsers.pin1, $browsers.pin2, $browsers.pin3], 0.4, {scale:0, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(3)}, 0.1, "tools+=2")
                    .fromTo($browsers.search, 0.8, {scaleX:0, transformOrigin:"0% 50%"}, {scaleX:1}, "tools+=1.8")
                    .to($("#mouse"), 0.8, {bezier:{type:"thru", values:[{x:"-=20", y:"-=200"}, {x:-227, y:-292}], curviness:1}, ease: RoughEase.ease.config({ template: Power2.easeOut, strength: 0.2, points: 5, taper: "out", randomize: false, clamp: false})}, "tools+=4.3")
                    .to($browsers.full, 0.3, {scale:0, autoAlpha:0, transformOrigin:"0% 100%"}, "tools+=5.6")
                    .to($(".toolStat"), 0.3, {scale:0, autoAlpha:0, transformOrigin:"0% 100%", x:-10}, "tools+=5.6")
                    .to($("#mouse"), 0.6, {bezier:{type:"thru", values:[{x:"+=250", y:"-=50"}, {x:400, y:-230}], curviness:1}, ease: RoughEase.ease.config({ template: Power2.easeIn, strength: 0.2, points: 5, taper: "out", randomize: false, clamp: false})}, "tools+=5.8")
                    .to($browsers.pin3, 0.1, {fill:"#e04343"}, "tools+=5");
                return toolsTl;
            }

            function savoir(){
                var savoirTl = new TimelineMax({onStart:()=>{updateProgress(9)}}),
                    moveHandsTl = new TimelineMax(),
                    flashTl = new TimelineMax();
                moveHandsTl
                    .add("move")
                    .to($exp.arm1.handNtool, 0.15, {rotation:-8, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0")
                    .to($exp.arm1.handNtool, 0.13, {rotation:8, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.15")
                    .to($exp.arm1.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.28")

                    .to($exp.arm2.handNtool, 0.15, {rotation:8, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0.2")
                    .to($exp.arm2.handNtool, 0.13, {rotation:-8, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.35")
                    .to($exp.arm2.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.48")

                    .to($exp.arm4.handNtool, 0.15, {rotation:-4, transformOrigin:"50% 100%", ease:Power1.easeInOut}, "move+=0.3")
                    .to($exp.arm4.handNtool, 0.13, {rotation:4, transformOrigin:"50% 100%", ease:Power1.easeOut}, "move+=0.45")
                    .to($exp.arm4.handNtool, 1.20, {rotation:0, transformOrigin:"50% 100%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.58")

                    .to($exp.arm3.handNtool, 0.15, {rotation:-8, transformOrigin:"95% 95%", ease:Power1.easeInOut}, "move+=0.4")
                    .to($exp.arm3.handNtool, 0.13, {rotation:6, transformOrigin:"95% 95%", ease:Power1.easeOut}, "move+=0.55")
                    .to($exp.arm3.handNtool, 1.20, {rotation:0, transformOrigin:"95% 95%", ease:Elastic.easeOut.config(2, 0.5)}, "move+=0.68")

                    .to($exp.arm5.left, 0.2, {rotation:2, transformOrigin:"0% 0%"}, "move+=0.25")
                    .to($exp.arm5.left, 0.3, {rotation:-2, transformOrigin:"0% 0%"}, "move+=0.45")
                    .to($exp.arm5.left, 0.3, {rotation:0, transformOrigin:"0% 0%", x:0}, "move+=0.75")
                    .to($exp.arm5.hand, 0.2, {y:60}, "move+=0.25")
                    .to($exp.arm5.hand, 0.3, {y:-55}, "move+=0.45")
                    .to($exp.arm5.hand, 0.3, {y:0}, "move+=0.75")
                    .to($exp.arm5.right, 0.2, {rotation:-2, transformOrigin:"100% 0%"}, "move+=0.25")
                    .to($exp.arm5.right, 0.3, {rotation:2, transformOrigin:"100% 0%"}, "move+=0.45")
                    .to($exp.arm5.right, 0.3, {rotation:0, transformOrigin:"100% 0%", x:0}, "move+=0.75")

                    .to($exp.arm5.right, 0.3, {x:10}, "move+=0.45")
                    .to($exp.arm5.left, 0.3, {x:-10}, "move+=0.45")

                    .to($exp.arm1.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.05")
                    .to($exp.arm1.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.1")
                    .to($exp.arm1.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.15")
                    .to($exp.arm1.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.2")

                    .to($exp.arm2.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.25")
                    .to($exp.arm2.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                    .to($exp.arm2.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.35")
                    .to($exp.arm2.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")

                    .to($exp.arm3.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.4")
                    .to($exp.arm3.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.45")
                    .to($exp.arm3.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.5")
                    .to($exp.arm3.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.55")

                    .to($exp.arm4.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                    .to($exp.arm4.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")
                    .to($exp.arm4.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                    .to($exp.arm4.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")

                    .to($exp.arm5.line1, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                    .to($exp.arm5.line2, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")
                    .to($exp.arm5.line3, 0.1, {drawSVG:"0% 100%"}, "move+=0.3")
                    .to($exp.arm5.line4, 0.1, {drawSVG:"0% 100%"}, "move+=0.35")

                    .to($exp.arm5.line1, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                    .to($exp.arm5.line2, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")
                    .to($exp.arm5.line3, 0.1, {drawSVG:"100% 100%"}, "move+=0.4")
                    .to($exp.arm5.line4, 0.1, {drawSVG:"100% 100%"}, "move+=0.45")
                ;
                flashTl
                    .add("flash")
                    .to($exp.arm3.hand, 0.1, {morphSVG:"#doigt2"}, "flash")
                    .to($("#cameraButton"), 0.1, {scaleY:0.2, transformOrigin:"100% 100%"}, "flash+=0.035")

                    .to($exp.flash.circle, 0.05, {scale:1}, "flash+=0.15")
                    .to($exp.flash.circle, 0.1, {scale:2.5}, "flash+=0.2")

                    .to($exp.flash.small, 0.15, {scale:2}, "flash+=0.15")
                    .to($exp.flash.small, 0.05, {scale:0}, "flash+=0.3")
                    .to($exp.flash.small, 0.2, {rotation:167}, "flash+=0.15")

                    .to($exp.flash.big, 0.10, {scale:1.3}, "flash+=0.2")
                    .to($exp.flash.big, 0.025, {scale:0}, "flash+=0.3")
                    .to($exp.flash.big, 0.175, {rotation:102}, "flash+=0.2")

                    .to($exp.flash.circle, 0.03, {scale:2.5}, "flash+=0.2")
                    .to($exp.flash.counterCircle, 0.05, {scale:10}, "flash+=0.3")

                    .to($exp.flash.circle, 0.1, {scale:0}, "flash+=0.35")
                ;
                savoirTl
                    .add("savoir")
                    .set([$exp.arm1.line1, $exp.arm1.line2, $exp.arm2.line1, $exp.arm2.line2, $exp.arm3.line1, $exp.arm3.line2, $exp.arm4.line1, $exp.arm4.line2, $exp.arm5.line1, $exp.arm5.line2, $exp.arm5.line3, $exp.arm5.line4], {drawSVG:"0% 0%"}, "savoir")
                    .set($exp.full, {autoAlpha:1}, "savoir+=0.01")
                    .set([$exp.arm1.full, $exp.arm2.full, $exp.arm3.full, $exp.arm4.full], {y:600}, "savoir")
                    .set([$exp.arm5.full], {y:-900}, "savoir")
                    .to($exp.arm1.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir")
                    .to($exp.arm2.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.2")
                    .to($exp.arm4.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.3")
                    .to($exp.arm3.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.4")
                    .to($exp.arm5.full, 1, {y:0, ease:Elastic.easeOut.config(1, 0.5)}, "savoir+=0.25")
                    .add(moveHandsTl, "savoir")
                    .add(flashTl, "savoir+=2")
                ;
                return savoirTl;
            }

            function tree(){
                var treeTl = new TimelineMax(),
                    iePatch = {};
                if(isIE10){
                    iePatch = {y:20};
                }
                treeTl
                    .add("tree")
                    .set($("#TreeFinalState, #TreeStep2, #TreeStep3, #TreeStep4, #TreeStep5, #TreeStep6, #TreeStep1 .treeAbove, #TreeStep1 #littlMan, #TreeStep1 .fruit") , {autoAlpha:0}, "tree")
                    .to($("#sky"), 0.1, {autoAlpha:1}, "tree")
                    .to($exp.flash.counterCircle, 0.6, {scale:0.17, x:20, ease:Power3.easeInOut}, "tree")
                    .to($exp.flash.counterCircle, 1, {y:500, ease:Back.easeIn.config(4)}, "tree+=0.3")
                    .to($exp.flash.counterCircle, 0.6, {scaleX:0.1, ease:Power2.easeInOut}, "tree+=0.6")

                    .to($("#GrowingTreeFull"), 0.01, {autoAlpha:1}, "tree+=0.01")

                    .fromTo($("#TreeStep1"), 0.5, {transformOrigin:"0% 100%", rotation:180, ease:Power0.easeNone}, {rotation:0, ease:Power0.easeNone}, "tree+=1.45")
                    .fromTo($("#TreeStep1"), 0.5, {transformOrigin:"0% 100%", scale:0, ease:Power0.easeNone}, {scale:1, ease:Power0.easeNone}, "tree+=1.45")
                    .to($(".treeWrap"), 0.5, iePatch, "tree+=1.45")
                    //frame1
                    .to($("#TreeStep1 .tree"), 0.08, {morphSVG:{shape:"#TreeStep2 .tree", shapeIndex:0}, ease:Power0.easeNone}, "tree+=1.95")
                    .to($("#TreeStep1 .treeShadow"),0.08, {morphSVG:{shape:"#TreeStep2 .treeShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=1.95")
                    .to($("#TreeStep1 .leaf"), 0.08, {morphSVG:{shape:"#TreeStep2 .leaf", shapeIndex:0}, ease:Power0.easeNone}, "tree+=1.95")
                    .to($("#TreeStep1 .leafShadow"), 0.08, {morphSVG:{shape:"#TreeStep2 .leafShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=1.95")
                    //frame2
                    .to($("#TreeStep1 .tree"), 0.08, {morphSVG:{shape:"#TreeStep3 .tree", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.03")
                    .to($("#TreeStep1 .treeShadow"), 0.08, {morphSVG:{shape:"#TreeStep3 .treeShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.03")
                    .to($("#TreeStep1 .leaf"), 0.08, {morphSVG:{shape:"#TreeStep3 .leaf", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.03")
                    .to($("#TreeStep1 .leafShadow"), 0.08, {morphSVG:{shape:"#TreeStep3 .leafShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.03")
                    //frame3
                    .to($("#TreeStep1 .tree"), 0.06, {morphSVG:{shape:"#TreeStep4 .tree", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.11")
                    .to($("#TreeStep1 .treeShadow"), 0.06, {morphSVG:{shape:"#TreeStep4 .treeShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.11")
                    .to($("#TreeStep1 .leaf"), 0.06, {morphSVG:{shape:"#TreeStep4 .leaf", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.11")
                    .to($("#TreeStep1 .leafShadow"), 0.06, {morphSVG:{shape:"#TreeStep4 .leafShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.11")
                    //frame4
                    .to($("#TreeStep1 .tree"), 0.09, {morphSVG:{shape:"#TreeStep5 .tree", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.17")
                    .to($("#TreeStep1 .treeShadow"), 0.09, {morphSVG:{shape:"#TreeStep5 .treeShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.17")
                    .to($("#TreeStep1 .leaf"), 0.09, {morphSVG:{shape:"#TreeStep5 .leaf", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.17")
                    .to($("#TreeStep1 .leafShadow"), 0.09, {morphSVG:{shape:"#TreeStep5 .leafShadow", shapeIndex:0}, ease:Power0.easeNone}, "tree+=2.17")
                    //frame5
                    .to($("#TreeStep1 .tree"), 0.2, {morphSVG:{shape:"#TreeStep6 .tree", shapeIndex:0}, ease:Power1.easeInOut}, "tree+=2.26")
                    .to($("#TreeStep1 .treeShadow"), 0.2, {morphSVG:{shape:"#TreeStep6 .treeShadow", shapeIndex:0}, ease:Power1.easeInOut}, "tree+=2.26")
                    .to($("#TreeStep1 .leaf"), 0.2, {morphSVG:{shape:"#TreeStep6 .leaf", shapeIndex:0}, ease:Power1.easeInOut}, "tree+=2.26")
                    .to($("#TreeStep1 .leafShadow"), 0.2, {morphSVG:{shape:"#TreeStep6 .leafShadow", shapeIndex:0}, ease:Power1.easeInOut}, "tree+=2.26")
                    //frame6
                    .to($("#TreeStep1 .tree"), 1, {morphSVG:{shape:"#TreeFinalState .tree", shapeIndex:0}, ease:Elastic.easeOut.config(1, 0.4)}, "tree+=2.46")
                    .to($("#TreeStep1 .treeShadow"), 1, {morphSVG:{shape:"#TreeFinalState .treeShadow", shapeIndex:0}, ease:Elastic.easeOut.config(1, 0.4)}, "tree+=2.46")
                    .to($("#TreeStep1 .leaf"), 1, {morphSVG:{shape:"#TreeFinalState .leaf", shapeIndex:0}, ease:Elastic.easeOut.config(1, 0.4)}, "tree+=2.46")
                    .to($("#TreeStep1 .leafShadow"), 1, {morphSVG:{shape:"#TreeFinalState .leafShadow", shapeIndex:0}, ease:Elastic.easeOut.config(1, 0.4)}, "tree+=2.46")
                ;
                return treeTl;
            }

            function zoomTree(){
                var zoomTreeTl = new TimelineMax(),
                    popTime = 0.18;

                zoomTreeTl
                    .add("fruitsPop")
                    .to($("#TreeStep1 .treeAbove"), 0.01, {autoAlpha:1}, "fruitsPop")
                    .to($("#TreeStep1 #littlMan"), 0.01, {autoAlpha:1, transformOrigin:"100% 100%"}, "fruitsPop")
                    //Peak littlMan
                    .to($("#TreeStep1 #littlMan"), 0.5, {rotation:15}, "fruitsPop+=0.01")
                    .to($("#TreeStep1 #littlMan"), 0.3, {rotation:0}, "fruitsPop+=0.8")
                    //Pop fruits
                    .fromTo($(".treeWrap #fr3"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop")
                    .fromTo($(".treeWrap #fr6"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=0.4")
                    .fromTo($(".treeWrap #fr10"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=0.7")
                    .fromTo($(".treeWrap #fr1"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=0.78")
                    .fromTo($(".treeWrap #fr8"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=0.86")
                    .fromTo($(".treeWrap #fr7"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=0.94")
                    .fromTo($(".treeWrap #fr9"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=1.02")
                    .fromTo($(".treeWrap #fr5"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=1.1")
                    .fromTo($(".treeWrap #fr11"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=1.18")
                    .fromTo($(".treeWrap #fr4"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=1.26")
                    .fromTo($(".treeWrap #fr2"), popTime, {scale:0, autoAlpha:1, transformOrigin:"50% 50%"}, {scale:1, ease:Back.easeOut.config(1.7)}, "fruistPop+=1.34")
                    //Bring littlMan to front
                    .to($("#TreeStep1 #littlMan"), 0.3, {x:60, ease:Power0.easeNone}, "fruitsPop+=1.6")
                    .to($("#TreeStep1 .treeAbove"), 0.01, {autoAlpha:0}, "fruitsPop+=1.9")
                    .to($("#TreeStep1 #littlMan"), 0.5, {x:40}, "fruitsPop+=1.9")
                    //Zoom the scene
                    .to($(".treeWrap"), 0.5, {scale:2.3, transformOrigin:"100% 100%"}, "fruitsPop+=1.8")
                    //idea
                    .to($("#fr7"), 0.2, {y:"+=69", ease:Power1.easeIn}, "fruitsPop+=4.6")
                    .to($("#fr7"), 0.2, {y:"-=17.5"}, "fruitsPop+=4.8")
                    .to($("#fr7"), 1.3, {y:180, ease:Bounce.easeOut}, "fruitsPop+=5")
                    .to($("#fr7"), 1.7, {x:"+=250"}, "fruitsPop+=4.8")
                    //Lines
                    .to($("#ideaLines .il1"), 0.1, {drawSVG:"100% 0%"}, "fruitsPop+=4.80")
                    .to($("#ideaLines .il2"), 0.1, {drawSVG:"100% 0%"}, "fruitsPop+=4.80")
                    .to($("#ideaLines .il3"), 0.1, {drawSVG:"100% 0%"}, "fruitsPop+=4.80")

                    .to($("#ideaLines .il1"), 0.1, {drawSVG:"100% 100%"}, "fruitsPop+=4.90")
                    .to($("#ideaLines .il2"), 0.1, {drawSVG:"100% 100%"}, "fruitsPop+=4.90")
                    .to($("#ideaLines .il3"), 0.1, {drawSVG:"100% 100%"}, "fruitsPop+=4.90")
                ;
                return zoomTreeTl;
            }

            function curve(i){
              var n = i / 6 * 6.24;
              return  (Math.cos(n)) * -5;
            }

            function plane(){
                var planeTl = new TimelineMax(),
                    heliTl = new TimelineMax({repeat:30}),
                    banTl = new TimelineMax({repeat:9}),
                    planeLinesTl = new TimelineMax({repeat:5, repeatDelay:2.5}),
                    letter1Tl = new TimelineMax({repeat:9}),
                    letter2Tl = new TimelineMax({repeat:9}),
                    letter3Tl = new TimelineMax({repeat:9}),
                    letter4Tl = new TimelineMax({repeat:9}),
                    letter5Tl = new TimelineMax({repeat:9}),
                    letter6Tl = new TimelineMax({repeat:9});
                heliTl
                    .add("heli")
                    .to($(".heli"), 0.3, {rotationX:360, transformOrigin:"50% 50%", ease:Power0.easeNone}, "heli");

                banTl
                    .add("ban")
                    //.to($("#Banner #flag path"), 1.5, {x:"+=127.179", ease:Power0.easeNone}, "ban")
                    .to($("#Banner #flag path"), 1, {x:"+=195.408", ease:Power0.easeNone}, "ban")
                    .to($("#maskPos1"), 0.5, {morphSVG:"#maskPos2", ease:Power0.easeNone}, "ban")
                    .to($("#maskPos1"), 0.5, {morphSVG:"#maskPos12", ease:Power0.easeNone}, "ban+=0.5")
                    .to($(".wavingBan"), 0.197, {y:-7, ease:Power1.easeOut}, "ban")
                    .to($(".wavingBan"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($(".wavingBan"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");

                letter1Tl
                    .add("ban")
                    .to($("#hiMom #H"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #H"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #H"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");
                letter2Tl
                    .add("ban")
                    .to($("#hiMom #I"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #I"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #I"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");
                letter3Tl
                    .add("ban")
                    .to($("#hiMom #M"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #M"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #M"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");
                letter4Tl
                    .add("ban")
                    .to($("#hiMom #O"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #O"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #O"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");
                letter5Tl
                    .add("ban")
                    .to($("#hiMom #M2"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #M2"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #M2"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");
                letter6Tl
                    .add("ban")
                    .to($("#hiMom #e"), 0.197, {y:-5, ease:Power1.easeOut}, "ban")
                    .to($("#hiMom #e"), 0.6249, {y:3, ease:Power1.easeInOut}, "ban+=0.197")
                    .to($("#hiMom #e"), 0.178, {y:0, ease:Power1.easeIn}, "ban+=0.8219");

                planeLinesTl
                    .add("lines")
                    .to($("#PlaneLines #pl1"), 0.1, {drawSVG:"100% 0%"}, "lines")
                    .to($("#PlaneLines #pl1"), 0.1, {drawSVG:"100% 100%"}, "lines+=0.1")
                    .to($("#PlaneLines #pl2"), 0.1, {drawSVG:"100% 0%"}, "lines+=0.1")
                    .to($("#PlaneLines #pl2"), 0.1, {drawSVG:"100% 100%"}, "lines+=0.2");

                planeTl
                    .add("plane")
                    .to($("#CloudLines"), 0.01, {autoAlpha:0}, "plane")
                    .to($(".treeWrap"), 1, {y:2000, ease:Power2.easeInOut}, "plane")
                    .to([$("#PlaneFull"), $("#completePlane")], 1, {y:0, ease:Power2.easeInOut}, "plane+=0.2")
                    .to($("#Cloud1"), 8, {rotation:0.01, x:1100, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud2"), 10, {rotation:0.01, x:900, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud3"), 8, {rotation:0.01, x:1100, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud4"), 7, {rotation:0.01, x:1200, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud5"), 10, {rotation:0.01, x:900, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud8"), 10, {rotation:0.01, x:900, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud11"), 12, {rotation:0.01, x:2200, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud12"), 20, {rotation:0.01, x:1400, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud13"), 10, {rotation:0.01, x:2300, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud14"), 9, {rotation:0.01, x:2400, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud15"), 20, {rotation:0.01, x:1400, ease:Power0.easeNone}, "plane")
                    .to($("#Cloud18"), 20, {rotation:0.01, x:1400, ease:Power0.easeNone}, "plane")

                    .add(planeLinesTl, "plane")
                    .add(banTl, "plane")
                    .add(letter1Tl, "plane")
                    .add(letter2Tl, "plane+=0.03")
                    .add(letter3Tl, "plane+=0.06")
                    .add(letter4Tl, "plane+=0.09")
                    .add(letter5Tl, "plane+=0.12")
                    .add(letter6Tl, "plane+=0.15")
                    .add(heliTl, "plane")
                ;
                return planeTl;
            }

            function Random (max) {
                return Math.random()*max;
            }

            function random(min, max) {
                return min + Math.floor( Math.random() * (max - min));
            }

            function zoomOutSpace(){
                var zoomOutSpaceTl = new TimelineMax();

                function rainingMoney(){
                    $("#dollars1 path").each(function(i){
                        //zoomOutSpaceTl.to($(this), 1, {scale:1, ease:Back.easeOut.config(1.7)}, "space+=4.2")
                    });
                    return "";
                }

                zoomOutSpaceTl
                    .add("space")
                    //ZoomOut
                    .to($("#completePlane"), 0.5, {transformOrigin:"50% 50%", scale:0.175, y:-180, x:-95}, "space")
                    .to($("#sky"), 0.5, {fill:"#25414E"}, "space")
                    .to($("#Cloud1, #Cloud2, #Cloud3, #Cloud4, #Cloud5, #Cloud6, #Cloud7, #Cloud8, #Cloud9, #Cloud10, #Cloud11, #Cloud12, #Cloud13, #Cloud14, #Cloud15, #Cloud18"), 0.5, {scale:0, transformOrigin:"50% 50%", autoAlpha:0}, "space")
                    .to($(".planet"), 0.5, {scale:1, y:0}, "space")
                    //Ball fall down
                    //.to($("#miniBall"), 2, {physics2D:{velocity:600, angle:0, gravity:2500, friction:0.15}, ease:Power2.easeIn}, "space+=0.365")
                    //.to($("#miniBall"), 0.01, {autoAlpha:0}, "space+=2.365")
                    .to($("#miniBall"), 3, {x:120, ease:Power4.easeOut}, "space+=0.365")
                    .to($("#miniBall"), 0.2, {y:19, ease:Power2.easeIn}, "space+=0.42")
                    .to($("#miniBall"), 0.1, {y:21, ease:Power2.easeIn}, "space+=0.62")
                    .to($("#miniBall"), 1, {y:500, ease:Power2.easeIn}, "space+=0.72")
                    .to($("#miniBall"), 0.01, {autoAlpha:0}, "space+=1.7")
                    //Stars pop up
                    .staggerTo($("#stars circle"), 1, {scale:1, ease:Back.easeOut.config(1.7)}, 0.05, "space+=0.5")
                    .to($("#dollars"), 0.1, {autoAlpha:1}, "space+=1.5")
                    //Rotate Plane
                    .to($("#completePlane"), 3.9, {rotation:-80, transformOrigin:"330px 1250px", ease:Power1.easeIn}, "space+=0.5")
                    .to($("#Banner"), 3, {rotation:10, transformOrigin:"10% 50%", ease:Power2.easeIn}, "space+=0.8")

                    .to($("#completePlane"), 0.1, {rotation:-85, ease:Power0.easeNone}, "space+=4.4")
                    .to($("#completePlane"), 0.1, {rotation:-90, ease:Power0.easeNone}, "space+=4.5")
                    .to($("#completePlane"), 0.1, {rotation:-99, ease:Power0.easeNone}, "space+=4.6")
                    .to($("#completePlane"), 0.1, {rotation:-120, ease:Power0.easeNone}, "space+=4.7")
                    .to($("#completePlane"), 0.1, {rotation:-140, ease:Power0.easeNone}, "space+=4.8")
                    .to($("#completePlane"), 0.1, {rotation:-170, ease:Power0.easeNone}, "space+=4.9")
                    .to($("#completePlane"), 0.1, {rotation:-205, ease:Power0.easeNone}, "space+=5.0")
                    .to($("#completePlane"), 0.1, {rotation:-240, ease:Power0.easeNone}, "space+=5.1")

                    //Plant Flag
                    .to($(".allFlag"), 0.3, {x:"+=130", y:"-=80", autoAlpha:1, rotation:30, transformOrigin:"0% 100%", ease:Power2.easeOut}, "space+=2")
                    .to($(".allFlag"), 0.2, {x:0, rotation:0, y:0, transformOrigin:"0% 100%", ease:Power2.easeIn}, "space+=2.3")
                    .to($(".allFlag"), 0.05, {rotation:-2, ease:Power0.easeNone}, "space+=2.5")
                    .to($(".allFlag"), 0.05, {rotation:2, ease:Power0.easeNone}, "space+=2.55")
                    .to($(".allFlag"), 0.05, {rotation:1, ease:Power0.easeNone}, "space+=2.6")
                    .to($(".allFlag"), 0.05, {rotation:0, ease:Power0.easeNone}, "space+=2.65")

                    //Shooting star
                    .to($("#shootingStar"), 0.3, {drawSVG:"100% 0%"}, "space+=3.2")
                    .to($("#shootingStar"), 0.2, {drawSVG:"100% 100%"}, "space+=3.5")
                    .to($("#shootingStar"), 0.5, {x:150, y:150, ease:Power0.easeNone}, "space+=3.2")
                    //Flush
                    .to($(".planet"), 1, {autoAlpha:0}, "space+=4.2")
                    .to($("#completePlane"), 0.6, {autoAlpha:0}, "space+=4.6")

                    //SpaceWave
                    .to($("#spaceWave1"), 0.5, {scale:1, ease:Power1.easeIn}, "space+=4")
                    .to($("#spaceWave2"), 0.4, {scale:1, ease:Power1.easeIn}, "space+=4.15")
                    .to($("#spaceWave3"), 0.4, {scale:1, ease:Power1.easeIn}, "space+=4.25")
                    .to($("#stars circle"), 0.1, {autoAlpha:0}, "space+=4.25")
                    //dollars
                    .add(rainingMoney(), "space+=10.3")
                ;

                return zoomOutSpaceTl;
            }

            function graph(){
                var graphTl = new TimelineMax();

                graphTl
                    .add("graph")
                    .set($("#ChartsFull #Chart6"), {scale:1.1, transformOrigin:"50% 50%"}, "graph+=0.01")
                    .set($(".chartShadowl"), {rotation:5, transformOrigin:"100% 100%"}, "graph+=0.01")
                    .set($(".chartShadowr"), {rotation:-5, transformOrigin:"0% 100%"}, "graph+=0.01")

                    .to($("#ChartsFull #Chart1"), 1.2, {drawSVG:"100% 0%", ease:Power2.easeInOut}, "graph")
                    .to($("#ChartsFull #Chart2"), 1.45, {drawSVG:"100% 0%", ease:Power2.easeInOut}, "graph")
                    .to($("#ChartsFull #Chart3"), 1.5, {drawSVG:"100% 0%", ease:Power2.easeInOut}, "graph")
                    .to($("#ChartsFull #Chart4"), 1.7, {drawSVG:"100% 77.54%", ease:Power2.easeInOut}, "graph")
                    .to($("#ChartsFull #Chart5"), 1.9, {drawSVG:"100% 0%", ease:Power2.easeInOut}, "graph")

                    .to($(".chartShadow"), 1, {autoAlpha:0.3}, "graph+=1.5")

                    .set($("#ChartsFull #Chart5_2, #ChartsFull #Chart3_2, #ChartsFull #Chart2_2, #ChartsFull #Chart1_2"), {autoAlpha:1}, "graph+=1.95")
                    .set($("#ChartsFull #Chart5, #ChartsFull #Chart3, #ChartsFull #Chart2, #ChartsFull #Chart1"), {autoAlpha:0}, "graph+=2")

                    .to($("#ChartsFull #Chart4"), 1, {scale:1.1, transformOrigin:"50% 50%", ease:Power1.easeInOut}, "graph+=2.8")
                    .to($(".chartShadowl, .chartShadowr"), 0.8, {autoAlpha:0.3, ease:Power1.easeInOut, rotation:0}, "graph+=2.8")

                    .to($("#ChartsFull #Chart6"), 2.5, {drawSVG:"100% 0%", ease:Power2.easeInOut}, "graph+=4.5")
                    .to($("#ChartsFull #Chart5_2"), 2.25, {drawSVG:"0% 0%", ease:Power2.easeInOut}, "graph+=4.8")
                    .to($("#ChartsFull #Chart1_2"), 1.98, {drawSVG:"0% 0%", ease:Power2.easeInOut}, "graph+=4.8")
                    .to($("#ChartsFull #Chart2_2"), 2.05, {drawSVG:"0% 0%", ease:Power2.easeInOut}, "graph+=4.8")
                    .to($("#ChartsFull #Chart3_2"), 2.1, {drawSVG:"0% 0%", ease:Power2.easeInOut}, "graph+=4.8")

                    .to($(".chartShadow"), 1.5, {scale:1.04, transformOrigin:"100% 0%", ease:Power0.easeNone}, "graph+=5")
                    .staggerTo($("#dollars1 path"), 0.45, {scale:1.5, ease:Back.easeOut.config(1.7)}, 0.1, "graph+=5")

                    .to($("#sky"), 2, {fill:"#26344B"}, "graph")
                ;

                return graphTl;
            }

            function animm(elm){
                TweenLite.to(elm, 2, {scale:1.75})
                const tl = new TimelineMax({yoyo:true});

                tl.add("conf")
                    .to(elm,random(7,20),{x:random(-300,300), repeat:-1,yoyo:true,ease:Sine.easeInOut}, "conf")
                    .to(elm,Random(5)+1,{skewX:random(5,15), skewY:random(5,15), rotation:random(80, 270), repeat:-1, yoyo:true, ease:Sine.easeInOut}, "conf")
                    .to(elm,Random(1)+0.5,{opacity:0, repeat:-1, yoyo:true, ease:Sine.easeInOut}, "conf")
                ;
            }

            function moveConfetti(){
                $("#dollarsXplode g path").each(function(){
                    animm(this);
                });
                return "";
            }

            function fier(){
                var fierTl = new TimelineMax(),
                    confettiTl = new TimelineMax({onStart:()=>{updateProgress(16)}, onComplete:()=>{updateProgress(17)}});

                confettiTl
                    .add("confetti")
                    .to($("#dollarsXplode"), 20, {rotation:0.01, y:"+=2500", ease:Power0.easeNone}, "confetti+=0.9")
                ;

                $("#dollarsXplode g path").each(function(){
                    confettiTl.to($(this), 1, {x:random(-250,250), y:random(-600,100), transformOrigin:"50% 50%", ease:Power0.easeNone}, "confetti+=0.55")
                    confettiTl.to($(this), 0.4, {fill:"hsl(" + random(19,40) + ",75%,50%)", ease:Power0.easeNone}, "confetti+=0.4")
                });

                $("#dollars4 g path").each(function(){
                    confettiTl.to($(this), 4, {x:random(-250,250), y:random(-200,100), transformOrigin:"50% 50%", ease:Power0.easeNone}, "confetti+=0.05")
                });

                fierTl
                    .add("fier")
                    .to($("#spaceWave3"), 1, {fill:"#220342"}, "fier+=1")
                    .to([$("#ChartsFull"), $(".f13")], 2, {rotation:0.01, y:-2000, ease:Power1.easeIn}, "fier")
                    .to([$("#dollars1, #dollars2, #dollars3, #dollars4, #dollarsXplode")], 2, {y:-3300, ease:Power1.easeIn}, "fier")

                    .fromTo($text.text14, 1, {y:1000, autoAlpha:1}, {autoAlpha:1, y:fierOffset}, "fier+=1.4")
                    .to($(".callToAction, .love"), 1, {autoAlpha:1, y:0}, "fier+=1.4")

                    .add(confettiTl, "fier+=1.1")
                    .add(moveConfetti, "fier+=2.7")
                ;

                return fierTl;
            }

            function pause(){
                Session.set("animationStatus", "paused");
                Session.set("animationStop", true);
            }

            function init(){
                mainTl
                    .add(clearStage())
                    .addPause()
                    //Pop guy
                    .add(step1(), "step1")
                    .addPause("step1+=13.7", pause)
                    .addPause("+=25.53", pause)
                    .addPause("+=17.5", pause)
                    //Text 1
                    .add(text1("2.5"), "step1+=0.35", "text1")
                    //Idea out
                    .add(headMorph(), "step1+=2.5", "headMorph")
                    .add(ideaOut(), "step1+=3", "ideaOut")
                    //ca c'est votre idée
                    .add(text2("1.5"), "step1+=3.5", "text2")
                    //Cloud
                    .add(zoomOutCloud(), "step1+=5.3", "zoomOutCloud")
                    .add(text3("2.8"), "step1+=5.4", "text3")
                    //Continent
                    .add(cloudMorph(), "step1+=8.5", "cloudMorph")
                    .add(text4("2"), "step1+=9", "text4")
                    //Earth
                    .add(zoomOutEarth(), "step1+=11.5", "zoomOutEarth")
                    .add(text5("4"), "step1+=11.8", "text5")
                    //part2
                    .add(cubeSpawn(), "step1+=16.5", "cubeSpawn")
                    .add(text6("2.9"), "step1+=17", "text6")
                    //Savoir faire (boxBlowup)
                    .add(skillsText(), "step1+=20.4", "text7")
                    .add(blowBox(), "step1+=20.5", "blowBox")
                    //Network
                    .add(network(), "step1+=22", "network")
                    //tools
                    .add(tools(), "step1+=28", "tools")
                    //savoir faire
                    .add(savoir(), "step1+=35", "savoir")
                    //C'est le truc qui nous allume
                    .add(text8("1.94"), "step1+=37.3", "text8")
                    //.addPause("-=0.5")
                    //Tree
                    .add(tree(), "step1+=39", "tree")
                    //Croitre
                    .add(text9("3"), "step1+=41.5", "text9")
                    //fruits
                    .add(zoomTree(), "step1+=42.5", "zoomTree")
                    //concentrez a faire ce que vous faites de mieux
                    .add(text10("3.5"), "step1+=45.5", "text10")
                    //plane
                    .add(plane(), "step1+=49.5", "plane")
                    //etre vu
                    .add(text11("3.3"), "step1+=50.5", "text11")
                    //ZoomOutSpace
                    .add(zoomOutSpace(), "step1+=53.7", "zoomOutSpace")
                    //historie de succes
                    .add(text12("3.5"), "step1+=54.7", "text12")
                    //graph
                    .add(graph(), "step1+=58", "graph")
                    //resultat concrets mesurables
                    .add(text13(), "step1+=59.5", "text13")
                    //c'est ca qui nous rend fier
                    .add(fier(), "step1+=64", "final")
                ;
            }
            init();
            //mainTl.timeScale(0.3);
    }

    componentDidMount() {
        if(Meteor.isClient){

            this.animation();
        }

    }

    componentWillUnmount() {
        if(Meteor.isClient){

            mainTl.stop();
            mainTl.seek(0);
        }
    }

    render() {

        return(
            <div className="objectsContainer">
                <svg xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="anim" ref='svg' x="0px" y="0px" viewBox="0 0 1788 867" enableBackground="new 0 0 1788 867" className='svg fromH' >
                    <g id="Cloud">
                        <path id="earthShadow" fill="#1C353D" d="M750,800.6c0-8.6,62.8-15.6,140.2-15.6s140.2,7,140.2,15.6s-62.8,15.6-140.2,15.6
                            S750,809.3,750,800.6z"/>
                        <path id="earth" fill="#007E9B" d="M1088.1,490.8c0,109.2-88.5,197.7-197.7,197.7c-5.8,0-11.5-0.2-17.2-0.7
                            c-101.2-8.7-180.5-93.6-180.5-197s79.4-188.3,180.5-197c5.7-0.5,11.4-0.7,17.2-0.7C999.6,293.1,1088.1,381.6,1088.1,490.8z"/>
                        <path id="Cloud_1_" fill="#FBEDD6" d="M1248.2,591c0,7.2-0.8,14.2-2.3,21c-4.5,20.8-15.7,39-31.2,52.5c-0.1,0.1-0.2,0.2-0.3,0.3
                            c-14.6,12.6-33.4,19.5-52.7,19.6l-273.3,2.1l-273.3-2.1c-19.3-0.2-38.1-7-52.7-19.6c-0.1-0.1-0.2-0.2-0.3-0.3
                            c-15.5-13.5-26.6-31.8-31.2-52.5c-1.5-6.8-2.3-13.8-2.3-21c0-13,2.5-25.4,7.2-36.8c7.2-15.1,17.5-28.5,29.8-39.5
                            c16.2-14.6,36.1-25,58.3-29.5c-3.3-8.5-5.1-17.8-5.1-27.5c0-39.8,30.4-72.5,69.3-76c2.3-0.2,4.6-0.3,7-0.3
                            c14.3,0,27.8,3.9,39.2,10.8c0.6-2.3,1.4-4.5,2.1-6.7c14.7-44.8,56.8-77.2,106.5-77.2c38.2,0,71.9,19.1,92.2,48.3
                            c3.4,4.8,6.3,9.9,8.9,15.3c4.1-2.8,8.4-5.4,12.8-7.8c17.4-9.2,37.2-14.4,58.2-14.4c68.8,0,124.6,55.8,124.6,124.6
                            c0,3-0.1,5.9-0.3,8.8c4.7,0.4,9.2,1.1,13.7,2c22.3,4.5,42.1,14.9,58.4,29.6c12.3,11,22.3,24.5,29.5,39.5
                            C1245.7,565.6,1248.2,578,1248.2,591z"/>
                        <g id="fakeClouds">
                            <path id="fakeCloud2" fill="#FBEDD6" d="M1095.5,649.4c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1
                                C1093.2,644.4,1095.5,646.7,1095.5,649.4z"/>
                            <path id="fakeCloud1" fill="#FBEDD6" d="M1100,649.5c0,5.2-3.1,9.5-7,9.5s-7-4.3-7-9.5s3.1-9.5,7-9.5S1100,644.3,1100,649.5z"/>
                            <path id="fakeCloud3" fill="#FBEDD6" d="M1000.6,377c0,5.7-7.7,10.3-17.1,10.3s-17.1-4.6-17.1-10.3s7.7-10.3,17.1-10.3
                                S1000.6,371.3,1000.6,377z"/>
                            <path id="fakeCloud4" fill="#FBEDD6" d="M1035,388c0,4.4-10.6,8-23.7,8s-23.7-3.6-23.7-8s10.6-8,23.7-8S1035,383.6,1035,388z"/>
                            <path id="fakeCloud5" fill="#FBEDD6" d="M894,347.7c0,6.1-15.9,11-35.5,11s-35.5-4.9-35.5-11s15.9-11,35.5-11S894,341.6,894,347.7
                                z"/>
                            <path id="fakeCloud6" fill="#FBEDD6" d="M987.7,381c0,3.9-2.8,7-6.3,7s-6.3-3.1-6.3-7s2.8-7,6.3-7S987.7,377.1,987.7,381z"/>
                            <path id="fakeCloud7" fill="#FBEDD6" d="M883.3,331.8c0,4-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2s3.2-7.2,7.2-7.2
                                C880.1,324.7,883.3,327.9,883.3,331.8z"/>
                            <path id="fakeCloud8" fill="#FBEDD6" d="M1004.1,366.9c0,4.5-3.7,8.2-8.2,8.2s-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2
                                S1004.1,362.3,1004.1,366.9z"/>
                            <path id="fakeCloud9" fill="#FBEDD6" d="M920,354.7c0,7.9-6.4,14.3-14.3,14.3s-14.3-6.4-14.3-14.3s6.4-14.3,14.3-14.3
                                S920,346.8,920,354.7z"/>
                            <path fill="#71545A" d="M1916.9-137.1c7,0,7-10.9,0-10.9C1909.8-148,1909.8-137.1,1916.9-137.1L1916.9-137.1z"/>

                            <path id="fakeCloud10" clipPath="url(#SVGID_2_)" fill="#FBEDD6" d="M1074.3,392c0,11.8-24.5,21.3-54.7,21.3S965,403.8,965,392
                                    s24.5-21.3,54.7-21.3S1074.3,380.2,1074.3,392z"/>

                        </g>
                    </g>

                    <defs>
                        <clipPath id="SVGID_2_">
                            <circle id="SVGID_1_" fill="#007E9B" cx="890.4" cy="490.8" r="197.7"/>
                        </clipPath>
                    </defs>
                    <g id="Continent" clipPath="url(#SVGID_2_)">
                        <g id="grounders">
                            <path id="miniGround10" fill="#71545A" d="M1119.6,76h91.4c1,0,1.9,0.4,2.4,1.3l5.9,10.6c1,1.8-0.3,4.1-2.4,4.1h-4.6
                                c-0.7,0-1.3,0.2-1.9,0.7l-19.7,17.8c-0.5,0.5-1.2,0.6-1.9,0.6h-12.6c-0.6,0-1.3,0.3-1.8,0.8l-9.8,8.4c-0.5,0.4-1.1,0.9-1.8,0.9
                                h-25.9c-1.6,0-2.8,1.1-2.8,2.7l0.7,17.6c0.1,1.6-1.2,2.6-2.8,2.6h-24.1c-1.5,0-3.2,1.5-3.2,3V169c0,1.5-0.8,3.1-2.4,3.1h-48.8
                                c-1.5,0-2.8-1.6-2.8-3.1v-7c0-1,0.6-1.9,1.4-2.4l20.6-12.3c1.4-0.8,1.8-2.7,0.8-4l-3.7-5.1c-0.7-0.9-1.8-1.3-2.9-1l-14.9,3.5
                                c-0.8,0.2-1.6,0-2.3-0.5l-4.2-3.1c-1.1-0.8-2.5-0.7-3.5,0.2l-6.6,6c-1.2,1.1-3,0.9-4-0.3l-15-18.5c-0.4-0.5-0.9-0.8-1.5-0.9
                                l-8.1-2c-1.8-0.4-2.7-2.5-1.7-4.1l12.5-20c0.6-1,1.9-1.5,3.1-1.2l9.8,2.8c1.7,0.5,2.5,2.4,1.7,4l0,0c-1,1.8,0.4,4.1,2.4,4.1h5.7
                                c2.5,0,3.7-3,2-4.7l-1.2-1.2c-1.6-1.6-0.7-4.4,1.6-4.7l30.7-3.8c1.2-0.1,2.1-1,2.4-2.1l1-4.4c0.3-1.3,1.4-2.1,2.7-2.1h31.3
                                c0.9,0,1.7-0.5,2.3-1.2l4-5.6C1117.8,76.4,1118.7,76,1119.6,76z"/>
                            <path id="miniGround9" fill="#71545A" d="M952.9,120.7L952.9,120.7c1.7,0,3.1,1.3,3.1,2.8v3.8c0,1.6,1,2.7,2.5,2.7h18.9
                                c1.6,0,2.6,1.4,2.6,2.9v15.3c0,2.1-2.1,3.5-3.9,2.5l-26.5-13.1c-1.1-0.6-1.7-1.8-1.5-3l2.1-11.6
                                C950.3,121.7,951.5,120.7,952.9,120.7z"/>
                            <path id="miniGround8" fill="#71545A" d="M1004.7,159.2l2.7-4.4c0.7-1.2,2.1-1.9,3.5-1.9h0.2c2.3,0,3.9,1.6,3.9,3.9v9.6
                                c0,1.7-0.9,3.2-2.5,3.8h0.1c-1.9,0.8-4.1,0-5.1-1.8l-2.9-5.2C1003.8,162.1,1003.9,160.5,1004.7,159.2z"/>
                            <path id="miniGround7" fill="#71545A" d="M910.1,137.2l5,0.9c2.1,0.4,3.1,2.8,1.8,4.5l-5.7,7.8c-0.9,1.3-2.8,1.6-4.1,0.6l-1-0.7
                                c-0.9-0.7-1.3-1.8-1.1-2.9l1.7-7.9C907.1,137.9,908.6,136.9,910.1,137.2z"/>
                            <path id="miniGround6" fill="#71545A" d="M975.4,167h9c1.2,0,2.3,0.6,2.9,1.7l5.5,8.7c0.7,1.1,0.7,2.4,0.1,3.5l-1.2,2.3
                                c-0.6,1.1-1.8,1.8-3.1,1.8h-4c-1.9,0-3.4-1.5-3.5-3.4V181c-0.1-1.9-1.6-3.1-3.5-3.1H975c-2,0-3.6-2-3.5-4l0.3-3.6
                                C972.1,168.5,973.6,167,975.4,167z"/>
                            <path id="miniGround5" fill="#71545A" d="M841,157.9c1.9-0.1,3.9-0.3,5.5-0.4c1.5-0.1,2.8-0.9,3.5-2.2l3.3-5.3
                                c0.8-1.4,2.3-2,3.9-2h11.4c2.5,0,4.5,1.6,4.5,4.1v6c0,1.6,0.8,3,2.2,3.9l12.3,7.4c1.2,0.8,2.8,0.9,4.1,0.3l2.5-1.1
                                c2-0.9,4.4-0.2,5.6,1.7l2.4,3.7c0.8,1.3,2.3,2,3.8,2h3.4c1.7,0,3.3-1,4-2.5l4.9-10c0.8-1.5,2.3-2.5,4-2.5h2.7
                                c1.8,0,3.3,1,4.1,2.6l6.5,14.1c0.4,0.8,0.5,1.7,0.4,2.6l-0.1,0.9c-0.3,2.2-2.2,3.9-4.5,3.9h-11.2c-1.5,0-3,0.8-3.8,2.1l-1.4,2
                                c-0.8,1.3-2.3,1.9-3.8,1.9h-12.1c-2.5,0-4.1-1.7-4.1-4.2v-3.5c0-2.8-2.8-5-5.6-4.4l-9.8,1.9c-1.8,0.4-3.7-0.4-4.7-2l-9.4-14.7
                                c-0.8-1.3-2.3-2.2-3.8-2.2h-1c-1.5,0-2.8,0.8-3.7,2l-3.3,4.9c-0.8,1.2-2.2,2.1-3.7,2.1h-8.3c-2.3,0-4.3-1.9-4.5-4.2l-0.4-3.9
                                C836.6,160.4,838.4,158.1,841,157.9z"/>
                            <path id="miniGround4" fill="#71545A" d="M1025.5,175.1l6.3,6.5c0.7,0.7,1.1,1.7,1.1,2.7v3c0,2.2,1.7,3.6,3.8,3.6h71.8
                                c2.2,0,3.9-1.6,3.9-3.7v0.1c0-2.1-1.6-3.8-3.7-3.9l-50.6-2.4c-1.3-0.1-2.5-0.7-3.1-1.9l-2.2-3.5c-0.7-1.2-2-1.8-3.3-1.8h-6.2
                                c-1.8,0-3.3-1.3-3.8-3l-1-3.6c-0.3-1.2-1.2-2.2-2.3-2.6l-5.6-2.2c-2.4-0.9-5,0.6-5.3,3.1l-0.9,6.3
                                C1024.3,173.1,1024.7,174.3,1025.5,175.1z"/>
                            <path id="miniGround3" fill="#71545A" d="M969.3,204.2l4.2-0.4c1.1-0.1,2-0.7,2.5-1.7l2.3-4c1-1.8,3.4-2.2,5-0.9l16.1,12.9
                                c1.9,1.5,1.6,4.5-0.6,5.6l-1.8,0.9c-0.6,0.3-1.1,0.8-1.4,1.4l-4.8,9.1c-0.6,1.1-1.7,1.9-2.9,1.9H986c-1.8,0-2.9-1.8-2.9-3.6
                                v-11.2c0-1.8-1.9-3.1-3.7-3.1h-9.6c-1.5,0-2.7-1-3.2-2.4v-0.1C965.9,206.5,967.2,204.4,969.3,204.2z"/>
                            <path id="miniGround2" fill="#71545A" d="M1152,713.8v3.1c0,1-0.3,1.8-1.2,2.3l-7.2,3.9c-1.8,0.9-1.8,3.5-0.1,4.5l4.7,2.9
                                c0.4,0.2,0.9,0.5,1.3,0.5h12.6c0.5,0,1.1-0.3,1.5-0.6l6-4.3c0.7-0.5,1.2-1.3,1.2-2.2v-5.3c0-0.9-0.7-1.8-1.5-2.2l-8.6-4.9
                                c-0.4-0.2-0.9-0.4-1.3-0.4h-4.6C1153.6,711,1152,712.4,1152,713.8z"/>
                            <path id="miniGround1" fill="#71545A" d="M1095.9,679.3l9.5,1.7c1,0.2,1.7,0.9,2,1.8l2.4,8.4c0.1,0.5,0.4,0.9,0.8,1.3l7.8,6.5
                                c0.2,0.2,0.4,0.3,0.6,0.4l11.5,5c0.9,0.4,1.6,1.3,1.6,2.3v2c0,1.4-1.2,2.3-2.6,2.3H1117c-0.8,0-1.5-0.2-2-0.8l-6.4-8
                                c-0.4-0.4-0.5-1-0.5-1.5v-4c0-0.9-0.6-1.8-1.4-2.2l-4.7-2.5c-0.3-0.2-0.7-0.3-1.1-0.3l-6.2-0.2c-1.5-0.1-2.6-1.4-2.4-2.9l0.9-7
                                C1093.1,680,1094.5,679,1095.9,679.3z"/>
                            <path id="ground" fill="#71545A" d="M817.4,203.9l18.4-17.4c0.4-0.3,0.8-0.5,1.3-0.5h30.5c0.6,0,1.2,0.3,1.5,0.8l4.9,6.8
                                c0.5,0.6,0.5,1.5,0,2.2l-3.1,4.5c-0.8,1.3,0.1,2.8,1.6,2.8h45.7c0.8,0,1.6,0.7,1.8,1.5l3.1,10.3c0.2,0.8,1,1.2,1.8,1.2h2
                                c0.6,0,1.2-0.1,1.6-0.6l11.5-17.6c0.3-0.5,0.9-0.8,1.6-0.8h4.3c1,0,2.2,1,2.2,2v14.3c0,0.5,0,1,0.4,1.3l16.2,16.3
                                c0.4,0.4,0.4,0.8,0.4,1.3v18.4c0,0.5-0.2,1-0.5,1.3l-2.9,3.2c-0.4,0.4-0.8,0.8-1.3,0.8h-3.7c-0.5,0-1-0.4-1.3-0.8l-2.6-2.6
                                c-0.4-0.4-0.8-0.6-1.3-0.6h-25.6c-0.6,0-1.1,0.2-1.4,0.6l-8.9,10.6c-0.6,0.8-1.7,0.9-2.5,0.3l-11.6-8.2c-0.3-0.2-0.7-0.3-1.1-0.4
                                l-9.8-0.2c-0.5,0-0.9,0.2-1.3,0.5l-9.5,8.6c-0.5,0.4-0.7,1.1-0.6,1.7l0.5,2.9c0.1,0.9,0.9,1.6,1.9,1.6h15.1
                                c0.9,0,1.6-0.6,1.8-1.5l0.9-3.6c0.2-0.9,1.1-1.6,2.1-1.4l2.9,0.4c0.5,0.1,0.9,0.3,1.2,0.7l8.3,10.1c0.7,0.9,2,0.9,2.8,0.1
                                l11.5-11.3c0.3-0.3,0.8-0.5,1.3-0.5l20.1-0.5c0.5,0,0.9-0.2,1.3-0.5l3.5-3.4c0.5-0.4,1.1-0.6,1.7-0.5l4.1,0.9
                                c0.5,0.1,0.9,0.4,1.2,0.9l6.1,9.9c0.4,0.6,1,0.9,1.7,0.9l1.3-0.1c0.8,0,1.4-0.5,1.7-1.3l2.1-5.9c0.3-0.8,1-1.2,1.8-1.2h15.8
                                c1.3,0,2.2-1.3,1.8-2.5v-0.1c-0.2-0.8-0.9-1.4-1.7-1.4l-3.7-0.2c-1.5-0.1-2.3-1.8-1.5-3l4.9-7c0.4-0.5,0.9-0.9,1.5-0.9h5.6
                                c0.6,0,1.2,0.4,1.6,0.9l2.9,4.7c0.2,0.3,0.1,0.7,0.1,1.1v8c0,1.1,1.1,1.9,2.1,1.9l5.2-0.1c0.5,0,1.1-0.3,1.5-0.7l5.5-6.6
                                c0.8-1,0.8-2.5,0-3.5l-10.8-12.6c-0.4-0.5-0.5-1.1-0.5-1.8v-34.7c0-0.9,0.3-1.8,1-2.3l11.1-7.1c0.4-0.3,0.9-0.2,1.4-0.2h11.4
                                c0.7,0,1.4,0.1,1.9,0.6l4.4,4.4c0.5,0.5,0.8,1.1,0.8,1.8v3.2c0,1.1-0.7,2.1-1.7,2.5l-17.6,6.8c-1,0.4-1.7,1.4-1.7,2.5v2.3
                                c0,1.3,0.9,2.4,2.2,2.7l0,0c1.2,0.2,2.1,1.2,2.2,2.4l1.1,9.8c0.1,0.6,0.3,1.2,0.8,1.6l8,8c0.5,0.5,0.8,1.1,0.8,1.8l0.2,3.4
                                c0.1,1.4,1.3,2.3,2.7,2.3h15.7c1.1,0,2.1,0.8,2.6,1.8l4.9,9.4c0.5,1,1.5,1.8,2.6,1.8h5.1c0.9,0,1.8-0.6,2.4-1.3l8.1-10.7
                                c0.4-0.5,0.8-1.2,0.8-1.8v-4.2c0-1-0.6-1.9-1.4-2.4l-23.3-16.3c-0.8-0.6-1.3-1.4-1.3-2.4v-18.7c0-0.7,0.2-1.3,0.7-1.9l4.1-5.1
                                c0.6-0.7,1.4-1.2,2.3-1.2h2c1.6,0,2.9,1.3,2.9,2.9l0.1,3.3c0.1,1.6,1.4,2.8,2.9,2.8h1.8c1.6,0,3,1.4,2.9,3.1l-0.1,7.9
                                c0,1.6,1.3,3,2.9,3h1.7c1.6,0,2.7-1.3,2.7-2.9v-10.2c0-1.4,1.1-2.6,2.5-2.9l1.7-0.3c1.4-0.3,2.4-1.5,2.4-2.9l0,0
                                c0-1.6,1.3-2.9,2.9-2.9l4.7-0.1c1.2,0,2.3,0.7,2.8,1.8l1,2.5c0.5,1.1,1.5,2,2.7,2h20.3c0.7,0,1.4,0.1,2,0.6l22,18
                                c0.6,0.5,1.3,0.5,2,0.5h25.3c1.1,0,2.1,0.7,2.6,1.6l7.7,12.4c0.3,0.5,0.5,1.1,0.5,1.7v16.4c0,1.1-0.6,2-1.5,2.6l-5.5,3.5
                                c-0.9,0.6-1.4,1.5-1.4,2.6l0,0c0,1.7,1.4,3.1,3.1,3.1h6.9c0.3,0,0.5,0,0.8,0.1l14.6,4c1.1,0.3,2,1.2,2.2,2.4l0.1,0.5
                                c0.3,1.3,1.3,2.3,2.7,2.5l12.2,1.5c1.8,0.2,3,1.8,2.7,3.6l-1.4,8.2c-0.1,0.6-0.4,1.2-0.9,1.7l-15.7,15.5c-1.2,1.2-3.2,1.2-4.4,0
                                l-12.2-12.3c-1.4-1.4-3.7-1.2-4.8,0.4l-0.5,0.8c-0.8,1.2-0.7,2.9,0.4,3.9l15.6,15.5c1.1,1.1,1.2,3,0.2,4.2l-5.2,6.3
                                c-0.6,0.7-1.4,1.3-2.4,1.3h-13.3l-1.2,8.9c-0.2,1.7-1.8,2.8-3.5,2.6l-3.1-0.5c-0.7-0.1-1.4-0.5-1.8-1l-26.9-29.8
                                c-0.5-0.6-1.3-1-2.1-1l-18.3-1c-1.8-0.1-3.1-1.6-2.9-3.4l0.3-2.9c0.2-1.6,1.4-2.8,3-2.8l13-0.3c1.4,0,2.5-0.9,2.9-2.2l9.1-32.4
                                c0.4-1.4-0.2-2.9-1.5-3.6l-41.3-21.8c-0.9-0.5-2-0.5-2.9,0.1l-11.3,6.6c-0.8,0.5-1.4,1.3-1.5,2.3l-0.3,3.5
                                c-0.1,1,0.3,1.9,1.1,2.5l2.6,2.1c0.5,0.4,1.1,0.6,1.7,0.7l8.6,0.3c1.8,0.1,3.2,1.8,2.7,3.6l-0.6,2.5c-0.3,1.3-1.5,2.1-2.9,2.1
                                h-4.8c-0.9,0-1.8,0.7-2.4,1.4l-21.6,30.2c-0.9,1.2-0.6,3,0.6,3.9l16.3,11.9c0.5,0.4,1.1,0.5,1.7,0.5h3.6c2.3,0,3.6,2.6,2.3,4.5
                                l-1.1,1.6c-0.5,0.7-1.3,1.2-2.1,1.2l-33.3,2.2c-1.6,0.1-2.8-1.2-2.8-2.8v-18.2c0-1.5-1.4-2.8-3-2.8l-3.9-0.1
                                c-1.4,0-2.7,1-2.9,2.4l-1.1,6.8c-0.2,1.2-1.2,2.2-2.5,2.4l-8.7,1c-0.9,0.1-1.6,0.6-2.1,1.4l-8.4,14.1c-0.3,0.5-0.8,0.9-1.3,1.2
                                l-10.4,4.4c-0.9,0.4-1.5,1.2-1.7,2.2l-1.8,11.2c-0.1,0.4-0.2,0.9-0.5,1.2l-10.3,14.1c-0.4,0.6-0.6,1.3-0.5,2.1l0.2,1.3
                                c0.2,1.3,1.2,2.2,2.5,2.4l7.4,0.8c0.9,0.1,1.8,0.7,2.2,1.5l6,11.8c0.5,0.9,1.3,1.5,2.3,1.5l21.6,1.2c0.9,0,1.7,0.5,2.2,1.2
                                l13.4,19.6c0.4,0.6,1.1,1.1,1.9,1.2l7.3,1.3c0.1,0,0.3,0.1,0.5,0.1h11.9c1,0,2,0.5,2.5,1.4l5.6,10.4c0.2,0.4,0.3,0.9,0.3,1.4
                                l-0.4,12.6c0,1,0.5,1.8,1.3,2.3l6.9,3.8c0.4,0.2,0.8,0.2,1.3,0.2h4.6c1.4,0,2.5-0.9,2.6-2.3l0.6-21.8c0-0.7,0.3-1.3,0.8-1.8
                                l14-14.3c0.5-0.5,0.8-1.2,0.8-1.9v-18.2c0-1.3-0.9-2.4-2.2-2.7l-8.5-2c-1.3-0.3-2.1-1.4-2.2-2.7l-0.1-8.3c0-1.3,0.9-2.4,2.1-2.8
                                l2.9-0.7c1.2-0.3,2.1-1.4,2.1-2.6l0.6-21.8c0-0.9,0.5-1.7,1.2-2.2l3.9-2.9c0.5-0.4,1.1-0.6,1.8-0.5l4.1,0.2
                                c1.3,0.1,2.4,1.1,2.6,2.4l0.7,4.9c0.2,1.4,1.4,2.2,2.8,2.2h16.7c1.1,0,2.1,0.8,2.5,1.7l1.7,3.6c0.4,0.9,1.4,1.6,2.4,1.6l8,0.4
                                c1.3,0.1,2.4,1,2.6,2.3l3.7,20.5c0.2,1,0.8,1.8,1.7,2.1l4.6,1.8c1.2,0.5,2.6,0,3.3-1l9.6-14.1c0.5-0.8,1.4-1.2,2.3-1.2l12.1,0.1
                                c1.3,0,2.5,1,2.7,2.3l4,21c0.1,0.4,0.3,0.8,0.5,1.2l25.6,33.8c0.5,0.6,1.2,1,1.9,1l10.4,0.6c0.7,0,1.4,0.4,1.9,1l5.9,7.6
                                c0.7,0.9,0.7,2.2,0,3.1l-19.1,25.8c-0.5,0.7-1.3,0.8-2.1,0.8h-28.7c-0.3,0-0.6,0.3-0.9,0.4l-22.7,8.7c-1,0.4-1.7,1.4-1.7,2.5
                                l0.1,7.7c0,1.4,1.2,2.7,2.6,2.7h4.2c0.7,0,1.3-0.4,1.8-0.9l5.2-5.2c0.5-0.5,1.1-0.9,1.8-0.9h9.2c1.4,0,2.6,1.2,2.6,2.6l0.2,11.7
                                c0,1.4,1.2,2.7,2.6,2.7h8.4c1.7,0,3,1.6,2.5,3.2v0.3c-0.5,1.7,0.8,3.5,2.5,3.5h6.5c2.2,0,3.4,2.4,1.9,4.1l-14.1,15.3
                                c-0.5,0.5-1.2,0.6-1.9,0.6h-18c-1.1,0-2-0.5-2.4-1.5l-6.5-15.9c-0.4-0.9-1.3-1.5-2.3-1.6l0,0c-1.5-0.1-2.7,1.2-2.7,2.7l0.4,14.6
                                c0,0.6,0.2,1.1,0.6,1.5l8.6,10.7c0.8,1.1,0.7,2.6-0.3,3.5l-3.1,2.9c-0.9,0.9-2.4,0.9-3.4,0.1l-14.4-11.7
                                c-1.1-0.9-2.7-0.7-3.6,0.3l-6.6,7.6c-0.4,0.4-0.6,1-0.6,1.6l-0.2,2.8c-0.1,1.4-1.2,2.4-2.6,2.4h-10.2c-0.9,0-1.7,0.5-2.1,1.2
                                l-4.7,6.9c-0.3,0.4-0.4,0.9-0.4,1.4l-0.5,15.5c0,0.8-0.4,1.6-0.9,2.1l-9.9,9.6c-0.6,0.6-1,1.5-0.9,2.4l0.9,15.5
                                c0.1,1.3-0.6,2.4-1.7,3l-11.8,5.8c-0.8,0.4-1.4,1.1-1.6,1.9l-8.5,27.3c-0.1,0.3-0.1,0.6-0.1,0.9l-0.3,21.8c0,0.7,0.2,1.4,0.7,2
                                l4.2,5.4c0.5,0.6,0.7,1.5,0.6,2.3l-1,8.5c-0.2,1.6-1.5,2.5-3.1,2.5h-7.9c-0.9,0-1.7-0.1-2.3-0.8l-10.3-11.1
                                c-0.4-0.4-0.7-0.9-0.8-1.5l-2.2-13.2c-0.2-1-0.8-1.8-1.7-2.3l-24.1-11.7c-1.7-0.8-3.8,0.1-4.3,1.9l-1.5,4.9
                                c-0.4,1.3-1.6,2.2-2.9,2.2l-16.3,0.3c-0.3,0-0.7,0-1-0.1l-18.6-5.8c-1.1-0.4-2.4,0-3.2,0.8L993.6,643c-0.3,0.4-0.6,0.8-0.7,1.3
                                l-4.8,16.5c-0.1,0.3,0,0.6,0,0.9v38.4c0,0.8,0.1,1.6,0.5,2.2l9.3,14.4c0.4,0.6,0.9,1,1.5,1.4l8.8,4.6c0.6,0.3,1.2,0.4,1.9,0.4
                                h14.5c1.7,0,3.3-1,3.8-2.6l3.6-10.8c0.3-0.8,0.8-1.5,1.5-2l17.8-12.9c2.6-1.9,6.4-0.1,6.4,3.2l0.6,35.2c0,1,0.4,2.1,1.2,2.8
                                l4.8,4.8c0.8,0.8,1.3,2,1.2,3.2c-0.6,8.1-3.1,39.8-2.7,40.5c0.2,0.3,1.1,1.4,2.1,2.8c1.9,2.5,0.4,6.1-2.7,6.5l-7.7,1
                                c-1.1,0.1-2.2-0.2-3-0.8l-14-11.1c-0.9-0.7-1.5-1.8-1.5-3l-0.7-18c-0.1-2.2-1.8-3.9-4-3.9l-13.7-0.1c-1,0-2-0.4-2.8-1.1
                                l-18.2-17.4c-0.8-0.7-1.8-1.1-2.8-1.1H960c-2.2,0-3.9-1.9-3.9-4.1v-11.4c0-0.6-0.3-1.1-0.7-1.5L942.2,708
                                c-0.5-0.5-0.7-1.1-0.6-1.8l2.1-14.2c0.1-0.5,0-0.9-0.3-1.4L926,659.9c-0.1-0.1-0.2-0.3-0.3-0.4l-15.3-16.8
                                c-1.3-1.4-3.7-0.5-3.7,1.5l0.4,20v0.1l1.1,14.2c0.1,1.2-0.8,2.2-2.1,2.3l-3.2,0.1c-0.8,0-1.6-0.4-1.9-1.1L861.7,604
                                c-0.1-0.1-0.1-0.3-0.2-0.4l-31.8-41.9c-0.3-0.4-0.5-0.8-0.5-1.3l-5.2-46.6c0-0.1,0-0.2,0-0.3l-0.2-29.5c0-0.3,0-0.6,0.1-0.9
                                l5.9-16.9c0.6-1.7-0.6-3.5-2.4-3.5l-21.6-0.3c-1.4,0-2.8-1.2-2.8-2.6v-15.5c0-0.8-0.2-1.6-0.8-2.1l-13-10.4
                                c-0.3-0.2-0.4-0.4-0.6-0.7l-32.3-55c-1.3-2.2-4.2-2.6-6.1-0.9h0.2c-2.5,2.4-6.4,0.6-6.4-2.9v-6.7c0-2.1-1.9-3.9-4-4l-17.1-0.5
                                c-0.9,0-1.8-0.3-2.5-0.9L694.8,339c-0.7-0.6-1.6-0.9-2.5-0.9l-57.6-0.5c-1.4,0-2.7,0.7-3.4,1.9l-12,20c-0.9,1.5-0.7,3.5,0.6,4.8
                                l7.9,7.8c0.7,0.7,1.3,1.7,1.3,2.8v2.1c0,2.1-1.9,3.9-4,4l-7.2,0.2c-1.6,0-3.1-0.9-3.8-2.3l-3.5-7.8c-1-2.3-4-3.1-6-1.6l-2.4,1.8
                                c-0.8,0.6-1.3,1.5-1.5,2.5l-1.1,5.7c-0.3,1.9-2,3.2-3.8,3.2l-10.9,0.1c-1,0-2,0.4-2.8,1.2l-1.2,1.2c-2.3,2.3-6.4,0.9-6.7-2.3
                                l-0.1-0.7c-0.1-1.3,0.3-2.5,1.3-3.4l14.9-13.7c0.8-0.8,1.3-1.9,1.3-3l-0.1-3.3c0-1.1-0.5-2.2-1.4-2.9l-5.4-4.5
                                c-0.7-0.6-1.5-0.9-2.4-0.9l-3.4-0.2c-1.6-0.1-3.1-1.2-3.6-2.7l-2.5-7.5c-0.5-1.6-2-2.7-3.6-2.7l-13.3-0.4c-2-0.1-3.7-1.6-3.8-3.7
                                l-1-13.2c-0.1-1.5,0.6-2.8,1.8-3.6l16.6-10.6c1-0.6,1.7-1.7,1.8-2.9l0.5-3.7c0.3-2.4-1.6-4.5-4-4.4l-22.8,0.3
                                c-1.5,0-2.9-0.8-3.6-2.1l-6.7-12.9c-1.4-2.6,0.5-5.7,3.5-5.8l23.2-0.3c3.5,0,5.2-4.3,2.7-6.8l-3.5-3.5c-0.9-0.9-1.1-2.4-0.4-3.4
                                l20.3-30.9c0.4-0.6,1-1,1.7-1.2l16.4-3.8c0.2,0,0.4-0.1,0.6-0.1l28.3-0.3c0.5,0,1.1,0.1,1.5,0.4l2.5,1.6c0.4,0.3,0.9,0.4,1.4,0.4
                                l47.5,0.3c1.2,0,2.2,0.8,2.6,1.9l0.8,2.6c0.3,1.1,1.3,1.9,2.5,1.9l7.3,0.3c1.2,0.1,2.2,0.9,2.5,2l0,0c0.3,1.2,1.4,2,2.6,2
                                l20.6,0.3c0.7,0,1.4,0.3,1.9,0.8l7.5,7.2c0.5,0.5,1.2,0.8,1.9,0.8l17.2,0.2c1,0,1.8,0.7,1.9,1.7l0.4,3.2c0.1,0.9,0.9,1.7,1.8,1.7
                                l9.9,0.3c0.5,0,1-0.2,1.4-0.6l11.6-11.7c1-1,2.6-0.6,3.1,0.6l1.5,3.7c0.3,0.7,1,1.2,1.7,1.2l8.7,0.1c0.5,0,0.9-0.1,1.2-0.4l8.5-7
                                c0.4-0.4,0.8-0.9,0.8-1.5V234c0-1.2,1-2.1,2.2-1.8l23.7,6.2c0.7,0.2,1.2,0.7,1.3,1.4l0.6,2.6c0.2,0.9,1,1.5,1.9,1.4l19.1-0.3
                                c0.2,0,0.4,0,0.6,0.1l10.9,3.7c0.5,0.2,0.9,0.5,1.1,1l1.8,4.1c0.3,0.7,1,1.2,1.8,1.1l7-0.3c0.8,0,1.4-0.5,1.7-1.2l4.7-12.7
                                c0.2-0.6,0.8-1.1,1.5-1.2l8.1-1.4c1.1-0.2,1.8-1.4,1.5-2.5L887,226c-0.2-0.7-0.9-1.2-1.7-1.3l-12.9-0.6c-0.6,0-1.2-0.4-1.5-0.9
                                l-9.9-17.3c-0.3-0.6-1-0.9-1.6-0.9h-8.7c-1,0-1.9,0.8-1.9,1.8l-0.1,9.3c0,1-0.9,1.9-1.9,1.9l-16.3-0.2c-0.5,0-0.9-0.2-1.3-0.5
                                l-11.3-10.7C816.7,205.9,816.7,204.7,817.4,203.9z"/>
                        </g>
                    </g>

                    <path id="earthShade" opacity="0.68" fill="#004E56" enableBackground="new    " d="M785.2,351h0.5c-9,8.7-22.3,25.1-28.3,34.6
                        C738,416,727,452.2,727,490.8c0,103.4,79.4,188.3,180.5,197c-5.7,0.5-11.4,0.7-17.2,0.7c-109.2,0-197.7-88.5-197.7-197.7
                        s88.5-197.7,197.7-197.7c5.8,0,11.5,0.6,17.2,1.1c-47.4,4.1-90,24.8-121.9,56.8"/>
                    <g id="MainIdeaFull">
                        <path id="mainIdeaShadow" fill="#EDE1CE" d="M1056.4,741.1c0-1.6,11.9-3,26.7-3c14.7,0,26.7,1.3,26.7,3c0,1.6-11.9,3-26.7,3
                            S1056.4,742.8,1056.4,741.1z"/>
                        <g id="rubanRight">
                            <path fill="#B73D37" d="M998,521.6l-7.9,10.6L979,480.9l5-1.1l1.6-0.3L998,521.6z"/>
                            <path fill="#E55648" d="M1010.4,524.7l-12.5-3.1l-12.5-42.1l6.3-1.3L1010.4,524.7z"/>
                        </g>
                        <g id="rubanLeft">
                            <path fill="#B73D37" d="M979.4,480.1l-11.7,41.6l-12.4,5.6l17.9-49.4l4.8,1.7L979.4,480.1z"/>
                            <path fill="#E55648" d="M985.5,482.4l-8.9,49.3l-8.9-10l11.7-41.6L985.5,482.4z"/>
                        </g>
                        <g id="idea_2_">
                            <path id="idea_1_" fill="#F6CD99" d="M954.6,403c0,5.8-4.7,10.4-10.4,10.4c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5,0s-0.3,0-0.5,0l0,0
                                c-1.1-0.1-3.3,0.1-4.4,0.1c-2.2-0.1-7.9,1.8-8.9,0.3c-1.2-1.7,2.2-7.8,3.1-10.3c1.8-5,5.1-10.1,10.2-10.8l0,0
                                c0.2,0,0.3-0.1,0.5-0.1s0.3,0,0.5,0s0.3,0,0.5,0C949.9,392.6,954.6,397.3,954.6,403z"/>
                            <path id="ideaShadow_1_" fill="#F6CD99" d="M945.7,392.7L945.7,392.7L945.7,392.7c-5.2,0.7-8.7,5.2-9.9,10.3
                                c-0.4,1.7-2.6,5.8-2,7.1c0.5,1.2,3.6,1.3,4.7,1.4c2.1,0.3,4.9,1.5,7.1,1.8c-0.4,0.1-0.9,0.1-1.4,0.1c-0.2,0-0.3,0-0.5,0
                                s-0.3,0-0.5,0s-0.3,0-0.5,0l0,0c-1.5-0.2-5.2,0.1-6.6,0.4c-1.4,0.3-5.8,1.3-6.6,0c-1-1.6,2.5-8.4,3.1-10.3
                                c1.6-5,5.1-10.1,10.2-10.8l0,0c0.2,0,0.3-0.1,0.5-0.1s0.3,0,0.5,0s0.3,0,0.5,0C944.7,392.6,945.2,392.7,945.7,392.7z"/>
                        </g>
                        <g id="morphIdea">
                            <path id="idea_4_" fill="#FFCF03" d="M954.6,403c0,5.8-4.7,10.4-10.4,10.4c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5,0s-0.3,0-0.5,0l0,0
                                c-1.1-0.1-2.1-0.5-3-0.9c-1.6-0.8-3-2-4.1-3.5c-1.2-1.7-1.8-3.7-1.8-5.9c0-5.3,3.9-9.6,9-10.3l0,0c0.2,0,0.3-0.1,0.5-0.1
                                s0.3,0,0.5,0s0.3,0,0.5,0C949.9,392.6,954.6,397.3,954.6,403z"/>
                            <path id="ideaShadow_3_" fill="#DBB309" d="M945.7,392.7L945.7,392.7L945.7,392.7c-5.2,0.7-9.1,5.1-9.1,10.3c0,1.6,0.3,3,0.9,4.4
                                c0.5,1.2,1.3,2.2,2.2,3.1c1.5,1.5,3.5,2.5,5.7,2.8c-0.4,0.1-0.9,0.1-1.4,0.1c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5,0s-0.3,0-0.5,0l0,0
                                c-1.5-0.2-2.8-0.7-4.1-1.5s-2.4-1.9-3.2-3.2c-1-1.6-1.7-3.6-1.7-5.6c0-5.3,3.9-9.6,9-10.3l0,0c0.2,0,0.3-0.1,0.5-0.1s0.3,0,0.5,0
                                s0.3,0,0.5,0C944.7,392.6,945.2,392.7,945.7,392.7z"/>
                        </g>
                        <g id="morphedIdea">
                            <path id="idea" fill="#FFCF03" d="M1126.6,442.7c0,24.3-19.7,44-44,44c-0.7,0-1.3,0-2,0s-1.4,0-2.1-0.1s-1.4-0.2-2.1-0.2l0,0
                                c-4.5-0.6-8.8-2-12.8-3.9c-6.9-3.3-12.9-8.4-17.2-14.7c-4.9-7.1-7.8-15.7-7.8-25c0-22.2,16.4-40.6,37.8-43.6l0,0
                                c0.7,0,1.4-0.2,2.1-0.3c0.7-0.1,1.4-0.1,2.1-0.2c0.6,0,1.3-0.1,2-0.1C1106.9,398.7,1126.6,418.4,1126.6,442.7z"/>
                            <path id="ideaShadow" fill="#DBB309" d="M1089.2,399.1c-0.2,0-0.3,0-0.5,0l0,0c-21.4,3-37.8,21.4-37.8,43.6c0,6.6,1.4,12.8,4,18.4
                                c2.3,5,5.5,9.4,9.3,13.2c6.5,6.3,14.8,10.6,24.1,12c-1.9,0.2-3.8,0.4-5.7,0.4c-0.7,0-1.3,0-2,0s-1.4,0-2.1-0.1s-1.4-0.2-2.1-0.2
                                l0,0c-6.2-0.9-12-3-17.1-6.2c-5.5-3.4-10.2-8.1-13.7-13.5c-4.4-6.9-7-15-7-23.8c0-22.2,16.4-40.6,37.8-43.6l0,0
                                c0.7,0,1.4-0.2,2.1-0.3c0.7-0.1,1.4-0.1,2.1-0.2c0.6,0,1.3-0.1,2-0.1C1084.9,398.7,1087,398.8,1089.2,399.1z"/>
                        </g>
                        <path id="no1" fill="#A58705" d="M975.6,472.4h5.5v-14.2c0-0.9,0-1.7,0-1.7H981c0,0-0.3,0.6-1.1,1.4l-2.1,1.9l-2.7-2.9l6.4-6.2h4.1
                            v21.6h5.5v4h-15.6L975.6,472.4L975.6,472.4z"/>
                    </g>

                    <g id="EarthLines">

                        <path fill="#FBEDD6" d="M654.9,419.6c-11.6-2.5-28.9-4.6-34.8,8.8c-6.6,15,7.1,29.3,17,38.8c26.8,25.7,61.1,41.9,96.3,52.8
                            c22.7,7.1,46,12.1,69.2,17c0.8,0.2,1.1-1,0.3-1.2c-35.3-7.4-70.8-15.2-103.9-29.8c-14.3-6.3-28-13.8-40.7-22.9
                            c-7-5-13.6-10.4-19.8-16.3c-5.9-5.6-12.2-11.8-15.9-19.1c-4.7-9.3-4-22,6.6-26.8c7.8-3.6,17.2-1.9,25.3-0.2
                            C655.3,421,655.7,419.8,654.9,419.6L654.9,419.6z"/>
                        <path fill="#FBEDD6" d="M644.1,523.2c-11.5-1.4-25.6-0.2-26.6,14.3c-0.9,14.2,13,24.6,23.7,31.4c28.5,18.3,64.7,24.2,97.5,29.4
                            c36.7,5.9,73.8,8.7,110.9,10.7c37.1,2,74.3,3.6,111.5,2.4c40.9-1.3,81.8-6.4,120.9-18.7c0.8-0.2,0.4-1.4-0.3-1.2
                            c-65.1,20.5-134,20.6-201.5,17.7c-34.7-1.5-69.4-3.3-103.9-7.1c-33.4-3.7-67.5-8.6-99.7-18.7c-17-5.3-33.8-12.9-47.1-25
                            c-6.8-6.2-13.1-15.2-9.9-24.9c3.5-10.8,15.4-10.3,24.6-9.1C644.9,524.5,644.9,523.3,644.1,523.2L644.1,523.2z"/>
                        <line fill="none" stroke="#FBEDD6" strokeWidth="2" strokeMiterlimit="10" x1="759.3" y1="488.3" x2="718.2" y2="471.6"/>
                        <line fill="none" stroke="#FBEDD6" strokeWidth="2" strokeMiterlimit="10" x1="758.5" y1="469.1" x2="744.5" y2="462.1"/>
                        <line fill="none" stroke="#FBEDD6" strokeWidth="2" strokeMiterlimit="10" x1="1058.2" y1="574.2" x2="1030.5" y2="579.7"/>
                        <line fill="none" stroke="#FBEDD6" strokeWidth="2" strokeMiterlimit="10" x1="1048.5" y1="558.5" x2="1040.4" y2="560.7"/>
                    </g>
                    <g id="MainCharFull">
                        <path id="mainCharShadow" fill="#EDE5D3" d="M824.1,744c0-3.9,28.7-7.1,64.2-7.1c35.4,0,64.2,3.2,64.2,7.1s-28.7,7.1-64.2,7.1
                            S824.1,747.9,824.1,744z"/>
                        <g id="MainChar">
                            <g id="body">
                                <polygon fill="none" points="920,524.9 916.3,533.7 891.1,594.9 911,546.9            "/>
                                <polygon fill="none" points="888.2,601.9 882.2,587.3 888.2,601.9 887.8,601.3 888.1,602.1 888.2,602.3 888.2,602.4 888.6,601.4
                                    888.3,601.8             "/>
                                <polygon fill="#E08752" points="878.7,587.3 883.5,603.8 888.2,605.3 889,605.3 894,596 918,535.7 921.3,526.3 928.9,507.9
                                    849,507.9 861.3,548             "/>
                                <path fill="#686868" d="M949.8,507.9h-22.6l-5.4,15.1l-4,15.8l-2.7,13.2l-26.5,49.4l-2.4,3.4l31.2,74.8l2.1-1l0,0l40.4-148.4
                                    l1.7-6.1C964.2,516.1,958.3,507.9,949.8,507.9z"/>
                                <polygon fill="#E5E5E5" points="849.4,507.7 849.4,507.7 849.4,507.8             "/>
                                <polygon fill="#40292E" points="911,546.9 891.1,594.9 888.3,601.9 888.3,601.8 888.6,601.4 927.5,552.7 921.5,537.7 942,519.7
                                    927.3,507.9 927,507.7 926.9,507.9 920,524.9             "/>
                                <path fill="#595959" d="M888.2,602.4L888.2,602.4l-0.1-0.2l-0.3-0.8L860.7,551l-4-13.6l-12.4-17.1l5-12.3h-0.1H849h-22.3
                                    c-8.5,0-14.4,8.2-11.8,16.2L851.3,659l5.5,19.9l14.8,53.5c2.4,7.1,8.1,11,14.2,11.8c7.8,1.1,16.2-2.9,19.2-11.8l14.2-52.4
                                    l0.4-1.3l0,0L888.2,602.4z"/>
                                <polygon fill="#40292E" points="834.5,519.7 855,537.7 849,552.7 887.8,601.3 888.2,601.9 882.2,587.3 865.5,546.9 849.5,507.9
                                    849.4,507.7 849.2,507.9             "/>
                            </g>
                            <g id="head">
                                <path id="headMorph_1_" display="none" fill="#F6CD99" d="M947.3,438.3c0,32.6-26.4,59.1-59.1,59.1c-0.9,0-1.8,0-2.6-0.1
                                    c-1,0-1.9,0-2.9-0.1c-0.9-0.1-1.9-0.3-2.8-0.3l0,0c-28.7-4-50.8-28.7-50.8-58.5s22.1-54.5,50.8-58.5l0,0c0.9,0,1.9-0.3,2.8-0.4
                                    c1-0.1,1.9-0.2,2.9-0.2c0.9,0,1.8-0.1,2.6-0.1c10,0,19.5,2.5,27.7,6.9c9.2,4.9,32.2,1.9,37.7,10.7
                                    C959.3,405.9,947.3,426.9,947.3,438.3z"/>
                                <path className='realHead crane' id="headNormal" fill="#F6CD99" d="M947.3,438.3c0,32.6-26.4,59.1-59.1,59.1c-0.9,0-1.8,0-2.6-0.1c-1,0-1.9,0-2.9-0.1
                                    c-0.9-0.1-1.9-0.3-2.8-0.3l0,0c-28.7-4-50.8-28.7-50.8-58.5s22.1-54.5,50.8-58.5l0,0c0.9,0,1.9-0.3,2.8-0.4
                                    c1-0.1,1.9-0.2,2.9-0.2c0.9,0,1.8-0.1,2.6-0.1c10,0,19.5,2.5,27.7,6.9c9.2,4.9,17,12.2,22.5,21
                                    C944,416.2,947.3,426.9,947.3,438.3z"/>
                                <path className='realHead' fill="#E5B989" d="M897,379.9c-0.2,0-0.4,0-0.6,0l0,0c-28.7,4-50.8,28.7-50.8,58.5c0,29.6,21.8,54.2,50.3,58.4
                                    c-2.5,0.3-5.1,0.5-7.7,0.5c-0.9,0-1.8,0-2.6-0.1c-1,0-1.9,0-2.9-0.1c-0.9-0.1-1.9-0.3-2.8-0.3l0,0c-28.7-4-50.8-28.7-50.8-58.5
                                    s22.1-54.5,50.8-58.5l0,0c0.9,0,1.9-0.3,2.8-0.4c0.9-0.1,1.9-0.2,2.9-0.2c0.9,0,1.8-0.1,2.6-0.1
                                    C891.2,379.2,894.1,379.5,897,379.9z"/>
                            </g>
                        </g>
                        <g id="MainCharLines">
                            <path className='mainCharLine' id="l1" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M828.1,384.8c-7.3-3.3-13-4.5-21.4-6.6"/>
                            <line className='mainCharLine' id="l2" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="819.9" y1="400.8" x2="816.9" y2="400.8"/>
                            <path className='mainCharLine' id="l3" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M812,420.3c-1.6-0.8-10.4-4.1-18.6-4"/>
                            <path className='mainCharLine' id="l4" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M809.4,438.1c-4.8-0.1-15.5,0.6-18,1.4"/>
                            <path className='mainCharLine' id="l5" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M810.1,449.5c-1.8,0.6-3.5,1.6-4.7,1.9"/>
                            <path className='mainCharLine' id="l6" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M952.5,384.8c5.6-2.7,16.4-5.8,21.4-6.6"/>
                            <line className='mainCharLine' id="l7" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="960.5" y1="400.8" x2="962.5" y2="400.8"/>
                            <path className='mainCharLine' id="l8" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M968.6,420.3c10-4,18.6-4,18.6-4"/>
                            <path className='mainCharLine' id="l9" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M971.2,438.1c3.2-0.4,15.9,0.5,18,1.4"/>
                            <line className='mainCharLine' id="l10" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="970.5" y1="449.5" x2="975.2" y2="451.4"/>
                        </g>
                        <g id="headLines">
                            <line className='headLinesLine' id="hl1" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="958.5" y1="383.2" x2="961.6" y2="368.2"/>
                            <path className='headLinesLine' id="hl2" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M963.2,390.4c5.9-3.4,14.4-9,28.8-11.1"/>
                            <line className='headLinesLine' id="hl3" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="967.1" y1="401.3" x2="977.6" y2="401.3"/>
                        </g>
                    </g>
                    <g className='earthLines'>
                        <path id="path1" fill="none" stroke="#FBEDD6" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" d="M668.3,523.1
                            c-70.4,47.5-2.9,120.9,135.1,95.7c140-25.6,215.8-42.5,285.6-110.7"/>

                            <line id="path2" fill="none" stroke="#FBEDD6" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="986.2" y1="539" x2="993.5" y2="534.8"/>

                            <line id="path3" fill="none" stroke="#FBEDD6" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="988.8" y1="553.1" x2="1012.5" y2="541.4"/>
                        <path id="curveline" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M652.6,528.9
                            c-10,4-22,14.9-23,26c-1.5,17.3,24.1,27.6,41,32c24.7,6.4,54.4,8.4,83,8c28.7-0.4,47.1-2.4,73.8-4.1"/>
                    </g>
                    <g id="part2">
                        <defs>
                            <path id="bigMask" d="M-2471.8,490.8L-2471.8,490.8L-2471.8,490.8L-2471.8,490.8L-2471.8,490.8l3365.8,0L-2471.8,490.8z"/>
                        </defs>
                        <clipPath id="bigMask_1_">
                            <use xlinkHref="#bigMask"  overflow="visible"/>
                        </clipPath>
                        <g clipPath="url(#bigMask_1_)">
                            <rect x="-2561" y="-1782" fill="#372E42" width="7288" height="4568"/>
                        </g>
                        <g id="NetworkLines" className='hidden' clipPath="url(#bigMask_1_)">
                            <line id="nl1" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="615" y1="537.9" x2="766.7" y2="601.1"/>
                            <line id="nl2" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="766.7" y1="601.1" x2="688.3" y2="708.5"/>
                            <line id="nl5" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="990.1" y1="383.7" x2="896.1" y2="487.9"/>
                            <line id="nl6" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="990.1" y1="383.7" x2="1130.8" y2="471.7"/>
                            <line id="nl3" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="766.7" y1="601.1" x2="896.1" y2="487.9"/>
                            <line id="nl4" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="896.1" y1="487.9" x2="976.8" y2="635.4"/>
                            <line id="nl8" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="976.8" y1="635.4" x2="1130.8" y2="471.7"/>
                            <line id="nl7" fill="none" stroke="#FBEDD6" strokeMiterlimit="10" x1="1173.1" y1="608.4" x2="976.8" y2="635.4"/>
                        </g>
                        <g id="browserBgs" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="ToolsBrowserTop3">
                                <path fill="#71545A" d="M1199.4,346.6H588.6v-18c0-2,1.6-3.6,3.6-3.6h603.7c2,0,3.6,1.6,3.6,3.6L1199.4,346.6L1199.4,346.6z"/>
                            </g>
                            <g id="ToolsBrowserTop2">
                                <path fill="#62484F" d="M1216,358.2H572v-19c0-2.1,1.7-3.8,3.8-3.8h636.5c2.1,0,3.8,1.7,3.8,3.8v19H1216z"/>
                            </g>
                            <g id="ToolsBrowserTop1">
                                <path fill="#573E43" d="M1230.7,373.5H557.3v-19.8c0-2.2,1.8-4,4-4h665.4c2.2,0,4,1.8,4,4V373.5z"/>
                                <path id="pin3" fill="#F0ECDA" d="M1209.9,361.6c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1
                                    C1211.3,364.6,1209.9,363.3,1209.9,361.6z"/>
                                <path id="pin2" fill="#F0ECDA" d="M1193.3,361.6c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1
                                    C1194.7,364.6,1193.3,363.3,1193.3,361.6z"/>
                                <path id="pin1" fill="#F0ECDA" d="M1176.7,361.6c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1
                                    C1178.1,364.6,1176.7,363.3,1176.7,361.6z"/>
                                <path id="SearchBar" fill="#F0ECDA" d="M903.7,364.6H575.6c-1.7,0-3.1-1.4-3.1-3.1l0,0c0-1.7,1.4-3.1,3.1-3.1h328.1
                                    c1.7,0,3.1,1.4,3.1,3.1l0,0C906.8,363.3,905.4,364.6,903.7,364.6z"/>
                            </g>
                            <g id="BrowserBg">
                                <path fill="#FBEDD6" d="M1226.8,751.8H561.2c-2.1,0-3.8-1.7-3.8-3.8V373.5h673.3V748C1230.7,750.1,1228.9,751.8,1226.8,751.8z"
                                    />
                            </g>
                        </g>
                        <g id="mouse">
                            <polygon fill="#DDDDDC" points="1450.1,670.6 1452.5,669.1 1448.5,662.3 1453.5,661.4 1440.4,650.9 1442.9,667.6 1446.1,663.6"/>
                            <polygon fill="#FFFFFF" points="1440.4,650.9 1453.5,661.4 1448.5,662.3 1452.5,669.1 1451.4,669.8"/>
                        </g>

                        <g id="BallsFull" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="waves">
                                <circle id="w2" fill="none" stroke="#87789E" strokeWidth="2" strokeMiterlimit="10" cx="894" cy="505.3" r="99.3"/>
                                <circle id="w1" fill="none" stroke="#87789E" strokeWidth="2" strokeMiterlimit="10" cx="894" cy="505.3" r="104.8"/>
                            </g>
                            <circle id="r1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="894" cy="505.3" r="98.9"/>
                            <circle id="r2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="1082.5" cy="352.5" r="72.3"/>
                            <circle id="r3" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" cx="1156.8" cy="640.1" r="88.3"/>
                            <circle id="r4" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="1516.6" cy="338.2" r="72.3"/>
                            <circle id="r51" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="428.3" cy="592.7" r="72.3"/>
                            <circle id="r52" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="428.3" cy="592.8" r="184.2"/>
                            <circle id="r6" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="633.7" cy="232.6" r="72.3"/>
                            <circle id="r7" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" cx="261.4" cy="195.6" r="72.3"/>
                            <circle id="w3" fill="none" stroke="#87789E" strokeWidth="2" strokeMiterlimit="10" cx="894" cy="505.3" r="98.9"/>
                            <g className='cracks'>
                                <g id="cg1">
                                        <line id="cg1_l1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="968.8" y1="441.6" x2="1083" y2="352.1"/>
                                        <line id="cg1_l2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1083" y1="352.1" x2="1240" y2="406.4"/>
                                        <line id="cg1_l3" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1082.5" y1="352.5" x2="1062.3" y2="228.7"/>
                                        <line id="cg1_l4" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1084.7" y1="350" x2="1105" y2="328.7"/>
                                        <line id="cg1_l5" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1259.5" y1="421.6" x2="1444" y2="344.4"/>
                                        <line id="cg1_l6" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1259.5" y1="421.8" x2="1259.5" y2="267"/>
                                        <line id="cg1_l7" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1070.8" y1="222" x2="1135" y2="212.4"/>
                                        <line id="cg1_l8" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1259.5" y1="421.8" x2="1310.9" y2="485.3"/>
                                        <line id="cg1_l9" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1463.9" y1="344.4" x2="1516.6" y2="338.2"/>
                                        <line id="cg1_l10" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1261.8" y1="251" x2="1406" y2="195.6"/>
                                        <line id="cg1_l11" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1516.6" y1="338.2" x2="1557.3" y2="453.6"/>
                                        <line id="cg1_l12" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1516.6" y1="338.2" x2="1598" y2="222"/>
                                        <line id="cg1_l13" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1324" y1="493.7" x2="1376.5" y2="440.8"/>
                                        <line id="cg1_l14" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1140" y1="212.4" x2="1150.8" y2="121.3"/>
                                        <line id="cg1_l15" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1411" y1="176" x2="1333.9" y2="139"/>
                                        <line id="cg1_l16" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1595.6" y1="231.4" x2="1550" y2="157.5"/>
                                        <line id="cg1_l17" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1331.1" y1="137.7" x2="1315" y2="73.4"/>
                                        <line id="cg1_l18" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1595.6" y1="231.4" x2="1689" y2="189"/>
                                    <g id="cg1_b1">
                                        <path fill="#F68626" d="M1025.9,333.2c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1019.5,318.9,1025.9,325.3,1025.9,333.2z"/>
                                        <path fill="#EE7823" d="M1013.7,347.4c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C1001.5,340.4,1006.8,346.4,1013.7,347.4z"/>
                                    </g>
                                    <g id="cg1_b2">
                                        <path fill="#F68626" d="M1279.3,400.7l-0.5,1.7l-11.8,43.5l-10.2-22.6l-10.8-27h30.1C1278.4,396.3,1280,398.5,1279.3,400.7z"/>
                                        <polygon fill="#E08751" points="1248.9,396.3 1248.9,396.3 1248.9,396.2"/>
                                        <path fill="#E5E5E5" d="M1249,396.2L1249,396.2L1249,396.2z"/>
                                        <path fill="#F68626" d="M1275.4,377.5c0,8.8-7.1,15.9-15.9,15.9c-0.2,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0s-0.5-0.1-0.8-0.1l0,0
                                            c-7.7-1.1-13.7-7.7-13.7-15.8c0-8,6-14.7,13.7-15.8l0,0c0.2,0,0.5-0.1,0.8-0.1s0.5,0,0.8-0.1c0.2,0,0.5,0,0.7,0
                                            C1268.3,361.6,1275.4,368.7,1275.4,377.5z"/>
                                        <path fill="#EE7823" d="M1267.9,442.4l-0.1,0.4l-3.8,14.1c-0.8,2.4-3.1,3.5-5.2,3.2c-1.7-0.2-3.2-1.3-3.8-3.2l-4-14.4
                                            l-1.5-5.4l-9.8-36.4c-0.7-2.2,0.9-4.4,3.2-4.4h6.1l0,0l10.4,25.4v0.1L1267.9,442.4z"/>
                                        <line fill="none" x1="1259.4" y1="421.6" x2="1259.4" y2="421.6"/>
                                        <path fill="#EE7823" d="M1261.8,361.7c-0.1,0-0.1,0-0.2,0l0,0c-7.7,1.1-13.7,7.7-13.7,15.8c0,8,5.9,14.6,13.6,15.8
                                            c-0.7,0.1-1.4,0.1-2.1,0.1c-0.2,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0s-0.5-0.1-0.8-0.1l0,0c-7.7-1.1-13.7-7.7-13.7-15.8
                                            s6-14.7,13.7-15.8l0,0c0.2,0,0.5-0.1,0.8-0.1s0.5,0,0.8-0.1c0.2,0,0.5,0,0.7,0C1260.3,361.6,1261.1,361.6,1261.8,361.7z"/>
                                    </g>
                                    <g id="cg1_b3">
                                        <path fill="#F68626" d="M1070.8,222c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1066.5,212.4,1070.8,216.7,1070.8,222z"/>
                                        <path fill="#EE7823" d="M1062.7,231.5c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C1054.5,226.8,1058.1,230.8,1062.7,231.5z"/>
                                    </g>
                                    <g id="cg1_b4">
                                        <path fill="#F68626" d="M1119.4,323.6c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1115.1,314,1119.4,318.3,1119.4,323.6z"/>
                                        <path fill="#EE7823" d="M1111.2,333.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6
                                            c0.5,0,1,0,1.4,0.1c-4.6,0.7-8.1,4.7-8.1,9.5S1106.6,332.4,1111.2,333.1z"/>
                                    </g>
                                    <g id="cg1_b5">
                                        <path fill="#F68626" d="M1463.9,344.4c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7
                                            s7.3-18.3,16.9-19.7c1-0.1,2-0.2,3-0.2C1455,324.5,1463.9,333.4,1463.9,344.4z"/>
                                        <path fill="#EE7823" d="M1447,364.1c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                            c-9.6,1.4-16.9,9.7-16.9,19.7C1430.1,354.4,1437.4,362.6,1447,364.1z"/>
                                    </g>
                                    <g id="cg1_b6">
                                        <path fill="#F68626" d="M1276.2,259.7c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            c0-7.2,5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1269.8,245.4,1276.2,251.8,1276.2,259.7z"/>
                                        <path fill="#EE7823" d="M1264,273.9c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C1251.8,266.9,1257.1,272.9,1264,273.9z"/>
                                    </g>
                                    <g id="cg1_b7">
                                        <path fill="#F68626" d="M1333.3,485.3c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1326.9,471,1333.3,477.4,1333.3,485.3z"/>
                                        <path fill="#EE7823" d="M1321.1,499.5c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4S1311,471,1319,471
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C1308.9,492.5,1314.2,498.5,1321.1,499.5z"/>
                                    </g>
                                    <g id="cg1_b8">
                                        <path fill="#F68626" d="M1144.8,211.4c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1142.6,206.6,1144.8,208.7,1144.8,211.4z"/>
                                        <path fill="#EE7823" d="M1140.7,216.1c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C1136.6,213.8,1138.4,215.8,1140.7,216.1z"/>
                                    </g>
                                    <g id="cg1_b9">
                                        <path fill="#F68626" d="M1439.8,184.8c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                            s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C1427.6,157.5,1439.8,169.7,1439.8,184.8z"/>
                                        <path fill="#EE7823" d="M1416.7,211.8c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                            c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27S1403.5,209.8,1416.7,211.8z"/>
                                    </g>
                                    <g id="cg1_b10">
                                        <path fill="#F68626" d="M1382,440.8c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1377.8,431.2,1382,435.5,1382,440.8z"/>
                                        <path fill="#EE7823" d="M1373.9,450.3c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6
                                            c0.5,0,1,0,1.4,0.1c-4.6,0.7-8.1,4.7-8.1,9.5C1365.8,445.6,1369.3,449.6,1373.9,450.3z"/>
                                    </g>
                                    <g id="cg1_b11">
                                        <path fill="#F68626" d="M1607.1,219.2l-0.3,1l-6.9,25.3l-6-12.7l-6.7-16.2h17.9C1606.6,216.6,1607.6,217.9,1607.1,219.2z"/>
                                        <path fill="#E08751" d="M1589.4,216.6L1589.4,216.6L1589.4,216.6z"/>
                                        <path fill="#E5E5E5" d="M1589.5,216.6L1589.5,216.6L1589.5,216.6z"/>
                                        <path fill="#F68626" d="M1604.9,205.7c0,5.1-4.2,9.3-9.3,9.3c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.4,0l0,0
                                            c-4.5-0.6-8-4.5-8-9.2s3.5-8.6,8-9.2l0,0c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0
                                            C1600.7,196.4,1604.9,200.5,1604.9,205.7z"/>
                                        <path fill="#EE7823" d="M1600.5,243.5l-0.1,0.2l-2.2,8.3c-0.5,1.4-1.8,2-3,1.9c-1-0.1-1.9-0.8-2.2-1.9l-2.3-8.4l-0.9-3.1
                                            l-5.7-21.2c-0.4-1.3,0.5-2.6,1.9-2.6h3.6l0,0l6.1,14.9l0,0L1600.5,243.5z"/>
                                        <line fill="none" x1="1595.5" y1="231.4" x2="1595.5" y2="231.4"/>
                                        <path fill="#EE7823" d="M1597,196.5C1596.9,196.5,1596.9,196.5,1597,196.5C1596.9,196.5,1596.9,196.5,1597,196.5
                                            c-4.6,0.6-8.1,4.5-8.1,9.2s3.4,8.5,7.9,9.2c-0.4,0.1-0.8,0.1-1.2,0.1c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.5,0
                                            c-0.1,0-0.3,0-0.4,0l0,0c-4.5-0.6-8-4.5-8-9.2s3.5-8.6,8-9.2l0,0c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0
                                            C1596,196.4,1596.5,196.4,1597,196.5z"/>
                                    </g>
                                    <g id="cg1_b12">
                                        <path fill="#F68626" d="M1157,121.3c0,3.5-2.8,6.3-6.3,6.3c-0.3,0-0.6,0-0.9-0.1c-3-0.5-5.3-3.1-5.3-6.2s2.3-5.7,5.3-6.2
                                            c0.3,0,0.6-0.1,0.9-0.1C1154.2,115,1157,117.8,1157,121.3z"/>
                                        <path fill="#EE7823" d="M1151.7,127.5c-0.3,0-0.6,0.1-0.9,0.1c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c0.3,0,0.6,0,0.9,0.1
                                            c-3,0.5-5.3,3.1-5.3,6.2C1146.4,124.4,1148.7,127,1151.7,127.5z"/>
                                    </g>
                                    <g id="cg1_b13">
                                        <path fill="#F68626" d="M1335.9,137.7c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1333.8,132.8,1335.9,135,1335.9,137.7z"/>
                                        <path fill="#EE7823" d="M1331.8,142.4c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8
                                            c0.2,0,0.5,0,0.7,0.1c-2.3,0.3-4.1,2.3-4.1,4.8C1327.8,140.1,1329.5,142.1,1331.8,142.4z"/>
                                    </g>
                                    <g id="cg1_b14">
                                        <path fill="#F68626" d="M1571.6,455.2c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1565.2,440.8,1571.6,447.2,1571.6,455.2z"/>
                                        <path fill="#EE7823" d="M1559.5,469.4c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C1547.3,462.4,1552.5,468.3,1559.5,469.4z"/>
                                    </g>
                                    <g id="cg1_b15">
                                        <path fill="#F68626" d="M1554.8,157.5c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1552.7,152.7,1554.8,154.8,1554.8,157.5z"/>
                                        <path fill="#EE7823" d="M1550.7,162.3c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8
                                            c0.2,0,0.5,0,0.7,0.1c-2.3,0.3-4.1,2.3-4.1,4.8C1546.6,159.9,1548.4,161.9,1550.7,162.3z"/>
                                    </g>
                                    <g id="cg1_b16">
                                        <path fill="#F68626" d="M1324.9,74.8c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1320.7,65.2,1324.9,69.5,1324.9,74.8z"/>
                                        <path fill="#EE7823" d="M1316.8,84.3c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C1308.7,79.6,1312.2,83.6,1316.8,84.3z"/>
                                    </g>
                                    <g id="cg1_b17">
                                        <path fill="#F68626" d="M1699.5,190c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1695.2,180.4,1699.5,184.7,1699.5,190z"/>
                                        <path fill="#EE7823" d="M1691.3,199.5c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C1683.2,194.8,1686.7,198.8,1691.3,199.5z"/>
                                    </g>
                                </g>
                                <g id="cg2">
                                        <line id="cg2_l1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="795.9" y1="517.7" x2="608.6" y2="554.9"/>
                                        <line id="cg2_l2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="608.6" y1="554.9" x2="500.6" y2="578.3"/>
                                        <line id="cg2_l3" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="468.6" y1="532.7" x2="492" y2="474"/>
                                        <line id="cg2_l4" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="428.6" y1="598.3" x2="442.7" y2="663.5"/>
                                        <line id="cg2_l5" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="425.1" y1="676.6" x2="224.4" y2="759.1"/>
                                        <line id="cg2_l6" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="215" y1="751.6" x2="160" y2="665.9"/>
                                        <line id="cg2_l7" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="151.8" y1="653" x2="80" y2="624.2"/>
                                        <line id="cg2_l8" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="80" y1="624.2" x2="113" y2="572.3"/>
                                        <line id="cg2_l9" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="428.3" y1="592.8" x2="335.9" y2="433.5"/>
                                        <line id="cg2_l10" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="335.9" y1="433.5" x2="203.8" y2="410.4"/>
                                        <line id="cg2_l11" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="197.7" y1="408.6" x2="123.1" y2="449.3"/>
                                        <line id="cg2_l12" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="197.7" y1="408.6" x2="244.2" y2="356.7"/>
                                        <line id="cg2_l13" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="193.3" y1="401.7" x2="165.4" y2="326.2"/>
                                        <line id="cg2_l14" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="335.9" y1="433.5" x2="378.9" y2="309"/>
                                    <g id="cg2_b1">
                                        <path fill="#F68626" d="M616.9,555.2c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C612.6,545.6,616.9,549.9,616.9,555.2z"/>
                                        <path fill="#EE7823" d="M608.7,564.7c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C600.6,560,604.1,564,608.7,564.7z"/>
                                    </g>
                                    <g id="cg2_b2">
                                        <path fill="#F68626" d="M511.6,460.8c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C505.2,446.4,511.6,452.9,511.6,460.8z"/>
                                        <path fill="#EE7823" d="M499.4,475c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C487.2,468,492.5,473.9,499.4,475z"/>
                                    </g>
                                    <g id="cg2_b3">
                                        <path fill="#F68626" d="M561.2,742.7c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7
                                            s7.3-18.3,16.9-19.7c1-0.1,2-0.2,3-0.2C552.3,722.8,561.2,731.7,561.2,742.7z"/>
                                        <path fill="#EE7823" d="M544.3,762.4c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                            c-9.6,1.4-16.9,9.7-16.9,19.7C527.4,752.7,534.7,761,544.3,762.4z"/>
                                    </g>
                                    <g id="cg2_b4">
                                        <path fill="#F68626" d="M462.6,665.9c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7
                                            s7.3-18.3,16.9-19.7c1-0.1,2-0.2,3-0.2C453.7,645.9,462.6,654.9,462.6,665.9z"/>
                                        <path fill="#EE7823" d="M445.7,685.6c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                            c-9.6,1.4-16.9,9.7-16.9,19.7C428.8,675.9,436.1,684.1,445.7,685.6z"/>
                                    </g>
                                    <g id="cg2_b5">
                                        <path fill="#F68626" d="M239.8,728.9l-0.4,1.5l-10.7,39.4l-8.4-20.6L209.8,725h27.1C239,725,240.4,727,239.8,728.9z"/>
                                        <path fill="#E08751" d="M212.3,725L212.3,725L212.3,725z"/>
                                        <path fill="#E5E5E5" d="M212.4,724.9L212.4,724.9L212.4,724.9z"/>
                                        <path fill="#F68626" d="M236.3,708c0,8-6.5,14.4-14.4,14.4c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7,0s-0.5-0.1-0.7-0.1l0,0
                                            c-7-1-12.4-7-12.4-14.3s5.4-13.3,12.4-14.3l0,0c0.2,0,0.5-0.1,0.7-0.1s0.5,0,0.7-0.1c0.2,0,0.4,0,0.6,0
                                            C229.8,693.6,236.3,700,236.3,708z"/>
                                        <path fill="#EE7823" d="M229.5,766.6l-0.1,0.3l-3.5,12.8c-0.7,2.2-2.8,3.2-4.7,2.9c-1.5-0.2-2.9-1.2-3.5-2.9l-3.6-13.1
                                            l-1.3-4.9l-8.9-32.9c-0.7-2,0.8-4,2.9-4h5.5l0,0l9.4,23l0,0L229.5,766.6z"/>
                                        <line fill="none" x1="221.8" y1="747.9" x2="221.8" y2="747.9"/>
                                        <path fill="#EE7823" d="M224,693.8c-0.1,0-0.1,0-0.2,0l0,0c-7,1-12.4,7-12.4,14.3c0,7.2,5.3,13.2,12.3,14.3
                                            c-0.6,0.1-1.2,0.1-1.9,0.1c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0-0.7,0s-0.5-0.1-0.7-0.1l0,0c-7-1-12.4-7-12.4-14.3
                                            s5.4-13.3,12.4-14.3l0,0c0.2,0,0.5-0.1,0.7-0.1s0.5,0,0.7-0.1c0.2,0,0.4,0,0.6,0C222.6,693.6,223.3,693.6,224,693.8z"/>
                                    </g>
                                    <g id="cg2_b6">
                                        <path fill="#F68626" d="M166.1,653c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C159.7,638.7,166.1,645.1,166.1,653z"/>
                                        <path fill="#EE7823" d="M153.9,667.2c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S147,666.2,153.9,667.2z"/>
                                    </g>
                                    <g id="cg2_b7">
                                        <path fill="#F68626" d="M89.6,624.2c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C85.3,614.6,89.6,618.9,89.6,624.2z"/>
                                        <path fill="#EE7823" d="M81.4,633.7c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5S76.8,633,81.4,633.7z"/>
                                    </g>
                                    <g id="cg2_b8">
                                        <path fill="#F68626" d="M140,564.8c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7s7.3-18.3,16.9-19.7
                                            c1-0.1,2-0.2,3-0.2C131.1,544.8,140,553.8,140,564.8z"/>
                                        <path fill="#EE7823" d="M123.1,584.5c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                            c-9.6,1.4-16.9,9.7-16.9,19.7S113.5,583,123.1,584.5z"/>
                                    </g>
                                    <g id="cg2_b9">
                                        <path fill="#F68626" d="M355.9,417.6l-0.5,1.7L344,461.4l-8.7-21.9l-12.5-26.2h30C355,413.3,356.6,415.5,355.9,417.6z"/>
                                        <polygon fill="#E08751" points="325.5,413.3 325.5,413.3 325.5,413.2                         "/>
                                        <path fill="#E5E5E5" d="M325.6,413.2L325.6,413.2L325.6,413.2z"/>
                                        <path fill="#F68626" d="M352,394.5c0,8.8-7.1,15.9-15.9,15.9c-0.2,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0s-0.5-0.1-0.8-0.1l0,0
                                            c-7.7-1.1-13.7-7.7-13.7-15.8c0-8,6-14.7,13.7-15.8l0,0c0.2,0,0.5-0.1,0.8-0.1s0.5,0,0.8-0.1c0.2,0,0.5,0,0.7,0
                                            C344.9,378.6,352,385.7,352,394.5z"/>
                                        <path fill="#EE7823" d="M344.6,459.3l-0.1,0.4l-3.8,14.1c-0.8,2.4-3.1,3.5-5.2,3.2c-1.7-0.2-3.2-1.3-3.8-3.2l-4-14.4l-1.5-5.4
                                            l-9.8-36.4c-0.7-2.2,0.9-4.4,3.2-4.4h6.1l0,0l10.4,25.4v0.1L344.6,459.3z"/>
                                        <line fill="none" x1="336.1" y1="438.6" x2="336.1" y2="438.6"/>
                                        <path fill="#EE7823" d="M338.5,378.7c-0.1,0-0.1,0-0.2,0l0,0c-7.7,1.1-13.7,7.7-13.7,15.8c0,8,5.9,14.6,13.6,15.8
                                            c-0.7,0.1-1.4,0.1-2.1,0.1c-0.2,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0s-0.5-0.1-0.8-0.1l0,0c-7.7-1.1-13.7-7.7-13.7-15.8
                                            c0-8,6-14.7,13.7-15.8l0,0c0.2,0,0.5-0.1,0.8-0.1s0.5,0,0.8-0.1c0.2,0,0.5,0,0.7,0C336.9,378.6,337.7,378.6,338.5,378.7z"/>
                                    </g>
                                    <g id="cg2_b10">
                                        <path fill="#F68626" d="M212.1,408.6c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C205.6,394.3,212.1,400.7,212.1,408.6z"/>
                                        <path fill="#EE7823" d="M199.9,422.8c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C187.7,415.8,193,421.8,199.9,422.8z"/>
                                    </g>
                                    <g id="cg2_b11">
                                        <path fill="#F68626" d="M127.9,449.3c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C125.8,444.5,127.9,446.7,127.9,449.3z"/>
                                        <path fill="#EE7823" d="M123.8,454.1c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C119.7,451.7,121.5,453.7,123.8,454.1z"/>
                                    </g>
                                    <g id="cg2_b12">
                                        <path fill="#F68626" d="M253.7,356.7c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C249.5,347.1,253.7,351.4,253.7,356.7z"/>
                                        <path fill="#EE7823" d="M245.6,366.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C237.5,361.5,241,365.5,245.6,366.1z"/>
                                    </g>
                                    <g id="cg2_b13">
                                        <path fill="#F68626" d="M174.8,325.6c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C170.5,316.1,174.8,320.3,174.8,325.6z"/>
                                        <path fill="#EE7823" d="M166.7,335.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C158.5,330.5,162,334.4,166.7,335.1z"/>
                                    </g>
                                    <g id="cg2_b14">
                                        <path fill="#F68626" d="M383.7,309c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C381.6,304.2,383.7,306.3,383.7,309z"/>
                                        <path fill="#EE7823" d="M379.6,313.8c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8
                                            c0.2,0,0.5,0,0.7,0.1c-2.3,0.3-4.1,2.3-4.1,4.8C375.6,311.4,377.3,313.4,379.6,313.8z"/>
                                    </g>
                                </g>
                                <g id="cg3">
                                        <line id="cg3_l1" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="819.9" y1="439.7" x2="677" y2="352.5"/>
                                        <line id="cg3_l2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="674.4" y1="348" x2="633.7" y2="232.6"/>
                                        <line id="cg3_l3" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="633.7" y1="232.6" x2="561.4" y2="243.9"/>
                                        <line id="cg3_l4" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="633.7" y1="232.6" x2="715.1" y2="116.4"/>
                                        <line id="cg3_l5" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="561.1" y1="238.8" x2="378.9" y2="154.2"/>
                                        <line id="cg3_l6" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="378.9" y1="154.2" x2="259" y2="196.5"/>
                                        <line id="cg3_l7" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="189.2" y1="195.6" x2="100.2" y2="231.9"/>
                                        <line id="cg3_l8" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="94.3" y1="225.8" x2="68.3" y2="158.3"/>
                                        <line id="cg3_l9" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="712.7" y1="125.9" x2="806.1" y2="83.4"/>
                                        <line id="cg3_l10" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="712.7" y1="125.9" x2="667.1" y2="51.9"/>
                                        <line id="cg3_l11" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="561.1" y1="238.8" x2="491.8" y2="337.2"/>
                                        <line id="cg3_l12" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="378.9" y1="145.4" x2="523.1" y2="90.1"/>
                                        <line id="cg3_l13" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="528.1" y1="70.4" x2="451" y2="33.4"/>
                                        <line id="cg3_l14" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="234.6" y1="128.5" x2="212.1" y2="56.7"/>
                                    <g id="cg3_b1">
                                        <path fill="#F68626" d="M688.7,349.6c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C682.3,335.2,688.7,341.7,688.7,349.6z"/>
                                        <path fill="#EE7823" d="M676.5,363.8c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C664.3,356.8,669.6,362.7,676.5,363.8z"/>
                                    </g>
                                    <g id="cg3_b2">
                                        <path fill="#F68626" d="M571.3,233.3l-0.2,0.8l-5.7,21l-4.7-11.4l-5.8-12.7h14.8C570.8,231.1,571.6,232.2,571.3,233.3z"/>
                                        <path fill="#E08751" d="M556.1,231.1L556.1,231.1L556.1,231.1z"/>
                                        <path fill="#E5E5E5" d="M556.2,231.1L556.2,231.1L556.2,231.1z"/>
                                        <path fill="#F68626" d="M569.4,221.7c0,4.4-3.6,8-8,8c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0l0,0
                                            c-3.9-0.5-6.8-3.9-6.8-7.9s3-7.3,6.8-7.9l0,0c0.1,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.4,0
                                            C565.8,213.8,569.4,217.3,569.4,221.7z"/>
                                        <path fill="#EE7823" d="M565.6,254.1v0.2l-1.9,7.1c-0.4,1.2-1.5,1.7-2.6,1.6c-0.8-0.1-1.6-0.6-1.9-1.6l-2-7.2l-0.7-2.7
                                            l-4.9-18.2c-0.4-1.1,0.4-2.2,1.6-2.2h3.1l0,0l5.2,12.7l0,0L565.6,254.1z"/>
                                        <line fill="none" x1="561.4" y1="243.8" x2="561.4" y2="243.8"/>
                                        <path fill="#EE7823" d="M562.6,213.9C562.5,213.9,562.5,213.9,562.6,213.9C562.5,213.9,562.5,213.9,562.6,213.9
                                            c-4,0.5-6.9,3.9-6.9,7.9s2.9,7.3,6.8,7.9c-0.3,0-0.7,0.1-1,0.1c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4,0l0,0
                                            c-3.9-0.5-6.8-3.9-6.8-7.9s3-7.3,6.8-7.9l0,0c0.1,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0,0.4,0
                                            C561.8,213.8,562.2,213.8,562.6,213.9z"/>
                                    </g>
                                    <g id="cg3_b3">
                                        <path fill="#F68626" d="M724.2,113.6l-0.3,1l-7.1,26l-5.2-14.7l-6.7-14.8h17.4C723.7,111.1,724.6,112.4,724.2,113.6z"/>
                                        <polygon fill="#E08751" points="706.5,111.1 706.5,111.1 706.5,111                       "/>
                                        <path fill="#E5E5E5" d="M706.5,111L706.5,111L706.5,111z"/>
                                        <path fill="#F68626" d="M722,100.1c0,5.1-4.2,9.3-9.3,9.3c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.4,0l0,0
                                            c-4.5-0.6-8-4.5-8-9.2s3.5-8.6,8-9.2l0,0c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0
                                            C717.8,90.8,722,95,722,100.1z"/>
                                        <path fill="#EE7823" d="M717.6,138l-0.1,0.2l-2.2,8.3c-0.5,1.4-1.8,2-3,1.9c-1-0.1-1.9-0.8-2.2-1.9l-2.3-8.4l-0.9-3.1
                                            l-5.7-21.2c-0.4-1.3,0.5-2.6,1.9-2.6h3.6l0,0l6.1,14.9l0,0L717.6,138z"/>
                                        <line fill="none" x1="712.6" y1="125.9" x2="712.6" y2="125.9"/>
                                        <path fill="#EE7823" d="M714,90.9L714,90.9C713.9,90.9,713.9,90.9,714,90.9c-4.6,0.6-8.1,4.5-8.1,9.2s3.4,8.5,7.9,9.2
                                            c-0.4,0.1-0.8,0.1-1.2,0.1c-0.1,0-0.3,0-0.4,0c-0.2,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.4,0l0,0c-4.5-0.6-8-4.5-8-9.2s3.5-8.6,8-9.2
                                            l0,0c0.1,0,0.3,0,0.4-0.1c0.1,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0C713.1,90.8,713.6,90.8,714,90.9z"/>
                                    </g>
                                    <g id="cg3_b4">
                                        <path fill="#F68626" d="M393.3,154.2c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C386.8,139.8,393.3,146.2,393.3,154.2z"/>
                                        <path fill="#EE7823" d="M381.1,168.4c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S374.2,167.3,381.1,168.4z"/>
                                    </g>
                                    <g id="cg3_b5">
                                        <path fill="#F68626" d="M107.9,232.6c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C103.7,223,107.9,227.3,107.9,232.6z"/>
                                        <path fill="#EE7823" d="M99.8,242.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C91.7,237.4,95.2,241.4,99.8,242.1z"/>
                                    </g>
                                    <g id="cg3_b6">
                                        <path fill="#F68626" d="M71.9,155.1c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C69.7,150.3,71.9,152.5,71.9,155.1z"/>
                                        <path fill="#EE7823" d="M67.8,159.9c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C63.7,157.6,65.5,159.5,67.8,159.9z"/>
                                    </g>
                                    <g id="cg3_b7">
                                        <path fill="#F68626" d="M499.1,335.2c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C494.8,325.6,499.1,329.9,499.1,335.2z"/>
                                        <path fill="#EE7823" d="M491,344.7c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C482.8,340,486.4,344,491,344.7z"/>
                                    </g>
                                    <g id="cg3_b8">
                                        <path fill="#F68626" d="M816.6,84.5c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C812.3,74.9,816.6,79.2,816.6,84.5z"/>
                                        <path fill="#EE7823" d="M808.4,93.9c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C800.3,89.3,803.8,93.2,808.4,93.9z"/>
                                    </g>
                                    <g id="cg3_b9">
                                        <path fill="#F68626" d="M671.9,51.9c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C669.7,47.1,671.9,49.3,671.9,51.9z"/>
                                        <path fill="#EE7823" d="M667.8,56.7c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C663.7,54.3,665.5,56.3,667.8,56.7z"/>
                                    </g>
                                    <g id="cg3_b10">
                                        <path fill="#F68626" d="M556.9,79.2c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                            s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C544.7,51.9,556.9,64.2,556.9,79.2z"/>
                                        <path fill="#EE7823" d="M533.7,106.2c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                            c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27S520.6,104.2,533.7,106.2z"/>
                                    </g>
                                    <g id="cg3_b11">
                                        <path fill="#F68626" d="M453,32.1c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C450.9,27.3,453,29.4,453,32.1z"/>
                                        <path fill="#EE7823" d="M448.9,36.8c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C444.8,34.5,446.6,36.5,448.9,36.8z"/>
                                    </g>
                                    <g id="cg3_b12">
                                        <path fill="#F68626" d="M216.6,55.8c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C214.4,51,216.6,53.1,216.6,55.8z"/>
                                        <path fill="#EE7823" d="M212.5,60.5c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C208.4,58.2,210.2,60.2,212.5,60.5z"/>
                                    </g>
                                </g>
                                <g id="cg4">
                                        <line id="cg4_l1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="989.6" y1="530.6" x2="1105.7" y2="569.9"/>
                                        <line id="cg4_l2" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1105.7" y1="569.9" x2="1162.9" y2="485.3"/>
                                        <line id="cg4_l3" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1105.7" y1="569.9" x2="1082.5" y2="509.3"/>
                                        <line id="cg4_l4" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1156.8" y1="647.3" x2="1301.3" y2="597.6"/>
                                        <line id="cg4_l5" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1301.3" y1="597.6" x2="1325" y2="665.9"/>
                                        <line id="cg4_l6" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1156.9" y1="647.1" x2="1194" y2="768"/>
                                        <line id="cg4_l7" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1333.9" y1="681.9" x2="1302.8" y2="738.1"/>
                                        <line id="cg4_l12" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1416.7" y1="636.3" x2="1490.3" y2="551.8"/>
                                        <line id="cg4_l13" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1504.9" y1="551.4" x2="1583" y2="588"/>
                                        <line id="cg4_l14" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1586" y1="589" x2="1627" y2="546.6"/>
                                    <g id="cg4_b1">
                                        <path fill="#F68626" d="M1115.6,563l-0.2,0.8l-5.9,21.8l-4.7-11.5l-5.6-13.3h14.9C1115.1,560.8,1115.9,561.9,1115.6,563z"/>
                                        <path fill="#E08751" d="M1100.4,560.8L1100.4,560.8L1100.4,560.8z"/>
                                        <path fill="#E5E5E5" d="M1100.4,560.8L1100.4,560.8L1100.4,560.8z"/>
                                        <path fill="#F68626" d="M1113.6,551.4c0,4.4-3.6,8-8,8c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.4,0s-0.3,0-0.4,0l0,0
                                            c-3.9-0.5-6.8-3.9-6.8-7.9s3-7.3,6.8-7.9l0,0c0.1,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.4,0s0.2,0,0.4,0
                                            C1110.1,543.5,1113.6,547,1113.6,551.4z"/>
                                        <path fill="#EE7823" d="M1109.9,583.8v0.2l-1.9,7.1c-0.4,1.2-1.5,1.7-2.6,1.6c-0.8-0.1-1.6-0.6-1.9-1.6l-2-7.2l-0.7-2.7
                                            l-4.9-18.2c-0.4-1.1,0.4-2.2,1.6-2.2h3.1l0,0l5.2,12.7l0,0L1109.9,583.8z"/>
                                        <line fill="none" x1="1105.7" y1="573.5" x2="1105.7" y2="573.5"/>
                                        <path fill="#EE7823" d="M1106.9,543.6C1106.8,543.6,1106.8,543.6,1106.9,543.6C1106.8,543.6,1106.8,543.6,1106.9,543.6
                                            c-4,0.5-6.9,3.9-6.9,7.9s2.9,7.3,6.8,7.9c-0.3,0-0.7,0.1-1,0.1c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.4,0s-0.3,0-0.4,0l0,0
                                            c-3.9-0.5-6.8-3.9-6.8-7.9s3-7.3,6.8-7.9l0,0c0.1,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.4,0s0.2,0,0.4,0
                                            C1106.1,543.5,1106.5,543.5,1106.9,543.6z"/>
                                    </g>
                                    <g id="cg4_b2">
                                        <path fill="#F68626" d="M1171.1,484.1c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1166.8,474.5,1171.1,478.8,1171.1,484.1z"/>
                                        <path fill="#EE7823" d="M1162.9,493.6c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6c0-5.3,4.3-9.6,9.6-9.6
                                            c0.5,0,1,0,1.4,0.1c-4.6,0.7-8.1,4.7-8.1,9.5S1158.3,492.9,1162.9,493.6z"/>
                                    </g>
                                    <g id="cg4_b3">
                                        <path fill="#F68626" d="M1087.3,509.3c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1085.2,504.5,1087.3,506.7,1087.3,509.3z"/>
                                        <path fill="#EE7823" d="M1083.2,514.1c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C1079.1,511.7,1080.9,513.7,1083.2,514.1z"/>
                                    </g>
                                    <g id="cg4_b4">
                                        <path fill="#F68626" d="M1310.9,597.6c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1306.6,588,1310.9,592.3,1310.9,597.6z"/>
                                        <path fill="#EE7823" d="M1302.8,607.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5S1298.1,606.4,1302.8,607.1z"/>
                                    </g>
                                    <g className='toolStat'>
                                        <line id="cg4_l8" fill="none" stroke="#615571" strokeWidth="2.4439" strokeMiterlimit="10" x1="1333.9" y1="670.5" x2="1416.6" y2="604"/>
                                        <line id="cg4_l9" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1416.6" y1="604" x2="1518" y2="732.7"/>
                                        <line id="cg4_l10" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1518" y1="732.7" x2="1563.6" y2="675.3"/>
                                        <line id="cg4_l11" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="1563.6" y1="675.3" x2="1609.2" y2="716.2"/>
                                        <g id="cg4_b5">
                                            <g className='wrapper'>
                                                <path fill="#F68626" d="M1353.8,670.5c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7
                                                    s7.3-18.3,16.9-19.7c1-0.1,2-0.2,3-0.2C1344.9,650.6,1353.8,659.5,1353.8,670.5z"/>
                                                <path fill="#EE7823" d="M1336.9,690.2c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                                    c-9.6,1.4-16.9,9.7-16.9,19.7S1327.3,688.8,1336.9,690.2z"/>
                                            </g>
                                            <g id="sparkle1">
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1330.5" y1="650.1" x2="1328" y2="633.7"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1349.4" y1="658.2" x2="1362.3" y2="647.8"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1351.9" y1="678.6" x2="1367.3" y2="684.6"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1335.5" y1="691" x2="1338" y2="707.4"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1316.5" y1="682.9" x2="1303.6" y2="693.3"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1314" y1="662.5" x2="1298.6" y2="656.5"/>
                                            </g>
                                        </g>
                                        <g id="cg4_b6">
                                            <g className='bods'>
                                                <path fill="#F68626" d="M1431.1,620.9l-0.3,1.2l-8.6,31.7L1415,638l-8.8-20.3h22.6C1430.5,617.7,1431.7,619.3,1431.1,620.9z"/>
                                                <path fill="#EE7823" d="M1422.8,651.4l-0.1,0.3l-2.8,10.3c-0.6,1.8-2.3,2.6-3.8,2.3c-1.2-0.2-2.3-0.9-2.8-2.3l-2.9-10.6
                                                    l-1.1-3.9l-7.2-26.6c-0.5-1.6,0.7-3.2,2.3-3.2h4.5l0,0l7.6,18.6l0,0L1422.8,651.4z"/>
                                            </g>
                                            <g className='heady'>
                                                <g className='wrapper'>
                                                    <path fill="#F68626" d="M1428.3,604c0,6.4-5.2,11.7-11.7,11.7c-0.2,0-0.3,0-0.5,0s-0.4,0-0.6,0s-0.4,0-0.6,0l0,0
                                                        c-5.7-0.8-10-5.7-10-11.6c0-5.9,4.4-10.8,10-11.6l0,0c0.2,0,0.4-0.1,0.6-0.1s0.4,0,0.6,0s0.3,0,0.5,0
                                                        C1423.1,592.3,1428.3,597.5,1428.3,604z"/>
                                                    <path fill="#EE7823" d="M1418.4,592.4L1418.4,592.4L1418.4,592.4c-5.8,0.8-10.1,5.7-10.1,11.6c0,5.9,4.3,10.7,9.9,11.5
                                                        c-0.5,0.1-1,0.1-1.5,0.1c-0.2,0-0.3,0-0.5,0s-0.4,0-0.6,0s-0.4,0-0.6,0l0,0c-5.7-0.8-10-5.7-10-11.6s4.4-10.8,10-11.6l0,0
                                                        c0.2,0,0.4-0.1,0.6-0.1s0.4,0,0.6,0s0.3,0,0.5,0C1417.2,592.3,1417.8,592.3,1418.4,592.4z"/>
                                                </g>
                                            </g>
                                            <g id="sparkle2">
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1421.3" y1="582.4" x2="1424.8" y2="566.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1436.1" y1="596.7" x2="1451.9" y2="591.6"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1431.1" y1="616.7" x2="1443.4" y2="627.8"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1411.4" y1="622.4" x2="1407.9" y2="638.6"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1396.5" y1="608.1" x2="1380.8" y2="613.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1401.5" y1="588.1" x2="1389.2" y2="577"/>
                                            </g>
                                        </g>
                                        <g id="cg4_b7">
                                            <g className='wrapper'>
                                                <path fill="#F68626" d="M1527.6,732.7c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                                    c0.5-0.1,1-0.1,1.4-0.1C1523.3,723.1,1527.6,727.4,1527.6,732.7z"/>
                                                <path fill="#EE7823" d="M1519.5,742.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                                    c-4.6,0.7-8.1,4.7-8.1,9.5C1511.3,737.5,1514.9,741.4,1519.5,742.1z"/>
                                            </g>
                                            <g id="sparkle3">
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1509.3" y1="714" x2="1502" y2="699.1"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1529.8" y1="716" x2="1539" y2="702.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1538.3" y1="734.7" x2="1554.8" y2="735.8"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1526.3" y1="751.5" x2="1533.6" y2="766.3"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1505.8" y1="749.5" x2="1496.6" y2="763.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1497.3" y1="730.7" x2="1480.8" y2="729.6"/>
                                            </g>
                                        </g>
                                        <g id="cg4_b8">
                                            <g className='wrapper'>
                                                <path fill="#F68626" d="M1568.5,675.3c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                                    s1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1566.3,670.5,1568.5,672.6,1568.5,675.3z"/>
                                                <path fill="#EE7823" d="M1564.4,680c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                                    c-2.3,0.3-4.1,2.3-4.1,4.8S1562.1,679.7,1564.4,680z"/>
                                            </g>
                                            <g id="sparkle4">
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1577.9" y1="659.2" x2="1588.4" y2="646.4"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1584.4" y1="678.7" x2="1600.8" y2="681.5"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1570.8" y1="694.1" x2="1576.6" y2="709.7"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1550.6" y1="690.1" x2="1540.1" y2="702.8"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1544.1" y1="670.5" x2="1527.7" y2="667.8"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1557.7" y1="655.1" x2="1551.9" y2="639.6"/>
                                            </g>
                                        </g>
                                        <g id="cg4_b9">
                                            <g className='wrapper'>
                                                <path fill="#F68626" d="M1615.5,716.2c0,3.5-2.8,6.3-6.3,6.3c-0.3,0-0.6,0-0.9-0.1c-3-0.5-5.3-3.1-5.3-6.2
                                                    c0-3.1,2.3-5.7,5.3-6.2c0.3,0,0.6-0.1,0.9-0.1C1612.7,709.9,1615.5,712.7,1615.5,716.2z"/>
                                                <path fill="#EE7823" d="M1610.2,722.4c-0.3,0-0.6,0.1-0.9,0.1c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c0.3,0,0.6,0,0.9,0.1
                                                    c-3,0.5-5.3,3.1-5.3,6.2C1604.8,719.3,1607.2,721.9,1610.2,722.4z"/>
                                            </g>
                                            <g id="sparkle5">
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1610.7" y1="695.5" x2="1610.7" y2="679"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1628.2" y1="706.4" x2="1642.5" y2="698.1"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1627.6" y1="726.9" x2="1641.9" y2="735.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1609.4" y1="736.7" x2="1609.4" y2="753.2"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1591.9" y1="725.8" x2="1577.6" y2="734.1"/>
                                                    <line fill="none" stroke="#FE861D" strokeLinecap="round" strokeMiterlimit="10" x1="1592.5" y1="705.2" x2="1578.2" y2="697"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="cg4_b10">
                                        <path fill="#F68626" d="M1504.9,551.4c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1498.5,537.1,1504.9,543.5,1504.9,551.4z"/>
                                        <path fill="#EE7823" d="M1492.7,565.6c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S1485.8,564.6,1492.7,565.6z"/>
                                    </g>
                                    <g id="cg4_b11">
                                        <path fill="#F68626" d="M1592,589.3c0,3.5-2.8,6.3-6.3,6.3c-0.3,0-0.6,0-0.9-0.1c-3-0.5-5.3-3.1-5.3-6.2s2.3-5.7,5.3-6.2
                                            c0.3,0,0.6-0.1,0.9-0.1C1589.1,583,1592,585.8,1592,589.3z"/>
                                        <path fill="#EE7823" d="M1586.6,595.5c-0.3,0-0.6,0.1-0.9,0.1c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c0.3,0,0.6,0,0.9,0.1
                                            c-3,0.5-5.3,3.1-5.3,6.2S1583.6,595,1586.6,595.5z"/>
                                    </g>
                                    <g id="cg4_b12">
                                        <path fill="#F68626" d="M1632.8,545.6c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C1630.6,540.8,1632.8,543,1632.8,545.6z"/>
                                        <path fill="#EE7823" d="M1628.7,550.4c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8c0.2,0,0.5,0,0.7,0.1
                                            c-2.3,0.3-4.1,2.3-4.1,4.8C1624.6,548,1626.4,550,1628.7,550.4z"/>
                                    </g>
                                    <g id="cg4_b13">
                                        <path fill="#F68626" d="M1210.2,773.9c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1203.7,759.5,1210.2,766,1210.2,773.9z"/>
                                        <path fill="#EE7823" d="M1198,788.1c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S1191.1,787,1198,788.1z"/>
                                    </g>
                                    <g id="cg4_b14">
                                        <path fill="#F68626" d="M1312.3,738.1c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C1308,728.6,1312.3,732.8,1312.3,738.1z"/>
                                        <path fill="#EE7823" d="M1304.2,747.6c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5S1299.6,746.9,1304.2,747.6z"/>
                                    </g>
                                </g>
                                <g id="cg5">
                                        <line id="cg5_l1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="918.6" y1="601.6" x2="938.6" y2="679.5"/>
                                        <line id="cg5_l2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="940.3" y1="717.6" x2="904.5" y2="758.7"/>
                                        <line id="cg5_l3" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="905.4" y1="777.5" x2="971" y2="805"/>
                                    <g id="cg5_b1">
                                        <path fill="#F68626" d="M963.2,697.9c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7
                                            s7.3-18.3,16.9-19.7c1-0.1,2-0.2,3-0.2C954.3,678,963.2,686.9,963.2,697.9z"/>
                                        <path fill="#EE7823" d="M946.3,717.6c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                            c-9.6,1.4-16.9,9.7-16.9,19.7C929.4,707.9,936.7,716.2,946.3,717.6z"/>
                                    </g>
                                    <g id="cg5_b2">
                                        <path fill="#F68626" d="M913.6,768c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C909.3,758.4,913.6,762.7,913.6,768z"/>
                                        <path fill="#EE7823" d="M905.4,777.5c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C897.3,772.8,900.8,776.8,905.4,777.5z"/>
                                    </g>
                                    <g id="cg5_b3">
                                        <path fill="#F68626" d="M997.5,810.1c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                            s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C991,795.7,997.5,802.1,997.5,810.1z"/>
                                        <path fill="#EE7823" d="M985.3,824.3c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                            c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S978.4,823.2,985.3,824.3z"/>
                                    </g>
                                </g>
                                <g id="cg6">
                                        <line id="cg6_l1" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="833.9" y1="583.8" x2="749" y2="681.9"/>
                                        <line id="cg6_l2" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="749" y1="681.9" x2="689" y2="706"/>
                                        <line id="cg6_l3" fill="none" stroke="#615571" strokeWidth="2" strokeMiterlimit="10" x1="691.4" y1="705.3" x2="706.7" y2="779.2"/>
                                    <g id="cg6_b1">
                                        <path fill="#F68626" d="M755.2,685.8c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                            c0.5-0.1,1-0.1,1.4-0.1C750.9,676.2,755.2,680.5,755.2,685.8z"/>
                                        <path fill="#EE7823" d="M747.1,695.3c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                            c-4.6,0.7-8.1,4.7-8.1,9.5C738.9,690.6,742.5,694.6,747.1,695.3z"/>
                                    </g>
                                    <g id="cg6_b2">
                                        <path fill="#F68626" d="M695.5,705.3c0,2.7-2.2,4.8-4.8,4.8c-0.2,0-0.5,0-0.7-0.1c-2.3-0.3-4.1-2.3-4.1-4.8
                                            c0-2.4,1.8-4.4,4.1-4.8c0.2,0,0.5-0.1,0.7-0.1C693.3,700.5,695.5,702.7,695.5,705.3z"/>
                                        <path fill="#EE7823" d="M691.4,710.1c-0.2,0-0.5,0.1-0.7,0.1c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8
                                            c0.2,0,0.5,0,0.7,0.1c-2.3,0.3-4.1,2.3-4.1,4.8C687.3,707.7,689.1,709.7,691.4,710.1z"/>
                                    </g>
                                    <g id="cg6_b3">
                                        <path fill="#F68626" d="M713.9,783.1c0,3.5-2.8,6.3-6.3,6.3c-0.3,0-0.6,0-0.9-0.1c-3-0.5-5.3-3.1-5.3-6.2s2.3-5.7,5.3-6.2
                                            c0.3,0,0.6-0.1,0.9-0.1C711.1,776.8,713.9,779.6,713.9,783.1z"/>
                                        <path fill="#EE7823" d="M708.6,789.3c-0.3,0-0.6,0.1-0.9,0.1c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c0.3,0,0.6,0,0.9,0.1
                                            c-3,0.5-5.3,3.1-5.3,6.2S705.5,788.8,708.6,789.3z"/>
                                    </g>
                                </g>
                            </g>
                            <g id="body1">
                                <path fill="#F68626" d="M922.8,490.5l-0.7,2.4l-16.5,60.7l-12.5-32l-15.8-37.5h40.8C921.5,484.1,923.9,487.3,922.8,490.5z"/>
                                <polygon fill="#E08751" points="878.6,484.1 878.6,484.1 878.6,484               "/>
                                <path fill="#EE7823" d="M906.3,551.2l-0.1,0.5l-5.6,20.6c-1.2,3.5-4.5,5.1-7.5,4.7c-2.4-0.3-4.6-1.9-5.6-4.7l-5.8-21.1l-2.2-7.8
                                    l-14.3-53c-1.1-3.2,1.3-6.4,4.6-6.4h8.9l0,0l15.2,37.1v0.1L906.3,551.2z"/>
                            </g>
                            <g id="body3">
                                <path fill="#F68626" d="M275.3,185.6l-0.4,1.3l-8.8,32.4l-6.7-17.1l-8.4-20h21.8C274.6,182.2,275.9,183.9,275.3,185.6z"/>
                                <path fill="#E08751" d="M251.7,182.2L251.7,182.2L251.7,182.2z"/>
                                <path fill="#EE7823" d="M266.5,218.1l-0.1,0.3l-3,11c-0.6,1.9-2.4,2.7-4,2.5c-1.3-0.2-2.5-1-3-2.5l-3.1-11.2l-1.2-4.2l-7.6-28.3
                                    c-0.6-1.7,0.7-3.4,2.5-3.4h4.8l0,0l8.1,19.8l0,0L266.5,218.1z"/>
                            </g>
                            <g id="body2">
                                <path fill="#F68626" d="M1174.7,628l-0.4,1.5l-10.3,37.8l-7.8-19.9l-9.8-23.4h25.4C1173.9,624,1175.4,626,1174.7,628z"/>
                                <path fill="#E08751" d="M1147.2,624L1147.2,624L1147.2,624z"/>
                                <path fill="#EE7823" d="M1164.5,665.8l-0.1,0.3l-3.5,12.8c-0.7,2.2-2.8,3.2-4.7,2.9c-1.5-0.2-2.9-1.2-3.5-2.9l-3.6-13.1
                                    l-1.3-4.9l-8.9-33c-0.7-2,0.8-4,2.9-4h5.6l0,0l9.5,23.1l0,0L1164.5,665.8z"/>
                            </g>
                            <g id="ball31">
                                <path fill="#F58525" d="M793.6,572.6c0,6.9-5.6,12.4-12.4,12.4c-0.6,0-1.3,0-1.9-0.1c-6-0.9-10.5-6-10.5-12.3
                                    c0-6.2,4.6-11.4,10.5-12.3c0.6-0.1,1.2-0.1,1.9-0.1C788.1,560.2,793.6,565.7,793.6,572.6z"/>
                                <path fill="#ED7823" d="M783.1,584.8c-0.6,0.1-1.2,0.1-1.9,0.1c-6.9,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4
                                    c0.6,0,1.3,0,1.9,0.1c-6,0.9-10.5,6-10.5,12.3C772.5,578.8,777.1,583.9,783.1,584.8z"/>
                            </g>
                            <g id="ball32">
                                <path fill="#F58525" d="M831.1,574.2c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C824.7,559.8,831.1,566.2,831.1,574.2z"/>
                                <path fill="#ED7823" d="M818.9,588.3c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S812,587.3,818.9,588.3z"/>
                            </g>
                            <g id="ball33">
                                <path fill="#F58525" d="M861.9,569.5c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C857.6,559.9,861.9,564.2,861.9,569.5z"/>
                                <path fill="#ED7823" d="M853.8,579c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5S849.2,578.3,853.8,579z"/>
                            </g>
                            <g id="ball34">
                                <path fill="#F58525" d="M908.1,583.7c0,12.8-10.4,23.2-23.2,23.2c-1.2,0-2.4-0.1-3.5-0.3c-11.2-1.7-19.7-11.3-19.7-23
                                    c0-11.6,8.6-21.3,19.7-23c1.1-0.2,2.3-0.3,3.5-0.3C897.7,560.5,908.1,570.9,908.1,583.7z"/>
                                <path fill="#ED7823" d="M888.4,606.7c-1.1,0.2-2.3,0.3-3.5,0.3c-12.8,0-23.2-10.4-23.2-23.2s10.4-23.2,23.2-23.2
                                    c1.2,0,2.4,0.1,3.5,0.3c-11.2,1.7-19.7,11.3-19.7,23C868.7,595.4,877.2,605,888.4,606.7z"/>
                            </g>
                            <g id="ball35">
                                <path fill="#F58525" d="M937.8,574.6c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C931.4,560.3,937.8,566.7,937.8,574.6z"/>
                                <path fill="#ED7823" d="M925.6,588.8c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C913.4,581.8,918.7,587.8,925.6,588.8z"/>
                            </g>
                            <g id="ball36">
                                <path fill="#F58525" d="M973.4,574.8c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C966.9,560.4,973.4,566.8,973.4,574.8z"/>
                                <path fill="#ED7823" d="M961.2,589c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S954.3,587.9,961.2,589z"/>
                            </g>
                            <g id="ball37">
                                <path fill="#F58525" d="M1004.2,569.6c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C999.9,560,1004.2,564.3,1004.2,569.6z"/>
                                <path fill="#ED7823" d="M996,579.1c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5C987.9,574.4,991.4,578.4,996,579.1z"/>
                            </g>
                            <g id="Ball21">
                                <path fill="#FE861D" d="M832.8,568.1c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C826.4,553.7,832.8,560.2,832.8,568.1z"/>
                                <path fill="#EF771D" d="M820.6,582.3c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2C808.4,575.3,813.7,581.2,820.6,582.3z"/>
                            </g>
                            <g id="Ball22">
                                <path fill="#FE861D" d="M872.9,577.7c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                    s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C860.7,550.4,872.9,562.7,872.9,577.7z"/>
                                <path fill="#EF771D" d="M849.8,604.7c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                    c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27S836.6,602.7,849.8,604.7z"/>
                            </g>
                            <g id="Ball23">
                                <path fill="#FE861D" d="M872.9,568.1c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C868.6,558.5,872.9,562.8,872.9,568.1z"/>
                                <path fill="#EF771D" d="M864.7,577.6c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5S860.1,576.9,864.7,577.6z"/>
                            </g>
                            <g id="Ball24">
                                <path fill="#FE861D" d="M900.2,577.7c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7s7.3-18.3,16.9-19.7
                                    c1-0.1,2-0.2,3-0.2C891.3,557.8,900.2,566.7,900.2,577.7z"/>
                                <path fill="#EF771D" d="M883.3,597.4c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                    c-9.6,1.4-16.9,9.7-16.9,19.7C866.4,587.7,873.7,596,883.3,597.4z"/>
                            </g>
                            <g id="Ball25">
                                <path fill="#FE861D" d="M944.7,577.7c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C940.4,568.2,944.7,572.4,944.7,577.7z"/>
                                <path fill="#EF771D" d="M936.5,587.2c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5C928.4,582.6,931.9,586.5,936.5,587.2z"/>
                            </g>
                            <g id="Ball26">
                                <path fill="#FE861D" d="M934.8,577.7c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                    s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C922.6,550.4,934.8,562.7,934.8,577.7z"/>
                                <path fill="#EF771D" d="M911.7,604.7c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                    c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27S898.5,602.7,911.7,604.7z"/>
                            </g>
                            <g id="Ball27">
                                <path fill="#FE861D" d="M992.5,577.7c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7s7.3-18.3,16.9-19.7
                                    c1-0.1,2-0.2,3-0.2C983.6,557.7,992.5,566.6,992.5,577.7z"/>
                                <path fill="#EF771D" d="M975.5,597.4c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                    c-9.6,1.4-16.9,9.7-16.9,19.7C958.6,587.6,966,595.9,975.5,597.4z"/>
                            </g>
                            <g id="Ball28">
                                <path fill="#FE861D" d="M1013,572.2c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1006.6,557.9,1013,564.3,1013,572.2z"/>
                                <path fill="#EF771D" d="M1000.8,586.4c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S993.9,585.4,1000.8,586.4z"/>
                            </g>
                            <g id="Ball1">
                                <path fill="#FE861D" d="M836,585.8c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C829.6,571.4,836,577.9,836,585.8z"/>
                                <path fill="#EF771D" d="M823.8,600c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S816.9,598.9,823.8,600z"/>
                            </g>
                            <g id="Ball2">
                                <path fill="#FE861D" d="M876.1,595.4c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                    s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C863.9,568.1,876.1,580.4,876.1,595.4z"/>
                                <path fill="#EF771D" d="M853,622.4c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                    c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27S839.8,620.4,853,622.4z"/>
                            </g>
                            <g id="Ball3">
                                <path fill="#FE861D" d="M876.1,585.8c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C871.8,576.2,876.1,580.5,876.1,585.8z"/>
                                <path fill="#EF771D" d="M867.9,595.3c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5C859.8,590.6,863.3,594.6,867.9,595.3z"/>
                            </g>
                            <g id="Ball4">
                                <path fill="#FE861D" d="M903.4,595.4c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7s7.3-18.3,16.9-19.7
                                    c1-0.1,2-0.2,3-0.2C894.5,575.5,903.4,584.4,903.4,595.4z"/>
                                <path fill="#EF771D" d="M886.5,615.1c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                    c-9.6,1.4-16.9,9.7-16.9,19.7C869.6,605.4,876.9,613.7,886.5,615.1z"/>
                            </g>
                            <g id="Ball5">
                                <path fill="#FE861D" d="M947.9,595.4c0,5.3-4.3,9.6-9.6,9.6c-0.5,0-1,0-1.4-0.1c-4.6-0.7-8.1-4.7-8.1-9.5s3.5-8.8,8.1-9.5
                                    c0.5-0.1,1-0.1,1.4-0.1C943.6,585.9,947.9,590.1,947.9,595.4z"/>
                                <path fill="#EF771D" d="M939.7,604.9c-0.5,0.1-1,0.1-1.4,0.1c-5.3,0-9.6-4.3-9.6-9.6s4.3-9.6,9.6-9.6c0.5,0,1,0,1.4,0.1
                                    c-4.6,0.7-8.1,4.7-8.1,9.5C931.6,600.3,935.1,604.2,939.7,604.9z"/>
                            </g>
                            <g id="Ball6">
                                <path fill="#FE861D" d="M938,595.4c0,15.1-12.2,27.3-27.3,27.3c-1.4,0-2.8-0.1-4.1-0.3c-13.1-2-23.2-13.3-23.2-27
                                    s10.1-25,23.2-27c1.3-0.2,2.7-0.3,4.1-0.3C925.8,568.1,938,580.4,938,595.4z"/>
                                <path fill="#EF771D" d="M914.9,622.4c-1.3,0.2-2.7,0.3-4.1,0.3c-15.1,0-27.3-12.2-27.3-27.3s12.2-27.3,27.3-27.3
                                    c1.4,0,2.8,0.1,4.1,0.3c-13.1,2-23.2,13.3-23.2,27C891.7,609.1,901.7,620.4,914.9,622.4z"/>
                            </g>
                            <g id="Ball7">
                                <path fill="#FE861D" d="M995.7,595.4c0,11-8.9,19.9-19.9,19.9c-1,0-2-0.1-3-0.2c-9.6-1.4-16.9-9.7-16.9-19.7s7.3-18.3,16.9-19.7
                                    c1-0.1,2-0.2,3-0.2C986.8,575.4,995.7,584.3,995.7,595.4z"/>
                                <path fill="#EF771D" d="M978.7,615.1c-1,0.1-2,0.2-3,0.2c-11,0-19.9-8.9-19.9-19.9s8.9-19.9,19.9-19.9c1,0,2,0.1,3,0.2
                                    c-9.6,1.4-16.9,9.7-16.9,19.7C961.8,605.3,969.2,613.6,978.7,615.1z"/>
                            </g>
                            <g id="Ball8">
                                <path fill="#FE861D" d="M1016.2,589.9c0,7.9-6.4,14.4-14.4,14.4c-0.7,0-1.5-0.1-2.2-0.2c-6.9-1-12.2-7-12.2-14.2
                                    s5.3-13.2,12.2-14.2c0.7-0.1,1.4-0.2,2.2-0.2C1009.8,575.6,1016.2,582,1016.2,589.9z"/>
                                <path fill="#EF771D" d="M1004,604.1c-0.7,0.1-1.4,0.2-2.2,0.2c-7.9,0-14.4-6.4-14.4-14.4c0-7.9,6.4-14.4,14.4-14.4
                                    c0.7,0,1.5,0.1,2.2,0.2c-6.9,1-12.2,7-12.2,14.2S997.1,603.1,1004,604.1z"/>
                            </g>
                            <g id="BallsLines">
                                <g id="ballLine1">
                                    <path fill="#FBEDD6" d="M569.4,408.4c56.7,10.1,110.6,32.8,157.5,66.2c0.7,0.5,1.3-0.6,0.6-1.1c-47-33.4-101.1-56.1-157.8-66.3
                                        C568.9,407,568.6,408.2,569.4,408.4L569.4,408.4z"/>
                                </g>
                                <g id="ballLine2">
                                    <path fill="#FBEDD6" d="M547.4,302.2c65.1,23.1,117.6,69.5,167.5,115.7c14.9,13.8,29.7,27.6,44.9,41.1c0.6,0.5,1.5-0.3,0.9-0.9
                                        c-52.3-46.5-101-98.3-162.1-133.5c-16.2-9.4-33.2-17.4-50.8-23.6C547,300.7,546.7,301.9,547.4,302.2L547.4,302.2z"/>
                                </g>
                                <g id="ballLine3.1">
                                    <path fill="#FBEDD6" d="M709.3,316.8c10,6.1,18.2,15.7,25.9,24.4c12,13.5,23.3,27.7,34.2,42c22.8,29.8,44.6,60.5,65.2,91.9
                                        c6.6,10.1,13.6,20.3,18.9,31.1c0.4,0.7,1.4,0.1,1.1-0.6c-4.5-9.3-10.5-18.1-16.1-26.7c-9.5-14.6-19.3-29.1-29.3-43.4
                                        c-22-31.3-44.6-62.5-69.8-91.4c-8.7-10-18-21.4-29.5-28.4C709.2,315.3,708.6,316.4,709.3,316.8L709.3,316.8z"/>
                                </g>
                                <g id="ballLine3.2">
                                    <path fill="#FBEDD6" d="M605.7,231.6c-57.3-43.8-116-88.3-185.4-110.9c-0.8-0.2-1.1,1-0.3,1.2
                                        c69.3,22.5,127.9,67.1,185.1,110.8C605.7,233.2,606.4,232.1,605.7,231.6L605.7,231.6z"/>
                                </g>
                                <g id="ballLine4.1">
                                    <path fill="#FBEDD6" d="M824.2,316.1c15.6,35.6,27.5,72.1,37.9,109.4c0.2,0.8,1.4,0.4,1.2-0.3c-10.5-37.5-22.4-74-38-109.7
                                        C825,314.7,823.9,315.3,824.2,316.1L824.2,316.1z"/>
                                </g>
                                <g id="ballLine4.2">
                                    <path fill="#FBEDD6" d="M742.2,113.3c-12-16.1-25.7-30.8-40.8-44c-0.6-0.5-1.5,0.4-0.9,0.9c15.1,13.1,28.7,27.8,40.6,43.8
                                        C741.6,114.6,742.7,113.9,742.2,113.3L742.2,113.3z"/>
                                </g>
                                <g id="ballLine5">
                                    <path fill="#FBEDD6" d="M979,380.7c-21.7,29.2-30.6,65.7-37.2,100.9c-0.1,0.8,1.1,1.1,1.2,0.3c6.6-35.1,15.4-71.4,37.1-100.6
                                        C980.5,380.7,979.4,380.1,979,380.7L979,380.7z"/>
                                </g>
                                <g id="ballLine6.1">
                                    <path fill="#FBEDD6" d="M937,317.9c-14.4,31-22.6,64.5-24.2,98.7c0,0.8,1.2,0.8,1.3,0c1.6-33.9,9.7-67.2,24-98.1
                                        C938.4,317.9,937.4,317.2,937,317.9L937,317.9z"/>
                                </g>
                                <g id="ballLine6.2">
                                    <path fill="#FBEDD6" d="M1037.5,134.9c14.1-16.1,31.1-29.3,50.2-38.9c0.7-0.4,0.1-1.4-0.6-1.1c-19.2,9.6-36.3,22.8-50.5,39.1
                                        C1036.1,134.6,1037,135.5,1037.5,134.9L1037.5,134.9z"/>
                                </g>
                                <g id="ballLine7">
                                    <path fill="#FBEDD6" d="M997.7,504.5c16.1-34.4,37.1-66.6,58.8-97.7c24.3-34.7,50.3-68.2,77.6-100.5
                                        c13.2-15.6,26.8-31,40.9-45.8c0.6-0.6-0.3-1.5-0.9-0.9c-26.6,28.1-51.6,57.8-75.4,88.3c-25.8,32.9-50.5,66.9-72.5,102.5
                                        c-10.8,17.3-20.9,35.1-29.6,53.6C996.3,504.6,997.4,505.2,997.7,504.5L997.7,504.5z"/>
                                </g>
                                <g id="ballLine8">
                                    <path fill="#FBEDD6" d="M1050.2,479.7c23.2-26,49.3-49.4,75.9-71.9c29.6-25.1,60.3-48.9,91.9-71.4
                                        c15.2-10.8,30.7-21.3,46.6-31.2c0.7-0.4,0.1-1.5-0.6-1.1c-30.1,18.7-58.9,39.5-87,61.1c-30.4,23.3-60.1,47.8-88.2,73.9
                                        c-13.7,12.7-27,25.8-39.5,39.7C1048.8,479.4,1049.7,480.3,1050.2,479.7L1050.2,479.7z"/>
                                </g>
                            </g>
                        </g>

                        <g id="BlockFull" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="BlockLine">
                                <path id="popRight3" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M1048.3,790.3c5.9-8.1,15.8-17.8,17.5-19.1"/>
                                <path id="popRight2" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M1065.8,799.7c11.1-3.9,26.8-7.2,30.6-7.6"/>
                                <path id="popRight1" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M1073.5,817.7c10.1-3,26.7-4.9,31.2-4.8"/>
                                <path id="popLeft3" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M739.7,790.4c-1.2-1.7-12.8-15.6-17.7-19"/>
                                <path id="popLeft2" fill="none" stroke="#FAEDD7" strokeLinecap="round" strokeMiterlimit="10" d="M722.1,799.6c-8.4-2.8-22.3-6.5-30.3-7.6"/>
                                <path id="popLeft1" fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" d="M714.3,817.6c-14.5-4-30-5-31.4-4.9"/>
                                <line id="down1" fill="none" stroke="#FAEDD7" strokeLinecap="round" strokeMiterlimit="10" x1="712.8" y1="412.3" x2="712.8" y2="479.8"/>
                                <line id="down2" fill="none" stroke="#FAEDD7" strokeLinecap="round" strokeMiterlimit="10" x1="733.1" y1="426.1" x2="732.8" y2="580.1"/>
                                <line id="down3" fill="none" stroke="#FAEDD7" strokeLinecap="round" strokeMiterlimit="10" x1="1054" y1="507.7" x2="1054" y2="557.8"/>
                                <line id="down4" fill="none" stroke="#FAEDD7" strokeLinecap="round" strokeMiterlimit="10" x1="1078.8" y1="411.7" x2="1078.8" y2="517.5"/>
                            </g>
                            <g id="Block">
                                <line id="boxRightHandle" fill="none" stroke="#6FB6AB" strokeWidth="5" strokeMiterlimit="10" x1="1032.3" y1="413.2" x2="1032.3" y2="548.9"/>
                                <line id="boxLeftHandle" fill="none" stroke="#69AFA3" strokeWidth="5" strokeMiterlimit="10" x1="754.3" y1="413.9" x2="754.3" y2="549.5"/>
                                <path id="boxMorph" display="none" fill="#6FB6AB" d="M752.4,546c26.1,0,269.4,0,283,0c-21.9,131-31.9,132.5-0.1,283
                                    c-17.8,0-263.6,0-283,0C783,676,773.8,669.6,752.4,546z"/>
                                <path id="box_1_" fill="#6FB6AB" d="M1035,829H752V546h283V829z"/>
                                <path id="boxShadowMorph" display="none" fill="#5BAA9B" d="M790,829c-16,0-22,0-38,0c24.7-143,24.7-152.5,0-283
                                    c22,0,23.5,0,38,0C814,677.5,814.5,687.5,790,829z"/>
                                <path id="boxShadow_1_" fill="#5BAA9B" d="M790,829h-38V546h38V829z"/>
                                <path id="boxShadowBump" className="hidden" fill="#5BAA9B" d="M790,829c-10,0-8.1,0-38,0c-110-11.3-111-117,0-174.5c31,0,25,0,38,0
                                    C701.5,697,689.5,823,790,829z"/>
                                <path id="boxBump" className="hidden" fill="#6FB6AB" d="M1035,829c-26.7,0-248,0-283,0c-116.5-16.2-106-118.5,0-174.5
                                    c32,0,239.2,0,283,0C1142.3,705.3,1155,812.8,1035,829z"/>
                            </g>
                        </g>

                        <g id="ToolsLine" className='hidden' clipPath="url(#bigMask_1_)">
                            <line fill="none" stroke="#71545A" strokeMiterlimit="10" x1="675.8" y1="624.3" x2="757.9" y2="580.9"/>
                            <line fill="none" stroke="#71545A" strokeMiterlimit="10" x1="905" y1="559.6" x2="988.9" y2="517.2"/>
                            <line fill="none" stroke="#71545A" strokeMiterlimit="10" x1="785" y1="569.8" x2="877.5" y2="562.3"/>
                            <line fill="none" stroke="#71545A" strokeMiterlimit="10" x1="1016" y1="508.4" x2="1108.5" y2="500.9"/>
                        </g>

                        <g id="ExpertiseFull" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="ExpertiseArm4Full">
                                <g className='handNtool'>
                                    <g id="ExpertiseArm4Mouse">
                                        <path fill="#FFFFFF" d="M1265.3,492.7h10.5c13.1,0,23.8,10.6,23.8,23.8V561c0,13.1-10.6,23.8-23.8,23.8h-10.5
                                            c-13.1,0-23.8-10.6-23.8-23.8v-44.5C1241.5,503.3,1252.2,492.7,1265.3,492.7z"/>
                                    </g>
                                    <g id="ExpertiseArm4Hand">
                                        <path fill="#F6CD99" d="M1309.1,541.9c-0.3,2.4-4.7,24.7-7.2,32c-2.2,6.2-4.9,11.4-7.7,17.3c-4.9,10.4-7,22.1-5.9,33.6
                                            c-11.5,2.1-22.2,3.1-33.8,3c-1.6-6.9-0.4-14.3-2.7-21.1c-2.4-7-8.3-12.2-11.9-18.7c-5.1-9.1-5.3-20.1-5.3-30.6
                                            c0-4.6,0-9.5,2.2-13.6c1-1.9,1.3-3,2.9-3.9c2.1-1.1,4.6-0.9,6.2,0.8c1.8,2,1.6,4.8,1.2,7.3c-1,6.6-2.4,13.2-1.2,19.7
                                            c0.4,2.3,1.2,4.7,3.2,5.9c3.3,2.1,7.7-0.5,10-3.7c3.4-4.6,4.5-10.5,5.2-16.1c0.5-4.8,0.7-9.5,0.7-14.3c0-6-0.3-11.9-0.6-17.9
                                            c-0.1-2.3,0.2-6.5,0.6-7.4c0.8-2.1,2.6-4,4.8-4.4c2.4-0.5,4.8,0.9,6.2,3c1.4,2,1.9,4.5,2.1,6.9c1,10.8-0.1,21.7-1.9,32.4
                                            c0,0.1-0.5,2.6-1,5.4c-0.4,2,2.4,3,3.4,1.3c0.8-1.3,1.4-2.6,1.7-3.7c0.8-3.1,1.5-6.1,2-9.1l0,0c1-7.2,1.4-14.4,1.8-21.7
                                            c0.1-2.2,0.3-4.4,1.2-6.4c0.9-2,2.7-3.7,4.8-3.9c2.3-0.2,4.5,1.4,5.6,3.4s1.3,4.4,1.3,6.7c-0.1,9.9-4,26.1-6.5,35.5
                                            c-0.5,2,2.3,3.3,3.3,1.4c0,0,0,0,0-0.1c3.4-5.9,4.4-13.4,5.8-20.1c0.3-1.6,0.7-3.3,1.5-4.6c0.9-1.4,2.4-2.5,4-2.4
                                            c1.7,0.1,3.2,1.5,3.8,3.1C1309.5,538.4,1309.4,540.2,1309.1,541.9z"/>
                                        <path fill="#E5B989" d="M1239.1,540.4c0.2-0.1,0.4-0.3,0.6-0.4c2.1-1.2,4.6-0.9,6.2,0.8c1.9,2,1.6,4.8,1.2,7.3
                                            c-0.9,6.1-2,12.9-1.4,18.4c-2-7.2,0.4-21.1-0.2-23.4C1244.8,540.2,1239.1,540.4,1239.1,540.4z"/>
                                        <path fill="#E5B989" d="M1264.2,554c0.5-4.8,0.7-9.5,0.7-14.3c0-6-0.3-11.9-0.6-17.9c-0.1-2.3,0.2-6.5,0.6-7.4
                                            c0.8-2.1,2.6-4,4.8-4.4c0.9-0.2,1.9-0.1,2.7,0.2c0,0-5,0.1-4.7,8.7s1,39.9-5.9,46.2C1263.2,561.5,1263.8,557.7,1264.2,554z"/>
                                        <path fill="#E5B989" d="M1280.2,555.1c0.9-3.1,1.5-6.1,2.1-9.1l0,0c1-7.2,1.4-14.4,1.8-21.7c0.1-2.2,0.3-4.4,1.2-6.4
                                            c0.9-2,2.7-3.7,4.8-3.9c1.6-0.2,3.2,0.6,4.4,1.8c0,0-4.7-0.5-6.5,3.3c-1.1,2.4-2.1,13.8-3.2,23.4
                                            C1284.1,548.3,1280.2,555.1,1280.2,555.1z"/>
                                        <path fill="#E5B989" d="M1295.6,557.2c2.1-5.2,2.9-11,4-16.4c0.3-1.6,0.7-3.3,1.5-4.6c0.9-1.4,2.4-2.5,4-2.4
                                            c1.1,0,2.1,0.7,2.9,1.5c0,0-3-0.9-4.5,1.6c-1.1,1.8-3,8.9-4.4,14.2C1298.2,554.2,1295.6,557.2,1295.6,557.2z"/>
                                    </g>
                                </g>
                                <g id="ExpertiseArm4">
                                    <rect x="1245.5" y="619.7" fill="#BBD13B" width="53" height="547.2"/>
                                    <rect x="1284.5" y="619.7" fill="#9FAA31" width="14" height="547.2"/>
                                    <circle fill="#9FAA31" cx="1252.1" cy="626.8" r="2.7"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm1Full">
                                <g className='handNtool'>
                                    <g id="ExpertiseArm1Pen">
                                        <polygon fill="#016A7C" points="437,405.9 417.6,425.1 417.4,425.1 417.4,425.1 411.3,418.8 379.1,386.4 368.4,375.7
                                            357.4,364.6 313.9,321.2 313.8,321.1 313.9,321 332.9,302 332.9,301.9 333.1,302.1 387,355.9 436.9,405.9                       "/>
                                        <polygon fill="#F6CD99" points="314,321.2 303.4,291.6 333.1,302.1                       "/>
                                        <polygon fill="#016A7C" points="306.9,301.3 313.1,295 303.4,291.6                       "/>

                                            <rect x="415.9" y="414.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.4425 425.9262)" fill="#EAEAEA" width="27.1" height="5.8"/>

                                            <rect x="422.1" y="417.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -172.0358 432.1693)" fill="#E4575E" width="27.1" height="11.7"/>
                                    </g>
                                    <g id="ExpertiseArm1Hand">
                                        <path fill="#F6CD99" d="M410.2,424.8c-1,5.9-1,19.7,0,29.2c-9.9,1.8-7,8.7-16.9,9c-1.6,0-16.7,2.3-16.9-21.1
                                            c-1.7-6.9-0.4-14.3-2.7-21.1c-2.4-7-8.3-12.2-11.9-18.7c-5.1-9.1-5.3-20.1-5.3-30.6c0-1.8,0.3-4.3,0.8-7
                                            c0.8-4.3,2.3-8.8,4.3-10.5c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.4-0.2c0.1,0,0.2-0.1,0.2-0.1
                                            c2-0.6,4.6-0.2,5.9,1.2c1.8,2,1.6,4.8,1.2,7.3c-0.7,4.5-1.5,9.1-1.7,13.6c-0.1,2,0.1,4.1,0.4,6.1c0.4,2.3,1.2,4.7,3.2,5.8
                                            c0.6,0.4,1.2,0.6,1.8,0.7c0.1,0.1,0.3,0.3,0.4,0.4L410.2,424.8z"/>
                                        <path fill="#F6CD99" d="M401.6,367.6c1.3-8.6-0.7-11.3-3.8-12.9c-2.8-1.4-11.4-2.5-15.8,0c-2.1,1.2-3.9,2.8-5.4,4.7
                                            s-2.5,4.2-2.4,6.6s1.6,4.7,3.9,5.5c1.7,0.6,3.7,0.2,5.3-0.6s3-2,4.5-3.2c2.1-1.7,5.1-3.4,7.8-3.1l4.8,4.8L401.6,367.6z"/>
                                        <path fill="#F6CD99" d="M375.3,388.4l-4.1,27.1c-2.8-4.5-6.6-8.6-9.2-13.2c-5.1-9.1-5.3-20.1-5.3-30.6
                                            c0-4.6,1.8-14.8,5.1-17.5c1.8-1.5,5.5-1.2,7.1,0.6c1.9,2,1.6,4.8,1.2,7.3c-1,6.5-2.4,13.2-1.2,19.7c0.4,2.3,1.2,4.6,3.2,5.8
                                            C373.1,388.3,374.3,388.5,375.3,388.4z"/>
                                        <path fill="#E5B989" d="M411.5,418.8c-0.5,2-0.9,4-1.3,6.1l-36.1-36.1c-0.1-0.1-0.3-0.3-0.4-0.4c0.7,0.1,1.5,0.1,2.2-0.1
                                            c1.1-0.3,2.2-1,3.2-1.8L411.5,418.8z"/>
                                        <path fill="#E5B989" d="M401.8,365.5c-0.1,0.7-0.2,1.4-0.3,2.1l-1.2,1.8l-4.8-4.8C397.9,364.7,399.6,364.9,401.8,365.5z"/>
                                        <path fill="#E5B989" d="M388.9,366.8c-0.4,0.3-0.7,0.5-1.1,0.8c-1.4,1.1-2.8,2.3-4.5,3.2c-1.6,0.8-3.6,1.2-5.3,0.6
                                            c-1.3-0.4-2.3-1.4-3-2.6C376.1,369.8,379.5,373,388.9,366.8z"/>
                                        <path fill="#F6CD99" d="M415.2,380.4c1-8-2.7-10.2-5.6-11.6c-3.7-1.7-8.1-1.7-12-0.4c-3.9,1.2-7.3,3.9-9.5,7.3
                                            c-0.7,1-1.2,2.2-1.4,3.4s0.2,2.6,1.2,3.4c0.8,0.7,1.9,0.9,3,0.9c3,0,5.8-1.6,8.4-3.2c2.6-1.5,5.8-3.3,8.8-3.1l5.5,5.5
                                            L415.2,380.4z"/>
                                        <path fill="#E5B989" d="M415.4,378.2c-0.1,0.7-0.1,1.4-0.2,2.1l-1.5,2.3l-5.5-5.5C410.5,377.3,413.2,377.6,415.4,378.2z"/>
                                        <path fill="#F6CD99" d="M422.6,391.6c2.1-8-1.7-10.3-4.6-11.1c-5.9-1.7-12.5,1.5-16.8,5.9c-0.8,0.8-1.5,1.7-1.9,2.8
                                            c-0.4,1.1-0.4,2.3,0.3,3.3c0.9,1.3,2.6,1.7,4.2,1.6c5.3-0.2,11.2-4.1,16.4-5L422.6,391.6z"/>
                                        <path fill="#E5B989" d="M420.1,389.1c0,0,1.6-0.2,2.9,0.4c0,0.2-0.3,1.7-0.4,2.1C422.3,391.3,420.1,389.1,420.1,389.1z"/>
                                        <path fill="#E5B989" d="M401.7,379c-0.8,0.4-1.6,0.9-2.3,1.3c-2.6,1.5-5.4,3.2-8.4,3.2c-1.1,0-2.2-0.2-3-0.9
                                            c-0.2-0.2-0.3-0.3-0.5-0.5C387.8,382.3,390.8,384.3,401.7,379z"/>
                                        <path fill="#E5B989" d="M413.7,391.2c-3.3,1.3-6.7,2.8-9.9,2.9c-1.3,0-2.8-0.2-3.8-1.1C400.4,393.2,403.8,394.8,413.7,391.2z"
                                            />
                                    </g>
                                </g>
                                <g id="ExpertiseArm1">
                                    <rect x="365.5" y="440.9" fill="#E55648" width="53" height="726.1"/>
                                    <rect x="365.5" y="440.9" fill="#B73D37" width="14" height="726.1"/>
                                    <circle fill="#B73D37" cx="411.5" cy="447.2" r="2.7"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm5Full">
                                <g id="ExpertiseArm5Hands">
                                    <g id="R_14_">
                                        <path fill="#F6CD99" d="M1561.9,726.7c-7.1-0.4-14.2,2.1-21.2,1c-7.3-1.1-13.5-6-20.5-8.5c-9.9-3.4-20.7-1.7-31,0
                                            c-4.6,0.8-14.3,4.4-16.3,8.1c-1.1,2.1-0.1,4.7,1.9,6c2.3,1.5,5,0.7,7.4-0.1c6.3-2.1,12.6-4.6,19.2-4.6c2.3,0,4.8,0.4,6.3,2.1
                                            c2.6,2.9,0.8,7.6-1.9,10.4c-4,4.1-9.5,6.3-15,7.9c-4.6,1.3-9.3,2.4-14,3.2c-0.3,0-0.5,0.1-0.8,0.1c-4.6,0.8-9.3,1.4-14,2
                                            c-0.9,0.9-1.6,1.9-2.2,3c-0.5,1-0.9,2.2-1.2,3.5c-0.1,2.5-0.1,4.9,0.9,6.8c0.2,0.4,0.5,0.8,0.8,1.1c3.4-0.3,6.8-0.8,10.2-1.5
                                            c2.9-0.6,5.8-1.3,8.7-2.1l0,0c2.5-0.7,5-1.5,7.4-2.3c1.5-0.5,3-1,4.4-1.5c0,0,2.4-0.9,5.1-1.9c1.9-0.7,3.4,1.8,1.8,3.1
                                            c-1.2,1-2.3,1.8-3.4,2.3c-2,1-4,1.8-6,2.6c-0.9,0.3-1.7,0.7-2.5,1l0,0c-3.8,1.2-7.7,2.3-11.6,3.3c-0.2,0.9-0.4,1.8-0.5,2.8
                                            c0,0.8,0,1.5,0.2,2.2c0.5,2.6,2.4,4.8,4.7,6.1c0.2,0.1,0.4,0.2,0.6,0.3c2.1-0.7,4.1-1.5,6.2-2.4c1.4-0.5,2.7-1.1,4-1.7
                                            c2.6-1.1,5-2.2,7.3-3.2v4.4h1.3c-3.5,2-7.3,3.4-11,4.8c0,0.6,0,1.3,0.1,1.9c0.1,1.2,0.3,2.4,1,3.4c0.7,1.1,1.9,1.8,3.2,2.1
                                            c0.8,0.2,1.6,0.3,2.4,0.4l0,0c1.9-0.7,4-1.6,6.3-2.5l0,0c6.4-2.6,13.4-5.6,16.8-7.5c5.7-3.2,10.4-6.8,15.7-10.6
                                            c9.4-6.6,20.6-10.7,32.1-11.6l21.6-3.1l-7.1-32.4L1561.9,726.7z M1500.7,774.1c1.1-0.5,2.2,0.2,2.6,1.1h-5
                                            C1499.1,774.9,1499.9,774.5,1500.7,774.1z"/>
                                    </g>
                                    <g id="R_12_">
                                        <path fill="#E5B989" d="M1510.8,785.9c-0.7,0.3-1.5,0.7-2.3,1c-3.1-1.8-6.1-3.8-8.5-6.4c0,0,0,0,0-0.1c-0.3-0.3-0.4-0.6-0.5-1
                                            c-0.2-1.3,1.1-2.5,2.5-2c-0.1,0.3-0.2,0.6-0.2,1c0,0.3,0.2,0.7,0.5,1c0,0,0,0,0,0.1C1504.7,782.1,1507.7,784.1,1510.8,785.9z"
                                            />
                                    </g>
                                    <g id="R_11_">
                                        <path fill="#E5B989" d="M1527.6,775.9c-0.6,0.4-1.2,0.8-1.7,1.2c-2.8-1.1-5.6-2.2-8.3-3.4l0,0c-2.7-1.4-5.4-2.8-8.1-4.5
                                            c-1-0.6-2.1-1.6-3.1-2.7c-1.4-1.4,0.2-3.7,2-3c-0.3,0.6-0.2,1.4,0.4,2c1,1.1,2.1,2.1,3.1,2.7c2.7,1.7,5.4,3.2,8.1,4.5l0,0
                                            C1522.4,773.8,1525,774.9,1527.6,775.9z"/>
                                    </g>
                                    <g id="R_10_">
                                        <path fill="#E5B989" d="M1551.1,763.3c0,0-1.8,0.6-2.7,0.9c-0.9-0.3-1.8-0.6-2.6-0.8c-5.8-1.4-11.6-2.8-17.3-4.5
                                            c-4.6-1.4-9.1-2.9-13.5-4.8c-5.2-2.2-10.3-4.9-13.8-9.2l0,0c0.7-0.4,1.4-0.9,2-1.4c0,0,0,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3
                                            c3.5,4.4,8.6,7.1,13.8,9.2c4.4,1.9,8.9,3.4,13.5,4.8c5.7,1.7,11.5,3.1,17.3,4.5C1548.9,762.6,1551.1,763.3,1551.1,763.3z"/>
                                    </g>
                                    <g id="R_6_">
                                        <path fill="#E5B989" d="M1508.6,734c-0.1-0.5-0.3-0.9-0.6-1.4c-0.1-0.3-0.3-0.5-0.6-0.7c-1.5-1.7-4-2.1-6.3-2.1
                                            c-6.6,0-12.9,2.6-19.2,4.6c-2.4,0.8-5.1,1.6-7.4,0.1c-1.2-0.8-2.1-2.5-2.2-4.2c0-0.3,0-0.6,0-0.9c0,0,2.4,4.2,7.7,2.8
                                            S1507.6,723.1,1508.6,734z"/>
                                    </g>
                                    <g id="L">
                                        <path fill="#E19259" d="M1440.4,757.4l-16.1-4.6l5.3-32.3l17.2,3.4c7,0.4,13.8,3.7,20.9,3.4h0.1c2-0.1,3.9-0.4,5.8-1
                                            c5.2-1.4,10.2-4,15.5-5.1c10.2-2.3,20.8,0.6,30.9,3.5c4.4,1.3,13.7,5.9,15.3,9.8c0.1,0.3,0.2,0.6,0.2,0.9l-13.4,2.4
                                            c-4.4-2.1-8.8-4.1-13.5-5c-0.6-0.1-1.2-0.2-1.9-0.3c-1.3-0.2-2.7-0.2-4,0.1c-0.9,0.2-1.8,0.6-2.5,1.3
                                            c-2.9,2.6-1.7,7.5,0.7,10.6c0.1,0.1,0.2,0.2,0.3,0.3c3.5,4.4,8.6,7.1,13.8,9.2c4.4,1.8,8.9,3.4,13.5,4.8
                                            c5.7,1.7,11.5,3.1,17.3,4.5c0.7,0.2,1.7,0.5,2.6,0.8c0.1,0,0.2-0.1,0.3-0.1c0,0.1,0,0.2,0,0.2c0.2,3.3-1,6.8-3.3,9.1
                                            c-0.6,0.6-1.3,1.1-2,1.5c-2.2,1-4.8,0.5-7.1-0.1c-1.8-0.4-17.3-5.9-22.9-8.7c-0.1,0-2.3-1.2-4.9-2.5c-1.8-0.9-3.6,1.4-2.2,2.9
                                            c1,1.1,2.1,2.1,3.1,2.7c2.7,1.7,5.4,3.2,8.1,4.5l0,0c2.7,1.2,5.5,2.4,8.3,3.4c0.6-0.4,1.1-0.8,1.6-1.2c0.3,0.6,0.5,1.3,0.6,2
                                            c0.2,1.2,0.1,2.5-0.4,3.6c-0.7,1.8-2.1,3.2-3.8,3.9c-2,0.8-4.3,0.6-6.5,0.2c-1.3-0.2-2.4-0.6-3.6-1.2l0,0
                                            c-4.4-2.4-8.4-4.8-11.6-6.8l-0.1-0.1c-1.4-0.7-2.9,0.6-2.7,1.9c0,0.3,0.2,0.7,0.5,1c0,0,0,0,0,0.1c2.4,2.5,5.4,4.6,8.6,6.4
                                            c0.4-0.1,0.7-0.3,1-0.4c0,0.3,0,0.7,0,1c-0.1,1.6-0.6,3.3-1.8,4.2c-0.4,0.3-0.9,0.6-1.4,0.8c-2.7,1.1-5.8,1-8.4-0.2
                                            c0,0-0.1,0-0.1-0.1c-0.3-0.2-0.6-0.3-0.9-0.5h-0.1c-3.7-2.1-7.2-4.1-9.7-5.7c-0.8-0.5-1.4-0.9-2-1.3c-1.1-0.8-2.2-1.7-3.3-2.5
                                            c-2.8-2.3-5.4-4.6-8-7c-1-0.9-2.1-1.9-3.1-2.8c-1.7-1.5-3.5-2.9-5.3-4.2c-2.2-1.6-4.5-3-6.9-4.3c-5.7-3.1-11.9-5.3-18.3-6.6"
                                            />
                                    </g>
                                    <g id="R_13_">
                                        <path fill="#F6CD99" d="M1562.5,731.5l-21.8,3.8l-13.4,2.4l-21.8,3.8c0.1-0.1,0.1-0.1,0.2-0.2c2.5-2.6,4.1-6,2.3-8.8
                                            c-0.1-0.3-0.3-0.5-0.6-0.7c-1.5-1.7-4-2.1-6.3-2.1c-6.6,0-12.9,2.5-19.2,4.6c-2.4,0.8-5.2,1.6-7.4,0.1c-2-1.3-2.9-4.9-1.8-6.9
                                            c0.1-0.1,0.2-0.3,0.3-0.4c2.5-3.6,11.7-6.9,16.1-7.6c10.3-1.8,21.2-3.5,31-0.1c7,2.4,13.1,7.3,20.5,8.5c7,1.1,14.1-1.5,21.2-1
                                            C1562,728.5,1562.3,730,1562.5,731.5z"/>
                                    </g>
                                    <g id="L_1_">
                                        <path fill="#C67D4B" d="M1546.1,772.6c-0.2,0.3-0.4,0.5-0.7,0.7c-0.3,0.3-0.7,0.7-1.1,0.9l0,0c-0.3,0.2-0.6,0.4-0.9,0.6
                                            c-2.2,1-4.8,0.5-7.1-0.1c-1.8-0.4-17.3-5.9-22.9-8.7c-0.1,0-2.3-1.2-4.9-2.5c-0.1,0-0.1-0.1-0.2-0.1c-0.4-0.2-0.9-0.2-1.2,0
                                            c0,0,0.2-1.7,3.4-0.8C1513.6,763.5,1534.9,776.5,1546.1,772.6z"/>
                                    </g>
                                    <g id="L_2_">
                                        <path fill="#C67D4B" d="M1526,784.1c-0.3,0.3-0.6,0.5-0.9,0.7c-0.4,0.3-0.8,0.5-1.2,0.6c-2,0.8-4.3,0.6-6.5,0.2
                                            c-1.3-0.2-2.4-0.6-3.6-1.2c0,0,0,0-0.1,0c-4.3-2.4-8.4-4.8-11.6-6.8c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1
                                            c-0.8-0.3-1.5,0-2,0.5c0,0,0.2-2.7,2.7-1.4C1505.2,777.8,1517.4,787.3,1526,784.1z"/>
                                    </g>
                                    <g id="L_3_">
                                        <path fill="#C67D4B" d="M1507.4,792c-0.3,0.2-0.7,0.4-1,0.6c-2.7,1.1-5.8,1-8.3-0.2c0,0-0.1,0-0.1-0.1
                                            c-0.3-0.2-0.6-0.3-0.9-0.5c0,0-0.1,0-0.1-0.1c-1.4-0.8-2.8-1.6-4.1-2.3c-2.1-1.2-4.1-2.4-5.6-3.4c-0.8-0.5-1.4-0.9-1.9-1.3
                                            c-0.6-0.4-1.2-0.9-1.8-1.3c-0.5-0.4-1-0.8-1.5-1.2c-1-0.8-2-1.6-2.9-2.5c-1.7-1.5-3.4-3-5.1-4.5c-1-0.9-2.1-1.9-3.1-2.8
                                            c-0.1-0.1-0.2-0.2-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.1-0.3-0.3-0.5-0.4c-0.1-0.1-0.2-0.1-0.2-0.2
                                            c-1.1-0.9-2.2-1.8-3.4-2.6c-0.2-0.1-0.4-0.3-0.5-0.4c-2.2-1.6-4.5-3-6.9-4.3c-1.4-0.7-2.8-1.4-4.2-2
                                            c-4.5-2.1-9.3-3.6-14.2-4.5c0.1-0.5,0.1-1.1,0.2-1.6c0.6,0.1,22.6,4,32.1,16C1482,783.7,1502.2,793,1507.4,792z"/>
                                    </g>
                                    <g id="L_4_">
                                        <path fill="#C67D4B" d="M1508.7,735.7L1508.7,735.7c-0.1,0.7-0.3,1.3-0.6,1.9c-0.1-0.7-0.3-1.4-0.7-2.1
                                            c-0.1-0.3-0.3-0.5-0.6-0.7c-1.5-1.7-4-2.1-6.3-2.1c-6.6,0-12.9,2.6-19.2,4.7c-2.4,0.8-5.1,1.6-7.4,0.1c-2-1.3-2.9-4.9-1.8-6.9
                                            c0-0.1,0.1-0.1,0.1-0.1c0.2,1.7,1,3.4,2.2,4.2c2.3,1.5,5,0.7,7.4-0.1c6.3-2.1,12.6-4.6,19.2-4.6c2.3,0,4.8,0.4,6.3,2.1
                                            c0.2,0.2,0.4,0.5,0.6,0.7C1508.6,733.6,1508.8,734.6,1508.7,735.7z"/>
                                    </g>
                                    <g id="L_7_">
                                        <path fill="#C67D4B" d="M1471.7,760c-0.8,1.6-2,3-3.2,4.5c-0.9,1.1-1.8,2.4-2.3,3.7c-0.1,0.1-0.1,0.3-0.2,0.4
                                            c-0.2-0.1-0.4-0.3-0.5-0.4c-0.1-0.1-0.3-0.2-0.4-0.3c0.1-0.1,0.1-0.3,0.2-0.4c0.6-1.3,1.4-2.5,2.3-3.7
                                            c1.1-1.4,2.3-2.8,3.2-4.5c0.8-1.6,1.2-3.6,0.6-5.3c-0.1-0.4-0.3-0.8-0.6-1.1c-0.2-0.4-0.5-0.7-0.9-1c0.7,0.4,1.3,1,1.8,1.7
                                            c0.2,0.4,0.4,0.7,0.6,1.1C1472.9,756.4,1472.5,758.4,1471.7,760z"/>
                                    </g>
                                    <g id="R_5_">
                                        <path fill="#F6CD99" d="M1465.3,767.4c-0.1,0.2-0.1,0.3-0.2,0.4c1.5,1,3.1,2.3,4.5,3.4c-0.1,0.3-0.6,2.3-0.7,2.4
                                            c-1.7,0.2-4,0-5.7-0.3c-2.1-0.4-4-1.2-5.7-2.3c-0.9-0.6-1.7-1.3-2.4-2.1c-0.3-0.3-0.6-0.7-0.8-1.1c-1-1.9-1-4.3-0.9-6.5
                                            c0.2-1.3,0.6-2.5,1.2-3.5c0.6-1.1,1.4-2.1,2.2-3c0.8-0.8,1.6-1.6,2.5-2.3c1.9-1.5,4.2-2.5,6.6-2.4c1.9,0.1,3.9,1.1,4.9,2.7
                                            c0.2,0.4,0.4,0.7,0.6,1.1c0.6,1.7,0.2,3.7-0.6,5.3c-0.8,1.6-2,3-3.2,4.5C1466.7,764.9,1465.9,766.1,1465.3,767.4z"/>
                                    </g>
                                    <g id="R_4_">
                                        <path fill="#E5B989" d="M1465.1,767.8C1465.1,767.9,1465.1,767.9,1465.1,767.8c1.5,1,3.1,2.3,4.4,3.5
                                            c-0.1,0.3-0.6,2.3-0.7,2.4c-1.5,0.1-3.5,0.1-5.1-0.2c-4.3-4.4,3.6-13.2,5.4-16.1c1.7-2.8-0.2-6.1-0.4-6.3
                                            c0.4,0.2,0.8,0.5,1.2,0.9c0.3,0.3,0.6,0.6,0.9,1c0.2,0.4,0.4,0.7,0.6,1.1c0.6,1.7,0.2,3.7-0.6,5.3c-0.8,1.6-2,3-3.2,4.5
                                            c-0.9,1.1-1.8,2.4-2.3,3.7C1465.2,767.6,1465.2,767.7,1465.1,767.8z"/>
                                    </g>
                                    <g id="L_6_">
                                        <path fill="#C67D4B" d="M1484.1,767.6c0,0.3,0,0.5,0,0.8c-0.3,2.7-1.7,5.2-3.1,7.6c-0.7,1.1-1.4,2.4-2,3.7
                                            c-0.3-0.2-0.5-0.4-0.7-0.6c0.6-1.3,1.3-2.6,2-3.8c1.4-2.4,2.9-4.9,3.1-7.6c0-0.3,0-0.5,0-0.8c0-1-0.2-2-0.8-2.8
                                            c0.2,0.1,0.4,0.3,0.5,0.5C1483.9,765.3,1484.1,766.5,1484.1,767.6z"/>
                                    </g>
                                    <g id="R_3_">
                                        <path fill="#F6CD99" d="M1480.3,775.2c-0.7,1.2-1.4,2.5-2,3.8c0.7,0.6,1.4,1.3,2.2,1.9c0.6,0.5,1.8,1.5,2.4,2
                                            c-0.2,0.3-0.1,0.2-0.3,0.5c-0.2,0.4-0.4,0.9-0.6,1.4c-2.6,0.1-5.6-0.5-7.7-1.5c-0.2-0.1-0.4-0.2-0.6-0.3
                                            c-2.3-1.3-4.2-3.5-4.7-6.1c-0.1-0.7-0.2-1.5-0.2-2.2c0-0.9,0.2-1.8,0.5-2.8c0.1-0.3,0.1-0.5,0.2-0.8c1.1-2.2,2.7-4.2,4.6-5.8
                                            l0,0c0.5-0.5,1.1-0.9,1.7-1.3c1-0.7,2.2-1.2,3.4-1.4c0.8-0.1,1.6,0,2.3,0.4c0.4,0.2,0.8,0.5,1.1,0.8c0.7,0.8,0.9,1.9,0.9,3
                                            c0,0.3,0,0.5,0,0.8C1483.1,770.4,1481.7,772.9,1480.3,775.2z"/>
                                    </g>
                                    <g id="R_2_">
                                        <path fill="#E5B989" d="M1478.3,779C1478.3,779,1478.3,779.1,1478.3,779c0.7,0.7,1.4,1.3,2.2,1.9c0.6,0.5,1.8,1.5,2.4,2
                                            c-0.2,0.3-0.1,0.2-0.3,0.5c-0.2,0.4-0.4,0.9-0.6,1.4c-1.5,0-3.3-0.1-4.8-0.5c-2.4-3.8,1.5-8.8,3.4-11.8c1.8-3,1.5-9.1,1.5-9.1
                                            c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.1,0.1,0.1,0.2,0.2c0.6,0.8,0.8,1.8,0.8,2.8c0,0.3,0,0.5,0,0.8c-0.3,2.7-1.7,5.2-3.1,7.6
                                            C1479.6,776.4,1478.8,777.7,1478.3,779z"/>
                                    </g>
                                    <g id="L_5_">
                                        <path fill="#C67D4B" d="M1495.3,780.4L1495.3,780.4c-0.1,2.9-1.3,5.9-2.5,8.9c-0.4-0.2-0.8-0.5-1.2-0.7c1.2-3,2.4-6,2.5-8.9
                                            v-0.1c0-1.4-0.2-2.9-1.2-3.8c0.3,0.1,0.5,0.2,0.8,0.3c0.1,0.1,0.1,0.1,0.2,0.2C1495,777.3,1495.4,779,1495.3,780.4z"/>
                                    </g>
                                    <g id="R_1_">
                                        <path fill="#F6CD99" d="M1496.9,791.7c-1,0.5-2,1-3.1,1.3c-1.2,0.3-8.4,1-10.7-2.4c-0.7-1-0.9-2.2-1-3.4
                                            c0-0.6-0.1-1.3-0.1-1.9c0-1,0-1.9,0.3-2.8c0.6-1.1,1.4-2.2,2.2-3.2c0.6-0.8,1.3-1.5,1.9-2.1c0.8-0.8,1.7-1.5,2.8-1.9
                                            c1.1-0.4,2.3-0.4,3.3,0.3c0.1,0.1,0.1,0.1,0.2,0.2c1.1,0.9,1.5,2.6,1.4,4.1v0.1c-0.1,2.9-1.3,5.9-2.5,8.9
                                            c1.1,0.6,2.2,1.3,3.3,1.9l0,0C1495.6,791,1496.2,791.3,1496.9,791.7z"/>
                                    </g>
                                    <g id="R">
                                        <path fill="#E5B989" d="M1496.9,791.7c-1,0.5-2,1-3.1,1.3c-0.5,0.1-1.8,0.3-3.5,0.2c-1.9-2.2-0.2-7.3,1.3-9.6
                                            c1.5-2.2,0.8-7.9,0.8-8.2c0.1,0,0.1,0,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0.9,0.9,1.2,2.4,1.2,3.8v0.1
                                            c-0.1,2.8-1.3,5.9-2.5,8.9l0,0c1.1,0.6,2.2,1.3,3.3,1.9l0,0C1495.6,791,1496.2,791.3,1496.9,791.7z"/>
                                    </g>
                                </g>
                                <g id="ExpertiseArm5Left">
                                    <polygon fill="#016A7C" points="-70.8,441 1448.9,715.8 1439.7,768 -70.7,494.8                   "/>
                                    <polygon fill="#25414E" points="-70.8,479.6 1442.3,753.2 1439.6,768 -70.8,494.9                     "/>

                                        <ellipse transform="matrix(0.1736 -0.9848 0.9848 0.1736 482.1921 2015.6991)" fill="#25414E" cx="1442.1" cy="720.5" rx="2.7" ry="2.7"/>
                                </g>
                                <g id="ExpertiseArm5Right">
                                    <polygon fill="#66C6B3" points="3075.6,494.8 1565.2,768 1556,715.8 3075.7,441                   "/>
                                    <polygon fill="#5BAA9B" points="3075.7,494.9 1565.3,768 1562.6,753.2 3075.7,479.6                   "/>

                                        <ellipse transform="matrix(0.9848 -0.1736 0.1736 0.9848 -101.352 282.2238)" fill="#5BAA9B" cx="1562.7" cy="720.5" rx="2.7" ry="2.7"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm3Full">
                                <g className='handNtool'>
                                    <g id="ExpertiseArm3Camera">
                                        <rect x="844.3" y="414.2" fill="#71545A" width="149" height="87"/>
                                        <rect x="844.3" y="428.2" fill="#62484F" width="149" height="59"/>
                                        <path id="cameraButton" fill="#E19259" d="M968.2,409.2h17v5h-17V409.2z"/>
                                        <path fill="#FFFFFF" d="M918.4,487.6c-16.7,0-30.3-13.5-30.3-30.3c0-16.7,13.5-30.3,30.3-30.3c16.7,0,30.3,13.5,30.3,30.3
                                            S935.1,487.6,918.4,487.6z"/>
                                        <path fill="#573E43" d="M898.6,437.3l39.9,39.9c5-5.1,8.2-12.1,8.2-19.9c0-15.6-12.6-28.2-28.2-28.2
                                            C910.7,429.1,903.7,432.3,898.6,437.3z"/>
                                        <path fill="#40292E" d="M890.2,457.4c0,15.6,12.6,28.2,28.2,28.2c7.9,0,15-3.2,20.1-8.4l-39.9-39.9
                                            C893.4,442.4,890.2,449.5,890.2,457.4z"/>
                                        <path fill="#573E43" d="M978.5,426.1c-2,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5c2,0,3.5,1.6,3.5,3.5S980.5,426.1,978.5,426.1z"/>
                                        <path fill="none" stroke="#71545A" strokeWidth="5" strokeMiterlimit="10" d="M899.8,456.1c0-9.7,7.8-17.5,17.5-17.5"/>
                                        <path fill="#FFFFFF" d="M853.2,422.7c0,1.9,1.6,3.5,3.5,3.5h9c1.9,0,3.5-1.6,3.5-3.5l0,0c0-1.9-1.6-3.5-3.5-3.5h-9
                                            C854.8,419.2,853.2,420.8,853.2,422.7L853.2,422.7z"/>
                                        <polygon fill="#71545A" points="939.3,414.2 928.2,403.2 909,403.2 897.8,414.2                       "/>
                                    </g>
                                    <g id="ExpertiseArm3Hand">
                                        <path id="doigt2" display="none" fill="#F6CD99" d="M992.9,496c-0.3-3.2-5.3-29.7-7.6-35c-1.8-4.1-9.5-13.8-11.6-17.5
                                            c-2.9-4.9-11-14.4-8.6-18.1c2.3-3.5,7.2-0.9,9,0.4c4.9,3.6,7.8,9.8,13.4,12.1c4.6,1.9,10.9-1.9,12.3-3.4
                                            c7-7.9,8.7-21.4,7.2-29.3c-1.1-6-5.8-11.1-13-10.3c-6.7,0.8-9.2,11.7-12.8,16.2c-1.2,1.5-4.4,1.9-6.1,1.1
                                            c-1.3-0.6-2.7-1.6-2.8-4.1c-0.5-11.4,5.6-22.6,16.4-26.6c10.8-3.9,24,0.3,30.2,9.9c4,6.2,4.9,14,4.8,21.4
                                            c-0.2,11.8-2.8,17.4-3.9,29.1c-0.7,7-0.8,14-1,21c-0.2,10.6-0.5,23.9-0.7,34.4L992.9,496z"/>
                                        <path id="doigt" fill="#F6CD99" d="M992.9,496c-0.3-3.2-5.3-29.7-7.6-35c-1.8-4.1-9.5-13.8-11.6-17.5
                                            c-2.9-4.9-11-14.4-8.6-18.1c2.3-3.5,7.2-0.9,9,0.4c4.9,3.6,7.8,9.8,13.4,12.1c4.6,1.9,10.9-1.9,12.3-3.4
                                            c7-7.9,8.7-27.4,7.2-35.3c-1.1-6-5.8-11.1-13-10.3c-6.7,0.8-9.2,11.7-12.8,16.2c-1.2,1.5-4.4,1.9-6.1,1.1
                                            c-1.3-0.6-2.7-1.6-2.8-4.1c-0.5-11.4,5.6-22.6,16.4-26.6c10.8-3.9,24,0.3,30.2,9.9c4,6.2,4.9,14,4.8,21.4
                                            c-0.2,11.8-2.8,23.4-3.9,35.1c-0.7,7-0.8,14-1,21c-0.2,10.6-0.5,23.9-0.7,34.4L992.9,496z"/>
                                    </g>
                                </g>
                                <g id="ExpertiseArm3">
                                    <rect x="979.2" y="486.2" fill="#FE861D" width="53" height="680.8"/>
                                    <rect x="1017.2" y="486.2" fill="#DB701F" width="15" height="680.8"/>
                                    <circle fill="#DB701F" cx="985.9" cy="492.5" r="2.7"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm2Full">
                                <g id="ExpertiseArm2Hand" className='handNtool'>
                                    <path fill="#E5B989" d="M669.5,469.9c0.1-2.4-0.9-4.7-2.4-6.6c-0.7-0.9-1.5-1.7-2.3-2.4l-10,10c0.4,0.3,0.7,0.5,1.1,0.8
                                        c1.4,1.1,2.8,2.3,4.5,3.2c1.6,0.8,3.6,1.2,5.3,0.6C667.9,474.7,669.3,472.3,669.5,469.9z"/>
                                    <path fill="#F6CD99" d="M664.8,461.4c-0.9-0.9-2-1.6-3.1-2.2c-4.4-2.5-13-1.4-15.8,0c-3.1,1.6-5.1,4.4-3.8,12.9l5.9-3
                                        c2.2-0.2,4.8,0.9,6.7,2.3L664.8,461.4z"/>
                                    <g id="ExpertiseArm2MagGlass">
                                        <path fill="#48A6BC" d="M624.1,513.7L624.1,513.7c2.1,2.1,5.4,2.1,7.5,0l58.1-58.1c2.1-2.1,2.1-5.4,0-7.5l0,0
                                            c-2.1-2.1-5.4-2.1-7.5,0l-58.1,58.1C622.1,508.3,622.1,511.7,624.1,513.7z"/>

                                            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.563 625.2485)" fill="#48A6BC" cx="705" cy="432.8" rx="34.3" ry="34.3"/>

                                            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.563 625.2485)" fill="#FFFFFF" cx="705" cy="432.8" rx="26.8" ry="26.8"/>
                                        <path fill="none" stroke="#48A6BC" strokeWidth="5" strokeLinecap="round" strokeMiterlimit="10" d="M719.8,423.9
                                            c4.6,4.6,4.6,11.9,0,16.5"/>
                                    </g>
                                    <path fill="#F6CD99" d="M634.4,548.1l0.1,14.7h33.3l-0.6-14.7c1.6-6.9,0.4-16,2.7-22.7c2.4-7,8.3-12.2,11.9-18.7
                                        c5.1-9.1,5.3-20.1,5.3-30.6c0-4.6-1.8-14.8-5.1-17.5c-0.1-0.1-0.2-0.1-0.3-0.2s-0.2-0.1-0.3-0.2s-0.2-0.1-0.4-0.2
                                        c-0.1,0-0.2-0.1-0.2-0.1c-2-0.6-4.6-0.2-5.9,1.2c-1.8,2-1.6,4.8-1.2,7.3c1,6.5,2.4,13.2,1.2,19.7c-0.4,2.3-1.2,4.6-3.2,5.8
                                        c-1.3,0.8-2.7,0.9-3.9,0.6c-1.8-0.5-3.5-1.9-4.8-3.6c-0.1-0.1-0.2-0.3-0.3-0.4s-0.1-0.1-0.1-0.2c-3.1-4.4-4.3-9.8-4.9-15.1
                                        c0-0.3-0.1-0.6-0.1-0.9c-0.5-4.8-0.7-9.5-0.7-14.3v-0.5c-4.2-0.4-8.9,0.4-10.8,1.4c-0.7,0.4-1.3,0.8-1.8,1.3
                                        c-2,1.8-3,4.9-2,11.6c0,0,0,0,0.1,0h-0.1l0,0c-0.4,0-0.7-0.1-1.1-0.1c-2.4-0.1-4.8,0.3-7,1.3c-1.1,0.5-2.4,1.2-3.4,2.3
                                        c-1,1.1-1.8,2.5-2.1,4.6c-0.2,1.2-0.2,2.6,0,4.4c-0.9,0-1.8,0.2-2.8,0.4c-3.1,1.1-6.8,3.4-5,11c0.1,0.1,0.1,0.3,0.2,0.4
                                        c1.9,4.7,4.1,9.1,6.4,13.8C632.4,520.3,635.4,536.7,634.4,548.1"/>
                                    <path fill="#F6CD99" d="M668.4,492.4l4.1,27.1c2.8-4.5,6.6-8.6,9.2-13.2c5.1-9.1,5.3-20.1,5.3-30.6c0-4.6-1.8-14.8-5.1-17.5
                                        c-1.8-1.5-5.5-1.2-7.1,0.6c-1.9,2-1.6,4.8-1.2,7.3c1,6.5,2.4,13.2,1.2,19.7c-0.4,2.3-1.2,4.6-3.2,5.8
                                        C670.6,492.4,669.4,492.6,668.4,492.4z"/>
                                    <path fill="#F6CD99" d="M628.5,484.4c-1-8,2.7-10.2,5.6-11.6c3.7-1.7,8.1-1.7,12-0.4c3.9,1.2,7.3,3.9,9.5,7.3
                                        c0.7,1,1.2,2.2,1.4,3.4c0.1,1.2-0.2,2.6-1.2,3.4c-0.8,0.7-1.9,0.9-3,0.9c-3,0-5.8-1.6-8.4-3.2c-2.6-1.5-5.8-3.3-8.9-3.1
                                        L628.5,484.4z"/>
                                    <path fill="#F6CD99" d="M621.1,495.6c-2.1-8,1.7-10.3,4.6-11.1c5.9-1.7,12.5,1.5,16.8,5.9c0.8,0.8,1.5,1.7,1.9,2.8
                                        s0.4,2.3-0.3,3.3c-0.9,1.3-2.6,1.7-4.2,1.6c-5.3-0.2-11.2-4.1-16.4-5L621.1,495.6z"/>
                                    <path fill="#E5B989" d="M641.2,548.8c4.2-29.8-17.6-61.5-18.2-62.4c0-0.1,0-0.1,0,0c-1.9,1.4-3.4,4.1-2.1,9.3
                                        c0,0.1,0.1,0.3,0.2,0.4c1.9,4.7,4.1,9.1,6.4,13.8c4.9,10.4,8,26.8,6.9,38.2l-0.2,5.4l7.3,1L641.2,548.8z"/>
                                </g>
                                <g id="ExpertiseArm2">
                                    <rect x="623.4" y="546.9" fill="#5CC9EA" width="54" height="620.1"/>
                                    <rect x="623.4" y="546.9" fill="#48A6BC" width="15" height="620.1"/>
                                    <circle fill="#48A6BC" cx="670.5" cy="553.5" r="2.7"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm5Lines">
                                <g id="exp5Line1">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1437.3" y1="670.4" x2="1437.3" y2="737.7"/>
                                </g>
                                <g id="exp5Line2">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1454.5" y1="629" x2="1454.5" y2="686.3"/>
                                </g>
                                <g id="exp5Line3">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1545.3" y1="652.3" x2="1545.3" y2="703.4"/>
                                </g>
                                <g id="exp5Line4">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1563.3" y1="620.3" x2="1563.3" y2="674.5"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm3Lines">
                                <g id="exp3Line2">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1063.1" y1="723" x2="1063.1" y2="642.7"/>
                                </g>
                                <g id="exp3Line1">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1046.7" y1="660.5" x2="1046.7" y2="584.6"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm2Lines">
                                <g id="exp2Line2">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="578.6" y1="673.3" x2="578.6" y2="616.5"/>
                                </g>
                                <g id="exp2Line1">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="599.3" y1="642.7" x2="599.3" y2="578.6"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm1Lines">
                                <g id="exp1Line2">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="319.2" y1="612.3" x2="319.2" y2="528.3"/>
                                </g>
                                <g id="exp1Line1">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="347.1" y1="579.1" x2="347.1" y2="495.1"/>
                                </g>
                            </g>
                            <g id="ExpertiseArm4Lines">
                                <g id="exp4Line2">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1311.8" y1="743.3" x2="1311.8" y2="669.3"/>
                                </g>
                                <g id="exp4Line1">
                                    <line fill="none" stroke="#FBEDD6" strokeLinecap="round" strokeMiterlimit="10" x1="1328.5" y1="784.8" x2="1328.5" y2="714.8"/>
                                </g>
                            </g>
                            <rect id="sky" x="-92.6" y="-43.9" fill="#68C6B5" width="1973.1" height="1000.7"/>
                            <g id="flash">
                                <circle id="circle" fill="#FFFFFF" cx="875" cy="437.1" r="92"/>
                                <circle id="counterCircle" fill="#FE861D" cx="874.6" cy="437.1" r="133.1"/>
                                <ellipse id="smallFlash" fill="#FFFFFF" cx="875" cy="437.1" rx="281.5" ry="11.8"/>
                                <ellipse id="bigFlash" fill="#FFFFFF" cx="875" cy="437.1" rx="375.8" ry="24.9"/>
                            </g>
                        </g>

                        <g id="GrowingTreeFull" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="TreeFinalState">
                                <path className='tree' fill="#624A51" d="M846.6,704.3c0,44.8,0,108.8,0,166.2c13.7,0,82.8,0,99,0c0-29.4,0-113.6,0-166.2
                                    C893.8,704.3,846.6,704.3,846.6,704.3z"/>
                                <path className='treeShadow' fill="#402A2E" d="M945.6,726.5h-99v-22.2h99V726.5z"/>
                                <path className='leaf' fill="#3C8A41" d="M748.5,704.3c-118.4-4.7-181.2-172.8-60.6-250.2c-12.1-51.7,27-123.6,101.8-123.5
                                    c0.4-72,64.8-105.2,103.6-103.7c45.8-1.2,102.8,33.1,104.8,103.7c80,0.2,114.6,80.3,101.8,123.5
                                    c115.3,73.6,64.6,240.2-60.3,250.2C910.7,704.3,868.5,704.3,748.5,704.3z"/>
                                <path className='leafShadow' fill="#386E35" d="M846.6,704.3c-44.5,0-74.5,0-97.1,0c-119.4-5.4-181.8-170.9-61.6-250.2c-12.6-76,49.4-125.3,101.8-123.5
                                    c5.6-102.9,108.2-119.7,153.4-91.1c-38.4,20-55.8,61.5-54.1,91.1c-62.8-0.9-114.5,57.8-101.8,123.5
                                    C682.1,521.2,707.3,685.8,846.6,704.3z"/>
                            </g>
                            <g className='treeWrap'>
                                <line id="poi3" fill="none" x1="1152.8" y1="576.5" x2="1152.8" y2="554"/>
                                <line id="poi2" fill="none" x1="886.8" y1="339.2" x2="905.4" y2="339.2"/>
                                <polygon id="poi1_1_" fill="none" points="634.5,583.4 634.5,568.8 644,603.1                 "/>
                                <g id="TreeStep1">
                                    <path className='tree' fill="#624950" d="M856.5,737c-38.8,19.3-58.3,93.2,2.2,130c8.8,0,61.5,0,67.8,0c-89.5-22.6-94.8-78.5-45.8-99.8
                                        C871.2,753.5,856.5,737,856.5,737z"/>
                                    <g id="littlMan">
                                        <g id="body_2_">
                                            <path fill="#E08752" d="M905.7,790.5L905.7,790.5l25.2,0.1l0,0"/>
                                            <path fill="#E08752" d="M932.2,790.4L918.4,827l-13.8-36.6"/>
                                            <path fill="#686868" d="M942.2,795.7l-0.5,2l-13.4,49.2l-10.4-24.3l13.2-32.1h7.4C941.1,790.5,943,793.2,942.2,795.7z"/>
                                            <path fill="#40292E" d="M928.1,797.5l3,7.5l-12.7,15.9L928.1,797.5z"/>
                                            <path fill="#40292E" d="M931,790.4l4.9,3.8l-10,8.8L931,790.4z"/>
                                            <path fill="#595959" d="M928.5,845.8l-0.1,0.4l-4.6,17c-1,2.9-3.7,4.2-6.2,3.8c-2-0.3-3.8-1.6-4.6-3.8l-4.8-17.3l-1.8-6.4
                                                l-11.7-43.6c-0.9-2.6,1.1-5.2,3.8-5.2h7.3l0,0l12.5,30.5v0.1L928.5,845.8z"/>
                                            <path fill="#40292E" d="M918.4,820.9L905.7,805l3-7.5L918.4,820.9z"/>
                                            <path fill="#40292E" d="M911.1,803.1l-10-8.8l4.9-3.8L911.1,803.1z"/>
                                        </g>
                                        <g id="head_2_">
                                            <path fill="#F6CD99" d="M937.5,767.9c0,10.6-8.6,19.1-19.1,19.1c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0-0.9,0
                                                c-0.3,0-0.6-0.1-0.9-0.1l0,0c-9.3-1.3-16.4-9.3-16.4-18.9c0-9.6,7.1-17.6,16.4-18.9l0,0c0.3,0,0.6-0.1,0.9-0.1
                                                c0.3,0,0.6-0.1,0.9-0.1c0.3,0,0.6,0,0.9,0C928.9,748.8,937.5,757.3,937.5,767.9z"/>
                                            <path fill="#E5B989" d="M921.3,749.1c-0.1,0-0.1,0-0.2,0l0,0c-9.3,1.3-16.4,9.3-16.4,18.9c0,9.6,7.1,17.5,16.3,18.9
                                                c-0.8,0.1-1.6,0.2-2.5,0.2c-0.3,0-0.6,0-0.8,0c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6-0.1-0.9-0.1l0,0c-9.3-1.3-16.4-9.3-16.4-18.9
                                                s7.1-17.6,16.4-18.9l0,0c0.3,0,0.6-0.1,0.9-0.1s0.6-0.1,0.9-0.1c0.3,0,0.6,0,0.8,0C919.4,748.9,920.3,749,921.3,749.1z"/>
                                        </g>
                                    </g>
                                    <path className='treeAbove' fill="#624A51" d="M846.6,704.3c0,43.9,0,106.5,0,162.7c9.3,0,86.3,0,99,0c0-28.8,0-111.2,0-162.7
                                        C893.8,704.3,846.6,704.3,846.6,704.3z"/>
                                    <path className='treeShadow' fill="#402A2E" d="M864.7,776.5c-9-8.4-17.2-17.1-25.5-26.2c6.1-6.2,9.8-8.9,17.4-13.4c7.6,10.4,15.5,20.5,23.4,30.7
                                        C873.2,770.4,870,772.1,864.7,776.5z"/>
                                    <path className='leaf' fill="#3C8A41" d="M833,706c-37.3-78.3,183-168,258.3-45c43.7,14.7,81,89.7,66.8,103.7c33.7,76.7-29.3,110.3-33.6,93.4
                                        c2.9-13.7,10.4-26.3-5.4-61.4c-15.5,9.7-41.2,12.2-65.7-5.5C1003,823.8,933.7,823,899,791.7C878.5,766.7,833,706,833,706z"/>
                                    <path className='leafShadow' fill="#386E35" d="M856.5,736.8c-11.2-15.5-16-20.8-24-31.3c-35.3-81.8,186.3-165,258.9-44.8
                                        c34.2,7.9,82.8,84.5,66.7,103.9c38.8,84.7-44.8,116-31.7,88.3c20.5-22.1,23.6-49.6,12.5-72.6c15.3-9.1-12.4-79.6-59.7-85.5
                                        C1003.8,609.3,827,669.8,856.5,736.8z"/>
                                </g>
                                <g id="fruits">
                                    <g id="fr3">
                                        <path fill="#FE861D" d="M759.5,605.1c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C753.5,591.5,759.5,597.5,759.5,605.1z"/>
                                        <path fill="#EF771D" d="M747.9,618.4c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C736.4,611.9,741.3,617.4,747.9,618.4z"/>
                                    </g>
                                    <g id="fr6">
                                        <path fill="#FE861D" d="M918.8,591.5c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C912.7,577.9,918.8,583.9,918.8,591.5z"/>
                                        <path fill="#EF771D" d="M907.1,604.8c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C895.6,598.3,900.6,603.8,907.1,604.8z"/>
                                    </g>
                                    <g id="fr10">
                                        <path fill="#FE861D" d="M1142.5,651.1c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C1136.4,637.5,1142.5,643.6,1142.5,651.1z"/>
                                        <path fill="#EF771D" d="M1130.9,664.6c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C1119.3,658,1124.4,663.6,1130.9,664.6z"/>
                                    </g>
                                    <g id="fr1">
                                        <path fill="#FE861D" d="M643.7,609.3c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C637.7,595.7,643.7,601.7,643.7,609.3z"/>
                                        <path fill="#EF771D" d="M632.1,622.8c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C620.6,616.2,625.5,621.8,632.1,622.8z"/>
                                    </g>
                                    <g id="fr8">
                                        <path fill="#FE861D" d="M1037.8,485.7c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C1031.7,472.1,1037.8,478.1,1037.8,485.7z"/>
                                        <path fill="#EF771D" d="M1026.3,499c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C1014.6,492.5,1019.7,498.2,1026.3,499z"/>
                                    </g>
                                    <g id="fr7">
                                        <path fill="#FE861D" d="M989,674.9c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C983,661.2,989,667.3,989,674.9z"/>
                                        <path fill="#EF771D" d="M977.4,688.2c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C965.9,681.7,970.8,687.4,977.4,688.2z"/>
                                    </g>
                                    <g id="fr9">
                                        <path fill="#FE861D" d="M1061.2,642.1c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C1055.1,628.5,1061.2,634.5,1061.2,642.1z"/>
                                        <path fill="#EF771D" d="M1049.7,655.4c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C1038,649,1043.1,654.6,1049.7,655.4z"/>
                                    </g>
                                    <g id="fr5">
                                        <path fill="#FE861D" d="M882.5,509.3c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C876.4,495.7,882.5,501.8,882.5,509.3z"/>
                                        <path fill="#EF771D" d="M870.9,522.8c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C859.4,516.2,864.3,521.8,870.9,522.8z"/>
                                    </g>
                                    <g id="fr11">
                                        <path fill="#FE861D" d="M1142.5,512.9c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C1136.4,499.3,1142.5,505.4,1142.5,512.9z"/>
                                        <path fill="#EF771D" d="M1130.9,526.3c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C1119.3,519.7,1124.4,525.4,1130.9,526.3z"/>
                                    </g>
                                    <g id="fr4">
                                        <path fill="#FE861D" d="M806,684.4c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C800,670.8,806,676.8,806,684.4z"/>
                                        <path fill="#EF771D" d="M794.5,697.9c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C782.9,691.3,788,696.9,794.5,697.9z"/>
                                    </g>
                                    <g id="fr2">
                                        <path fill="#FE861D" d="M685.7,522.9c0,7.5-6.1,13.6-13.6,13.6c-0.7,0-1.4-0.1-2-0.2c-6.6-1-11.6-6.7-11.6-13.4
                                            c0-6.8,5.1-12.5,11.6-13.4c0.7-0.1,1.4-0.2,2-0.2C679.6,509.3,685.7,515.4,685.7,522.9z"/>
                                        <path fill="#EF771D" d="M674.2,536.4c-0.7,0.1-1.4,0.2-2,0.2c-7.5,0-13.6-6.1-13.6-13.6s6.1-13.6,13.6-13.6
                                            c0.7,0,1.4,0.1,2,0.2c-6.6,1-11.6,6.7-11.6,13.4C662.5,529.8,667.6,535.4,674.2,536.4z"/>
                                    </g>
                                </g>
                                <g id="ideaLines">
                                    <path className='il il1' fill="none" stroke="#40292E" strokeWidth="0.25" strokeLinecap="round" strokeMiterlimit="10" d="M987.2,749.7
                                        c1.5-2.2,9.1-9.7,14.8-12.2"/>

                                        <line className='il il2' fill="none" stroke="#40292E" strokeWidth="0.25" strokeLinecap="round" strokeMiterlimit="10" x1="982.8" y1="746.4" x2="982.1" y2="736.3"/>

                                        <line className='il il3' fill="none" stroke="#40292E" strokeWidth="0.25" strokeLinecap="round" strokeMiterlimit="10" x1="991.8" y1="755.2" x2="998" y2="753.2"/>
                                </g>
                            </g>
                            <g id="TreeStep2">
                                <path className='tree' fill="#624950" d="M803,704.5c7.8,81.2,49,111,71.5,162.5c9,0,35.8,0,40.5,0c-28.8-64.8-63-84.3-72.5-156.5
                                    C808.5,703.5,803,704.5,803,704.5z"/>
                                <path className='treeShadow' fill="#402A2E" d="M845.2,730.6c-12.9-1.3-25.6-0.7-38.5-0.9c-2-10.1-2.8-15.2-3.7-25.1c13.2,1.7,26.4,2.9,39.5,5.3
                                    C843,718.2,843.6,722.3,845.2,730.6z"/>
                                <path className='leaf' fill="#3C8A41" d="M763.3,699c-89.6-43-19.1-265,141.2-252.6c84.8-28.1,176.2,16.1,168.3,42.1
                                    c56.7,23.3,110.2,68.3,84.4,98.4c-16.3,5.9-38.8-22.4-95.4-37.5c-12.9,29.6-68.2,26.1-94.4,33.3c-20.8,59.7-25.6,120.7-87.5,135
                                    C848.6,709.8,763.3,699,763.3,699z"/>
                                <path className='leafShadow' fill="#386E35" d="M803.2,704.3c-7.2-1.3-24.7-2-39.7-5.2c-90.8-43.8-22.5-267.8,141.1-252.8
                                    c71.8-28,176.1,12.3,168.6,41.9c128.9,59.4,89.2,108.7,74.2,98.6c-15.7-39.2-54.2-60.2-81.5-69c4.7-32.8-76.3-60.8-143.5-37.3
                                    C776.3,466,720.5,665.3,803.2,704.3z"/>
                            </g>
                            <g id="TreeStep3">
                                <path className='tree' fill="#624A51" d="M818.5,717c7.8,31.5,47.3,93.8,51.3,150c9.3,0,38,0,50.8,0c-2-51.5-36.5-98-53.8-156
                                    C849,712.5,818.5,717,818.5,717z"/>
                                <path className='treeShadow' fill="#402A2E" d="M872.1,726.7c-16.1,1.9-31.7,4.9-47.5,8.1c-2.8-7.2-4-10.7-6.1-18.1c16.1-2.5,32.1-5.1,48.3-6.3
                                    C868.6,717.3,869.6,720.3,872.1,726.7z"/>
                                <path className='leaf' fill="#3C8A41" d="M773.5,723.4C685.5,718,654,502,798.8,436.5c39.8-77,122.3-94.7,150.9-78.5
                                    c40.2-21.3,137.3-31.7,143.8-5.7c8.7,24.7-53,53.2-85.8,70.2c11.2,18-13.2,62.7-42.1,96c2.7,19.2,27.7,166.5-49.3,189
                                    C873.8,708.8,773.5,723.4,773.5,723.4z"/>
                                <path className='leafShadow' fill="#386E35" d="M819.1,716.8c-5,0.3-36.1,5.4-45.6,6.5c-79.2,0-128.9-208.3,25.1-287.1c39.8-76.4,120.8-95.2,150.8-78.2
                                    c62.5-28.2,172.7-32.7,138.3,14.8c-41.2-8.2-74.5-1.2-102.4,13.3c-23.8-28.8-111,7.9-144.5,69.4
                                    C697.5,526.6,748.6,718.5,819.1,716.8z"/>
                            </g>
                            <g id="TreeStep4">
                                <path className='tree' fill="#624A51" d="M849.8,710.6c3.8,34.1,2.9,104.1,5.7,156.4c9.3,0,69.5,0,82.3,0c-10.3-51-23-99.8-32-157.4
                                    C888,711.1,849.8,710.6,849.8,710.6z"/>
                                <path className='treeShadow' fill="#402A2E" d="M909.3,729.5c-19.5-0.2-39-0.1-58.5,0.4c-0.3-7.6-0.5-11.3-1-19.3c18.7-0.3,37.3-0.4,56-0.6
                                    C907.3,718,908,721.8,909.3,729.5z"/>
                                <path className='leaf' fill="#3C8A41" d="M796,711.6c-83.7-13.9-117.3-240.9-53.7-260.5c3.4-47.1,43.7-141.4,79.5-116.7
                                    C849.1,268,926.2,233,949.1,246.1c13.9,10.9-1,56.7-16,98.5c42.1-9,35.1,70.2,26,122.4c74.4,34.5,56.9,233.3-3.3,242.2
                                    C914.4,709.5,796,711.6,796,711.6z"/>
                                <path className='leafShadow' fill="#386E35" d="M850.5,710.8c-12.8,0-45,0.8-54.7,0.8C708,697.7,680,470.8,742.4,451.1c8.3-62.5,46.6-139.8,79.3-116.7
                                    c43.8-87.2,135.1-109.2,132.5-77.4c-28,8.3-77.2,64.1-87.5,95.9c-53.9-7.6-74.6,67.4-72.5,102.4
                                    C723.5,496.8,781.6,707.2,850.5,710.8z"/>
                            </g>
                            <g id="TreeStep5">
                                <path className='tree' fill="#624A51" d="M855.5,704.6c1,35.6-3.1,113.9-7.1,162.4c9.3,0,82.4,0,95.2,0c1-49.4-3.7-110.7-10.2-163.6
                                    C915.6,702.2,855.5,704.6,855.5,704.6z"/>
                                <path className='treeShadow' fill="#402A2E" d="M933.2,726.2c-24.5,0.2-49,0.4-73.4,0.6c0-8.9,0-13.3,0-22.2c24.1-0.2,48.3-0.4,72.4-0.6
                                    C932.6,712.9,932.8,717.3,933.2,726.2z"/>
                                <path className='leaf' fill="#3B8A41" d="M801.1,705.7c-47.2-1.4-114.4-172.8-72.1-230.1c-11.6-5.2-58.6-88.2-17.8-94.3
                                    c-10.6-18.7-70-65.8-45.5-92.6c22-23.4,120.2,18.4,139.6,50.1c29.1-28.3,121.2,68.6,133.1,99.4
                                    c106.1,58.6,102.4,253.3,44.6,265.1C941.1,702.5,801.1,705.7,801.1,705.7z"/>
                                <path className='leafShadow' fill="#386E35" d="M856.4,704.9c-12.8,0-45.8,0.8-55.4,0.8c-59.2-8.3-110.8-188.3-71.9-230.1c-24-20.9-51.7-91.2-17.8-94.3
                                    c-45.5-38.8-79.1-104.7-16-99.4c6.2,16.5,48.6,67.2,67.4,87.1c-40.3,10.8-5.6,84.3,14.8,102.2
                                    C748.8,516.4,788,698.7,856.4,704.9z"/>
                            </g>
                            <g id="TreeStep6">
                                <path className='tree' fill="#624A51" d="M847,707.2c-0.4,41.6,0,103.5-0.4,159.8c9.3,0,86.3,0,99,0c0-28.2-0.8-109.7-0.9-159.4
                                    C893.1,694.6,847,707.2,847,707.2z"/>
                                <path className='treeShadow' fill="#402A2E" d="M945,728.7c-33.4-4.7-64.9-5-98.3-0.3c0.2-8.4,0.2-12.5,0.3-20.5c33.7-6.5,64-6,97.6,0.4
                                    C944.8,716.3,944.8,720.3,945,728.7z"/>
                                <path className='leaf' fill="#3C8A41" d="M751.7,735.2C649.9,770.9,561.5,607,687.3,509c-12.3-51,28.8-119.8,104.3-153.3
                                    c14.2-95.4,69.3-131.1,102.8-129c39.7-1,92.9,45.8,100.9,127c85.5,38.3,118.2,115,103.3,151.4c113,78.6,73,250.8-62.7,227.9
                                    C908.4,696.4,901.9,686.4,751.7,735.2z"/>
                                <path className='leafShadow' fill="#386E35" d="M848.2,707.6c-40.1,12.9-78.1,24.4-96.4,27.6C645,769.6,566.1,602.6,687.3,509
                                    c-15.2-84.2,74.3-142.5,104.3-153.2c16.9-118.8,99.5-154.9,150.5-110.6c-40.9,13.9-53.5,58.7-53,85.6
                                    C836.5,329,772,411,786.5,477.4C690.5,566.1,685.3,726.5,848.2,707.6z"/>
                            </g>
                        </g>

                        <g id="PlaneFull" className='hidden' clipPath="url(#bigMask_1_)">
                            <g id="Plane">
                                <g id="Cloud1">
                                    <path fill="#F2E9DF" d="M-228.4,129.5c3.3,0,6.3,0.8,9.1,2.2c2.4-7.4,9.3-12.7,17.5-12.7c2.4,0,4.8,0.5,6.9,1.3
                                        c0-0.5,0-1.1,0-1.6c0-16.1,13.1-29.2,29.2-29.2c13.2,0,24.4,8.8,28,20.8c3.1-1.5,6.5-2.4,10.2-2.4c12.5,0,22.6,10.1,22.6,22.7
                                        c0,2.3-0.3,4.6-1,6.7c7.3,0.4,13.1,6.4,13.1,13.8c0,1.1-0.1,2.2-0.4,3.3h-154.2c-0.4-1.6-0.6-3.3-0.6-5
                                        C-248.1,138.4-239.3,129.5-228.4,129.5L-228.4,129.5z"/>
                                </g>
                                <g id="Cloud2">
                                    <path fill="#F2E9DF" d="M-37.5,438.6c2.5,0,5,0.6,7.1,1.6c1.5-6.7,7.1-11.8,14-12.6c-0.3-1.1-0.5-2.4-0.5-3.6
                                        c0-7.2,5.8-13.1,13-13.1c6.1,0,11.2,4.1,12.6,9.8c0.1,0,0.3,0,0.4,0c7.7,0,14,6.2,14.1,13.9c1.5-0.4,3.1-0.6,4.7-0.6
                                        c11.2,0,20.3,9.1,20.3,20.3c0,0.8-0.1,1.7-0.2,2.5c-49.2,0-47.3,0-102.1,0c-0.1-0.6-0.1-1.1-0.1-1.7
                                        C-54.1,446-46.7,438.6-37.5,438.6L-37.5,438.6z"/>
                                </g>
                                <g id="Cloud3">
                                    <path fill="#F2E9DF" d="M154.7,278.3h0.4c-0.5-1.6-0.8-3.2-0.8-5c0-8.8,7.1-15.9,15.8-15.9c2.7,0,5.3,0.7,7.5,1.9
                                        c5.7-12.8,18.5-21.8,33.5-21.8c2.5,0,4.8,0.2,7.2,0.7c-1.4-2.5-2.1-5.4-2.1-8.4c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8
                                        c0,0.2,0,0.3,0,0.5c3.5-2.1,7.6-3.3,12-3.3c13,0,23.5,10.5,23.5,23.5c0,2.5-0.4,4.9-1.1,7.1c23.1,0.6,42.4,16.4,48.4,37.7
                                        H124.3C130.5,285.2,141.8,278.3,154.7,278.3L154.7,278.3z"/>
                                </g>
                                <g id="Cloud4">
                                    <path fill="#F2E9DF" d="M384.5,60.2c6.9,0,13.4,1.7,19.1,4.8c1.2-19.7,17.5-35.2,37.5-35.2h0.3c-0.4-2.2-0.7-4.4-0.7-6.8
                                        c0-18.7,15.1-33.8,33.7-33.8S508.1,4.3,508.1,23c0,1.8-0.1,3.5-0.4,5.2c15.8,1.3,28.2,14.6,28.2,30.7c0,1.5-0.1,2.9-0.3,4.3
                                        c0.7,0,1.3-0.1,2-0.1c19.3,0,35,15.7,35,35.1c0,0.6,0,1.1,0,1.7H344.5C344.7,77.9,362.6,60.2,384.5,60.2L384.5,60.2z"/>
                                </g>
                                <g id="Cloud5">
                                    <path fill="#F2E9DF" d="M1598.6,75.6c9.2,0,16.6,7.4,16.6,16.6c0,0.6,0,1.1-0.1,1.7c-54.9,0-53,0-102.1,0
                                        c-0.1-0.8-0.2-1.6-0.2-2.5c0-11.2,9.1-20.3,20.3-20.3c1.6,0,3.2,0.2,4.7,0.6c0.1-7.7,6.4-13.9,14.1-13.9c0.1,0,0.3,0,0.4,0
                                        c1.5-5.6,6.6-9.8,12.6-9.8c7.2,0,13,5.9,13,13.1c0,1.3-0.2,2.5-0.5,3.6c6.9,0.8,12.5,5.9,14,12.6
                                        C1593.6,76.2,1596,75.6,1598.6,75.6L1598.6,75.6z"/>
                                </g>
                                <g id="Cloud6">
                                    <path fill="#F2E9DF" d="M215.7,1063.4h0.4c-0.5-1.6-0.8-3.2-0.8-5c0-8.8,7.1-15.9,15.8-15.9c2.7,0,5.3,0.7,7.5,1.9
                                        c5.7-12.8,18.5-21.8,33.5-21.8c2.5,0,4.8,0.2,7.2,0.7c-1.4-2.5-2.1-5.4-2.1-8.4c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8
                                        c0,0.2,0,0.3,0,0.5c3.5-2.1,7.6-3.3,12-3.3c13,0,23.5,10.5,23.5,23.5c0,2.5-0.4,4.9-1.1,7.1c23.1,0.6,42.4,16.4,48.4,37.7
                                        H185.3C191.5,1070.3,202.8,1063.4,215.7,1063.4L215.7,1063.4z"/>
                                </g>
                                <g id="Cloud7">
                                    <path fill="#F2E9DF" d="M745.7,943.9c3.3,0,6.3,0.8,9.1,2.2c2.4-7.4,9.3-12.7,17.5-12.7c2.4,0,4.8,0.5,6.9,1.3
                                        c0-0.5,0-1.1,0-1.6c0-16.1,13.1-29.2,29.2-29.2c13.2,0,24.4,8.8,28,20.8c3.1-1.5,6.5-2.4,10.2-2.4c12.5,0,22.6,10.1,22.6,22.7
                                        c0,2.3-0.3,4.6-1,6.7c7.3,0.4,13.1,6.4,13.1,13.8c0,1.1-0.1,2.2-0.4,3.3H726.7c-0.4-1.6-0.6-3.3-0.6-5
                                        C726,952.8,734.8,943.9,745.7,943.9L745.7,943.9z"/>
                                </g>
                                <g id="Cloud8">
                                    <path fill="#F2E9DF" d="M1400.3,814c2.5,0,5,0.6,7.1,1.6c1.5-6.7,7.1-11.8,14-12.6c-0.3-1.1-0.5-2.4-0.5-3.6
                                        c0-7.2,5.8-13.1,13-13.1c6.1,0,11.2,4.1,12.6,9.8c0.1,0,0.3,0,0.4,0c7.7,0,14,6.2,14.1,13.9c1.5-0.4,3.1-0.6,4.7-0.6
                                        c11.2,0,20.3,9.1,20.3,20.3c0,0.8-0.1,1.7-0.2,2.5c-49.2,0-47.3,0-102.1,0c-0.1-0.6-0.1-1.1-0.1-1.7
                                        C1383.7,821.4,1391.1,814,1400.3,814L1400.3,814z"/>
                                </g>
                                <g id="Cloud9">
                                    <path fill="#F2E9DF" d="M656.6,1232.5c9.2,0,16.6,7.4,16.6,16.6c0,0.6,0,1.1-0.1,1.7c-54.9,0-53,0-102.1,0
                                        c-0.1-0.8-0.2-1.6-0.2-2.5c0-11.2,9.1-20.3,20.3-20.3c1.6,0,3.2,0.2,4.7,0.6c0.1-7.7,6.4-13.9,14.1-13.9c0.1,0,0.3,0,0.4,0
                                        c1.5-5.6,6.6-9.8,12.6-9.8c7.2,0,13,5.9,13,13.1c0,1.3-0.2,2.5-0.5,3.6c6.9,0.8,12.5,5.9,14,12.6
                                        C651.6,1233.1,654,1232.5,656.6,1232.5L656.6,1232.5z"/>
                                </g>
                                <g id="Cloud10">
                                    <path fill="#F2E9DF" d="M1221.3,1151.4c6.9,0,13.4,1.7,19.1,4.8c1.2-19.7,17.5-35.2,37.5-35.2h0.3c-0.4-2.2-0.7-4.4-0.7-6.8
                                        c0-18.7,15.1-33.8,33.7-33.8s33.7,15.1,33.7,33.8c0,1.8-0.1,3.5-0.4,5.2c15.8,1.3,28.2,14.6,28.2,30.7c0,1.5-0.1,2.9-0.3,4.3
                                        c0.7,0,1.3-0.1,2-0.1c19.3,0,35,15.7,35,35.1c0,0.6,0,1.1,0,1.7h-228.1C1181.5,1169.1,1199.4,1151.4,1221.3,1151.4
                                        L1221.3,1151.4z"/>
                                </g>
                                <g id="cloudGroup2">
                                    <g id="Cloud11">
                                        <path fill="#F2E9DF" d="M-228.4,129.5c3.3,0,6.3,0.8,9.1,2.2c2.4-7.4,9.3-12.7,17.5-12.7c2.4,0,4.8,0.5,6.9,1.3
                                            c0-0.5,0-1.1,0-1.6c0-16.1,13.1-29.2,29.2-29.2c13.2,0,24.4,8.8,28,20.8c3.1-1.5,6.5-2.4,10.2-2.4c12.5,0,22.6,10.1,22.6,22.7
                                            c0,2.3-0.3,4.6-1,6.7c7.3,0.4,13.1,6.4,13.1,13.8c0,1.1-0.1,2.2-0.4,3.3h-154.2c-0.4-1.6-0.6-3.3-0.6-5
                                            C-248.1,138.4-239.3,129.5-228.4,129.5L-228.4,129.5z"/>
                                    </g>
                                    <g id="Cloud12">
                                        <path fill="#F2E9DF" d="M-37.5,438.6c2.5,0,5,0.6,7.1,1.6c1.5-6.7,7.1-11.8,14-12.6c-0.3-1.1-0.5-2.4-0.5-3.6
                                            c0-7.2,5.8-13.1,13-13.1c6.1,0,11.2,4.1,12.6,9.8c0.1,0,0.3,0,0.4,0c7.7,0,14,6.2,14.1,13.9c1.5-0.4,3.1-0.6,4.7-0.6
                                            c11.2,0,20.3,9.1,20.3,20.3c0,0.8-0.1,1.7-0.2,2.5c-49.2,0-47.3,0-102.1,0c-0.1-0.6-0.1-1.1-0.1-1.7
                                            C-54.1,446-46.7,438.6-37.5,438.6L-37.5,438.6z"/>
                                    </g>
                                    <g id="Cloud13">
                                        <path fill="#F2E9DF" d="M154.7,278.3h0.4c-0.5-1.6-0.8-3.2-0.8-5c0-8.8,7.1-15.9,15.8-15.9c2.7,0,5.3,0.7,7.5,1.9
                                            c5.7-12.8,18.5-21.8,33.5-21.8c2.5,0,4.8,0.2,7.2,0.7c-1.4-2.5-2.1-5.4-2.1-8.4c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8
                                            c0,0.2,0,0.3,0,0.5c3.5-2.1,7.6-3.3,12-3.3c13,0,23.5,10.5,23.5,23.5c0,2.5-0.4,4.9-1.1,7.1c23.1,0.6,42.4,16.4,48.4,37.7
                                            H124.3C130.5,285.2,141.8,278.3,154.7,278.3L154.7,278.3z"/>
                                    </g>
                                    <g id="Cloud14">
                                        <path fill="#F2E9DF" d="M384.5,60.2c6.9,0,13.4,1.7,19.1,4.8c1.2-19.7,17.5-35.2,37.5-35.2h0.3c-0.4-2.2-0.7-4.4-0.7-6.8
                                            c0-18.7,15.1-33.8,33.7-33.8S508.1,4.3,508.1,23c0,1.8-0.1,3.5-0.4,5.2c15.8,1.3,28.2,14.6,28.2,30.7c0,1.5-0.1,2.9-0.3,4.3
                                            c0.7,0,1.3-0.1,2-0.1c19.3,0,35,15.7,35,35.1c0,0.6,0,1.1,0,1.7H344.5C344.7,77.9,362.6,60.2,384.5,60.2L384.5,60.2z"/>
                                    </g>
                                    <g id="Cloud15">
                                        <path fill="#F2E9DF" d="M1598.6,75.6c9.2,0,16.6,7.4,16.6,16.6c0,0.6,0,1.1-0.1,1.7c-54.9,0-53,0-102.1,0
                                            c-0.1-0.8-0.2-1.6-0.2-2.5c0-11.2,9.1-20.3,20.3-20.3c1.6,0,3.2,0.2,4.7,0.6c0.1-7.7,6.4-13.9,14.1-13.9c0.1,0,0.3,0,0.4,0
                                            c1.5-5.6,6.6-9.8,12.6-9.8c7.2,0,13,5.9,13,13.1c0,1.3-0.2,2.5-0.5,3.6c6.9,0.8,12.5,5.9,14,12.6
                                            C1593.6,76.2,1596,75.6,1598.6,75.6L1598.6,75.6z"/>
                                    </g>
                                    <g id="Cloud18">
                                        <path fill="#F2E9DF" d="M1400.3,814c2.5,0,5,0.6,7.1,1.6c1.5-6.7,7.1-11.8,14-12.6c-0.3-1.1-0.5-2.4-0.5-3.6
                                            c0-7.2,5.8-13.1,13-13.1c6.1,0,11.2,4.1,12.6,9.8c0.1,0,0.3,0,0.4,0c7.7,0,14,6.2,14.1,13.9c1.5-0.4,3.1-0.6,4.7-0.6
                                            c11.2,0,20.3,9.1,20.3,20.3c0,0.8-0.1,1.7-0.2,2.5c-49.2,0-47.3,0-102.1,0c-0.1-0.6-0.1-1.1-0.1-1.7
                                            C1383.7,821.4,1391.1,814,1400.3,814L1400.3,814z"/>
                                    </g>
                                </g>
                                <g id="CloudLines">
                                    <path fill="#40292E" d="M325.9,58.4c35.6,0,71.1,0,106.7,0c0.8,0,0.8-1.3,0-1.3c-35.6,0-71.1,0-106.7,0
                                        C325.1,57.1,325.1,58.4,325.9,58.4L325.9,58.4z"/>
                                    <path fill="#40292E" d="M335.5,809.2c17-0.2,34-0.4,51-0.6c0.8,0,0.8-1.3,0-1.3c-17,0.2-34,0.4-51,0.6
                                        C334.7,808,334.6,809.2,335.5,809.2L335.5,809.2z"/>
                                    <path fill="#40292E" d="M382,847.5c14.5,0,29,0,43.5,0c0.8,0,0.8-1.3,0-1.3c-14.5,0-29,0-43.5,0
                                        C381.2,846.3,381.2,847.5,382,847.5L382,847.5z"/>
                                    <path fill="#40292E" d="M806.6,416.7c15.3-0.1,30.7-0.2,46-0.3c0.8,0,0.8-1.3,0-1.3c-15.3,0.1-30.7,0.2-46,0.3
                                        C805.7,415.5,805.7,416.8,806.6,416.7L806.6,416.7z"/>
                                    <path fill="#40292E" d="M913.9,393.1c-20.7,0-41.3,0-62,0c-0.8,0-0.8,1.3,0,1.3c20.7,0,41.3,0,62,0
                                        C914.7,394.4,914.7,393.1,913.9,393.1L913.9,393.1z"/>
                                    <path fill="#40292E" d="M1163.2,321.7c21.3,0,42.7,0,64,0c0.8,0,0.8-1.3,0-1.3c-21.3,0-42.7,0-64,0
                                        C1162.4,320.4,1162.4,321.7,1163.2,321.7L1163.2,321.7z"/>
                                    <path fill="#40292E" d="M1209.9,348.4c32.7,0,65.3,0,98,0c0.8,0,0.8-1.3,0-1.3c-32.7,0-65.3,0-98,0
                                        C1209.1,347.1,1209.1,348.4,1209.9,348.4L1209.9,348.4z"/>
                                    <path fill="#40292E" d="M1503.2,84.4c10.4,0,20.9,0,31.3,0c0.8,0,0.8-1.3,0-1.3c-10.4,0-20.9,0-31.3,0
                                        C1502.4,83.1,1502.4,84.4,1503.2,84.4L1503.2,84.4z"/>
                                    <path fill="#40292E" d="M1514.6,70.4c5.3,0,10.7,0,16,0c0.8,0,0.8-1.3,0-1.3c-5.3,0-10.7,0-16,0
                                        C1513.8,69.1,1513.8,70.4,1514.6,70.4L1514.6,70.4z"/>
                                    <path fill="#40292E" d="M1181.9,638.3c14.2-0.4,28.4-0.8,42.7-1.3c0.8,0,0.8-1.3,0-1.3c-14.2,0.4-28.4,0.8-42.7,1.3
                                        C1181.1,637.1,1181.1,638.3,1181.9,638.3L1181.9,638.3z"/>
                                    <path fill="#40292E" d="M1150.6,661c44.2,0,88.4,0,132.7,0c0.8,0,0.8-1.3,0-1.3c-44.2,0-88.4,0-132.7,0
                                        C1149.8,659.8,1149.8,661,1150.6,661L1150.6,661z"/>
                                    <path fill="#40292E" d="M-48.1,429.7c10.7,0,21.3,0,32,0c0.8,0,0.8-1.3,0-1.3c-10.7,0-21.3,0-32,0
                                        C-48.9,428.4-48.9,429.7-48.1,429.7L-48.1,429.7z"/>
                                    <path fill="#40292E" d="M328.6,89c10.4,0,20.9,0,31.3,0c0.8,0,0.8-1.3,0-1.3c-10.4,0-20.9,0-31.3,0
                                        C327.8,87.8,327.8,89,328.6,89L328.6,89z"/>
                                </g>
                            </g>
                        </g>

                        <g id="spaceFull">
                            <g className='planet'>
                                <g className='allFlag'>
                                        <rect id="Pole" x="925.8" y="433.9" transform="matrix(0.3852 -0.9228 0.9228 0.3852 223.7103 1204.9803)" fill="#BABABA" width="180.8" height="1.3"/>
                                    <g id="FlagPos2" className='hidden'>
                                        <path fill="#EA7513" d="M1077.1,432.6l22.2-53.2l60.3,25.2l-25.2,60.3l-60.3-25.2L1077.1,432.6z"/>
                                        <path fill="#FF7900" d="M1028.5,403.9l22.2-53.2l60.3,25.2l-25.2,60.3l-60.3-25.2L1028.5,403.9z"/>
                                        <path fill="#9B4104" d="M1074,439.7l3-7.1l8.9,3.7L1074,439.7z"/>
                                        <path fill="#FCA55E" d="M1083.5,435.3l25.2-60.3l2.5,1l-25.2,60.3L1083.5,435.3z"/>
                                    </g>
                                    <g id="FlagPos1">
                                        <path fill="#E5E5E5" d="M1111,375.9l-25.2,60.3l-60.3-25.2l25.2-60.3L1111,375.9z"/>
                                        <path fill="#E5E5E5" d="M1085.8,436.3l-60.3-25.2l25.2-60.3L1111,376L1085.8,436.3z"/>
                                        <path fill="#EA7513" d="M1108,383.1l-22.2,53.2l-60.3-25.2l25.2-60.3L1111,376L1108,383.1z"/>
                                        <path fill="#FF7900" d="M1156.6,411.8l-22.2,53.2l-60.3-25.2l25.2-60.3l60.3,25.2L1156.6,411.8z"/>
                                        <path fill="#9B4104" d="M1111.1,376l-3,7.1l-8.9-3.7L1111.1,376z"/>
                                        <path fill="#FCA55E" d="M1101.6,380.4l-25.2,60.3l-2.5-1l25.2-60.3L1101.6,380.4z"/>
                                    </g>
                                </g>
                                <g id="tree">
                                    <path fill="#3B893B" d="M928.9,423.1c0,9.6-7.4,17.5-16.9,18.2h-39.1c-9.4-0.7-16.9-8.6-16.9-18.2c0-6.6,3.5-12.4,8.7-15.5
                                        c-0.2-0.9-0.3-1.8-0.3-2.7c0-7.7,6.3-14,14-14c0-7.7,6.3-14,14-14s14,6.3,14,14c7.7,0,14,6.3,14,14c0,0.9-0.1,1.8-0.3,2.7
                                        C925.4,410.8,928.9,416.6,928.9,423.1z"/>
                                    <polygon fill="#62484F" points="899.4,463.6 886,463.2 886,441.3 899.4,441.3                 "/>
                                    <path fill="#366D33" d="M899,378.7c-4.3,2.4-7.3,7-7.3,12.3c-7.7,0-14,6.3-14,14c0,0.9,0.1,1.8,0.3,2.7c-5.2,3.2-8.7,9-8.7,15.5
                                        c0,9.6,7.4,17.5,16.9,18.2h-13.4c-9.4-0.7-16.9-8.6-16.9-18.2c0-6.6,3.5-12.4,8.7-15.5c-0.2-0.9-0.3-1.8-0.3-2.7
                                        c0-7.7,6.3-14,14-14c0-7.7,6.3-14,14-14C894.8,377,897,377.6,899,378.7z"/>
                                    <rect x="886" y="441.3" fill="#40292E" width="13.3" height="3"/>
                                </g>
                                <g id="planet">
                                    <path fill="#007E9B" d="M996.5,569.6c0,58.7-47.6,106.3-106.3,106.3c-3.1,0-6.2-0.1-9.2-0.4l0,0c-54.4-4.7-97.1-50.3-97.1-105.9
                                        c0-55.6,42.7-101.3,97.1-105.9l0,0c3-0.3,6.1-0.4,9.2-0.4C948.9,463.2,996.5,510.8,996.5,569.6z"/>
                                    <path fill="#016A7C" d="M899.4,675.5c-3,0.3-6.1,0.4-9.2,0.4c-3.1,0-6.2-0.1-9.2-0.4c-54.4-4.7-97.1-50.3-97.1-105.9
                                        c0-55.6,42.7-101.3,97.1-105.9c3-0.3,6.1-0.4,9.2-0.4c3.1,0,6.2,0.1,9.2,0.4c-54.4,4.7-97.1,50.3-97.1,105.9
                                        C802.3,625.2,845,670.8,899.4,675.5z"/>
                                </g>
                                <g id="miniBall">
                                    <path fill="#FE861D" d="M910.1,459.5c0,2.4-1.9,4.4-4.4,4.4c-0.2,0-0.4,0-0.7,0c-2.1-0.3-3.7-2.1-3.7-4.3c0-2.2,1.6-4,3.7-4.3
                                        c0.2,0,0.4,0,0.7,0C908.1,455.1,910.1,457.1,910.1,459.5z"/>
                                    <path fill="#EF771D" d="M906.4,463.8c-0.2,0-0.4,0-0.7,0c-2.4,0-4.4-1.9-4.4-4.4s1.9-4.4,4.4-4.4c0.2,0,0.4,0,0.7,0
                                        c-2.1,0.3-3.7,2.1-3.7,4.3C902.7,461.6,904.3,463.5,906.4,463.8z"/>
                                </g>
                            </g>

                            <linearGradient id="shootingStar_1_" gradientUnits="userSpaceOnUse" x1="1012.6" y1="713.1" x2="1272.6" y2="713.1" gradientTransform="matrix(1 0 0 -1 0 867)">
                                <stop  offset="0" style={{stopColor:"#F5BC66", stopOpacity:"0"}} />
                                <stop  offset="1" style={{stopColor:"#F5BC66"}} />
                            </linearGradient>

                                <line id="shootingStar" fill="none" stroke="url(#shootingStar_1_)" strokeLinecap="round" strokeMiterlimit="10" x1="1013.1" y1="24.4" x2="1272.1" y2="283.4"/>
                            <circle id="spaceWave1" fill="#016A7C" cx="891.3" cy="565.4" r="1078.1"/>
                            <circle id="spaceWave2" fill="#007E9B" cx="891.3" cy="565.4" r="1078.1"/>
                            <circle id="spaceWave3" fill="#26344B" cx="891.3" cy="565.4" r="1078.1"/>
                            <g id="dollars1">
                                <path fill="#FFFFFF" d="M1453.8,173.2c0,0,0.9,0.9,2.1,0.9c0.9,0,1.6-0.5,1.6-1.4c0-2-4.1-1.6-4.1-4.1c0-1.1,0.9-2,2.1-2.2v-1.1
                                    h0.7v1.1c1.3,0.1,1.9,0.8,1.9,0.8l-0.4,0.7c0,0-0.7-0.7-1.8-0.7c-1.1,0-1.7,0.7-1.7,1.4c0,1.9,4.1,1.4,4.1,4.1
                                    c0,1.1-0.8,2.1-2.1,2.2v1.1h-0.7v-1.1c-1.5-0.1-2.3-1-2.3-1L1453.8,173.2z"/>
                                <path fill="#FFFFFF" d="M1240.5,633.4c0,0,1.8,1.9,4.5,1.9c1.9,0,3.5-1.1,3.5-3c0-4.2-8.7-3.4-8.7-8.6c0-2.3,1.8-4.2,4.5-4.6
                                    v-2.3h1.4v2.3c2.7,0.1,4.1,1.7,4.1,1.7l-0.8,1.4c0,0-1.6-1.5-3.8-1.5c-2.2,0-3.7,1.5-3.7,3c0,4,8.7,3,8.7,8.6
                                    c0,2.4-1.7,4.4-4.5,4.6v2.3h-1.4v-2.3c-3.1-0.2-4.8-2.2-4.8-2.2L1240.5,633.4z"/>
                                <path fill="#FFFFFF" d="M787.3,790c0,0,1.4,1.5,3.6,1.5c1.5,0,2.8-0.9,2.8-2.4c0-3.4-7-2.7-7-6.9c0-1.8,1.4-3.4,3.6-3.7v-1.9h1.1
                                    v1.8c2.1,0.1,3.3,1.3,3.3,1.3l-0.7,1.1c0,0-1.2-1.2-3-1.2s-2.9,1.2-2.9,2.4c0,3.2,7,2.4,7,6.9c0,1.9-1.4,3.5-3.6,3.7v1.8h-1.1
                                    v-1.8c-2.5-0.2-3.9-1.7-3.9-1.7L787.3,790z"/>
                                <path fill="#FFFFFF" d="M552.5,463.5c0,0,0.8,0.9,2,0.9c0.9,0,1.6-0.5,1.6-1.4c0-1.9-3.9-1.5-3.9-3.9c0-1,0.8-1.9,2-2.1v-1h0.6v1
                                    c1.2,0.1,1.9,0.7,1.9,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.7-1.6,1.3c0,1.8,3.9,1.4,3.9,3.9c0,1.1-0.8,2-2,2.1v1h-0.6v-1
                                    c-1.4-0.1-2.2-1-2.2-1L552.5,463.5z"/>
                                <path fill="#FFFFFF" d="M320.7,147.3c0,0,1.7,1.8,4.3,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4-8.3-3.2-8.3-8.2c0-2.2,1.7-4,4.3-4.4v-2.2
                                    h1.3v2.2c2.5,0.1,3.9,1.6,3.9,1.6l-0.8,1.4c0,0-1.5-1.4-3.6-1.4s-3.5,1.4-3.5,2.8c0,3.8,8.3,2.9,8.3,8.2c0,2.3-1.6,4.2-4.3,4.4
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L320.7,147.3z"/>
                                <path fill="#FFFFFF" d="M271,392c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.9-3.8-1.5-3.8-3.8c0-1,0.8-1.9,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.8c0,1.1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-1-2.1-1L271,392z"/>
                                <path fill="#FFFFFF" d="M239.9,675.4c0,0,1.2,1.3,3.1,1.3c1.3,0,2.4-0.8,2.4-2.1c0-2.9-6-2.3-6-5.9c0-1.6,1.2-2.9,3.1-3.1V664
                                    h0.9v1.6c1.8,0.1,2.8,1.1,2.8,1.1l-0.6,1c0,0-1.1-1-2.6-1s-2.5,1-2.5,2c0,2.7,6,2.1,6,5.9c0,1.6-1.2,3-3.1,3.2v1.6h-0.9v-1.6
                                    c-2.1-0.2-3.3-1.5-3.3-1.5L239.9,675.4z"/>
                                <path fill="#FFFFFF" d="M95.3,53.9c0,0,0.9,1,2.3,1c1,0,1.8-0.6,1.8-1.5c0-2.2-4.5-1.7-4.5-4.4c0-1.2,0.9-2.2,2.3-2.4v-1.2H98
                                    v1.2c1.4,0.1,2.1,0.8,2.1,0.8l-0.4,0.7c0,0-0.8-0.8-1.9-0.8s-1.9,0.7-1.9,1.5c0,2,4.5,1.6,4.5,4.4c0,1.2-0.9,2.2-2.3,2.4v1.2
                                    h-0.7v-1.2c-1.6-0.1-2.5-1.1-2.5-1.1L95.3,53.9z"/>
                                <path fill="#FFFFFF" d="M1570.3,344.6c0,0,1.6,1.7,4,1.7c1.7,0,3.1-1,3.1-2.7c0-3.7-7.7-3-7.7-7.6c0-2,1.6-3.8,4-4.1v-2.1h1.2v2
                                    c2.4,0.1,3.6,1.5,3.6,1.5l-0.7,1.3c0,0-1.4-1.3-3.4-1.3s-3.2,1.3-3.2,2.6c0,3.5,7.7,2.7,7.7,7.6c0,2.1-1.5,3.9-4,4.1v2h-1.2v-2
                                    c-2.8-0.2-4.3-1.9-4.3-1.9L1570.3,344.6z"/>
                                <path fill="#FFFFFF" d="M1108.3,31.3c0,0,1.5,1.6,3.9,1.6c1.6,0,2.9-1,2.9-2.6c0-3.6-7.4-2.9-7.4-7.3c0-1.9,1.5-3.6,3.9-3.9v-2
                                    h1.2v2c2.3,0.1,3.5,1.4,3.5,1.4l-0.7,1.2c0,0-1.3-1.3-3.2-1.3c-1.9,0-3.1,1.2-3.1,2.5c0,3.4,7.4,2.6,7.4,7.3c0,2-1.4,3.7-3.9,3.9
                                    v2h-1.2v-2c-2.7-0.2-4.1-1.8-4.1-1.8L1108.3,31.3z"/>
                                <path fill="#FFFFFF" d="M1533.7,716.3c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.8-3.8-1.5-3.8-3.7c0-1,0.8-1.8,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.6-1.6-0.6c-1,0-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.7c0,1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-0.9-2.1-0.9L1533.7,716.3z"/>
                                <path fill="#FFFFFF" d="M1695.2,94.3c0,0,1.7,1.8,4.4,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4.1-8.4-3.2-8.4-8.3c0-2.2,1.7-4.1,4.4-4.4
                                    v-2.3h1.3v2.2c2.6,0.1,4,1.6,4,1.6l-0.8,1.4c0,0-1.5-1.4-3.7-1.4s-3.5,1.4-3.5,2.9c0,3.8,8.4,2.9,8.4,8.3c0,2.3-1.6,4.2-4.4,4.5
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L1695.2,94.3z"/>
                            </g>

                            <g id="ChartsFull" clipPath="url(#bigMask_1_)">
                                <path id="Chart5_2" fill="none" stroke="#D1390B" strokeWidth="206" strokeMiterlimit="10" d="M894.1,432.9
                                      c57.2,0,103.5,46.4,103.5,103.5c0,57.2-46.3,103.5-103.5,103.5s-103.5-46.4-103.5-103.5c0-37.5,19.9-70.3,49.7-88.4"/>
                                <path id="Chart1_2" fill="none" stroke="#FFC67B" strokeWidth="206" strokeMiterlimit="10" d="M894.1,432.9
                                      c57.2,0,103.5,46.4,103.5,103.5c0,57.2-46.3,103.5-103.5,103.5s-103.5-46.4-103.5-103.5"/>
                                <path id="Chart2_2" fill="none" stroke="#FD9743" strokeWidth="206" strokeMiterlimit="10" d="M894.1,432.9
                                      c57.2,0,103.5,46.4,103.5,103.5c0,44.8-28.4,83-68.3,97.4"/>
                                <path id="Chart3_2" fill="none" stroke="#FE861D" strokeWidth="206" strokeMiterlimit="10" d="M894.1,432.9
                                      c45.6,0,84.3,29.5,98.1,70.4"/>

                                <path className='chartShadow' opacity="0.3" d="M995.1,717.5c-3.5,2.6-7.2,5.2-11,7.6c-96,62-224.2,34.5-286.2-61.5c-62-96-34.5-224.2,61.5-286.2
                      c3.8-2.4,7.6-4.7,11.4-6.9c-87.1,64.5-110.2,186.3-50.5,278.6C779.9,741.3,900.6,770.4,995.1,717.5z"/>
                                <path id="Chart5" className='chart' fill="none" stroke="#D1390B" strokeWidth="206" strokeMiterlimit="10" d="M790.6,536.4c0,57.1,46.3,103.5,103.5,103.5
                                      s103.5-46.3,103.5-103.5c0-57.1-46.3-103.5-103.5-103.5S790.6,479.2,790.6,536.4z"/>
                                <path className='chartShadowl' opacity="0.3" d="M893.6,536.4L765.8,374.4c6.6-5.2,13.5-10,20.6-14.3L893.6,536.4z"/>
                                <path id="Chart3" className='chart' fill="none" stroke="#FE861D" strokeWidth="206" strokeMiterlimit="10" d="M790.6,536.4c0,57.1,46.3,103.5,103.5,103.5
                                      s103.5-46.3,103.5-103.5c0-34.7-17.1-65.4-43.3-84.2"/>
                                <path className='chartShadowr' opacity="0.3" d="M1031.9,382.6L895.2,535.3l119.3-166.6C1020.6,373,1026.4,377.7,1031.9,382.6z"/>
                                <path id="Chart4" className='chart' fill="none" stroke="#FF5B00" strokeWidth="206" strokeMiterlimit="10" d="M790.6,536.4c0,57.1,46.3,103.5,103.5,103.5
                                      s103.5-46.3,103.5-103.5c0-57.1-46.3-103.5-103.5-103.5c-19.7,0-38.1,5.5-53.8,15.1"/>
                                <path id="Chart2" className='chart' fill="none" stroke="#FD9743" strokeWidth="206" strokeMiterlimit="10" d="M790.6,536.4c0,57.1,46.3,103.5,103.5,103.5
                                      s103.5-46.3,103.5-103.5c0-11.6-1.9-22.7-5.4-33.1"/>
                                <path id="Chart1" className='chart' fill="none" stroke="#FFC67B" strokeWidth="206" strokeMiterlimit="10" d="M790.6,536.4c0,57.1,46.3,103.5,103.5,103.5
                                      c12.4,0,24.2-2.2,35.2-6.1"/>

                                <path id="Chart6" className='chart' fill="none" stroke="#FF5B00" strokeWidth="206" strokeMiterlimit="10" d="M856.4,440
                      c-53.2,20.8-79.6,80.7-58.8,134c20.8,53.2,80.7,79.6,134,58.8c53.2-20.8,79.6-80.7,58.8-134S909.7,419.2,856.4,440z"/>
                            </g>

                            <g id="completePlane">
                                <g className='heli'>
                                    <path fill="#F16646" d="M530.4,450.5c0.1,8.7-2,31.5-2,31.5s-2.5-22.7-2.6-31.5c0-2.8,1-5.1,2.2-5.1
                                        C529.3,445.4,530.4,447.7,530.4,450.5z"/>
                                    <path fill="#F16646" d="M526.6,520c-0.1-8.7,2-31.5,2-31.5s2.5,22.7,2.6,31.5c0,2.8-1,5.1-2.2,5.1
                                        C527.6,525.1,526.6,522.9,526.6,520z"/>
                                </g>
                                <path fill="#E2DEC9" d="M542.3,497.8c-0.5,2.8-1.1,4.5-1.7,4.3c-9.1-2.9-15.3-9.2-15.3-16.3v-0.2
                                    C525.3,485.6,536.5,496.9,542.3,497.8z"/>
                                <path fill="#F4F0D9" d="M543.5,482.8c0,1,0,2.1-0.1,3.2v0.1c-0.1,4.6-0.5,8.8-1.1,11.7c-5.8-0.9-17-12.2-17-12.2v-0.1l0,0l0,0
                                    l0,0c0.3-7.2,6.9-13.1,16.3-15.6C542.7,469.6,543.5,475.4,543.5,482.8z"/>
                                <path fill="#CE5541" d="M803.7,488.4c0,1.4-1.2,2.8-2.6,3.2c-43.2,12.4-200.7,54-257.3,17.8c-1.9-1.2-3.4-4.2-3.3-6.5V502
                                    c0,0,0.1,0,0.1,0.1h0.1c0.6,0,1.3-2,1.8-5.1C542.7,497.9,557.9,551.7,803.7,488.4z"/>
                                <path fill="#F16646" d="M803.7,488.4c-245.8,63.3-260.9,9.5-261.2,8.6l0,0c0.5-2.9,0.8-6.7,0.9-10.8V486
                                    c0.3-8.9-0.5-16.4-1.8-16.1c-0.3,0.1-0.5,0.1-0.8,0.2v-1.3c0-3.4,2.8-6.2,6.2-6.1c13.4,0.1,45.5,0.4,67.2,0.6
                                    c0,4.3,9.6,10.7,21.6,10.8s21.8-6.1,21.9-10.4c3.1,0,5.8,0.1,7.8,0.1c33.4,0.3,61.8,4.2,86,9.1l4.7-9.3
                                    c11.4-23.8,16.5-31.1,40.9-31.4c1.9,0,3.2,1.5,3,3.3l-5.4,47.9c2.2,0.6,4.4,1.2,6.5,1.8C802.5,485.6,803.7,487,803.7,488.4z"/>

                                    <ellipse transform="matrix(9.168033e-003 -1 1 9.168033e-003 45.0777 1135.6318)" fill="#40292E" cx="595.6" cy="545.1" rx="17.9" ry="17.9"/>

                                    <ellipse transform="matrix(9.126946e-003 -1 1 9.126946e-003 45.1006 1135.6552)" fill="#F4F0D9" cx="595.6" cy="545.1" rx="10.3" ry="10.3"/>
                                <path fill="#F16646" d="M567.6,541.3c0.1-15,12.4-27.1,27.4-26.9c15,0.1,27.1,12.4,27,27.4L567.6,541.3z"/>
                                <path fill="#62484F" d="M645.7,426.7c0.1,0.5-0.2,2-2.5,1.3c-12.5-3.6-46.7-13.2-88.3-6.7c-9.5,1.5-11.2-2.2-11.4-3.2
                                    c0.1,1,0.5,2.1,1.2,3.2l15.4,25l55,0.5l29.1-17.3C645.6,428.7,646.1,427.7,645.7,426.7z"/>
                                <path fill="#40292E" d="M554.9,421.4c41.6-6.6,75.8,3,88.3,6.7c2.3,0.7,2.6-0.8,2.5-1.3v-0.1c0,0,0,0,0-0.1s-0.1-0.1-0.1-0.2
                                    c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0-0.1c-0.1-0.1-0.2-0.2-0.3-0.2c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2
                                    l-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.1s-0.1,0-0.1-0.1c-0.1-0.1-0.3-0.1-0.4-0.2c-12.8-4.9-49-18.6-94.2-13.6c-0.3,0-0.6,0.1-0.9,0.1
                                    c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.2c-0.1,0-0.2,0-0.2,0.1c-0.2,0.1-0.5,0.2-0.7,0.3h-0.1c-0.2,0.1-0.5,0.2-0.7,0.4
                                    c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.3,0.3-0.4,0.4c0,0-0.1,0-0.1,0.1
                                    c-0.2,0.2-0.3,0.3-0.4,0.5l-0.1,0.1c-0.1,0.1-0.2,0.3-0.3,0.4c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.2,0.3-0.2,0.5v0.1
                                    c-0.1,0.2-0.1,0.4-0.2,0.7v0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.6v0.1c0,0.1,0,0.2,0,0.2
                                    C543.7,419.2,545.4,422.9,554.9,421.4z"/>
                                <path fill="#62484F" d="M636.4,524.1L616,507.9c-0.9-0.7-2.6-1.3-3.7-1.3c-6.3-0.1-25.5-0.5-33.5-0.4c-1.1,0-2.8,0.5-3.8,1.1
                                    L555.8,519c8.1-2.9,41.4-2.8,79.8,5.7c2.3,0.5,2.5,1.9,1.9,2.5c-0.2,0.1-0.4,0.3-0.6,0.3C638.1,527.1,638.4,525.4,636.4,524.1z"
                                    />
                                <path fill="#40292E" d="M635.5,524.7c-38.4-8.5-71.7-8.6-79.8-5.7c-0.5,0.3-2.1,1.5-2.1,3c0,1.6,1.2,2.8,2.4,2.6
                                    c12.8-1.8,40.3-4.3,80,2.9c0.1,0,0.3,0,0.4,0h0.1c0.1,0,0.2,0,0.3,0h0.1c0.2-0.1,0.4-0.2,0.6-0.3
                                    C638,526.6,637.9,525.2,635.5,524.7z"/>
                                <path fill="#44261B" d="M611.8,513.3c-0.4,0.1-0.8-0.1-1-0.5l-35.5-86.5c-0.2-0.4,0-1,0.5-1.1c0.4-0.2,1,0,1.1,0.5l35.5,86.5
                                    C612.6,512.6,612.4,513.2,611.8,513.3C611.9,513.3,611.9,513.3,611.8,513.3z"/>
                                <path fill="#44261B" d="M577.5,512.6c-0.2,0-0.4,0-0.5,0c-0.4-0.2-0.7-0.7-0.5-1.1l35.6-84.4c0.2-0.4,0.7-0.7,1.1-0.5
                                    c0.4,0.2,0.7,0.7,0.5,1.1l-35.6,84.4C578,512.4,577.8,512.6,577.5,512.6z"/>
                                <g id="Banner">
                                    <path id="bannerRopes_1_" fill="#EDE5D3" d="M804.9,488l77.4,42.8l-0.6,0.9l-77.9-43.1v-1.1l77.9-50.1l0.6,0.9L804.9,488
                                        L804.9,488z"/>
                                    <g className='wavingBan'>
                                        <defs>
                                          <path id="maskPos1" d="M881.8,393.8c0,0,366.7,0,384.1,0c11.4,37.1-9,65-30.7,92c21.1,71.8,71.1,50.4,30.7,90.8
                                            c-14.1,0-384.1,0-384.1,0L881.8,393.8z"/>
                                        </defs>
                                        <clipPath id="maskPos1_1_">
                                          <use xlinkHref="#maskPos1"  style={{overflow:"visible"}}/>
                                        </clipPath>
                                        <g id="flag" clipPath="url(#maskPos1_1_)">
                                            <path id="t4" fill="#EBE4D2" d="M1272.6,434.2c53-21.4,141.8,21.5,195.4-1.2c0,39,0,77.1,0,101.3
                                                c-51.3,19-145.6-14.1-195.4,1.3c-51.3,19-145.6-15.4-195.4,0c-51.3,19-145.6-15.4-195.4,0l0,0c-51.3,19-145.6-15.4-195.4,0
                                                c0-36.5,0-101.4,0-101.4c53-21.4,141.8,22.7,195.4,0c53-21.4,141.8,22.7,195.4,0C1130.2,412.8,1219,456.9,1272.6,434.2z"/>
                                        </g>

                                        <path id="maskPos12" className='hidden' d="M881.8,393.8c0,0,366.7,0,384.1,0c11.4,37.1-9,65-30.7,92c21.1,71.8,71.1,50.4,30.7,90.8
                                            c-14.1,0-384.1,0-384.1,0L881.8,393.8z"/>
                                        <path id="maskPos2" className='hidden' fill="#EBE4D2" d="M881.7,396.2c0,0,366.7,0,384.1,0c47.9,39-7.8,16.2-30.7,92c30.7,39.5,36.3,48,30.7,90.8
                                            c-14.1,0-384.1,0-384.1,0L881.7,396.2z"/>
                                    </g>
                                    <g id="hiMom">
                                        <path id="H" fill="#62484F" d="M935.1,466h10.2v16.6h15.1V466h10.2v41.6h-10.2v-16.3h-15.1v16.3h-10.2V466z"/>
                                        <path id="I" fill="#62484F" d="M980.4,466h10.2v41.6h-10.2V466z"/>
                                        <path id="M" fill="#62484F" d="M1015.8,466h11.1l6.1,17.6c0.9,2.7,2.1,6.9,2.1,6.9h0.1c0,0,1.2-4.2,2.1-6.9l6.1-17.6h11.1
                                            l3.4,41.6h-10.2l-1.3-18.7c-0.2-3.1,0-7,0-7h-0.1c0,0-1.4,4.4-2.3,7l-4.4,12h-8.7l-4.4-12c-0.9-2.6-2.3-7-2.3-7h-0.1
                                            c0,0,0.2,3.8,0,7l-1.3,18.7h-10.2L1015.8,466z"/>
                                        <path id="O" fill="#62484F" d="M1085.1,465.3c12.6,0,21.8,9.3,21.8,21.2c0,12.2-9.2,21.8-21.8,21.8c-12.6,0-21.8-9.5-21.8-21.8
                                            C1063.3,474.7,1072.5,465.3,1085.1,465.3z M1085.1,499c6.2,0,11.2-5.4,11.2-12.5c0-6.8-5-11.9-11.2-11.9s-11.2,5.1-11.2,11.9
                                            C1073.9,493.7,1078.9,499,1085.1,499z"/>
                                        <path id="M2" fill="#62484F" d="M1115.9,466h11.1l6.1,17.6c0.9,2.7,2.1,6.9,2.1,6.9h0.1c0,0,1.2-4.2,2.1-6.9l6.1-17.6h11.1
                                            l3.4,41.6h-10.2l-1.3-18.7c-0.2-3.1,0-7,0-7h-0.1c0,0-1.4,4.4-2.3,7l-4.4,12h-8.7l-4.4-12c-0.9-2.6-2.3-7-2.3-7h-0.1
                                            c0,0,0.2,3.8,0,7l-1.3,18.7h-10.2L1115.9,466z"/>
                                        <path id="e" fill="#62484F" d="M1166.8,466h10.5l-0.9,28.7h-8.6L1166.8,466z M1167.5,498.9h9.2v8.7h-9.2V498.9z"/>
                                    </g>
                                </g>
                                <g id="PlaneLines">

                                        <line id="pl1" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="648.9" y1="512.7" x2="776.1" y2="512.7"/>

                                        <line id="pl2" fill="none" stroke="#40292E" strokeWidth="1.25" strokeLinecap="round" strokeMiterlimit="10" x1="726.6" y1="498.7" x2="829.2" y2="498.7"/>
                                </g>
                            </g>
                            <g id="dollarsXplode">
                                <g id="doll12">
                                    <path fill="#FFFFFF" d="M1539.3,2887.4l1.2-2.1c0,0-1.2-1.2-3.4-1.9c-0.4,0.7-0.8,1.4-1.1,2.2
                                        C1538,2886.2,1539.3,2887.4,1539.3,2887.4z"/>
                                    <path fill="#FFFFFF" d="M1534.4,2879.5h-2v3.3c0.7,0,1.4,0,2,0V2879.5z"/>
                                    <path fill="#FFFFFF" d="M1533.7,2885.2c0.9,0,1.6,0.1,2.3,0.4c0.3-0.8,0.7-1.5,1.1-2.2c-0.8-0.3-1.7-0.4-2.7-0.5v-0.1
                                        c-0.7,0-1.4,0-2,0v0.2c-0.3,0-0.6,0.1-0.9,0.2c0.2,0.8,0.2,1.6,0.3,2.4C1532.4,2885.3,1533,2885.2,1533.7,2885.2z"/>
                                    <path fill="#FFFFFF" d="M1529,2891.6c-0.4-0.6-0.6-1.2-0.6-2c0-0.7,0.2-1.5,0.7-2.1c-0.8-0.4-1.6-0.7-2.3-1.1
                                        c-0.6,1-1,2.1-1,3.3c0,0.8,0.1,1.5,0.4,2.1C1527.1,2891.8,1528,2891.7,1529,2891.6z"/>
                                    <path fill="#FFFFFF" d="M1532.8,2894.2c-0.4,0.7-0.8,1.4-1.4,2.1c1.7,0.8,3.5,1.5,4.8,2.4c0.4-0.7,0.9-1.4,1.4-2.1
                                        C1536.2,2895.6,1534.4,2894.9,1532.8,2894.2z"/>
                                    <path fill="#FFFFFF" d="M1537.7,2896.6c-0.5,0.7-0.9,1.4-1.4,2.1c1,0.7,1.7,1.4,2.1,2.4c0.8-0.2,1.7-0.5,2.5-0.8
                                        C1540.3,2898.6,1539.1,2897.5,1537.7,2896.6z"/>
                                    <path fill="#FFFFFF" d="M1541.1,2902.3c0-0.7-0.1-1.4-0.3-2c-0.8,0.3-1.6,0.5-2.5,0.8c0.1,0.4,0.2,0.8,0.2,1.3
                                        c0,0.9-0.2,1.7-0.7,2.3c0.7,0.5,1.4,0.9,2.1,1.3C1540.7,2904.9,1541.1,2903.6,1541.1,2902.3z"/>
                                    <path fill="#FFFFFF" d="M1540,2906c-0.7-0.4-1.5-0.8-2.1-1.3c-0.7,1.1-1.9,1.8-3.3,2c0.2,0.8,0.3,1.5,0.4,2.3
                                        C1537.3,2908.7,1539,2907.5,1540,2906z"/>
                                    <path fill="#FFFFFF" d="M1534.6,2906.7c-0.4,0.1-0.7,0.1-1.1,0.1c-1,0-2-0.2-2.8-0.5c-0.2,0.8-0.6,1.5-0.8,2.3
                                        c0.8,0.2,1.6,0.4,2.6,0.5v0.2c0.7,0,1.4,0,2,0v-0.2c0.2,0,0.4,0,0.6-0.1C1534.9,2908.2,1534.8,2907.5,1534.6,2906.7z"/>
                                    <path fill="#FFFFFF" d="M1526.8,2904l-1.5,1.9c0,0,1.6,1.8,4.5,2.7c0.3-0.7,0.6-1.5,0.8-2.3
                                        C1528.3,2905.5,1526.8,2904,1526.8,2904z"/>
                                    <path fill="#FFFFFF" d="M1532.4,2909.3v3.1h2v-3.1C1533.8,2909.3,1533.1,2909.3,1532.4,2909.3z"/>
                                    <path fill="#FFFFFF" d="M1529,2891.6c-1,0.1-1.9,0.1-2.9,0.1c0.8,2.2,3,3.5,5.3,4.5c0.6-0.6,1-1.4,1.4-2.1
                                        C1531.2,2893.5,1529.8,2892.7,1529,2891.6z"/>
                                    <path fill="#FFFFFF" d="M1531.8,2885.5c-0.1-0.8-0.1-1.6-0.3-2.4c-2.1,0.5-3.8,1.7-4.8,3.3c0.7,0.4,1.5,0.8,2.3,1.1
                                        C1529.6,2886.6,1530.5,2885.8,1531.8,2885.5z"/>
                                </g>
                                <g id="doll11">
                                    <path fill="#FFFFFF" d="M1310.6,3081.4l1.1-1.9c0,0-1.1-1.1-3.1-1.8c-0.3,0.7-0.7,1.3-1,2
                                        C1309.5,3080.3,1310.6,3081.4,1310.6,3081.4z"/>
                                    <path fill="#FFFFFF" d="M1306.2,3074.1h-1.9v3c0.6,0,1.3,0,1.9,0V3074.1z"/>
                                    <path fill="#FFFFFF" d="M1305.5,3079.4c0.8,0,1.5,0.1,2.2,0.3c0.3-0.7,0.7-1.4,1-2c-0.7-0.2-1.5-0.4-2.5-0.5v-0.1
                                        c-0.6,0-1.2,0-1.9,0v0.2c-0.3,0-0.6,0.1-0.9,0.2c0.2,0.7,0.2,1.5,0.3,2.2C1304.3,3079.4,1304.9,3079.4,1305.5,3079.4z"/>
                                    <path fill="#FFFFFF" d="M1301.2,3085.2c-0.4-0.5-0.6-1.1-0.6-1.9c0-0.7,0.2-1.4,0.6-2c-0.7-0.3-1.4-0.6-2.1-1
                                        c-0.6,0.9-0.9,2-0.9,3c0,0.7,0.1,1.3,0.3,1.9C1299.4,3085.4,1300.3,3085.3,1301.2,3085.2z"/>
                                    <path fill="#FFFFFF" d="M1304.7,3087.6c-0.4,0.7-0.7,1.3-1.2,1.9c1.6,0.7,3.2,1.4,4.4,2.2c0.4-0.7,0.9-1.3,1.3-1.9
                                        C1307.8,3088.9,1306.2,3088.3,1304.7,3087.6z"/>
                                    <path fill="#FFFFFF" d="M1309.2,3089.8c-0.4,0.6-0.9,1.3-1.3,1.9c0.9,0.6,1.6,1.3,1.9,2.2c0.8-0.2,1.5-0.4,2.3-0.7
                                        C1311.6,3091.7,1310.5,3090.6,1309.2,3089.8z"/>
                                    <path fill="#FFFFFF" d="M1312.3,3095c0-0.7-0.1-1.3-0.3-1.8c-0.7,0.3-1.5,0.5-2.3,0.7c0.1,0.4,0.2,0.8,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2.1c0.6,0.4,1.3,0.8,2,1.2C1312,3097.5,1312.3,3096.3,1312.3,3095z"/>
                                    <path fill="#FFFFFF" d="M1311.4,3098.4c-0.7-0.4-1.3-0.8-2-1.2c-0.6,1-1.7,1.6-3,1.8c0.2,0.7,0.3,1.4,0.4,2.1
                                        C1308.8,3100.9,1310.4,3099.9,1311.4,3098.4z"/>
                                    <path fill="#FFFFFF" d="M1306.4,3099.1c-0.3,0.1-0.7,0.1-1,0.1c-1,0-1.8-0.2-2.6-0.4c-0.2,0.7-0.5,1.4-0.8,2.1
                                        c0.7,0.2,1.5,0.4,2.4,0.5v0.2c0.6,0,1.2,0,1.9,0v-0.2c0.2,0,0.4,0,0.6-0.1C1306.7,3100.5,1306.6,3099.8,1306.4,3099.1z"/>
                                    <path fill="#FFFFFF" d="M1299.2,3096.6l-1.4,1.8c0,0,1.4,1.6,4.1,2.5c0.2-0.7,0.5-1.4,0.8-2.1
                                        C1300.6,3098,1299.2,3096.6,1299.2,3096.6z"/>
                                    <path fill="#FFFFFF" d="M1304.4,3101.5v2.9h1.9v-2.9C1305.6,3101.5,1305,3101.5,1304.4,3101.5z"/>
                                    <path fill="#FFFFFF" d="M1301.2,3085.2c-0.9,0.1-1.8,0.1-2.6,0.1c0.8,2,2.8,3.2,4.9,4.2c0.5-0.6,0.9-1.2,1.2-1.9
                                        C1303.2,3086.9,1301.9,3086.3,1301.2,3085.2z"/>
                                    <path fill="#FFFFFF" d="M1303.8,3079.6c-0.1-0.7-0.1-1.5-0.3-2.2c-2,0.5-3.5,1.6-4.4,3c0.7,0.4,1.4,0.7,2.1,1
                                        C1301.7,3080.6,1302.6,3079.9,1303.8,3079.6z"/>
                                </g>
                                {/*<g id="doll10">
                                    <path fill="#FFFFFF" d="M1207.2,2757l0.9-1.5c0,0-0.8-0.8-2.3-1.3c-0.2,0.5-0.5,1-0.8,1.5
                                        C1206.4,2756.1,1207.2,2757,1207.2,2757z"/>
                                    <path fill="#FFFFFF" d="M1203.9,2751.5h-1.4v2.3c0.5,0,0.9,0,1.4,0V2751.5z"/>
                                    <path fill="#FFFFFF" d="M1203.4,2755.4c0.6,0,1.1,0.1,1.6,0.3c0.2-0.5,0.5-1,0.8-1.5c-0.5-0.2-1.2-0.3-1.9-0.3v-0.1
                                        c-0.5,0-0.9,0-1.4,0v0.1c-0.2,0-0.4,0.1-0.6,0.1c0.1,0.5,0.1,1.1,0.2,1.6C1202.5,2755.5,1202.9,2755.4,1203.4,2755.4z"/>
                                    <path fill="#FFFFFF" d="M1200.1,2759.9c-0.3-0.4-0.4-0.9-0.4-1.4s0.2-1,0.5-1.5c-0.5-0.2-1.1-0.5-1.6-0.8
                                        c-0.4,0.7-0.7,1.5-0.7,2.3c0,0.5,0.1,1,0.3,1.4C1198.8,2760,1199.4,2759.9,1200.1,2759.9z"/>
                                    <path fill="#FFFFFF" d="M1202.7,2761.7c-0.3,0.5-0.5,1-0.9,1.4c1.2,0.5,2.4,1,3.4,1.6c0.3-0.5,0.6-1,1-1.4
                                        C1205.1,2762.6,1203.9,2762.2,1202.7,2761.7z"/>
                                    <path fill="#FFFFFF" d="M1206.1,2763.3c-0.3,0.5-0.7,0.9-1,1.4c0.7,0.5,1.2,1,1.4,1.7c0.6-0.1,1.1-0.3,1.7-0.5
                                        C1208,2764.7,1207.1,2763.9,1206.1,2763.3z"/>
                                    <path fill="#FFFFFF" d="M1208.5,2767.3c0-0.5-0.1-1-0.2-1.4c-0.6,0.2-1.1,0.4-1.7,0.5c0.1,0.3,0.1,0.6,0.1,0.9
                                        c0,0.6-0.2,1.2-0.5,1.6c0.5,0.3,1,0.6,1.5,0.9C1208.3,2769.1,1208.5,2768.2,1208.5,2767.3z"/>
                                    <path fill="#FFFFFF" d="M1207.8,2769.8c-0.5-0.3-1-0.6-1.5-0.9c-0.5,0.7-1.3,1.2-2.3,1.4c0.1,0.5,0.2,1.1,0.3,1.6
                                        C1205.9,2771.7,1207.1,2770.9,1207.8,2769.8z"/>
                                    <path fill="#FFFFFF" d="M1204,2770.3c-0.2,0-0.5,0.1-0.8,0.1c-0.7,0-1.4-0.1-2-0.3c-0.2,0.6-0.4,1.1-0.6,1.6
                                        c0.5,0.2,1.1,0.3,1.8,0.3v0.2c0.5,0,0.9,0,1.4,0v-0.2c0.1,0,0.3,0,0.4-0.1C1204.2,2771.4,1204.1,2770.8,1204,2770.3z"/>
                                    <path fill="#FFFFFF" d="M1198.6,2768.5l-1.1,1.3c0,0,1.1,1.2,3.1,1.9c0.2-0.5,0.4-1,0.6-1.6
                                        C1199.6,2769.5,1198.6,2768.5,1198.6,2768.5z"/>
                                    <path fill="#FFFFFF" d="M1202.5,2772.1v2.2h1.4v-2.2C1203.4,2772.1,1203,2772.1,1202.5,2772.1z"/>
                                    <path fill="#FFFFFF" d="M1200.1,2759.9c-0.7,0.1-1.3,0.1-2,0.1c0.6,1.5,2.1,2.4,3.7,3.1c0.4-0.4,0.7-0.9,0.9-1.4
                                        C1201.6,2761.2,1200.6,2760.6,1200.1,2759.9z"/>
                                    <path fill="#FFFFFF" d="M1202.1,2755.6c-0.1-0.5-0.1-1.1-0.2-1.6c-1.5,0.3-2.6,1.2-3.3,2.3c0.5,0.3,1,0.5,1.6,0.8
                                        C1200.5,2756.4,1201.2,2755.9,1202.1,2755.6z"/>
                                </g>*/}
                                <g id="doll9">
                                    <path fill="#FFFFFF" d="M1105.6,2905.6l1.2-2.1c0,0-1.2-1.2-3.3-1.9c-0.4,0.7-0.7,1.4-1.1,2.2
                                        C1104.4,2904.4,1105.6,2905.6,1105.6,2905.6z"/>
                                    <path fill="#FFFFFF" d="M1100.9,2897.8h-2v3.2c0.7,0,1.3,0,2,0V2897.8z"/>
                                    <path fill="#FFFFFF" d="M1100.1,2903.5c0.8,0,1.6,0.1,2.3,0.4c0.3-0.8,0.7-1.5,1.1-2.2c-0.8-0.2-1.6-0.4-2.6-0.5v-0.1
                                        c-0.6,0-1.3,0-2,0v0.2c-0.3,0-0.6,0.1-0.9,0.2c0.2,0.8,0.2,1.6,0.3,2.3C1098.8,2903.6,1099.5,2903.5,1100.1,2903.5z"/>
                                    <path fill="#FFFFFF" d="M1095.5,2909.8c-0.4-0.6-0.6-1.2-0.6-2c0-0.7,0.2-1.5,0.6-2.1c-0.8-0.3-1.5-0.7-2.2-1.1
                                        c-0.6,1-0.9,2.1-0.9,3.3c0,0.8,0.1,1.4,0.4,2C1093.6,2909.9,1094.6,2909.9,1095.5,2909.8z"/>
                                    <path fill="#FFFFFF" d="M1099.3,2912.3c-0.4,0.7-0.8,1.4-1.3,2c1.7,0.8,3.4,1.4,4.8,2.3c0.4-0.7,0.9-1.4,1.4-2.1
                                        C1102.6,2913.7,1100.8,2913,1099.3,2912.3z"/>
                                    <path fill="#FFFFFF" d="M1104,2914.6c-0.5,0.7-0.9,1.3-1.4,2.1c1,0.6,1.7,1.4,2,2.4c0.8-0.2,1.6-0.5,2.4-0.7
                                        C1106.6,2916.6,1105.5,2915.5,1104,2914.6z"/>
                                    <path fill="#FFFFFF" d="M1107.4,2920.2c0-0.7-0.1-1.4-0.3-1.9c-0.8,0.3-1.6,0.5-2.4,0.7c0.1,0.4,0.2,0.8,0.2,1.3
                                        c0,0.9-0.2,1.7-0.7,2.3c0.7,0.5,1.4,0.9,2.1,1.3C1107.1,2922.8,1107.4,2921.6,1107.4,2920.2z"/>
                                    <path fill="#FFFFFF" d="M1106.4,2923.9c-0.7-0.4-1.4-0.8-2.1-1.3c-0.7,1-1.9,1.7-3.2,2c0.2,0.7,0.3,1.5,0.4,2.3
                                        C1103.7,2926.5,1105.4,2925.4,1106.4,2923.9z"/>
                                    <path fill="#FFFFFF" d="M1101,2924.6c-0.4,0.1-0.7,0.1-1.1,0.1c-1,0-2-0.2-2.8-0.5c-0.2,0.8-0.6,1.5-0.8,2.2
                                        c0.8,0.2,1.6,0.4,2.5,0.5v0.2c0.7,0,1.3,0,2,0v-0.2c0.2,0,0.4,0,0.6-0.1C1101.4,2926.1,1101.2,2925.3,1101,2924.6z"/>
                                    <path fill="#FFFFFF" d="M1093.4,2921.9l-1.5,1.9c0,0,1.5,1.7,4.4,2.6c0.3-0.7,0.6-1.5,0.8-2.2
                                        C1094.8,2923.4,1093.4,2921.9,1093.4,2921.9z"/>
                                    <path fill="#FFFFFF" d="M1098.9,2927.1v3.1h2v-3.1C1100.2,2927.1,1099.5,2927.1,1098.9,2927.1z"/>
                                    <path fill="#FFFFFF" d="M1095.5,2909.8c-0.9,0.1-1.9,0.1-2.8,0.1c0.8,2.2,3,3.4,5.2,4.4c0.6-0.6,0.9-1.3,1.3-2
                                        C1097.7,2911.6,1096.3,2910.8,1095.5,2909.8z"/>
                                    <path fill="#FFFFFF" d="M1098.3,2903.7c-0.1-0.8-0.1-1.6-0.3-2.3c-2.1,0.5-3.7,1.7-4.7,3.2c0.7,0.4,1.5,0.7,2.2,1.1
                                        C1096.1,2904.8,1097,2904.1,1098.3,2903.7z"/>
                                </g>
                                <g id="doll8">
                                    <path fill="#FFFFFF" d="M957.2,3153.7l1.1-1.9c0,0-1-1.1-3-1.7c-0.3,0.6-0.7,1.3-1,2C956,3152.6,957.2,3153.7,957.2,3153.7z"/>
                                    <path fill="#FFFFFF" d="M952.9,3146.6H951v2.9c0.6,0,1.2,0,1.8,0v-2.9H952.9z"/>
                                    <path fill="#FFFFFF" d="M952.2,3151.7c0.8,0,1.5,0.1,2.1,0.3c0.3-0.7,0.7-1.3,1-2c-0.7-0.2-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.1c-0.3,0-0.6,0.1-0.8,0.1c0.2,0.7,0.2,1.4,0.3,2.1C951,3151.8,951.6,3151.7,952.2,3151.7z"/>
                                    <path fill="#FFFFFF" d="M948,3157.4c-0.4-0.5-0.6-1.1-0.6-1.8s0.2-1.3,0.6-1.9c-0.7-0.3-1.4-0.6-2-1c-0.6,0.9-0.9,1.9-0.9,3
                                        c0,0.7,0.1,1.3,0.3,1.9C946.3,3157.6,947.1,3157.5,948,3157.4z"/>
                                    <path fill="#FFFFFF" d="M951.4,3159.8c-0.4,0.6-0.7,1.3-1.2,1.8c1.5,0.7,3.1,1.3,4.3,2.1c0.4-0.6,0.8-1.3,1.2-1.9
                                        C954.4,3161,952.8,3160.4,951.4,3159.8z"/>
                                    <path fill="#FFFFFF" d="M955.7,3161.9c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.6,1.5,1.3,1.9,2.2c0.7-0.2,1.5-0.4,2.2-0.7
                                        C958.1,3163.7,957,3162.7,955.7,3161.9z"/>
                                    <path fill="#FFFFFF" d="M958.8,3167c0-0.7-0.1-1.2-0.3-1.8c-0.7,0.3-1.5,0.5-2.2,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2.1c0.6,0.4,1.2,0.8,1.9,1.2C958.5,3169.3,958.8,3168.2,958.8,3167z"/>
                                    <path fill="#FFFFFF" d="M957.8,3170.3c-0.7-0.4-1.3-0.7-1.9-1.2c-0.6,0.9-1.7,1.6-2.9,1.8c0.2,0.7,0.3,1.4,0.4,2.1
                                        C955.4,3172.7,956.9,3171.7,957.8,3170.3z"/>
                                    <path fill="#FFFFFF" d="M953,3170.9c-0.3,0.1-0.7,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.4-0.8,2
                                        c0.7,0.2,1.5,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C953.3,3172.3,953.2,3171.6,953,3170.9z"/>
                                    <path fill="#FFFFFF" d="M946.1,3168.5l-1.4,1.7c0,0,1.4,1.6,4,2.4c0.2-0.7,0.5-1.3,0.8-2
                                        C947.4,3169.9,946.1,3168.5,946.1,3168.5z"/>
                                    <path fill="#FFFFFF" d="M951,3173.3v2.8h1.8v-2.8C952.3,3173.3,951.6,3173.3,951,3173.3z"/>
                                    <path fill="#FFFFFF" d="M948,3157.4c-0.9,0.1-1.7,0.1-2.6,0.1c0.7,2,2.7,3.1,4.8,4c0.5-0.6,0.9-1.2,1.2-1.8
                                        C949.9,3159.1,948.7,3158.4,948,3157.4z"/>
                                    <path fill="#FFFFFF" d="M950.5,3152c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.3,2.9c0.6,0.4,1.3,0.7,2,1
                                        C948.5,3152.9,949.4,3152.3,950.5,3152z"/>
                                </g>
                                {/*<g id="doll7">
                                    <path fill="#FFFFFF" d="M907.1,2741.3l1.1-1.8c0,0-1-1-2.9-1.7c-0.3,0.6-0.7,1.2-1,1.9C906,2740.3,907.1,2741.3,907.1,2741.3z"
                                        />
                                    <path fill="#FFFFFF" d="M902.9,2734.5h-1.7v2.8c0.6,0,1.2,0,1.7,0V2734.5z"/>
                                    <path fill="#FFFFFF" d="M902.3,2739.4c0.7,0,1.4,0.1,2,0.3c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.2-1.4-0.4-2.3-0.4v-0.1
                                        c-0.6,0-1.2,0-1.7,0v0.1c-0.3,0-0.5,0.1-0.8,0.1c0.2,0.7,0.2,1.4,0.3,2C901.1,2739.5,901.7,2739.4,902.3,2739.4z"/>
                                    <path fill="#FFFFFF" d="M898.2,2745c-0.4-0.5-0.6-1.1-0.6-1.7c0-0.6,0.2-1.3,0.6-1.8c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.8-0.8,2.9c0,0.7,0.1,1.3,0.3,1.8C896.6,2745.1,897.4,2745,898.2,2745z"/>
                                    <path fill="#FFFFFF" d="M901.5,2747.2c-0.3,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.2,2c0.4-0.6,0.8-1.2,1.2-1.8
                                        C904.4,2748.4,902.9,2747.8,901.5,2747.2z"/>
                                    <path fill="#FFFFFF" d="M905.7,2749.2c-0.4,0.6-0.8,1.2-1.2,1.8c0.8,0.6,1.5,1.2,1.8,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C908,2751,907,2750,905.7,2749.2z"/>
                                    <path fill="#FFFFFF" d="M908.7,2754.1c0-0.6-0.1-1.2-0.2-1.7c-0.7,0.2-1.4,0.5-2.1,0.7c0.1,0.3,0.2,0.7,0.2,1.1
                                        c0,0.8-0.2,1.4-0.6,2c0.6,0.4,1.2,0.8,1.8,1.1C908.3,2756.4,908.7,2755.3,908.7,2754.1z"/>
                                    <path fill="#FFFFFF" d="M907.7,2757.3c-0.6-0.3-1.3-0.7-1.8-1.1c-0.6,0.9-1.6,1.5-2.8,1.7c0.2,0.7,0.3,1.3,0.4,2
                                        C905.4,2759.6,906.9,2758.7,907.7,2757.3z"/>
                                    <path fill="#FFFFFF" d="M903.1,2757.9c-0.3,0.1-0.6,0.1-1,0.1c-0.9,0-1.7-0.2-2.4-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.2,0.4v0.2c0.6,0,1.2,0,1.7,0v-0.2c0.2,0,0.3,0,0.5-0.1C903.4,2759.3,903.2,2758.6,903.1,2757.9z"/>
                                    <path fill="#FFFFFF" d="M896.4,2755.6l-1.3,1.7c0,0,1.4,1.5,3.9,2.3c0.2-0.6,0.5-1.3,0.7-2
                                        C897.6,2756.9,896.4,2755.6,896.4,2755.6z"/>
                                    <path fill="#FFFFFF" d="M901.2,2760.2v2.7h1.7v-2.7C902.3,2760.2,901.8,2760.2,901.2,2760.2z"/>
                                    <path fill="#FFFFFF" d="M898.2,2745c-0.8,0.1-1.6,0.1-2.5,0.1c0.7,1.9,2.6,3,4.6,3.9c0.5-0.5,0.8-1.2,1.2-1.8
                                        C900.1,2746.6,898.9,2745.9,898.2,2745z"/>
                                    <path fill="#FFFFFF" d="M900.7,2739.7c-0.1-0.7-0.1-1.4-0.3-2c-1.8,0.4-3.3,1.5-4.1,2.8c0.6,0.4,1.3,0.7,2,1
                                        C898.7,2740.6,899.6,2740,900.7,2739.7z"/>
                                </g>
                                <g id="doll6">
                                    <path fill="#FFFFFF" d="M679.8,2796.4l1-1.7c0,0-0.9-1-2.7-1.5c-0.3,0.6-0.6,1.2-0.9,1.8
                                        C678.8,2795.4,679.8,2796.4,679.8,2796.4z"/>
                                    <path fill="#FFFFFF" d="M675.9,2790h-1.6v2.6c0.5,0,1.1,0,1.6,0V2790z"/>
                                    <path fill="#FFFFFF" d="M675.3,2794.6c0.7,0,1.3,0.1,1.9,0.3c0.3-0.6,0.6-1.2,0.9-1.8c-0.6-0.2-1.3-0.4-2.2-0.4v-0.1
                                        c-0.5,0-1.1,0-1.6,0v0.1c-0.3,0-0.5,0.1-0.7,0.1c0.2,0.6,0.2,1.3,0.3,1.9C674.3,2794.7,674.8,2794.6,675.3,2794.6z"/>
                                    <path fill="#FFFFFF" d="M671.5,2799.8c-0.3-0.5-0.5-1-0.5-1.6s0.2-1.2,0.5-1.7c-0.6-0.3-1.2-0.6-1.8-0.9
                                        c-0.5,0.8-0.8,1.7-0.8,2.7c0,0.6,0.1,1.2,0.3,1.7C670,2799.9,670.8,2799.8,671.5,2799.8z"/>
                                    <path fill="#FFFFFF" d="M674.6,2801.8c-0.3,0.6-0.6,1.2-1.1,1.7c1.4,0.6,2.8,1.2,3.9,1.9c0.4-0.6,0.7-1.1,1.1-1.7
                                        C677.3,2803,675.9,2802.4,674.6,2801.8z"/>
                                    <path fill="#FFFFFF" d="M678.5,2803.7c-0.4,0.5-0.8,1.1-1.1,1.7c0.8,0.5,1.4,1.1,1.7,1.9c0.7-0.2,1.3-0.4,2-0.6
                                        C680.7,2805.4,679.7,2804.5,678.5,2803.7z"/>
                                    <path fill="#FFFFFF" d="M681.3,2808.3c0-0.6-0.1-1.1-0.2-1.6c-0.7,0.2-1.3,0.4-2,0.6c0.1,0.3,0.2,0.7,0.2,1
                                        c0,0.7-0.2,1.4-0.5,1.9c0.5,0.4,1.1,0.7,1.7,1C681,2810.5,681.3,2809.4,681.3,2808.3z"/>
                                    <path fill="#FFFFFF" d="M680.4,2811.3c-0.6-0.3-1.2-0.7-1.7-1c-0.6,0.9-1.5,1.4-2.6,1.6c0.2,0.6,0.3,1.2,0.3,1.9
                                        C678.2,2813.5,679.6,2812.6,680.4,2811.3z"/>
                                    <path fill="#FFFFFF" d="M676.1,2811.9c-0.3,0-0.6,0.1-0.9,0.1c-0.8,0-1.6-0.2-2.3-0.4c-0.2,0.6-0.5,1.2-0.7,1.8
                                        c0.6,0.2,1.3,0.3,2.1,0.4v0.2c0.5,0,1.1,0,1.6,0v-0.2c0.2,0,0.3,0,0.5-0.1C676.3,2813.1,676.2,2812.5,676.1,2811.9z"/>
                                    <path fill="#FFFFFF" d="M669.8,2809.7l-1.2,1.5c0,0,1.3,1.4,3.6,2.2c0.2-0.6,0.5-1.2,0.7-1.8
                                        C671,2810.9,669.8,2809.7,669.8,2809.7z"/>
                                    <path fill="#FFFFFF" d="M674.3,2814v2.5h1.6v-2.5C675.4,2814,674.9,2814,674.3,2814z"/>
                                    <path fill="#FFFFFF" d="M671.5,2799.8c-0.8,0.1-1.5,0.1-2.3,0.1c0.7,1.8,2.4,2.8,4.3,3.6c0.5-0.5,0.8-1.1,1.1-1.7
                                        C673.3,2801.3,672.2,2800.7,671.5,2799.8z"/>
                                    <path fill="#FFFFFF" d="M673.8,2794.8c-0.1-0.6-0.1-1.3-0.3-1.9c-1.7,0.4-3.1,1.4-3.8,2.6c0.6,0.3,1.2,0.6,1.8,0.9
                                        C672,2795.7,672.8,2795.1,673.8,2794.8z"/>
                                </g>*/}
                                <g id="doll5">
                                    <path fill="#FFFFFF" d="M650.3,3066.5l1.1-1.9c0,0-1-1.1-3-1.7c-0.3,0.6-0.7,1.3-1,2C649.2,3065.5,650.3,3066.5,650.3,3066.5z"
                                        />
                                    <path fill="#FFFFFF" d="M646.1,3059.5h-1.8v2.9c0.6,0,1.2,0,1.8,0V3059.5z"/>
                                    <path fill="#FFFFFF" d="M645.4,3064.6c0.8,0,1.5,0.1,2.1,0.3c0.3-0.7,0.7-1.3,1-2c-0.7-0.2-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.1c-0.3,0-0.6,0.1-0.8,0.1c0.2,0.7,0.2,1.4,0.3,2.1C644.2,3064.7,644.8,3064.6,645.4,3064.6z"/>
                                    <path fill="#FFFFFF" d="M641.2,3070.2c-0.4-0.5-0.6-1.1-0.6-1.8s0.2-1.3,0.6-1.9c-0.7-0.3-1.4-0.6-2-1c-0.5,0.9-0.8,1.9-0.8,2.9
                                        c0,0.7,0.1,1.3,0.3,1.8C639.6,3070.4,640.4,3070.3,641.2,3070.2z"/>
                                    <path fill="#FFFFFF" d="M644.6,3072.5c-0.4,0.6-0.7,1.3-1.2,1.8c1.5,0.7,3.1,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.8
                                        C647.6,3073.8,646,3073.2,644.6,3072.5z"/>
                                    <path fill="#FFFFFF" d="M648.9,3074.6c-0.4,0.6-0.8,1.2-1.2,1.8c0.9,0.6,1.5,1.3,1.8,2.1c0.7-0.2,1.5-0.4,2.2-0.7
                                        C651.3,3076.4,650.2,3075.4,648.9,3074.6z"/>
                                    <path fill="#FFFFFF" d="M652,3079.7c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.2-1.4,0.5-2.2,0.7c0.1,0.3,0.2,0.7,0.2,1.1
                                        c0,0.8-0.2,1.5-0.6,2.1c0.6,0.4,1.2,0.8,1.9,1.1C651.6,3082,652,3080.9,652,3079.7z"/>
                                    <path fill="#FFFFFF" d="M651,3082.9c-0.7-0.4-1.3-0.7-1.9-1.1c-0.6,0.9-1.7,1.6-2.9,1.8c0.2,0.7,0.3,1.4,0.4,2.1
                                        C648.6,3085.3,650.1,3084.3,651,3082.9z"/>
                                    <path fill="#FFFFFF" d="M646.2,3083.6c-0.3,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.4-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C646.5,3084.9,646.4,3084.2,646.2,3083.6z"/>
                                    <path fill="#FFFFFF" d="M639.4,3081.2l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.2-0.7,0.5-1.3,0.7-2
                                        C640.6,3082.5,639.4,3081.2,639.4,3081.2z"/>
                                    <path fill="#FFFFFF" d="M644.3,3085.9v2.8h1.8v-2.8C645.5,3085.9,644.9,3085.9,644.3,3085.9z"/>
                                    <path fill="#FFFFFF" d="M641.2,3070.2c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,2,2.7,3.1,4.7,4c0.5-0.6,0.8-1.2,1.2-1.8
                                        C643.2,3071.9,641.9,3071.2,641.2,3070.2z"/>
                                    <path fill="#FFFFFF" d="M643.7,3064.8c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.9c0.6,0.4,1.3,0.7,2,1
                                        C641.8,3065.8,642.6,3065.1,643.7,3064.8z"/>
                                </g>
                                {/*<g id="doll4">
                                    <path fill="#FFFFFF" d="M456.5,2925.7l0.9-1.5c0,0-0.8-0.9-2.4-1.4c-0.3,0.5-0.5,1-0.8,1.6
                                        C455.6,2924.9,456.5,2925.7,456.5,2925.7z"/>
                                    <path fill="#FFFFFF" d="M453,2920.1h-1.5v2.4c0.5,0,1,0,1.5,0V2920.1z"/>
                                    <path fill="#FFFFFF" d="M452.5,2924.2c0.6,0,1.2,0.1,1.7,0.3c0.3-0.6,0.5-1.1,0.8-1.6c-0.6-0.2-1.2-0.3-1.9-0.4v-0.1
                                        c-0.5,0-1,0-1.5,0v0.1c-0.2,0-0.5,0.1-0.7,0.1c0.1,0.6,0.1,1.1,0.2,1.7C451.5,2924.3,452,2924.2,452.5,2924.2z"/>
                                    <path fill="#FFFFFF" d="M449.1,2928.8c-0.3-0.4-0.5-0.9-0.5-1.5c0-0.5,0.2-1.1,0.5-1.5c-0.6-0.3-1.1-0.5-1.6-0.8
                                        c-0.4,0.7-0.7,1.5-0.7,2.4c0,0.6,0.1,1.1,0.3,1.5C447.7,2928.9,448.4,2928.9,449.1,2928.8z"/>
                                    <path fill="#FFFFFF" d="M451.8,2930.6c-0.3,0.5-0.6,1-1,1.5c1.2,0.6,2.5,1.1,3.5,1.7c0.3-0.5,0.7-1,1-1.5
                                        C454.3,2931.6,453,2931.2,451.8,2930.6z"/>
                                    <path fill="#FFFFFF" d="M455.3,2932.3c-0.3,0.5-0.7,1-1,1.5c0.7,0.5,1.2,1,1.5,1.7c0.6-0.2,1.2-0.3,1.8-0.5
                                        C457.2,2933.8,456.4,2933,455.3,2932.3z"/>
                                    <path fill="#FFFFFF" d="M457.8,2936.4c0-0.5-0.1-1-0.2-1.4c-0.6,0.2-1.2,0.4-1.8,0.5c0.1,0.3,0.2,0.6,0.2,0.9
                                        c0,0.6-0.2,1.2-0.5,1.7c0.5,0.3,1,0.6,1.5,0.9C457.5,2938.3,457.8,2937.4,457.8,2936.4z"/>
                                    <path fill="#FFFFFF" d="M457,2939.1c-0.5-0.3-1-0.6-1.5-0.9c-0.5,0.8-1.4,1.3-2.4,1.4c0.1,0.5,0.2,1.1,0.3,1.7
                                        C455.1,2941,456.3,2940.2,457,2939.1z"/>
                                    <path fill="#FFFFFF" d="M453.1,2939.6c-0.3,0-0.5,0.1-0.8,0.1c-0.8,0-1.4-0.1-2-0.3c-0.2,0.6-0.4,1.1-0.6,1.6
                                        c0.6,0.2,1.2,0.3,1.9,0.4v0.2c0.5,0,1,0,1.5,0v-0.2c0.1,0,0.3,0,0.4-0.1C453.4,2940.7,453.3,2940.2,453.1,2939.6z"/>
                                    <path fill="#FFFFFF" d="M447.6,2937.7l-1.1,1.4c0,0,1.1,1.3,3.2,1.9c0.2-0.5,0.4-1.1,0.6-1.6
                                        C448.6,2938.8,447.6,2937.7,447.6,2937.7z"/>
                                    <path fill="#FFFFFF" d="M451.6,2941.5v2.3h1.5v-2.3C452.5,2941.5,452,2941.5,451.6,2941.5z"/>
                                    <path fill="#FFFFFF" d="M449.1,2928.8c-0.7,0.1-1.4,0.1-2.1,0.1c0.6,1.6,2.2,2.5,3.8,3.2c0.4-0.5,0.7-1,1-1.5
                                        C450.7,2930.1,449.7,2929.6,449.1,2928.8z"/>
                                    <path fill="#FFFFFF" d="M451.1,2924.4c-0.1-0.6-0.1-1.2-0.2-1.7c-1.5,0.4-2.7,1.2-3.4,2.3c0.5,0.3,1.1,0.5,1.6,0.8
                                        C449.5,2925.2,450.2,2924.6,451.1,2924.4z"/>
                                </g>
                                <g id="doll3">
                                    <path fill="#FFFFFF" d="M330.9,2719l1.2-2.1c0,0-1.2-1.2-3.3-1.9c-0.4,0.7-0.7,1.4-1.1,2.2C329.6,2717.9,330.9,2719,330.9,2719z
                                        "/>
                                    <path fill="#FFFFFF" d="M326.1,2711.2h-2v3.2c0.7,0,1.4,0,2,0V2711.2z"/>
                                    <path fill="#FFFFFF" d="M325.3,2716.9c0.8,0,1.6,0.1,2.3,0.4c0.3-0.8,0.7-1.5,1.1-2.2c-0.8-0.3-1.7-0.4-2.7-0.5v-0.1
                                        c-0.7,0-1.3,0-2,0v0.2c-0.3,0-0.6,0.1-0.9,0.2c0.2,0.8,0.2,1.6,0.3,2.4C324,2717,324.7,2716.9,325.3,2716.9z"/>
                                    <path fill="#FFFFFF" d="M320.7,2723.2c-0.4-0.6-0.6-1.2-0.6-2c0-0.7,0.2-1.5,0.7-2.1c-0.8-0.3-1.5-0.7-2.3-1.1
                                        c-0.6,1-0.9,2.1-0.9,3.3c0,0.8,0.1,1.4,0.4,2.1C318.8,2723.4,319.7,2723.3,320.7,2723.2z"/>
                                    <path fill="#FFFFFF" d="M324.5,2725.8c-0.4,0.7-0.8,1.4-1.3,2c1.7,0.8,3.4,1.5,4.8,2.4c0.4-0.7,0.9-1.4,1.4-2.1
                                        C327.8,2727.2,326,2726.5,324.5,2725.8z"/>
                                    <path fill="#FFFFFF" d="M329.3,2728.1c-0.5,0.7-0.9,1.4-1.4,2.1c1,0.6,1.7,1.4,2.1,2.4c0.8-0.2,1.6-0.5,2.4-0.8
                                        C331.9,2730.1,330.7,2729,329.3,2728.1z"/>
                                    <path fill="#FFFFFF" d="M332.7,2733.8c0-0.7-0.1-1.4-0.3-2c-0.8,0.3-1.6,0.5-2.4,0.8c0.1,0.4,0.2,0.8,0.2,1.3
                                        c0,0.9-0.2,1.7-0.7,2.3c0.7,0.5,1.4,0.9,2.1,1.3C332.3,2736.4,332.7,2735.1,332.7,2733.8z"/>
                                    <path fill="#FFFFFF" d="M331.6,2737.4c-0.7-0.4-1.4-0.8-2.1-1.3c-0.7,1.1-1.9,1.7-3.3,2c0.2,0.8,0.3,1.5,0.4,2.3
                                        C328.9,2740.1,330.6,2739,331.6,2737.4z"/>
                                    <path fill="#FFFFFF" d="M326.3,2738.1c-0.4,0.1-0.7,0.1-1.1,0.1c-1,0-2-0.2-2.8-0.5c-0.2,0.8-0.6,1.5-0.8,2.3
                                        c0.8,0.2,1.6,0.4,2.6,0.5v0.2c0.7,0,1.3,0,2,0v-0.2c0.2,0,0.4,0,0.6-0.1C326.6,2739.6,326.5,2738.9,326.3,2738.1z"/>
                                    <path fill="#FFFFFF" d="M318.6,2735.5l-1.5,1.9c0,0,1.6,1.8,4.5,2.7c0.3-0.7,0.6-1.5,0.8-2.3
                                        C320,2737,318.6,2735.5,318.6,2735.5z"/>
                                    <path fill="#FFFFFF" d="M324.1,2740.7v3.1h2v-3.1C325.4,2740.7,324.8,2740.7,324.1,2740.7z"/>
                                    <path fill="#FFFFFF" d="M320.7,2723.2c-0.9,0.1-1.9,0.1-2.8,0.1c0.8,2.2,3,3.4,5.3,4.5c0.6-0.6,0.9-1.3,1.3-2
                                        C322.9,2725.1,321.5,2724.3,320.7,2723.2z"/>
                                    <path fill="#FFFFFF" d="M323.5,2717.1c-0.1-0.8-0.1-1.6-0.3-2.4c-2.1,0.5-3.8,1.7-4.7,3.2c0.7,0.4,1.5,0.8,2.3,1.1
                                        C321.3,2718.2,322.2,2717.5,323.5,2717.1z"/>
                                </g>*/}
                                <g id="doll2">
                                    <path fill="#FFFFFF" d="M360.9,3146.2l1.2-2c0,0-1.1-1.2-3.2-1.9c-0.3,0.7-0.7,1.4-1.1,2.1
                                        C359.7,3145,360.9,3146.2,360.9,3146.2z"/>
                                    <path fill="#FFFFFF" d="M356.3,3138.6h-2v3.2c0.6,0,1.3,0,2,0V3138.6z"/>
                                    <path fill="#FFFFFF" d="M355.6,3144.1c0.8,0,1.6,0.1,2.3,0.4c0.3-0.7,0.7-1.4,1.1-2.1c-0.7-0.2-1.6-0.4-2.6-0.5v-0.1
                                        c-0.6,0-1.3,0-2,0v0.2c-0.3,0-0.6,0.1-0.9,0.2c0.2,0.7,0.2,1.5,0.3,2.3C354.3,3144.2,354.9,3144.1,355.6,3144.1z"/>
                                    <path fill="#FFFFFF" d="M351,3150.3c-0.4-0.5-0.6-1.2-0.6-1.9s0.2-1.4,0.6-2.1c-0.7-0.3-1.5-0.7-2.2-1.1c-0.6,1-0.9,2-0.9,3.2
                                        c0,0.7,0.1,1.4,0.3,2C349.2,3150.4,350.1,3150.3,351,3150.3z"/>
                                    <path fill="#FFFFFF" d="M354.7,3152.7c-0.4,0.7-0.8,1.4-1.3,2c1.6,0.8,3.4,1.4,4.7,2.3c0.4-0.7,0.9-1.4,1.3-2
                                        C358,3154.1,356.3,3153.4,354.7,3152.7z"/>
                                    <path fill="#FFFFFF" d="M359.4,3155c-0.4,0.7-0.9,1.3-1.3,2c0.9,0.6,1.7,1.4,2,2.3c0.8-0.2,1.6-0.5,2.4-0.7
                                        C361.9,3157,360.8,3155.9,359.4,3155z"/>
                                    <path fill="#FFFFFF" d="M362.7,3160.5c0-0.7-0.1-1.3-0.3-1.9c-0.8,0.3-1.6,0.5-2.4,0.7c0.1,0.4,0.2,0.8,0.2,1.2
                                        c0,0.9-0.2,1.6-0.6,2.2c0.7,0.5,1.3,0.9,2,1.2C362.4,3163,362.7,3161.8,362.7,3160.5z"/>
                                    <path fill="#FFFFFF" d="M361.7,3164.1c-0.7-0.4-1.4-0.8-2-1.2c-0.7,1-1.8,1.7-3.2,1.9c0.2,0.7,0.3,1.5,0.4,2.2
                                        C359.1,3166.6,360.7,3165.6,361.7,3164.1z"/>
                                    <path fill="#FFFFFF" d="M356.5,3164.7c-0.3,0.1-0.7,0.1-1.1,0.1c-1,0-1.9-0.2-2.7-0.5c-0.2,0.8-0.6,1.5-0.8,2.2
                                        c0.7,0.2,1.6,0.4,2.5,0.5v0.2c0.7,0,1.3,0,2,0v-0.2c0.2,0,0.4,0,0.6-0.1C356.8,3166.2,356.7,3165.5,356.5,3164.7z"/>
                                    <path fill="#FFFFFF" d="M349,3162.2l-1.5,1.8c0,0,1.5,1.7,4.3,2.6c0.3-0.7,0.6-1.4,0.8-2.2C350.4,3163.6,349,3162.2,349,3162.2z
                                        "/>
                                    <path fill="#FFFFFF" d="M354.4,3167.3v3h2v-3C355.7,3167.3,355,3167.3,354.4,3167.3z"/>
                                    <path fill="#FFFFFF" d="M351,3150.3c-0.9,0.1-1.8,0.1-2.7,0.1c0.8,2.1,2.9,3.3,5.1,4.3c0.6-0.6,0.9-1.3,1.3-2
                                        C353.2,3152,351.8,3151.3,351,3150.3z"/>
                                    <path fill="#FFFFFF" d="M353.8,3144.3c-0.1-0.7-0.1-1.5-0.3-2.3c-2.1,0.5-3.7,1.6-4.6,3.1c0.7,0.4,1.4,0.7,2.2,1.1
                                        C351.6,3145.4,352.5,3144.7,353.8,3144.3z"/>
                                </g>
                                <g id="doll1">
                                    <path fill="#FFFFFF" d="M230,2914.4l0.9-1.5c0,0-0.8-0.8-2.3-1.3c-0.2,0.5-0.5,1-0.8,1.5C229.1,2913.6,230,2914.4,230,2914.4z"
                                        />
                                    <path fill="#FFFFFF" d="M226.6,2908.9h-1.4v2.3c0.5,0,1,0,1.4,0V2908.9z"/>
                                    <path fill="#FFFFFF" d="M226.1,2912.9c0.6,0,1.1,0.1,1.6,0.3c0.2-0.5,0.5-1,0.8-1.5c-0.5-0.2-1.2-0.3-1.9-0.3v-0.1
                                        c-0.5,0-0.9,0-1.4,0v0.1c-0.2,0-0.4,0.1-0.7,0.1c0.1,0.5,0.1,1.1,0.2,1.7C225.2,2913,225.6,2912.9,226.1,2912.9z"/>
                                    <path fill="#FFFFFF" d="M222.8,2917.4c-0.3-0.4-0.5-0.9-0.5-1.4s0.2-1,0.5-1.5c-0.5-0.2-1.1-0.5-1.6-0.8
                                        c-0.4,0.7-0.7,1.5-0.7,2.3c0,0.5,0.1,1,0.3,1.4C221.5,2917.5,222.1,2917.4,222.8,2917.4z"/>
                                    <path fill="#FFFFFF" d="M225.5,2919.2c-0.3,0.5-0.5,1-0.9,1.4c1.2,0.5,2.4,1,3.4,1.7c0.3-0.5,0.6-1,1-1.5
                                        C227.8,2920.1,226.6,2919.7,225.5,2919.2z"/>
                                    <path fill="#FFFFFF" d="M228.9,2920.8c-0.3,0.5-0.7,1-1,1.5c0.7,0.5,1.2,1,1.5,1.7c0.6-0.1,1.2-0.3,1.7-0.5
                                        C230.7,2922.3,229.9,2921.4,228.9,2920.8z"/>
                                    <path fill="#FFFFFF" d="M231.3,2924.8c0-0.5-0.1-1-0.2-1.4c-0.6,0.2-1.1,0.4-1.7,0.5c0.1,0.3,0.2,0.6,0.2,0.9
                                        c0,0.6-0.2,1.2-0.5,1.6c0.5,0.3,1,0.6,1.5,0.9C231,2926.6,231.3,2925.8,231.3,2924.8z"/>
                                    <path fill="#FFFFFF" d="M230.5,2927.4c-0.5-0.3-1-0.6-1.5-0.9c-0.5,0.7-1.3,1.2-2.3,1.4c0.1,0.5,0.2,1.1,0.3,1.6
                                        C228.6,2929.3,229.8,2928.5,230.5,2927.4z"/>
                                    <path fill="#FFFFFF" d="M226.7,2927.9c-0.3,0-0.5,0.1-0.8,0.1c-0.7,0-1.4-0.1-2-0.3c-0.2,0.6-0.4,1.1-0.6,1.6
                                        c0.5,0.2,1.1,0.3,1.8,0.3v0.2c0.5,0,0.9,0,1.4,0v-0.2c0.1,0,0.3,0,0.4-0.1C227,2929,226.9,2928.4,226.7,2927.9z"/>
                                    <path fill="#FFFFFF" d="M221.3,2926l-1.1,1.3c0,0,1.1,1.2,3.2,1.9c0.2-0.5,0.4-1,0.6-1.6C222.3,2927.1,221.3,2926,221.3,2926z"
                                        />
                                    <path fill="#FFFFFF" d="M225.2,2929.7v2.2h1.4v-2.2C226.2,2929.7,225.7,2929.7,225.2,2929.7z"/>
                                    <path fill="#FFFFFF" d="M222.8,2917.4c-0.7,0.1-1.3,0.1-2,0.1c0.6,1.5,2.1,2.4,3.7,3.2c0.4-0.4,0.7-0.9,0.9-1.4
                                        C224.3,2918.7,223.4,2918.1,222.8,2917.4z"/>
                                    <path fill="#FFFFFF" d="M224.8,2913.1c-0.1-0.5-0.1-1.1-0.2-1.7c-1.5,0.3-2.7,1.2-3.3,2.3c0.5,0.3,1,0.5,1.6,0.8
                                        C223.2,2913.8,223.9,2913.3,224.8,2913.1z"/>
                                </g>
                            </g>
                            <g id="dollars4">
                                <g id="d9">
                                    <path fill="#FFFFFF" d="M405.7,2454.7l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C404.6,2453.7,405.7,2454.7,405.7,2454.7z"/>
                                    <path fill="#FFFFFF" d="M401.5,2447.8h-1.8v2.8c0.6,0,1.2,0,1.8,0V2447.8z"/>
                                    <path fill="#FFFFFF" d="M400.8,2452.8c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C399.6,2452.9,400.2,2452.8,400.8,2452.8z"/>
                                    <path fill="#FFFFFF" d="M396.7,2458.4c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C395,2458.6,395.8,2458.5,396.7,2458.4z"/>
                                    <path fill="#FFFFFF" d="M400.1,2460.7c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C403,2461.9,401.4,2461.3,400.1,2460.7z"/>
                                    <path fill="#FFFFFF" d="M404.3,2462.7c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C406.6,2464.5,405.6,2463.5,404.3,2462.7z"/>
                                    <path fill="#FFFFFF" d="M407.3,2467.8c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C407,2470.1,407.3,2468.9,407.3,2467.8z"/>
                                    <path fill="#FFFFFF" d="M406.4,2471c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C404,2473.4,405.5,2472.4,406.4,2471z"/>
                                    <path fill="#FFFFFF" d="M401.7,2471.6c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C401.9,2472.9,401.8,2472.3,401.7,2471.6z"/>
                                    <path fill="#FFFFFF" d="M394.8,2469.3l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C396.1,2470.6,394.8,2469.3,394.8,2469.3z"/>
                                    <path fill="#FFFFFF" d="M399.7,2473.9v2.7h1.8v-2.7C400.9,2473.9,400.3,2473.9,399.7,2473.9z"/>
                                    <path fill="#FFFFFF" d="M396.7,2458.4c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C398.6,2460.1,397.4,2459.4,396.7,2458.4z"/>
                                    <path fill="#FFFFFF" d="M399.2,2453c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C397.2,2454,398,2453.3,399.2,2453z"/>
                                </g>
                                <g id="d8">
                                    <path fill="#FFFFFF" d="M1484.4,2608.9l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C1483.2,2607.9,1484.4,2608.9,1484.4,2608.9z"/>
                                    <path fill="#FFFFFF" d="M1480.1,2602h-1.8v2.8c0.6,0,1.2,0,1.8,0V2602z"/>
                                    <path fill="#FFFFFF" d="M1479.4,2607c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C1478.2,2607.1,1478.9,2607,1479.4,2607z"/>
                                    <path fill="#FFFFFF" d="M1475.3,2612.6c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C1473.6,2612.8,1474.4,2612.7,1475.3,2612.6z"/>
                                    <path fill="#FFFFFF" d="M1478.7,2614.9c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C1481.6,2616.1,1480,2615.5,1478.7,2614.9z"/>
                                    <path fill="#FFFFFF" d="M1482.9,2616.9c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C1485.3,2618.7,1484.2,2617.7,1482.9,2616.9z"/>
                                    <path fill="#FFFFFF" d="M1486,2622c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C1485.6,2624.3,1486,2623.1,1486,2622z"/>
                                    <path fill="#FFFFFF" d="M1485,2625.2c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C1482.6,2627.6,1484.1,2626.6,1485,2625.2z"/>
                                    <path fill="#FFFFFF" d="M1480.3,2625.8c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C1480.6,2627.1,1480.5,2626.5,1480.3,2625.8z"/>
                                    <path fill="#FFFFFF" d="M1473.5,2623.5l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C1474.7,2624.8,1473.5,2623.5,1473.5,2623.5z"/>
                                    <path fill="#FFFFFF" d="M1478.3,2628.1v2.7h1.8v-2.7C1479.5,2628.1,1479,2628.1,1478.3,2628.1z"/>
                                    <path fill="#FFFFFF" d="M1475.3,2612.6c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C1477.3,2614.3,1476,2613.6,1475.3,2612.6z"/>
                                    <path fill="#FFFFFF" d="M1477.8,2607.2c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C1475.9,2608.2,1476.7,2607.5,1477.8,2607.2z"/>
                                </g>
                                <g id="d7">
                                    <path fill="#FFFFFF" d="M760.9,2399.9l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C759.8,2398.9,760.9,2399.9,760.9,2399.9z"/>
                                    <path fill="#FFFFFF" d="M756.7,2393h-1.8v2.8c0.6,0,1.2,0,1.8,0V2393z"/>
                                    <path fill="#FFFFFF" d="M756,2398c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1c-0.6,0-1.2,0-1.8,0
                                        v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C754.8,2398.1,755.4,2398,756,2398z"/>
                                    <path fill="#FFFFFF" d="M751.9,2403.6c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C750.2,2403.8,751,2403.7,751.9,2403.6z"/>
                                    <path fill="#FFFFFF" d="M755.3,2405.9c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C758.2,2407.1,756.6,2406.5,755.3,2405.9z"/>
                                    <path fill="#FFFFFF" d="M759.5,2407.9c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C761.8,2409.7,760.8,2408.7,759.5,2407.9z"/>
                                    <path fill="#FFFFFF" d="M762.5,2413c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C762.2,2415.3,762.5,2414.1,762.5,2413z"/>
                                    <path fill="#FFFFFF" d="M761.6,2416.2c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C759.2,2418.6,760.7,2417.6,761.6,2416.2z"/>
                                    <path fill="#FFFFFF" d="M756.9,2416.8c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C757.1,2418.1,757,2417.5,756.9,2416.8z"/>
                                    <path fill="#FFFFFF" d="M750,2414.5l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2C751.3,2415.8,750,2414.5,750,2414.5z"/>
                                    <path fill="#FFFFFF" d="M754.9,2419.1v2.7h1.8v-2.7C756.1,2419.1,755.5,2419.1,754.9,2419.1z"/>
                                    <path fill="#FFFFFF" d="M751.9,2403.6c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C753.8,2405.3,752.6,2404.6,751.9,2403.6z"/>
                                    <path fill="#FFFFFF" d="M754.4,2398.2c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C752.4,2399.2,753.2,2398.5,754.4,2398.2z"/>
                                </g>
                                <g id="d6">
                                    <path fill="#FFFFFF" d="M197.9,1912.2l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C196.8,1911.2,197.9,1912.2,197.9,1912.2z"/>
                                    <path fill="#FFFFFF" d="M193.7,1905.3h-1.8v2.8c0.6,0,1.2,0,1.8,0V1905.3z"/>
                                    <path fill="#FFFFFF" d="M192.9,1910.3c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-2c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C191.8,1910.4,192.4,1910.3,192.9,1910.3z"/>
                                    <path fill="#FFFFFF" d="M188.9,1915.9c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C187.2,1916.1,188,1916,188.9,1915.9z"/>
                                    <path fill="#FFFFFF" d="M192.2,1918.2c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C195.2,1919.4,193.6,1918.8,192.2,1918.2z"/>
                                    <path fill="#FFFFFF" d="M196.5,1920.2c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C198.8,1922,197.7,1921,196.5,1920.2z"/>
                                    <path fill="#FFFFFF" d="M199.5,1925.3c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C199.2,1927.6,199.5,1926.4,199.5,1925.3z"/>
                                    <path fill="#FFFFFF" d="M198.5,1928.5c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C196.1,1930.9,197.6,1929.9,198.5,1928.5z"/>
                                    <path fill="#FFFFFF" d="M193.8,1929.1c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C194.1,1930.4,194,1929.8,193.8,1929.1z"/>
                                    <path fill="#FFFFFF" d="M187,1926.8l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2C188.2,1928.1,187,1926.8,187,1926.8z"/>
                                    <path fill="#FFFFFF" d="M191.9,1931.4v2.7h1.8v-2.7C193,1931.4,192.5,1931.4,191.9,1931.4z"/>
                                    <path fill="#FFFFFF" d="M188.9,1915.9c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,2,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C190.8,1917.6,189.6,1916.9,188.9,1915.9z"/>
                                    <path fill="#FFFFFF" d="M191.4,1910.5c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C189.4,1911.5,190.2,1910.8,191.4,1910.5z"/>
                                </g>
                                <g id="d5">
                                    <path fill="#FFFFFF" d="M1205.5,2473.2l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C1204.4,2472.2,1205.5,2473.2,1205.5,2473.2z"/>
                                    <path fill="#FFFFFF" d="M1201.3,2466.3h-1.8v2.8c0.6,0,1.2,0,1.8,0V2466.3z"/>
                                    <path fill="#FFFFFF" d="M1200.6,2471.3c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C1199.4,2471.4,1200,2471.3,1200.6,2471.3z"/>
                                    <path fill="#FFFFFF" d="M1196.5,2476.9c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C1194.8,2477.1,1195.6,2477,1196.5,2476.9z"/>
                                    <path fill="#FFFFFF" d="M1199.8,2479.2c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C1202.8,2480.4,1201.2,2479.8,1199.8,2479.2z"/>
                                    <path fill="#FFFFFF" d="M1204.1,2481.2c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C1206.4,2483,1205.3,2482,1204.1,2481.2z"/>
                                    <path fill="#FFFFFF" d="M1207.1,2486.3c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C1206.8,2488.6,1207.1,2487.4,1207.1,2486.3z"/>
                                    <path fill="#FFFFFF" d="M1206.1,2489.5c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C1203.7,2491.9,1205.3,2490.9,1206.1,2489.5z"/>
                                    <path fill="#FFFFFF" d="M1201.4,2490.1c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C1201.7,2491.4,1201.6,2490.8,1201.4,2490.1z"/>
                                    <path fill="#FFFFFF" d="M1194.6,2487.8l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C1195.9,2489.1,1194.6,2487.8,1194.6,2487.8z"/>
                                    <path fill="#FFFFFF" d="M1199.5,2492.4v2.7h1.8v-2.7C1200.6,2492.4,1200.1,2492.4,1199.5,2492.4z"/>
                                    <path fill="#FFFFFF" d="M1196.5,2476.9c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C1198.4,2478.6,1197.2,2477.9,1196.5,2476.9z"/>
                                    <path fill="#FFFFFF" d="M1199,2471.5c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C1197,2472.5,1197.8,2471.8,1199,2471.5z"/>
                                </g>
                                <g id="d4">
                                    <path fill="#FFFFFF" d="M494.1,1650.4l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C492.9,1649.4,494.1,1650.4,494.1,1650.4z"/>
                                    <path fill="#FFFFFF" d="M489.8,1643.5H488v2.8c0.6,0,1.2,0,1.8,0V1643.5z"/>
                                    <path fill="#FFFFFF" d="M489.1,1648.6c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-2c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C488,1648.6,488.6,1648.6,489.1,1648.6z"/>
                                    <path fill="#FFFFFF" d="M485,1654.1c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C483.3,1654.3,484.1,1654.2,485,1654.1z"/>
                                    <path fill="#FFFFFF" d="M488.4,1656.4c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C491.3,1657.7,489.7,1657.1,488.4,1656.4z"/>
                                    <path fill="#FFFFFF" d="M492.7,1658.5c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C495,1660.3,493.9,1659.3,492.7,1658.5z"/>
                                    <path fill="#FFFFFF" d="M495.7,1663.5c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C495.3,1665.8,495.7,1664.7,495.7,1663.5z"/>
                                    <path fill="#FFFFFF" d="M494.7,1666.7c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C492.3,1669.1,493.8,1668.1,494.7,1666.7z"/>
                                    <path fill="#FFFFFF" d="M490,1667.3c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C490.3,1668.7,490.2,1668.1,490,1667.3z"/>
                                    <path fill="#FFFFFF" d="M483.2,1665l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2C484.4,1666.4,483.2,1665,483.2,1665z"/>
                                    <path fill="#FFFFFF" d="M488,1669.6v2.7h1.8v-2.7C489.2,1669.6,488.7,1669.6,488,1669.6z"/>
                                    <path fill="#FFFFFF" d="M485,1654.1c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,2,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C487,1655.8,485.7,1655.1,485,1654.1z"/>
                                    <path fill="#FFFFFF" d="M487.5,1648.7c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C485.6,1649.7,486.4,1649.1,487.5,1648.7z"/>
                                </g>
                                <g id="d3">
                                    <path fill="#FFFFFF" d="M1584.2,2292.2l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C1583.1,2291.3,1584.2,2292.2,1584.2,2292.2z"/>
                                    <path fill="#FFFFFF" d="M1580,2285.3h-1.8v2.8c0.6,0,1.2,0,1.8,0V2285.3z"/>
                                    <path fill="#FFFFFF" d="M1579.3,2290.4c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C1578.1,2290.5,1578.7,2290.4,1579.3,2290.4z"/>
                                    <path fill="#FFFFFF" d="M1575.2,2296c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C1573.5,2296.1,1574.3,2296,1575.2,2296z"/>
                                    <path fill="#FFFFFF" d="M1578.5,2298.3c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C1581.5,2299.5,1579.9,2298.9,1578.5,2298.3z"/>
                                    <path fill="#FFFFFF" d="M1582.8,2300.3c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C1585.1,2302.1,1584,2301.1,1582.8,2300.3z"/>
                                    <path fill="#FFFFFF" d="M1585.8,2305.4c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C1585.5,2307.7,1585.8,2306.5,1585.8,2305.4z"/>
                                    <path fill="#FFFFFF" d="M1584.8,2308.5c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C1582.4,2310.9,1584,2310,1584.8,2308.5z"/>
                                    <path fill="#FFFFFF" d="M1580.1,2309.2c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C1580.4,2310.5,1580.3,2309.9,1580.1,2309.2z"/>
                                    <path fill="#FFFFFF" d="M1573.3,2306.9l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C1574.6,2308.2,1573.3,2306.9,1573.3,2306.9z"/>
                                    <path fill="#FFFFFF" d="M1578.2,2311.5v2.7h1.8v-2.7C1579.3,2311.5,1578.8,2311.5,1578.2,2311.5z"/>
                                    <path fill="#FFFFFF" d="M1575.2,2296c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C1577.1,2297.6,1575.9,2296.9,1575.2,2296z"/>
                                    <path fill="#FFFFFF" d="M1577.7,2290.5c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C1575.7,2291.5,1576.5,2290.9,1577.7,2290.5z"/>
                                </g>
                                <g id="d2">
                                    <path fill="#FFFFFF" d="M736.4,2085.5l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2
                                        C735.3,2084.5,736.4,2085.5,736.4,2085.5z"/>
                                    <path fill="#FFFFFF" d="M732.1,2078.6h-1.8v2.8c0.6,0,1.2,0,1.8,0V2078.6z"/>
                                    <path fill="#FFFFFF" d="M731.4,2083.6c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-1.9c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C730.3,2083.7,730.9,2083.6,731.4,2083.6z"/>
                                    <path fill="#FFFFFF" d="M727.4,2089.2c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C725.7,2089.4,726.5,2089.3,727.4,2089.2z"/>
                                    <path fill="#FFFFFF" d="M730.7,2091.5c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C733.7,2092.7,732.1,2092.1,730.7,2091.5z"/>
                                    <path fill="#FFFFFF" d="M735,2093.5c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C737.3,2095.3,736.2,2094.3,735,2093.5z"/>
                                    <path fill="#FFFFFF" d="M738,2098.6c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C737.6,2100.9,738,2099.7,738,2098.6z"/>
                                    <path fill="#FFFFFF" d="M737,2101.8c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C734.6,2104.2,736.1,2103.2,737,2101.8z"/>
                                    <path fill="#FFFFFF" d="M732.3,2102.4c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C732.6,2103.7,732.5,2103.1,732.3,2102.4z"/>
                                    <path fill="#FFFFFF" d="M725.5,2100.1l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C726.7,2101.4,725.5,2100.1,725.5,2100.1z"/>
                                    <path fill="#FFFFFF" d="M730.4,2104.7v2.7h1.8v-2.7C731.5,2104.7,731,2104.7,730.4,2104.7z"/>
                                    <path fill="#FFFFFF" d="M727.4,2089.2c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,1.9,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C729.3,2090.9,728.1,2090.2,727.4,2089.2z"/>
                                    <path fill="#FFFFFF" d="M729.8,2083.8c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C727.9,2084.8,728.7,2084.1,729.8,2083.8z"/>
                                </g>
                                <g id="d1">
                                    <path fill="#FFFFFF" d="M1345.5,1878l1.1-1.9c0,0-1.1-1.1-2.9-1.7c-0.4,0.6-0.6,1.2-1,2C1344.4,1877,1345.5,1878,1345.5,1878z"
                                        />
                                    <path fill="#FFFFFF" d="M1341.3,1871.1h-1.8v2.8c0.6,0,1.2,0,1.8,0V1871.1z"/>
                                    <path fill="#FFFFFF" d="M1340.6,1876.1c0.7,0,1.4,0.1,2,0.4c0.3-0.7,0.6-1.3,1-2c-0.7-0.3-1.5-0.4-2.4-0.4v-0.1
                                        c-0.6,0-1.2,0-1.8,0v0.2c-0.3,0-0.5,0.1-0.8,0.2c0.2,0.7,0.2,1.4,0.3,2.1C1339.4,1876.2,1340,1876.1,1340.6,1876.1z"/>
                                    <path fill="#FFFFFF" d="M1336.5,1881.7c-0.4-0.5-0.5-1.1-0.5-1.8c0-0.6,0.2-1.3,0.6-1.9c-0.7-0.3-1.3-0.6-2-1
                                        c-0.5,0.9-0.8,1.9-0.8,2.9c0,0.7,0.1,1.2,0.4,1.9C1334.8,1881.9,1335.6,1881.8,1336.5,1881.7z"/>
                                    <path fill="#FFFFFF" d="M1339.9,1884c-0.4,0.6-0.7,1.2-1.2,1.8c1.5,0.7,3,1.3,4.3,2.1c0.4-0.6,0.8-1.2,1.2-1.9
                                        C1342.8,1885.2,1341.2,1884.6,1339.9,1884z"/>
                                    <path fill="#FFFFFF" d="M1344.1,1886c-0.4,0.6-0.8,1.2-1.2,1.9c0.9,0.5,1.5,1.2,1.9,2.1c0.7-0.2,1.4-0.4,2.1-0.7
                                        C1346.4,1887.8,1345.4,1886.8,1344.1,1886z"/>
                                    <path fill="#FFFFFF" d="M1347.1,1891.1c0-0.6-0.1-1.2-0.3-1.8c-0.7,0.3-1.4,0.4-2.1,0.7c0.1,0.4,0.2,0.7,0.2,1.2
                                        c0,0.8-0.2,1.5-0.6,2c0.6,0.4,1.2,0.8,1.9,1.2C1346.8,1893.4,1347.1,1892.2,1347.1,1891.1z"/>
                                    <path fill="#FFFFFF" d="M1346.2,1894.3c-0.6-0.4-1.2-0.7-1.9-1.2c-0.6,1-1.7,1.5-2.9,1.8c0.2,0.7,0.3,1.3,0.4,2
                                        C1343.8,1896.7,1345.3,1895.7,1346.2,1894.3z"/>
                                    <path fill="#FFFFFF" d="M1341.5,1894.9c-0.4,0.1-0.6,0.1-1,0.1c-0.9,0-1.8-0.2-2.5-0.4c-0.2,0.7-0.5,1.3-0.7,2
                                        c0.7,0.2,1.4,0.4,2.3,0.4v0.2c0.6,0,1.2,0,1.8,0v-0.2c0.2,0,0.4,0,0.5-0.1C1341.7,1896.2,1341.6,1895.6,1341.5,1894.9z"/>
                                    <path fill="#FFFFFF" d="M1334.6,1892.6l-1.3,1.7c0,0,1.4,1.6,4,2.4c0.3-0.6,0.5-1.3,0.7-2
                                        C1335.9,1893.9,1334.6,1892.6,1334.6,1892.6z"/>
                                    <path fill="#FFFFFF" d="M1339.5,1897.2v2.7h1.8v-2.7C1340.7,1897.2,1340.1,1897.2,1339.5,1897.2z"/>
                                    <path fill="#FFFFFF" d="M1336.5,1881.7c-0.8,0.1-1.7,0.1-2.5,0.1c0.7,2,2.7,3,4.7,4c0.5-0.5,0.8-1.2,1.2-1.8
                                        C1338.4,1883.4,1337.2,1882.7,1336.5,1881.7z"/>
                                    <path fill="#FFFFFF" d="M1339,1876.3c-0.1-0.7-0.1-1.4-0.3-2.1c-1.9,0.4-3.4,1.5-4.2,2.8c0.6,0.4,1.3,0.7,2,1
                                        C1337,1877.3,1337.8,1876.6,1339,1876.3z"/>
                                </g>
                            </g>
                            <g id="dollars3">
                                <path fill="#FFFFFF" d="M1453.8,1916.6c0,0,0.9,0.9,2.1,0.9c0.9,0,1.6-0.5,1.6-1.4c0-2-4.1-1.6-4.1-4.1c0-1.1,0.9-2,2.1-2.2v-1.1
                                    h0.7v1.1c1.3,0.1,1.9,0.8,1.9,0.8l-0.4,0.7c0,0-0.7-0.7-1.8-0.7c-1.1,0-1.7,0.7-1.7,1.4c0,1.9,4.1,1.4,4.1,4.1
                                    c0,1.1-0.8,2.1-2.1,2.2v1.1h-0.7v-1.1c-1.5-0.1-2.3-1-2.3-1L1453.8,1916.6z"/>
                                <path fill="#FFFFFF" d="M1240.5,2376.8c0,0,1.8,1.9,4.5,1.9c1.9,0,3.5-1.1,3.5-3c0-4.2-8.7-3.4-8.7-8.6c0-2.3,1.8-4.2,4.5-4.6
                                    v-2.3h1.4v2.3c2.7,0.1,4.1,1.7,4.1,1.7l-0.8,1.4c0,0-1.6-1.5-3.8-1.5c-2.2,0-3.7,1.5-3.7,3c0,4,8.7,3,8.7,8.6
                                    c0,2.4-1.7,4.4-4.5,4.6v2.3h-1.4v-2.3c-3.1-0.2-4.8-2.2-4.8-2.2L1240.5,2376.8z"/>
                                <path fill="#FFFFFF" d="M787.3,2533.4c0,0,1.4,1.5,3.6,1.5c1.5,0,2.8-0.9,2.8-2.4c0-3.4-7-2.7-7-6.9c0-1.8,1.4-3.4,3.6-3.7v-1.9
                                    h1.1v1.8c2.1,0.1,3.3,1.3,3.3,1.3l-0.7,1.1c0,0-1.2-1.2-3-1.2s-2.9,1.2-2.9,2.4c0,3.2,7,2.4,7,6.9c0,1.9-1.4,3.5-3.6,3.7v1.8
                                    h-1.1v-1.8c-2.5-0.2-3.9-1.7-3.9-1.7L787.3,2533.4z"/>
                                <path fill="#FFFFFF" d="M552.5,2206.9c0,0,0.8,0.9,2,0.9c0.9,0,1.6-0.5,1.6-1.4c0-1.9-3.9-1.5-3.9-3.9c0-1,0.8-1.9,2-2.1v-1.1
                                    h0.6v1c1.2,0.1,1.9,0.7,1.9,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.7-1.6,1.3c0,1.8,3.9,1.4,3.9,3.9c0,1.1-0.8,2-2,2.1v1h-0.6
                                    v-1c-1.4-0.1-2.2-1-2.2-1L552.5,2206.9z"/>
                                <path fill="#FFFFFF" d="M320.7,1890.7c0,0,1.7,1.8,4.3,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4-8.3-3.2-8.3-8.2c0-2.2,1.7-4,4.3-4.4v-2.2
                                    h1.3v2.2c2.5,0.1,3.9,1.6,3.9,1.6l-0.8,1.4c0,0-1.5-1.4-3.6-1.4s-3.5,1.4-3.5,2.8c0,3.8,8.3,2.9,8.3,8.2c0,2.3-1.6,4.2-4.3,4.4
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L320.7,1890.7z"/>
                                <path fill="#FFFFFF" d="M271,2135.4c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.9-3.8-1.5-3.8-3.8c0-1,0.8-1.9,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.8c0,1.1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-1-2.1-1L271,2135.4z"/>
                                <path fill="#FFFFFF" d="M239.9,2418.8c0,0,1.2,1.3,3.1,1.3c1.3,0,2.4-0.8,2.4-2.1c0-2.9-6-2.3-6-5.9c0-1.6,1.2-2.9,3.1-3.1v-1.6
                                    h0.9v1.6c1.8,0.1,2.8,1.1,2.8,1.1l-0.6,1c0,0-1.1-1-2.6-1s-2.5,1-2.5,2c0,2.7,6,2.1,6,5.9c0,1.6-1.2,3-3.1,3.2v1.6h-0.9v-1.6
                                    c-2.1-0.2-3.3-1.5-3.3-1.5L239.9,2418.8z"/>
                                <path fill="#FFFFFF" d="M95.3,1797.3c0,0,0.9,1,2.3,1c1,0,1.8-0.6,1.8-1.5c0-2.2-4.5-1.7-4.5-4.4c0-1.2,0.9-2.2,2.3-2.4v-1.2H98
                                    v1.2c1.4,0.1,2.1,0.8,2.1,0.8l-0.4,0.7c0,0-0.8-0.8-1.9-0.8s-1.9,0.7-1.9,1.5c0,2,4.5,1.6,4.5,4.4c0,1.2-0.9,2.2-2.3,2.4v1.2
                                    h-0.7v-1.2c-1.6-0.1-2.5-1.1-2.5-1.1L95.3,1797.3z"/>
                                <path fill="#FFFFFF" d="M1570.3,2088c0,0,1.6,1.7,4,1.7c1.7,0,3.1-1,3.1-2.7c0-3.7-7.7-3-7.7-7.6c0-2,1.6-3.8,4-4.1v-2.1h1.2v2
                                    c2.4,0.1,3.6,1.5,3.6,1.5l-0.7,1.3c0,0-1.4-1.3-3.4-1.3s-3.2,1.3-3.2,2.6c0,3.5,7.7,2.7,7.7,7.6c0,2.1-1.5,3.9-4,4.1v2h-1.2v-2
                                    c-2.8-0.2-4.3-1.9-4.3-1.9L1570.3,2088z"/>
                                <path fill="#FFFFFF" d="M1108.3,1774.7c0,0,1.5,1.6,3.9,1.6c1.6,0,2.9-1,2.9-2.6c0-3.6-7.4-2.9-7.4-7.3c0-1.9,1.5-3.6,3.9-3.9v-2
                                    h1.2v1.9c2.3,0.1,3.5,1.4,3.5,1.4l-0.7,1.2c0,0-1.3-1.3-3.2-1.3c-1.9,0-3.1,1.2-3.1,2.5c0,3.4,7.4,2.6,7.4,7.3
                                    c0,2-1.4,3.7-3.9,3.9v1.9h-1.2v-1.9c-2.7-0.2-4.1-1.8-4.1-1.8L1108.3,1774.7z"/>
                                <path fill="#FFFFFF" d="M1533.7,2459.7c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.8-3.8-1.5-3.8-3.7c0-1,0.8-1.8,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.6-1.6-0.6c-1,0-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.7c0,1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-0.9-2.1-0.9L1533.7,2459.7z"/>
                                <path fill="#FFFFFF" d="M1695.2,1837.7c0,0,1.7,1.8,4.4,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4.1-8.4-3.2-8.4-8.3c0-2.2,1.7-4.1,4.4-4.4
                                    v-2.3h1.3v2.2c2.6,0.1,4,1.6,4,1.6l-0.8,1.4c0,0-1.5-1.4-3.7-1.4s-3.5,1.4-3.5,2.9c0,3.8,8.4,2.9,8.4,8.3c0,2.3-1.6,4.2-4.4,4.5
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L1695.2,1837.7z"/>
                                <path fill="#FFFFFF" d="M952.2,2014.7c0,0,0.9,0.9,2.1,0.9c0.9,0,1.6-0.5,1.6-1.4c0-2-4.1-1.6-4.1-4.1c0-1.1,0.9-2,2.1-2.2v-1.1
                                    h0.7v1.1c1.3,0.1,1.9,0.8,1.9,0.8l-0.4,0.7c0,0-0.7-0.7-1.8-0.7s-1.7,0.7-1.7,1.4c0,1.9,4.1,1.4,4.1,4.1c0,1.1-0.8,2.1-2.1,2.2
                                    v1.1H954v-1.1c-1.5-0.1-2.3-1-2.3-1L952.2,2014.7z"/>
                                <path fill="#FFFFFF" d="M739,2474.9c0,0,1.8,1.9,4.5,1.9c1.9,0,3.5-1.1,3.5-3c0-4.2-8.7-3.4-8.7-8.6c0-2.3,1.8-4.2,4.5-4.6v-2.3
                                    h1.4v2.3c2.7,0.1,4.1,1.7,4.1,1.7l-0.8,1.4c0,0-1.6-1.5-3.8-1.5s-3.7,1.5-3.7,3c0,4,8.7,3,8.7,8.6c0,2.4-1.7,4.4-4.5,4.6v2.3
                                    h-1.4v-2.3c-3.1-0.2-4.8-2.2-4.8-2.2L739,2474.9z"/>
                                <path fill="#FFFFFF" d="M1068.7,2186.1c0,0,1.6,1.7,4,1.7c1.7,0,3.1-1,3.1-2.7c0-3.7-7.7-3-7.7-7.6c0-2,1.6-3.8,4-4.1v-2.1h1.2v2
                                    c2.4,0.1,3.6,1.5,3.6,1.5l-0.7,1.3c0,0-1.4-1.3-3.4-1.3s-3.2,1.3-3.2,2.6c0,3.5,7.7,2.7,7.7,7.6c0,2.1-1.5,3.9-4,4.1v2h-1.2v-2
                                    c-2.8-0.2-4.3-1.9-4.3-1.9L1068.7,2186.1z"/>
                                <path fill="#FFFFFF" d="M606.8,1872.8c0,0,1.5,1.6,3.9,1.6c1.6,0,2.9-1,2.9-2.6c0-3.6-7.4-2.9-7.4-7.3c0-1.9,1.5-3.6,3.9-3.9v-2
                                    h1.2v2c2.3,0.1,3.5,1.4,3.5,1.4l-0.7,1.2c0,0-1.3-1.3-3.2-1.3s-3.1,1.2-3.1,2.5c0,3.4,7.4,2.6,7.4,7.3c0,2-1.4,3.7-3.9,3.9v2H610
                                    v-2c-2.7-0.2-4.1-1.8-4.1-1.8L606.8,1872.8z"/>
                                <path fill="#FFFFFF" d="M1032.1,2557.8c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.8-3.8-1.5-3.8-3.7c0-1,0.8-1.8,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.6-1.6-0.6s-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.7c0,1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-0.9-2.1-0.9L1032.1,2557.8z"/>
                                <path fill="#FFFFFF" d="M1193.7,1935.8c0,0,1.7,1.8,4.4,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4.1-8.4-3.2-8.4-8.3c0-2.2,1.7-4.1,4.4-4.4
                                    v-2.3h1.3v2.2c2.6,0.1,4,1.6,4,1.6l-0.8,1.4c0,0-1.5-1.4-3.7-1.4s-3.5,1.4-3.5,2.9c0,3.8,8.4,2.9,8.4,8.3c0,2.3-1.6,4.2-4.4,4.5
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L1193.7,1935.8z"/>
                            </g>
                            <g id="dollars2">
                                <path fill="#FFFFFF" d="M1453.8,1073.2c0,0,0.9,0.9,2.1,0.9c0.9,0,1.6-0.5,1.6-1.4c0-2-4.1-1.6-4.1-4.1c0-1.1,0.9-2,2.1-2.2v-1.1
                                    h0.7v1.1c1.3,0.1,1.9,0.8,1.9,0.8l-0.4,0.7c0,0-0.7-0.7-1.8-0.7c-1.1,0-1.7,0.7-1.7,1.4c0,1.9,4.1,1.4,4.1,4.1
                                    c0,1.1-0.8,2.1-2.1,2.2v1.1h-0.7v-1.1c-1.5-0.1-2.3-1-2.3-1L1453.8,1073.2z"/>
                                <path fill="#FFFFFF" d="M1240.5,1533.4c0,0,1.8,1.9,4.5,1.9c1.9,0,3.5-1.1,3.5-3c0-4.2-8.7-3.4-8.7-8.6c0-2.3,1.8-4.2,4.5-4.6
                                    v-2.3h1.4v2.3c2.7,0.1,4.1,1.7,4.1,1.7l-0.8,1.4c0,0-1.6-1.5-3.8-1.5c-2.2,0-3.7,1.5-3.7,3c0,4,8.7,3,8.7,8.6
                                    c0,2.4-1.7,4.4-4.5,4.6v2.3h-1.4v-2.3c-3.1-0.2-4.8-2.2-4.8-2.2L1240.5,1533.4z"/>
                                <path fill="#FFFFFF" d="M787.3,1690c0,0,1.4,1.5,3.6,1.5c1.5,0,2.8-0.9,2.8-2.4c0-3.4-7-2.7-7-6.9c0-1.8,1.4-3.4,3.6-3.7v-1.9
                                    h1.1v1.8c2.1,0.1,3.3,1.3,3.3,1.3l-0.7,1.1c0,0-1.2-1.2-3-1.2s-2.9,1.2-2.9,2.4c0,3.2,7,2.4,7,6.9c0,1.9-1.4,3.5-3.6,3.7v1.8
                                    h-1.1v-1.8c-2.5-0.2-3.9-1.7-3.9-1.7L787.3,1690z"/>
                                <path fill="#FFFFFF" d="M552.5,1363.5c0,0,0.8,0.9,2,0.9c0.9,0,1.6-0.5,1.6-1.4c0-1.9-3.9-1.5-3.9-3.9c0-1,0.8-1.9,2-2.1v-1.1
                                    h0.6v1c1.2,0.1,1.9,0.7,1.9,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.7-1.6,1.3c0,1.8,3.9,1.4,3.9,3.9c0,1.1-0.8,2-2,2.1v1h-0.6
                                    v-1c-1.4-0.1-2.2-1-2.2-1L552.5,1363.5z"/>
                                <path fill="#FFFFFF" d="M320.7,1047.3c0,0,1.7,1.8,4.3,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4-8.3-3.2-8.3-8.2c0-2.2,1.7-4,4.3-4.4v-2.2
                                    h1.3v2.2c2.5,0.1,3.9,1.6,3.9,1.6l-0.8,1.4c0,0-1.5-1.4-3.6-1.4s-3.5,1.4-3.5,2.8c0,3.8,8.3,2.9,8.3,8.2c0,2.3-1.6,4.2-4.3,4.4
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L320.7,1047.3z"/>
                                <path fill="#FFFFFF" d="M271,1292c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.9-3.8-1.5-3.8-3.8c0-1,0.8-1.9,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.7-1.7-0.7s-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.8c0,1.1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-1-2.1-1L271,1292z"/>
                                <path fill="#FFFFFF" d="M239.9,1575.4c0,0,1.2,1.3,3.1,1.3c1.3,0,2.4-0.8,2.4-2.1c0-2.9-6-2.3-6-5.9c0-1.6,1.2-2.9,3.1-3.1v-1.6
                                    h0.9v1.6c1.8,0.1,2.8,1.1,2.8,1.1l-0.6,1c0,0-1.1-1-2.6-1s-2.5,1-2.5,2c0,2.7,6,2.1,6,5.9c0,1.6-1.2,3-3.1,3.2v1.6h-0.9v-1.6
                                    c-2.1-0.2-3.3-1.5-3.3-1.5L239.9,1575.4z"/>
                                <path fill="#FFFFFF" d="M95.3,953.9c0,0,0.9,1,2.3,1c1,0,1.8-0.6,1.8-1.5c0-2.2-4.5-1.7-4.5-4.4c0-1.2,0.9-2.2,2.3-2.4v-1.2H98
                                    v1.2c1.4,0.1,2.1,0.8,2.1,0.8l-0.4,0.7c0,0-0.8-0.8-1.9-0.8s-1.9,0.7-1.9,1.5c0,2,4.5,1.6,4.5,4.4c0,1.2-0.9,2.2-2.3,2.4v1.2
                                    h-0.7v-1.2c-1.6-0.1-2.5-1.1-2.5-1.1L95.3,953.9z"/>
                                <path fill="#FFFFFF" d="M1570.3,1244.6c0,0,1.6,1.7,4,1.7c1.7,0,3.1-1,3.1-2.7c0-3.7-7.7-3-7.7-7.6c0-2,1.6-3.8,4-4.1v-2.1h1.2v2
                                    c2.4,0.1,3.6,1.5,3.6,1.5l-0.7,1.3c0,0-1.4-1.3-3.4-1.3s-3.2,1.3-3.2,2.6c0,3.5,7.7,2.7,7.7,7.6c0,2.1-1.5,3.9-4,4.1v2h-1.2v-2
                                    c-2.8-0.2-4.3-1.9-4.3-1.9L1570.3,1244.6z"/>
                                <path fill="#FFFFFF" d="M1108.3,931.3c0,0,1.5,1.6,3.9,1.6c1.6,0,2.9-1,2.9-2.6c0-3.6-7.4-2.9-7.4-7.3c0-1.9,1.5-3.6,3.9-3.9v-2
                                    h1.2v2c2.3,0.1,3.5,1.4,3.5,1.4l-0.7,1.2c0,0-1.3-1.3-3.2-1.3c-1.9,0-3.1,1.2-3.1,2.5c0,3.4,7.4,2.6,7.4,7.3c0,2-1.4,3.7-3.9,3.9
                                    v2h-1.2v-2c-2.7-0.2-4.1-1.8-4.1-1.8L1108.3,931.3z"/>
                                <path fill="#FFFFFF" d="M1533.7,1616.3c0,0,0.8,0.8,2,0.8c0.8,0,1.5-0.5,1.5-1.3c0-1.8-3.8-1.5-3.8-3.7c0-1,0.8-1.8,2-2v-1h0.6v1
                                    c1.2,0.1,1.8,0.7,1.8,0.7l-0.4,0.6c0,0-0.7-0.6-1.6-0.6c-1,0-1.6,0.6-1.6,1.3c0,1.7,3.8,1.3,3.8,3.7c0,1-0.7,1.9-2,2v1h-0.6v-1
                                    c-1.4-0.1-2.1-0.9-2.1-0.9L1533.7,1616.3z"/>
                                <path fill="#FFFFFF" d="M1695.2,994.3c0,0,1.7,1.8,4.4,1.8c1.8,0,3.3-1.1,3.3-2.9c0-4.1-8.4-3.2-8.4-8.3c0-2.2,1.7-4.1,4.4-4.4
                                    v-2.3h1.3v2.2c2.6,0.1,4,1.6,4,1.6l-0.8,1.4c0,0-1.5-1.4-3.7-1.4s-3.5,1.4-3.5,2.9c0,3.8,8.4,2.9,8.4,8.3c0,2.3-1.6,4.2-4.4,4.5
                                    v2.2h-1.3v-2.2c-3-0.2-4.6-2.1-4.6-2.1L1695.2,994.3z"/>
                            </g>
                            <g id="stars">
                                <circle fill="#FFFFFF" cx="1573.9" cy="344.2" r="6"/>
                                <circle fill="#FFFFFF" cx="1243.9" cy="632" r="6"/>
                                <circle fill="#FFFFFF" cx="789.8" cy="789.6" r="6"/>
                                <circle fill="#FFFFFF" cx="241.9" cy="675.6" r="6"/>
                                <circle fill="#FFFFFF" cx="323.9" cy="146.6" r="6"/>
                                <circle fill="#F5BC66" cx="96.6" cy="55.1" r="1.6"/>
                                <circle fill="#F5BC66" cx="271.9" cy="393.6" r="1.6"/>
                                <circle fill="#F5BC66" cx="553.5" cy="465" r="1.6"/>
                                <circle fill="#F5BC66" cx="1534.6" cy="718" r="1.6"/>
                                <circle fill="#F5BC66" cx="1454.9" cy="174.6" r="1.6"/>
                                <circle fill="#FFFFFF" cx="1111.1" cy="30.6" r="6"/>
                                <circle fill="#FFFFFF" cx="1698.5" cy="93.1" r="6"/>
                            </g>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_27_" points="-2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 894,490.8             "/>
                            </defs>
                            <clipPath id="SVGID_28_">
                                <use xlinkHref="#SVGID_27_"  overflow="visible"/>
                            </clipPath>
                            <path id="final_1_" display="none" clipPath="url(#SVGID_28_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875S4259.8-1368.1,4259.8,490.8S2752.9,3856.6,894,3856.6S-2471.8,2349.7-2471.8,490.8H894
                                H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_29_" points="-2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 894,490.8             "/>
                            </defs>
                            <clipPath id="SVGID_30_">
                                <use xlinkHref="#SVGID_29_"  overflow="visible"/>
                            </clipPath>
                            <path id="step3_2_" display="none" clipPath="url(#SVGID_30_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875S4259.8-1368.1,4259.8,490.8S2752.9,3856.6,894,3856.6l0,0V490.8H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_31_" points="-2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 894,490.8             "/>
                            </defs>
                            <clipPath id="SVGID_32_">
                                <use xlinkHref="#SVGID_31_"  overflow="visible"/>
                            </clipPath>
                            <path id="step2" display="none" clipPath="url(#SVGID_32_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875S4259.8-1368.1,4259.8,490.8l0,0l0,0H894L-2471.8,490.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_33_" points="-2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 -2471.8,490.8 894,490.8             "/>
                            </defs>
                            <clipPath id="SVGID_34_">
                                <use xlinkHref="#SVGID_33_"  overflow="visible"/>
                            </clipPath>
                            <path id="step1" display="none" clipPath="url(#SVGID_34_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875l0,0l0,0l0,0V490.8H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_35_" points="1,1 2,1 1,2             "/>
                            </defs>
                            <defs>
                                <polygon id="SVGID_36_" points="-1,-1 -2,-1 -1,-2           "/>
                            </defs>
                            <clipPath id="SVGID_37_">
                                <use xlinkHref="#SVGID_35_"  overflow="visible"/>
                            </clipPath>
                            <clipPath id="SVGID_38_" clipPath="url(#SVGID_37_)">
                                <use xlinkHref="#SVGID_36_"  overflow="visible"/>
                            </clipPath>
                            <path id="step05" display="none" clipPath="url(#SVGID_38_)" fill="#301801" d="M-2471.8,490.8
                                c0-1858.8,614.3-2227.2,1163.4-2545.2l0,0l0,0l0,0L894,490.8H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_39_" points="1,1 2,1 1,2             "/>
                            </defs>
                            <defs>
                                <polygon id="SVGID_40_" points="-1,-1 -2,-1 -1,-2           "/>
                            </defs>
                            <clipPath id="SVGID_41_">
                                <use xlinkHref="#SVGID_39_"  overflow="visible"/>
                            </clipPath>
                            <clipPath id="SVGID_42_" clipPath="url(#SVGID_41_)">
                                <use xlinkHref="#SVGID_40_"  overflow="visible"/>
                            </clipPath>
                            <path id="step15" display="none" clipPath="url(#SVGID_42_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875c1365.4,0,2020.1,487.1,2512,1117l0,0l0,0L894,490.8H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_43_" points="1,1 2,1 1,2             "/>
                            </defs>
                            <defs>
                                <polygon id="SVGID_44_" points="-1,-1 -2,-1 -1,-2           "/>
                            </defs>
                            <clipPath id="SVGID_45_">
                                <use xlinkHref="#SVGID_43_"  overflow="visible"/>
                            </clipPath>
                            <clipPath id="SVGID_46_" clipPath="url(#SVGID_45_)">
                                <use xlinkHref="#SVGID_44_"  overflow="visible"/>
                            </clipPath>
                            <path id="step25" display="none" clipPath="url(#SVGID_46_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875S4259.8-1368.1,4259.8,490.8C4259.8,1538,4174,1802,3734,2322l0,0L894,490.8H-2471.8z"/>
                        </g>
                        <g>
                            <defs>
                                <polygon id="SVGID_47_" points="1,1 2,1 1,2             "/>
                            </defs>
                            <defs>
                                <polygon id="SVGID_48_" points="-1,-1 -2,-1 -1,-2           "/>
                            </defs>
                            <clipPath id="SVGID_49_">
                                <use xlinkHref="#SVGID_47_"  overflow="visible"/>
                            </clipPath>
                            <clipPath id="SVGID_50_" clipPath="url(#SVGID_49_)">
                                <use xlinkHref="#SVGID_48_"  overflow="visible"/>
                            </clipPath>
                            <path id="step35" display="none" clipPath="url(#SVGID_50_)" fill="#301801" d="M-2471.8,490.8
                                C-2471.8-1368.1-964.9-2875,894-2875S4259.8-1368.1,4259.8,490.8S2752.9,3856.6,894,3856.6c-1215.7,0-1692.5-268.1-2349.8-955.7
                                L894,490.8H-2471.8z"/>
                        </g>
                    </g>


            <g id='text'>

            <g className='fr'>
                <g className="f14">
                    <path d="M560,248.3c10,0,15,5.3,15,5.3l-1.6,1.9c0,0-5-4.7-13.4-4.7c-10.3,0-18.2,8.1-18.2,19
                        c0,10.9,7.8,19.6,18.4,19.6c9,0,14.2-5.7,14.2-5.7l1.6,1.8c0,0-5.6,6.4-15.8,6.4c-12.2,0-21.1-9.8-21.1-22
                        C539.2,257.5,548.2,248.3,560,248.3z"/>
                    <path d="M585.5,248.5h3.1l-2.9,9.1h-2.3L585.5,248.5z"/>
                    <path d="M609.2,260.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C594.6,265.9,601.5,260.3,609.2,260.3z
                         M618.8,273.2c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H618.8z"/>
                    <path d="M628.9,285.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L628.9,285.5z"/>
                    <path d="M657,263.5h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9V280c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V263.5z"/>
                    <path className='orange' d="M704.9,260.3c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.8,4.6-11,4.7l-0.5,2.9c2.5,0.4,4.1,1.9,4.1,4.1c0,3.3-2.6,4.6-5.5,4.6
                        c-1.6,0-2.6-0.2-2.6-0.2v-2.3c0,0,1.1,0.3,2.5,0.3c1.6,0,3.2-0.5,3.2-2.2c0-1.4-1.3-2.3-3.7-2.3c-0.4,0-0.7,0.1-0.7,0.1l1.1-5
                        c-7.7-0.8-13.7-6.7-13.7-15.5C689.5,266.5,696.6,260.3,704.9,260.3z"/>
                    <path className='orange' d="M740.8,272.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V291h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C722.2,272.8,735.4,272.7,740.8,272.7z M732.5,289.4c6.5,0,10.3-6.8,10.3-12.7V275h-1.9c-5.1,0-16,0-16,7.8
                        C724.8,286,727.4,289.4,732.5,289.4z"/>
                    <path d="M783.5,260.3c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4V261h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C770,266.5,775.6,260.3,783.5,260.3z M783.1,289.3c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C772.7,284.1,777,289.3,783.1,289.3z"/>
                    <path d="M806.4,261h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6V261h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V261z"/>
                    <path d="M841.4,249h3v4.4h-3V249z M841.7,261h2.5v30h-2.5V261z"/>
                    <path d="M871.4,261h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V291h-2.5V261z"/>
                    <path d="M919.9,260.3c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C904.3,267.1,911.3,260.3,919.9,260.3z M919.9,289.3c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C907,283.4,912.7,289.3,919.9,289.3z"/>
                    <path d="M943.3,261h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6V261h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V261z"/>
                    <path d="M977.6,285.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L977.6,285.5z"/>
                    <path d="M1021.4,261h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V261z"/>
                    <path d="M1053.4,260.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1038.8,265.9,1045.7,260.3,1053.4,260.3z
                         M1063,273.2c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1063z"/>
                    <path d="M1074.1,261h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V291h-2.5V261z"/>
                    <path d="M1120.7,260.3c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5V249h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1107.3,266.5,1112.9,260.3,1120.7,260.3z M1120.4,289.3c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1109.9,284.1,1114.3,289.3,1120.4,289.3z"/>
                    <path d="M1179,263.3h-14.5V291h-2.5v-27.7h-3.8V261h3.8v-1.2c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3
                        c0,0-0.5-0.1-1.4-0.1c-2.4,0-7.1,1-7.1,8.7v1.3h17v30h-2.5V263.3z M1178.8,249h3v4.4h-3V249z"/>
                    <path d="M1204.6,260.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1190,265.9,1196.9,260.3,1204.6,260.3z
                         M1214.2,273.2c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1214.2z"/>
                    <path d="M1225.3,261h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V261z"/>
                    <path d="M1243.5,287.2h3.7v3.8h-3.7V287.2z"/>
                </g>
                <g className="f13">
                    <g className='f13_1'>
                        <path d="M617.5,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                            h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C604.1,170.1,609.7,163.9,617.5,163.9z M617.2,192.9c5.5,0,10.7-3.9,10.7-13.3
                            c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C606.7,187.7,611.1,192.9,617.2,192.9z"/>
                        <path d="M653.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C638.8,169.5,645.7,163.9,653.4,163.9z M663,176.8
                            c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H663z"/>
                        <path d="M673.1,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L673.1,189.1z"/>
                        <path d="M716.8,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                            c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                        <path d="M748.9,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C734.3,169.5,741.2,163.9,748.9,163.9z
                             M758.5,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H758.5z M751.6,152.6h3.4l-4.7,6.7h-2.6L751.6,152.6z"/>
                        <path d="M768.6,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L768.6,189.1z"/>
                        <path d="M795.3,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                        <path d="M830.3,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                            c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                        <path d="M845.3,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                        <path d="M879.4,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                            c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                            C860.8,176.4,874,176.3,879.4,176.3z M871.1,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                            C863.4,189.6,866,193,871.1,193z"/>
                        <path d="M894.8,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                        <path d="M911.7,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L911.7,189.1z"/>
                        <path d="M968.8,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                            c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S960.5,163.9,968.8,163.9z"
                            />
                        <path d="M1001.6,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                            C986.1,170.7,993.1,163.9,1001.6,163.9z M1001.6,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                            C988.7,187,994.5,192.9,1001.6,192.9z"/>
                        <path d="M1025.5,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                            v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                        <path d="M1074.1,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                            c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S1065.7,163.9,1074.1,163.9z
                            "/>
                        <path d="M1093.7,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                            c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                        <path d="M1125.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1111.2,169.5,1118.1,163.9,1125.8,163.9z
                             M1135.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1135.4z"/>
                        <path d="M1147.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                        <path d="M1164.4,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L1164.4,189.1z"/>
                    </g>
                    <g className='f13_2'>
                        <path d="M715.7,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C701.1,259.5,708,253.9,715.7,253.9z M725.3,266.8
                            c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H725.3z"/>
                        <path d="M737.4,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                        <path d="M771.9,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                            c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                            c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                            V254.6z"/>
                        <path d="M839.4,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C824.9,259.5,831.8,253.9,839.4,253.9z M849,266.8
                            c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H849z"/>
                        <path d="M859.2,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L859.2,279.1z"/>
                        <path d="M885.9,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                        <path d="M921.2,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                            c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                        <path d="M957.6,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                            c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                            C939,266.4,952.2,266.3,957.6,266.3z M949.3,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                            C941.6,279.6,944.2,283,949.3,283z"/>
                        <path d="M972.2,242.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                            c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V242.6z M985.1,282.9
                            c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C974.7,276.3,978.1,282.9,985.1,282.9z"/>
                        <path d="M1006.7,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                            c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                        <path d="M1033.2,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1018.7,259.5,1025.6,253.9,1033.2,253.9z
                             M1042.8,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1042.8z"/>
                        <path d="M1053,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L1053,279.1z"/>
                        <path d="M1080.1,280.8h3.7v3.8h-3.7V280.8z"/>
                    </g>
                </g>
                <g className="f12">
                    <path className="f12_1" d="M593.7,152.6h23v2.4h-20.4v17.2h16.7v2.4h-16.7v17.6h21.5v2.4h-24.1V152.6z"/>
                    <path className="f12_1" d="M626.8,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f12_1" d="M661,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L661,189.1z"/>
                    <path className="f12_1" d="M700.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C686,169.5,692.9,163.9,700.6,163.9z M710.2,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H710.2z"/>
                    <path className="f12_1" d="M721.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V164.6z"/>
                    <path className="f12_1" d="M776.4,152.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V152.6z M789.3,192.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C778.8,186.3,782.3,192.9,789.3,192.9z"/>
                    <path className="f12_1" d="M810.8,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path className="f12_1" d="M837.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C822.8,169.5,829.7,163.9,837.4,163.9z M847,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H847z"/>
                    <path className="f12_1" d="M858.7,190.9h3.4l-4,9.3h-2.5L858.7,190.9z"/>
                    <path className="f12_1" d="M902.5,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C887,170.7,893.9,163.9,902.5,163.9z M902.5,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C889.6,187,895.4,192.9,902.5,192.9z"/>
                    <path className="f12_1" d="M926.4,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f12_1" d="M978.2,152.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V152.6z M991.1,192.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C980.6,186.3,984,192.9,991.1,192.9z"/>
                    <path className="f12_1" d="M1029,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1010.4,176.4,1023.7,176.3,1029,176.3z M1020.8,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1013.1,189.6,1015.7,193,1020.8,193z M1021.4,152.6h3.1l4.8,6.7h-2.9l-3.4-4.8h-0.1l-3.4,4.8h-2.9L1021.4,152.6z"/>
                    <path className="f12_1" d="M1044.5,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f12_1" d="M1062.1,152.6h3v4.4h-3V152.6z M1062.3,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f12_1" d="M1076.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f12_1" d="M1122.3,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1108.9,170.1,1114.5,163.9,1122.3,163.9z M1122,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1111.5,187.7,1115.9,192.9,1122,192.9z"/>
                    <path className="f12_1" d="M1158.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1143.6,169.5,1150.5,163.9,1158.2,163.9z
                         M1167.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1167.8z"/>
                    <path className="f12_1" d="M1177.9,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1177.9,189.1z"/>

                    <path className="f12_2" d="M636.7,242.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V242.6z"/>
                    <path className="f12_2" d="M671.6,242.6h3v4.4h-3V242.6z M671.8,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f12_2" d="M684,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L684,279.1z"/>
                    <path className="f12_2" d="M712,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f12_2" d="M743.2,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C727.7,260.7,734.7,253.9,743.2,253.9z M743.2,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C730.3,277,736.1,282.9,743.2,282.9z"/>
                    <path className="f12_2" d="M766.9,242.6h3v4.4h-3V242.6z M767.1,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f12_2" d="M780.2,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f12_2" d="M812.2,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C797.7,259.5,804.6,253.9,812.2,253.9z
                         M821.8,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H821.8z"/>
                    <path className="f12_2" d="M832,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L832,279.1z"/>
                    <path className="f12_2" d="M887.2,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C873.7,260.1,879.3,253.9,887.2,253.9z M886.8,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C876.4,277.7,880.7,282.9,886.8,282.9z"/>
                    <path className="f12_2" d="M923,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H911c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C908.4,259.5,915.3,253.9,923,253.9z M932.6,266.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H932.6z"/>
                    <path className="f12_2" d="M959.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L959.3,279.1z"/>
                    <path className="f12_2" d="M986,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f12_2" d="M1034.7,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C1019.2,260.1,1026.4,253.9,1034.7,253.9z"/>
                    <path className="f12_2" d="M1067.6,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C1052.1,260.1,1059.2,253.9,1067.6,253.9z"/>
                    <path className="f12_2" d="M1099.6,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1085,259.5,1091.9,253.9,1099.6,253.9z
                         M1109.2,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1109.2z M1093.7,242.6h3.4l4,6.7h-2.6L1093.7,242.6z"/>
                    <path className="f12_2" d="M1119.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1119.3,279.1z"/>
                    <path className="f12_2" d="M1147,280.9h3.4l-4,9.3h-2.5L1147,280.9z"/>
                </g>
                <g className="f11">
                    <path className="f11_1" d="M612.4,152.6h13.8c7.3,0,12.8,4.6,12.8,12.2s-5.5,12.4-12.8,12.4H615v17.4h-2.6V152.6z M626.1,174.8
                        c6.1,0,10.2-3.7,10.2-10s-4.1-9.8-10.2-9.8H615v19.8H626.1z"/>
                    <path className="f11_1" d="M662.9,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7H665c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C644.3,176.4,657.5,176.3,662.9,176.3z M654.6,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C646.9,189.6,649.5,193,654.6,193z"/>
                    <path className="f11_1" d="M677.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f11_1" d="M710.4,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S702.1,163.9,710.4,163.9z"
                        />
                    <path className="f11_1" d="M742.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C727.8,169.5,734.7,163.9,742.4,163.9z M752,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H752z"/>
                    <path className="f11_1" d="M791.2,163.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C777.8,170.1,783.3,163.9,791.2,163.9z M790.8,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C780.4,187.7,784.7,192.9,790.8,192.9z"/>
                    <path className="f11_1" d="M814.1,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f11_1" d="M850,152.1h3.1l-2.9,9.1h-2.3L850,152.1z"/>
                    <path className="f11_1" d="M873.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C859.1,169.5,866,163.9,873.7,163.9z M883.3,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H883.3z M872.2,152.6h3.1l4.8,6.7h-2.9l-3.4-4.8h-0.1l-3.4,4.8h-2.9
                        L872.2,152.6z"/>
                    <path className="f11_1" d="M895.3,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f11_1" d="M913.2,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f11_1" d="M945.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C930.7,169.5,937.6,163.9,945.3,163.9z
                         M954.9,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H954.9z"/>
                    <path className="f11_1" d="M978.4,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L978.4,164.6z"/>
                    <path className="f11_1" d="M1010.3,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f11_1" d="M1062.2,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f11_1" d="M1098,152.1h3.1l-2.9,9.1h-2.3L1098,152.1z"/>
                    <path className="f11_1" d="M1121.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1107.1,169.5,1114,163.9,1121.7,163.9z
                         M1131.3,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1131.3z"/>
                    <path className="f11_1" d="M1141.4,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1141.4,189.1z"/>
                    <path className="f11_1" d="M1169.5,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>

                    <path className="f11_2" d="M607.7,254.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V254.6z M620.6,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C610.1,276.3,613.8,282.9,620.6,282.9z"/>
                    <path className="f11_2" d="M658.5,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C639.9,266.4,653.2,266.3,658.5,266.3z M650.3,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C642.6,279.6,645.2,283,650.3,283z"/>
                    <path className="f11_2" d="M672.2,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L672.2,279.1z"/>
                    <path className="f11_2" d="M716.9,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f11_2" d="M748.1,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C732.6,260.7,739.5,253.9,748.1,253.9z M748.1,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C735.2,277,741,282.9,748.1,282.9z"/>
                    <path className="f11_2" d="M771.6,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f11_2" d="M809.4,254.6v31.2c0,10-6.5,11.1-9.5,11.1c-0.9,0-1.5-0.1-1.5-0.1v-2.3c0,0,0.5,0.1,1.3,0.1
                        c2.4,0,7.2-1,7.2-8.7v-31.3H809.4z M806.6,242.6h3v4.4h-3V242.6z"/>
                    <path className="f11_2" d="M833.2,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C817.7,260.7,824.7,253.9,833.2,253.9z M833.2,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C820.4,277,826.1,282.9,833.2,282.9z"/>
                    <path className="f11_2" d="M856.7,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5H879c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f11_2" d="M892,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13H892V254.6z"/>
                    <path className="f11_2" d="M911.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L911.3,279.1z"/>
                    <path className="f11_2" d="M954.1,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L954.1,279.1z"/>
                    <path className="f11_2" d="M980.8,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f11_2" d="M1052.7,256.9h-14.5v27.7h-2.5v-27.7h-15.8v27.7h-2.5v-27.7h-3.8v-2.3h3.8v-1.2c0-9.9,6.5-11.1,9.5-11.1
                        c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1c-2.4,0-7.1,1-7.1,8.7v1.3h15.8v-1.2c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1
                        v2.3c0,0-0.5-0.1-1.4-0.1c-2.4,0-7.1,1-7.1,8.7v1.3h17v30h-2.5V256.9z M1052.4,242.6h3v4.4h-3V242.6z"/>
                    <path className="f11_2" d="M1064.8,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1064.8,279.1z"/>
                    <path className="f11_2" d="M1108,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1089.4,266.4,1102.7,266.3,1108,266.3z M1099.8,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1092.1,279.6,1094.7,283,1099.8,283z"/>
                    <path className="f11_2" d="M1122.7,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f11_2" d="M1158.8,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f11_2" d="M1176.7,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f10">
                    <path className="f10_1" d="M508.1,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L508.1,164.6z"/>
                    <path className="f10_1" d="M553.8,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C538.2,170.7,545.2,163.9,553.8,163.9z M553.8,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C540.9,187,546.6,192.9,553.8,192.9z"/>
                    <path className="f10_1" d="M577.2,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f10_1" d="M611.5,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L611.5,189.1z"/>
                    <path className="f10_1" d="M651.1,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L651.1,164.6z"/>
                    <path className="f10_1" d="M696.7,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C681.2,170.7,688.2,163.9,696.7,163.9z M696.7,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C683.8,187,689.6,192.9,696.7,192.9z"/>
                    <path className="f10_1" d="M720.2,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f10_1" d="M754.5,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L754.5,189.1z"/>
                    <path className="f10_1" d="M811.6,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C796.2,170.1,803.3,163.9,811.6,163.9z"/>
                    <path className="f10_1" d="M844.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C828.9,170.7,835.9,163.9,844.4,163.9z M844.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C831.6,187,837.3,192.9,844.4,192.9z"/>
                    <path className="f10_1" d="M868.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f10_1" d="M916.9,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C901.4,170.1,908.5,163.9,916.9,163.9z"/>
                    <path className="f10_1" d="M948.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C934.3,169.5,941.2,163.9,948.8,163.9z
                         M958.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H958.4z"/>
                    <path className="f10_1" d="M969.5,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19H992v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f10_1" d="M1005.7,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f10_1" d="M1023.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f10_1" d="M1055.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1041,169.5,1047.9,163.9,1055.6,163.9z
                         M1065.2,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1065.2z"/>
                    <path className="f10_1" d="M1073.6,192.6l18.2-22.9c1.1-1.4,2.3-2.8,2.3-2.8v-0.1c0,0-1.1,0.1-3.1,0.1h-16.7v-2.3h23.2v2l-18.2,22.9
                        c-1.1,1.4-2.4,2.8-2.4,2.8v0.1c0,0,1.1-0.1,3.1-0.1h18.2v2.3h-24.6V192.6z"/>
                    <path className="f10_1" d="M1139.1,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1120.5,176.4,1133.8,176.3,1139.1,176.3z M1130.8,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1123.1,189.6,1125.7,193,1130.8,193z M1126.9,152.6h3.4l4,6.7h-2.6L1126.9,152.6z"/>
                    <path className="f10_1" d="M1171.6,167.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3h-8.2v27.5h-2.5V167.1z"/>
                    <path className="f10_1" d="M1204.8,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1186.2,176.4,1199.5,176.3,1204.8,176.3z M1196.5,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1188.8,189.6,1191.4,193,1196.5,193z"/>
                    <path className="f10_1" d="M1219.2,152.6h3v4.4h-3V152.6z M1219.4,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f10_1" d="M1232.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f10_1" d="M1264.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1250,169.5,1256.9,163.9,1264.6,163.9z
                         M1274.2,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1274.2z"/>

                    <path className="f10_2" d="M529.3,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C513.9,260.1,521,253.9,529.3,253.9z"/>
                    <path className="f10_2" d="M561.3,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C546.7,259.5,553.6,253.9,561.3,253.9z
                         M570.9,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H570.9z"/>
                    <path className="f10_2" d="M610.1,253.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C596.7,260.1,602.2,253.9,610.1,253.9z M609.7,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C599.3,277.7,603.6,282.9,609.7,282.9z"/>
                    <path className="f10_2" d="M633,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f10_2" d="M680.8,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C666.2,259.5,673.1,253.9,680.8,253.9z
                         M690.4,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H690.4z"/>
                    <path className="f10_2" d="M713.9,254.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L713.9,254.6z"/>
                    <path className="f10_2" d="M759.6,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C744,260.7,751,253.9,759.6,253.9z M759.6,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C746.7,277,752.4,282.9,759.6,282.9z"/>
                    <path className="f10_2" d="M783,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f10_2" d="M817.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L817.3,279.1z"/>
                    <path className="f10_2" d="M862.3,257.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3h-8.2v27.5h-2.5V257.1z"/>
                    <path className="f10_2" d="M895.5,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C876.9,266.4,890.2,266.3,895.5,266.3z M887.2,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C879.6,279.6,882.1,283,887.2,283z"/>
                    <path className="f10_2" d="M909.9,242.6h3v4.4h-3V242.6z M910.1,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f10_2" d="M924.2,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f10_2" d="M954.5,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C940,259.5,946.9,253.9,954.5,253.9z M964.1,266.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H964.1z"/>
                    <path className="f10_2" d="M974.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L974.3,279.1z"/>
                    <path className="f10_2" d="M1029.5,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1016,260.1,1021.6,253.9,1029.5,253.9z M1029.1,282.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1018.7,277.7,1023,282.9,1029.1,282.9z"/>
                    <path className="f10_2" d="M1065.3,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1050.7,259.5,1057.6,253.9,1065.3,253.9z
                         M1074.9,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1074.9z"/>
                    <path className="f10_2" d="M1102.6,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V254.6z"/>
                    <path className="f10_2" d="M1157.5,242.6h3v4.4h-3V242.6z M1157.7,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f10_2" d="M1183.3,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1168.7,259.5,1175.6,253.9,1183.3,253.9z
                         M1192.9,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1192.9z"/>
                    <path className="f10_2" d="M1203.5,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f10_2" d="M1246.1,268.8l-9.7-14.2h3.1l7.3,10.9c0.5,0.8,1,1.7,1,1.7h0.1c0,0,0.5-0.9,1-1.7l7.3-10.9h3.1l-9.7,14.2
                        l10.8,15.8h-3.1l-8.3-12.4c-0.5-0.8-1.1-1.7-1.1-1.7h-0.1c0,0-0.5,0.8-1.1,1.7l-8.3,12.4h-3.1L1246.1,268.8z"/>
                    <path className="f10_2" d="M1267.4,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f9">
                    <path d="M567.9,152.6h13.8c7.3,0,12.8,4.6,12.8,12.2s-5.5,12.4-12.8,12.4h-11.2v17.4h-2.6V152.6z M581.6,174.8
                        c6.1,0,10.2-3.7,10.2-10s-4.1-9.8-10.2-9.8h-11.1v19.8H581.6z"/>
                    <path d="M614.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C599.9,169.5,606.8,163.9,614.5,163.9z
                         M624.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H624.1z"/>
                    <path d="M635.2,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M681.8,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C668.4,170.1,674,163.9,681.8,163.9z M681.5,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C671,187.7,675.4,192.9,681.5,192.9z"/>
                    <path d="M721.3,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C702.7,176.4,716,176.3,721.3,176.3z M713,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C705.4,189.6,707.9,193,713,193z"/>
                    <path d="M736,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6H736V164.6z"/>
                    <path d="M772.1,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M818,163.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C804.6,170.1,810.2,163.9,818,163.9z M817.7,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C807.2,187.7,811.6,192.9,817.7,192.9z"/>
                    <path d="M841,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M876.8,152.1h3.1l-2.9,9.1h-2.3L876.8,152.1z"/>
                    <path d="M901.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C885.8,170.7,892.8,163.9,901.4,163.9z M901.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C888.5,187,894.2,192.9,901.4,192.9z"/>
                    <path d="M925.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M972.8,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L972.8,164.6z"/>
                    <path d="M1018.5,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1003,170.7,1009.9,163.9,1018.5,163.9z M1018.5,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1005.6,187,1011.4,192.9,1018.5,192.9z"/>
                    <path d="M1042,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M1076.3,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1076.3,189.1z"/>
                    <path d="M1136.2,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1117.6,176.4,1130.8,176.3,1136.2,176.3z M1127.9,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1120.2,189.6,1122.8,193,1127.9,193z"/>
                    <path d="M1150.6,152.6h3v4.4h-3V152.6z M1150.8,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M1175.3,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1161.9,170.1,1167.5,163.9,1175.3,163.9z M1175,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1164.5,187.7,1168.9,192.9,1175,192.9z"/>
                    <path d="M1211.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1196.6,169.5,1203.5,163.9,1211.2,163.9z
                         M1220.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1220.8z"/>
                    <path d="M660,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4H662v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C641.4,266.4,654.7,266.3,660,266.3z M651.7,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C644,279.6,646.6,283,651.7,283z M647.8,242.6h3.4l4,6.7h-2.6L647.8,242.6z"/>
                    <path d="M687.1,254.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L687.1,254.6z"/>
                    <path d="M732.7,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C717.2,260.7,724.1,253.9,732.7,253.9z M732.7,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C719.8,277,725.6,282.9,732.7,282.9z"/>
                    <path d="M756.2,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path d="M790.5,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L790.5,279.1z"/>
                    <path d="M835.5,257.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3H838v27.5h-2.5V257.1z"/>
                    <path d="M868.7,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C850.1,266.4,863.3,266.3,868.7,266.3z M860.4,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C852.7,279.6,855.3,283,860.4,283z"/>
                    <path d="M883.1,242.6h3v4.4h-3V242.6z M883.3,254.6h2.5v30h-2.5V254.6z"/>
                    <path d="M896.4,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path d="M928.4,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C913.9,259.5,920.8,253.9,928.4,253.9z M938,266.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H938z"/>
                    <path d="M979.1,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C963.7,260.1,970.8,253.9,979.1,253.9z"/>
                    <path d="M998.8,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path d="M1031.7,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1016.2,260.7,1023.1,253.9,1031.7,253.9z M1031.7,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1018.8,277,1024.6,282.9,1031.7,282.9z"/>
                    <path d="M1055.3,242.6h3.1l4.8,6.7h-2.9l-3.4-4.8h-0.1l-3.4,4.8h-2.9L1055.3,242.6z M1055.6,254.6h2.5v30h-2.5V254.6z
                        "/>
                    <path d="M1069.6,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path d="M1087.5,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path d="M1119.5,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1105,259.5,1111.9,253.9,1119.5,253.9z
                         M1129.1,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1129.1z"/>
                    <path d="M1140.8,280.9h3.4l-4,9.3h-2.5L1140.8,280.9z"/>
                </g>
                <g className="f8">
                    <path d="M708.2,365c10,0,15,5.3,15,5.3l-1.6,1.9c0,0-5-4.7-13.4-4.7c-10.3,0-18.2,8.1-18.2,19s7.8,19.6,18.4,19.6
                        c9,0,14.2-5.7,14.2-5.7l1.6,1.8c0,0-5.6,6.4-15.8,6.4c-12.2,0-21.1-9.8-21.1-22S696.3,365,708.2,365z"/>
                    <path d="M733.6,365.2h3.1l-2.9,9.1h-2.3L733.6,365.2z"/>
                    <path d="M757.3,377c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C742.7,382.6,749.6,377,757.3,377z M766.9,389.9
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H766.9z"/>
                    <path d="M777,402.2c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L777,402.2z"/>
                    <path d="M805.1,380.2h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V380.2z"/>
                    <path d="M839.3,365.7h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L839.3,365.7L839.3,365.7z"/>
                    <path d="M865.9,377c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C851.3,382.6,858.2,377,865.9,377z M875.5,389.9
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H875.5z"/>
                    <path d="M904.2,380.2h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V380.2z"/>
                    <path d="M922,377.7h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13H922V377.7z"/>
                    <path d="M941.9,377.7h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V377.7z"/>
                    <path d="M990.6,377c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C975.1,383.2,982.2,377,990.6,377z"/>
                    <path d="M1038.3,377c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1024.9,383.2,1030.5,377,1038.3,377z M1038,406c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1027.5,400.8,1031.8,406,1038,406z"/>
                    <path d="M1061.2,377.7h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V377.7z"/>
                    <path d="M1096.3,365.7h3v4.4h-3V365.7z M1096.5,377.7h2.5v30h-2.5V377.7z"/>
                    <path d="M726.4,467.7h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V467.7z"/>
                    <path d="M774.9,467c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C759.4,473.8,766.3,467,774.9,467z M774.9,496c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        S767.8,496,774.9,496z"/>
                    <path d="M798.4,467.7h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V467.7z"/>
                    <path d="M832.7,492.2c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L832.7,492.2z"/>
                    <path d="M892.6,479.4h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C874,479.5,887.2,479.4,892.6,479.4z M884.3,496.1c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C876.6,492.7,879.2,496.1,884.3,496.1z"/>
                    <path d="M906.9,455.7h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L906.9,455.7L906.9,455.7z"/>
                    <path d="M920.7,455.7h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L920.7,455.7L920.7,455.7z"/>
                    <path d="M934.4,467.7h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V467.7z"/>
                    <path d="M969.7,467.7h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V467.7z"/>
                    <path d="M1037.2,467c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1022.6,472.6,1029.5,467,1037.2,467z
                         M1046.8,479.9c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1046.8z"/>
                    <path d="M1057.9,493.9h3.7v3.8h-3.7V493.9z"/>
                </g>
                <g className="f7_main">
                    <g className='f7_4'>
                        <path d="M653,254h7.3v3.5c0,1.1-0.1,2.1-0.1,2.1h0.1c1.3-2.6,4.7-6.4,10.9-6.4c6.8,0,10.6,3.5,10.6,11.6v19.7h-7.6
                            v-18.1c0-3.7-1-6.2-4.9-6.2c-4.1,0-7.1,2.6-8.2,6.2c-0.4,1.3-0.5,2.6-0.5,4.1v14H653V254z"/>
                        <path d="M704.3,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C687.5,260,695,253.3,704.3,253.3z M704.4,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5
                            C695.3,275,699.4,278.9,704.4,278.9z"/>
                        <path d="M728.6,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M749.9,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L749.9,254L749.9,254z"/>
                        <path d="M786.9,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C771.3,259.9,777.8,253.3,786.9,253.3z
                             M792.8,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H792.8z"/>
                        <path d="M823.8,275.5c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L823.8,275.5z"/>
                        <path d="M865.5,265.4h1V265c0-4-2.5-5.4-5.9-5.4c-4.4,0-8.4,2.9-8.4,2.9l-2.9-5.5c0,0,4.7-3.8,12-3.8
                            c8,0,12.7,4.4,12.7,12.2v19.1h-7V282c0-1.2,0.1-2.2,0.1-2.2H867c0.1,0-2.3,5.4-9.3,5.4c-5.5,0-10.4-3.4-10.4-9.5
                            C847.4,266.1,860.6,265.4,865.5,265.4z M859.7,279.4c4,0,6.9-4.3,6.9-8v-0.7h-1.3c-3.9,0-10.2,0.5-10.2,4.8
                            C855.1,277.5,856.6,279.4,859.7,279.4z"/>
                        <path d="M877.8,254h8l6.4,19c0.6,1.8,1,4.6,1.1,4.6h0.1c0.1,0,0.5-2.8,1.1-4.6l6.4-19h8l-11,30.6h-9L877.8,254z"/>
                        <path d="M927.7,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C910.9,260,918.4,253.3,927.7,253.3z M927.8,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5
                            C918.6,275,922.8,278.9,927.8,278.9z"/>
                        <path d="M950.7,242h7.6v6.8h-7.6V242z M950.7,254h7.6v30.6h-7.6V254z"/>
                        <path d="M966.7,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L966.7,254L966.7,254z"/>
                        <path d="M990.8,264.2h18.1v6.7h-18.1V264.2z"/>
                        <path d="M1019.2,260.6h-3.8v-6.1h3.8v-1.4c0-10,8.2-11.3,12.5-11.3c1.6,0,2.6,0.2,2.6,0.2v6.5c0,0-0.7-0.1-1.6-0.1
                            c-2.2,0-5.9,0.5-5.9,5v1.2h6.5v6.1h-6.5v24.1h-7.6L1019.2,260.6L1019.2,260.6z"/>
                        <path d="M1054,265.4h1V265c0-4-2.5-5.4-5.9-5.4c-4.4,0-8.4,2.9-8.4,2.9l-2.9-5.5c0,0,4.7-3.8,12-3.8
                            c8,0,12.7,4.4,12.7,12.2v19.1h-7V282c0-1.2,0.1-2.2,0.1-2.2h-0.1c0.1,0-2.3,5.4-9.3,5.4c-5.5,0-10.4-3.4-10.4-9.5
                            C1035.9,266.1,1049.1,265.4,1054,265.4z M1048.2,279.4c4,0,6.9-4.3,6.9-8v-0.7h-1.3c-3.9,0-10.2,0.5-10.2,4.8
                            C1043.6,277.5,1045.1,279.4,1048.2,279.4z"/>
                        <path d="M1070.5,242h7.6v6.8h-7.6V242z M1070.5,254h7.6v30.6h-7.6V254z"/>
                        <path d="M1086.6,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254z"/>
                        <path d="M1123.5,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C1108,259.9,1114.4,253.3,1123.5,253.3z
                             M1129.4,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H1129.4z"/>
                    </g>
                    <g className='f7'>
                        <path d="M640.5,152.6h2.8l12.7,34c0.7,2,1.6,5,1.6,5h0.1c0,0,0.9-3.1,1.6-5l12.7-34h2.8l-15.7,42h-2.8L640.5,152.6z"
                            />
                        <path d="M692.6,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                            C677.1,170.7,684,163.9,692.6,163.9z M692.6,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                            C679.7,187,685.5,192.9,692.6,192.9z"/>
                        <path d="M716.1,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                        <path d="M750.4,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                            c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                            c-7.3,0-10.9-4.3-10.9-4.3L750.4,189.1z"/>
                        <path d="M810.3,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                            c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                            C791.7,176.4,804.9,176.3,810.3,176.3z M802,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                            C794.3,189.6,796.9,193,802,193z"/>
                        <path d="M824.9,164.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                            c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V164.6z M837.8,192.9
                            c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C827.4,186.3,831.1,192.9,837.8,192.9z"/>
                        <path d="M859.7,164.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                            c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8H862c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V164.6z M872.6,192.9
                            c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C862.1,186.3,865.8,192.9,872.6,192.9z"/>
                        <path d="M894,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                        <path d="M925.6,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5L925,164.6h2.7l9.9,23.9
                            c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                            L925.6,203.4z"/>
                        <path d="M971.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C956.5,169.5,963.4,163.9,971.1,163.9z
                             M980.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H980.7z"/>
                        <path d="M991.8,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                            c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L991.8,164.6L991.8,164.6z"/>
                        <path d="M1044.8,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                            c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                            C1026.2,176.4,1039.5,176.3,1044.8,176.3z M1036.5,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                            C1028.8,189.6,1031.4,193,1036.5,193z"/>
                        <path d="M1055.2,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                            L1055.2,164.6z"/>
                        <path d="M1100.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                            c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1085.5,169.5,1092.4,163.9,1100.1,163.9z
                             M1109.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1109.7z"/>
                        <path d="M1134.1,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                            c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                            C1118.7,170.1,1125.8,163.9,1134.1,163.9z"/>
                    </g>
                    <g className='f7_1'>
                        <path d="M681.8,254h7.3v3.5c0,1.1-0.1,2.1-0.1,2.1h0.1c1.3-2.6,4.7-6.4,10.9-6.4c6.8,0,10.6,3.5,10.6,11.6v19.7H703
                            v-18.1c0-3.7-1-6.2-4.9-6.2c-4.1,0-7.1,2.6-8.2,6.2c-0.4,1.3-0.5,2.6-0.5,4.1v14h-7.6V254z"/>
                        <path d="M733.1,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16S723.8,253.3,733.1,253.3z
                             M733.1,278.8c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5C724,275,728.1,278.8,733.1,278.8z"/>
                        <path d="M757.4,260.5h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.5z"/>
                        <path d="M778.7,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L778.7,254L778.7,254z"/>
                        <path d="M815.6,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C800.1,259.9,806.5,253.3,815.6,253.3z
                             M821.5,265.5c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H821.5z"/>
                        <path d="M866,253.3c8,0,11.8,4.6,11.8,4.6l-3.4,5.2c0,0-3.2-3.3-8-3.3c-5.6,0-9.3,4.3-9.3,9.5s3.7,9.6,9.5,9.6
                            c5.2,0,9-3.9,9-3.9l2.9,5.4c0,0-4.4,5-12.6,5c-10.1,0-16.6-7.1-16.6-16C849.4,260.6,855.9,253.3,866,253.3z"/>
                        <path d="M884.3,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L884.3,254L884.3,254z"/>
                        <path d="M921.3,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C905.7,259.9,912.1,253.3,921.3,253.3z
                             M927.1,265.5c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H927.1z M922.3,242.1h7.9l-6.3,8.2h-6.1L922.3,242.1z"/>
                        <path d="M956.7,265.4h1V265c0-4-2.5-5.4-5.9-5.4c-4.4,0-8.4,2.9-8.4,2.9l-2.9-5.5c0,0,4.7-3.8,12-3.8
                            c8,0,12.7,4.4,12.7,12.2v19.1h-7V282c0-1.2,0.1-2.2,0.1-2.2h-0.1c0.1,0-2.3,5.4-9.3,5.4c-5.5,0-10.4-3.4-10.4-9.5
                            C938.5,266.1,951.7,265.4,956.7,265.4z M950.8,279.4c4,0,6.9-4.3,6.9-8v-0.7h-1.3c-3.9,0-10.2,0.5-10.2,4.8
                            C946.2,277.5,947.7,279.4,950.8,279.4z"/>
                        <path d="M974.3,260.5h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.5z"/>
                        <path d="M995.6,242h7.6v6.8h-7.6V242z M995.6,254h7.6v30.6h-7.6V254z"/>
                        <path d="M1007.4,254h8l6.4,19c0.6,1.8,1,4.6,1.1,4.6h0.1c0.1,0,0.5-2.8,1.1-4.6l6.4-19h8l-11,30.6h-9L1007.4,254z"/>
                        <path d="M1042.8,242h7.6v6.8h-7.6V242z M1042.8,254h7.6v30.6h-7.6V254z"/>
                        <path d="M1060.1,260.5h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.5z"/>
                        <path d="M1094.8,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9H1087c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C1079.2,259.9,1085.7,253.3,1094.8,253.3z
                             M1100.7,265.5c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H1100.7z M1095.9,242.1h7.9l-6.3,8.2h-6.1L1095.9,242.1z"/>
                    </g>
                    <g className='f7_2'>
                        <path d="M720.4,254h7.3v3.5c0,1.1-0.1,2.1-0.1,2.1h0.1c1.3-2.6,4.7-6.4,10.9-6.4c6.8,0,10.6,3.5,10.6,11.6v19.7h-7.6
                            v-18.1c0-3.7-1-6.2-4.9-6.2c-4.1,0-7.1,2.6-8.2,6.2c-0.4,1.3-0.5,2.6-0.5,4.1v14h-7.6V254z"/>
                        <path d="M771.7,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C754.9,260,762.4,253.3,771.7,253.3z M771.8,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5
                            C762.6,275,766.8,278.9,771.8,278.9z"/>
                        <path d="M796,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M817.3,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L817.3,254L817.3,254z"/>
                        <path d="M854.3,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C838.7,259.9,845.1,253.3,854.3,253.3z
                             M860.1,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H860.1z"/>
                        <path d="M890.3,254h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6L890.3,254L890.3,254z"/>
                        <path d="M927.2,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C911.7,259.9,918.1,253.3,927.2,253.3z
                             M933.1,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H933.1z M928.3,242.1h7.9l-6.3,8.2h-6.1L928.3,242.1z"/>
                        <path d="M948,275.5c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L948,275.5z"/>
                        <path d="M987.6,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C972,259.9,978.4,253.3,987.6,253.3z M993.4,265.6
                            c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H993.4z"/>
                        <path d="M1023,265.4h1V265c0-4-2.5-5.4-5.9-5.4c-4.4,0-8.4,2.9-8.4,2.9l-2.9-5.5c0,0,4.7-3.8,12-3.8
                            c8,0,12.7,4.4,12.7,12.2v19.1h-7V282c0-1.2,0.1-2.2,0.1-2.2h-0.1c0.1,0-2.3,5.4-9.3,5.4c-5.5,0-10.4-3.4-10.4-9.5
                            C1004.8,266.1,1018,265.4,1023,265.4z M1017.1,279.4c4,0,6.9-4.3,6.9-8v-0.7h-1.3c-3.9,0-10.2,0.5-10.2,4.8
                            C1012.5,277.5,1014,279.4,1017.1,279.4z"/>
                        <path d="M1039,254h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6h-7.3v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2h-0.1c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6L1039,254L1039,254z"/>
                    </g>
                    <g className='f7_3'>
                        <path d="M760.8,254h7.3v3.5c0,1.1-0.1,2.1-0.1,2.1h0.1c1.3-2.6,4.7-6.4,10.9-6.4c6.8,0,10.6,3.5,10.6,11.6v19.7H782
                            v-18.1c0-3.7-1-6.2-4.9-6.2c-4.1,0-7.1,2.6-8.2,6.2c-0.4,1.3-0.5,2.6-0.5,4.1v14h-7.6V254z"/>
                        <path d="M812.1,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C795.3,260,802.8,253.3,812.1,253.3z M812.1,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5
                            S807.1,278.9,812.1,278.9z"/>
                        <path d="M836,275.5c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L836,275.5z"/>
                        <path d="M893.3,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C876.5,260,884,253.3,893.3,253.3z M893.4,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5s-9.1,3.9-9.1,9.5
                            C884.2,275,888.4,278.9,893.4,278.9z"/>
                        <path d="M915.9,254h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6h-7.3v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2h-0.1c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6V254z"/>
                        <path d="M954.1,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M975.4,242h7.6v6.8h-7.6V242z M975.4,254h7.6v30.6h-7.6V254z"/>
                        <path d="M991,242h7.6v32c0,3.4,1.1,4.2,3.1,4.2c0.6,0,1.1-0.1,1.1-0.1v6.7c0,0-1.1,0.2-2.4,0.2
                            c-4.2,0-9.4-1.1-9.4-9.8L991,242L991,242z"/>
                        <path d="M1009.4,275.5c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L1009.4,275.5z"/>
                    </g>
                </g>
                <g className="f6">
                    <path className="f6_1" d="M634.7,152.6h13.8c7.3,0,12.8,4.6,12.8,12.2s-5.5,12.4-12.8,12.4h-11.2v17.4h-2.6V152.6z M648.4,174.8
                        c6.1,0,10.2-3.7,10.2-10s-4.1-9.8-10.2-9.8h-11.1v19.8H648.4z"/>
                    <path className="f6_1" d="M682.1,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C666.6,170.7,673.6,163.9,682.1,163.9z M682.1,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C669.2,187,675,192.9,682.1,192.9z"/>
                    <path className="f6_1" d="M705.6,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f6_1" d="M740.9,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L740.9,164.6L740.9,164.6z"/>
                    <path className="f6_1" d="M774.1,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L774.1,203.4z"/>
                    <path className="f6_1" d="M839.9,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7H842c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C821.3,176.4,834.5,176.3,839.9,176.3z M831.6,193c6.5,0,10.3-6.8,10.3-12.7v-1.6H840c-5.1,0-16,0-16,7.8
                        C823.9,189.6,826.5,193,831.6,193z"/>
                    <path className="f6_1" d="M854.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L854.5,164.6L854.5,164.6z"/>
                    <path className="f6_1" d="M874.8,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L874.8,164.6L874.8,164.6z"/>
                    <path className="f6_1" d="M894.8,152.6h3v4.4h-3V152.6z M895.1,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f6_1" d="M904,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4L904,164.6z"
                        />
                    <path className="f6_1" d="M948.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C934.2,169.5,941.1,163.9,948.8,163.9z
                         M958.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H958.4z"/>
                    <path className="f6_1" d="M969.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L969.5,164.6L969.5,164.6z"/>
                    <path className="f6_1" d="M988.3,190.9h3.4l-4,9.3h-2.5L988.3,190.9z"/>
                    <path className="f6_1" d="M1018.6,152.6h3v4.4h-3V152.6z M1018.8,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f6_1" d="M1031.6,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L1031.6,152.6L1031.6,152.6z"/>
                    <path className="f6_1" d="M1063.6,167.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3h-8.2v27.5h-2.5L1063.6,167.1L1063.6,167.1z"/>
                    <path className="f6_1" d="M1096.7,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1078.1,176.4,1091.4,176.3,1096.7,176.3z M1088.5,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1080.8,189.6,1083.4,193,1088.5,193z"/>
                    <path className="f6_1" d="M1111,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f6_1" d="M1147.2,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>

                    <path className="f6_2" d="M703.8,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30H726v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f6_2" d="M739.1,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f6_2" d="M790.8,254.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V254.6z M803.7,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C793.3,276.3,797,282.9,803.7,282.9z"/>
                    <path className="f6_2" d="M825.3,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L825.3,242.6L825.3,242.6z"/>
                    <path className="f6_2" d="M855.5,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C836.9,266.4,850.2,266.3,855.5,266.3z M847.2,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C839.6,279.6,842.1,283,847.2,283z"/>
                    <path className="f6_2" d="M870.2,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f6_2" d="M921,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L921,279.1z"/>
                    <path className="f6_2" d="M961.4,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C945.9,260.7,952.8,253.9,961.4,253.9z M961.4,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        S954.3,282.9,961.4,282.9z"/>
                    <path className="f6_2" d="M985,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3L985,242.6L985,242.6z"/>
                    <path className="f6_2" d="M998.8,242.6h3v4.4h-3V242.6z M999.1,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f6_2" d="M1023.6,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1010.2,260.1,1015.8,253.9,1023.6,253.9z M1023.3,282.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1012.8,277.7,1017.1,282.9,1023.3,282.9z"/>
                    <path className="f6_2" d="M1059.4,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1044.9,259.5,1051.8,253.9,1059.4,253.9z
                         M1069,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1069z"/>
                    <path className="f6_2" d="M1080.1,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f5">
                    <path d="M624.5,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C605.9,176.4,619.1,176.3,624.5,176.3z M616.2,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C608.5,189.6,611.1,193,616.2,193z M612.3,152.6h3.4l4,6.7H617L612.3,152.6z"/>
                    <path d="M655.7,164.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8H658c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V164.6z M668.6,192.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C658.2,186.3,661.9,192.9,668.6,192.9z"/>
                    <path d="M706.6,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C688,176.4,701.3,176.3,706.6,176.3z M698.3,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C690.6,189.6,693.2,193,698.3,193z"/>
                    <path d="M721.2,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M754.2,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S745.8,163.9,754.2,163.9z"
                        />
                    <path d="M787,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C771.5,170.7,778.4,163.9,787,163.9z M787,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C774.1,187,779.9,192.9,787,192.9z"/>
                    <path d="M810.5,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M845.7,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M865.8,152.6h3v4.4h-3V152.6z M866,164.6h2.5v30H866V164.6z"/>
                    <path d="M879.1,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M915.7,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M942.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C927.7,169.5,934.6,163.9,942.3,163.9z
                         M951.9,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H951.9z"/>
                    <path d="M979.6,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V164.6z"/>
                    <path d="M1048,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1032.5,170.7,1039.4,163.9,1048,163.9z M1048,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1035.1,187,1040.9,192.9,1048,192.9z"/>
                    <path d="M1071.9,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M1118.5,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1105.1,170.1,1110.6,163.9,1118.5,163.9z M1118.1,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1107.7,187.7,1112,192.9,1118.1,192.9z"/>
                    <path d="M1154.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1139.7,169.5,1146.6,163.9,1154.3,163.9z
                         M1163.9,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1163.9z"/>
                    <path d="M1175,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
                <g className="f4">
                    <path className="f4_1" d="M617.3,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C598.7,176.4,612,176.3,617.3,176.3z M609.1,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C601.4,189.6,604,193,609.1,193z M605.2,152.6h3.4l4,6.7h-2.6L605.2,152.6z"/>
                    <path className="f4_1" d="M662,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C646.5,170.1,653.6,163.9,662,163.9z"/>
                    <path className="f4_1" d="M694.8,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C679.3,170.7,686.2,163.9,694.8,163.9z M694.8,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C681.9,187,687.7,192.9,694.8,192.9z"/>
                    <path className="f4_1" d="M718.7,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f4_1" d="M765.3,163.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C751.9,170.1,757.4,163.9,765.3,163.9z M764.9,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C754.5,187.7,758.8,192.9,764.9,192.9z"/>
                    <path className="f4_1" d="M788.2,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f4_1" d="M836,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H824c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C821.4,169.5,828.3,163.9,836,163.9z M845.6,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H845.6z M838.7,152.6h3.4l-4.7,6.7h-2.6L838.7,152.6z"/>
                    <path className="f4_1" d="M856.7,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f4_1" d="M876.7,152.6h3v4.4h-3V152.6z M877,164.6h2.5v30H877V164.6z"/>
                    <path className="f4_1" d="M890,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13H890V164.6z"/>
                    <path className="f4_1" d="M926.6,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path className="f4_1" d="M953.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C938.6,169.5,945.5,163.9,953.2,163.9z
                         M962.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H962.8z"/>
                    <path className="f4_1" d="M990.5,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V164.6z"/>
                    <path className="f4_1" d="M1061.8,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1043.2,176.4,1056.4,176.3,1061.8,176.3z M1053.5,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1045.8,189.6,1048.4,193,1053.5,193z"/>
                    <path className="f4_1" d="M1076.4,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f4_1" d="M1109.3,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C1093.9,170.1,1101,163.9,1109.3,163.9z"/>
                    <path className="f4_1" d="M1129,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path className="f4_1" d="M1176.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1162.1,169.5,1169,163.9,1176.7,163.9z
                         M1186.3,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1186.3z M1179.4,152.6h3.4l-4.7,6.7h-2.6L1179.4,152.6z"/>

                    <path className="f4_2" d="M685.6,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f4_2" d="M734.1,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C718.6,260.7,725.5,253.9,734.1,253.9z M734.1,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C721.2,277,727,282.9,734.1,282.9z"/>
                    <path className="f4_2" d="M758,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13H758V254.6z"/>
                    <path className="f4_2" d="M789.3,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C775.9,260.1,781.4,253.9,789.3,253.9z M788.9,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C778.5,277.7,782.8,282.9,788.9,282.9z"/>
                    <path className="f4_2" d="M809.8,266.4h16.6v2.4h-16.6V266.4z"/>
                    <path className="f4_2" d="M850.1,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C831.5,266.4,844.8,266.3,850.1,266.3z M841.9,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C834.2,279.6,836.8,283,841.9,283z"/>
                    <path className="f4_2" d="M864.8,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6H886v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V254.6z"/>
                    <path className="f4_2" d="M932.3,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C917.8,259.5,924.7,253.9,932.3,253.9z
                         M941.9,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H941.9z M935.1,242.6h3.4l-4.7,6.7h-2.6L935.1,242.6z"/>
                    <path className="f4_2" d="M953,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13H953V254.6z"/>
                    <path className="f4_2" d="M973.1,242.6h3v4.4h-3V242.6z M973.3,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f4_2" d="M999.8,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C984.3,260.1,991.4,253.9,999.8,253.9z"/>
                    <path className="f4_2" d="M1035.6,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1017,266.4,1030.3,266.3,1035.6,266.3z M1027.3,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1019.6,279.6,1022.2,283,1027.3,283z"/>
                    <path className="f4_2" d="M1050,242.6h3v4.4h-3V242.6z M1050.2,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f4_2" d="M1063.3,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f4_2" d="M1099.1,280.9h3.4l-4,9.3h-2.5L1099.1,280.9z"/>
                </g>
                <g className="f3">
                    <path d="M577.9,151.9c10,0,15,5.3,15,5.3l-1.6,1.9c0,0-5-4.7-13.4-4.7c-10.3,0-18.2,8.1-18.2,19
                        c0,10.9,7.8,19.6,18.4,19.6c9,0,14.2-5.7,14.2-5.7l1.6,1.8c0,0-5.6,6.4-15.8,6.4c-12.2,0-21.1-9.8-21.1-22
                        C557.1,161.1,566.1,151.9,577.9,151.9z"/>
                    <path d="M615.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C600.7,169.5,607.6,163.9,615.2,163.9z
                         M624.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H624.8z"/>
                    <path d="M635.6,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M649.4,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M676,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C661.4,169.5,668.3,163.9,676,163.9z M685.6,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H685.6z"/>
                    <path d="M724.8,163.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C711.4,170.1,716.9,163.9,724.8,163.9z M724.4,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C714,187.7,718.3,192.9,724.4,192.9z"/>
                    <path d="M747.7,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5H770c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M783.6,152.1h3.1l-2.9,9.1h-2.3L783.6,152.1z"/>
                    <path d="M808.1,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C792.6,170.7,799.6,163.9,808.1,163.9z M808.1,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C795.2,187,801,192.9,808.1,192.9z"/>
                    <path d="M832,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6H832V164.6z"/>
                    <path d="M879.6,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L879.6,164.6z"/>
                    <path d="M925.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C909.7,170.7,916.7,163.9,925.3,163.9z M925.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C912.4,187,918.1,192.9,925.3,192.9z"/>
                    <path d="M948.9,152.6h3v4.4h-3V152.6z M949.1,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M963.2,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M1013.8,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C995.2,176.4,1008.5,176.3,1013.8,176.3z M1005.5,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C997.9,189.6,1000.4,193,1005.5,193z"/>
                    <path d="M1028.2,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M1042,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M1068.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1054,169.5,1060.9,163.9,1068.5,163.9z
                         M1078.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1078.1z"/>
                    <path d="M1089.2,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M1125.8,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M1153.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1137.7,170.7,1144.7,163.9,1153.3,163.9z M1153.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1140.4,187,1146.1,192.9,1153.3,192.9z"/>
                    <path d="M1176.9,152.6h3v4.4h-3V152.6z M1177.1,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M1190.2,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M1226,190.9h3.4l-4,9.3h-2.5L1226,190.9z"/>
                </g>
                <g className="f2">
                    <path d="M606.7,152.6h23v2.4h-20.4v17.2H626v2.4h-16.7v17.6h21.5v2.4h-24.1V152.6z"/>
                    <path d="M640.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M688.4,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.8,4.6-11,4.7l-0.5,2.9c2.5,0.4,4.1,1.9,4.1,4.1c0,3.3-2.6,4.6-5.5,4.6
                        c-1.6,0-2.6-0.2-2.6-0.2v-2.3c0,0,1.1,0.3,2.5,0.3c1.6,0,3.2-0.5,3.2-2.2c0-1.4-1.3-2.3-3.7-2.3c-0.4,0-0.7,0.1-0.7,0.1l1.1-5
                        c-7.7-0.8-13.7-6.7-13.7-15.5C672.9,170.1,680,163.9,688.4,163.9z"/>
                    <path d="M724.2,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C705.6,176.4,718.8,176.3,724.2,176.3z M715.9,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C708.2,189.6,710.8,193,715.9,193z"/>
                    <path d="M739.4,190.9h3.4l-4,9.3h-2.5L739.4,190.9z"/>
                    <path d="M783.3,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C767.8,170.1,774.9,163.9,783.3,163.9z"/>
                    <path d="M803.6,152.1h3.1l-2.9,9.1h-2.3L803.6,152.1z"/>
                    <path d="M827.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C812.7,169.5,819.6,163.9,827.3,163.9z
                         M836.9,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H836.9z"/>
                    <path d="M847,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L847,189.1z"/>
                    <path d="M875.1,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M905.4,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30H917L905.4,164.6
                        z"/>
                    <path d="M951,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C935.5,170.7,942.4,163.9,951,163.9z M951,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        S943.9,192.9,951,192.9z"/>
                    <path d="M975.9,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M993.7,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5L993.7,164.6L993.7,164.6z"/>
                    <path d="M1025.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1011.2,169.5,1018.1,163.9,1025.8,163.9z
                         M1035.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1035.4z"/>
                    <path d="M1062.9,152.6h3v4.4h-3V152.6z M1063.1,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M1087.6,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1074.2,170.1,1079.8,163.9,1087.6,163.9z M1087.3,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1076.8,187.7,1081.2,192.9,1087.3,192.9z"/>
                    <path d="M1123.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1108.9,169.5,1115.8,163.9,1123.5,163.9z
                         M1133.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1133.1z M1126.2,152.6h3.4l-4.7,6.7h-2.6L1126.2,152.6z"/>
                    <path d="M1156.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1142.1,169.5,1149,163.9,1156.6,163.9z
                         M1166.2,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1166.2z"/>
                    <path d="M1177.3,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
                <g className="f1">
                    <path d="M725.4,151.9c10,0,15,5.3,15,5.3l-1.6,1.9c0,0-5-4.7-13.4-4.7c-10.3,0-18.2,8.1-18.2,19S715,193,725.6,193
                        c9,0,14.2-5.7,14.2-5.7l1.6,1.8c0,0-5.5,6.2-15.4,6.4l-0.5,2.9c2.5,0.4,4.1,1.9,4.1,4.1c0,3.3-2.6,4.6-5.5,4.6
                        c-1.6,0-2.6-0.2-2.6-0.2v-2.3c0,0,1.1,0.3,2.5,0.3c1.6,0,3.2-0.5,3.2-2.2c0-1.4-1.3-2.3-3.7-2.3c-0.4,0-0.7,0.1-0.7,0.1l1-4.9
                        c-11.3-0.8-19.3-10.3-19.3-22C704.6,161.1,713.6,151.9,725.4,151.9z"/>
                    <path d="M766.4,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C747.8,176.4,761.1,176.3,766.4,176.3z M758.1,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C750.5,189.6,753,193,758.1,193z"/>
                    <path d="M781.7,190.9h3.4l-4,9.3h-2.5L781.7,190.9z"/>
                    <path d="M825.5,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C810,170.1,817.2,163.9,825.5,163.9z"/>
                    <path d="M845.8,152.1h3.1l-2.9,9.1h-2.3L845.8,152.1z"/>
                    <path d="M869.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C854.9,169.5,861.8,163.9,869.5,163.9z
                         M879.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H879.1z"/>
                    <path d="M889.2,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L889.2,189.1z"/>
                    <path d="M917.3,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M947.6,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L947.6,164.6z"/>
                    <path d="M993.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C977.7,170.7,984.7,163.9,993.3,163.9z M993.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C980.4,187,986.1,192.9,993.3,192.9z"/>
                    <path d="M1016.7,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7L1016.7,164.6L1016.7,164.6z"/>
                    <path d="M1051,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1051,189.1z"/>
                    <path d="M1078.2,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
            </g>
            <g className='en'>
                <g className="f1">
                    <path d="M754.2,155h-15.7v-2.4h33.9v2.4h-15.7v39.6h-2.6V155z"/>
                    <path d="M778.2,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path d="M813.2,152.6h3v4.4h-3V152.6z M813.4,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M825.5,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L825.5,189.1z"/>
                    <path d="M853.2,190.9h3.4l-4,9.3h-2.5L853.2,190.9z"/>
                    <path d="M883.5,152.6h3v4.4h-3V152.6z M883.7,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M895.8,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L895.8,189.1z"/>
                    <path d="M935.9,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9c0.6,1.4,1.1,2.8,1.1,2.8h0.1
                        c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7L935.9,203.4z"/>
                    <path d="M982.2,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C966.7,170.7,973.6,163.9,982.2,163.9z M982.2,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1
                        c-7.1,0-12.9,5.6-12.9,13.1C969.3,187,975.1,192.9,982.2,192.9z"/>
                    <path d="M1005.7,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3c0-1.4,0.2-2.5,0.2-2.5
                        h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M1041,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
                <g className="f2">
                    <path d="M637.3,180.1h-17.8l-5.4,14.5h-2.8l15.7-42h2.8l15.7,42h-2.8L637.3,180.1z M628.4,155.6c0,0-0.9,3.2-1.6,5l-6.4,17h16
                        l-6.4-17c-0.7-1.8-1.6-5-1.6-5H628.4z"/>
                    <path d="M651.9,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M698.5,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3h-0.1
                        c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C685.1,170.1,690.7,163.9,698.5,163.9z M698.2,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C687.7,187.7,692,192.9,698.2,192.9z"/>
                    <path d="M739.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3H742v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M757.3,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path d="M792.2,152.6h3v4.4h-3V152.6z M792.5,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M804.6,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L804.6,189.1z"/>
                    <path d="M832.3,190.9h3.4l-4,9.3h-2.5L832.3,190.9z"/>
                    <path d="M862.6,152.6h3v4.4h-3V152.6z M862.8,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M874.9,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L874.9,189.1z"/>
                    <path d="M915,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9c0.6,1.4,1.1,2.8,1.1,2.8h0.1
                        c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7L915,203.4z"/>
                    <path d="M961.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C945.8,170.7,952.7,163.9,961.3,163.9z M961.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C948.4,187,954.2,192.9,961.3,192.9z"/>
                    <path d="M984.8,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3c0-1.4,0.2-2.5,0.2-2.5
                        h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path d="M1020.1,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5c0,0-0.7-0.1-1.4-0.1
                        c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M1056.7,152.6h3v4.4h-3V152.6z M1057,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M1081.5,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3h-0.1
                        c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1068.1,170.1,1073.6,163.9,1081.5,163.9z M1081.1,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1070.7,187.7,1075,192.9,1081.1,192.9z"/>
                    <path d="M1117.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7c5.8,0,9.3-3.8,9.3-3.8
                        l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1102.7,169.5,1109.6,163.9,1117.3,163.9z M1126.9,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1126.9z"/>
                    <path d="M1154.2,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3c6.9,0,10.6,3.8,10.6,11.3
                        v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1135.6,176.4,1148.8,176.3,1154.2,176.3z M1145.9,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1138.2,189.6,1140.8,193,1145.9,193z"/>
                    <path d="M1168.8,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
                <g className="f3">
                    <path d="M523.1,180.1h-17.8l-5.4,14.5h-2.8l15.7-42h2.8l15.7,42h-2.8L523.1,180.1z M514.1,155.6c0,0-0.9,3.2-1.6,5
                        l-6.4,17h16l-6.4-17c-0.7-1.8-1.6-5-1.6-5H514.1z"/>
                    <path d="M537.6,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M589.2,152.6h3v4.4h-3V152.6z M589.4,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M614,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C600.5,170.1,606.1,163.9,614,163.9z M613.6,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C603.2,187.7,607.5,192.9,613.6,192.9z"/>
                    <path d="M649.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C635.2,169.5,642.1,163.9,649.8,163.9z
                         M659.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H659.4z"/>
                    <path d="M686.6,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C668,176.4,681.3,176.3,686.6,176.3z M678.3,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C670.7,189.6,673.2,193,678.3,193z"/>
                    <path d="M718.8,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M736.7,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path d="M788,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4H790v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C769.4,176.4,782.7,176.3,788,176.3z M779.7,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C772.1,189.6,774.6,193,779.7,193z"/>
                    <path d="M803.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3H806v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M833.9,164.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L833.9,164.6z"/>
                    <path d="M898.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C883.6,169.5,890.5,163.9,898.2,163.9z
                         M907.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H907.8z"/>
                    <path d="M934.6,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L934.6,189.1z"/>
                    <path d="M974.2,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C959.6,169.5,966.5,163.9,974.2,163.9z
                         M983.8,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H983.8z"/>
                    <path d="M1007.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C992.8,169.5,999.7,163.9,1007.4,163.9z
                         M1017,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1017z"/>
                    <path d="M1054.6,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5c0-9.4,5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C1046.5,202.6,1050.3,204.7,1054.6,204.7z M1066,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C1061.5,192.1,1066,188.8,1066,179.1z"/>
                    <path d="M1092.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1076.8,170.7,1083.8,163.9,1092.4,163.9z M1092.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1079.5,187,1085.2,192.9,1092.4,192.9z"/>
                    <path d="M1116,152.6h3v4.4h-3V152.6z M1116.3,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M1129.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M1174.4,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5c0-9.4,5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C1166.4,202.6,1170.1,204.7,1174.4,204.7z M1185.9,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C1181.3,192.1,1185.9,188.8,1185.9,179.1z"/>
                    <path d="M1216.8,167.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3h-8.2v27.5h-2.5V167.1z"/>
                    <path d="M1249.9,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1231.3,176.4,1244.6,176.3,1249.9,176.3z M1241.7,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1234,189.6,1236.6,193,1241.7,193z"/>
                    <path d="M1264.6,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M1283.4,190.9h3.4l-4,9.3h-2.5L1283.4,190.9z"/>
                </g>
                <g className="f4">
                    <path className="f4_1" d="M618.7,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C603.2,170.1,610.3,163.9,618.7,163.9z"/>
                    <path className="f4_1" d="M651.5,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C635.9,170.7,642.9,163.9,651.5,163.9z M651.5,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C638.6,187,644.3,192.9,651.5,192.9z"/>
                    <path className="f4_1" d="M675.4,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f4_1" d="M722,163.9c7.6,0,10.3,6.7,10.3,6.7h0.1c0,0-0.2-1-0.2-2.4v-3.6h2.5v42h-2.5v-15.4c0-1.6,0.2-2.6,0.2-2.6
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C708.5,170.1,714.1,163.9,722,163.9z M721.6,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C711.2,187.7,715.5,192.9,721.6,192.9z"/>
                    <path className="f4_1" d="M744.9,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f4_1" d="M792.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C778.1,169.5,785,163.9,792.7,163.9z M802.3,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H802.3z"/>
                    <path className="f4_1" d="M813.4,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f4_1" d="M833.4,152.6h3v4.4h-3V152.6z M833.6,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f4_1" d="M846.7,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f4_1" d="M891.8,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C883.7,202.6,887.5,204.7,891.8,204.7z M903.2,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C898.7,192.1,903.2,188.8,903.2,179.1z"/>
                    <path className="f4_1" d="M933.8,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f4_1" d="M951.7,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path className="f4_1" d="M999.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C984.8,169.5,991.7,163.9,999.4,163.9z
                         M1009,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1009z"/>
                    <path className="f4_1" d="M1037.9,152.6h2.4l23.9,32.9c1.4,1.9,3.4,5.3,3.4,5.3h0.1c0,0-0.3-3.2-0.3-5.3v-32.9h2.6v42h-2.4l-23.9-32.9
                        c-1.4-1.9-3.4-5.3-3.4-5.3h-0.1c0,0,0.3,3.2,0.3,5.3v32.9h-2.6V152.6z"/>
                    <path className="f4_1" d="M1095.1,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1079.6,170.7,1086.5,163.9,1095.1,163.9z M1095.1,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1082.2,187,1088,192.9,1095.1,192.9z"/>
                    <path className="f4_1" d="M1119,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f4_1" d="M1140.2,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f4_1" d="M1158.1,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>

                    <path className="f4_2" d="M683.8,270.1H666l-5.4,14.5h-2.8l15.7-42h2.8l15.7,42h-2.8L683.8,270.1z M674.9,245.6c0,0-0.9,3.2-1.6,5
                        l-6.4,17h16l-6.4-17c-0.7-1.8-1.6-5-1.6-5H674.9z"/>
                    <path className="f4_2" d="M698.4,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V254.6z"/>
                    <path className="f4_2" d="M765.9,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H754c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C751.4,259.5,758.3,253.9,765.9,253.9z
                         M775.5,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H775.5z"/>
                    <path className="f4_2" d="M786.6,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f4_2" d="M806.7,242.6h3v4.4h-3V242.6z M806.9,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f4_2" d="M833.4,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C817.9,260.1,825,253.9,833.4,253.9z"/>
                    <path className="f4_2" d="M869.2,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C850.6,266.4,863.8,266.3,869.2,266.3z M860.9,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C853.2,279.6,855.8,283,860.9,283z"/>
                    <path className="f4_2" d="M883.8,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f4_2" d="M935.6,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19H978v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V254.6z"/>
                    <path className="f4_2" d="M1006.8,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C988.2,266.4,1001.5,266.3,1006.8,266.3z M998.5,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C990.9,279.6,993.4,283,998.5,283z"/>
                    <path className="f4_2" d="M1021.5,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f4_2" d="M1041.7,242.6h2.5v23.8h5.3l9.7-11.8h3.3l-10.9,12.9v0.1l11.9,17h-3.2l-10.9-15.8h-5.3v15.8h-2.5V242.6z"/>
                    <path className="f4_2" d="M1082.5,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1068,259.5,1074.9,253.9,1082.5,253.9z
                         M1092.1,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1092.1z"/>
                    <path className="f4_2" d="M1104.2,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f4_2" d="M1122.7,280.9h3.4l-4,9.3h-2.5L1122.7,280.9z"/>
                </g>
                <g className="f5">
                    <path d="M598.7,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C580.1,176.4,593.3,176.3,598.7,176.3z M590.4,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C582.7,189.6,585.3,193,590.4,193z"/>
                    <path d="M613.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path d="M659.9,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C646.5,170.1,652.1,163.9,659.9,163.9z M659.6,192.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C649.1,187.7,653.4,192.9,659.6,192.9z"/>
                    <path d="M700.8,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M718.7,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M755.1,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C736.5,176.4,749.8,176.3,755.1,176.3z M746.9,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C739.2,189.6,741.8,193,746.9,193z"/>
                    <path d="M765.6,164.6h2.7l9.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l9.2-23.5h2.6l-11.8,30h-2.4
                        L765.6,164.6z"/>
                    <path d="M810.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C795.8,169.5,802.7,163.9,810.4,163.9z M820,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H820z"/>
                    <path d="M830.8,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M844.6,152.6h3v4.4h-3V152.6z M844.9,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M858,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6H858V164.6z"/>
                    <path d="M903,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5c0-9.4,5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C895,202.6,898.7,204.7,903,204.7z M914.5,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C909.9,192.1,914.5,188.8,914.5,179.1z"/>
                    <path d="M945.1,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path d="M963,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6H963V152.6z"/>
                    <path d="M1010.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C996,169.5,1002.9,163.9,1010.6,163.9z
                         M1020.2,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1020.2z"/>
                    <path d="M1043.9,164.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L1043.9,164.6z"/>
                    <path d="M1109.1,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1093.5,170.7,1100.5,163.9,1109.1,163.9z M1109.1,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1096.2,187,1101.9,192.9,1109.1,192.9z"/>
                    <path d="M1132.9,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M1152.9,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M1178.5,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1165,170.1,1170.6,163.9,1178.5,163.9z M1178.1,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1167.7,187.7,1172,192.9,1178.1,192.9z"/>
                    <path d="M1201.8,190.8h3.7v3.8h-3.7V190.8z"/>
                </g>
                <g className="f6">
                    <path className="f6_1" d="M681.1,155h-15.7v-2.4h33.9v2.4h-15.7v39.6h-2.6V155z"/>
                    <path className="f6_1" d="M712.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C696.8,170.7,703.8,163.9,712.4,163.9z M712.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C699.5,187,705.2,192.9,712.4,192.9z"/>
                    <path className="f6_1" d="M762.8,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C754.7,202.6,758.5,204.7,762.8,204.7z M774.2,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C769.7,192.1,774.2,188.8,774.2,179.1z"/>
                    <path className="f6_1" d="M799.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C785.2,169.5,792.1,163.9,799.7,163.9z
                         M809.3,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H809.3z"/>
                    <path className="f6_1" d="M821.4,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f6_1" d="M856.9,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f6_1" d="M874.7,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path className="f6_1" d="M922.4,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C907.8,169.5,914.7,163.9,922.4,163.9z M932,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H932z"/>
                    <path className="f6_1" d="M943.1,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f6_1" d="M975.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C960.5,169.5,967.4,163.9,975.1,163.9z
                         M984.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H984.7z"/>
                    <path className="f6_1" d="M996.4,190.9h3.4l-4,9.3h-2.5L996.4,190.9z"/>
                    <path className="f6_1" d="M1023.2,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L1023.2,203.4z"/>
                    <path className="f6_1" d="M1069.6,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1054,170.7,1061,163.9,1069.6,163.9z M1069.6,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1056.7,187,1062.4,192.9,1069.6,192.9z"/>
                    <path className="f6_1" d="M1093,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>

                    <path className="f6_2" d="M663.9,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f6_2" d="M711.6,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C697,259.5,703.9,253.9,711.6,253.9z M721.2,266.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H721.2z"/>
                    <path className="f6_2" d="M744.8,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C730.2,259.5,737.1,253.9,744.8,253.9z
                         M754.4,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H754.4z"/>
                    <path className="f6_2" d="M776.9,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C763.5,260.1,769.1,253.9,776.9,253.9z M776.6,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C766.1,277.7,770.4,282.9,776.6,282.9z"/>
                    <path className="f6_2" d="M833,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4H835v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C814.4,266.4,827.7,266.3,833,266.3z M824.7,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C817.1,279.6,819.6,283,824.7,283z"/>
                    <path className="f6_2" d="M863.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L863.3,279.1z"/>
                    <path className="f6_2" d="M903.8,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C888.2,260.7,895.2,253.9,903.8,253.9z M903.8,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1
                        c-7.1,0-12.9,5.6-12.9,13.1C890.9,277,896.6,282.9,903.8,282.9z"/>
                    <path className="f6_2" d="M927.3,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path className="f6_2" d="M941.2,242.6h3v4.4h-3V242.6z M941.4,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f6_2" d="M966,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C952.5,260.1,958.1,253.9,966,253.9z M965.6,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C955.2,277.7,959.5,282.9,965.6,282.9z"/>
                    <path className="f6_2" d="M1005.9,254.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V254.6z M1018.8,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C1008.4,276.3,1012.1,282.9,1018.8,282.9z"/>
                    <path className="f6_2" d="M1040.4,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path className="f6_2" d="M1070.6,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1052,266.4,1065.3,266.3,1070.6,266.3z M1062.3,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1054.6,279.6,1057.2,283,1062.3,283z"/>
                    <path className="f6_2" d="M1085.2,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f6_2" d="M1120.4,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f7_main">
                    <g className='f7'>
                        <path d="M626.8,188.1c0,0,4.3,4.7,11.2,4.7c5.2,0,9.4-3.2,9.4-8.3c0-11.9-21.5-8.6-21.5-21.8c0-5.6,5-10.9,12.6-10.9
                            c6.8,0,10.7,3.9,10.7,3.9l-1.4,2.2c0,0-3.6-3.6-9.2-3.6c-6.2,0-10,4.2-10,8.3c0,11.1,21.5,7.7,21.5,21.7c0,6.1-4.7,10.9-12.2,10.9
                            c-8.3,0-12.8-5.2-12.8-5.2L626.8,188.1z"/>
                        <path d="M658.4,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                        <path d="M693.6,164.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                            c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V164.6z M706.5,192.9
                            c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C696.1,186.3,699.8,192.9,706.5,192.9z"/>
                        <path d="M728.4,164.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                            c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V164.6z M741.3,192.9
                            c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C730.8,186.3,734.6,192.9,741.3,192.9z"/>
                        <path d="M776.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                            C760.9,170.7,767.9,163.9,776.4,163.9z M776.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                            C763.5,187,769.3,192.9,776.4,192.9z"/>
                        <path d="M800.3,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                            c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                        <path d="M821.6,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                        <path d="M839.2,152.6h3v4.4h-3V152.6z M839.4,164.6h2.5v30h-2.5V164.6z"/>
                        <path d="M852.5,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19H875v-18.1
                            c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                        <path d="M897.6,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                            c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                            c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C889.5,202.6,893.2,204.7,897.6,204.7z M909,179.1
                            c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C904.5,192.1,909,188.8,909,179.1z"/>
                        <path d="M935,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                            c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                            L935,203.4z"/>
                        <path d="M981.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                            C965.8,170.7,972.7,163.9,981.3,163.9z M981.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                            C968.4,187,974.2,192.9,981.3,192.9z"/>
                        <path d="M1004.8,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                            c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                        <path d="M1052.7,164.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                            c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                            l-8.3,23.3h-2.7L1052.7,164.6z"/>
                        <path d="M1104.3,152.6h3v4.4h-3V152.6z M1104.5,164.6h2.5v30h-2.5V164.6z"/>
                        <path d="M1118.5,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                            c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                        <path d="M1136.4,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                            v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    </g>

                    <g className='f7_1'>
                        <path d="M726.1,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C709.3,260,716.8,253.3,726.1,253.3z M726.2,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C717,275.1,721.2,278.9,726.2,278.9z"/>
                        <path d="M748.7,254.1h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6h-7.3v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2h-0.1c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6V254.1z"/>
                        <path d="M785.6,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M838.2,253.3c8,0,11.8,4.6,11.8,4.6l-3.4,5.2c0,0-3.2-3.3-8-3.3c-5.6,0-9.3,4.3-9.3,9.5
                            c0,5.2,3.7,9.6,9.5,9.6c5.2,0,9-3.9,9-3.9l2.9,5.4c0,0-4.4,5-12.6,5c-10.1,0-16.6-7.1-16.6-16C821.6,260.7,828,253.3,838.2,253.3
                            z"/>
                        <path d="M856.5,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M893.4,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C877.9,259.9,884.3,253.3,893.4,253.3z
                             M899.3,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H899.3z"/>
                        <path d="M928.8,265.5h1V265c0-4-2.5-5.4-5.9-5.4c-4.4,0-8.4,2.9-8.4,2.9l-2.9-5.5c0,0,4.7-3.8,12-3.8
                            c8,0,12.7,4.4,12.7,12.2v19.1h-7v-2.5c0-1.2,0.1-2.2,0.1-2.2h-0.1c0.1,0-2.3,5.4-9.3,5.4c-5.5,0-10.4-3.4-10.4-9.5
                            C910.7,266.1,923.8,265.5,928.8,265.5z M923,279.4c4,0,6.9-4.3,6.9-8v-0.7h-1.3c-3.9,0-10.2,0.5-10.2,4.8
                            C918.4,277.5,919.9,279.4,923,279.4z"/>
                        <path d="M946.5,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M967.8,242.1h7.6v6.8h-7.6V242.1z M967.8,254.1h7.6v30.6h-7.6V254.1z"/>
                        <path d="M979.6,254.1h8l6.4,19c0.6,1.8,1,4.6,1.1,4.6h0.1c0.1,0,0.5-2.8,1.1-4.6l6.4-19h8l-11,30.6h-9L979.6,254.1z"
                            />
                        <path d="M1014.9,242.1h7.6v6.8h-7.6V242.1z M1014.9,254.1h7.6v30.6h-7.6V254.1z"/>
                        <path d="M1032.3,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M1051.9,289.6c0,0,1.7,1.3,3.4,1.3c2.1,0,4.1-1.3,5.3-4l1.1-2.7l-12.9-30.1h8.6l6.4,17.6
                            c0.6,1.6,1.1,4.1,1.1,4.1h0.1c0,0,0.5-2.4,1-4l6-17.8h8.3l-13.7,35.2c-2.2,5.6-6.4,8-11,8c-3.7,0-6.4-2-6.4-2L1051.9,289.6z"/>
                    </g>
                    <g className='f7_2'>
                        <path d="M738.1,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C721.3,260,728.8,253.3,738.1,253.3z M738.1,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C729,275.1,733.2,278.9,738.1,278.9z"/>
                        <path d="M760.6,254.1h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6h-7.3v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2h-0.1c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6V254.1z"/>
                        <path d="M797.6,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M835.8,254.1h7.3v3.5c0,1.1-0.1,2.1-0.1,2.1h0.1c1.3-2.6,4.7-6.4,10.9-6.4c6.8,0,10.6,3.5,10.6,11.6v19.7
                            H857v-18.1c0-3.7-1-6.2-4.9-6.2c-4.1,0-7.1,2.6-8.2,6.2c-0.4,1.3-0.5,2.6-0.5,4.1v14h-7.6V254.1z"/>
                        <path d="M885.9,253.3c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C870.4,259.9,876.8,253.3,885.9,253.3z
                             M891.8,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H891.8z"/>
                        <path d="M907.1,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M925,254.1h8l5.3,20.1c0.4,1.6,0.6,3.2,0.6,3.2h0.1c0,0,0.3-1.6,0.7-3.2l5.6-20h6.8l5.6,20
                            c0.4,1.6,0.7,3.2,0.7,3.2h0.1c0,0,0.2-1.6,0.7-3.2l5.3-20.1h7.9l-9.3,30.6h-8.5l-5.2-17.5c-0.5-1.6-0.8-3.3-0.8-3.3h-0.1
                            c0,0-0.2,1.7-0.7,3.3l-5.2,17.5h-8.5L925,254.1z"/>
                        <path d="M992.2,253.3c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C975.4,260,982.9,253.3,992.2,253.3z M992.2,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C983.1,275.1,987.2,278.9,992.2,278.9z"/>
                        <path d="M1015.2,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M1038.7,242.1h7.6v22.8h3.8l7.4-10.8h8.5l-9.7,13.7v0.1l10.9,16.8h-8.8l-8.1-13.4h-4v13.4h-7.6V242.1z"/>
                    </g>
                    <g className='f7_3'>
                        <path d="M785.2,253.4c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C768.4,260,775.9,253.4,785.2,253.4z M785.3,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C776.2,275.1,780.3,278.9,785.3,278.9z"/>
                        <path d="M807.8,254.1h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6H829v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2H829c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6V254.1z"/>
                        <path d="M844.8,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M884.2,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M920,253.4c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C903.2,260,910.8,253.4,920,253.4z M920.1,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C911,275.1,915.1,278.9,920.1,278.9z"/>
                        <path d="M957.5,253.4c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C940.8,260,948.2,253.4,957.5,253.4z M957.6,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C948.5,275.1,952.6,278.9,957.6,278.9z"/>
                        <path d="M980.1,242.1h7.6V274c0,3.4,1.1,4.2,3.1,4.2c0.6,0,1.1-0.1,1.1-0.1v6.7c0,0-1.1,0.2-2.4,0.2
                            c-4.2,0-9.4-1.1-9.4-9.8V242.1z"/>
                        <path d="M998.5,275.6c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L998.5,275.6z"/>
                    </g>
                    <g className='f7_4'>
                        <path d="M727.5,253.4c9.4,0,16.9,6.7,16.9,16c0,9.4-7.5,16-16.8,16c-9.4,0-16.9-6.6-16.9-16
                            C710.7,260,718.2,253.4,727.5,253.4z M727.6,278.9c4.9,0,9.1-3.8,9.1-9.5c0-5.6-4.1-9.5-9.1-9.5c-5,0-9.1,3.9-9.1,9.5
                            C718.5,275.1,722.6,278.9,727.6,278.9z"/>
                        <path d="M750.1,254.1h7.6v18.1c0,3.7,1,6.2,4.7,6.2c5.5,0,8.6-4.9,8.6-10.3v-14h7.6v30.6h-7.3v-3.5
                            c0-1.2,0.1-2.2,0.1-2.2h-0.1c-1.5,3.2-5.4,6.4-10.6,6.4c-6.5,0-10.6-3.3-10.6-11.6V254.1z"/>
                        <path d="M787.1,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M838.6,253.4c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C823.1,260,829.5,253.4,838.6,253.4z M844.5,265.6
                            c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H844.5z"/>
                        <path d="M869.9,274.2c0,0-0.4,1-0.8,1.6l-5.3,8.9h-8.5l10.1-15.5l-9.8-15.1h8.6l4.7,8.3c0.5,0.8,1,1.9,1,1.9h0.1
                            c0,0,0.5-1.1,1-1.9l4.7-8.3h8.6l-9.8,15.1l10.1,15.5h-8.5l-5.3-8.9c-0.4-0.7-0.8-1.6-0.8-1.6H869.9z"/>
                        <path d="M889.9,254.1h7v2.2c0,1.1-0.1,2.1-0.1,2.1h0.1c0,0,2.6-5,9.8-5c8.3,0,13.6,6.5,13.6,16c0,9.7-5.9,16-14,16
                            c-6.1,0-8.8-4.2-8.8-4.2h-0.1c0,0,0.1,1.1,0.1,2.6v12.8h-7.6V254.1z M904.9,279c4.2,0,7.7-3.4,7.7-9.5c0-5.8-3.1-9.6-7.6-9.6
                            c-4,0-7.7,2.9-7.7,9.7C897.3,274.3,899.9,279,904.9,279z"/>
                        <path d="M939.9,253.4c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C924.4,260,930.8,253.4,939.9,253.4z M945.8,265.6
                            c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H945.8z"/>
                        <path d="M959.8,254.1h7.3v5.3c0,1.1-0.1,2.2-0.1,2.2h0.1c1.4-4.4,5-7.9,9.7-7.9c0.7,0,1.4,0.1,1.4,0.1v7.5
                            c0,0-0.8-0.1-1.8-0.1c-3.2,0-6.9,1.9-8.3,6.4c-0.5,1.5-0.7,3.2-0.7,5v12.1h-7.6V254.1z"/>
                        <path d="M984.7,260.6h-4v-6.1h4.1v-8.8h7.4v8.8h7v6.1h-7v11.9c0,5,4,5.8,6.1,5.8c0.8,0,1.4-0.1,1.4-0.1v6.7
                            c0,0-0.9,0.2-2.3,0.2c-4.3,0-12.7-1.3-12.7-11.5V260.6z"/>
                        <path d="M1006,242.1h7.6v6.8h-7.6V242.1z M1006,254.1h7.6v30.6h-7.6V254.1z"/>
                        <path d="M1022.9,275.6c0,0,3.4,3.4,8.3,3.4c2.2,0,4-1,4-2.8c0-4.6-14.9-4-14.9-13.8c0-5.7,5.1-9,11.7-9
                            c6.9,0,10.3,3.5,10.3,3.5l-2.8,5.6c0,0-2.8-2.6-7.5-2.6c-2,0-3.9,0.8-3.9,2.8c0,4.3,14.9,3.8,14.9,13.6c0,5.1-4.4,9.2-11.7,9.2
                            c-7.6,0-11.9-4.5-11.9-4.5L1022.9,275.6z"/>
                        <path d="M1062.5,253.4c8.8,0,13.6,6.4,13.6,14.5c0,0.9-0.2,2.9-0.2,2.9h-21.1c0.5,5.3,4.6,8.1,9.2,8.1
                            c4.9,0,8.8-3.4,8.8-3.4l2.9,5.5c0,0-4.7,4.4-12.3,4.4c-10.1,0-16.4-7.3-16.4-16C1047,260,1053.4,253.4,1062.5,253.4z
                             M1068.4,265.6c-0.1-4.1-2.7-6.4-6.1-6.4c-3.9,0-6.6,2.4-7.3,6.4H1068.4z"/>
                    </g>
                </g>

                <g className="f8">
                    <path d="M727.8,376.4h-15.7V374H746v2.4h-15.7V416h-2.6V376.4z"/>
                    <path d="M751.8,374h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V416h-2.5V374z"/>
                    <path d="M786.7,374h3v4.4h-3V374z M786.9,386h2.5v30h-2.5V386z"/>
                    <path d="M799,410.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L799,410.5z"/>
                    <path d="M842.5,374h3v4.4h-3V374z M842.8,386h2.5v30h-2.5V386z"/>
                    <path d="M854.9,410.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L854.9,410.5z"/>
                    <path d="M894.6,386h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L894.6,386z"/>
                    <path d="M946.4,374h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V416h-2.5V374z"/>
                    <path d="M997.7,397.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V416h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C979.1,397.8,992.4,397.7,997.7,397.7z M989.5,414.4c6.5,0,10.3-6.8,10.3-12.7V400h-1.9c-5.1,0-16,0-16,7.8
                        C981.8,411,984.4,414.4,989.5,414.4z"/>
                    <path d="M1013.2,388.5h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9V405c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V388.5z"/>
                    <path d="M669.9,458h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6V488h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1V488h-2.5V458
                        z"/>
                    <path d="M741.1,469.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V488h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C722.5,469.8,735.8,469.7,741.1,469.7z M732.9,486.4c6.5,0,10.3-6.8,10.3-12.7V472h-1.9c-5.1,0-16,0-16,7.8
                        C725.2,483,727.8,486.4,732.9,486.4z"/>
                    <path d="M755.8,446h2.5v23.8h5.3l9.7-11.8h3.3l-10.9,12.9v0.1l11.9,17h-3.2l-10.9-15.8h-5.3V488h-2.5V446z"/>
                    <path d="M796.6,457.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C782,462.9,788.9,457.3,796.6,457.3z M806.2,470.2
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H806.2z"/>
                    <path d="M816.3,482.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L816.3,482.5z"/>
                    <path d="M859.6,458h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6V458h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V458z"/>
                    <path d="M893.9,482.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L893.9,482.5z"/>
                    <path d="M936.7,482.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L936.7,482.5z"/>
                    <path d="M963.8,446h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V488h-2.5V446z"/>
                    <path d="M998.8,446h3v4.4h-3V446z M999,458h2.5v30H999V458z"/>
                    <path d="M1012.1,458h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V488h-2.5V458z"/>
                    <path d="M1059.7,457.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1045.1,462.9,1052,457.3,1059.7,457.3z
                         M1069.3,470.2c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1069.3z"/>
                    <path d="M1080.4,484.2h3.7v3.8h-3.7V484.2z"/>
                </g>
                <g className="f9">
                    <path d="M747.3,156.3c0,0-0.8,4-1.6,6.7l-8.9,31.7h-3.2l-11-42h2.7l8.9,34.2c0.5,2,1,4.5,1,4.5h0.1
                        c0.1,0,0.5-2.4,1.1-4.5l9.6-34.2h2.9l9.6,34.2c0.6,2.1,1.1,4.5,1.1,4.5h0.1c0,0,0.5-2.5,1-4.5l9.2-34.2h2.7l-11.3,42H758
                        l-8.9-31.7c-0.8-2.7-1.6-6.7-1.6-6.7h-0.1H747.3z"/>
                    <path d="M780.4,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path d="M815.3,152.6h3v4.4h-3V152.6z M815.5,164.6h2.5v30h-2.5V164.6z"/>
                    <path d="M828.3,152.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V152.6z"/>
                    <path d="M854.9,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C840.3,169.5,847.2,163.9,854.9,163.9z
                         M864.5,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H864.5z"/>
                    <path d="M888.2,164.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L888.2,164.6z"/>
                    <path d="M952.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C937.9,169.5,944.8,163.9,952.5,163.9z
                         M962.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H962.1z"/>
                    <path d="M1006,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C987.4,176.4,1000.6,176.3,1006,176.3z M997.7,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C990,189.6,992.6,193,997.7,193z"/>
                    <path d="M1020.6,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path d="M1052.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1038.1,169.5,1045,163.9,1052.6,163.9z
                         M1062.2,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1062.2z"/>
                    <path d="M656.1,242.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V242.6z"/>
                    <path d="M703.7,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C689.2,259.5,696.1,253.9,703.7,253.9z
                         M713.3,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H713.3z"/>
                    <path d="M724.1,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path d="M738.2,254.6h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v15.4h-2.5V254.6z M751.1,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C740.7,276.3,744.4,282.9,751.1,282.9z"/>
                    <path d="M772.7,242.6h3v4.4h-3V242.6z M773,254.6h2.5v30H773V254.6z"/>
                    <path d="M786.1,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path d="M831.1,294.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C823.1,292.6,826.8,294.7,831.1,294.7z M842.6,269.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C838,282.1,842.6,278.8,842.6,269.1z"/>
                    <path d="M868.6,293.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L868.6,293.4z"/>
                    <path d="M914.9,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C899.3,260.7,906.3,253.9,914.9,253.9z M914.9,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1
                        c-7.1,0-12.9,5.6-12.9,13.1C902,277,907.7,282.9,914.9,282.9z"/>
                    <path d="M938.3,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path d="M1000.1,294.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C992.1,292.6,995.8,294.7,1000.1,294.7z M1011.6,269.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C1007,282.1,1011.6,278.8,1011.6,269.1z"/>
                    <path d="M1024.6,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path d="M1057.5,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1042,260.7,1048.9,253.9,1057.5,253.9z M1057.5,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1044.6,277,1050.4,282.9,1057.5,282.9z"/>
                    <path d="M1077.4,254.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L1077.4,254.6z"/>
                    <path d="M1128.6,280.9h3.4l-4,9.3h-2.5L1128.6,280.9z"/>
                </g>
                <g className="f10">
                    <path className="f10_1" d="M627.5,203.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L627.5,203.4z"/>
                    <path className="f10_1" d="M673.8,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C658.3,170.7,665.3,163.9,673.8,163.9z M673.8,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C660.9,187,666.7,192.9,673.8,192.9z"/>
                    <path className="f10_1" d="M697.3,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f10_1" d="M762.6,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C747.1,170.1,754.2,163.9,762.6,163.9z"/>
                    <path className="f10_1" d="M795.4,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C779.9,170.7,786.8,163.9,795.4,163.9z M795.4,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C782.5,187,788.3,192.9,795.4,192.9z"/>
                    <path className="f10_1" d="M819.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f10_1" d="M867.8,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C852.3,170.1,859.5,163.9,867.8,163.9z"/>
                    <path className="f10_1" d="M899.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C885.2,169.5,892.1,163.9,899.8,163.9z
                         M909.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H909.4z"/>
                    <path className="f10_1" d="M920.5,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19H943v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f10_1" d="M956.6,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f10_1" d="M974.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f10_1" d="M1010.9,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C992.3,176.4,1005.6,176.3,1010.9,176.3z M1002.6,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C995,189.6,997.5,193,1002.6,193z"/>
                    <path className="f10_1" d="M1026.3,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f10_1" d="M1056.7,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1042.1,169.5,1049,163.9,1056.7,163.9z
                         M1066.3,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1066.3z"/>
                    <path className="f10_1" d="M1107.3,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1091.8,170.7,1098.8,163.9,1107.3,163.9z M1107.3,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1094.4,187,1100.2,192.9,1107.3,192.9z"/>
                    <path className="f10_1" d="M1131.2,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>

                    <path className="f10_2" d="M653.4,254.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L653.4,254.6z"/>
                    <path className="f10_2" d="M705.2,242.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V242.6z"/>
                    <path className="f10_2" d="M756.5,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C737.9,266.4,751.2,266.3,756.5,266.3z M748.2,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C740.5,279.6,743.1,283,748.2,283z"/>
                    <path className="f10_2" d="M771.9,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f10_2" d="M802.8,293.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L802.8,293.4z"/>
                    <path className="f10_2" d="M849.1,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C833.5,260.7,840.5,253.9,849.1,253.9z M849.1,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C836.2,277,841.9,282.9,849.1,282.9z"/>
                    <path className="f10_2" d="M872.5,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f10_2" d="M935.9,253.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C922.5,260.1,928,253.9,935.9,253.9z M935.5,282.9c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C925.1,277.7,929.4,282.9,935.5,282.9z"/>
                    <path className="f10_2" d="M972.5,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C957,260.7,964,253.9,972.5,253.9z M972.5,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1c-7.1,0-12.9,5.6-12.9,13.1
                        C959.6,277,965.4,282.9,972.5,282.9z"/>
                    <path className="f10_2" d="M1013,242.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V242.6z M1025.9,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C1015.5,276.3,1018.9,282.9,1025.9,282.9z"/>
                    <path className="f10_2" d="M1060.3,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1045.7,259.5,1052.6,253.9,1060.3,253.9z
                         M1069.9,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1069.9z"/>
                    <path className="f10_2" d="M1080,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1080,279.1z"/>
                    <path className="f10_2" d="M1108.1,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f10_2" d="M1126,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f11">
                    <path className="f11_1" d="M630.6,152.6h14.1c6.1,0,10.6,4.1,10.6,10.5c0,4.6-2.2,7.6-5.5,9.2v0.1c4.1,1.1,7.1,5.2,7.1,10.6
                        c0,7-5,11.6-11.7,11.6h-14.7V152.6z M644.6,171.3c4.7,0,8-3.2,8-8.2c0-4.9-3.1-8.1-8-8.1h-11.4v16.3H644.6z M645,192.2
                        c5.6,0,9.2-3.5,9.2-9.2s-3.9-9.3-9.3-9.3h-11.8v18.5H645z"/>
                    <path className="f11_1" d="M679,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C664.4,169.5,671.3,163.9,679,163.9z M688.6,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H688.6z"/>
                    <path className="f11_1" d="M713.1,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S704.7,163.9,713.1,163.9z"
                        />
                    <path className="f11_1" d="M748.9,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7H751c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C730.3,176.4,743.6,176.3,748.9,176.3z M740.6,193c6.5,0,10.3-6.8,10.3-12.7v-1.6H749c-5.1,0-16,0-16,7.8
                        C732.9,189.6,735.5,193,740.6,193z"/>
                    <path className="f11_1" d="M763.1,164.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V164.6z"/>
                    <path className="f11_1" d="M797.4,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L797.4,189.1z"/>
                    <path className="f11_1" d="M837,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C822.5,169.5,829.4,163.9,837,163.9z M846.6,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H846.6z"/>
                    <path className="f11_1" d="M874.3,152.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V152.6z M887.2,192.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C876.8,186.3,880.2,192.9,887.2,192.9z"/>
                    <path className="f11_1" d="M921.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C907,169.5,913.9,163.9,921.6,163.9z M931.2,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H931.2z"/>
                    <path className="f11_1" d="M942,152.6h3v4.4h-3V152.6z M942.3,164.6h2.5v30h-2.5V164.6z"/>
                    <path className="f11_1" d="M955.3,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f11_1" d="M1000.4,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5c0-9.4,5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C992.4,202.6,996.1,204.7,1000.4,204.7z M1011.9,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C1007.3,192.1,1011.9,188.8,1011.9,179.1z"/>
                    <path className="f11_1" d="M1040.5,189.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1040.5,189.1z"/>
                    <path className="f11_1" d="M1080.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1065.6,169.5,1072.5,163.9,1080.1,163.9z
                         M1089.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1089.7z"/>
                    <path className="f11_1" d="M1113.3,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1098.7,169.5,1105.6,163.9,1113.3,163.9z
                         M1122.9,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1122.9z"/>
                    <path className="f11_1" d="M1134,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>

                    <path className="f11_2" d="M628.5,242.6h3v4.4h-3V242.6z M628.7,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f11_2" d="M640.8,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L640.8,279.1z"/>
                    <path className="f11_2" d="M668,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6H668V254.6z"/>
                    <path className="f11_2" d="M703.7,242.1h3.1l-2.9,9.1h-2.3L703.7,242.1z"/>
                    <path className="f11_2" d="M715.9,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f11_2" d="M766.5,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C747.9,266.4,761.2,266.3,766.5,266.3z M758.3,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C750.6,279.6,753.2,283,758.3,283z"/>
                    <path className="f11_2" d="M780.9,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path className="f11_2" d="M790.9,254.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30H823l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L790.9,254.6z"/>
                    <path className="f11_2" d="M858.9,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7H861c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C840.3,266.4,853.6,266.3,858.9,266.3z M850.6,283c6.5,0,10.3-6.8,10.3-12.7v-1.6H859c-5.1,0-16,0-16,7.8
                        C843,279.6,845.5,283,850.6,283z"/>
                    <path className="f11_2" d="M869.9,293.4c0,0,1.7,1.4,3.7,1.4c2.9,0,4.7-2.6,5.9-5.4l2.2-5l-12.4-29.8h2.7l9.9,23.9
                        c0.6,1.4,1.1,2.8,1.1,2.8h0.1c0,0,0.4-1.4,1-2.8l9.9-23.9h2.7l-15.4,37c-1.3,3.1-3.8,5.6-7.6,5.6c-2.9,0-4.9-1.7-4.9-1.7
                        L869.9,293.4z"/>
                    <path className="f11_2" d="M901.9,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L901.9,279.1z"/>
                    <path className="f11_2" d="M958.2,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C943.6,259.5,950.5,253.9,958.2,253.9z
                         M967.8,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H967.8z"/>
                    <path className="f11_2" d="M978.9,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V254.6z"/>
                    <path className="f11_2" d="M1027.3,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1011.8,260.7,1018.8,253.9,1027.3,253.9z M1027.3,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1014.4,277,1020.2,282.9,1027.3,282.9z"/>
                    <path className="f11_2" d="M1050.8,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f11_2" d="M1096,294.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5s5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C1087.9,292.6,1091.7,294.7,1096,294.7z M1107.4,269.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C1102.9,282.1,1107.4,278.8,1107.4,269.1z"/>
                    <path className="f11_2" d="M1120.5,242.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V242.6z"/>
                    <path className="f11_2" d="M1155.6,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f12">
                    <path className="f12_1" d="M641.6,155h-15.7v-2.4h33.9v2.4h-15.7v39.6h-2.6V155z"/>
                    <path className="f12_1" d="M672.9,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C657.3,170.7,664.3,163.9,672.9,163.9z M672.9,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1S660,172,660,179.4
                        C660,187,665.7,192.9,672.9,192.9z"/>
                    <path className="f12_1" d="M706.6,204.7c6.4,0,11.4-3.1,11.4-10.3v-3.5c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1.8,3.7-5.1,6.1-10.1,6.1
                        c-7.8,0-13.3-6.1-13.3-15.5c0-9.4,5.1-15.2,12.9-15.2c8.5,0,10.4,5.9,10.4,5.9h0.1c0,0-0.2-0.4-0.2-1.1v-4h2.5v29.8
                        c0,9.2-6.6,12.8-13.7,12.8c-3.3,0-6.5-0.8-9.4-2.3l1.2-2.2C698.6,202.6,702.3,204.7,706.6,204.7z M718.1,179.1
                        c0-9.7-4.6-12.8-10.4-12.8c-6.4,0-10.3,4.7-10.3,12.8s4.4,13,10.9,13C713.5,192.1,718.1,188.8,718.1,179.1z"/>
                    <path className="f12_1" d="M743.6,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C729,169.5,735.9,163.9,743.6,163.9z M753.2,176.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H753.2z"/>
                    <path className="f12_1" d="M765.3,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f12_1" d="M783.1,152.6h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V152.6z"/>
                    <path className="f12_1" d="M830.8,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C816.2,169.5,823.1,163.9,830.8,163.9z
                         M840.4,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H840.4z"/>
                    <path className="f12_1" d="M851.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f12_1" d="M870.3,190.9h3.4l-4,9.3h-2.5L870.3,190.9z"/>
                    <path className="f12_1" d="M896.8,164.6h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L896.8,164.6z"/>
                    <path className="f12_1" d="M961.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C946.5,169.5,953.4,163.9,961.1,163.9z
                         M970.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H970.7z"/>
                    <path className="f12_1" d="M1011.8,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S1003.4,163.9,1011.8,163.9z
                        "/>
                    <path className="f12_1" d="M1031.5,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f12_1" d="M1063.5,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1048.9,169.5,1055.8,163.9,1063.5,163.9z
                         M1073.1,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1073.1z"/>
                    <path className="f12_1" d="M1100.3,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C1081.7,176.4,1095,176.3,1100.3,176.3z M1092.1,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C1084.4,189.6,1087,193,1092.1,193z"/>
                    <path className="f12_1" d="M1115.8,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f12_1" d="M1146.1,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1131.5,169.5,1138.4,163.9,1146.1,163.9z
                         M1155.7,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1155.7z"/>

                    <path className="f12_2" d="M652.7,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L652.7,279.1z"/>
                    <path className="f12_2" d="M680.8,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f12_2" d="M712,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C696.5,260.7,703.4,253.9,712,253.9z M712,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C699.1,277,704.9,282.9,712,282.9z"/>
                    <path className="f12_2" d="M735.9,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f12_2" d="M755.9,242.6h3v4.4h-3V242.6z M756.2,254.6h2.5v30h-2.5V254.6z"/>
                    <path className="f12_2" d="M781.7,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C767.1,259.5,774,253.9,781.7,253.9z M791.3,266.8
                        c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H791.3z"/>
                    <path className="f12_2" d="M801.5,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L801.5,279.1z"/>
                    <path className="f12_2" d="M858.5,253.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C843,260.7,849.9,253.9,858.5,253.9z M858.5,282.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C845.6,277,851.4,282.9,858.5,282.9z"/>
                    <path className="f12_2" d="M883.5,257.1h-3.8v-2.3h3.8v-1.4c0-9.9,6.5-11.1,9.5-11.1c1,0,1.6,0.1,1.6,0.1v2.3c0,0-0.5-0.1-1.4-0.1
                        c-2.4,0-7.1,1-7.1,8.7v1.4h8.2v2.3H886v27.5h-2.5V257.1z"/>
                    <path className="f12_2" d="M916.2,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L916.2,279.1z"/>
                    <path className="f12_2" d="M942.9,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f12_2" d="M991.5,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C976.1,260.1,983.2,253.9,991.5,253.9z"/>
                    <path className="f12_2" d="M1024.4,253.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7
                        C1008.9,260.1,1016.1,253.9,1024.4,253.9z"/>
                    <path className="f12_2" d="M1056.4,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C1041.8,259.5,1048.7,253.9,1056.4,253.9z
                         M1066,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1066z"/>
                    <path className="f12_2" d="M1076.1,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1076.1,279.1z"/>
                    <path className="f12_2" d="M1102.3,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1102.3,279.1z"/>
                    <path className="f12_2" d="M1130,280.9h3.4l-4,9.3h-2.5L1130,280.9z"/>
                </g>
                <g className="f13">
                    <path className="f13_1" d="M732,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S723.6,163.9,732,163.9z"/>
                    <path className="f13_1" d="M764.8,163.9c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9s-15.5-7-15.5-15.9
                        C749.2,170.7,756.2,163.9,764.8,163.9z M764.8,192.9c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C751.9,187,757.6,192.9,764.8,192.9z"/>
                    <path className="f13_1" d="M788.7,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5
                        v-18.1c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f13_1" d="M837.2,163.9c7.1,0,10.7,4.3,10.7,4.3l-1.6,2c0,0-3.4-3.8-9.2-3.8c-7,0-12.8,5.2-12.8,13.3
                        c0,8,5.8,13.2,12.8,13.2c6.6,0,10-4.3,10-4.3l1.3,2.1c0,0-3.9,4.7-11.3,4.7c-8.5,0-15.5-6.1-15.5-15.7S828.9,163.9,837.2,163.9z"
                        />
                    <path className="f13_1" d="M856.9,164.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V164.6z"/>
                    <path className="f13_1" d="M888.9,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H877c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C874.3,169.5,881.2,163.9,888.9,163.9z
                         M898.5,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H898.5z"/>
                    <path className="f13_1" d="M910.6,167.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V167.1z"/>
                    <path className="f13_1" d="M940.9,163.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H929c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C926.4,169.5,933.2,163.9,940.9,163.9z
                         M950.5,176.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H950.5z"/>
                    <path className="f13_1" d="M994.4,176.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C975.8,176.4,989,176.3,994.4,176.3z M986.1,193c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C978.4,189.6,981,193,986.1,193z"/>
                    <path className="f13_1" d="M1009,164.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5V164.6z"/>
                    <path className="f13_1" d="M1055.6,163.9c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5v-15.6h2.5v42h-2.5v-3.8
                        c0-1.4,0.2-2.3,0.2-2.3h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1042.2,170.1,1047.8,163.9,1055.6,163.9z M1055.3,192.9
                        c5.5,0,10.7-3.9,10.7-13.3c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1044.8,187.7,1049.2,192.9,1055.3,192.9z"/>

                    <path className="f13_2" d="M640.7,254.6h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6v14.6h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1v14.6h-2.5
                        V254.6z"/>
                    <path className="f13_2" d="M708.2,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C693.6,259.5,700.5,253.9,708.2,253.9z
                         M717.8,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H717.8z"/>
                    <path className="f13_2" d="M745.1,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4H747v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C726.5,266.4,739.7,266.3,745.1,266.3z M736.8,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C729.1,279.6,731.7,283,736.8,283z"/>
                    <path className="f13_2" d="M758.7,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L758.7,279.1z"/>
                    <path className="f13_2" d="M785.4,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f13_2" d="M820.7,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f13_2" d="M857.1,266.3h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3v19.4h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C838.5,266.4,851.8,266.3,857.1,266.3z M848.9,283c6.5,0,10.3-6.8,10.3-12.7v-1.6h-1.9c-5.1,0-16,0-16,7.8
                        C841.2,279.6,843.8,283,848.9,283z"/>
                    <path className="f13_2" d="M871.8,242.6h2.5v15.6c0,1.4-0.2,2.5-0.2,2.5h0.1c0,0,2.6-6.8,10.9-6.8c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.4,15.7c-7.6,0-10.4-6.8-10.4-6.8h-0.1c0,0,0.2,1.1,0.2,2.6v3.4h-2.5V242.6z M884.7,282.9
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C874.2,276.3,877.7,282.9,884.7,282.9z"/>
                    <path className="f13_2" d="M906.2,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path className="f13_2" d="M932.8,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C918.2,259.5,925.1,253.9,932.8,253.9z
                         M942.4,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H942.4z"/>
                    <path className="f13_2" d="M970.1,254.6h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V254.6z"/>
                    <path className="f13_2" d="M1002.2,253.9c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6h-24.1c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C987.6,259.5,994.5,253.9,1002.2,253.9z
                         M1011.8,266.8c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H1011.8z"/>
                    <path className="f13_2" d="M1021.9,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1021.9,279.1z"/>
                    <path className="f13_2" d="M1048.6,254.6h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6v-14.6h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V254.6z"/>
                    <path className="f13_2" d="M1083.6,242.6h2.5v35.2c0,4.2,2.2,4.7,3.5,4.7c0.5,0,0.9-0.1,0.9-0.1v2.3c0,0-0.5,0.1-1.1,0.1
                        c-1.7,0-5.9-0.7-5.9-6.3V242.6z"/>
                    <path className="f13_2" d="M1098.6,257.1h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9v16.5c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V257.1z"/>
                    <path className="f13_2" d="M1115.6,279.1c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1115.6,279.1z"/>
                    <path className="f13_2" d="M1142.7,280.8h3.7v3.8h-3.7V280.8z"/>
                </g>
                <g className="f14">
                    <path className='orange' d="M527,251.4h-15.7V249h33.9v2.4h-15.7V291H527V251.4z"/>
                    <path className='orange' d="M551,249h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V291H551V249z"/>
                    <path className='orange' d="M602.3,272.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V291h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C583.7,272.8,597,272.7,602.3,272.7z M594,289.4c6.5,0,10.3-6.8,10.3-12.7V275h-1.9c-5.1,0-16,0-16,7.8
                        C586.4,286,588.9,289.4,594,289.4z"/>
                    <path className='orange' d="M617.7,263.5h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9V280c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V263.5z"/>
                    <path className='orange' d="M636.2,248.5h3.1l-2.9,9.1h-2.3L636.2,248.5z"/>
                    <path className='orange' d="M646.5,285.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L646.5,285.5z"/>

                    <path d="M686.2,261h2.7l8.2,23.5c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.8,1-3.2l8.2-23.4h2.8l8.2,23.4
                        c0.5,1.4,1,3.2,1,3.2h0.1c0,0,0.5-1.7,1-3.2l8.2-23.5h2.7l-10.6,30h-2.7l-8.3-23.3c-0.5-1.4-1-3.2-1-3.2h-0.1c0,0-0.5,1.8-1,3.2
                        l-8.3,23.3h-2.7L686.2,261z"/>
                    <path d="M738,249h2.5v17.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1-2.8,5.2-8.5,12.7-8.5c7.8,0,9.9,4.6,9.9,11.7v19h-2.5v-18.1
                        c0-5.2-0.7-10.1-7.4-10.1c-5.6,0-10.6,4-12.1,9.5c-0.4,1.3-0.5,2.6-0.5,4.1V291H738V249z"/>
                    <path d="M789.3,272.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V291h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C770.7,272.8,784,272.7,789.3,272.7z M781.1,289.4c6.5,0,10.3-6.8,10.3-12.7V275h-1.9c-5.1,0-16,0-16,7.8
                        C773.4,286,776,289.4,781.1,289.4z"/>
                    <path d="M804.8,263.5h-4v-2.3h4v-8.5h2.5v8.5h7.9v2.3h-7.9V280c0,7.9,4.7,8.9,7.1,8.9c0.8,0,1.4-0.1,1.4-0.1v2.3
                        c0,0-0.6,0.1-1.5,0.1c-3.1,0-9.5-1.1-9.5-11.1V263.5z"/>
                    <path d="M839.3,261h2.5v5.3c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.5,6.8-8.5,11.5-8.5c6,0,8.8,2.8,9.5,8.2h0.1
                        c1.7-4.2,6.2-8.2,11.4-8.2c7.7,0,10,4.6,10,11.7v19h-2.5v-18.1c0-5.6-1.1-10.3-7.5-10.3c-5,0-9.2,4.4-10.6,9.1
                        c-0.4,1.4-0.6,2.9-0.6,4.6V291h-2.5v-18.1c0-5.2-0.7-10.3-7.3-10.3c-5.3,0-9.5,4.7-10.9,9.7c-0.4,1.3-0.5,2.6-0.5,4.1V291h-2.5
                        V261z"/>
                    <path d="M910.5,272.7h2v-1c0-6.7-3.4-8.9-8.2-8.9c-5.2,0-8.6,2.9-8.6,2.9l-1.4-2c0,0,3.6-3.3,10.1-3.3
                        c6.9,0,10.6,3.8,10.6,11.3V291h-2.5v-4c0-1.6,0.2-2.7,0.2-2.7h-0.1c0.1,0-2.7,7.4-10.5,7.4c-4.9,0-10.2-2.7-10.2-8.7
                        C891.9,272.8,905.1,272.7,910.5,272.7z M902.2,289.4c6.5,0,10.3-6.8,10.3-12.7V275h-1.9c-5.1,0-16,0-16,7.8
                        C894.5,286,897.1,289.4,902.2,289.4z"/>
                    <path d="M925.1,249h2.5v23.8h5.3l9.7-11.8h3.3l-10.9,12.9v0.1l11.9,17h-3.2L933,275.2h-5.3V291h-2.5V249z"/>
                    <path d="M965.9,260.3c8.2,0,12.2,6.4,12.2,13.7c0,0.7-0.1,1.6-0.1,1.6H954c0,8.7,5.9,13.7,12.8,13.7
                        c5.8,0,9.3-3.8,9.3-3.8l1.4,2.1c0,0-4.2,4.1-10.7,4.1c-8.5,0-15.5-6.1-15.5-15.7C951.3,265.9,958.2,260.3,965.9,260.3z
                         M975.5,273.2c-0.3-7.3-4.7-10.6-9.7-10.6c-5.5,0-10.6,3.6-11.7,10.6H975.5z"/>
                    <path d="M985.6,285.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L985.6,285.5z"/>
                    <path d="M1029,261h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6V261h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V261z"/>
                    <path d="M1063.3,285.5c0,0,3.4,3.8,9.3,3.8c3.7,0,6.9-1.9,6.9-5.6c0-7.6-16.5-5.5-16.5-15.2c0-5.3,4.5-8.1,9.6-8.1
                        c6.1,0,8.9,3.2,8.9,3.2l-1.5,2c0,0-2.5-2.8-7.6-2.8c-3.4,0-6.8,1.6-6.8,5.5c0,7.8,16.5,5.5,16.5,15.4c0,4.8-4.1,8.1-9.6,8.1
                        c-7.3,0-10.9-4.3-10.9-4.3L1063.3,285.5z"/>
                    <path d="M1107,261h2.5v3.6c0,1.4-0.2,2.4-0.2,2.4h0.1c0,0,2.5-6.7,10.8-6.7c8,0,13,6.4,13,15.7
                        c0,9.5-5.6,15.7-13.3,15.7c-7.8,0-10.5-6.8-10.5-6.8h-0.1c0,0,0.2,1.1,0.2,2.6V303h-2.5V261z M1119.9,289.3
                        c5.9,0,10.7-4.9,10.7-13.3c0-8.1-4.3-13.3-10.4-13.3c-5.5,0-10.7,3.9-10.7,13.3C1109.5,282.7,1113.2,289.3,1119.9,289.3z"/>
                    <path d="M1141.8,261h2.5v5.7c0,1.4-0.2,2.5-0.2,2.5h0.1c1.5-4.6,4.9-8.4,9.6-8.4c0.9,0,1.7,0.2,1.7,0.2v2.5
                        c0,0-0.7-0.1-1.4-0.1c-4.7,0-7.6,4-8.9,8.4c-0.7,2.1-0.9,4.3-0.9,6.3v13h-2.5V261z"/>
                    <path d="M1174.6,260.3c8.6,0,15.5,6.8,15.5,15.5c0,8.9-7,15.9-15.5,15.9c-8.6,0-15.5-7-15.5-15.9
                        C1159.1,267.1,1166.1,260.3,1174.6,260.3z M1174.6,289.3c7.1,0,12.9-5.8,12.9-13.4c0-7.4-5.8-13.1-12.9-13.1s-12.9,5.6-12.9,13.1
                        C1161.7,283.4,1167.5,289.3,1174.6,289.3z"/>
                    <path d="M1198.1,261h2.5v18.1c0,5.2,0.7,10.1,7.4,10.1c7.5,0,12.3-6.6,12.3-13.6V261h2.5v30h-2.5v-5.3
                        c0-1.4,0.2-2.5,0.2-2.5h-0.1c-1,2.8-5.2,8.5-12.4,8.5c-7.4,0-9.9-4.1-9.9-11.7V261z"/>
                    <path d="M1244.8,260.3c7.6,0,10.4,6.8,10.4,6.8h0.1c0,0-0.2-1.1-0.2-2.5V249h2.5v42h-2.5v-3.8c0-1.4,0.2-2.3,0.2-2.3
                        h-0.1c0,0-2.6,6.8-10.9,6.8c-8,0-13-6.4-13-15.7C1231.4,266.5,1237,260.3,1244.8,260.3z M1244.5,289.3c5.5,0,10.7-3.9,10.7-13.3
                        c0-6.7-3.4-13.2-10.4-13.2c-5.9,0-10.7,4.9-10.7,13.3C1234,284.1,1238.4,289.3,1244.5,289.3z"/>
                    <path d="M1268.2,287.2h3.7v3.8h-3.7V287.2z"/>
                </g>

            </g>
          </g>










                    </svg>
            </div>
        )
    }
}