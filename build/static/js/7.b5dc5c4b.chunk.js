(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{117:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABUJJREFUWEdlV+uOFkUQre4e3wMUFFm8/ULIRkPcZBPjShBRZCFGo+//BF+XOZfqmW/dzXxz73Pq1Knqnvb19fuMiGj8GZEtonX+6GIfEb0F/qN5C7zCN/ibeYrEpZyRMyNrP2fkacacMyauneo+Hp14IRoJcLwWQUz84NgkvG8EN6mFjIMEA+3CIHmKmEHgPGXMeSKgtozJ50E0o31zfZvJsEViAS0VWrRBKaxAqSUFMAjRIwkWACkFAA51DE5CUGiCwET80b66usWeQUviHjEgeI+E9G3w0k5OZPkygS09OWBwRwqM0zFyq0FpFD2F/PLqXSq/aZC+5IcXet+J7CoJd/0BGGQ4MEAV5S67pUfeAXxG4Ie3SeetKLtM2LVv3Et+XW/RmDLaT9JX9IgOaUgYTwSYEkhOI/pagkiTB568+F1VYIcLsICRfxHAfaViMAU4dAIUvU2l6ACKB070Rc6T0+Pc455cG+3i+zfJ6HDNwJCdJAxe51Clt6ZSpQIaiGBIoaUFAR5X9DwHB6nRqgrw2sXlr5klPwCgNvYFXgqQnAxZ4OBAFRi9KgKDE3jlWmSYGrFw5mzCR5e/rBSU6foYLD2QQPQkg8qoVDBdd31YaQDOTqA56h0YJCCY289nz1+JgA02CGjwMQzeYxwJ4FlWjjuhVYDJpEA1J6WF1yiAu1+pgFEePnsJPrv0vcXYEHGPjxi5VdhQniK32vJZR9ybUoPxnGfK7+OGY/sGluHrD579TC0kf4sBQG/b1qNj61DA1cDmdJwXakx0PUlbgAo7oiHwOdW4MqJbfrazj5/+lK2hzDDvSGqAYSOBA6FVHWzTGM7VU3YoqYsEwV1uOVkoDJbWxXmLdv/pTWqOAbDAtw1qDKZC1+wFd0bNlioBHKsSXJJuSgKrktuVoXtKGRzf//aGcwHqG4NtA1s3+FikVBF7g1pzg32AMSk1/mC2Ilj5BxmDs4DKA/ee36SqqsWgB0zAKUBVDCricjTR5YNjPbrEqQkNfwDlvYzOFFQaItq9y5foyiRMsKMKB09U/vGMWrLas72sGXLNzALGOQzHuoEHzuTXC+3edyCgFKALbnR8i80VgZQAHOdrnqh5odYIqyet1nhmOE60CJJVguzYmPTACzUi+Go0pYHgVkKqoAW4H9iAnJxKAa3nVHLUswAAqnXDIsF7VT0ow6vXMmFwHXKHhNLC6JvmCRrxID9ISPD6Owy++k5qtk/tRdckP7l+sxQoFTYTYUW4TUMRVsph0yxa80KVI545ABhMCoiEF3M6f/Cj1gMEP6RCJKyI/fE/AoDHi7WodWzLmgTjzQVc6WAXBNGHN3+sFKw0OB0431qP0ZIEOwa6qwKUrGV7LWyKiAnskUMvz4ZuBO3TV7esAq97YySiTqqxFMFkdUZAfUPNyAvUWtQcvhcq14wUZNifUI4uQVx/9PpDWcWgMgoJpIjgfBGgCiKglbR6Aq+sarDzqYSb0TKhJyuqFdE+/+1P2pEKJBfjO7Bdu0gUXqWCIZYSXqSSTHW7Q8fDuoAq7bMicR+//UsLEhJA9CCgYyjA6Gu/V7v9IAKgD4MKeV+oSCAuGG3CvTXr4Yx28e7vcwIGXwQ4oyEl6OOq8eqcO+CxKbkP1MdWdQkqsDekmo3a4/f/pCYIA3kKZfR1jHsTiuwEqv7Xcv7QD2jM/VOD76oc3QOqPIH75MO/8sAh8kpFP4mENvVx2e2wMl7VsDekO9nw/C8S+1rAnfALEigFWvSc0adBuddKRik5msu931/SqyOucvTHkz3EmY8p8DJNHxPxH/ZjHOXsirKUAAAAAElFTkSuQmCC"},118:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var n=t(3),i=t(0),c=t.n(i),s=t(14),l=t(15),r=t(47),o=t(117),A=t.n(o),m=t(48);t(118);a.default=c.a.memo(function(){document.title="EVENTS";var e=Object(i.useState)("all"),a=Object(n.a)(e,2),t=a[0],o=a[1],E=Object(i.useState)(!1),d=Object(n.a)(E,2),v=d[0],u=d[1],g=function(e){document.querySelectorAll(".tab").forEach(function(e){return e.classList.remove("is-active")}),e.target.classList.add("is-active"),o(e.target.classList.contains("ieee")?"ieee":e.target.classList.contains("wie")?"wie":"all")},C=function(){u(!0)},q=Object(i.useMemo)(function(){return"all"===t?m.a:m.a.filter(function(e){return e.keyword.toString().split(",").includes(t.toString())})},[t]);return c.a.createElement("div",{className:"events"},c.a.createElement("div",{className:"eventTitle"},c.a.createElement(l.a,{icon:"tabler:timeline-event"})," Events"),c.a.createElement("div",{className:"border"}),c.a.createElement("div",{className:"navigation d-flex justify-content-center container"},c.a.createElement(s.b,{className:"tab all is-active",onClick:g},c.a.createElement(l.a,{icon:"material-symbols:select-all-rounded"})," All"),c.a.createElement(s.b,{className:"tab ieee",onClick:g},c.a.createElement(l.a,{icon:"material-symbols:upcoming-outline"})," IEEE"),c.a.createElement(s.b,{className:"tab wie",onClick:g},c.a.createElement(l.a,{icon:"solar:women-broken"})," WIE")),c.a.createElement("div",{className:"cardContent"},q.length||"ieee"!==t?q.map(function(e,a){return c.a.createElement("div",{key:a,id:"card-".concat(a),className:"cardDiv d-flex justify-content-center"},c.a.createElement(r.a,{className:"eventTiltDiv",tiltReverse:!0,scale:1.2},c.a.createElement("div",{className:"eventCard"},c.a.createElement("div",{className:"eventDiv"},c.a.createElement("div",{className:"imgDiv p-2 "},c.a.createElement("img",{src:v?e.imgsrc:A.a,alt:e.title,className:"img-fluid rounded w-100",loading:"lazy"})),c.a.createElement("div",{className:"eventContent p-1"},c.a.createElement(l.a,{icon:"icons8:idea"})," ",e.description))),c.a.createElement("img",{src:e.imgsrc,alt:e.title,onLoad:C,style:{display:"none"}})))}):c.a.createElement("div",{className:"50vh d-flex justifycontentcenter"},"Stay Tuned for Upcoming Events!")))})}}]);
//# sourceMappingURL=7.b5dc5c4b.chunk.js.map