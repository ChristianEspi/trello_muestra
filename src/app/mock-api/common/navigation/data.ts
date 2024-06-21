/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'apps.admin',
        title: 'Administración',
        type : 'collapsable',
        icon : 'heroicons_outline:user-group',
        link : '/apps/admin',
        children:[
            {
                id   : 'apps.admin.usuarios',
                title: 'Usuarios',
                type : 'basic',
                link : '/apps/admin/usuarios',
            },
            {
                id   : 'apps.admin.roles',
                title: 'Roles y Permisos',
                type : 'basic',
                link : '/apps/admin/rolesPermisos',
            },
        ]
    },
    {
        id   : 'apps.scrumboard',
        title: 'Espacio de trabajo',
        type : 'basic',
        icon : 'heroicons_outline:view-columns',
        link : '/apps/scrumboard',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
