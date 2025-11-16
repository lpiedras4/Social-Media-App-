import { BiSolidHome, BiWorld } from "react-icons/bi";
import { BsFillPeopleFill, BsFillBookmarkFill, BsFillFileEarmarkImageFill} from "react-icons/bs";
export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
    icon: BiSolidHome
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
    icon: BiWorld
  },
  {
    imgURL: "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
    icon: BsFillPeopleFill
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
    icon: BsFillBookmarkFill
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
    icon: BsFillFileEarmarkImageFill
  },
];

export const bottombarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];