import updateMenu  from "./functions";

test ("update the menu " , ()=>{
    expect(updateMenu(false)).toBe("burger-bar clicked")
} )
