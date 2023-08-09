import React from 'react'
import s, { layout } from '../style'
import { HiOutlineThumbUp } from 'react-icons/hi'
import { BiCommentDetail, BiShare } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import beb from '../assets/bebnath.jpg'


export const Hero = () => {
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <div className={`rounded-lg w-3/6 h-10 bg-dark-2 invisible`}>
          <input placeholder="Write your question" className=" outline-none w-full p-1 mr-4" />
        </div>
        <button className={`rounded-lg w-2/6 h-10 ml-4 bg-rose-1`}>
          Ask a question
        </button>
      </div>
      <div className={`${layout.ans}`}>
        <div className={`${layout.deets}`}>
          <button>
            <img src={beb} alt="profile" className="w-14 h-auto rounded-full"></img>
          </button>
          <div className={`${s.flexSS} flex-col w-full ml-4`}>
            <div className={`${s.flexBetween} w-full`}>
              <div className={`${s.flexCenter}`}>
                <div className="text-xl text-rose-1 font-bold">
                  Jaydeep Debnath
                </div>
                <MdVerified className="text-rose-1 mx-1 text-2xl" />
                <GoDotFill className="text-beige" />
                <div className="text-beige text-xl">
                  Following
                </div>
              </div>
              <RxCross2 className="text-beige text-xl" />
            </div>
            <div className={`${s.flexBetween} w-full`}>
              <div className="text-sm text-rose-2 font-bold">
                4th year CSE from Academy of Technology
              </div>
              <div className={`${s.flexCenter}`}>
                <GoDotFill className="text-beige" />
                <div className="text-beige text-sm">
                  5 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${layout.question}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut odio, voluptate impedit repudiandae veritatis id?
        </div>
        <div className={`${layout.answer}`}>
          <div className={`${s.flexSS} w-5/6`}>
            <div className="text-beige">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ipsum quis tempora dolorum? Molestias saepe doloremque, enim quidem minus iusto cupiditate deserunt rerum pariatur voluptate ipsam? Quos vel ipsum ad velit at quidem, iste, nemo animi dolorum corporis maxime quisquam dignissimos? A doloremque labore facere voluptatem maxime quasi quia iure, ipsum tempore reprehenderit illo, incidunt reiciendis esse blanditiis modi...
              <span className="text-rose-1 font-bold">(more)</span>
            </div>
          </div>
          <div className={`${s.flexSS} w-1/6 flex-col`}>
            <div className={`${s.skills}`}>#Java</div>
            <div className={`${s.skills}`}>#HTML</div>
            <div className={`${s.skills}`}>#CSS</div>
            <div className={`${s.skills}`}>#Javascript</div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`${layout.likes}`}>
          <div className={`${s.flexCenter}`}>
            <button>
              <HiOutlineThumbUp className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              20
            </div>
            <button>
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
            <button>
              <BiShare className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              2
            </div>
          </div>
          <button className={`rounded-lg w-1/6 h-8 ml-4 bg-rose-1`}>
            Answer
          </button>
        </div>
      </div>
      <div className={`${layout.ans}`}>
        <div className={`${layout.deets}`}>
          <button>
            <img src={beb} alt="profile" className="w-14 h-auto rounded-full"></img>
          </button>
          <div className={`${s.flexSS} flex-col w-full ml-4`}>
            <div className={`${s.flexBetween} w-full`}>
              <div className={`${s.flexCenter}`}>
                <div className="text-xl text-rose-1 font-bold">
                  Jaydeep Debnath
                </div>
                <MdVerified className="text-rose-1 mx-1 text-2xl" />
                <GoDotFill className="text-beige" />
                <div className="text-beige text-xl">
                  Following
                </div>
              </div>
              <RxCross2 className="text-beige text-xl" />
            </div>
            <div className={`${s.flexBetween} w-full`}>
              <div className="text-sm text-rose-2 font-bold">
                4th year CSE from Academy of Technology
              </div>
              <div className={`${s.flexCenter}`}>
                <GoDotFill className="text-beige" />
                <div className="text-beige text-sm">
                  5 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${layout.question}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut odio, voluptate impedit repudiandae veritatis id?
        </div>
        <div className={`${layout.answer}`}>
          <div className={`${s.flexSS} w-5/6`}>
            <div className="text-beige">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ipsum quis tempora dolorum? Molestias saepe doloremque, enim quidem minus iusto cupiditate deserunt rerum pariatur voluptate ipsam? Quos vel ipsum ad velit at quidem, iste, nemo animi dolorum corporis maxime quisquam dignissimos? A doloremque labore facere voluptatem maxime quasi quia iure, ipsum tempore reprehenderit illo, incidunt reiciendis esse blanditiis modi...
              <span className="text-rose-1 font-bold">(more)</span>
            </div>
          </div>
          <div className={`${s.flexSS} w-1/6 flex-col`}>
            <div className={`${s.skills}`}>#Java</div>
            <div className={`${s.skills}`}>#HTML</div>
            <div className={`${s.skills}`}>#CSS</div>
            <div className={`${s.skills}`}>#Javascript</div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`${layout.likes}`}>
          <div className={`${s.flexCenter}`}>
            <button>
              <HiOutlineThumbUp className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              20
            </div>
            <button>
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
            <button>
              <BiShare className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              2
            </div>
          </div>
          <button className={`rounded-lg w-1/6 h-8 ml-4 bg-rose-1`}>
            Answer
          </button>
        </div>
      </div>
      <div className={`${layout.ans}`}>
        <div className={`${layout.deets}`}>
          <button>
            <img src={beb} alt="profile" className="w-14 h-auto rounded-full"></img>
          </button>
          <div className={`${s.flexSS} flex-col w-full ml-4`}>
            <div className={`${s.flexBetween} w-full`}>
              <div className={`${s.flexCenter}`}>
                <div className="text-xl text-rose-1 font-bold">
                  Jaydeep Debnath
                </div>
                <MdVerified className="text-rose-1 mx-1 text-2xl" />
                <GoDotFill className="text-beige" />
                <div className="text-beige text-xl">
                  Following
                </div>
              </div>
              <RxCross2 className="text-beige text-xl" />
            </div>
            <div className={`${s.flexBetween} w-full`}>
              <div className="text-sm text-rose-2 font-bold">
                4th year CSE from Academy of Technology
              </div>
              <div className={`${s.flexCenter}`}>
                <GoDotFill className="text-beige" />
                <div className="text-beige text-sm">
                  5 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${layout.question}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut odio, voluptate impedit repudiandae veritatis id?
        </div>
        <div className={`${layout.answer}`}>
          <div className={`${s.flexSS} w-5/6`}>
            <div className="text-beige">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ipsum quis tempora dolorum? Molestias saepe doloremque, enim quidem minus iusto cupiditate deserunt rerum pariatur voluptate ipsam? Quos vel ipsum ad velit at quidem, iste, nemo animi dolorum corporis maxime quisquam dignissimos? A doloremque labore facere voluptatem maxime quasi quia iure, ipsum tempore reprehenderit illo, incidunt reiciendis esse blanditiis modi...
              <span className="text-rose-1 font-bold">(more)</span>
            </div>
          </div>
          <div className={`${s.flexSS} w-1/6 flex-col`}>
            <div className={`${s.skills}`}>#Java</div>
            <div className={`${s.skills}`}>#HTML</div>
            <div className={`${s.skills}`}>#CSS</div>
            <div className={`${s.skills}`}>#Javascript</div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`${layout.likes}`}>
          <div className={`${s.flexCenter}`}>
            <button>
              <HiOutlineThumbUp className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              20
            </div>
            <button>
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
            <button>
              <BiShare className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              2
            </div>
          </div>
          <button className={`rounded-lg w-1/6 h-8 ml-4 bg-rose-1`}>
            Answer
          </button>
        </div>
      </div>
      <div className={`${layout.ans}`}>
        <div className={`${layout.deets}`}>
          <button>
            <img src={beb} alt="profile" className="w-14 h-auto rounded-full"></img>
          </button>
          <div className={`${s.flexSS} flex-col w-full ml-4`}>
            <div className={`${s.flexBetween} w-full`}>
              <div className={`${s.flexCenter}`}>
                <div className="text-xl text-rose-1 font-bold">
                  Jaydeep Debnath
                </div>
                <MdVerified className="text-rose-1 mx-1 text-2xl" />
                <GoDotFill className="text-beige" />
                <div className="text-beige text-xl">
                  Following
                </div>
              </div>
              <RxCross2 className="text-beige text-xl" />
            </div>
            <div className={`${s.flexBetween} w-full`}>
              <div className="text-sm text-rose-2 font-bold">
                4th year CSE from Academy of Technology
              </div>
              <div className={`${s.flexCenter}`}>
                <GoDotFill className="text-beige" />
                <div className="text-beige text-sm">
                  5 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${layout.question}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores ut odio, voluptate impedit repudiandae veritatis id?
        </div>
        <div className={`${layout.answer}`}>
          <div className={`${s.flexSS} w-5/6`}>
            <div className="text-beige">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo ipsum quis tempora dolorum? Molestias saepe doloremque, enim quidem minus iusto cupiditate deserunt rerum pariatur voluptate ipsam? Quos vel ipsum ad velit at quidem, iste, nemo animi dolorum corporis maxime quisquam dignissimos? A doloremque labore facere voluptatem maxime quasi quia iure, ipsum tempore reprehenderit illo, incidunt reiciendis esse blanditiis modi...
              <span className="text-rose-1 font-bold">(more)</span>
            </div>
          </div>
          <div className={`${s.flexSS} w-1/6 flex-col`}>
            <div className={`${s.skills}`}>#Java</div>
            <div className={`${s.skills}`}>#HTML</div>
            <div className={`${s.skills}`}>#CSS</div>
            <div className={`${s.skills}`}>#Javascript</div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className={`${layout.likes}`}>
          <div className={`${s.flexCenter}`}>
            <button>
              <HiOutlineThumbUp className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              20
            </div>
            <button>
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
            <button>
              <BiShare className={`${s.icon4}`} />
            </button>
            <div className={`${s.likes_num}`}>
              2
            </div>
          </div>
          <button className={`rounded-lg w-1/6 h-8 ml-4 bg-rose-1`}>
            Answer
          </button>
        </div>
      </div>
      
    </div>
  )
}
