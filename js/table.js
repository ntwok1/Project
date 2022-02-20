$(document).ready(function () {
  $("#table").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 394px)",
    scrollCollapse: false,
    
  });

  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  // $("div.toolbar").html(
  //   "<a  href='detailProduct.html'><input type='button'  value='Thêm sản phẩm mới'></a>"
  // );

  var table = $("#table").DataTable();

  $("#table tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  

  
  $("#table-n0").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    searching: false,
    scrollX: true,
    scrollY: "calc(100vh - 392px)",
    dom: '<"toolbar">frtip',
    deferRender: true,
    scrollCollapse: false,
  });
  $("div.toolbar").html(
    ' <input type="button" class="main-button sub t1" value="Lưu tất cả" />' +
      ' <input type="button" id="addRow" class="main-button sub t2" value="Thêm mới" />' +
      ' <input type="button" id="delRow" class="sub-button sub t3" value="Xóa" />'
  );
  var t = $("#table-n0").DataTable();
  $("#addRow").on("click", function () {
    t.row
      .add([
        "",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
        "+",
      ])
      .draw(false);
  });

  // Automatically add a first row of data
  $("#addRow").click();

  $("#delRow").click(function () {
    table.rows(".selected").remove().draw(false);
  });
  // $("div.toolbar").html(
  //   "<a  href='detailProduct.html'><input type='button'  value='Thêm sản phẩm mới'></a>"
  // );

  var table = $("#table-n0").DataTable();
  $("#table-n0 tbody").on("click", "tr", function () {
    $(this).toggleClass("selected");
  });

  $("#modal-toggle-n0-table").click(function () {
    setTimeout(function () {
      $("#table-n0").DataTable().columns.adjust();
    }, 1);
  });
  



  

  $("#table-t1-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_sub = $("#table-t1-sub").DataTable();

  $("#table-t1-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-t1-table").click(function () {
    setTimeout(function () {
      $("#table-t1-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-t2-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_s_sub = $("#table-t2-sub").DataTable();

  $("#table-t2-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_s_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-t2-table").click(function () {
    setTimeout(function () {
      $("#table-t2-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-t3-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_d_sub = $("#table-t3-sub").DataTable();

  $("#table-t3-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_d_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-t3-table").click(function () {
    setTimeout(function () {
      $("#table-t3-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-t4-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_g_sub = $("#table-t4-sub").DataTable();

  $("#table-t4-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_g_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-t4-table").click(function () {
    setTimeout(function () {
      $("#table-t4-sub").DataTable().columns.adjust();
    }, 1);
  });
  
});
