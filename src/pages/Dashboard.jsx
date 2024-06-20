import React, { useState } from 'react'
import SidebarCompo from './Component/SidebarCompo'
import CoursesCompo from './Component/CoursesCompo';
import OverviewCompo from './Component/OverviewCompo'

const Dashboard = () => {
    const [view, setView] = useState("overview");

    return (
        <div className='flex w-full h-full p-0 m-0 box-border'>
            <SidebarCompo setView={setView} />
            <div className='sm:ml-24 w-full sm:w-[calc(100%-6rem)]'>
                {
                    view === 'overview' ? <OverviewCompo /> : <CoursesCompo />
                }
            </div>
        </div>
    )
}

export default Dashboard