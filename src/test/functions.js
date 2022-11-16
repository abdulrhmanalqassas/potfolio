 const updateMenu = (isMenuClicked) => {
    if (!isMenuClicked) {
      return("burger-bar clicked");
     
    } else {
        return("burger-bar unclicked");
      
    }
  };

  export default updateMenu;