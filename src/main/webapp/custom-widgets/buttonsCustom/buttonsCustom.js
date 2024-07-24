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
    Widget.Widgets.buttonM3.className += Widget.pageParams.style;
};
