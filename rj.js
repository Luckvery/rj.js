define(['react'], function () {
        return ({
            load: function (reactSpecification, parentRequire, callback) {
                parentRequire([reactSpecification], function (Thingy) {
                        callback(
                            React.createClass(Thingy)
                        );
                    }
                );

            }
        });
    }
);