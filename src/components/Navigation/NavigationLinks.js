import React from "react";
import { ListWrapper, ListItem, Link } from "./NavigationLinks.style";

const NavigationLinks = ({ isPrimary }) => {
  const links = [
    {
      name: "Man",
      url: "man",
    },
    {
      name: "Woman",
      url: "woman",
    },
    {
      name: "Kids",
      url: "kids",
    },
  ];

  return (
    <ListWrapper primary={isPrimary}>
      {links.map((el) => (
        <ListItem id={el.name}>
          <Link href={el.url}>{el.name}</Link>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default NavigationLinks;
