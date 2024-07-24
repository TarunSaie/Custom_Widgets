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
    if (Widget.pageParams.showIntermediate === "true") {
        Widget.Widgets.checkboxset1.class += ' intermediate-checkbox';
    }
    if (Widget.pageParams.showHorizontal === "true") {
        Widget.Widgets.checkboxset1.class += ' with-horizontal-row';
    } else {
        Widget.Widgets.checkboxset1.class += ' with-vertical-row';
    }
    if (Widget.pageParams.topPlacement === "true") {
        Widget.Widgets.checkboxset1.class += ' top-placement-check';
    }
    if (Widget.pageParams.startPlacement === "true") {
        Widget.Widgets.checkboxset1.class += ' start-placement-check';
    }
    if (Widget.pageParams.bottomPlacement === "true") {
        Widget.Widgets.checkboxset1.class += ' bottom-placement-check';
    }
    if (Widget.pageParams.showDisable === "true") {
        Widget.Widgets.checkboxset1.class += ' check-disabled';
    }
    Widget.Widgets.composite1.required = Widget.pageParams.required;
    Widget.checkboxset1Change = function($event, widget, newVal, oldVal) {
        Widget.pageParams.datavalue = newVal;
    };
};
