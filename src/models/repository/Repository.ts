import { Author } from './Author';

export abstract class Repository {
    public manifestSync: string;
    public abstract getManifestSyncState(callback: (syncCommit: string) => void): void;
    public abstract getAuthor(commitId: string, callback?: (author: Author) => void): void;
}