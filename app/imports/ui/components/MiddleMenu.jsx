import React from "react";
import { Menu, Dropdown, Grid } from "semantic-ui-react";

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>KIDS</Menu.Item>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Hats</Dropdown.Item>
                <Dropdown.Item>Stickers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
