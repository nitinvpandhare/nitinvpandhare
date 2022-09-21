function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      return false;
    }
  }
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

var staticBackdrop = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    keyboard: false
})

document.getElementById('heavyTable').classList.add('hide-table')
function showEnteredData(element) {
    var vnname = document.getElementById("textVehicalNumber").value;
    var taname = document.getElementById("textTariffAmount").value;
    var toll = document.getElementById("selectToll").value;
    var vehical = document.getElementById("selectVehical").value;
    var table = document.getElementById("vehicleInfo");
    var row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = vehical;
    cell2.innerHTML = vnname;
    cell3.innerHTML = new Date().toDateString();
    cell4.innerHTML = toll;
    cell5.innerHTML = taname;


    for (let index = 1; index <= 4; index++) {

        document.getElementById("textVehicalNumber").value = "";
        document.getElementById("textTariffAmount").value = "";
        document.getElementById("selectToll").value = "";
        document.getElementById("selectVehical").value = "";
    }
    myModal.hide();

}


function addData(data) {
    var tollName = document.getElementById("textTollName").value;

    var table = document.getElementById("heavyTableBody");
    var index = 0;
    let values = 0;
    let carJeepVan = "";
    let LCV = "";
    let truckBus = "";
    let heaveyVehical = "";

    for (i = 0; i < 4; i++) {
        var row = table.insertRow(0);
        index = index + 1;

        var selectVehical = document.getElementById("selectVehical" + index).value;
        var textSingalJourneyName = document.getElementById("textSingalJourneyName" + index).value;
        var textReturnJourneyName = document.getElementById("textReturnJourneyName" + index).value;

        textSingalJourneyName = parseInt(textSingalJourneyName);
        textReturnJourneyName = parseInt(textReturnJourneyName);
        if (!isNaN(textSingalJourneyName) && !isNaN(textReturnJourneyName)) {
            values = textSingalJourneyName + "/" + textReturnJourneyName;
        }
        if (isNaN(textReturnJourneyName)) {
            values = textSingalJourneyName;
        }
        if (isNaN(textSingalJourneyName)) {
            values = textReturnJourneyName;
        }

        if (selectVehical == "Car/Jeep/Van") {
            carJeepVan += values;

        }
        if (selectVehical == "LCV") {
            LCV += values;
        }
        if (selectVehical == "Truck/Bus") {
            truckBus += values;
        }
        if (selectVehical == "Heavey Vehical") {
            heaveyVehical += values;
        }
    }


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = tollName;
    cell2.innerHTML = carJeepVan;
    cell3.innerHTML = LCV
    cell4.innerHTML = truckBus;
    cell5.innerHTML = heaveyVehical;


    for (let index = 1; index <= 4; index++) {
        document.getElementById("textSingalJourneyName" + index).value = "";
        document.getElementById("textReturnJourneyName" + index).value = "";
        document.getElementById("selectVehical" + index).value = "";
        document.getElementById("textTollName").value = "";
    }
    staticBackdrop.hide();


}

function openTollsTable() {
    var tableElement = document.getElementById('heavyTable');
    tableElement.classList.remove('hide-table')
    var tableElement = document.getElementById('vehicleInfoTable');
    tableElement.classList.add('hide-table')

    document.getElementById('toToll').classList.add('hide-table')
    document.getElementById('backToToll').classList.remove('hide-table')
}

function backTollsTable() {
    var tableElement = document.getElementById('vehicleInfoTable');
    tableElement.classList.remove('hide-table')
    var tableElement = document.getElementById('heavyTable');
    tableElement.classList.add('hide-table')

    document.getElementById('toToll').classList.remove('hide-table')
    document.getElementById('backToToll').classList.add('hide-table')
}

