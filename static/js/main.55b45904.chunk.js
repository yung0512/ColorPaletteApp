(this.webpackJsonpcolor_palette=this.webpackJsonpcolor_palette||[]).push([[0],{211:function(e,t,a){},222:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var o,n=a(0),r=a(10),l=a.n(r),c=(a(211),a(51)),i=a(89),s=a(21),d=a(22),h=a(12),m=a(27),u=a(26),p=a(52),b=a.n(p),j=a(42),g=a(178),f=a(347),x=a(13),O=function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},v={colorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:"1"}},Object(x.a)(o,O("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.333%"}}),Object(x.a)(o,O("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(x.a)(o,O("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return b()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return b()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return b()(e.background).luminance()>=.7?"rgba(0,0,0,0.5)":"white"},background:"rgba(255,255,255,0.3)",position:"absolute",border:"none",right:"0",width:"60px",height:"30px",textAlign:"center",bottom:"0px",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return b()(e.background).luminance()>=.7?"rgba(0,0,0,0.5)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",opacity:"0",left:"50%",marginLeft:"-50px",marginTop:"-30px",textAlign:"center",outline:"none",backgroundColor:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",fontSize:"12px",color:"black",letterSpacing:"1px",textTransform:"uppercase"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transform:"scale(0.1)",transition:"transform 0.6s ease-in-out"},showOverlay:{transform:"scale(50)",opacity:"1",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",top:"0",right:"0",bottom:"0",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",color:"white",opacity:"0","& h1":Object(x.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255,255,255,0.2)",textAlign:"center",padding:"1rem",marginBottom:"0",width:"100%",textTransform:"uppercase"},O("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",zIndex:"25",transition:"all 0.4s ease-in-out",transform:"scale(1)",transitionDelay:"0.3s"}},C=a(3),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={copied:!1},o.changeCoptStates=o.changeCoptStates.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"changeCoptStates",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,o=e.background,n=e.showingFullPalette;return Object(C.jsx)(g.CopyToClipboard,{text:this.props.background,onCopy:this.changeCoptStates,children:Object(C.jsxs)("div",{style:{background:o},className:t.colorBox,children:[Object(C.jsx)("div",{style:{background:o},className:"".concat(t.copyOverlay," ").concat(this.state.copied&&t.showOverlay)}),Object(C.jsxs)("div",{className:"".concat(t.copyMessage," ").concat(this.state.copied&&t.showMessage),children:[Object(C.jsx)("h1",{children:"copied!"}),Object(C.jsx)("p",{className:t.copyText,children:this.props.background})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:t.boxContent,children:Object(C.jsx)("span",{className:t.colorName,children:a})}),Object(C.jsx)("button",{className:t.copyButton,children:"Copy"})]}),n&&Object(C.jsx)(j.b,{to:"/palette/".concat(this.props.paletteId,"/").concat(this.props.id),onClick:function(e){return e.stopPropagation},children:Object(C.jsx)("span",{className:t.seeMore,children:"More"})})]})})}}]),a}(n.Component),w=Object(f.a)(v)(y),k=a(189),S=a(180),N=a.n(S),P=a(410),F=a(395),B=a(394),D=a(408),I={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh",flexWrap:"nowrap"},logo:Object(x.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",color:"black",fontFamily:"'Roboto', sans-serif",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},O("xs"),{display:"none"}),slider:Object(x.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-rail":{height:"8px"},"& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},O("md"),{width:"150px"}),selectContainer:{marginLeft:"auto"}},L=(a(221),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(h.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"handleFormatChange",value:function(e){var t=this;this.setState({format:e.target.value,open:!0},(function(){t.props.handleChange(t.state.format)}))}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,t=e.level,a=e.changeLevel,o=e.showingShades,n=e.classes,r=this.state.format;return Object(C.jsxs)("header",{className:n.Navbar,children:[Object(C.jsx)("div",{className:n.logo,children:Object(C.jsx)(j.b,{to:"/",children:"reactcolorpicker"})}),o&&Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Level:"}),Object(C.jsx)("div",{className:n.slider,children:Object(C.jsx)(k.a,{defaultValue:t,min:100,max:900,onAfterChange:a,step:100})})]}),Object(C.jsxs)("div",{className:n.selectContainer,children:[Object(C.jsxs)(D.a,{value:this.state.format,onChange:this.handleFormatChange,children:[Object(C.jsx)(B.a,{value:"hex",children:"Hex - #ffffff"}),Object(C.jsx)(B.a,{value:"rgb",children:"Rgb - rgb(255,255,255)"}),Object(C.jsx)(B.a,{value:"rgba",children:"Rgba - rgba(255,255,255,1.0)"})]}),Object(C.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:Object(C.jsxs)("span",{id:"message-id",children:["Format change to ",r.toUpperCase()]}),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[Object(C.jsx)(F.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(C.jsx)(N.a,{})},"close")]})]})]})}}]),a}(n.Component)),A=Object(f.a)(I)(L);var T,E,M,G=Object(f.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"1rem"}})((function(e){var t=e.paletteName,a=e.emoji,o=e.classes;return Object(C.jsxs)("footer",{className:o.PaletteFooter,children:[t,Object(C.jsx)("span",{className:o.emoji,children:a})]})})),R={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(T={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:"1",backgroundColor:"black","& a":{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-30px",textAlign:"center",outline:"none",backgroundColor:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(x.a)(T,O("lg"),{width:"25%",height:"33.3333%"}),Object(x.a)(T,O("md"),{width:"50%",height:"20%"}),Object(x.a)(T,O("xs"),{width:"100%",height:"10%"}),T)},z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(h.a)(o)),o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.classes,t=this.props.palette,a=t.colors,o=t.paletteName,n=t.emoji,r=t.id,l=this.state,c=l.level,i=l.format,s=a[c].map((function(e){return Object(C.jsx)(w,{showingFullPalette:!0,id:e.id,background:e[i],name:e.name,paletteId:r},e.id)}));return Object(C.jsxs)("div",{className:e.Palette,children:[Object(C.jsx)(A,{handleChange:this.changeFormat,level:c,changeLevel:this.changeLevel,showingShades:!0}),Object(C.jsx)("div",{className:e.colors,children:s}),Object(C.jsx)(G,{paletteName:o,emoji:n})]})}}]),a}(n.Component),U=Object(f.a)(R)(z),H=(a(222),a(19)),q=a.n(H),V=a(8),W=a(402),J=a(403),_=a(401),Y=a(404),K=a(80),Q=a(182),X=a.n(Q),Z=a(396),$=a(400),ee=a(398),te=a(399),ae=a(397),oe=a(53),ne=a(190),re=(a(236),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"paletteName",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.showemojiPicker=o.showemojiPicker.bind(Object(h.a)(o)),o.savePalette=o.savePalette.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;oe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(t){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"showemojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){this.props.handleSubmit({paletteName:this.state.newPaletteName,emoji:e.native})}},{key:"render",value:function(){var e=this.state.newPaletteName;return console.log(this.state.stage),Object(C.jsxs)("div",{children:[Object(C.jsxs)(Z.a,{open:"emoji"===this.state.stage,children:[Object(C.jsx)(ae.a,{children:"Choose a Palette Emoji"}),Object(C.jsx)(ne.a,{onSelect:this.savePalette})]}),Object(C.jsxs)(Z.a,{open:"paletteName"===this.state.stage,onClose:this.props.hideForm,"aria-labelledby":"form-dialog-title",children:[Object(C.jsx)(ae.a,{id:"form-dialog-title",children:"Choose a palette name"}),Object(C.jsxs)(oe.ValidatorForm,{onSubmit:this.showemojiPicker,children:[Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(te.a,{children:"please enter a name for new palette, make sure it's unique"}),Object(C.jsx)(oe.TextValidator,{label:"Palette Name",value:e,name:"newPaletteName",margin:"normal",onChange:this.handleChange,validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})]}),Object(C.jsxs)($.a,{children:[Object(C.jsx)(_.a,{onClick:this.props.hideForm,color:"primary",children:"Cancel"}),Object(C.jsx)(_.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})]})}}]),a}(n.Component)),le=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"60px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(x.a)({marginRight:"1rem"},O("sm"),{marginRight:"0.5rem"}),button:Object(x.a)({margin:"0 0.5rem"},O("sm"),{margin:"0 0.2rem",padding:"0.3rem"}),link:{textDecoration:"none"}}},ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.showForm=o.showForm.bind(Object(h.a)(o)),o.hideForm=o.hideForm.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;oe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(t){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,t=e.open,a=e.palettes,o=e.classes,n=e.handleSubmit;this.state.newPaletteName;return Object(C.jsxs)("div",{className:o.root,children:[Object(C.jsx)(W.a,{}),Object(C.jsxs)(J.a,{position:"fixed",color:"default",className:q()(o.appBar,Object(x.a)({},o.appBarShift,t)),children:[Object(C.jsxs)(Y.a,{disableGutters:!t,children:[Object(C.jsx)(F.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:q()(o.menuButton,t&&o.hide),children:Object(C.jsx)(X.a,{})}),Object(C.jsx)(K.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Create A Palette"})]}),Object(C.jsxs)("div",{className:o.navBtns,children:[Object(C.jsx)(j.b,{className:o.link,to:"/",children:Object(C.jsx)(_.a,{className:o.button,variant:"contained",color:"secondary",children:"Go Back"})}),Object(C.jsx)(_.a,{className:o.button,variant:"contained",color:"primary",onClick:this.showForm,children:"Save"})]})]}),this.state.formShowing&&Object(C.jsx)(re,{palettes:a,handleSubmit:n,hideForm:this.hideForm})]})}}]),a}(n.Component),ie=Object(V.a)(le,{withTheme:!0})(ce),se=a(412),de=a(405),he=a(187),me=a.n(he),ue=a(77),pe=a(109),be=a.n(pe),je={root:(E={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(x.a)(E,O("lg"),{width:"25%",height:"20%"}),Object(x.a)(E,O("md"),{width:"50%",height:"10%"}),Object(x.a)(E,O("sm"),{width:"100%",height:"5%"}),E),boxContent:(M={position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",fontSize:"12px",color:"black",letterSpacing:"1px",textTransform:"uppercase"},Object(x.a)(M,"color","rgba(0,0,0,0.5)"),Object(x.a)(M,"display","flex"),Object(x.a)(M,"justifyContent","space-between"),M),deleteIcon:{transition:"all 0.3s ease-in-out"}},ge=Object(ue.b)((function(e){var t=e.classes;return Object(C.jsx)("div",{className:t.root,style:{backgroundColor:e.color},children:Object(C.jsxs)("div",{className:t.boxContent,children:[Object(C.jsx)("span",{children:e.name}),Object(C.jsx)(be.a,{className:t.deleteIcon,onClick:e.handleClick})]})})})),fe=Object(f.a)(je)(ge),xe=Object(ue.a)((function(e){var t=e.colors,a=e.removeColor;return Object(C.jsx)("div",{style:{height:"100%"},children:t.map((function(e,t){return Object(C.jsx)(fe,{index:t,color:e.color,name:e.name,handleClick:function(){return a(e.name)}},e.name)}))})})),Oe=a(188),ve={root:{width:"100%",alignSelf:"center"},picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontsize:"2rem"},colorNameInput:{marginTop:"2px",width:"100%",padding:"0"}},Ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;oe.ValidatorForm.addValidationRule("isColorNameUnique",(function(t){return e.props.colors.every((function(e){return e.name.toLowerCase()!==t.toLowerCase()}))})),oe.ValidatorForm.addValidationRule("isColorUnique",(function(t){return e.props.colors.every((function(t){return t.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addColor(e)}},{key:"render",value:function(){var e=this.props,t=e.paletteFull,a=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return Object(C.jsxs)("div",{className:a.root,children:[Object(C.jsx)(Oe.a,{color:n,onChangeComplete:this.updateCurrentColor,className:a.picker}),Object(C.jsxs)(oe.ValidatorForm,{onSubmit:this.handleSubmit,children:[Object(C.jsx)(oe.TextValidator,{placeholder:"Color Name",className:a.colorNameInput,name:"newColorName",value:r,variant:"filled",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["this field is required","Color name must be unique","Color are already used"]}),Object(C.jsx)(_.a,{className:a.addColor,disabled:t,variant:"contained",color:"primary",type:"submit",style:{backgroundColor:t?"grey":n},children:t?"Palette Full":"Add color"})]})]})}}]),a}(n.Component),ye=Object(V.a)(ve)(Ce),we=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(c.a)(Object(c.a)({display:"flex",alignItems:"center",padding:"0 8px",width:"100%"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},ke=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(ue.c)(o,t,a)}}))},o.state={open:!0,currentColor:"teal",colors:o.props.palettes[0].colors,newColorName:"",newPaletteName:""},o.deleteBox=o.deleteBox.bind(Object(h.a)(o)),o.addNewColor=o.addNewColor.bind(Object(h.a)(o)),o.handleChange=o.handleChange.bind(Object(h.a)(o)),o.savePalette=o.savePalette.bind(Object(h.a)(o)),o.clearColors=o.clearColors.bind(Object(h.a)(o)),o.randomColor=o.randomColor.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(i.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"deleteBox",value:function(e){this.setState({colors:this.state.colors.filter((function(t){return t.name!==e}))})}},{key:"savePalette",value:function(e){var t={paletteName:e.paletteName,id:e.paletteName.toLowerCase().replace(/ /g,"-"),colors:this.state.colors,emoji:e.emoji};this.props.savePalette(t),this.props.history.push("/")}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"randomColor",value:function(){var e=this.props.palettes.map((function(e){return e.colors})).flat(),t=e[Math.floor(Math.random()*e.length)];this.setState({colors:[].concat(Object(i.a)(this.state.colors),[t])}),console.log(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=(e.maxColors,e.palettes),o=this.state,n=o.open,r=o.colors.length>=20;return Object(C.jsxs)("div",{className:t.root,children:[Object(C.jsx)(ie,{open:n,palettes:a,handleSubmit:this.savePalette,handleDrawerOpen:this.handleDrawerOpen}),Object(C.jsxs)(se.a,{className:t.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:t.drawerPaper},children:[Object(C.jsx)("div",{className:t.drawerHeader,children:Object(C.jsx)(F.a,{onClick:this.handleDrawerClose,children:Object(C.jsx)(me.a,{})})}),Object(C.jsx)(de.a,{}),Object(C.jsxs)("div",{className:t.container,children:[Object(C.jsx)(K.a,{variant:"h4",gutterBottom:!0,children:"Design your palette"}),Object(C.jsxs)("div",{className:t.buttons,children:[Object(C.jsx)(_.a,{className:t.button,onClick:this.clearColors,variant:"contained",color:"secondary",children:"Clear Palette"}),Object(C.jsx)(_.a,{className:t.button,disabled:r,onClick:this.randomColor,variant:"contained",color:"primary",children:"Random Color"})]}),Object(C.jsx)(ye,{colors:this.state.colors,paletteFull:r,addColor:this.addNewColor})]})]}),Object(C.jsxs)("main",{className:q()(t.content,Object(x.a)({},t.contentShift,n)),children:[Object(C.jsx)("div",{className:t.drawerHeader}),Object(C.jsx)(xe,{distance:20,onSortEnd:this.onSortEnd,axis:"xy",colors:this.state.colors,removeColor:this.deleteBox})]})]})}}]),a}(n.Component);ke.defaultProps={maxColors:20};var Se,Ne,Pe,Fe=Object(V.a)(we,{withTheme:!0})(ke),Be=a(411),De=a(409),Ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).deletePalette=o.deletePalette.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return Object(C.jsx)("div",{className:t.miniColor,style:{backgroundColor:e.color}},e.name)}));return Object(C.jsxs)("div",{className:t.root,onClick:this.props.handleClick,children:[Object(C.jsx)("div",{className:t.delete,children:Object(C.jsx)(be.a,{onClick:this.deletePalette,className:t.deleteIcon,style:{transition:"all 0.3s ease-in-out"}})}),Object(C.jsx)("div",{className:t.colors,children:n}),Object(C.jsxs)("h5",{className:t.title,children:[a,Object(C.jsx)("span",{className:t.emoji,children:o})]})]})}}]),a}(n.Component),Le=Object(f.a)({root:{background:"white",border:"1px solid #aaaaaa",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"grey",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"#aaaaaa",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(Ie),Ae=a(413),Te=a(393),Ee=a(138),Me=a.n(Ee),Ge=a(140),Re=a.n(Ge),ze=a(345),Ue=a(406),He=a(407),qe=a(139),Ve=a.n(qe),We=a.p+"static/media/bg.1295202c.svg",Je={"@global":{".fade-exit":{color:"purple",opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:(Se={backgroundColor:"blue",height:"100vh",display:"flex",overflow:"scroll",alignItems:"flex-start",justifyContent:"center"},Object(x.a)(Se,"backgroundColor","#ffffff"),Object(x.a)(Se,"backgroundImage","url(".concat(We,")")),Se),container:(Ne={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(x.a)(Ne,O("xl"),{width:"80%"}),Object(x.a)(Ne,O("sm"),{width:"70%"}),Ne),heading:{fontSize:"2rem"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"#aaaaaa",alignItems:"center","& a":{color:"#aaaaaa"}},palettes:(Pe={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"1.5rem"},Object(x.a)(Pe,O("md"),{gridTemplateColumns:"repeat(2,50%)"}),Object(x.a)(Pe,O("xs"),{gridTemplateColumns:"repeat(1,100%)"}),Pe)},_e=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(h.a)(o)),o.closeDialog=o.closeDialog.bind(Object(h.a)(o)),o.handleDelete=o.handleDelete.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,t=this.state,a=t.openDeleteDialog,o=(t.deletingId,this.props),r=o.palettes,l=o.classes;o.deletePalette;return Object(C.jsxs)("div",{className:l.root,children:[Object(C.jsxs)("div",{className:l.container,children:[Object(C.jsxs)("nav",{className:l.nav,children:[Object(C.jsx)("h1",{className:l.heading,children:"React Colors"}),Object(C.jsx)(j.b,{to:"/palette/new",children:"create new palette"})]}),Object(C.jsx)(Be.a,{className:l.palettes,children:r.map((function(t){return Object(C.jsx)(De.a,{classNames:"fade",timeout:500,children:Object(n.createElement)(Le,Object(c.a)(Object(c.a)({},t),{},{handleClick:function(){return e.goToPalette(t.id)},openDialog:e.openDialog,id:t.id,key:t.id}))},t.id)}))})]}),Object(C.jsxs)(Z.a,{onClose:this.closeDialog,open:a,"aria-labelledby":"delete-dialog-title",children:[Object(C.jsx)(ae.a,{id:"delete-dialog",children:"Delete This Palette?"}),Object(C.jsxs)(Te.a,{children:[Object(C.jsxs)(ze.a,{button:!0,onClick:this.handleDelete,children:[Object(C.jsx)(Ue.a,{children:Object(C.jsx)(Ae.a,{style:{backgroundColor:Me.a[100],color:Me.a[600]},children:Object(C.jsx)(Ve.a,{})})}),Object(C.jsx)(He.a,{children:"Delete"})]}),Object(C.jsxs)(ze.a,{button:!0,onClick:this.closeDialog,children:[Object(C.jsx)(Ue.a,{children:Object(C.jsx)(Ae.a,{style:{backgroundColor:Re.a[100],color:Re.a[600]},children:Object(C.jsx)(Ve.a,{})})}),Object(C.jsx)(He.a,{children:"Cancel"})]})]})]})]})}}]),a}(n.Component),Ye=Object(f.a)(Je)(_e),Ke=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e))._shades=o.gatherShade(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"gatherShade",value:function(e,t){var a=[],o=e.colors;for(var n in o)a=a.concat(o[n].filter((function(e){return e.id===t})));return a.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.palette,o=a.paletteName,n=a.emoji,r=a.id,l=this._shades.map((function(t){return Object(C.jsx)(w,{name:t.name,background:t[e.state.format],showingFullPalette:!1},t.name)}));return Object(C.jsxs)("div",{className:t.Palette,children:[Object(C.jsx)(A,{handleChange:this.changeFormat,showingShades:!1}),Object(C.jsx)("h1",{children:"single color component"}),Object(C.jsxs)("div",{className:t.colors,children:[" ",l,Object(C.jsx)("div",{className:t.goBack,children:Object(C.jsx)(j.b,{to:"/palette/".concat(r),children:"Go Back"})})]}),Object(C.jsx)(G,{paletteName:o,emoji:n})]})}}]),a}(n.Component),Qe=Object(f.a)(R)(Ke),Xe=a(30),Ze=a(141),$e=[50,100,200,300,400,500,600,700,800,900];function et(e){var t,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Ze.a)($e);try{for(o.s();!(t=o.n()).done;){var n=t.value;a.colors[n]=[]}}catch(m){o.e(m)}finally{o.f()}var r,l,c,i=Object(Ze.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,d=(l=s.color,c=10,b.a.scale(function(e){var t="#fff";return[b()(e).darken(1.4).hex(),e,t]}(l)).mode("lab").colors(c)).reverse();for(var h in d)a.colors[$e[h]].push({name:"".concat(s.name," ").concat($e[h]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[h],rgb:b()(d[h]).css(),rgba:b()(d[h]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(m){i.e(m)}finally{i.f()}return a}var tt=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],at=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;Object(s.a)(this,a),o=t.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||tt},o.savePalette=o.savePalette.bind(Object(h.a)(o)),o.findPalette=o.findPalette.bind(Object(h.a)(o)),o.deletePalette=o.deletePalette.bind(Object(h.a)(o)),o}return Object(d.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(t){return t.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(i.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(t){return{palettes:t.palettes.filter((function(t){return t.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return Object(C.jsx)(Xe.a,{render:function(t){var a=t.location;return Object(C.jsx)(Be.a,{children:Object(C.jsx)(De.a,{classNames:"fade",timeout:5e3,children:Object(C.jsxs)(Xe.c,{location:a,children:[Object(C.jsx)(Xe.a,{exact:!0,path:"/palette/new",render:function(t){return Object(C.jsx)("div",{className:"page",children:Object(C.jsx)(Fe,Object(c.a)(Object(c.a)({savePalette:e.savePalette},t),{},{palettes:e.state.palettes}))})}}),Object(C.jsx)(Xe.a,{exact:!0,path:"/",render:function(t){return Object(C.jsx)("div",{className:"page",children:Object(C.jsx)(Ye,Object(c.a)(Object(c.a)({palettes:e.state.palettes},t),{},{deletePalette:e.deletePalette}))})}}),Object(C.jsx)(Xe.a,{exact:!0,path:"/palette/:id",render:function(t){return Object(C.jsx)("div",{className:"page",children:Object(C.jsx)(U,{palette:et(e.findPalette(t.match.params.id))})})}}),Object(C.jsx)(Xe.a,{path:"/palette/:paletteId/:colorId",render:function(t){return Object(C.jsx)("div",{className:"page",children:Object(C.jsx)(Qe,{colorId:t.match.params.colorId,palette:et(e.findPalette(t.match.params.paletteId))})})}})]})},a.key)})}})}}]),a}(n.Component),ot=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,415)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),o(e),n(e),r(e),l(e)}))};l.a.render(Object(C.jsx)(j.a,{basename:"/ColorPaletteApp",children:Object(C.jsx)(at,{})}),document.getElementById("root")),ot()}},[[343,1,2]]]);
//# sourceMappingURL=main.55b45904.chunk.js.map