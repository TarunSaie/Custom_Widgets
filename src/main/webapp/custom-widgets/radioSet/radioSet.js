/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on Partials/variables within this block */
Widget.onReady = function() {
    /*
     * variables can be accessed through 'Widget.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Widget.Variables.loggedInUser.getData()
     *
     * Partials can be accessed through 'Widget.Partials' property here
     * e.g. to get value of text Partial named 'username' use following script
     * 'Widget.Partials.username.datavalue'
     */
    if (Widget.pageParams.showHorizontal === "true") {
        // Widget.Widgets.labelCaption.class += ' with-horizontal';
        Widget.Widgets.radioset.class += ' with-horizontal';
    } else {
        Widget.Widgets.radioset.class += ' with-vertical';
    }
    if (Widget.pageParams.topPlacement === "true") {
        Widget.Widgets.radioset.class += ' top-placement';
    }
    if (Widget.pageParams.startPlacement === "true") {
        Widget.Widgets.radioset.class += ' start-placement';
    }
    if (Widget.pageParams.bottomPlacement === "true") {
        Widget.Widgets.radioset.class += ' bottom-placement';
    }
    if (Widget.pageParams.showDisable === "true") {
        Widget.Widgets.radioset.class += ' radio-disabled';
    }
    Widget.Widgets.composite1.required = Widget.pageParams.required;

    Widget.radiosetChange = function($event, Partial, newVal, oldVal) {
        Widget.pageParams.datavalue = newVal;

    };
};
