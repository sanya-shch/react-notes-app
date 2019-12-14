import React, {useContext} from "react";
import {CSSTransition} from "react-transition-group";
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const  {alert, hide} = useContext(AlertContext);

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            mountOnEnter
            unmountOnExit
            classNames={'alert'}
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
                <strong>Attention!</strong>

                &nbsp;{alert.text}

                <button type="button" className="close" onClick={hide} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
};