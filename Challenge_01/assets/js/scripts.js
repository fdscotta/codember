function procesar () {
    var itemsArray = $("#sourceText").val().toLowerCase().split(' ');

    var groupByCategory = Object.groupBy(itemsArray, item => {
        return item;
    });

    var finalResult = '';
    $.each(groupByCategory, function (index, value) {
        finalResult += index + value.length.toString();
    });

    document.getElementById("finalResult").innerHTML = finalResult;

}
