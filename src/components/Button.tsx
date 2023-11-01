import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    color?: String;
    onclick: () => void;
}

function buttonLoader({children, onclick, color="primary"}:Props) {
    return (<button type="button" className={"btn btn-" + color}  onClick={onclick}>{children}</button>
        
    );
}

export default buttonLoader;