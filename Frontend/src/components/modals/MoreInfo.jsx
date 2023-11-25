import React from 'react'
import s, { layout } from '../../style'
import { RxCross2 } from 'react-icons/rx'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { FiFlag, FiLink } from 'react-icons/fi'
export const MoreInfo = ({ handleOptions, handleSave,save }) => {
    
    return (
        <div className={`${layout.moreInfo}`}>
            <button onClick={handleOptions} className="w-full flex justify-end mr-5">
                <RxCross2 />
            </button>
            <button onClick={handleSave} className={`${layout.info}`}>
                {save ?(
                    <FaRegBookmark className={`${s.icon7}`} />
                ):(
                    <FaBookmark className={`${s.icon7}`} />
                )}
                Save Post
            </button>
            <button className={`${layout.info}`}>
                <FiLink className={`${s.icon7}`} />
                Copy Link
            </button>
            <button className={`${layout.info}`}>
                <FiFlag className={`${s.icon7}`} />
                Report
            </button>

        </div>
    )
}
