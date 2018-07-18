$(document).ready(function () {
            function animate() {
                var parent_element = $("#pt-main");
                var curr = parent_element.find(".pt-page-current");
                if (curr.is(':last-child')) {
                    alert("last");
                } else {
                    curr.removeClass("pt-page-current pt-page-moveFromRight");
                 curr.next().addClass("pt-page-current pt-page-moveFromRight");
                }
            }

            $("#next").bind("click", function () {
                animate();
            });

        });