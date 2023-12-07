import {
  DashboardOutlined, 
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  FileOutlined,
  MobileOutlined,
  SettingOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'Main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main.title',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashbord',
      path: `${APP_PREFIX_PATH}/main/dashbord`,
      title: 'sidenav.main.dashbord',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-project-list',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.clients.list',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-clients-groups',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'sidenav.main.clients.groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promo',
      path: `${APP_PREFIX_PATH}/main/promo`,
      title: 'sidenav.main.promo',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlinePoints',
      path: `${APP_PREFIX_PATH}/main/offlinePoints`,
      title: 'sidenav.main.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offlinePoints-address',
          path: `${APP_PREFIX_PATH}/main/offlinePoints/address`,
          title: 'sidenav.main.offlinePoints.address',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-offlinePoints-geozone',
          path: `${APP_PREFIX_PATH}/main/offlinePoints/geozone`,
          title: 'sidenav.main.offlinePoints.geozone',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailings',
      path: `${APP_PREFIX_PATH}/main/mailings`,
      title: 'sidenav.main.mailings',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system.title',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'system-setting',
      path: `${APP_PREFIX_PATH}/system/setting`,
      title: 'sidenav.system.setting',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobileApp`,
      title: 'sidenav.system.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree
]

export default navigationConfig;
