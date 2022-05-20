import React from 'react';
import style from './CopyIcon.module.css';

type  CopyIconPropsType = {
    value: string
}

export const CopyIcon = React.memo(({value}: CopyIconPropsType) => {
    const copyHandler = (value: string) => {
        navigator.clipboard.writeText(value ?? '');
    }
    return (
        <span onClick={() => {copyHandler(value)}} className={style.copy}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={"white"}>
                <path id="XMLID_7_" d="M305.8,0H158.7c-27,0-50.3,21.4-50.3,48.4v10.2h-9.3c-27,0-50.3,21.4-50.3,48.4v354.7
		c0,27,22.3,50.3,50.3,50.3h256c27,0,48.4-22.3,48.4-50.3v-9.3h11.2c27,0,48.4-22.3,48.4-50.3V157.3L305.8,0z M305.8,54.9
		l102.4,102.4H305.8C305.8,157.3,305.8,54.9,305.8,54.9z M364.5,461.7c0,5.6-3.7,10.2-9.3,10.2h-256c-5.6,0-10.2-4.7-10.2-10.2V108
		c0-4.7,4.7-9.3,10.2-9.3h9.3v314.6c0,27,13,40,40,40h216V461.7z M424,403.1c0,5.6-3.7,10.2-9.3,10.2h-256
		c-5.6,0-10.2-4.7-10.2-10.2V48.4c0-4.7,4.7-9.3,10.2-9.3h108v157.3H424V403.1z"/>
            </svg>
        </span>
    );
});

