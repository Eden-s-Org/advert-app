import { FileIcon, Home, PlusIcon, Settings, SettingsIcon, UserIcon } from "lucide-react";

  export default{
    NAVLINKS:[
{
    name:"Overview",
    path:"/dashboard",
    icon: Home,
},
{
    name:"Create Ad",
    path:"/dashboard/create-ad",
    icon: PlusIcon,
},
{
    name:"Vendor Ads",
    path:"/dashboard/ads",
    icon: FileIcon,
},
{
    name:"Profile",
    path:"/dashboard/profile",
    icon: UserIcon,
},
{
    name:"Settings",
    path:"/dashboard/settings",
    icon:SettingsIcon,
},
    ],
  };

  const test =() => {
    
  }