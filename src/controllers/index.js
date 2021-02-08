import Home from "./home.controller";
import {Shoes} from "./shoes.controller";
import Trash from "./trash.controller";
import Ordering from "./ordering.conroller";



const pages = {
  home: Home,
  shoes: Shoes,
  trash: Trash,
  ordering: Ordering
  // notFound: NotFound,
};

export { pages };
