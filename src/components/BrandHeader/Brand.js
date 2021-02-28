function Brand({title}){
    var myClasses=["text-xl","font-semibold"];
    return(
    <h1 className={myClasses.join(" ")}>{title}</h1>
    );
}
export default Brand;