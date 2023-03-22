export interface UserProfile {
   name: string;
   email: string;
   picture: string;
}

export const defaultProfile: UserProfile = {
   name: 'Undefined',
   email: '',
   picture: '',
};

export class SetUserProfile {
   static readonly type = '[User] SetUserProfile';
   constructor(public profile: UserProfile) {}
}

export class ClearUserProfile {
   static readonly type = '[User] ClearUserProfile';
}
