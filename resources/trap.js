var trap = {
  _header: null,
  _main: null,
  _mainSidebar: null,
  _mainBody: null,
  _footer: null,
  header () {
    if (this._header) return this._header
    this._header = make('div')
    this._header.id = 'header'
    this._header.innerText = 'header'
    return this._header
  },
  main () {
    if (this._main) return this._main
    this._main = make('div')
    this.main.id = 'main'
    appendChildren(this._main, this.mainSidebar(), this.mainBody())
    return this._main
  },
  mainSidebar () {
    if (this._mainSidebar) return this._mainSidebar
    this._mainSidebar = make('div')
    this._mainSidebar.id = 'main-sidebar'
    this._mainSidebar.innerText = 'mainSidebar'
    return this._mainSidebar
  },
  mainBody () {
    if (this._mainBody) return this._mainBody
    this._mainBody = make('div')
    this._mainBody.id = 'main-body'
    this._mainBody.innerText = 'mainBody'
    return this._mainBody
  },
  footer () {
    if (this._footer) return this._footer
    this._footer = make('div')
    this._footer.id = 'footer'
    this._footer.innerText = 'footer'
    return this._footer
  }
}
