import sizes from "./sizes"
import bg from "./bg.svg"
export default{
   "@global":{
       ".fade-exit":{
            color:"purple",
            opacity:1
       },
       ".fade-exit-active":{
            opacity:0,
            transition:"opacity 500ms ease-out"
       }
   },
    root:{
          backgroundColor:"blue",
          height:"100vh",
          display:"flex",
          overflow:"scroll",
          alignItems:"flex-start",
          justifyContent:"center",
          backgroundColor: "#ffffff",
          backgroundImage: `url(${bg})`
           /* background by SVGBackgrounds.com */

    },
    container:{
          width:"50%",
          display:"flex",
          alignItems:"flex-start",
          flexDirection:"column",
          flexWrap:"wrap",
          [sizes.down("xl")]:{
                width:"80%"
          },
          [sizes.down("sm")]:{
                width:"70%"
          }
    },
    heading:{
      fontSize:"2rem"
    },
    nav:{
          display:"flex",
          width:"100%",
          justifyContent:"space-between",
          color:"#aaaaaa",
          alignItems:"center",
          "& a":{
            color:"#aaaaaa"
          }
    },
    palettes:{
          boxSizing:"border-box",
          width:"100%",
          display:"grid",
          gridTemplateColumns:"repeat(3,30%)",
          gridGap:"1.5rem",
          [sizes.down("md")]:{
            gridTemplateColumns:"repeat(2,50%)"
          },
          [sizes.down("xs")]:{
            gridTemplateColumns:"repeat(1,100%)"
          }
    }
}