import React, {useState} from 'react';
import { MoSnackBar, MoButton} from "../lib"

export default {
    title: 'Example/MoSnackBar',
    component: MoSnackBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};


const Template = (args) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true)
    }
    return (
        <div>
            <MoButton label="open" click={handleClick}></MoButton>
            <MoSnackBar {...args} show={open}></MoSnackBar>
        </div>
    )
}

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
