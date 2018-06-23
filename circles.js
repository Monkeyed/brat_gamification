<<<<<<< HEAD
/*
The MIT License (MIT)

Copyright (c) 2014 Rostyslav Bryzgunov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/* filler function on achievement circles */
function fillCircles() {
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {
                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.worker.circle').circleProgress({
                    value: workerCircle,
                    size: 150,
                    fill: {
                        color: "red"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 500);
    });

//identifier
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.identifier.circle').circleProgress({
                    value: identifierCircle,
                    size: 150,
                    fill: {
                        color: "blue"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 1000);
    });

//marathon
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.marathon.circle').circleProgress({
                    value: marathonCircle,
                    size: 150,
                    fill: {
                        color: "green"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 1500);
    });

//streak
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.streak.circle').circleProgress({
                    value: streakCircle,
                    size: 150,
                    fill: {
                        color: "yellow"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 2000);
    });
=======
/*
The MIT License (MIT)

Copyright (c) 2014 Rostyslav Bryzgunov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/* filler function on achievement circles */
function fillCircles() {
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {
                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.worker.circle').circleProgress({
                    value: workerCircle,
                    size: 150,
                    fill: {
                        color: "red"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 500);
    });

//identifier
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.identifier.circle').circleProgress({
                    value: identifierCircle,
                    size: 150,
                    fill: {
                        color: "blue"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 1000);
    });

//marathon
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.marathon.circle').circleProgress({
                    value: marathonCircle,
                    size: 150,
                    fill: {
                        color: "green"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 1500);
    });

//streak
    $(document).ready(function () {
        setTimeout(function () {
            (function ($) {

                /*
                 * Example 2:
                 *
                 * - default gradient
                 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
                 */
                $('.streak.circle').circleProgress({
                    value: streakCircle,
                    size: 150,
                    fill: {
                        color: "yellow"
                    },
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html();
                });
            })(jQuery);
        }, 2000);
    });
>>>>>>> 6c541a28555db62ea9bf94caf67b3a7ac848e7f6
}