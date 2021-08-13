import React from 'react';
import { MoSnackBar, MoButton} from "../lib"

export default {
    title: 'Example/MoSnackBar',
    component: MoSnackBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <div>
    <MoSnackBar {...args} >aa</MoSnackBar>
</div>;

export const Overview = Template.bind({});
Overview.args = {
    primary: true,
    position: "right"
};
