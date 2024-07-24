/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Partial.onReady = function() {
    /*
     * variables can be accessed through 'Partial.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Partial.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Partial.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Partial.Widgets.username.datavalue'
     */
    if (Partial.pageParams.m3Switch === "true") {
        Partial.Widgets.toggle1.class += ' material3-switch';
    }
    if (Partial.pageParams.m2Switch === "true") {
        Partial.Widgets.toggle1.class += ' material-switch';
    }
    if (Partial.pageParams.iOSSwitch === "true") {
        Partial.Widgets.toggle1.class += ' iOS-switch';
    }
    if (Partial.pageParams.showDisable === "true") {
        Partial.Widgets.toggle1.class += ' switch-disabled';
    }
    if (Partial.pageParams.defaultChecked === "true") {
        Partial.Widgets.toggle1.class += ' default-checked';
    }
};