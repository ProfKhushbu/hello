const ex1 = (props)=>{
    var cl = {
        color:props.css.color,
        backgroundColor:props.css.backgroundColor,
        fontSize:props.css.fontsize
    }
    return(
        
    <p style={cl}>LJ students</p>
    );
}
export default ex1;
