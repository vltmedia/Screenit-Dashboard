import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'MediaView',
      type: 'item',
      link:'/app/media-view'

    },
    {
      name: 'Sandbox',
      type: 'item',
      link:'/app/sandbox'

    }
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus}/>
    </CustomScrollbars>
  );
};

export default SideBarContent;
