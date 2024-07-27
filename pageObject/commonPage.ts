const { I } = inject()

class CommonPage {

   /**
   * This function returns a locator that can find an element using XPath with the specified data-id value.
   */
 async elementByDataId(value: string) {
    return locate(`//*[@data-id='${value}']`)
  }

  /**
   * This function returns a locator that can find an element using XPath with the specified text value.
   */
  async elementByText(value: string) {
    return locate(`//*[text()='${value}']`)
  } 

  /**
    * This function returns a locator that can find <p> elements with the exact specified text content.
    */
  async elementByTextHeading(value: string) {
    return locate(`//p[text()='${value}']`)
  }

  /**
    * This function returns a locator that can find an element using XPath with the specified aria label value.
    */
  async elementByAriaLabel(name: string) {
    return locate(`//*[@aria-label='${name}']`)
  }

  /**
    * element by placeholder
    * @param value
    */
  async elementByPlaceholder(value: string) {
    return locate(`//*[@placeholder='${value}']`)
  } 

   /**
    * element by id
    * @param value
    */
   async elementById(value: string) {
  return locate(`//*[@id='${value}']`)
} 

 /**
    * element by type
    * @param value
    */
 async elementByType(value: string) {
  return locate(`//*[@type='${value}']`)
 }
}

  export default new CommonPage()