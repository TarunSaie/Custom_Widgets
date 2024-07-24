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
};
Partial.search1Select = function($event, widget, selectedValue) {
    Partial.selectedCountry = selectedValue;
    Partial.Widgets.popover1.close();
};
Partial.text2Change = function($event, widget, newVal, oldVal) {
    Partial.pageParams.datavalue = Partial.selectedCountry.dial_code + newVal;
};
Partial.popover1Show = function($event, widget) {
    Partial.Widgets.search1.$element.find('input.app-textbox').click()
};
