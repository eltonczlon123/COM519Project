$(function () {
    $.ajax({
        type: "GET",
        url: "/recipes",
        dataType: "json",
        success: function (result, status, xhr) {
            const table = $('#food-container');
            console.log('recipes', result);
            const res = result.data.foodStock.map(res => {

                table.append( `<div class="col"><div class="card mb-4 box-shadow" id="${res._id}">
                        <div class="card-header">
                            <h4 class="my-0 font-weight-normal">${res.name}</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                <li><strong>Quantity: <span class="item-qty">${res.quantity}</span></strong></li>
                            </ul>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary" onclick="handleIndDec('${res._id}',1)">Add</button>
                            <button type="button" class="btn btn-lg btn-block btn-outline-primary" onclick="handleIndDec('${res._id}',-1)">Remove</button>
                        </div>
                    </div></div>`)

            });
            $('#food-cards').html(table)
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
})
function handleIndDec(id,val){
    $.ajax({
        type: "PUT",
        url: "/recipes",
        contentType: "application/json",
        dataType: "json",
        data:JSON.stringify({_id:id,val:val}),
        success: function (result, status, xhr) {
            $('#'+id).find('.item-qty').text(result.data.foodStock.quantity)
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    })
}

