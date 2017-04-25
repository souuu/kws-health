import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'Résultats', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Liste des patients', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: 'upgrade', title: 'Nous Contacter !', menuType: MenuType.LEFT, icon:'pe-7s-mail' }
];
