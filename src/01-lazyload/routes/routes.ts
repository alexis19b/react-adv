import { lazy, LazyExoticComponent } from 'react';


type JSXComponent = ()=> JSX.Element;

interface Route {
  id: number,
  path:string,
  component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children?: Route[],
}

const LazyPage1 = lazy(()=> import('../../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(()=> import('../../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(()=> import('../../01-lazyload/pages/LazyPage3'));


export const routes:Route[] = [
  {
    id: 1,
    path: '/lazy1',
    component: LazyPage1,
    name: 'LazyPage-1',
  },
  {
    id: 2,
    path: '/lazy2',
    component: LazyPage2,
    name: 'LazyPage-2',
  },
  {
    id: 3,
    path: '/lazy3',
    component: LazyPage3,
    name: 'LazyPage-3'
  }
]