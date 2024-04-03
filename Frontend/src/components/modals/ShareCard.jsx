import React from 'react'
import { layout } from '../../style'
import { RxCross2 } from 'react-icons/rx'

export const ShareCard = ({sharepost}) => {
  return (
    <div className={`${layout.shareCard}`}>
        <button onClick={sharepost} className="w-full flex justify-end mr-5">
            <RxCross2 />
        </button>
        ShareCard
    </div>
  )
}
