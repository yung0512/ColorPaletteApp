const styles = {
    root:{
        width:"20%",
        height:"25%",
        margin:"0 auto",
        display: "inline-block",
        position:"relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover svg":{
            color:"white",
            transform:"scale(1.5)"
        }
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
        textTransform: "uppercase",
        color:"rgba(0,0,0,0.5)",
        display:"flex",
        justifyContent:"space-between"
    },
    deleteIcon:{
        transition:"all 0.3s ease-in-out"
    }
    
}
export default styles