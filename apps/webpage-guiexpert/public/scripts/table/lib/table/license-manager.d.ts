/**
 * LicenseManager class responsible for managing license keys.
 * As it's a singleton class, it only allows one instance of itself to exist.
 *
 * Usage: LicenseManager.getInstance().setLicenseKey('Your API key');
 */
export declare class LicenseManager {
    private static instance;
    private alreadySet;
    private constructor();
    static getInstance(): LicenseManager;
    /**
     * Method to set the license key for the application.
     * A 'meta' element is created with content as 'guiexperttable=<license key>'
     * and appended into the head section of the document
     *
     * @param {string} key - The license key to set for the application.
     *
     * @return {void} - This method does not return anything
     */
    setLicenseKey(key: string | undefined): void;
}
