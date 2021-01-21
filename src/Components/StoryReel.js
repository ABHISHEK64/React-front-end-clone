import Story from './Story'
import React from 'react'
import './StoryReel.css'

const StoryReel=()=> {
    return (
       <div className='storyReel'>
              <Story
               image='https://cdn.mos.cms.futurecdn.net/FR7KjLWWQeLBRVXwanSaEm-970-80.jpg.webp'
               profileSrc='https://i.pinimg.com/474x/96/cd/95/96cd95acfa883ee4766d25c81bb67196.jpg'
               title='Abhishek Sachan'
              />
              <Story
               image='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/mia.png?8qLugpmTOoQnpef5EE5OLItMrU8uCf8c&size=770:433'
               profileSrc='https://media1.s-nbcnews.com/i/newscms/2015_02/835681/150106-mia-khalifa-830a_bcc977bc287eeeb9c3148b332b0e1a7b.jpg'
               title='Mia Khalifa'
              />
              <Story
               image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQMy8Hz0AwmgoS160iN6MizPD56gt_D0eSw&usqp=CAU'
               profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQMy8Hz0AwmgoS160iN6MizPD56gt_D0eSw&usqp=CAU'
               title='Sonny Sangha'
              />
              <Story
               image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYdcrS9dWZ6HMk1XwwYm0E5CCfqGr86VX7A&usqp=CAU'
               profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00KBwwXVMWYWb6KDXQ6IPOVcBo2XDpBhFcQ&usqp=CAU'
               title='Nazz Sina'
              />
       </div>
    )
}

export default StoryReel
