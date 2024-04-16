import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import course from '../data/courseblue.svg'
import time from '../data/timeorange.svg'
import article from '../data/article.svg'
import calendar from '../data/calendar.svg'
import certificate from '../data/certificategreen.svg'
import {   dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import courseC from '../data/langage-c.jpg'
import webDev from '../data/web-developer.jpg'
import Student from '../data/student.jpg'
import logo from '../data/logo.svg';
import star from '../data/star-rate.svg'
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);
const Achive =({title,score,icon ,bgClr,borderClr})=>{
  return(
    <div className="achive  dark:text-gray-200 dark:bg-secondary-dark-bg  p-4   rounded-2xl" style={{background:bgClr,borderWidth:"1px", borderColor:borderClr}}>
            <div className="head flex  align-center gap-3 my-2">
              <div className="image  bg-white p-3 rounded-md">

              <img className='w-6 h-6' src={icon} alt="" />
              </div>
              <div className="achive-info">
                <p className='text-2xl font-semibold'>{score}</p>
                <p className=' text-gray-700 dark:text-gray-400  text-sm'>{title}</p>
              </div>
            </div>
          </div>
  )
}
const CourseNow =({creator,title,completedLessons,totalLessons,imgSrc})=>{
  const { currentColor } = useStateContext();
  const progress =Math.round((completedLessons * 100)/totalLessons)
  const ProgressWidth= `${progress}%`
  return(
    <div className="course rounded-xl overflow-hidden border border-gray-300 dark:border-gray-500"><img className=" rounded-t-md min-w-48 min-h-36" src={imgSrc} alt=""  />
          <div className="course-info  p-3">
          
          <div className="profile flex gap-2 align-center "><img className='w-6 h-6 rounded-full' src={Student} alt="" srcset="" /><p className='text-gray-500 dark:text-gray-400 text-sm'> {creator}</p></div>
          <p className='font-semibold mt-1 mb-6 text-gray-800 text-md'>{title}</p>
          <div className="course-progress flex justify-between mb-3 ">
            <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>{progress}%</span>
            <span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>{completedLessons}/{totalLessons} Lessons</span>
            </div>
            <span className='bg-gray-200 w-full h-2 rounded-full block mb-2' ><span style={{background:currentColor,width:ProgressWidth }} className=' block h-full rounded-full'></span></span>
          </div>
          </div>
  )
}
const Course =({creator,title,domain,rate,numberRate,CourseImg,ProfileImg,level})=>{
  const { currentColor } = useStateContext();
  return(
    <div className="course rounded-xl overflow-hidden border border-gray-300 dark:border-gray-500"><img className=" rounded-t-md min-w-48 min-h-36" src={CourseImg} alt=""  />
          <div className="course-info  p-3">
          <div className="domain border  border-gray-200 rounded-md font-semibold w-fit text-xs px-2 p-1" style={{color:currentColor}} >{domain}</div>
          <p className='font-semibold mt-1 my-4 text-lg'>{title}</p>
          <div className="profile flex gap-2 align-center pb-4 border-b border-b-gray-200"><img className='w-6 h-6 rounded-full' src={ProfileImg} alt="" srcset="" /><p className='text-gray-500 text-sm'> {creator}</p></div>
          </div>
          <div className="course-review justify-between flex align-center p-3 pt-0 text-xs gap-2">
            <div className="review flex gap-2 align-center">

              <img className='w-4 h-4' src={star} alt="" srcset="" /><p className='review font-semibold'>{rate} <span className='text-gray-400'>({numberRate})</span></p>
            </div>
            <span className='text-gray-400'>·</span>
            <div className="level flex gap-2 font-semibold align-center"><img className='w-4 h-4' src={certificate} alt="" srcset="" /> {level}</div>
          </div>
          <div className="button pt-1 pb-4 px-3">

          <button className='text-white text-sm font-semibold text-center p-3 rounded-lg w-full ' style={{background:currentColor}}>Start Now</button>
          </div>
          </div>
  )
}
const Article =({creator,title,domain,rate,numberRate,CourseImg,ProfileImg,timeSpent})=>{
  const { currentColor } = useStateContext();
  return(
    <div className="article rounded-xl overflow-hidden border border-gray-300 dark:border-gray-500"><img className=" rounded-t-md min-w-48 min-h-36" src={CourseImg} alt=""  />
          <div className="article-info  p-3">
          <div className="domain border  border-gray-200 rounded-md font-semibold w-fit text-xs px-2 p-1" style={{color:currentColor}} >{domain}</div>
          <p className='font-semibold mt-1 my-4 text-lg'>{title}</p>
          <div className="profile flex gap-2 align-center pb-4 border-b border-b-gray-200"><img className='w-6 h-6 rounded-full' src={ProfileImg} alt="" srcset="" /><p className='text-gray-500 dark:text-gray-400  text-sm'> {creator}</p></div>
          </div>
          <div className="article-review justify-between flex align-center p-3 pt-0 text-xs gap-2">
            <div className="review flex gap-2 align-center">

              <img className='w-4 h-4' src={star} alt="" srcset="" /><p className='review font-semibold'>{rate} <span className='text-gray-400'>({numberRate})</span></p>
            </div>
            <span className='text-gray-400'>·</span>
            <div className="level flex gap-2 font-semibold align-center"><img className='w-4 h-4' src={time} alt="" srcset="" /> {timeSpent} Read</div>
          </div>
          <div className="button pt-1 pb-4 px-3">

          <button className='text-white text-sm font-semibold text-center p-3 rounded-lg w-full ' style={{background:currentColor}}>Start Now</button>
          </div>
          </div>
  )
}

