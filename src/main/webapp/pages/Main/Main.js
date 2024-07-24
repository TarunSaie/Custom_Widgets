/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Page.onReady = function() {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */
    Page.textboxConfig1 = {
        style: 'outlined',
        state: 'disabled',
        textConfigurations: 'input-text',
        trailingIcon: true,
        leadingIcon: true
    };
    Page.textboxConfig2 = {
        style: 'filled',
        state: 'enabled',
        textConfigurations: 'input-text',
        trailingIcon: true,
        leadingIcon: true
    };
    Page.textboxConfig3 = {
        style: 'filled',
        state: 'enabled',
        textConfigurations: 'input-text',
        trailingIcon: false,
        leadingIcon: false
    };
};

Page.afterClear = function() {
    console.log('Main method is called');
}
