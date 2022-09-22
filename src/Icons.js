import * as React from 'react';
import Icon from '@mui/material/Icon';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import {useState} from "react";


export default function TwoToneIcons(props) {

    const [changeIcon,setChangeIcon] = useState(false);
    const[sun,setSun] = useState(true);
    const[night,setNight] = useState(true);
    const modeChange = () => {
        if(changeIcon === false){
            setChangeIcon(true)

        }else{
            setChangeIcon(false)

        }
    }



    return <Icon onClick={() => modeChange()} baseClassName="material-icons-two-tone"><DarkModeIcon/></Icon>;
}
