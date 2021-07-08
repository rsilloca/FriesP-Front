import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@fury/services/splash-screen.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService) {
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([
      {
        name: 'SISTEMA DE PEDIDOS - FRIES P.',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading'
      },
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true
      },
      {
        name: 'Pedidos',
        routeOrFunction: '/pedidos',
        icon: 'shopping_bag',
        position: 15
      },
      {
        name: 'Clientes',
        routeOrFunction: '/clientes',
        icon: 'groups',
        position: 20
      },
      {
        name: 'Catálogo',
        icon: 'list',
        position: 25,
        subItems: [
          {
            name: 'Categorías',
            routeOrFunction: '/catalogo/categorias',
            position: 10
          },
          {
            name: 'Productos',
            routeOrFunction: '/catalogo/productos',
            position: 15
          }
        ]
      },
      {
        name: 'Kardex',
        icon: 'sync_alt',
        position: 30,
        subItems: [
          {
            name: 'Proveedores',
            routeOrFunction: '/kardex/proveedores',
            position: 10
          },
          {
            name: 'Movimientos',
            routeOrFunction: '/kardex/movimientos',
            position: 15
          }
        ]
      },
      {
        name: 'Configuración',
        icon: 'settings',
        position: 35,
        subItems: [
          {
            name: 'Empresa y Sitio Web',
            routeOrFunction: '/configuracion/empresa-sitio-web',
            position: 10
          },
          {
            name: 'Métodos de pago',
            routeOrFunction: '/configuracion/metodos-pago',
            position: 15
          },
          {
            name: 'Descuentos',
            routeOrFunction: '/configuracion/descuentos',
            position: 20
          }
        ]
      },
      {
        name: 'Usuarios',
        routeOrFunction: '/usuarios',
        icon: 'lock',
        position: 40
      }
      // {
      //   name: 'All-In-One Table',
      //   routeOrFunction: '/tables/all-in-one-table',
      //   icon: 'assignment',
      //   badge: '22',
      //   badgeColor: '#2196F3',
      //   position: 15,
      // },
      // {
      //   name: 'Calendar',
      //   routeOrFunction: '/apps/calendar',
      //   icon: 'date_range',
      //   position: 20
      // },
      // {
      //   name: 'Inbox',
      //   routeOrFunction: '/apps/inbox',
      //   icon: 'inbox',
      //   position: 25
      // },
      // {
      //   name: 'Chat',
      //   routeOrFunction: '/apps/chat',
      //   icon: 'chat',
      //   position: 30,
      //   badge: '14',
      //   badgeColor: '#009688'
      // },
      // {
      //   name: 'USER INTERFACE',
      //   type: 'subheading',
      //   position: 35
      // },
      // {
      //   name: 'Components',
      //   routeOrFunction: '/components',
      //   icon: 'layers',
      //   position: 40
      // },
      // {
      //   name: 'Forms',
      //   icon: 'description',
      //   position: 45,
      //   subItems: [
      //     {
      //       name: 'Form Elements',
      //       routeOrFunction: '/forms/form-elements',
      //       position: 10
      //     },
      //     {
      //       name: 'Form Wizard',
      //       routeOrFunction: '/forms/form-wizard',
      //       position: 15
      //     }
      //   ]
      // },
      // {
      //   name: 'Drag & Drop',
      //   routeOrFunction: '/drag-and-drop',
      //   icon: 'mouse',
      //   position: 55
      // },
      // {
      //   name: 'WYSIWYG Editor',
      //   routeOrFunction: '/editor',
      //   icon: 'format_shapes',
      //   position: 60
      // },
      // {
      //   name: 'PAGES',
      //   type: 'subheading',
      //   position: 65
      // },
      // {
      //   name: 'Authentication',
      //   icon: 'lock',
      //   position: 66,
      //   subItems: [
      //     {
      //       name: 'Login Page',
      //       routeOrFunction: '/login',
      //       position: 5
      //     },
      //     {
      //       name: 'Register Page',
      //       routeOrFunction: '/register',
      //       position: 10
      //     },
      //     {
      //       name: 'Forgot Password',
      //       routeOrFunction: '/forgot-password',
      //       position: 15
      //     }
      //   ]
      // },
      // {
      //   name: 'Page Layouts',
      //   icon: 'view_compact',
      //   position: 67,
      //   subItems: [
      //     {
      //       name: 'Simple',
      //       routeOrFunction: '/page-layouts/simple',
      //       position: 5
      //     },
      //     {
      //       name: 'Simple Tabbed',
      //       routeOrFunction: '/page-layouts/simple-tabbed',
      //       position: 5
      //     },
      //     {
      //       name: 'Card',
      //       routeOrFunction: '/page-layouts/card',
      //       position: 10
      //     },
      //     {
      //       name: 'Card Tabbed',
      //       routeOrFunction: '/page-layouts/card-tabbed',
      //       position: 15
      //     },
      //   ]
      // },
      // {
      //   name: 'Coming Soon',
      //   routeOrFunction: '/coming-soon',
      //   icon: 'watch_later',
      //   position: 68
      // },
      // {
      //   name: 'Blank',
      //   routeOrFunction: '/blank',
      //   icon: 'picture_in_picture',
      //   position: 69
      // },
      // {
      //   name: 'Maps',
      //   icon: 'map',
      //   position: 70,
      //   subItems: [
      //     {
      //       name: 'Google Maps',
      //       routeOrFunction: '/maps/google-maps',
      //       position: 0
      //     }
      //   ],
      //   badge: '3',
      //   badgeColor: '#4CAF50'
      // },
      // {
      //   name: 'Material Icons',
      //   routeOrFunction: '/icons',
      //   icon: 'grade',
      //   position: 75
      // },
      // {
      //   name: 'Multi-Level Menu',
      //   icon: 'menu',
      //   position: 85,
      //   subItems: [
      //     {
      //       name: 'Level 1',
      //       subItems: [
      //         {
      //           name: 'Level 2',
      //           subItems: [
      //             {
      //               name: 'Level 3',
      //               subItems: [
      //                 {
      //                   name: 'Level 4',
      //                   subItems: [
      //                     {
      //                       name: 'Level 5',
      //                       routeOrFunction: '/level1/level2/level3/level4/level5'
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]);
  }
}