(function() {

    var HelloWorld = React.createClass({

        render : function() {
            return (
            <div> Hello World </div>
            );
        }
    });

    var element = React.createElement(HelloWorld, {});

    ReactDOM.render(element, document.getElementById("app"));

})();