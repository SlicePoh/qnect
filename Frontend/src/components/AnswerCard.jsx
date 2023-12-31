import React, { useState } from 'react'
import s, { layout } from '../style'
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { BiCommentDetail, BiShare } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { FaImage, FaRegFaceLaugh } from "react-icons/fa6";
import { MdVerified } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'
import beb from '../assets/bebnath.jpg'
import { ShareCard } from './modals/ShareCard'
import { MoreInfo } from './modals/MoreInfo'
import EmojiPicker from 'emoji-picker-react';



export const AnswerCard = () => {
    const initialState = {
        isFollow: false,
        like: false,
        comment: false,
        share: false,
        options: false,
        save: false,
        isSeeMore: false,
        emoji: false,
    };
    const [state, setState] = useState(initialState);
    const { isFollow, like, comment, share, options, save, isSeeMore, emoji } = state;

    const toggleState = (key) => {
        setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
    };
    const ans_text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ipsum quis tempora dolorum? Molestias saepe doloremque, enim quidem minus iusto cupiditate deserunt rerum pariatur voluptate ipsam? Quos vel ipsum ad velit at quidem, iste, nemo animi dolorum corporis maxime quisquam dignissimos? A doloremque labore facere voluptatem maxime quasi quia iure, ipsum tempore reprehenderit illo, incidunt reiciendis esse blanditiis modi";
    const que_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut odio, voluptate impedit repudiandae veritatis id?";

    return (
        <div className={`${layout.ans}`}>
            <div className={`${layout.question}`}>
                <div className="w-11/12">
                    {(que_text.length > 100 && isSeeMore) ? (
                        <div className="">
                            {que_text.slice(0, 100)}
                            <button onClick={() => toggleState('isSeeMore')} className="text-rose-1 font-bold">...(more)</button>
                        </div>
                    ) : (
                        <div>
                            {que_text}
                        </div>
                    )}
                </div>
                <button>
                    <FiEdit className={`${s.icon5} `} />
                </button>
            </div>
            <div className={`${layout.deets}`}>
                <button>
                    <img src={beb} alt="profile" className="w-8 md:w-14 h-auto rounded-full"></img>
                </button>
                <div className={`${s.flexSS} flex-col w-full ml-2 md:ml-4`}>
                    <div className={`${s.flexBetween} w-full`}>
                        <div className={`${s.flexCenter}`}>
                            <div className="text-sm md:text-xl text-rose-1 font-bold">
                                Jaydeep Debnath
                            </div>
                            <MdVerified className="text-rose-1 mx-1 text-base md:text-2xl" />
                            {isFollow ? (
                                <div className={`${s.flexCenter} ml-2 md:ml-5`}>
                                    <GoDotFill className="text-beige" />
                                    <button onClick={() => toggleState('isFollow')} className="text-beige text-sm md:text-xl">
                                        Following
                                    </button>
                                </div>
                            ) : (
                                <div className={`${s.flexCenter} ml-2 md:ml-5`}>
                                    <GoDotFill className="text-blue-1" />
                                    <button onClick={() => toggleState('isFollow')} className="text-blue-1 text-sm md:text-xl">
                                        Follow
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* <button>
                            <RxCross2 className="text-beige text-xl" />
                        </button> */}
                    </div>
                    <div className={`${s.flexBetween} w-full`}>
                        <div className="text-2xs md:text-sm text-rose-2 font-bold">
                            4th year CSE from Academy of Technology
                        </div>
                        <div className={`${s.flexCenter} w-24`}>
                            <GoDotFill className="text-beige" />
                            <div className="text-beige text-2xs md:text-sm">
                                5 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${layout.answer}`}>
                <div className={`${s.flexSS} w-full md:w-11/12`}>
                    <div className="text-beige">

                        {ans_text.length > 450 ? (
                            <div className="">
                                {ans_text.slice(0, 450)}
                                <button className="text-rose-1 font-bold">...(more)</button>
                            </div>
                        ) : (
                            <div>
                                {ans_text}
                            </div>
                        )}
                    </div>
                </div>
                <div className={`${layout.skillset}`}>
                    <div className={`${s.skills}`}>#Java</div>
                    <div className={`${s.skills}`}>#HTML</div>
                    <div className={`${s.skills}`}>#CSS</div>
                    <div className={`${s.skills}`}>#Js</div>
                </div>
            </div>
            <div className={`${layout.likes}`}>
                <div className={`${s.flexCenter}`}>
                    <button onClick={() => toggleState('like')}>
                        {!like ? (
                            <RiHeart2Line className={`${s.icon4}`} />
                        ) : (
                            <RiHeart2Fill className={`${s.icon4}`} />
                        )}
                    </button>
                    <div className={`${s.likes_num}`}>
                        20
                    </div>
                    <button onClick={() => toggleState('comment')}>
                        <BiCommentDetail className={`${s.icon4}`} />
                    </button>
                    <div className={`${s.likes_num}`}>
                        7
                    </div>
                    <button>
                        <FaEye className={`${s.icon4}`} />
                    </button>
                    <div className={`${s.likes_num}`}>
                        34
                    </div>
                    <button onClick={() => toggleState('share')}>
                        <BiShare className={`${s.icon4}`} />
                    </button>
                    <div className={`${s.likes_num}`}>
                        2
                    </div>
                </div>
                <button onClick={() => toggleState('options')}>
                    <SlOptionsVertical className={`${s.icon6}`} />
                </button>
            </div>
            {comment && (
                <div className={`${layout.comments}`}>
                    <div className={`${layout.myComments}`}>
                        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
                        <div className={`${layout.comments_button}`}>
                            <input placeholder="Add a comment..." type="text" className={`${s.comments_text}`} />
                            <button onClick={() => toggleState('emoji')}>
                                <FaRegFaceLaugh className={`${s.icon7}`} />
                            </button>
                            <button>
                                <FaImage className={`${s.icon7}`} />
                            </button>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            )}
            {emoji && (
                <EmojiPicker theme='dark' className={`${s.emoji}`} />
            )}
            {share && (
                <ShareCard handleShare={() => toggleState('share')} />
            )}
            {options && (
                <MoreInfo handleOptions={() => toggleState('options')} handleSave={() => toggleState('save')} save={save} />
            )}
        </div>
    )
}
