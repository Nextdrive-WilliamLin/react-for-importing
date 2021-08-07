import React from "react";
import { Button } from '@material-ui/core';

function MoButton({ color, children}) {
    return (
        <Button variant="contained" color={color}>
            {children}
        </Button>
    )
}

export default MoButton;