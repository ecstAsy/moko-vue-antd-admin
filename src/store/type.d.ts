/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:52:49
 * @LastEditTime: 2021-12-06 15:03:50
 * @LastEditors: ecstAsy
 */
export interface RootTypes {

}

export interface AppStateTypes {
  collapsed: boolean,
  allStatus: Array<object>
}

export interface UserTypes {
  token: string
  roles: Array<string>
}

export interface PermissionTypes {
  routers: Array<Object>
}

export interface AllStoreTypes extends RootTypes {
  app: AppStateTypes,
  user: UserTypes,
  permission: PermissionTypes
}
