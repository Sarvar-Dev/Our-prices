const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.main-costs-value');


elsPaymentPeriodRadio.forEach(function(elPaymentPeriodRadio){
    elPaymentPeriodRadio.addEventListener("change",function(){
        const period = elPaymentPeriodRadio.value;

        if (period === 'annual'){
            elsPricingPlanValue.forEach(function (elPrice){
                elPrice.textContent = elPrice.closest(".prising-table").dataset.paymentAnnually;
            });
        }else{
            elsPricingPlanValue.forEach(function (elPrice){
                elPrice.textContent = elPrice.closest(".prising-table").dataset.paymentMonthly;
        });
    }
    });
});