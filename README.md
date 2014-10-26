rj.js
=====

Simple requirejs plugin to load in ReactJS Specifications


>Usage

``` javascript
/**
 * @jsx React.DOM
 */
define(['rj!YOU', 'rj!DIDNT', 'rj!HAVETO', 'rj!CUTMEOFF'], function (SOMEBODY, I, USEDTO, KNOW) {
    return {
        _name: 'SOMEBODY',
        render: function () {
            return (!this.props.friendsCollect)
                ? (
                    <div class='happened'></div>
                )
                : (
                    <div class='never-happened'>
                        <section id='notneeded-love' class='stranger rough feels'>
                            <div className='changeNumber'>
                                <form = 'Somebody'>
                                    <SOMEBODY/>
                                    <I/>
                                    <USEDTO/>
                                    <KNOW/>
                                </form>
                            </div>
                        </section>
                    </div>
                );
        }
    };
});
```
