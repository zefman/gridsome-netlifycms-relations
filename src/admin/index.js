import CMS from "netlify-cms"
import uuid from 'uuid/v4';

/**
 * Create the control widget, this will add a form element to the cms UI
 */
const IdControl = window.createClass({  
    getInitialState: function() {    return {};  },
    componentDidMount: function() {
        // If this widget doesn't have an ID yet we create one using the UUID package    
        if (!this.props.value) { 
            this.props.onChange(uuid());    
        } 
    }, 
    handleChange() { 
        this.props.onChange(uuid());
    },  
    render: function() { 
        return window.h('p', null, `${this.props.value}`);
    }
});

/**
 * Create the preview widget, this will display the widgets value in the NetlifyCMS preview pane
 */
const IdPreview = window.createClass({  
    getInitialState: function() { console.log(this.props); return {}; }, 
    render: function() { 
        return window.h('p', null, `ID: ${this.props.value}`);  
    }
});

// Register the widget. This lets NetlifyCMS know about our custom widget
CMS.registerWidget('id', IdControl, IdPreview);