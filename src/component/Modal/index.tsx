import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface Props {
    open : boolean;
    setOpen : Function;
    width? : number | undefined;
    emitAction : Function;
    headerContent : string;
    children : any;
    customFooter? : any;
}

const ModalComponent: React.FC<Props> = (props) => {
    const { open, setOpen, width = 1000, emitAction,headerContent,children,customFooter} = props;

    return (
        <Modal 
            title={headerContent}
            open={open}
            centered
            onOk={(event => emitAction(event))}
            width={width}
            onCancel={(event : any) => setOpen(event)}
            footer={customFooter ?? undefined}
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;