const ArticleNow =({imgSrc,domain,creator,title,PublishDate,timeSpent})=>{
  const { currentColor } = useStateContext();
  return(
  <div className="article flex p-3 gap-3 align-center rounded-xl overflow-hidden border border-gray-300 dark:border-gray-500">
          <img className=" rounded-lg w-20 h-20" src={imgSrc} alt=""  />
          <div className="article-info  ">
            <p className='text-gray-500 dark:text-gray-400  text-sm'><span className='' style={{color:currentColor}}>{domain} </span>· {creator}</p>
            <p className='font-semibold text-lg mb-1'>{title}</p>
          <div className='flex gap-2 text-gray-500 dark:text-gray-400 '><img src={calendar} alt=""  className='w-5 h-5 text-gray'/><span className='text-sm '>{PublishDate}</span>· <img src={time} className='w-5 h-5' alt="" srcset="" /><span className='text-sm '>{timeSpent} Read</span></div>
         
          </div>
          </div>
  )
}
const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-20 px-6">
      <div className="statics">
        <h3 className='main-title pl-1 text-2xl font-semibold  dark:text-gray-200'>Course Overview</h3>
        <div className="grid  gap-5 mt-5 " style={{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
          <Achive title="Total Courses " score="100" icon={course} bgClr={"#ccebff"} borderClr={"#5ebefd"}/>
          <Achive title="Total Hours " score="100" icon={time} bgClr={"#fee4cc"} borderClr={"#fd993f"}/>
          <Achive title="Total Articles " score="100" icon={article} bgClr={"#e5dfff"} borderClr={"#a898fd"}/>
          <Achive title="Total Certifactes " score="100" icon={certificate} bgClr={"#d8f2ee"} borderClr={"#88d6ca"}/>
          
        </div>
        <div className="recent-courses dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-5 my-5 bg-white">
          <div className="head align-center justify-between flex">
          <h3 className=' pl-1 dark:text-gray-200 text-lg font-semibold text-gray-950'>Your Courses (12)</h3>
          <button className='rounded-md p-2 text-sm' style={{ color:currentColor, border:`1px solid ${currentColor}`}}>View All</button>
          </div>
          <div className="grid gap-5 mt-5" style={{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>

          <CourseNow creator="Lazreg Mohamed" title="C Programming For Beginners" completedLessons={25} totalLessons={100} imgSrc={courseC}/>
          <CourseNow creator="Omar Mohamed" title="C Programming For Beginners" completedLessons={50} totalLessons={60} imgSrc={courseC}/>
          <CourseNow creator="Omar Bendahane" title="C Programming For Beginners" completedLessons={25} totalLessons={80} imgSrc={courseC}/>
          <CourseNow creator="Omar l3ez" title="C Programming For Beginners" completedLessons={29} totalLessons={30} imgSrc={courseC}/>
          
          
          
          
          </div>
        </div>
        <div className="recent-articles dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-5 my-5 bg-white">
          <div className="head align-center justify-between flex">
          <h3 className=' pl-1  text-lg font-semibold text-gray-950 dark:text-gray-200'>Your Articles (10)</h3>
          <button className='rounded-md p-2 text-sm' style={{ color:currentColor, border:`1px solid ${currentColor}`}}>View All</button>
          </div>
          <div className="grid  gap-5 mt-5" style={{gridTemplateColumns:"repeat(auto-fit, minmax(500px, 1fr))"}}>
          <ArticleNow imgSrc={webDev} domain="Computer Science" creator="Mohamed Lazreg" title="Build a Website in one minute" PublishDate="1 Jan,2023" timeSpent="7min"/>
          <ArticleNow imgSrc={webDev} domain="Computer Science" creator="Mohamed Lazreg" title="Build a Website in one minute" PublishDate="1 Jan,2023" timeSpent="7min"/>
          <ArticleNow imgSrc={webDev} domain="Computer Science" creator="Mohamed Lazreg" title="Build a Website in one minute" PublishDate="1 Jan,2023" timeSpent="7min"/>
          <ArticleNow imgSrc={webDev} domain="Computer Science" creator="Mohamed Lazreg" title="Build a Website in one minute" PublishDate="1 Jan,2023" timeSpent="7min"/>
          
          
          
          
          
          </div>
        </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="top-courses dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-5  bg-white">
              <div className="head align-center justify-between flex">
               <h3 className=' dark:text-gray-200 pl-1  text-lg font-semibold text-gray-950'>Popular Courses </h3>
              <button className='rounded-md p-2 text-sm' style={{ color:currentColor, border:`1px solid ${currentColor}`}}>View All</button>
              </div>
              <div className="courses grid  gap-5 mt-4" style={{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
                <Course creator="Lazreg Mohamed" title="C Programming For Beginners" rate="4.5" numberRate="200" CourseImg={courseC} ProfileImg={Student} domain="Computer Science" level="Licence 1" />
                <Course creator="Lazreg Mohamed" title="C Programming For Beginners" rate="4.5" numberRate="200" CourseImg={courseC} ProfileImg={Student} domain="Computer Science" level="Licence 1" />
              </div>

          </div>
            <div className="top-articles dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-5  bg-white">
              <div className="head align-center justify-between flex">
                <h3 className=' dark:text-gray-200 pl-1  text-lg font-semibold text-gray-950'>Popular Articles</h3>
                <button className='rounded-md p-2 text-sm' style={{ color:currentColor, border:`1px solid ${currentColor}`}}>View All</button>
              </div>
              <div className="courses grid gap-5 mt-4" style={{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
              <Article creator="Lazreg Mohamed" title="C Programming For Beginners" rate="4.5" numberRate="200" CourseImg={courseC} ProfileImg={Student} domain="Computer Science" timeSpent="8 min" />
              <Article creator="Lazreg Mohamed" title="C Programming For Beginners" rate="4.5" numberRate="200" CourseImg={courseC} ProfileImg={Student} domain="Computer Science" timeSpent="8 min" />

              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
