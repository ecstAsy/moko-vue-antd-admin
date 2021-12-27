/*
 * @Author: ecstAsy
 * @Date: 2021-12-27 13:32:37
 * @LastEditTime: 2021-12-27 13:32:37
 * @LastEditors: ecstAsy
 */

export interface StepItemTypes {
  title: string
  icon: string
}

export interface TransferStateTypes {
  account: null | string
  way: number
  payment: null | string
  name: null | string
  amount: number
}
