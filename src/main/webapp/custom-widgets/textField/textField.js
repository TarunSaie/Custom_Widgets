/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on widgets/variables within this block */
Widget.onReady = function() {
    /*
     * variables can be accessed through 'Widget.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Widget.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Widget.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Widget.Widgets.username.datavalue'
     */
    if (Widget.pageParams.leading_icon === "true") {
        Widget.Widgets.labelCaption.class += ' with-leading-icon';
        Widget.Widgets.textField.class += ' with-leading-icon';
    }
    if (Widget.pageParams.trailing_icon === "true") {
        Widget.Widgets.labelCaption.class += ' with-trailing-icon';
        Widget.Widgets.textField.class += ' with-trailing-icon';
    }
    Widget.Widgets.textField.type = Widget.pageParams.inputType;
    Widget.Widgets.composite.required = Widget.pageParams.required;
};
