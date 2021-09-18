import React, { useState } from "react";
import Modal from "./Modal";

function CallModal(){
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div className="callModal">
            <span>
            @ 2021 by FE class . Made with by 
                <b className="modal--hover"
                    onClick={() => {
                    setModalOpen(true);
                    }}
                >
                      Nguyễn Trung Nam
                </b>
            </span>
            
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default CallModal;