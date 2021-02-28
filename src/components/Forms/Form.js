import { Children } from "react";
import PillButton from "../Cards/PillButton";

function Form({ children }) {
    var myClasses = ["inline-block", "m-5", "space-y-2", "clear-both", "text-center", "p-5", "bg-gray-400", "rounded-2xl"];
    return (
        <form className={myClasses.join(" ")}>
            {children}
        </form>
    );
}

export default Form;