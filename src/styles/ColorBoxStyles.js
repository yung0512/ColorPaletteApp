import chroma from "chroma-js"
export default {
    colorBox:{
        width:"20%",
        height:props=>props.showingFullPalette?"25%":"50%",
        margin:"0 auto",
        display: "inline-block",
        position:"relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button":{
            opacity:"1",
        }
    },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white"
    },//dynamically generate styles
    colorName:{
        color:props =>chroma(props.background).luminance() <= 0.08 ?"white":"black"
    },
    seeMore:{
        color: props=>chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)":"white",
        background: 'rgba(255,255,255,0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        width:'60px',
        height:'30px',
        textAlign: 'center',
        bottom:'0px',
        lineHeight:'30px',
        textTransform: 'uppercase'
    },
    copyButton:{
        color: props=>chroma(props.background).luminance()>= 0.7 ? "rgba(0,0,0,0.5)":"white" ,
        width:"100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        opacity:"0",
        left:"50%",
        marginLeft: "-50px",
        marginTop: "-30px",
        textAlign: "center",
        outline:"none",
        backgroundColor:"rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none"
    },
    boxContent:{
        position: "absolute",
        width:"100%",
        left:"0px",
        bottom: "0px",
        padding: "10px",
        fontSize: "12px",
        color:"black",
        letterSpacing: "1px",
        textTransform: "uppercase"
    },
    copyOverlay:{
        opacity:"0",
        zIndex:"0",
        width:"100%",
        height:"100%",
        transform: "scale(0.1)",
        transition: "transform 0.6s ease-in-out"
    },
    showOverlay:{
        transform: "scale(50)",
        opacity:"1",
        zIndex:"10",
        position: "absolute"
    },
    copyMessage:{
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        color: "white",
        opacity: "0",
        "& h1":{
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            textAlign: "center",
            padding: "1rem",
            marginBottom:"0",
            width:"100%",
            textTransform:"uppercase"
        },
        "& p":{
            fontSize: "2rem",
            fontWeight:"100"
        }
    },
    showMessage:{
        opacity: "1",
        zIndex:"25",
        transition:"all 0.4s ease-in-out",
        transform: "scale(1)",
        transitionDelay: "0.3s"
    }
}