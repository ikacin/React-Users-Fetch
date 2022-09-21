import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

export default function TransitionsPopper(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <div>
            <button className={"toggle-button"} aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={0.5}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                            {props.index}
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}