/**
 * Define all html elements of the app
 */
export class Components {
  /**
   * @param {string} tagname
   * @param {Array<string>} classList
   */
  constructor(tagname, classList) {
    this.tagname = tagname;
    this.classList = classList;
  }
  /**
   * Create the element in DOM with a classList
   * @returns {Element}
   */
  create() {
    const el = document.createElement(this.tagname);
    el.classList = this.classList.join(' ');
    return el;
  }
}

export class Text extends Components {
    /**
   * Create the element with text inside
   * @param {string} text 
   * @returns {Element}
   */
    create(text) {
      const el = document.createElement(this.tagname);
      el.classList = this.classList.join(' ');
      el.textContent = text;
      return el;
    }
}