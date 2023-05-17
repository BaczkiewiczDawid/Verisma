import React from "react";
import { ListWrapper, ListItem, Link } from "./NavigationLinks.style";

const NavigationLinks = ({ isPrimary }) => {
  return (
    <ListWrapper primary={isPrimary}>
      <ListItem>
        <Link href="#">Link 1</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Link 2</Link>
      </ListItem>
      <ListItem>
        <Link href="#">Link 3</Link>
      </ListItem>
    </ListWrapper>
  );
};

export default NavigationLinks;
