$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // --------------------------------------------------------------------------------

    $(function() {

        if( $(".сommittee-item") ) {

            var countScaleItems = $(".сommittee-item").length - 1;
            var countScaleItemsFor = 0;
            var heightThumbArr = [];

            var countCols;
            var countColsLength;

            console.log(heightThumbArr +"  "+ countScaleItems);

            for ( countScaleItemsFor = 0; countScaleItemsFor <= countScaleItems; ++countScaleItemsFor ) {

                heightThumbArr = [];

                countColsLength = $(".сommittee-item:eq("+ countScaleItemsFor +") .committee-col").length - 1;

                console.log(countColsLength);

                $(".сommittee-item:eq(0) .committee-thumb").css({"margin-top" : 0 + "px"})

                $(".сommittee-item:eq("+ countScaleItemsFor +") .committee-thumb").css({"margin-top" : -$(".сommittee-item:eq("+ countScaleItemsFor +") .committee-thumb").height() + "px"})

                for (countCols = 0; countCols <= countColsLength;  ++countCols ) {

                    heightThumbArr.push( $(".сommittee-item:eq("+ countScaleItemsFor +") .committee-col:eq("+ countCols +")").outerHeight() );

                }       

                $(".сommittee-item:eq("+ countScaleItemsFor +") .committee-col").outerHeight( Math.max.apply(null, heightThumbArr) );

                console.log(heightThumbArr);

            }        

            console.log(heightThumbArr);

        }

    });

    // --------------------------------------------------------------------------------

    $(function() {

        // $(".article-item-content-wrapp, .drop-box").addClass("js");

        // var countDropdownArticleH = $(".dropdown-article .article-item-content-h").length - 1;
        // var countDropdownArticleHFor = 0;

        // console.log(countDropdownArticleH);

        // for ( countDropdownArticleHFor = 0; countDropdownArticleHFor <= countDropdownArticleH; ++countDropdownArticleHFor ) {

        //     $(".dropdown-article .article-item-content-h:eq("+ countDropdownArticleHFor +") .drop-tr").width( $(".dropdown-article:eq("+ countDropdownArticleHFor +") .article-item-content-h").height() / 2 );

        // }


        $(".dropdown-article").addClass("js");
        $(".dropdown-boxes").addClass("js");
        $(".drop-box").addClass("js");


        $(".article-item-content-h").append("<span class='pseudo'></span>");

        $(".article-item-content-wrapp:first-child .article-item-content-h .pseudo").css({ "display" : "none" });


        var indexDrop;

        var indexDropItem;

        $(".drop-btn").click(function() {

            indexDrop = $(".drop-btn").index(this);

            $(this).toggleClass("active");

            $(".article-items:eq("+ indexDrop +")").toggleClass("js");

            $(".dropdown-article:eq("+ indexDrop +")").toggleClass("js");

        });


        $(".article-item-content-h").click(function() {

            indexDropItem = $(".article-item-content-h").index(this);

            $(".dropdown-boxes:eq("+ indexDropItem +")").toggleClass("js");

        });


        $(".dropdown_link").click(function(dropdownLinkEvent) {

            dropdownLinkEvent.preventDefault();

            indexDropdownLink = $(".dropdown_link").index(this);

            $(".drop-box:eq("+ indexDropdownLink +")").toggleClass("js");

        });



    });


});
