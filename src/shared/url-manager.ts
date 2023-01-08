class URLManagerStore {
    public getHomeURL() {return '/'}
    public getThemeURL() {return '/theme'}
}

const URLManager = new URLManagerStore();
export { URLManager };