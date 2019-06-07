
import app, { Component } from 'apprun';
declare var mdc;

//style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"

export default class extends Component {

  view = ({ title, element, sidebar, nav }) => <div id="root">
    <div class="drawer-frame-root">
      <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Mail</h3>
          <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
          <nav class="mdc-list">

            {sidebar.map(item => <a class="mdc-list-item" href={item.link} tabindex="-1">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{item.icon}</i>{item.text}</a>
            )}

            <hr class="mdc-list-divider" />
            <a class="mdc-list-item mdc-list-item--activated" href="#" tabindex="-1"><i
              class="material-icons mdc-list-item__graphic" aria-hidden="true">settings</i>Settings</a><a
                class="mdc-list-item" href="#" tabindex="-1"><i class="material-icons mdc-list-item__graphic"
                  aria-hidden="true">announcement</i>Help &amp; feedback</a>
          </nav>
        </div>
      </aside>
      <div class="mdc-drawer-scrim"></div>
      <div class="drawer-frame-app-content">
        <header class="mdc-top-app-bar drawer-top-app-bar">
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"><button
              class="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            >menu</button><span
              class="mdc-top-app-bar__title">{title}</span></section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">

              {nav.map(item => <button onclick={e => app.run(item.link, e)}
                class="mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                aria-label={item.text}>{item.text}</button>)}
            </section>
          </div>
        </header>
        <div class="drawer-main-content">
          <div class="mdc-top-app-bar--fixed-adjust"></div>
          <div id={element}></div>
        </div>
      </div>
    </div>
  </div>

  rendered = () => {
    const drawerEl = document.querySelector('.mdc-drawer');
    const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

    // Instantiate MDC Top App Bar (required)
    const topAppBarEl = document.querySelector('.mdc-top-app-bar');
    const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

    topAppBar.setScrollTarget(document.querySelector('.drawer-main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    })
  }
}

