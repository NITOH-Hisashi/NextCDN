const currentDir = new URL('.', import.meta.url).pathname;

function root() {
  return RootLayout(Page);
}
