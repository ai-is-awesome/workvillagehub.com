interface UserIdentity {
  id: string;
  // Add other fields for the UserIdentity type here
}
export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  phone_confirmed_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
    // Add other fields for the app_metadata type here
  };
  user_metadata: {
    // Add fields for the user_metadata type here
  };
  identities: UserIdentity[];
  created_at: string;
  updated_at: string;
}

export interface Job extends Record<string, any> {
  id: number;
  jobTitle: string;
  company: string;
  locationString?: string | null;
  technologies?: string[];
  addedOnPlatformDate: string;
  addedOnSourceDate: string | null;
}

export interface Technology {}
