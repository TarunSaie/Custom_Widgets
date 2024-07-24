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
    if (Partial.pageParams.leading_icon === "true") {
        Partial.Widgets.labelCaption.class += ' with-leading-icon';
        Partial.Widgets.textField.class += ' with-leading-icon';
    }
    if (Partial.pageParams.trailing_icon === "true") {
        Partial.Widgets.labelCaption.class += ' with-trailing-icon';
        Partial.Widgets.textField.class += ' with-trailing-icon';
    }
    Partial.Widgets.textField.type = Partial.pageParams.inputType;
    Partial.Widgets.composite.required = Partial.pageParams.required;
};
