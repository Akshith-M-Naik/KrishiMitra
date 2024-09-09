document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    // Send payment data to server
    fetch('/pay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: amount,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('Investment completed');
        open("/farmerhome.html") 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
$(document).ready(function() {
    // Initialize datepicker
    $("#expiryDate").datepicker({
        dateFormat: "mm/yy",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        onClose: function(dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month option:selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year option:selected").val();
            $(this).datepicker('setDate', new Date(year, month, 1));
        },
        beforeShow: function(input, inst) {
            setTimeout(function() {
                inst.dpDiv.css({
                    top: 'auto',
                    left: 'auto',
                    marginLeft: '20px'
                });
            }, 0);
        }
    });

    // Ensure calendar pops up properly
    $('#expiryDate').click(function() {
        $(this).datepicker('show');
    });
});

