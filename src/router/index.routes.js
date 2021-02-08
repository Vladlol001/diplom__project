import { pages } from "../controllers/index";
import Header from '../templates/header';
import Footer from '../templates/footer';
import Regestration from '../templates/regestration';
import Authorization from '../templates/authorization';
import Search from '../controllers/search.controller';
import regController from '../controllers/regestration.contoller';
import authController from '../controllers/authorization.controller';

const router = async (route) => {
  let content = document.getElementById("root");
  let header = document.querySelector('header');
  let footer = document.querySelector('footer');
  let wrap = document.querySelector('.wrap');
  content.innerHTML = "";
  // console.log(route);
  header.innerHTML = Header();
  footer.innerHTML = Footer();
  if(!document.querySelector('.regestration__window') || !document.querySelector('.authorization__window')){
    let newRegDiv = document.createElement('div');
    let newAuthDiv = document.createElement('div');    
    newRegDiv.innerHTML = Regestration();
    newAuthDiv.innerHTML = Authorization();
    wrap.before(newRegDiv);
    wrap.before(newAuthDiv);
  }
  Search();
  regController();
  authController();

  switch (route) {
    case "": {
      return content.appendChild(pages.home());
    }
    case "#/nikeShoes": {
      return content.appendChild(await pages.shoes('http://localhost:3006/nikeShoes'));
    }
    case "#/adidasShoes": {
      return content.appendChild(await pages.shoes('http://localhost:3006/adidasShoes'));
    }
    case "#/pumaShoes": {
      return content.appendChild(await pages.shoes('http://localhost:3006/pumaShoes'));
    }
    case "#/newBalanceShoes": {
      return content.appendChild(await pages.shoes('http://localhost:3006/newBalanceShoes'));
    }
    case "#/searchPage": {
      return content.appendChild(await pages.shoes('http://localhost:3006/allShoes'));
    }
    case "#/trash": {
      return content.appendChild(pages.trash());
    }
    case "#/ordering": {
      return content.appendChild(await pages.ordering());
    }
    // default: {
    //   return content.appendChild(pages.notFound());
    // }
  }

};

export { router };
