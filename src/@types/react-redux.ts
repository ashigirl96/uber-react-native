import 'react-redux'
import { AppDispatch, RootState } from '../store'
import { Store } from '@reduxjs/toolkit'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
  export function useDispatch<TDispatch = AppDispatch>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S>
}
