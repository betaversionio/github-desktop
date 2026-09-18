export interface StoredAccount {
  id: string;
  login: string;
  name?: string;
  avatarUrl?: string;
  tokenKey: string;
  baseUrl?: string; // For GitHub Enterprise Server
  managedByCli?: boolean; // Token is kept in sync with the `gh` CLI's own auth state
  cliHost?: string; // The `gh`-reported hostname this account belongs to (e.g. "github.com")
}

export interface TrackedRepository {
  id: string;
  owner: string;
  name: string;
  defaultBranch?: string;
  localPath: string;
  remoteUrl?: string;
  accountId?: string;
}
