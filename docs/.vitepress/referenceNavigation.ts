
import type { DefaultTheme } from 'vitepress';

import type {
  NavigationJSON,
  NavigationItem as NavigationJSONItem
} from 'typedoc-plugin-markdown';


import navigationJSON from '../docs/reference/navigation.json' with { type: 'json' };


const navigationJSONItems: NavigationJSON = navigationJSON;

const sidebarItems = navigationJSONItems.map(convertItem);

export default sidebarItems;


function convertItem(
  inputItem: NavigationJSONItem
): DefaultTheme.SidebarItem {

  const link = inputItem.path ?? undefined;

  const items = inputItem.children?.map(convertItem);

  let outputItem: DefaultTheme.SidebarItem = {
    text: inputItem.title,
    link: link,
    items: items,
    base: '/reference/'
  };

  return outputItem;

}
