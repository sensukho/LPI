/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'circle1',
            type:'image',
            rect:['4px','4px','162px','162px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+'circle1.png','0px','0px','100%','100%'],
            transform:[[],[],[],['0','0']]
         },
         {
            id:'mouse2',
            type:'image',
            rect:['auto','8px','66px','83px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"mouse2.png",'0px','0px']
         },
         {
            id:'mano2_2',
            type:'image',
            rect:['56px','22px','39px','69px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+'mano2_2.png','0px','0px']
         },
         {
            id:'arrow3',
            type:'image',
            rect:['4px','24px','39px','38px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+'arrow3.png','0px','0px']
         },
         {
            id:'mano1_1',
            type:'image',
            rect:['74px','132px','39px','67px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+'mano1_1.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_circle1}": [
            ["style", "top", '4px'],
            ["transform", "scaleX", '0'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '162px'],
            ["style", "left", '4px'],
            ["style", "width", '162px']
         ],
         "${_mano2_2}": [
            ["style", "top", '54px'],
            ["transform", "rotateZ", '-12deg'],
            ["style", "height", '69px'],
            ["style", "opacity", '0'],
            ["style", "left", '81px'],
            ["style", "width", '39px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '170px'],
            ["style", "height", '170px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mano1_1}": [
            ["style", "top", '170px'],
            ["transform", "rotateZ", '-13deg'],
            ["style", "height", '67px'],
            ["style", "opacity", '0'],
            ["style", "left", '114px'],
            ["style", "width", '39px']
         ],
         "${_arrow3}": [
            ["style", "top", '4px'],
            ["style", "height", '38px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "width", '39px']
         ],
         "${_mouse2}": [
            ["style", "top", '28px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-transform-origin", [101,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [101,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [101,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [101,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [101,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '79deg'],
            ["style", "height", '91px'],
            ["style", "right", '44px'],
            ["style", "left", 'auto'],
            ["style", "width", '72px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid1020", tween: [ "style", "${_mouse2}", "top", '24px', { fromValue: '28px'}], position: 460, duration: 710, easing: "easeOutBounce" },
            { id: "eid1322", tween: [ "style", "${_arrow3}", "opacity", '1', { fromValue: '0.000000'}], position: 1558, duration: 114, easing: "easeInQuint" },
            { id: "eid1375", tween: [ "style", "${_arrow3}", "opacity", '1', { fromValue: '1'}], position: 1907, duration: 0, easing: "easeInOutQuint" },
            { id: "eid79", tween: [ "style", "${_mouse2}", "-webkit-transform-origin", [101,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,0]}], position: 1323, duration: 0 },
            { id: "eid1835", tween: [ "style", "${_mouse2}", "-moz-transform-origin", [101,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,0]}], position: 1323, duration: 0 },
            { id: "eid1836", tween: [ "style", "${_mouse2}", "-ms-transform-origin", [101,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,0]}], position: 1323, duration: 0 },
            { id: "eid1837", tween: [ "style", "${_mouse2}", "msTransformOrigin", [101,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,0]}], position: 1323, duration: 0 },
            { id: "eid1838", tween: [ "style", "${_mouse2}", "-o-transform-origin", [101,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [101,0]}], position: 1323, duration: 0 },
            { id: "eid1199", tween: [ "style", "${_mano2_2}", "left", '87px', { fromValue: '81px'}], position: 1558, duration: 277 },
            { id: "eid809", tween: [ "style", "${_mouse2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 324, easing: "easeOutBounce" },
            { id: "eid771", tween: [ "transform", "${_circle1}", "rotateZ", '358deg', { fromValue: '0deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid1325", tween: [ "style", "${_arrow3}", "left", '42px', { fromValue: '4px'}], position: 1558, duration: 349, easing: "easeInOutQuint" },
            { id: "eid77", tween: [ "style", "${_mouse2}", "height", '91px', { fromValue: '91px'}], position: 1170, duration: 0 },
            { id: "eid78", tween: [ "style", "${_mouse2}", "width", '72px', { fromValue: '72px'}], position: 1170, duration: 0 },
            { id: "eid86", tween: [ "style", "${_mano1_1}", "top", '56px', { fromValue: '170px'}], position: 1223, duration: 326 },
            { id: "eid85", tween: [ "style", "${_mano1_1}", "left", '82px', { fromValue: '114px'}], position: 1223, duration: 326 },
            { id: "eid89", tween: [ "style", "${_mano2_2}", "opacity", '1', { fromValue: '0'}], position: 1549, duration: 9 },
            { id: "eid1530", tween: [ "style", "${_mano2_2}", "opacity", '1', { fromValue: '1'}], position: 1907, duration: 0 },
            { id: "eid1140", tween: [ "transform", "${_mano2_2}", "rotateZ", '-12deg', { fromValue: '-12deg'}], position: 1558, duration: 0 },
            { id: "eid1473", tween: [ "style", "${_arrow3}", "top", '4px', { fromValue: '4px'}], position: 1672, duration: 0, easing: "easeInOutQuint" },
            { id: "eid1086", tween: [ "transform", "${_mano1_1}", "rotateZ", '-13deg', { fromValue: '-13deg'}], position: 1223, duration: 0 },
            { id: "eid536", tween: [ "transform", "${_circle1}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 622, easing: "easeOutBounce" },
            { id: "eid1198", tween: [ "style", "${_mano2_2}", "top", '73px', { fromValue: '54px'}], position: 1558, duration: 277 },
            { id: "eid74", tween: [ "transform", "${_mouse2}", "rotateZ", '-11deg', { fromValue: '79deg'}], position: 460, duration: 750, easing: "easeOutBounce" },
            { id: "eid76", tween: [ "transform", "${_mouse2}", "rotateZ", '-11deg', { fromValue: '-11deg'}], position: 1210, duration: 0 },
            { id: "eid804", tween: [ "style", "${_mouse2}", "right", '44px', { fromValue: '44px'}], position: 460, duration: 0 },
            { id: "eid1087", tween: [ "style", "${_mano1_1}", "opacity", '1', { fromValue: '0'}], position: 1223, duration: 326 },
            { id: "eid90", tween: [ "style", "${_mano1_1}", "opacity", '0', { fromValue: '1'}], position: 1549, duration: 9 },
            { id: "eid535", tween: [ "transform", "${_circle1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 622, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-16306569");
