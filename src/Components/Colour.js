import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Colour(props) {
    let newColours = props.colours.map(item => {
        return (
            <div onClick={() => {
                navigator.clipboard.writeText(item);
                toast('Copied');
            }} className='colour-block' key={item}>
                <div className="colour" style={{ backgroundColor: item, color: item }}>####</div>
                <p>{item}</p>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark" />
            </div>
        )
    })

    return (
        props.activated && <div className="colours">{newColours}</div>
    )

}