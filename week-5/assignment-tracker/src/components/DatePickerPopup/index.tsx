import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import Popover from '@mui/material/Popover';
import { format } from "date-fns";



export default function DatePickerDialog(props) {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <input id="duedate" placeholder="Due date" type="text"  readOnly value={props.selectedDateText} onClick={handleClick} />

            <Popover
                id='datepicker'
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <DayPicker
                    mode="single"
                    defaultMonth={props.selectedDate}
                    selected={props.selectedDate}
                    onSelect={props.updateDate}
                />
            </Popover>


<div>

</div>
        </>
    )
};
