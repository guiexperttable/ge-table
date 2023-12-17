/**
 * LicenseManager class responsible for managing license keys.
 * As it's a singleton class, it only allows one instance of itself to exist.
 *
 * Usage: LicenseManager.getInstance().setLicenseKey('Your API key');
 */
export class LicenseManager {

  private static instance: LicenseManager;
  private alreadySet = false;

  // The constructor is private to prevent direct construction calls
  // with the `new` operator
  private constructor() {
  }


  public static getInstance(): LicenseManager {
    if (!LicenseManager.instance) {
      LicenseManager.instance = new LicenseManager();
    }

    return LicenseManager.instance;
  }

  /**
   * Method to set the license key for the application.
   * A 'meta' element is created with content as 'guiexperttable=<license key>'
   * and appended into the head section of the document
   *
   * @param {string} key - The license key to set for the application.
   *
   * @return {void} - This method does not return anything
   */
  public setLicenseKey(key: string | undefined) {
    if (key && !this.alreadySet) {

      const meta = document.createElement('meta');
      meta.content = 'license=' + key;
      meta.name = 'guiexperttable';
      document.getElementsByTagName('head')[0].appendChild(meta);

      this.alreadySet = true;
    }
  }

}
