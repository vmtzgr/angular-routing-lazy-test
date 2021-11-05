import { Injectable } from '@angular/core';
import { State, Action, StateContext,  Selector } from '@ngxs/store';
import { User } from '../../models/user.model';
import { Login, Logout } from './auth.action';

  export interface AuthStateModel {
    user: User | null;
    isInitializing: boolean;
  }


  @State<AuthStateModel>({
    name: 'auth',
    defaults: {
      user: null,
      isInitializing: false,
  },
  })

  @Injectable()
  export class AuthState {
    constructor() {}

  @Selector()
  static isInitializing(state: AuthStateModel): boolean {
  return state.isInitializing;
  }

  @Selector()
  static userIsAuthenticated(state: AuthStateModel): boolean {
    return !!state.user?.token;
  }

  @Selector()
  static user(state: AuthStateModel): User {
    return state.user!;
  }

  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.user?.token!;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, {username, password}: Login){
    
  }



  }

