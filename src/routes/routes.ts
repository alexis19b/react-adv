import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = ()=> JSX.Element;

interface Route {
  id: number,
  path:string,
  component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children?: Route[],
}

// const LazyPage1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../../01-lazyload/pages/LazyPage3'));


export const routes:Route[] = [
  {
    id: 1,
    path: '/lazy',
    component: lazy(()=> import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
    name: 'LazyLoading Nested',
  },
  {
    id: 2,
    path: '/no-lazy',
    component: NoLazy,
    name: 'No-Lazy Loading',

  },



  // {
  //   id: 2,
  //   path: '/lazy2',
  //   component: LazyPage2,
  //   name: 'LazyPage-2',
  // },
  // {
  //   id: 3,
  //   path: '/lazy3',
  //   component: LazyPage3,
  //   name: 'LazyPage-3'
  // }
]