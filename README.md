# react-easy-navbar

A simple library allowing to create customizable, beautiful and responsive navbars.

Still in development

## Installation
Run the following command:
`npm install react-easy-navbar`

## Usage

### Imports 

```javascript
import {
  Navbar, NavlinkDropdown,
  NavlinkDropdownElement,Navlink, NavlinksList, Logo
} from 'react-easy-navbar'
```

### Components

####Navbar 
Mother component for initializing the Navbar

props:

| textColor       | hex, rgb(a) |
|-----------------|-------------|
| backgroundColor | hex only    |

####NavlinksList
Component that wrap the Navlinks

####Navlink
For a simple Navigation button. Should be inside
`<NavlinksList>`

props :

| text | Text placeholder for the button |
|------|---------------------------------|

####NavlinkDropdown
Component for a dropdown menu. Should be inside
`<NavlinksList>`

props :

| text | Text placeholder for the button |
|------|---------------------------------|

####NavlinkDropdownElement

Dropdown element, should be inside `<NavlinkDropdown>`

####Logo
For text logo. Will be at right if placed before NavlinksList and vice-versa.

props :
| text       | Text placeholder for the button |
|------------|---------------------------------|
| color      | CSS color (text color)          |
| fontSize   | CSS font-size                   |
| fontWeight | CSS font-weight                 |


### Example

```javascript
        <Navbar
          backgroundColor="#3949ab"
          textColor="white"
        >
          <NavlinksList>
            <Navlink text="Sign-up" />
            <Navlink text="Sign-in" />
            <Navlink text="F.A.Q" />
            <NavlinkDropdown text="Dropdown">
              <NavlinkDropdownElement text="Dropdown 1" textColor="black"/>
              <NavlinkDropdownElement text="Dropdown 2" textColor="black"/>
            </NavlinkDropdown>
          </NavlinksList>
          <Logo text="React-easy-nav"/>
        </Navbar>
```

