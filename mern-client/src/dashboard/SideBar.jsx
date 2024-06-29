import React from 'react'

import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profile.jpg"

const Sidebar = () => {
  return (    
    <FlowbiteSidebar aria-label="Sidebar with content separator example">
        <FlowbiteSidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
            Flowbite
        </FlowbiteSidebar.Logo>
        <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                Upload Book
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                Manage Books
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiUser}>
                Users
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
                Products
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/logout" icon={HiTable}>
                Log Out
            </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={HiViewBoards}>
                Documentation
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#" icon={BiBuoy}>
                Help
            </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
    </FlowbiteSidebar>

  )
}

export default Sidebar