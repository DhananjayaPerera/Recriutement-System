$(document).ready(function () {
    var counter = 2;

    $(".expAdd").click(function () {

        if (counter > 5) {
            alert("Only 5 fieldsets allowed");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('li'))
                .attr("id", 'expChild' + counter);

        var expContainer = '<label class="cFieldName">Designation<span class="cMandatory">*</span></label>' +
                '<input class="cInputField expdesignation" type="text" value="" name="expdesignation[]" maxlength="250"/>' +
                '<label class="cFieldName">Company<span class="cMandatory">*</span></label>' +
                '<input class="cInputField expcompany" type="text" value="" name="expcompany[]" maxlength="250"/>' +
                '<div class="cClear"></div>' +
                '<div class="cDates">' +
                '<label class="cFieldName">From<span class="cMandatory">*</span></label>' +
                '<input class="cInputFieldNumber cMonth expfrommonth" type="text" value="" name="expfrommonth[]" maxlength="2"/>' +
                '<label class="cFieldName cInfoDate">MM</label>' +
                '<input class="cInputFieldNumber cYear expfromyear" type="text" value="" name="expfromyear[]" maxlength="4"/>' +
                '<label class="cFieldName cInfoDate">YYYY</label>' +
                '</div>' +
                '<div class="cDates">' +
                '<label class="cFieldName">To<span class="cMandatory">*</span></label>' +
                '<input class="cInputFieldNumber cMonth exptomonth" type="text" value="" name="exptomonth[]" maxlength="2"/>' +
                '<label class="cFieldName cInfoDate">MM</label>' +
                '<input class="cInputFieldNumber cYear exptoyear" type="text" value="" name="exptoyear[]" maxlength="4"/>' +
                '<label class="cFieldName cInfoDate">YYYY</label>' +
                '</div>' +
                '<div class="cClear"></div>' +
                '<label class="cFieldName">Key Projects/Assignments<span class="cMandatory">*</span></label>' +
                '<textarea class="cFieldComments expprojects" type="text" value="" name="expprojects[]"></textarea>';

        newTextBoxDiv.after().html(expContainer);
        newTextBoxDiv.appendTo(".expTopContainer");
        counter++;
    });

    $(".expRem").click(function () {
        if (counter == 1) {
            alert("No more textbox to remove");
            return false;
        }
        counter--;
        $("#expChild" + counter).remove();
    });

// Educational field
    var educounter = 2;
    $(".eduAdd").click(function () {

        if (educounter > 5) {
            alert("Only 5 fieldsets allowed");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('li'))
                .attr("id", 'eduChild' + educounter);

        var expContainer = '<label class="cFieldName">University/Institute<span class="cMandatory">*</span></label>' +
                '<input class="cInputField eduuni" type="text" value="" name="eduuni[]" maxlength="250"/>' +
                '<label class="cFieldName">Course<span class="cMandatory">*</span></label>' +
                '<input class="cInputField educourse" type="text" value="" name="educourse[]" maxlength="250"/>' +
                '<label class="cFieldName">Year of Completion<span class="cMandatory">*</span></label>' +
                '<input class="cInputFieldNumber cYear eduuniyears" type="text" value="" name="eduuniyears[]" maxlength="4"/>' +
                '<label class="cFieldName cInfoDate">YYYY</label>' +
                '<label class="cFieldName">Grade/GPA<span class="cMandatory">*</span></label>' +
                '<input class="cInputField eduGPA" type="text" value="" size="12" name="eduGPA[]" maxlength="15"/>' +
                '<label class="cFieldName">Significant Achievements</label>' +
                '<p class="cInfo">Specify details of the most significant achievements, including awards, recognitions and/or the most significant projects you\'ve worked on.</p>' +
                '<textarea class="cFieldComments" type="text" value="" name="eduacheive[]"></textarea>';

        newTextBoxDiv.after().html(expContainer);
        newTextBoxDiv.appendTo(".eduTopContainer");
        educounter++;
    });

    $(".eduRem").click(function () {
        if (educounter == 1) {
            alert("No more textbox to remove");
            return false;
        }
        educounter--;
        $("#eduChild" + educounter).remove();
    });

// Publications field
    var pubcounter = 2;
    $(".pubAdd").click(function () {

        if (pubcounter > 5) {
            alert("Only 5 fieldsets allowed");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('li'))
                .attr("id", 'pubChild' + pubcounter);

        var expContainer = '<label class="cFieldName">Journal/Institute</label>' +
                '<input class="cInputField" type="text" value="" name="pubinst[]" maxlength="250"/>' +
                '<label class="cFieldName">Published Year</label>' +
                '<input class="cInputFieldNumber cYear" type="text" value="" name="pubyear[]" maxlength="4"/>' +
                '<label class="cFieldName cInfoDate">YYYY</label>' +
                '<label class="cFieldName">Details</label>' +
                '<textarea class="cFieldComments" type="text" value="" name="pubdetails[]"></textarea>';

        newTextBoxDiv.after().html(expContainer);
        newTextBoxDiv.appendTo(".pubTopContainer");
        pubcounter++;
    });

    $(".pubRem").click(function () {
        if (pubcounter == 1) {
            alert("No more textbox to remove");
            return false;
        }
        pubcounter--;
        $("#pubChild" + pubcounter).remove();
    });


// Acheivements field
    var achcounter = 2;
    $(".achAdd").click(function () {

        if (achcounter > 5) {
            alert("Only 5 fieldsets allowed");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('li'))
                .attr("id", 'achChild' + achcounter);

        var expContainer = '<label class="cFieldName">Year</label>' +
                '<input class="cInputFieldNumber cYear" type="text" value="" name="achyear[]" maxlength="4"/>' +
                '<label class="cFieldName cInfoDate">YYYY</label>' +
                '<label class="cFieldName">Details</label>' +
                '<textarea class="cFieldComments" type="text" value="" name="achdetails[]"></textarea>';

        newTextBoxDiv.after().html(expContainer);
        newTextBoxDiv.appendTo(".achTopContainer");
        achcounter++;
    });

    $(".achRem").click(function () {
        if (achcounter == 1) {
            alert("No more textbox to remove");
            return false;
        }
        achcounter--;
        $("#achChild" + achcounter).remove();
    });


    $("input.post").change(function () {
        if (this.value == "Engineering") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".eng").prop("disabled", false);
            $(".eng").addClass("mandtPost");
        } else if (this.value == "Operations") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".operations").prop("disabled", false);
            $(".operations").addClass("mandtPost");
        } else if (this.value == "Sales - Marketing") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".salesmkt").prop("disabled", false);
            $(".salesmkt").addClass("mandtPost");
        } else if (this.value == "Technical Content") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".techcont").prop("disabled", false);
            $(".techcont").addClass("mandtPost");
        } else if (this.value == "Product Management") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".pm").prop("disabled", false);
            $(".pm").addClass("mandtPost");
        } else if (this.value == "Business Development") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".bizdev").prop("disabled", false);
            $(".bizdev").addClass("mandtPost");
        } else if (this.value == "Delivery") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".delivery").prop("disabled", false);
            $(".delivery").addClass("mandtPost");
        } else if (this.value == "Finance") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".finance").prop("disabled", false);
            $(".finance").addClass("mandtPost");
        } else if (this.value == "Training") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".training").prop("disabled", false);
            $(".training").addClass("mandtPost");
        } else if (this.value == "Solutions Architecture") {
            $(".fieldPosition").prop("disabled", true).removeClass("mandtPost");
            $(".solutionsarchitecture").prop("disabled", false);
            $(".solutionsarchitecture").addClass("mandtPost");
        }

    });

    $(".btnsubmit").click(function (event) {
        if ($('input.post:checked').length <= 0) {
            alert("Please select the Area of the Post you are applying for");
            return false;
        }
        if ($(".mandtPost").val() == "") {
            alert("Please select the Post you are applying for");
            return false;
        }
        if ($("input[name=Wso2OfficeCity]:checked").length <= 0) {
            alert("Please select the WSO2 Office location");
            $("input[name=Wso2OfficeCity]").focus();
            return false;
        }
        if ($(".firstname").val() == "") {
            alert("Please enter First name");
            $(".firstname").focus();
            return false;
        }
        if ($(".lastname").val() == "") {
            alert("Please enter Last name");
            $(".lastname").focus();
            return false;
        }
        if ($(".email").val() == "") {
            alert("Please enter Email");
            $(".email").focus();
            return false;
        }
        if (validateemail($(".email").val())) {
            alert("Please enter a valid Email");
            $(".email").focus();
            return false;
        }
        if ($(".phone").val() == "") {
            alert("Please enter Phone Number");
            $(".phone").focus();
            return false;
        }
        if ($(".company").val() == "") {
            alert("Please enter Company");
            $(".company").focus();
            return false;
        }
        if ($(".jobtitle").val() == "") {
            alert("Please enter Job Title");
            $(".jobtitle").focus();
            return false;
        }
        if ($(".country").val() == "") {
            alert("Please select the country");
            $(".country").focus();
            return false;
        }
        if ($(".country").val() == "United States") {
            if ($(".state").val() == "") {
                alert("Please select the state");
                $(".state").focus();
                return false;
            }
        }
        if ($(".country").val() == "Canada") {
            if ($(".state").val() == "") {
                alert("Please select the state");
                $(".state").focus();
                return false;
            }
        }
        if ($(".linkBlog").val() == "") {
            alert("Please enter LinkedIn/Blog references");
            $(".linkBlog").focus();
            return false;
        }
        if ($(".cv_upload").val() == "") {
            alert("Please upload your CV");
            $(".cv_upload").focus();
            return false;
        }
// validate each work experience fields
        if (($(".expYears").val() != "0") && $(".expYears").val() != "") {
            if (validate_field("expdesignation")) {
                alert("Please enter Designation");
                $(".expdesignation").focus();
                return false;
            }
            if (validate_field("expcompany")) {
                alert("Please enter Company Name");
                $(".expcompany").focus();
                return false;
            }
            if (validate_field("expfrommonth")) {
                alert("Please enter the Month");
                $(".expfrommonth").focus();
                return false;
            }
            if (validate_field("expfromyear")) {
                alert("Please enter the Year");
                $(".expfromyear").focus();
                return false;
            }
            if (validate_field("exptomonth")) {
                alert("Please enter the Month");
                $(".exptomonth").focus();
                return false;
            }
            if (validate_field("exptoyear")) {
                alert("Please enter the Year");
                $(".exptoyear").focus();
                return false;
            }
            if (validate_field("expprojects")) {
                alert("Please enter Key Projects/Assignments");
                $(".expprojects").focus();
                return false;
            }
        }


// validate each work experience fields
        if (validate_field("eduuni")) {
            alert("Please enter University/Institute");
            return false;
        }
        if (validate_field("educourse")) {
            alert("Please enter Course name");
            return false;
        }
        if (validate_field("eduuniyears")) {
            alert("Please enter Year of Completion");
            return false;
        }
        if (validate_field("eduGPA")) {
            alert("Please enter Grade/GPA");
            return false;
        }
    });

});

function validate_field(field_class) {
    var filed_fn = 0;
    $("." + field_class).each(function () {
        if ($(this).is(':visible')) {
            if ($(this).val() == "") {
                filed_fn = 1;
            } else {
                filed_fn = 0;
            }
        }
    });
    return filed_fn;
}

function validateemail(email) {
    var filed_fn = 0;
    var regex = /^.+@.+\..+$/;
    if (regex.test(email)) {
        filed_fn = 0;
    } else {
        filed_fn = 1;
    }
    return filed_fn;
}
