var DataTable;
function loadDataTable() {
    DataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/Order/getall'},
        "columns": [
            { data: 'id', "width": "5%" },
            { data: 'name', "width": "15%" },
            { data: 'phoneNumber', "width": "20%" },
            { data: 'applicationUser.email', "width": "25%" },
            { data: 'orderStatus', "width": "10%" },
            { data: 'orderTotal', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                                <a class="btn btn-primary mx-2" href="/admin/order/details?orderId=${data}">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                            </div>`
                },
                "width": "25%"
            }
        ]
    });
};

$(document).ready(function () {
    loadDataTable();
});