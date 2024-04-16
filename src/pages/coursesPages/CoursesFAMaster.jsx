import React from 'react';
import {Link} from 'react-router-dom'
import eco from '../../data/eco.jpg'
import management from '../../data/managment.jpg'
import commerce from '../../data/commerce.avif'
import accounting from '../../data/accounting.avif'
import HistoryNavigation from '../../components/HistoryNavigation';

import { Header,Category } from '../../components';

const CoursesFAMaster = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="mt-20 px-6 rounded-3xl">
      <HistoryNavigation/>
      <Header route="All Courses / Economic-Commercial-Management" title="Courses Categories" />
      <div className="categories grid gap-5 ">
        <Category link="/Courses/Economic-Commercial-Management/Financial-and-accounting/Master/Financial-and-banks"  ImgTitle={"financial and banks"} CatTitle="financial and banks" CatCourses="35"/>
        <Category link="/Courses/Economic-Commercial-Management/Financial-and-accounting/Master/Accounting-and-collection"  ImgTitle={"Accounting and collection"} CatTitle="Accounting and collection" CatCourses="35"/>
        
      </div>
    </div>
  );
};
export default CoursesFAMaster;
