import app from 'apprun'

import Header from './header';
import Sidebar from './sidebar';
import Aside from './aside';
import Footer from './footer';
import Breadcrumb from './breadcrumb';

export default ({ element, title, sidebar, nav }) => <>
  <Header />
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav ps ps--active-y">
        <Sidebar sidebar={sidebar}/>
        <div class="ps__rail-x">
          <div class="ps__thumb-x" tabindex="0"></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
    <main class="main">
      <Breadcrumb />
      <div class="container-fluid" >
        <div class="card">
          <div className="card-body" id={element}></div>
        </div>
      </div>
    </main>
    <aside class="aside-menu">
      <Aside />
    </aside>
  </div>
  <Footer/>
</>