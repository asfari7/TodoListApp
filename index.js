const txtInput = document.getElementById("txtInput");
const checkList = document.getElementById("checkList");
const listContainer = document.getElementById("listContainer");

$(document).ready(function () {
  $("#btnCreate").click(function () {
    if (txtInput.value === "") {
      $(".inputContainer").css("border", "1px solid red");
      $("p").css("display", "block");
    } else {
      $("ul").append(
        `<li> <input class ="checkbox" type="checkbox" name="list"/> ${txtInput.value} </li>`
      );
      $(".inputContainer").css("border", "none");
      $("p").css("display", "none");
      txtInput.value = "";
    }
  });

  $(document).on("change", ".checkbox", function () {
    if ($(this).prop("checked")) {
      $(this).parent().addClass("completed");
      $("#btnDelete").click(function () {
        $(".checkbox:checked").each(function () {
          $(this).parent().remove();
        });
      });
    } else {
      $(this).parent().removeClass("completed");
    }
  });
});
