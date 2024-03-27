enum RoutePath {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
}

enum RouteName {
  HOME = 'home',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const AdminPages = [

]

export const StudentPages = [

]

export const AppRoutes = {
  home: {path: RoutePath.HOME, name: RouteName.HOME},
  login: {path: RoutePath.LOGIN, name: RouteName.LOGIN},
  register: {path: RoutePath.REGISTER, name: RouteName.REGISTER},
} as const

